// Reveal Animation
const reveals = document.querySelectorAll('.reveal');

const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      io.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(el => io.observe(el));


// ===============================
// Certificate Slider
// ===============================

const track = document.getElementById("certTrack");
const cards = document.querySelectorAll(".cert-card");
const dotsEl = document.getElementById("certDots");

let cur = 0;

const perView = () => window.innerWidth < 560 ? 1 : 2;


// Create Dots
cards.forEach((card, i) => {

    const dot = document.createElement("button");

    dot.className = "dot" + (i === 0 ? " active" : "");

    dot.setAttribute("aria-label", "Slide " + (i + 1));

    dot.addEventListener("click", () => go(i));

    dotsEl.appendChild(dot);

});


// Move Slider
function go(index){

    const max = cards.length - perView();

    cur = Math.max(0, Math.min(index, max));

    const width = cards[0].offsetWidth + 14;

    track.style.transform =
        `translateX(-${cur * width}px)`;

    updateDots();

}


// Update Dots
function updateDots(){

    document.querySelectorAll(".dot").forEach((dot,i)=>{

        dot.classList.toggle("active", i===cur);

    });

}


// Buttons
document
.getElementById("certPrev")
.addEventListener("click",()=>go(cur-1));

document
.getElementById("certNext")
.addEventListener("click",()=>go(cur+1));


// Resize
window.addEventListener("resize",()=>go(cur));


// =====================================
// Swipe Support
// =====================================

let startX = 0;
let currentX = 0;
let dragging = false;

track.addEventListener("touchstart",(e)=>{

    startX = e.touches[0].clientX;

    dragging = true;

});


track.addEventListener("touchmove",(e)=>{

    if(!dragging) return;

    currentX = e.touches[0].clientX;

});


track.addEventListener("touchend",()=>{

    if(!dragging) return;

    const diff = startX - currentX;

    if(diff > 50){

        go(cur+1);

    }

    else if(diff < -50){

        go(cur-1);

    }

    dragging = false;

});


// =====================================
// Open Certificate
// =====================================

cards.forEach(card=>{

    card.addEventListener("click",(e)=>{

        if(dragging) return;

        // Works if HTML uses <a href="">
        if(card.tagName.toLowerCase()==="a") return;

        // Works if HTML uses data-href
        const link = card.dataset.href;

        if(link){

            window.open(link,"_blank");

        }

    });

});


// Initial Position
go(0);
