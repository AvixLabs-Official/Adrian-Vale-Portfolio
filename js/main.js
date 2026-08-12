/**
 * ADRIAN VALE - Main Portfolio Orchestrator
 * Controls navigation header, mobile menu, expertise list interaction, and project modals
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initExpertiseList();
});

// --- Header Scroll Transition ---
function initHeaderScroll() {
  const header = document.getElementById('main-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

// --- Mobile Navigation Menu ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    drawer.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', closeMobileDrawer);
  }

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileDrawer);
  });
}

function closeMobileDrawer() {
  const drawer = document.getElementById('mobile-drawer');
  if (drawer) {
    drawer.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// --- Section 10: Interactive Expertise List ("WHAT I DO") ---
function initExpertiseList() {
  const listContainer = document.getElementById('expertise-list-container');
  const previewImg = document.getElementById('expertise-preview-img');

  if (!listContainer) return;

  listContainer.innerHTML = EXPERTISE_DATA.map((item, i) => `
    <div class="expertise-item ${i === 0 ? 'active' : ''}" data-index="${i}">
      <div class="expertise-item-header">
        <span class="expertise-num">${item.num}</span>
        <h3 class="expertise-title">${item.title}</h3>
        <span class="expertise-arrow" style="display:inline-flex; align-items:center;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
        </span>
      </div>
      <div class="expertise-body">
        <p class="expertise-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');

  const items = listContainer.querySelectorAll('.expertise-item');
  items.forEach(item => {
    item.addEventListener('mouseenter', () => {
      items.forEach(x => x.classList.remove('active'));
      item.classList.add('active');
      const idx = parseInt(item.getAttribute('data-index'), 10);
      if (previewImg && EXPERTISE_DATA[idx]) {
        previewImg.src = EXPERTISE_DATA[idx].previewImg;
      }
    });
  });
}

// --- Project Modal Open/Close ---
function openProjectModal(projId) {
  const proj = PROJECTS_DATA.find(p => p.id === projId);
  if (!proj) return;

  const modal = document.getElementById('project-modal');
  const body = document.getElementById('project-modal-content');

  if (!modal || !body) return;

  body.innerHTML = `
    <div class="modal-project-wrapper">
      <div class="modal-project-header">
        <span class="modal-category">${proj.category} • ${proj.year}</span>
        <h1 class="modal-project-title">${proj.name}</h1>
        <p class="modal-subtitle">${proj.subtitle}</p>
      </div>

      <div class="modal-main-img-box">
        <img src="${proj.image}" alt="${proj.name} ${proj.category}">
      </div>

      <div class="modal-project-grid">
        <div>
          <h3>Overview & Strategy</h3>
          <p class="modal-project-desc">${proj.description}</p>
          <div class="modal-impact-badge">Key Impact: <strong>${proj.impact}</strong></div>
        </div>
        <div class="modal-meta-box">
          <div class="meta-group">
            <span class="meta-label">Client</span>
            <span class="meta-val">${proj.client}</span>
          </div>
          <div class="meta-group">
            <span class="meta-label">Services</span>
            <ul class="meta-services-list">
              ${proj.services.map(s => `<li>${s}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
