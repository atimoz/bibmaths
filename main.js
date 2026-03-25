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
    function applyFilter(filterValue) {
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      const activeBtn = document.querySelector('.filter-btn[data-filter="' + filterValue + '"]');
      if (activeBtn) activeBtn.classList.add('filter-btn--active');

      var coursGroups = document.querySelectorAll('[data-type="cours"]');
      var fichesSection = document.querySelector('[data-type="fiches"]');
      var methodesSection = document.querySelector('[data-type="methodes"]');
      var concoursDossier = document.querySelector('[data-type="concours"]');

      // Hide all sections first
      coursGroups.forEach(function(g) { g.style.display = 'none'; });
      if (fichesSection) fichesSection.style.display = 'none';
      if (methodesSection) methodesSection.style.display = 'none';
      if (concoursDossier) concoursDossier.style.display = 'none';

      // Show the relevant section
      if (filterValue === 'fiches') {
        if (fichesSection) fichesSection.style.display = '';
      } else if (filterValue === 'methodes') {
        if (methodesSection) methodesSection.style.display = '';
      } else if (filterValue === 'concours') {
        if (concoursDossier) concoursDossier.style.display = '';
      } else {
        // cours, exercices, or anything else → show cours
        coursGroups.forEach(function(g) { g.style.display = ''; });
      }

      history.replaceState(null, '', '#' + filterValue);
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        applyFilter(btn.dataset.filter);
      });
    });

    // Auto-select filter from URL hash
    const hash = window.location.hash.replace('#', '');
    if (hash && document.querySelector('.filter-btn[data-filter="' + hash + '"]')) {
      applyFilter(hash);
    }

    // Listen for hash changes (dropdown nav links like mp.html#fiches)
    window.addEventListener('hashchange', function() {
      const h = window.location.hash.replace('#', '');
      if (h && document.querySelector('.filter-btn[data-filter="' + h + '"]')) {
        applyFilter(h);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });

    // Intercept same-page dropdown links that point to #cours/#fiches/#exercices/#methodes
    document.querySelectorAll('.dropdown__item[href*="#"]').forEach(function(link) {
      link.addEventListener('click', function(e) {
        var href = link.getAttribute('href');
        var currentPage = window.location.pathname.split('/').pop();
        if (href.indexOf(currentPage) !== -1 || href.startsWith('#')) {
          var filterVal = href.split('#')[1];
          if (filterVal && document.querySelector('.filter-btn[data-filter="' + filterVal + '"]')) {
            e.preventDefault();
            applyFilter(filterVal);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }
      });
    });
  }

  // ---- Concours segmented control ----
  var segBtns = document.querySelectorAll('.concours-seg__btn');
  var segIndicator = document.querySelector('.concours-seg__indicator');
  if (segBtns.length > 0 && segIndicator) {
    function switchConcoursPanel(btn) {
      var target = btn.getAttribute('data-target');
      var index = Array.from(segBtns).indexOf(btn);
      // Move indicator
      segIndicator.style.transform = 'translateX(' + (index * 100) + '%)';
      // Toggle active class
      segBtns.forEach(function(b) { b.classList.remove('concours-seg__btn--active'); });
      btn.classList.add('concours-seg__btn--active');
      // Toggle panels
      document.querySelectorAll('.concours-panel').forEach(function(p) { p.style.display = 'none'; });
      var panel = document.getElementById(target);
      if (panel) { panel.style.display = ''; }
    }
    segBtns.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        switchConcoursPanel(btn);
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
