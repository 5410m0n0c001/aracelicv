const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('up', window.scrollY > 20), {passive:true});

const io = new IntersectionObserver(entries => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('vis'); });
}, {threshold: 0.08});

document.querySelectorAll('.exp-item,.skill-card,.soft-item').forEach((el,i) => {
  el.style.transitionDelay = `${(i % 6) * 0.07}s`;
  io.observe(el);
});

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
