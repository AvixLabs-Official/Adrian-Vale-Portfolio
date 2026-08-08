/**
 * ADRIAN VALE - Scroll Reveal & Interactive Parallax Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollAnimations();
  initHeroParallax();
});

function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('is-revealed'));
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -60px 0px',
    threshold: 0.12
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(el => observer.observe(el));
}

function initHeroParallax() {
  const heroVisual = document.getElementById('hero-portrait');
  if (!heroVisual || window.innerWidth <= 992) return;

  window.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.015;

    heroVisual.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  });
}
