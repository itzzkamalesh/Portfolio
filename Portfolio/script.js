// HEADER SCROLL TRANSITION
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// MOBILE NAVIGATION SYSTEM
function toggleMobileMenu() {
  document.getElementById('nav-links').classList.toggle('active');
}

// Close menu when links are clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('nav-links').classList.remove('active');
  });
});

// 3D EDUCATION CARD ROTATION EFFECT
function tiltCard(event, card) {
  const cardRect = card.getBoundingClientRect();
  const cardWidth = cardRect.width;
  const cardHeight = cardRect.height;
  const mouseX = event.clientX - cardRect.left - cardWidth / 2;
  const mouseY = event.clientY - cardRect.top - cardHeight / 2;
  
  const rotateX = -(mouseY / cardHeight) * 15;
  const rotateY = (mouseX / cardWidth) * 15;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
}

function resetTilt(card) {
  card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
}

// AUTOMATIC CAROUSEL SLIDING LOGIC
let currentSlideIndex = 0;
const certTrack = document.getElementById('certs-track');
const certDots = document.querySelectorAll('.cert-dot');
const totalSlides = 3;
let autoSlideInterval;

function updateCarousel() {
  // Move slider track relative to current index
  certTrack.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  
  // Highlight active navigational dot
  certDots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function nextSlide() {
  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
  updateCarousel();
}

function prevSlide() {
  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
}

function jumpToSlide(index) {
  currentSlideIndex = index;
  updateCarousel();
  resetAutoSlide();
}

// Auto slide active interval trigger (Every 5 seconds)
function startAutoSlide() {
  autoSlideInterval = setInterval(nextSlide, 5000);
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  startAutoSlide();
}

// Initialize Slider Loop
startAutoSlide();

// Pause automatic rotation on hover
const certsSliderOuter = document.querySelector('.certs-slider-outer');
certsSliderOuter.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
certsSliderOuter.addEventListener('mouseleave', startAutoSlide);

// SCROLL REVEAL TRIGGERS (INTERSECTION OBSERVER)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('reveal-active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(section => {
  observer.observe(section);
});

// UPDATE NAV LINKS ON SCROLL ACTIVE SECTION DETECTION
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let activeSectionId = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      activeSectionId = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${activeSectionId}`) {
      link.classList.add('active');
    }
  });
});

// RESUME DOWNLOAD NOTIFICATION
const downloadBtn = document.getElementById('download-btn');
const toast = document.getElementById('toast-notification');

if (downloadBtn && toast) {
  downloadBtn.addEventListener('click', () => {
    // Show the notification
    toast.classList.add('toast-visible');
    
    // Hide the notification automatically after 3 seconds (3000ms)
    setTimeout(() => {
      toast.classList.remove('toast-visible');
    }, 3000);
  });
}
