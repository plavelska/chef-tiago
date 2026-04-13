#!/bin/sh

set -eu

PORT="${1:-8000}"

echo "Serving /Users/lolalu/development/chef-tiago at http://127.0.0.1:${PORT}"
exec python3 -m http.server "${PORT}" --bind 127.0.0.1
