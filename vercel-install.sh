#!/usr/bin/env sh
set -eu

# Create or reuse a dedicated venv for Vercel builds
if [ -x .vercel_venv/bin/python ]; then
  PY=.vercel_venv/bin/python
else
  BASE_PY=$(command -v python3 || command -v python || true)
  if [ -z "${BASE_PY:-}" ]; then
    echo "No python interpreter found (python3/python)." >&2
    exit 1
  fi
  "$BASE_PY" -m venv .vercel_venv || "$BASE_PY" -m venv --clear .vercel_venv
  PY=.vercel_venv/bin/python
fi

# Ensure pip is available inside the venv
if ! "$PY" -m pip --version >/dev/null 2>&1; then
  "$PY" -m ensurepip --upgrade >/dev/null 2>&1 || true
fi

# Upgrade core packaging tools and install deps + local package
"$PY" -m pip install --upgrade pip setuptools wheel
"$PY" -m pip install -r requirements.txt .

echo "Python used: $PY"
"$PY" --version
"$PY" -m pip --version

