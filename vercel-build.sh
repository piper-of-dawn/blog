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

# Use the same Python executable that pip uses
PYTHON_EXEC=$(which python3 || which python)
echo "Using Python: $PYTHON_EXEC"

# Ensure pip is up to date and install local theme/plugins so mkdocs can resolve them
echo "Upgrading pip and installing local package..."
$PYTHON_EXEC -m pip install --upgrade pip
# Reinstall requirements in case install step was skipped, then install local package (this repo)
$PYTHON_EXEC -m pip install -r requirements.txt .

# Use python -m mkdocs for better compatibility in containerized environments
if [ -x .venv/bin/mkdocs ]; then
  MKDOCS=.venv/bin/mkdocs
else
  MKDOCS="$PYTHON_EXEC -m mkdocs"
fi

echo "Using mkdocs command: $MKDOCS"

# Build to ./site using the Vercel-specific config
$MKDOCS build -f pages/mkdocs.vercel.yml -d site

echo "MkDocs build complete. Output in ./site"
