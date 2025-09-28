"""
Processor for converting Obsidian-style wikilinks and embeds to Markdown/MkDocs links.

Supported patterns:
- [[Note Title]] → [Note Title](relative/path/Note Title.md)
- [[Note Title|Alias]] → [Alias](relative/path/Note Title.md)
- [[Note Title#Heading]] → [Note Title](relative/path/Note Title.md#heading)
- [[#Heading]] → [Heading](#heading)
- ![[image.png]] → ![image.png](relative/path/image.png)
"""

from __future__ import annotations

import os
import re
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Dict, List, Optional, Tuple

from . import MarkdownProcessor


def _slugify(text: str) -> str:
    # Basic slugification similar to MkDocs: lower, remove accents, alnum+spaces, spaces→-
    text = unicodedata.normalize("NFKD", text).encode("ascii", "ignore").decode("ascii")
    text = text.strip().lower()
    out = []
    for ch in text:
        if ch.isalnum():
            out.append(ch)
        elif ch in [" ", "-", "_"]:
            out.append("-")
        # drop other punctuation
    slug = re.sub(r"-+", "-", "".join(out)).strip("-")
    return slug


@dataclass
class _Index:
    by_basename: Dict[str, List[Path]]
    by_asset: Dict[str, List[Path]]


class ObsidianLinksProcessor(MarkdownProcessor):
    def __init__(self) -> None:
        self._cached_root: Optional[Path] = None
        self._index: Optional[_Index] = None

    def name(self) -> str:
        return "Obsidian Wikilinks Converter"

    def _build_index(self, docs_root: Path) -> _Index:
        by_basename: Dict[str, List[Path]] = {}
        by_asset: Dict[str, List[Path]] = {}

        for p in docs_root.rglob("*"):
            if p.is_dir():
                continue
            name = p.name
            base, ext = os.path.splitext(name)
            if ext.lower() == ".md":
                by_basename.setdefault(base, []).append(p)
            else:
                by_asset.setdefault(name, []).append(p)

        return _Index(by_basename=by_basename, by_asset=by_asset)

    def _ensure_index(self, docs_root: Path) -> None:
        if self._cached_root != docs_root:
            self._index = self._build_index(docs_root)
            self._cached_root = docs_root

    def process(self, content: str) -> str:
        # Fallback when no path context is provided: leave content unchanged
        return content

    def process_with_path(self, content: str, file_path: Path, docs_root: Path) -> str:
        self._ensure_index(docs_root)
        assert self._index is not None

        current_dir = file_path.parent

        pattern = re.compile(r"(!?)\[\[([^\]]+)\]\]")

        def replace(m: re.Match[str]) -> str:
            embed = m.group(1) == "!"
            inner = m.group(2).strip()

            # Split alias
            target_part, alias = (inner.split("|", 1) + [None])[:2] if "|" in inner else (inner, None)
            target_part = target_part.strip()

            # Only-anchor link (current file)
            if target_part.startswith("#"):
                heading = target_part[1:].strip()
                anchor = _slugify(heading)
                text = alias or heading
                return f"[{text}](#{anchor})"

            # Split page and optional heading
            if "#" in target_part:
                page_part, heading = target_part.split("#", 1)
                page_part, heading = page_part.strip(), heading.strip()
            else:
                page_part, heading = target_part, None

            # If it's an image or other asset reference (has extension), try assets index
            base, ext = os.path.splitext(page_part)
            if ext and ext.lower() != ".md":
                candidates = self._index.by_asset.get(page_part)
                if not candidates:
                    return m.group(0)  # leave unchanged if unresolved
                target = candidates[0]
                rel = Path(os.path.relpath(target, start=current_dir)).as_posix()
                alt = alias or page_part
                if embed:
                    return f"![{alt}]({rel})"
                else:
                    return f"[{alt}]({rel})"

            # Resolve markdown page
            candidates = self._index.by_basename.get(page_part)
            if not candidates:
                return m.group(0)  # unresolved, keep as-is
            target_md = candidates[0]
            rel = Path(os.path.relpath(target_md, start=current_dir)).as_posix()

            # Ensure .md extension present in link
            if not rel.endswith(".md"):
                rel = rel + ".md"

            if heading:
                rel += f"#{_slugify(heading)}"

            text = alias or page_part

            if embed:
                # Embedding a note is not supported; fall back to a standard link
                return f"[{text}]({rel})"
            else:
                return f"[{text}]({rel})"

        return pattern.sub(replace, content)

