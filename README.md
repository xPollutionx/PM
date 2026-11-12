# PM download page

Public, static GitHub Pages site for PM: in-game art and one Download PM link.
PM is a shared online exploration world for Linux and Windows.
No sign-in, third-party scripts, or build step is required.

The background is a silent, 10-minute video: a first-person view of the game's
stars making one complete, slow turn. It contains no character, terrain, moon,
or interface. The rotation returns to its starting orientation at the loop
boundary. WebM and H.264 MP4 versions support desktop and mobile browsers.
The page fills one viewport without scrolling in portrait or landscape.

`background.js` loads the video only when motion is allowed and the page is
visible. A still frame remains visible while it loads, when autoplay is blocked,
or when the visitor requests reduced motion. Playback pauses in hidden tabs.

## Hosting

Publish this directory to the `main` branch root of `xPollutionx/PM`.
In repository Settings → Pages, select **Deploy from a branch**, **main**, **/ (root)**.
The public address is https://xpollutionx.github.io/PM/.
Relative asset paths also support local previews and a future custom domain.

## Downloads

Attach these exact filenames to each published GitHub Release:

- `PM-linux-x86_64.zip`
- `PM-windows-x86_64.zip`
- `SHA256SUMS` (recommended)

Mark the current demo as the latest release. The download link uses GitHub's
`releases/latest/download/` URL, so a new latest release updates downloads
without editing the page. Drafts and prereleases are not selected by this URL.

The link selects Windows on Windows devices and Linux otherwise.
Use `?platform=windows` or `?platform=linux` to select explicitly.
Without JavaScript, the link downloads Linux.

Keep game source, credentials, build caches, and local deployment metadata out
of this static website repository.

## Play online

Download and extract the ZIP for your platform, then run PM. Open **M → CHAT → Join world**. Everyone connects to the same map; no account, room code, or router setup is needed. The world uses load-based admission instead of a fixed player cap; busy arrivals wait in a queue. Older downloads must update to the latest release and reconnect. **Meet at spawn** brings you to the shared arrival clearing without changing your saved spawn.

Enable your microphone and hold **T / R3** while playing to talk to nearby players. Voices fade out beyond 28 metres. Microphones begin off, and leaving the world does not disconnect other players.

`online.json` supplies the permanent secure server address. Its `version` is the discovery schema (1); `protocol` is the game transport version (3), and `world` identifies `pm-world-v1`. Publish that file only after the service has passed a live connection check. It contains no credentials. GitHub Pages serves the artwork and downloads page; the shared world runs independently on Cloudflare.
