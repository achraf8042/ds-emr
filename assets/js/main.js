/**
 * DigiSpherEMR V2 - Landing Page Interactivity
 * Features:
 *  - Cinema Video Player with easy user URL swapping
 *  - Practice ROI / Cloud Cost Savings Calculator
 *  - Screenshot Lightbox Zoom Modal
 *  - Animated Number Counters
 *  - IntersectionObserver Lazy Animation & Lazy Image Handling
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initVideoPlayer();
  initRoiCalculator();
  initScreenshotModal();
  initAnimatedCounters();
  initScrollReveal();
  initQuoteForm();
  initCustomCountrySelect();
});

/* --------------------------------------------------------------------------
   1. Navbar Scroll Effect
   -------------------------------------------------------------------------- */
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar-sphere');
  if (!navbar) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 40) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. Full Cinema Video Showcase Player
   -------------------------------------------------------------------------- */
/**
 * PLACEHOLDER VIDEO CONFIGURATION
 * To insert your custom video, simply replace the DEFAULT_VIDEO_URL below
 * with your YouTube embed link (e.g. https://www.youtube.com/embed/YOUR_ID?autoplay=1),
 * Vimeo link, or direct MP4 URL.
 */
const DEFAULT_VIDEO_URL = "https://www.youtube.com/embed/v8MsU-AODOk?autoplay=1&rel=0";

function initVideoPlayer() {
  const posterOverlay = document.getElementById('videoPosterOverlay');
  const videoContainer = document.getElementById('videoContainer');
  const playBtn = document.getElementById('playVideoBtn');

  if (!posterOverlay || !videoContainer) return;

  const startVideo = () => {
    // Hide the poster overlay
    posterOverlay.style.opacity = '0';
    setTimeout(() => {
      posterOverlay.style.display = 'none';
    }, 400);

    // Check if user set data-video-url or use default
    const targetUrl = videoContainer.getAttribute('data-video-url') || DEFAULT_VIDEO_URL;

    // Insert responsive iframe or video element
    videoContainer.innerHTML = `
      <iframe 
        src="${targetUrl}" 
        title="DigiSpherEMR V2 Product Tour"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        style="width: 100%; height: 100%; border: none; position: absolute; inset: 0;"
        loading="lazy">
      </iframe>
    `;
  };

  posterOverlay.addEventListener('click', startVideo);
  if (playBtn) playBtn.addEventListener('click', startVideo);
}

/* --------------------------------------------------------------------------
   3. Practice ROI / Cloud Subscription Savings Calculator
   -------------------------------------------------------------------------- */
function initRoiCalculator() {
  const feeSlider = document.getElementById('cloudMonthlyFee');
  const feeDisplay = document.getElementById('cloudFeeValue');
  const yearSelects = document.querySelectorAll('input[name="calcYears"]');
  const savedDisplay = document.getElementById('roiSavedDollars');
  const cloudCostDisplay = document.getElementById('totalCloudCost');
  const dsCostDisplay = document.getElementById('digiSpherCost');

  if (!feeSlider || !savedDisplay) return;

  const DIGISPHER_LIFETIME_PRICE = 899; // Lifetime license price shown on the landing page

  function calculateSavings() {
    const monthlyFee = parseInt(feeSlider.value, 10) || 180;
    let years = 3;

    yearSelects.forEach(radio => {
      if (radio.checked) {
        years = parseInt(radio.value, 10);
      }
    });

    if (feeDisplay) {
      feeDisplay.textContent = `$${monthlyFee}`;
    }

    const totalCloudSpend = monthlyFee * 12 * years;
    const totalSaved = Math.max(0, totalCloudSpend - DIGISPHER_LIFETIME_PRICE);

    if (cloudCostDisplay) {
      cloudCostDisplay.textContent = `$${totalCloudSpend.toLocaleString()}`;
    }
    if (dsCostDisplay) {
      dsCostDisplay.textContent = `$${DIGISPHER_LIFETIME_PRICE}`;
    }

    animateNumber(savedDisplay, totalSaved, '$');
  }

  feeSlider.addEventListener('input', calculateSavings);
  yearSelects.forEach(radio => radio.addEventListener('change', calculateSavings));

  // Initialize once
  calculateSavings();
}

/* --------------------------------------------------------------------------
   4. Screenshot Lightbox Zoom Modal
   -------------------------------------------------------------------------- */
function initScreenshotModal() {
  const modalEl = document.getElementById('screenshotModal');
  const modalImg = document.getElementById('modalScreenshotImg');
  const modalTitle = document.getElementById('modalScreenshotTitle');
  const modalDesc = document.getElementById('modalScreenshotDesc');
  const zoomTriggers = document.querySelectorAll('[data-zoom-screen]');

  if (!modalEl || !modalImg) return;

  const bsModal = new bootstrap.Modal(modalEl);

  zoomTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const imgSrc = trigger.getAttribute('data-zoom-screen');
      const title = trigger.getAttribute('data-zoom-title') || 'DigiSpherEMR Module';
      const desc = trigger.getAttribute('data-zoom-desc') || '';

      modalImg.src = imgSrc;
      modalImg.alt = title;
      if (modalTitle) modalTitle.textContent = title;
      if (modalDesc) modalDesc.textContent = desc;

      bsModal.show();
    });
  });
}

/* --------------------------------------------------------------------------
   5. Animated Number Counters
   -------------------------------------------------------------------------- */
function animateNumber(element, targetValue, prefix = '', suffix = '') {
  if (!element) return;
  const start = 0;
  const duration = 700;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out cubic
    const easeOut = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (targetValue - start) * easeOut);

    element.textContent = `${prefix}${current.toLocaleString()}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${prefix}${targetValue.toLocaleString()}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

function initAnimatedCounters() {
  const statElements = document.querySelectorAll('[data-counter-target]');
  if (!statElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-counter-target'));
        const prefix = el.getAttribute('data-counter-prefix') || '';
        const suffix = el.getAttribute('data-counter-suffix') || '';
        animateNumber(el, target, prefix, suffix);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  statElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   6. IntersectionObserver Scroll Reveal
   -------------------------------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if (!revealElements.length) return;

  const isMobile = window.innerWidth < 992 || window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (isMobile) {
    revealElements.forEach(el => el.classList.add('reveal-visible'));
    return;
  }

  // Desktop smooth reveal observer
  revealElements.forEach(el => el.classList.add('reveal-init'));

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));
}

/* --------------------------------------------------------------------------
   7. Netlify Quote Form Submission Handling
   -------------------------------------------------------------------------- */
function initQuoteForm() {
  const quoteForm = document.getElementById('quoteForm');
  const successAlert = document.getElementById('quoteFormSuccess');

  if (!quoteForm) return;

  quoteForm.addEventListener('submit', (e) => {
    // When live on Netlify, attempt AJAX submission for smooth UX
    if (window.location.protocol.startsWith('http')) {
      e.preventDefault();
      const formData = new FormData(quoteForm);

      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString()
      })
      .then((response) => {
        if (response.ok) {
          quoteForm.reset();
          quoteForm.classList.add('d-none');
          if (successAlert) successAlert.classList.remove('d-none');
        } else {
          // Native browser submission fallback
          quoteForm.submit();
        }
      })
      .catch(() => {
        quoteForm.submit();
      });
    }
  });
}

/* --------------------------------------------------------------------------
   8. Custom Searchable Country Dropdown Menu Logic
   -------------------------------------------------------------------------- */
function initCustomCountrySelect() {
  const trigger = document.getElementById('countrySelectTrigger');
  const menu = document.getElementById('countrySelectMenu');
  const filterInput = document.getElementById('countrySearchFilter');
  const mainInput = document.getElementById('countryCountyInput');
  const options = document.querySelectorAll('.custom-option-item');
  const chevron = document.getElementById('countrySelectChevron');

  if (!trigger || !menu || !mainInput) return;

  const toggleMenu = (open) => {
    const shouldOpen = open !== undefined ? open : menu.classList.contains('d-none');
    if (shouldOpen) {
      menu.classList.remove('d-none');
      if (chevron) chevron.className = 'bi bi-chevron-up text-info small';
      if (filterInput) {
        filterInput.value = '';
        filterOptions('');
        setTimeout(() => filterInput.focus(), 50);
      }
    } else {
      menu.classList.add('d-none');
      if (chevron) chevron.className = 'bi bi-chevron-down text-info small';
    }
  };

  const filterOptions = (term) => {
    const query = term.toLowerCase().trim();
    options.forEach(opt => {
      const text = opt.textContent.toLowerCase();
      if (text.includes(query)) {
        opt.style.display = 'block';
      } else {
        opt.style.display = 'none';
      }
    });
  };

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  if (filterInput) {
    filterInput.addEventListener('input', (e) => {
      filterOptions(e.target.value);
    });
    filterInput.addEventListener('click', (e) => e.stopPropagation());
  }

  options.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const val = opt.getAttribute('data-value') || opt.textContent.trim();
      mainInput.value = val;
      toggleMenu(false);
    });
  });

  document.addEventListener('click', (e) => {
    if (!trigger.contains(e.target) && !menu.contains(e.target)) {
      toggleMenu(false);
    }
  });
}
