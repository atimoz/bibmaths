/* ============================================
   BibMaths — Main JavaScript
   ============================================ */

// ---- Theme toggle (runs immediately to prevent flash) ----
(function() {
  const saved = localStorage.getItem('bibmaths-theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

document.addEventListener('DOMContentLoaded', () => {

  // ---- Theme toggle button ----
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('bibmaths-theme', 'light');
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('bibmaths-theme', 'dark');
      }
    });
  }

  // ---- KaTeX rendering ----
  if (window.katex) {
    renderFormulas();
  } else {
    document.addEventListener('DOMContentLoaded', renderFormulas);
    // Fallback: wait for KaTeX to load
    const interval = setInterval(() => {
      if (window.katex) {
        clearInterval(interval);
        renderFormulas();
      }
    }, 100);
  }

  function renderFormulas() {
    const euler = document.getElementById('euler');
    if (euler) {
      katex.render('e^{i\\pi} + 1 = 0', euler, { displayMode: true });
    }

    const daily = document.getElementById('dailyFormula');
    if (daily) {
      katex.render('\\int_{\\partial \\Omega} \\omega = \\int_{\\Omega} d\\omega', daily, { displayMode: true });
    }
  }

  // ---- Mobile menu ----
  const menuBtn = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      menuBtn.classList.toggle('active');
      mobileMenu.classList.toggle('active');
    });

    // Accordion toggles
    mobileMenu.querySelectorAll('.mobile-menu__toggle').forEach(toggle => {
      toggle.addEventListener('click', () => {
        const sub = toggle.nextElementSibling;
        const wasActive = toggle.classList.contains('active');

        // Close all
        mobileMenu.querySelectorAll('.mobile-menu__toggle').forEach(t => t.classList.remove('active'));
        mobileMenu.querySelectorAll('.mobile-menu__sub').forEach(s => s.classList.remove('active'));

        // Open clicked if wasn't active
        if (!wasActive) {
          toggle.classList.add('active');
          sub.classList.add('active');
        }
      });
    });

    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menuBtn.classList.remove('active');
        mobileMenu.classList.remove('active');
      });
    });
  }

  // ---- Filter buttons (MPSI / MP pages) ----
  const filterBtns = document.querySelectorAll('.filter-btn');

  if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
        btn.classList.add('filter-btn--active');
      });
    });
  }

  // ---- Scroll reveal ----
  const revealElements = document.querySelectorAll(
    '.domain-card, .programme-card, .resource-card, .tool-card, .section__header, .formula-showcase__inner, .about-layout, .chapter-card, .chapter-group__title, .semester-label'
  );

  revealElements.forEach(el => el.classList.add('reveal'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger siblings
        const siblings = entry.target.parentElement.querySelectorAll('.reveal');
        const index = Array.from(siblings).indexOf(entry.target);
        const delay = Math.min(index * 80, 400);

        setTimeout(() => {
          entry.target.classList.add('visible');
        }, delay);

        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -60px 0px'
  });

  revealElements.forEach(el => observer.observe(el));

  // ---- Nav scroll effect ----
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 100) {
      nav.style.boxShadow = '0 1px 20px rgba(0,0,0,0.06)';
    } else {
      nav.style.boxShadow = 'none';
    }
  }, { passive: true });

  // ---- Smooth scroll for anchor links ----
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    const href = anchor.getAttribute('href');
    if (href === '#' || href.length < 2) return; // skip bare # links
    anchor.addEventListener('click', (e) => {
      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } catch (err) {
        // invalid selector, let browser handle normally
      }
    });
  });

});
