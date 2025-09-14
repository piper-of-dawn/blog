#!/usr/bin/env bash
set -euo pipefail

# Find repo root (where package.json lives) starting from current dir
MAX_UP=4
count=0
while [[ ! -f package.json && $count -lt $MAX_UP ]]; do
  cd .. || exit 1
  count=$((count+1))
done

if [[ ! -f package.json ]]; then
  echo "Error: Could not locate repo root (package.json) from build directory" >&2
  exit 1
fi

# Prefer vendored mkdocs from .venv if present, else rely on system mkdocs
if [[ -x .venv/bin/mkdocs ]]; then
  MKDOCS=.venv/bin/mkdocs
else
  MKDOCS=mkdocs
fi

echo "Using mkdocs at: $(command -v "$MKDOCS" || echo "$MKDOCS")"

# Build to ./site using the Vercel-specific config
"$MKDOCS" build -f pages/mkdocs.vercel.yml -d "$(pwd)/site"

echo "MkDocs build complete. Output in ./site"
