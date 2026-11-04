/**
 * DigiSpherEMR landing page.
 * Theme switch and Netlify forms for the English and French home pages.
 */
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initQuoteForm();
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
