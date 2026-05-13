#!/usr/bin/env bash
set -euo pipefail

staged_files="$(git diff --cached --name-only)"

if [ -z "$staged_files" ]; then
  echo "No staged files."
  exit 0
fi

if printf '%s\n' "$staged_files" | rg -q '(^|/)\.DS_Store$'; then
  echo "Refusing commit: remove staged .DS_Store files first."
  exit 1
fi

if printf '%s\n' "$staged_files" | rg -q '^(\.next/|out/)'; then
  echo "Refusing commit: generated files from .next/ or out/ are staged."
  exit 1
fi

echo "Running lint..."
npm run lint

echo "Running typecheck..."
npm run typecheck

if printf '%s\n' "$staged_files" | rg -q '^(app/|config/|lib/|next\.config\.ts|\.github/workflows/)'; then
  echo "Source, config, or workflow files are staged; running build..."
  npm run build
fi
