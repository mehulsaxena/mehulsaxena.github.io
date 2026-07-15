---
name: verify
description: Build, serve, and visually verify this portfolio site (CRA + GitHub Pages)
---

# Verifying mehulsaxena.github.io

React 16 + CRA portfolio. Surface is the browser; there is no test suite worth running.

## Build & serve

```bash
export PATH="/opt/homebrew/bin:$PATH"   # node/npm are Homebrew-installed
npm install
npm run build                            # runs fetch.js first; skips GitHub/Medium without env vars
cd build && python3 -m http.server 8642 &
```

To exercise the Open Source section locally, stub `build/profile.json` with the GitHub GraphQL shape:
`{"data":{"user":{"name","bio","avatarUrl","location","isHireable","pinnedItems":{"edges":[{"node":{"id","name","url","description","primaryLanguage":{"name","color"},"stargazers":{"totalCount"},"forkCount","diskUsage"}}]}}}}`
Without it the section (and the GitHub profile contact card) gracefully disappears — that's designed behavior, with a console.error.

## Drive & capture

Headless Chrome works well; `--virtual-time-budget` lets the splash screen, scroll reveals, and typewriter finish before capture:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless --disable-gpu \
  --window-size=1440,14500 --virtual-time-budget=15000 --screenshot=/tmp/out.png http://localhost:8642
```

- Mobile check: `--window-size=375,20000`. Known pre-existing issue: slight right-edge clipping at 375px (also on the live site) — not a regression signal.
- Reduced motion probe: add `--force-prefers-reduced-motion`; everything must render fully visible with no animation.
- A very tall window puts everything in the viewport, so all IntersectionObserver reveals fire — good for capture, but it means you're not testing scroll-triggering itself.
- `sips --cropOffset Y 0 -c H W file.png` crops in place for zooming into regions (offsets are unreliable for very large crops — prefer smaller windows).
- The visitor counter (Footer) calls counterapi.dev and silently renders nothing if unreachable — its absence in local screenshots is normal.

## Gotchas

- `npm`/`gh` are NOT on the default shell PATH — always prepend `/opt/homebrew/bin`.
- `npm run format` before committing; CI has a prettier check-format gate.
- Deploys: push to master → GitHub Actions builds and publishes to `gh-pages`. Verify live at https://mehulsaxena.github.io after the run.
