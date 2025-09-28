#!/usr/bin/env sh
set -eu

# Usage: sh vercel.sh <install|build|dev>

ensure_venv() {
  VENV_DIR="$1"
  # Pick a base python
  if command -v python3 >/dev/null 2>&1; then
    BASE_PY=$(command -v python3)
  elif command -v python >/dev/null 2>&1; then
    BASE_PY=$(command -v python)
  else
    echo "No python interpreter found (python3/python)." >&2
    return 1
  fi

  if [ ! -x "$VENV_DIR/bin/python" ]; then
    "$BASE_PY" -m venv "$VENV_DIR" || "$BASE_PY" -m venv --clear "$VENV_DIR"
  fi

  PY="$VENV_DIR/bin/python"

  # Ensure pip exists
  if ! "$PY" -m pip --version >/dev/null 2>&1; then
    "$PY" -m ensurepip --upgrade >/dev/null 2>&1 || true
  fi

  # Upgrade core tools and install deps (send logs to stderr so stdout only prints path)
  "$PY" -m pip install --upgrade pip setuptools wheel 1>&2
  "$PY" -m pip install -r requirements.txt . 1>&2

  echo "$PY"
}

cmd_install() {
  # Dedicated build venv to keep installs isolated
  PY_BIN=$(ensure_venv .vercel_venv)
  echo "Python used: $PY_BIN"
  "$PY_BIN" --version
  "$PY_BIN" -m pip --version
}

cmd_build() {
  # Prefer build venv, then project venv, then system python
  if [ -x .vercel_venv/bin/python ]; then
    PY=.vercel_venv/bin/python
  elif [ -x .venv/bin/python ]; then
    PY=.venv/bin/python
  elif command -v python3 >/dev/null 2>&1; then
    PY=$(command -v python3)
  else
    PY=$(command -v python)
  fi
  echo "Using Python: $PY"

  # Preprocess markdown (best-effort)
  echo "Preprocessing markdown (Obsidian -> MkDocs) ..."
  $PY scripts/blog_automation.py --process-only --target "$(pwd)/pages/docs" -v || true
  # Build site using mkdocs binary if present, else module
  if [ -x "$(dirname "$PY")/mkdocs" ]; then
    echo "Using mkdocs: $(dirname "$PY")/mkdocs"
    "$(dirname "$PY")/mkdocs" build -f pages/mkdocs.vercel.yml -d site
  else
    echo "Using mkdocs: $PY -m mkdocs"
    "$PY" -m mkdocs build -f pages/mkdocs.vercel.yml -d site
  fi
}

cmd_dev() {
  # Local dev uses a project venv to avoid polluting build venv
  PY_BIN=$(ensure_venv .venv)
  ADDR="127.0.0.1:${PORT:-8080}"
  echo "Dev server on $ADDR"
  if [ -x "$(dirname "$PY_BIN")/mkdocs" ]; then
    exec "$(dirname "$PY_BIN")/mkdocs" serve -f pages/mkdocs.vercel.yml -a "$ADDR"
  else
    exec "$PY_BIN" -m mkdocs serve -f pages/mkdocs.vercel.yml -a "$ADDR"
  fi
}

case "${1:-}" in
  install) cmd_install ;;
  build)   cmd_build ;;
  dev)     cmd_dev ;;
  *) echo "Usage: $0 <install|build|dev>" >&2; exit 2 ;;
esac
