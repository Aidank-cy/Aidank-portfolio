#!/usr/bin/env bash
set -euo pipefail

if [ ! -f package.json ]; then
  echo "package.json not found; run this hook from the repository root."
  exit 1
fi

should_build=false

for path in "$@"; do
  case "$path" in
    app/*|config/*|lib/github.ts|next.config.ts|.github/workflows/*)
      should_build=true
      ;;
  esac
done

echo "Running lint..."
npm run lint

echo "Running typecheck..."
npm run typecheck

if [ "$should_build" = true ]; then
  echo "Route, config, workflow, or GitHub data files changed; running build..."
  npm run build
fi
