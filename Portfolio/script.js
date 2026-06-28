// Function to handle the slide-up animation on scroll
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.slide-up');
    const windowHeight = window.innerHeight;
    const revealPoint = 100;

    reveals.forEach(el => {
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - revealPoint) {
            el.classList.add('active');
        }
    });
};

// Run on scroll
window.addEventListener('scroll', revealOnScroll);

// Run on load to reveal hero section immediately
window.addEventListener('DOMContentLoaded', revealOnScroll);

// Optional: Smooth Drag-to-Scroll for Certificates
const slider = document.querySelector('.cert-slider');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => isDown = false);
slider.addEventListener('mouseup', () => isDown = false);

slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 2;
    slider.scrollLeft = scrollLeft - walk;
});
