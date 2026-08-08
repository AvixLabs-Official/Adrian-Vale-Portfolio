/**
 * ADRIAN VALE - Custom Desktop Cursor & Magnetic Interactions Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  initCustomCursor();
});

function initCustomCursor() {
  // Disable on touch / mobile devices
  if ('ontouchstart' in window || window.innerWidth <= 992) return;

  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const label = document.getElementById('cursor-label');

  if (!dot || !ring) return;

  let mouseX = -100;
  let mouseY = -100;
  let ringX = -100;
  let ringY = -100;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  });

  function renderCursor() {
    // Smooth lerp for outer ring
    ringX += (mouseX - ringX) * 0.18;
    ringY += (mouseY - ringY) * 0.18;

    ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;

    requestAnimationFrame(renderCursor);
  }

  requestAnimationFrame(renderCursor);

  // Bind interactive elements
  const hoverLinks = document.querySelectorAll('a, button, .interactive-hover');
  hoverLinks.forEach(el => {
    el.addEventListener('mouseenter', () => {
      ring.classList.add('cursor-hover');
    });
    el.addEventListener('mouseleave', () => {
      ring.classList.remove('cursor-hover');
    });
  });

  // Project hover state with "VIEW" text
  const projectCards = document.querySelectorAll('.project-card, .project-hover-target');
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      ring.classList.add('cursor-project');
      if (label) label.textContent = 'VIEW →';
    });
    card.addEventListener('mouseleave', () => {
      ring.classList.remove('cursor-project');
      if (label) label.textContent = '';
    });
  });
}
