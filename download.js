const link = document.querySelector('#download');
const override = new URL(location.href).searchParams.get('platform');
const device = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent || '';
const agent = navigator.userAgent || '';
const ios = /iPhone|iPad|iPod/i.test(`${device} ${agent}`) || (/Mac/i.test(device) && navigator.maxTouchPoints > 1);
const android = /Android/i.test(`${device} ${agent}`);
const detected = ios ? 'ios' : android ? 'android' : /win/i.test(device) ? 'windows' : /linux/i.test(device) ? 'linux' : /mac/i.test(device) ? 'macos' : 'unknown';
const platform = ['windows', 'linux'].includes(override) ? override : detected;

if (['windows', 'linux'].includes(platform)) {
  link.href = `https://github.com/xPollutionx/PM/releases/latest/download/PM-${platform}-x86_64.zip`;
  link.title = `Download PM for ${platform === 'windows' ? 'Windows' : 'Linux'}`;
  link.setAttribute('aria-label', link.title);
} else {
  const dialog = document.querySelector('#platform-dialog');
  document.querySelector('#platform-message').textContent = platform === 'ios'
    ? 'PM is not developed for iOS. There are currently no plans for an iOS version.'
    : `PM is available for Windows and Linux only.${platform === 'android' ? ' Android is not supported.' : platform === 'macos' ? ' macOS is not supported.' : ''}`;
  link.href = '#platform-dialog';
  link.setAttribute('aria-haspopup', 'dialog');
  link.addEventListener('click', event => {
    event.preventDefault();
    dialog.showModal();
  });
}
