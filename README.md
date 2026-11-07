# PM download page

Public, static GitHub Pages site for PM: in-game art and one Download PM link.
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
