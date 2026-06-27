// Reveal on scroll
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.12 });
  reveals.forEach(el => observer.observe(el));

  // Certificate slider
  const slider = document.getElementById('certSlider');
  const cards = slider.querySelectorAll('.cert-card');
  const dotsContainer = document.getElementById('certDots');
  let current = 0;
  const total = cards.length;
  const visible = window.innerWidth < 600 ? 1 : 2;

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(n) {
    current = Math.max(0, Math.min(n, total - visible));
    const cardW = cards[0].offsetWidth + 16;
    slider.style.transform = 'translateX(-' + (current * cardW) + 'px)';
    document.querySelectorAll('.dot').forEach((d, i) => d.classList.toggle('active', i === current));
  }

  document.getElementById('certPrev').addEventListener('click', () => goTo(current - 1));
  document.getElementById('certNext').addEventListener('click', () => goTo(current + 1));
