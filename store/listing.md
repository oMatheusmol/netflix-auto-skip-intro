# Chrome Web Store listing

Texts ready to paste into the Developer Dashboard.

## Store listing

**Name:** Netflix Auto Skip Intro

**Summary (132 chars max):**
Automatically clicks Skip Intro, Skip Recap and Next Episode on Netflix. No tracking, no network.

**Category:** Entertainment

**Language:** English

**Description:**

Binge Netflix without touching your computer.

Netflix Auto Skip Intro automatically clicks the "Skip Intro", "Skip Recap" and "Next Episode" buttons the moment they appear in the Netflix player. It works in any language because it targets the player's internal button identifiers, not the button text.

Optional: jump ahead a fixed number of seconds at the start of every episode, for shows that don't offer a skip button.

Privacy
• No tracking, no analytics, no accounts.
• No network requests. The extension never talks to any server.
• No remote code. Everything ships in the package.
• The only permission is "storage", used to remember your settings.

The whole extension is under 200 lines. The source is public: https://github.com/oMatheusmol/netflix-auto-skip-intro

Netflix Auto Skip Intro is an independent project. It is not affiliated with, endorsed by, or sponsored by Netflix, Inc. "Netflix" is a trademark of Netflix, Inc.

## Screenshots

- `store/screenshot-1280x800.png`

## Privacy tab

**Single purpose description:**
Automatically clicks the skip buttons (Skip Intro, Skip Recap, Next Episode) in the Netflix web player and optionally seeks past the first N seconds of each episode.

**Permission justification, `storage`:**
Stores the user's three settings (auto-click on/off, skip-ahead on/off, number of seconds) so they persist between sessions and sync across the user's Chrome profile.

**Host permission justification, `https://www.netflix.com/*`:**
The content script must run on Netflix pages to find and click the player's skip buttons and to call the player's seek API. It is not injected anywhere else.

**Remote code:** No, I am not using remote code.

**Data usage:** the extension does not collect or transmit any user data. Tick nothing in the data collection list and certify the three disclosures.

**Privacy policy URL:** not required when no data is collected, but if the form insists, point to the README:
https://github.com/oMatheusmol/netflix-auto-skip-intro#privacy
