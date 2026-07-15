/* ============================================================
   DATA — sourced only from resume, no fabrication
============================================================ */
const SKILLS = [
  {name:'Python', cat:'Language', icon:'<path d="M12 2c-4 0-4 3-4 3v3h4"/><path d="M12 22c4 0 4-3 4-3v-3h-4"/><circle cx="9" cy="7" r=".6"/><circle cx="15" cy="17" r=".6"/><path d="M8 5h8v6H8z"/><path d="M8 13h8v6H8z"/>'},
  {name:'C', cat:'Language', icon:'<circle cx="12" cy="12" r="9"/><path d="M15 9a4 4 0 1 0 0 6"/>'},
  {name:'C++', cat:'Language', icon:'<circle cx="10" cy="12" r="7"/><path d="M12 9a4 4 0 1 0 0 6"/><path d="M18 10v4"/><path d="M16 12h4"/>'},
  {name:'Machine Learning', cat:'AI / ML', icon:'<circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="18" r="2"/><circle cx="12" cy="12" r="2.4"/><path d="M8 7l3 3M16 7l-3 3M8 17l3-3M16 17l-3-3"/>'},
  {name:'Generative AI', cat:'AI / ML', icon:'<path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/>'},
  {name:'AI Agents', cat:'AI / ML', icon:'<rect x="5" y="7" width="14" height="12" rx="2"/><circle cx="9.5" cy="13" r="1"/><circle cx="14.5" cy="13" r="1"/><path d="M12 7V3"/><circle cx="12" cy="2.4" r="0.8"/>'},
  {name:'Git', cat:'Tools', icon:'<circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8"/><path d="M6 14c0-3 3-3 6-3s6 0 6-2"/>'},
  {name:'GitHub', cat:'Tools', icon:'<path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.95.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>'},
  {name:'MS Office', cat:'Tools', icon:'<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/>'},
];

const PROJECTS = [
  {
    glyph:'📩',
    title:'Spam SMS Detector',
    tech:['Python','Scikit-learn','NLP','Pandas'],
    points:[
      'Engineered an NLP-based text classification model to identify spam SMS with 98.2% accuracy across 5,500+ messages.',
      'Built preprocessing pipelines — normalization, tokenization, TF-IDF feature extraction — for high-dimensional vector representations.',
      'Tuned Naive Bayes &amp; Logistic Regression via 5-fold cross-validation, reducing false positives by 14%.'
    ]
  },
  {
    glyph:'📊',
    title:'Customer Churn Prediction',
    tech:['Python','Scikit-learn','Pandas','Seaborn'],
    points:[
      'Developed a binary classification model to identify high-risk churn patterns across 10,000+ customer records.',
      'Conducted EDA, cleaning and feature engineering to construct 5+ correlated indicators, boosting accuracy by 11%.',
      'Compared Decision Trees and Random Forests to deploy the highest-performing model.'
    ]
  },
  {
    glyph:'💳',
    title:'Credit Card Fraud Detection',
    tech:['Python','Scikit-learn','Pandas','NumPy'],
    points:[
      'Designed an ML system to detect fraudulent transactions in an imbalanced dataset of 280,000+ entries.',
      'Applied SMOTE and undersampling to mitigate class imbalance, increasing minority class recall by 18%.',
      'Evaluated performance via confusion matrices, precision-recall curves and F1-score to minimize missed fraud.'
    ]
  }
];

const EDUCATION = [
  {period:'2025 — Present', school:'Jeppiaar Engineering College', degree:'B.E. Computer Science & Engineering (AI & ML)', meta:'Expected Graduation: <strong>May 2029</strong> · Coursework: ML, Data Structures, AI'},
  {period:'2025', school:'NSVV Boys Hr. Sec. School', degree:'Higher Secondary Certificate (HSC)', meta:'Final Score: <strong>91%</strong>'},
  {period:'2023', school:'NSVV Boys Hr. Sec. School', degree:'Secondary School Leaving Certificate (SSLC)', meta:'Final Score: <strong>88%</strong>'},
];

const CERTS = [
  {title:'Introduction to Generative AI', issuer:'Google', year:'2026', mark:'G'},
  {title:'Fundamentals of AI & Machine Learning', issuer:'Infosys', year:'2026', mark:'I'},
  {title:'Fundamentals of Machine Learning and Artificial Intelligence', issuer:'Amazon', year:'2026', mark:'A'},
];

/* ============================================================
   RENDER
============================================================ */
function renderSkills(){
  const grid = document.getElementById('skillsGrid');
  grid.innerHTML = SKILLS.map((s,i)=>`
    <div class="tilt-card skill-card">
      <div class="card-glow-spot"></div>
      <div class="skill-icon"><svg viewBox="0 0 24 24" fill="none" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${s.icon}</svg></div>
      <div><div class="skill-name">${s.name}</div><div class="skill-cat">${s.cat}</div></div>
    </div>
  `).join('');
}

function renderProjects(){
  const grid = document.getElementById('projectsGrid');
  grid.innerHTML = PROJECTS.map((p,i)=>`
    <div class="tilt-card project-card">
      <div class="card-glow-spot"></div>
      <div class="project-cover"><span class="glyph">${p.glyph}</span></div>
      <div class="project-body">
        <div class="project-title">${p.title}</div>
        <ul class="project-desc">${p.points.map(pt=>`<li>${pt}</li>`).join('')}</ul>
        <div class="tech-row">${p.tech.map(t=>`<span class="tech-pill">${t}</span>`).join('')}</div>
        <div class="project-links"><span class="soon">Links coming soon</span></div>
      </div>
    </div>
  `).join('');
}

function renderCerts(){
  const track = document.getElementById('certTrack');
  const doubled = [...CERTS, ...CERTS];
  track.innerHTML = doubled.map(c=>`
    <div class="tilt-card cert-card">
      <div class="card-glow-spot"></div>
      <div class="cert-badge">${c.mark}</div>
      <div class="cert-title">${c.title}</div>
      <div class="cert-issuer">${c.issuer} · ${c.year}</div>
    </div>
  `).join('');
}

function renderDNA(){
  const helix = document.getElementById('dnaHelix');
  const milestones = document.getElementById('eduMilestones');
  const rungCount = 26;
  const height = 640;
  let rungsHTML = '';
  for(let i=0;i<rungCount;i++){
    const y = (i/(rungCount-1))*height;
    const angle = (i/(rungCount-1))*720; // degrees around the strand
    const rad = angle*Math.PI/180;
    const radius = 60;
    const x1 = 50 + (radius*Math.cos(rad))/2.2;
    const x2 = 50 - (radius*Math.cos(rad))/2.2;
    const z = Math.sin(rad)*radius;
    rungsHTML += `
      <div class="dna-rung" style="top:${y}px;">
        <div class="dna-node" style="left:calc(${x1}% - 6px); transform:translateZ(${z}px);"></div>
        <div class="dna-node b" style="left:calc(${x2}% - 6px); transform:translateZ(${-z}px);"></div>
      </div>`;
  }
  helix.innerHTML = rungsHTML;

  // milestone cards placed along the strand (desktop alternating, stacked on mobile)
  milestones.innerHTML = EDUCATION.map((e,i)=>{
    const topPct = 8 + i*32;
    const side = i%2===0 ? 'left':'right';
    return `
    <div class="tilt-card edu-card ${side}" style="top:${topPct}%;" data-edu-index="${i}">
      <div class="card-glow-spot"></div>
      <div class="period">${e.period}</div>
      <div class="school">${e.school}</div>
      <div class="degree">${e.degree}</div>
      <div class="meta">${e.meta}</div>
    </div>`;
  }).join('');
}

renderSkills();
renderProjects();
renderCerts();
renderDNA();

/* ============================================================
   NAVBAR SCROLL STATE + ACTIVE LINK
============================================================ */
const navbar = document.getElementById('navbar');
const sections = document.querySelectorAll('section[id], header[id]');
const navLinks = document.querySelectorAll('.nav-links a');

function onScroll(){
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  const progress = document.getElementById('scrollProgress');
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (scrollTop/docHeight*100) + '%';

  document.getElementById('backToTop').classList.toggle('show', scrollTop > 600);

  let current = '';
  sections.forEach(sec=>{
    const rect = sec.getBoundingClientRect();
    if(rect.top <= 120 && rect.bottom >= 120) current = sec.id;
  });
  navLinks.forEach(a=>{
    a.classList.toggle('active', a.getAttribute('href') === '#'+current);
  });
}
window.addEventListener('scroll', onScroll, {passive:true});
onScroll();

/* ============================================================
   MOBILE MENU
============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', ()=>{
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click', ()=>{
  hamburger.classList.remove('open'); mobileMenu.classList.remove('open');
}));

/* back to top */
document.getElementById('backToTop').addEventListener('click', ()=>{
  window.scrollTo({top:0, behavior:'smooth'});
});

/* ============================================================
   RIPPLE EFFECT
============================================================ */
function rippleEffect(e){
  const btn = e.currentTarget;
  const circle = document.createElement('span');
  const rect = btn.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  circle.style.width = circle.style.height = size+'px';
  circle.style.left = (e.clientX - rect.left - size/2)+'px';
  circle.style.top = (e.clientY - rect.top - size/2)+'px';
  circle.classList.add('ripple');
  btn.style.position = 'relative';
  btn.style.overflow = 'hidden';
  btn.appendChild(circle);
  setTimeout(()=>circle.remove(), 700);
}

/* ============================================================
   CONTACT FORM -> mailto
============================================================ */
function handleFormSubmit(e){
  e.preventDefault();
  const name = document.getElementById('fname').value;
  const email = document.getElementById('femail').value;
  const msg = document.getElementById('fmsg').value;
  const subject = encodeURIComponent('Portfolio Contact from '+name);
  const body = encodeURIComponent(msg + '\n\n— '+name+' ('+email+')');
  window.location.href = `mailto:kamalesh6764@gmail.com?subject=${subject}&body=${body}`;
}

/* ============================================================
   TILT / MOUSE-TRACKING GLOW ON CARDS
============================================================ */
document.addEventListener('mousemove', (e)=>{
  const cards = document.querySelectorAll('.tilt-card');
  cards.forEach(card=>{
    const rect = card.getBoundingClientRect();
    if(e.clientX >= rect.left-40 && e.clientX <= rect.right+40 && e.clientY >= rect.top-40 && e.clientY <= rect.bottom+40){
      const x = ((e.clientX - rect.left)/rect.width*100).toFixed(1);
      const y = ((e.clientY - rect.top)/rect.height*100).toFixed(1);
      card.style.setProperty('--mx', x+'%');
      card.style.setProperty('--my', y+'%');
    }
  });
}, {passive:true});

// subtle 3D tilt on hover for project & skill cards
function apply3DTilt(selector, maxTilt=6){
  document.querySelectorAll(selector).forEach(card=>{
    card.addEventListener('mousemove', (e)=>{
      const rect = card.getBoundingClientRect();
      const px = (e.clientX - rect.left)/rect.width - 0.5;
      const py = (e.clientY - rect.top)/rect.height - 0.5;
      card.style.transform = `perspective(800px) rotateX(${(-py*maxTilt).toFixed(2)}deg) rotateY(${(px*maxTilt).toFixed(2)}deg) translateY(-4px)`;
    });
    card.addEventListener('mouseleave', ()=>{ card.style.transform = ''; });
  });
}
apply3DTilt('.skill-card', 8);
apply3DTilt('.project-card', 5);
apply3DTilt('.cert-card', 5);

/* ============================================================
   TYPED ROLE TEXT
============================================================ */
const roles = ['AI/ML Engineering Student', 'NLP & Predictive Modeling', 'Python Developer'];
let roleIdx = 0, charIdx = 0, deleting = false;
const roleEl = document.getElementById('roleText');
function typeLoop(){
  const current = roles[roleIdx];
  if(!deleting){
    charIdx++;
    roleEl.textContent = current.slice(0, charIdx);
    if(charIdx === current.length){ deleting = true; setTimeout(typeLoop, 1600); return; }
  } else {
    charIdx--;
    roleEl.textContent = current.slice(0, charIdx);
    if(charIdx === 0){ deleting = false; roleIdx = (roleIdx+1)%roles.length; }
  }
  setTimeout(typeLoop, deleting ? 35 : 65);
}
typeLoop();

/* ============================================================
   HERO CANVAS — NEURAL NETWORK PARTICLE FIELD (signature element)
============================================================ */
(function(){
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');
  let w,h, particles=[];
  const COUNT = window.innerWidth < 700 ? 34 : 64;
  const mouse = {x:null, y:null};

  function resize(){
    w = canvas.width = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }
  function init(){
    particles = Array.from({length:COUNT}, ()=>({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-0.5)*0.35,
      vy: (Math.random()-0.5)*0.35,
      r: Math.random()*1.6+1
    }));
  }
  function step(){
    ctx.clearRect(0,0,w,h);
    particles.forEach(p=>{
      p.x += p.vx; p.y += p.vy;
      if(p.x<0||p.x>w) p.vx*=-1;
      if(p.y<0||p.y>h) p.vy*=-1;
    });
    for(let i=0;i<particles.length;i++){
      for(let j=i+1;j<particles.length;j++){
        const a=particles[i], b=particles[j];
        const dx=a.x-b.x, dy=a.y-b.y;
        const dist = Math.sqrt(dx*dx+dy*dy);
        if(dist < 150){
          ctx.strokeStyle = `rgba(91,140,255,${(1-dist/150)*0.22})`;
          ctx.lineWidth = 1;
          ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke();
        }
      }
      if(mouse.x!=null){
        const dx=particles[i].x-mouse.x, dy=particles[i].y-mouse.y;
        const dist=Math.sqrt(dx*dx+dy*dy);
        if(dist<170){
          ctx.strokeStyle = `rgba(0,212,255,${(1-dist/170)*0.35})`;
          ctx.beginPath(); ctx.moveTo(particles[i].x,particles[i].y); ctx.lineTo(mouse.x,mouse.y); ctx.stroke();
        }
      }
    }
    particles.forEach(p=>{
      ctx.beginPath();
      ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle = 'rgba(0,212,255,0.75)';
      ctx.fill();
    });
    requestAnimationFrame(step);
  }
  window.addEventListener('resize', ()=>{resize(); init();});
  document.querySelector('.hero').addEventListener('mousemove', (e)=>{
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top;
  });
  document.querySelector('.hero').addEventListener('mouseleave', ()=>{ mouse.x=null; mouse.y=null; });
  resize(); init(); step();
})();

/* ============================================================
   FLOATING ORBIT CARDS — gentle continuous float
============================================================ */
document.querySelectorAll('[data-float]').forEach((el,i)=>{
  const dur = 4 + Math.random()*2;
  el.style.animation = `floatY ${dur}s ease-in-out ${i*0.3}s infinite`;
});
const styleTag = document.createElement('style');
styleTag.textContent = `@keyframes floatY{0%,100%{transform:translateY(0);}50%{transform:translateY(-14px);}}`;
document.head.appendChild(styleTag);

/* ============================================================
   AOS + GSAP SCROLL REVEALS
============================================================ */
try{ AOS.init({ duration:900, easing:'ease-out-cubic', once:true, offset:60 }); }catch(e){ console.warn('AOS failed to load; content remains visible without entrance animation.'); }

// Everything below is progressive enhancement: if GSAP/ScrollTrigger fail to
// load (e.g. offline, blocked CDN), all content is already visible by default
// via CSS, so nothing gets stuck hidden.
if (typeof gsap !== 'undefined') {
  try {
    if (typeof ScrollTrigger !== 'undefined') gsap.registerPlugin(ScrollTrigger);

    // Hero entrance
    gsap.from('.hero-badge', {opacity:0, y:20, duration:0.8, delay:0.2});
    gsap.from('.hero-name .word', {opacity:0, y:40, scale:0.96, duration:1, delay:0.35, ease:'power3.out'});
    gsap.from('.hero-role', {opacity:0, y:16, duration:0.8, delay:0.55});
    gsap.from('.hero-intro', {opacity:0, y:16, duration:0.8, delay:0.7});
    gsap.from('.hero-actions .btn', {opacity:0, y:16, duration:0.7, delay:0.85, stagger:0.12});
    gsap.from('.hero-stats > div', {opacity:0, y:16, duration:0.7, delay:1.05, stagger:0.1});
    gsap.from('.orbit-card', {opacity:0, scale:0.85, duration:0.9, delay:0.6, stagger:0.15, ease:'back.out(1.6)'});

    // Section-specific directional animations (as specified in brief)
    function scrollReveal(selector, fromVars){
      gsap.utils.toArray(selector).forEach(el=>{
        gsap.from(el, {
          ...fromVars,
          scrollTrigger:{ trigger:el, start:'top 88%', toggleActions:'play none none none' }
        });
      });
    }

    scrollReveal('#skills .skill-card', {opacity:0, x:60, duration:0.9, ease:'power3.out'});
    scrollReveal('#projects .project-card', {opacity:0, y:60, duration:1, ease:'power3.out'});
    scrollReveal('#education .edu-card', {opacity:0, y:40, duration:1, ease:'power3.out'});
    scrollReveal('.footer', {opacity:0, y:30, duration:1});
  } catch(e){
    console.warn('GSAP animation setup failed; content remains visible without entrance animation.', e);
  }
}
