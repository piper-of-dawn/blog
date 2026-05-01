import re
from typing import Dict, List, Optional, Tuple

from markdown.extensions import Extension
from markdown.preprocessors import Preprocessor

CALLOUT_RE = re.compile(
    r"^> \[!(?P<kind>[^\]]+)\](?P<fold>[+-]?)(?:\s*(?P<title>.*))?$"
)
QUOTE_LINE_RE = re.compile(r"^>(?: ?(.*))?$")

TYPE_MAP: Dict[str, str] = {
    "abstract": "abstract",
    "attention": "warning",
    "bug": "danger",
    "caution": "warning",
    "check": "success",
    "cite": "quote",
    "danger": "danger",
    "definition": "info",
    "done": "success",
    "error": "danger",
    "example": "example",
    "fail": "danger",
    "failure": "danger",
    "faq": "question",
    "help": "question",
    "hint": "tip",
    "important": "warning",
    "info": "info",
    "missing": "warning",
    "note": "note",
    "question": "question",
    "quote": "quote",
    "success": "success",
    "summary": "abstract",
    "tip": "tip",
    "todo": "todo",
    "tldr": "abstract",
    "warning": "warning",
    "warn": "warning",
}


def canonicalize_kind(raw_kind: str) -> Tuple[str, str]:
    normalized = raw_kind.strip().lower().replace(";", "").replace(" ", "")
    mapped = TYPE_MAP.get(normalized, "info")
    label = raw_kind.strip() or "Note"
    return mapped, label


class ObsidianCalloutPreprocessor(Preprocessor):
    def run(self, lines: List[str]) -> List[str]:
        converted: List[str] = []
        i = 0

        while i < len(lines):
            match = CALLOUT_RE.match(lines[i])
            if not match:
                converted.append(lines[i])
                i += 1
                continue

            block, i = self._convert_callout(lines, i, match)
            converted.extend(block)

        return converted

    def _convert_callout(
        self,
        lines: List[str],
        start: int,
        match: re.Match[str],
    ) -> Tuple[List[str], int]:
        admonition_type, fallback_title = canonicalize_kind(match.group("kind"))
        fold = match.group("fold") or ""
        explicit_title = (match.group("title") or "").strip()
        title = explicit_title or fallback_title.title()

        marker = "!!!"
        if fold == "-":
            marker = "???"
        elif fold == "+":
            marker = "???+"

        block = [f'{marker} {admonition_type} "{title}"']
        i = start + 1
        body_started = False

        while i < len(lines):
            quote_match = QUOTE_LINE_RE.match(lines[i])
            if not quote_match:
                break

            content = quote_match.group(1) or ""
            if content or body_started:
                block.append(f"    {content}" if content else "")
                body_started = True
            i += 1

        if len(block) == 1:
            block.append("")

        return block, i


class ObsidianCalloutsExtension(Extension):
    def extendMarkdown(self, md):
        md.preprocessors.register(
            ObsidianCalloutPreprocessor(md),
            "obsidian_callouts",
            175,
        )


def makeExtension(**kwargs):
    return ObsidianCalloutsExtension(**kwargs)
