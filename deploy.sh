#!/usr/bin/env bash
# Deploy Sutrava website to GitHub Pages (gh-pages branch)
# Live URL: https://vishal2050.github.io/SutravaSoftwareSolution/
set -euo pipefail

REPO_OWNER="vishal2050"
REPO_NAME="SutravaSoftwareSolution"
REMOTE_URL="git@github.com:${REPO_OWNER}/${REPO_NAME}.git"
SITE_URL="https://${REPO_OWNER}.github.io/${REPO_NAME}"
BRANCH="gh-pages"
OUT_DIR="out"

ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

echo "==> Installing dependencies (if needed)"
if [[ ! -d node_modules ]]; then
  npm install
fi

echo "==> Building static export for GitHub Pages"
export GITHUB_PAGES=true
export NEXT_PUBLIC_SITE_URL="$SITE_URL"
npm run build

if [[ ! -d "$OUT_DIR" ]]; then
  echo "ERROR: Build did not produce ./${OUT_DIR}"
  exit 1
fi

# Prevent Jekyll from ignoring _next assets on GitHub Pages
touch "${OUT_DIR}/.nojekyll"

echo "==> Publishing ./${OUT_DIR} to ${BRANCH}"
TMP_DIR="$(mktemp -d)"
cleanup() {
  rm -rf "$TMP_DIR"
}
trap cleanup EXIT

cp -R "${OUT_DIR}/." "$TMP_DIR/"
cd "$TMP_DIR"

git init
git checkout -b "$BRANCH"
git add -A
git -c user.name="Sutrava Deploy" -c user.email="deploy@sutrava.local" commit -m "Deploy site to GitHub Pages $(date -u +%Y-%m-%dT%H:%M:%SZ)"
git push -f "$REMOTE_URL" "$BRANCH"

echo ""
echo "==> Deploy complete"
echo "    Repo:   ${REMOTE_URL}"
echo "    Branch: ${BRANCH}"
echo "    URL:    ${SITE_URL}/"
echo ""
echo "If the site 404s, enable GitHub Pages:"
echo "  Settings → Pages → Source: Deploy from a branch → Branch: gh-pages → / (root)"
