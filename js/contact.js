/**
 * ADRIAN VALE - Contact & Project Enquiry Form Handler
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
});

function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('contact-modal');
  const modalClose = document.getElementById('contact-modal-close');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = contactForm.querySelector('[name="name"]')?.value || 'Valued Partner';

      showContactConfirmation(
        "Conversation Initiated",
        `Thank you, ${name}. Adrian has received your message and will reach out within 24 hours.`
      );

      contactForm.reset();
    });
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeContactConfirmation);
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeContactConfirmation();
    });
  }
}

function showContactConfirmation(title, text) {
  const modal = document.getElementById('contact-modal');
  const titleEl = document.getElementById('contact-modal-title');
  const textEl = document.getElementById('contact-modal-text');

  if (modal && titleEl && textEl) {
    titleEl.textContent = title;
    textEl.textContent = text;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  } else {
    alert(`${title}\n\n${text}`);
  }
}

function closeContactConfirmation() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}
