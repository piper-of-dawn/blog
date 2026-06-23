#!/usr/bin/env python3
"""Mirror the local Obsidian vault into MkDocs' tracked docs directory.

The source vault is never modified.  The generated copy is intentionally
tracked so that Vercel builds from the same content that was reviewed locally.
"""

from __future__ import annotations

import os
import shutil
from pathlib import Path


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


def should_copy(path: Path) -> bool:
    relative = path.relative_to(SOURCE)
    return not (
        any(part in EXCLUDED_DIRECTORIES or part.startswith(".") for part in relative.parts)
        or path.name in EXCLUDED_FILES
    )


SOURCE = Path(os.environ.get("NOTES_SOURCE", DEFAULT_SOURCE)).expanduser()


def main() -> None:
    if not SOURCE.is_dir():
        raise SystemExit(f"Notes source does not exist: {SOURCE}")

    if DESTINATION.exists():
        shutil.rmtree(DESTINATION)
    DESTINATION.mkdir(parents=True)

    copied = 0
    for source_file in SOURCE.rglob("*"):
        if not source_file.is_file() or not should_copy(source_file):
            continue
        destination_file = DESTINATION / source_file.relative_to(SOURCE)
        destination_file.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_file, destination_file)
        copied += 1

    print(f"Synced {copied} files from {SOURCE} to {DESTINATION}")


if __name__ == "__main__":
    main()
