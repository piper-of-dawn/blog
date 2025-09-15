#!/usr/bin/env sh
set -eu

# Find repo root (where package.json lives) starting from current dir
START_DIR=$(pwd)
SEARCH_DIR="$START_DIR"
MAX_UP=5
COUNT=0
while [ ! -f "$SEARCH_DIR/package.json" ] && [ $COUNT -lt $MAX_UP ]; do
  SEARCH_DIR=$(dirname "$SEARCH_DIR")
  COUNT=$((COUNT + 1))
done
if [ ! -f "$SEARCH_DIR/package.json" ]; then
  echo "Error: Could not locate repo root (package.json) from build directory: $START_DIR" >&2
  exit 1
fi
cd "$SEARCH_DIR"

# Use python -m mkdocs for better compatibility in containerized environments
if [ -x .venv/bin/mkdocs ]; then
  MKDOCS=.venv/bin/mkdocs
else
  MKDOCS="python3 -m mkdocs"
fi

echo "Using mkdocs command: $MKDOCS"

# Build to ./site using the Vercel-specific config
$MKDOCS build -f pages/mkdocs.vercel.yml -d site

echo "MkDocs build complete. Output in ./site"
