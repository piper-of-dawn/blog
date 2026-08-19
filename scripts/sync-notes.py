#!/usr/bin/env python3
"""Mirror the local Obsidian vault into MkDocs' tracked docs directory.

The source vault is never modified.  The generated copy is intentionally
tracked so that Vercel builds from the same content that was reviewed locally.
"""

from __future__ import annotations

import os
import re
import shutil
from pathlib import Path
from urllib.parse import quote


REPOSITORY = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = Path(
    "/home/piperofthedawn/Insync/kumarshan25@gmail.com/Google Drive/KumarsNotes"
)
DESTINATION = REPOSITORY / "pages" / "docs"
EXCLUDED_DIRECTORIES = {
    ".agents",
    ".diag",
    ".git",
    ".obsidian",
    ".trash",
    "Archives",
    "Diary",
}
EXCLUDED_FILES = {"AGENT.md", "AGENTS.md"}
OBSIDIAN_IMAGE = re.compile(r"!\[\[(?P<target>[^]|]+)(?:\|(?P<label>[^]]+))?\]\]")
IMAGE_EXTENSIONS = {".avif", ".gif", ".jpeg", ".jpg", ".png", ".svg", ".webp"}


def should_copy(path: Path, source: Path) -> bool:
    relative = path.relative_to(source)
    return not (
        any(part in EXCLUDED_DIRECTORIES or part.startswith(".") for part in relative.parts)
        or path.name in EXCLUDED_FILES
    )


SOURCE = Path(os.environ.get("NOTES_SOURCE", DEFAULT_SOURCE)).expanduser()


def rewrite_obsidian_images(
    markdown: str,
    note: Path,
    source: Path,
    assets: dict[str, Path],
) -> str:
    """Turn Obsidian image embeds into paths that MkDocs can publish."""

    def replace(match: re.Match[str]) -> str:
        target = match.group("target").strip()
        if Path(target).suffix.lower() not in IMAGE_EXTENSIONS:
            return match.group(0)

        asset = source / target
        if not asset.is_file():
            asset = assets.get(Path(target).name, asset)
        if not asset.is_file():
            return match.group(0)

        relative = os.path.relpath(asset, note.parent)
        url = quote(Path(relative).as_posix(), safe="/")
        label = (match.group("label") or Path(target).stem).strip()
        return f"![{label}]({url})"

    return OBSIDIAN_IMAGE.sub(replace, markdown)


def main() -> None:
    if not SOURCE.is_dir():
        raise SystemExit(f"Notes source does not exist: {SOURCE}")

    if DESTINATION.exists():
        shutil.rmtree(DESTINATION)
    DESTINATION.mkdir(parents=True)

    source_files = [
        path
        for path in SOURCE.rglob("*")
        if path.is_file() and should_copy(path, SOURCE)
    ]
    assets = {
        path.name: path
        for path in source_files
        if path.suffix.lower() in IMAGE_EXTENSIONS
    }

    copied = 0
    for source_file in source_files:
        destination_file = DESTINATION / source_file.relative_to(SOURCE)
        destination_file.parent.mkdir(parents=True, exist_ok=True)
        if source_file.suffix.lower() == ".md":
            markdown = source_file.read_text(encoding="utf-8")
            markdown = rewrite_obsidian_images(
                markdown,
                source_file,
                SOURCE,
                assets,
            )
            destination_file.write_text(markdown, encoding="utf-8")
        else:
            shutil.copy2(source_file, destination_file)
        copied += 1

    print(f"Synced {copied} files from {SOURCE} to {DESTINATION}")


if __name__ == "__main__":
    main()
