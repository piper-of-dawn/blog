"""
Processor to preserve single newlines in Markdown as hard line breaks.

This appends two trailing spaces to the end of each non-empty line that is not
inside a fenced code block. In CommonMark, two spaces before a newline forces a
hard line break (<br/>). This helps when source notes contain intentional
single-line breaks that would otherwise be rendered as soft breaks (spaces).

Design goals:
- Avoid touching fenced code blocks (``` or ~~~).
- Keep existing blank lines unchanged.
- Respect existing hard breaks (lines already ending with two+ spaces).
"""

from __future__ import annotations

import re
from . import MarkdownProcessor


_FENCE_RE = re.compile(r"^(?:\s{0,3})(`{3,}|~{3,})")
_HAS_HARDBREAK_TRAILING_SPACES = re.compile(r"[ ]{2,}$")


class HardLineBreaksProcessor(MarkdownProcessor):
    def name(self) -> str:
        return "Hard Line Breaks Preserver"

    def process(self, content: str) -> str:
        lines = content.splitlines()
        out: list[str] = []

        in_fence = False
        fence_marker = None  # type: ignore[var-annotated]

        for line in lines:
            stripped = line.lstrip()

            # Toggle fenced code block state on opening/closing fences
            m = _FENCE_RE.match(stripped)
            if m:
                marker = m.group(1)[0] * 3  # normalize to ``` or ~~~
                if not in_fence:
                    in_fence = True
                    fence_marker = marker
                else:
                    # Close only if matching marker (``` closes ```, ~~~ closes ~~~)
                    if marker[0] == (fence_marker or "")[0]:
                        in_fence = False
                        fence_marker = None
                out.append(line)
                continue

            if in_fence:
                out.append(line)
                continue

            # Preserve blank lines
            if line == "":
                out.append(line)
                continue

            # Respect existing hard-break trailing spaces
            if _HAS_HARDBREAK_TRAILING_SPACES.search(line):
                out.append(line)
            else:
                out.append(line + "  ")

        return "\n".join(out) + "\n"

