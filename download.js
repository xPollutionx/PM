const link = document.querySelector('#download');
const override = new URL(location.href).searchParams.get('platform');
const device = navigator.userAgentData?.platform || navigator.platform || navigator.userAgent;
const platform = ['windows', 'linux'].includes(override) ? override : /win/i.test(device) ? 'windows' : 'linux';

link.href = `https://github.com/xPollutionx/PM/releases/latest/download/PM-${platform}-x86_64.zip`;
link.title = `Download PM for ${platform === 'windows' ? 'Windows' : 'Linux'}`;
link.setAttribute('aria-label', link.title);
