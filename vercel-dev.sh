#!/usr/bin/env sh
set -eu

# Prefer project-local virtualenv for isolation
if [ -x .venv/bin/python ]; then
  PY=.venv/bin/python
else
  # Create a venv if missing
  if command -v python3 >/dev/null 2>&1; then
    PY_SYSTEM=$(command -v python3)
  elif command -v python >/dev/null 2>&1; then
    PY_SYSTEM=$(command -v python)
  else
    echo "No python interpreter found (python3/python)." >&2
    exit 1
  fi
  "$PY_SYSTEM" -m venv .venv || "$PY_SYSTEM" -m venv --clear .venv
  PY=.venv/bin/python
fi

# Ensure pip exists in the venv; bootstrap if missing
if ! "$PY" -m pip --version >/dev/null 2>&1; then
  # Try ensurepip first
  if "$PY" -m ensurepip --upgrade >/dev/null 2>&1; then
    :
  else
    # On newer Python, upgrade-deps can populate pip
    if command -v "$PY_SYSTEM" >/dev/null 2>&1; then
      "$PY_SYSTEM" -m venv --upgrade-deps .venv >/dev/null 2>&1 || true
    fi
  fi
fi

# Install/upgrade pip, then deps + local package
"$PY" -m pip install --upgrade pip setuptools wheel
"$PY" -m pip install -r requirements.txt .

# Run mkdocs dev server on Vercel-provided port
ADDR="127.0.0.1:${PORT:-8080}"
exec "$PY" -m mkdocs serve -f pages/mkdocs.vercel.yml -a "$ADDR"
