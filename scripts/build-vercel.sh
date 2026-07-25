#!/bin/sh
set -eu

rm -rf .notes-source
git clone \
  --depth 1 \
  --branch master \
  https://github.com/piper-of-dawn/KumarsNotes.git \
  .notes-source

NOTES_SOURCE=.notes-source .venv/bin/python scripts/sync-notes.py
.venv/bin/mkdocs build \
  --config-file pages/mkdocs.yml \
  --site-dir public
