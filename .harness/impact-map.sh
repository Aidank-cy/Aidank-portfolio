#!/usr/bin/env bash
set -euo pipefail

if [ "$#" -lt 1 ]; then
  echo "Usage: ./.harness/impact-map.sh <pattern>"
  exit 1
fi

pattern="$1"

rg -n --hidden \
  --glob '!node_modules/**' \
  --glob '!.git/**' \
  --glob '!.next/**' \
  --glob '!out/**' \
  "$pattern" \
  app components config lib .project-rules .github skills hooks .harness
