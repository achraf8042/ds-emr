/**
 * DigiSpherEMR landing page.
 * Theme switch and Netlify forms for the English and French home pages.
 */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initQuoteForm();
  initMotion();
});

function initTheme() {
  const key = 'ds-theme';
  const buttons = document.querySelectorAll('[data-theme-choice]');
  const media = window.matchMedia('(prefers-color-scheme: dark)');

  const apply = (choice) => {
    let theme = choice;
    let stored = choice;
    if (choice !== 'light' && choice !== 'dark') {
      theme = media.matches ? 'dark' : 'light';
      stored = 'auto';
    }
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.setAttribute('data-theme-choice', stored);
    buttons.forEach((btn) => {
      btn.setAttribute('aria-pressed', btn.getAttribute('data-theme-choice') === stored ? 'true' : 'false');
    });
    const tile = document.querySelector('meta[name="theme-color"]');
    if (tile) tile.setAttribute('content', theme === 'dark' ? '#0d1b28' : '#ffffff');
  };

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const choice = btn.getAttribute('data-theme-choice');
      try { localStorage.setItem(key, choice); } catch (e) {}
      apply(choice);
    });
  });

  const onScheme = () => {
    let stored = 'auto';
    try { stored = localStorage.getItem(key) || 'auto'; } catch (e) {}
    if (stored !== 'light' && stored !== 'dark') apply('auto');
  };
  if (media.addEventListener) media.addEventListener('change', onScheme);
  else if (media.addListener) media.addListener(onScheme);

  apply(document.documentElement.getAttribute('data-theme-choice') || 'auto');
}

function showFormSuccess(form, successAlert) {
  form.reset();
  form.classList.add('d-none');
  if (!successAlert) return;
  successAlert.classList.remove('d-none');
  successAlert.setAttribute('tabindex', '-1');
  successAlert.focus();
}

function bindNetlifyForm(formId, successId) {
  const form = document.getElementById(formId);
  const successAlert = document.getElementById(successId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      form.classList.add('was-validated');
      const firstInvalid = form.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();
      return;
    }
    e.preventDefault();
    if (!window.location.protocol.startsWith('http')) {
      showFormSuccess(form, successAlert);
      return;
    }
    const formData = new FormData(form);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
      .then((response) => {
        if (response.ok) showFormSuccess(form, successAlert);
        else form.submit();
      })
      .catch(() => {
        form.submit();
      });
  });
}

function initQuoteForm() {
  bindNetlifyForm('quoteForm', 'quoteFormSuccess');
  bindNetlifyForm('demoForm', 'demoFormSuccess');
}

function initMotion() {
  const root = document.documentElement;
  if (!root.classList.contains('px-motion')) return;
  root.classList.add('px-motion-ready');

  const header = document.querySelector('.px-header');
  if (header) {
    const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const selector = [
    '#main .px-title',
    '#main .px-lead',
    '#main .section-title',
    '#main .section-subtitle',
    '#main .px-kicker',
    '#main .px-eyebrow',
    '#main .px-card',
    '#featureModules .row.align-items-center > .col-lg-6',
    '.px-band-photo .col-lg-8 > *',
    '.px-band-brand .container-xl > *',
    '#main .accordion-item',
    '#main .spec-box',
    '#techSpecs .col-lg-4',
    '.px-footer-grid > *'
  ].join(',');
  const targets = Array.from(document.querySelectorAll(selector));

  const reveal = (el) => el.classList.add('is-in');
  if (!('IntersectionObserver' in window)) {
    targets.forEach(reveal);
    return;
  }

  const groups = new Map();
  targets.forEach((el) => {
    const group = el.closest('section, footer') || document.body;
    const list = groups.get(group) || [];
    list.push(el);
    groups.set(group, list);
  });
  targets.forEach((el) => {
    const group = el.closest('section, footer') || document.body;
    const index = groups.get(group).indexOf(el);
    el.style.setProperty('--px-delay', (Math.min(index, 5) * 90) + 'ms');
  });

  document.addEventListener('focusin', (event) => {
    targets.forEach((el) => {
      if (el.contains(event.target)) reveal(el);
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      reveal(entry.target);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -32px 0px' });

  targets.forEach((el) => observer.observe(el));
}
