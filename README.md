# Netflix Auto Skip Intro

A tiny Chrome extension (Manifest V3) that lets you binge Netflix without touching your computer.

- Automatically clicks **Skip Intro**, **Skip Recap** and **Next Episode** (uses `data-uia` attributes, so it works in any language).
- Optional: jumps ahead a fixed number of seconds at the start of every episode, for shows that don't have a skip button.

No tracking, no network requests, no remote code. The whole extension is under 100 lines, read it yourself.

## Install (developer mode)

1. Open `chrome://extensions` and turn on **Developer mode**.
2. Click **Load unpacked** and select this folder.
3. Configure it from the extension icon.

## Files

- `content.js`: clicks the buttons and detects episode changes.
- `page.js`: runs in the page context and seeks through Netflix's internal player API (setting `<video>.currentTime` directly triggers error M7375).
- `popup.html` / `popup.js`: settings.

If Netflix changes its selectors, update `SELECTORS` in `content.js`.

---

Not affiliated with or endorsed by Netflix.
