#!/bin/sh

set -eu

MESSAGE=""
NO_PUSH=0

usage() {
  cat <<'EOF'
Usage:
  npm run checkpoint
  npm run checkpoint -- --message "Describe the change"
  npm run checkpoint -- --no-push

Runs verification, shows the pending diff summary, then asks before staging,
committing, and pushing.
EOF
}

while [ "$#" -gt 0 ]; do
  case "$1" in
    -m|--message)
      shift
      if [ "$#" -eq 0 ]; then
        echo "Missing value for --message" >&2
        exit 2
      fi
      MESSAGE="$1"
      ;;
    --no-push)
      NO_PUSH=1
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      if [ -z "$MESSAGE" ]; then
        MESSAGE="$1"
      else
        echo "Unknown argument: $1" >&2
        usage >&2
        exit 2
      fi
      ;;
  esac
  shift
done

ROOT="$(git rev-parse --show-toplevel)"
cd "$ROOT"

echo "Checkpoint preflight"
echo "===================="
npm test
git diff --check

echo
echo "Current git status"
echo "=================="
git status --short --branch

if git diff --quiet && git diff --cached --quiet; then
  echo
  echo "Nothing to commit."
  exit 0
fi

echo
echo "Diff summary"
echo "============"
git diff --stat

if [ -z "$MESSAGE" ]; then
  printf "\nCommit message: "
  IFS= read -r MESSAGE
fi

if [ -z "$MESSAGE" ]; then
  echo "Aborted: commit message cannot be empty." >&2
  exit 1
fi

printf "\nStage all current changes and commit? [y/N] "
IFS= read -r CONFIRM_STAGE
case "$CONFIRM_STAGE" in
  y|Y|yes|YES)
    ;;
  *)
    echo "Aborted before staging."
    exit 0
    ;;
esac

git add -A

if git diff --cached --quiet; then
  echo "No staged changes after git add."
  exit 1
fi

echo
echo "Staged changes"
echo "=============="
git status --short

git commit -m "$MESSAGE"

if [ "$NO_PUSH" -eq 1 ]; then
  echo
  echo "Committed locally. Skipping push because --no-push was set."
  exit 0
fi

printf "\nPush current branch now? [y/N] "
IFS= read -r CONFIRM_PUSH
case "$CONFIRM_PUSH" in
  y|Y|yes|YES)
    ;;
  *)
    echo "Committed locally. Push skipped."
    exit 0
    ;;
esac

BRANCH="$(git branch --show-current)"
if [ -z "$BRANCH" ]; then
  echo "Cannot push from a detached HEAD." >&2
  exit 1
fi

if git rev-parse --abbrev-ref --symbolic-full-name '@{u}' >/dev/null 2>&1; then
  git push
else
  git push -u origin "$BRANCH"
fi
