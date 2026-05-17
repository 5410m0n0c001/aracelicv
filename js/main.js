const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('up', window.scrollY > 20), {passive:true});

// Add reveal classes to specific elements dynamically
const slideUpElements = document.querySelectorAll('.section-title, .section-label, .about-text, .rol-col-head, .rol-bridge, .exp-meta-year, .exp-meta-co, .exp-meta-loc, .exp-role, .exp-desc, .exp-tags, .lang-name, .lang-sublabel, .tools-header, .edu-year, .edu-degree, .edu-inst, .edu-note');
slideUpElements.forEach(el => el.classList.add('reveal', 'slide-up'));

document.querySelectorAll('.h-pill').forEach((el, i) => {
  el.classList.add('reveal', 'slide-up');
  el.style.transitionDelay = `${i * 0.06}s`;
});

document.querySelectorAll('.rol-col:first-child .rol-items li').forEach((el, i) => {
  el.classList.add('reveal', 'slide-left');
  el.style.transitionDelay = `${i * 0.08}s`;
});

document.querySelectorAll('.rol-col:last-child .rol-items li').forEach((el, i) => {
  el.classList.add('reveal', 'slide-right');
  el.style.transitionDelay = `${i * 0.08}s`;
});

document.querySelectorAll('.exp-item img, .skill-icon, .rol-bridge-icon').forEach(el => {
  el.classList.add('reveal', 'zoom-in');
});

document.querySelectorAll('.tool-chip').forEach((el, i) => {
  el.classList.add('reveal', 'zoom-in');
  el.style.transitionDelay = `${(i % 5) * 0.05}s`;
});

// Update delays for existing elements
document.querySelectorAll('.exp-item').forEach((el, i) => el.style.transitionDelay = '0s'); // no stagger between rows for better feel
document.querySelectorAll('.skill-card').forEach((el, i) => el.style.transitionDelay = `${(i % 3) * 0.1}s`);
document.querySelectorAll('.soft-item').forEach((el, i) => el.style.transitionDelay = `${(i % 2) * 0.1}s`);

const io = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.classList.add('vis');
    }
  });
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

document.querySelectorAll('.reveal, .exp-item, .skill-card, .soft-item, .hero-stat-grid, .hero-stat, .hero-tagline').forEach(el => io.observe(el));

const langObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.querySelectorAll('.lang-bar-fill').forEach(f => {
        setTimeout(() => f.style.width = f.dataset.w + '%', 150);
      });
      langObs.unobserve(e.target);
    }
  });
}, {threshold: 0.3});
document.querySelectorAll('.lang-grid').forEach(el => langObs.observe(el));
