/* =============================================================================
   Open V Business Solutions — site scripts
   Loaded with `defer`, so the DOM is ready by the time this runs.
   Every hook is null-guarded so this same file can be reused on the
   sub-pages (PAIA manual, T&Cs, whistleblower policy).
   ========================================================================== */

  // Mobile menu
  const menuBtn = document.getElementById('menuBtn');
  const mobilePanel = document.getElementById('mobilePanel');
  if (menuBtn && mobilePanel) {
    menuBtn.addEventListener('click', () => {
      mobilePanel.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', mobilePanel.classList.contains('open'));
    });
  }
  document.querySelectorAll('.mobile-panel a').forEach(a => {
    a.addEventListener('click', () => mobilePanel && mobilePanel.classList.remove('open'));
  });

  // Services navigation
  const servicesDropdown = document.querySelector('.nav-dropdown');
  const servicesTrigger = document.querySelector('.nav-dropdown-trigger');
  const servicesMenu = document.getElementById('servicesMenu');
  if (servicesDropdown && servicesTrigger && servicesMenu) {
    const serviceItems = Array.from(servicesMenu.querySelectorAll('[role="menuitem"]'));
    const setServicesOpen = (open) => {
      servicesDropdown.classList.toggle('open', open);
      servicesTrigger.setAttribute('aria-expanded', String(open));
    };
    servicesTrigger.addEventListener('click', () => setServicesOpen(!servicesDropdown.classList.contains('open')));
    servicesDropdown.addEventListener('mouseenter', () => setServicesOpen(true));
    servicesDropdown.addEventListener('mouseleave', () => setServicesOpen(false));
    servicesTrigger.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        setServicesOpen(true);
        serviceItems[0]?.focus();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        setServicesOpen(true);
        serviceItems[0]?.focus();
      }
    });
    servicesMenu.addEventListener('keydown', (event) => {
      const currentIndex = serviceItems.indexOf(document.activeElement);
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        serviceItems[(currentIndex + direction + serviceItems.length) % serviceItems.length]?.focus();
      } else if (event.key === 'Escape') {
        event.preventDefault();
        setServicesOpen(false);
        servicesTrigger.focus();
      }
    });
    document.addEventListener('focusin', (event) => {
      if (!servicesDropdown.contains(event.target)) setServicesOpen(false);
    });
  }

  document.querySelectorAll('.mobile-services-trigger').forEach((trigger) => {
    const menu = document.getElementById(trigger.getAttribute('aria-controls'));
    if (!menu) return;
    trigger.addEventListener('click', () => {
      const open = trigger.getAttribute('aria-expanded') !== 'true';
      trigger.setAttribute('aria-expanded', String(open));
      menu.classList.toggle('open', open);
    });
  });

  // Live clocks (SAST = UTC+2)
  const formatSAST = () => {
    const now = new Date();
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const sast = new Date(utc + (2 * 3600000));
    return sast.toTimeString().slice(0,8);
  };
  const dashClock = document.getElementById('dashClock');
  const updateClocks = () => {
    const t = formatSAST();
    if (dashClock) dashClock.textContent = t;
  };
  updateClocks();
  setInterval(updateClocks, 1000);

  // Count-up stats
  const counters = Array.from(document.querySelectorAll('.stat .num')).filter((el) => {
    const numericValue = Number.parseInt(el.getAttribute('data-count'), 10);
    return Number.isFinite(numericValue);
  });

  if (counters.length && 'IntersectionObserver' in window) {
    const countUp = (el) => {
      const target = Number.parseInt(el.getAttribute('data-count'), 10);
      const suffix = el.getAttribute('data-suffix') || '+';
      const duration = 1400;
      const start = performance.now();
      const step = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          countUp(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(c => statObserver.observe(c));
  }

  // Hero video fallback
  document.querySelectorAll('.hero-video').forEach((video) => {
    video.addEventListener('error', () => video.classList.add('video-fallback'), { once: true });
    const playAttempt = video.play();
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => video.classList.add('video-fallback'));
    }
  });

  // Reveal-on-scroll, with a visible-content fallback for older browsers.
  const revealElements = Array.from(document.querySelectorAll('.reveal'));
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('in'));
  }
