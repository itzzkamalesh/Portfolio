const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
reveals.forEach(el => io.observe(el));

const track = document.getElementById('certTrack');
const cards = track.querySelectorAll('.cert-card');
const dotsEl = document.getElementById('certDots');
let cur = 0;
const perView = () => window.innerWidth < 560 ? 1 : 2;

cards.forEach((_, i) => {
  const d = document.createElement('button');
  d.className = 'dot' + (i === 0 ? ' active' : '');
  d.setAttribute('aria-label', 'Slide ' + (i + 1));
  d.addEventListener('click', () => go(i));
  dotsEl.appendChild(d);
});

function go(n) {
  const max = cards.length - perView();
  cur = Math.max(0, Math.min(n, max));
  const w = cards[0].offsetWidth + 14;
  track.style.transform = 'translateX(-' + (cur * w) + 'px)';
  document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === cur));
}

document.getElementById('certPrev').addEventListener('click', () => go(cur - 1));
document.getElementById('certNext').addEventListener('click', () => go(cur + 1));
window.addEventListener('resize', () => go(cur));
