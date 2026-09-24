# Netflix Auto Skip Intro

A tiny Chrome extension (Manifest V3) that lets you binge Netflix without touching your computer.

- Automatically clicks **Skip Intro**, **Skip Recap** and **Next Episode** (uses `data-uia` attributes, so it works in any language).
- Optional: jumps ahead a fixed number of seconds at the start of every episode, for shows that don't have a skip button.

No tracking, no network requests, no remote code. The whole extension is under 100 lines, read it yourself.

## Install

### From a release zip

1. Download `netflix-auto-skip-intro-vX.Y.Z.zip` from the [latest release](https://github.com/oMatheusmol/netflix-auto-skip-intro/releases/latest) and unzip it.
2. Open `chrome://extensions` and turn on **Developer mode**.
3. Click **Load unpacked** and select the unzipped folder.
4. Configure it from the extension icon.

### From source

Clone this repo and load the folder the same way (step 2 onward).

## Privacy

- No tracking, no analytics, no accounts.
- No network requests. The extension never talks to any server.
- No remote code.
- The only permission is `storage`, used to remember your settings.

## Files

- `content.js`: clicks the buttons and detects episode changes.
- `page.js`: runs in the page context and seeks through Netflix's internal player API (setting `<video>.currentTime` directly triggers error M7375).
- `popup.html` / `popup.js`: settings.
- `icons/`: extension icon (SVG source + PNG sizes).

If Netflix changes its selectors, update `SELECTORS` in `content.js`.

---

Not affiliated with or endorsed by Netflix.
