# PM download page

Public, static GitHub Pages site for PM: in-game art and one Download PM link.
PM is a shared online exploration world for Linux and Windows.
No sign-in, third-party scripts, or build step is required.

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

Download and extract the ZIP for your platform, then run PM. Open **M → CHAT → Join world**. Everyone connects to the same map; no account, room code, or router setup is needed. The initial world supports 16 concurrent players. **Meet at spawn** brings you to the shared arrival clearing without changing your saved spawn.

Enable your microphone and hold **T / R3** while playing to talk to nearby players. Voices fade out beyond 28 metres. Microphones begin off, and leaving the world does not disconnect other players.

`online.json` supplies the permanent secure server address. Its `version` is the discovery schema (1); `protocol` is the game transport version (2), and `world` identifies `pm-world-v1`. Publish that file only after the service has passed a live connection check. It contains no credentials. GitHub Pages serves the artwork and downloads page; the shared world runs independently on Cloudflare.
