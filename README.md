# PM download page

Public, static GitHub Pages site for PM: in-game art, Download PM and a bottom-right Discord button.
PM is a shared online exploration world for Linux and Windows.
No sign-in, third-party scripts, or build step is required.

The background is a silent, 10-minute video: a first-person view of the game's
stars making one complete, slow turn. It contains no character, terrain, moon,
or interface. The rotation returns to its starting orientation at the loop
boundary. WebM and H.264 MP4 versions support desktop and mobile browsers.
The page fills one viewport without scrolling in portrait or landscape.
The Discord button uses the same Atari font and opens the [PM server](https://discord.gg/j3BJHKeQuq)
in a new tab, including when the page is framed by pmgame.app.

`background.js` loads the video only when motion is allowed and the page is
visible. A still frame remains visible while it loads, when autoplay is blocked,
or when the visitor requests reduced motion. Playback pauses in hidden tabs.

## Hosting

Publish this directory to the `main` branch root of `xPollutionx/PM`.
In repository Settings → Pages, select **Deploy from a branch**, **main**, **/ (root)**.
The public address is https://pmgame.app/, which displays https://xpollutionx.github.io/PM/ in a frame.
Relative asset paths also support local previews.

## Downloads

Attach these exact filenames to each published GitHub Release:

- `PM-linux-x86_64.zip`
- `PM-windows-x86_64.zip`
- `release.json`
- `SHA256SUMS`

Mark the current demo as the latest release. The download link uses GitHub's
`releases/latest/download/` URL, so a new latest release updates downloads
without editing the page. Drafts and prereleases are not selected by this URL.
Use a fresh tag matching the identity embedded by `scripts/package_demo.py` and
publish all four assets together. The local update implementation checks once at
startup and receives release notifications from the server, without interval polling.
A new release gives a five-minute quit warning; relaunch installs the verified update.
Older builds need one upgrade before they can display these warnings, and downloads
from before the updater need that upgrade manually.

The current public release is `demo-2026.11.12-microphone-recovery`, including menu-only microphone
controls, shared environment state and pushed release notifications.

The link detects Windows and Linux devices and selects their matching download.
On iPhone/iPad, tapping it opens an iOS availability message: PM is not developed
for iOS, and there are currently no plans for an iOS version. Android, macOS and
unrecognized devices see a Windows/Linux availability message instead of receiving
an incompatible archive. The page and dialog use the game's Atari Classic Chunky font.
Use `?platform=windows` or `?platform=linux` to select explicitly.
Without JavaScript, the link opens the release page for manual selection.

The unmodified Atari Classic font is copyrighted freeware by Mark Simonson.
Its original [documentation and distribution terms](assets/AtariClassic-ReadMe.pdf)
accompany the font; the source archive is [Atari Classic 2.0](https://members.bitstream.net/marksim/atarimac/acttf.zip).

Keep game source, credentials, build caches, and local deployment metadata out
of this static website repository.

## Play online

Download and extract the ZIP for your platform, then run PM. Everyone automatically connects to the same map, with automatic reconnection after interruptions; no account, room code, or router setup is needed. Gameplay waits for admission and shared world state; menus remain available. The world uses load-based admission instead of a fixed player cap; busy arrivals wait in a queue. Older downloads must update to the latest release and reconnect. **M / Start → CHAT → Meet at spawn** brings you to the shared arrival clearing without changing your saved spawn.

The microphone starts on in open-mic mode once connected. Manage it only through **M / Start → CHAT → Microphone on**. Voices fade out beyond 28 metres. An enabled connected microphone stays on in menus and while PM is in the background. A mute choice survives reconnects in that session. Closing PM does not disconnect other players.

`online.json` supplies the permanent secure server address. Its `version` is the discovery schema (1); `protocol` is the game transport version (3), and `world` identifies `pm-world-v1`. Publish that file only after the service has passed a live connection check. It contains no credentials. GitHub Pages serves the artwork and downloads page; the shared world runs independently on Cloudflare.
