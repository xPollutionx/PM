const video = document.querySelector('#sky-video');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
let loaded = false;

function showPoster() {
  video.classList.remove('is-playing');
}

function updatePlayback() {
  if (reducedMotion.matches || document.hidden) {
    video.pause();
    if (reducedMotion.matches) showPoster();
    return;
  }

  if (!loaded) {
    for (const source of video.querySelectorAll('source')) source.src = source.dataset.src;
    video.muted = true;
    video.load();
    loaded = true;
  }

  // Some browsers block autoplay even when muted; the still sky stays visible.
  video.play().catch(showPoster);
}

video.addEventListener('playing', () => video.classList.add('is-playing'));
video.addEventListener('error', showPoster);
reducedMotion.addEventListener('change', updatePlayback);
document.addEventListener('visibilitychange', updatePlayback);
updatePlayback();
