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

  // ---- Question filter for annale pages (?q=Q8,Q9,Q10) ----
  (function() {
    var params = new URLSearchParams(window.location.search);
    var qParam = params.get('q');
    if (!qParam) return;

    var wanted = {};
    qParam.split(',').forEach(function(q) { wanted[q.trim()] = true; });
    var wantedKeys = Object.keys(wanted);
    if (wantedKeys.length === 0) return;

    // Find which annale-exercice sections contain wanted questions
    var sectionsWithQuestions = new Set();
    document.querySelectorAll('.question[id]').forEach(function(q) {
      if (wanted[q.id]) {
        // Find parent annale-exercice section
        var section = q.closest('.annale-exercice');
        if (section) sectionsWithQuestions.add(section);
      }
    });

    // Hide all annale-exercice sections that have no wanted questions
    document.querySelectorAll('.annale-exercice').forEach(function(section) {
      if (!sectionsWithQuestions.has(section)) {
        section.style.display = 'none';
      }
    });

    // Inside visible sections, dim/hide non-wanted questions
    sectionsWithQuestions.forEach(function(section) {
      section.querySelectorAll('.question[id]').forEach(function(q) {
        if (!wanted[q.id]) {
          q.style.display = 'none';
        }
      });
    });

    // Hide TOC, intro, info box and nav if filtering
    var toc = document.querySelector('.course__toc');
    if (toc) toc.style.display = 'none';
    var intro = document.querySelector('.course__intro');
    if (intro) intro.style.display = 'none';
    var nav = document.querySelector('.course__nav');
    if (nav) nav.style.display = 'none';

    // Add a banner showing filter is active
    var article = document.querySelector('.course') || document.querySelector('article');
    if (article) {
      var banner = document.createElement('div');
      banner.className = 'question-filter-banner';
      banner.innerHTML = '<span class="question-filter-banner__label">Questions filtrees</span>' +
        '<span class="question-filter-banner__list">' + wantedKeys.join(', ') + '</span>' +
        '<a href="' + window.location.pathname + window.location.hash + '" class="question-filter-banner__show-all">Voir le sujet complet</a>';
      // Insert after back link or at start
      var backLink = article.querySelector('.course__back');
      if (backLink) {
        backLink.parentNode.insertBefore(banner, backLink.nextSibling);
      } else {
        article.insertBefore(banner, article.firstChild);
      }
    }
  })();

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
      var annalesSection = document.querySelector('[data-type="annales"]');
      var statsSection = document.querySelector('[data-type="statistiques"]');

      // Hide all sections first
      coursGroups.forEach(function(g) { g.style.display = 'none'; });
      if (fichesSection) fichesSection.style.display = 'none';
      if (methodesSection) methodesSection.style.display = 'none';
      if (concoursDossier) concoursDossier.style.display = 'none';
      if (annalesSection) annalesSection.style.display = 'none';
      if (statsSection) statsSection.style.display = 'none';

      // Show the relevant section
      if (filterValue === 'fiches') {
        if (fichesSection) fichesSection.style.display = '';
      } else if (filterValue === 'methodes') {
        if (methodesSection) methodesSection.style.display = '';
      } else if (filterValue === 'concours') {
        if (concoursDossier) { concoursDossier.style.display = ''; initExercices(); }
      } else if (filterValue === 'annales') {
        if (annalesSection) { annalesSection.style.display = ''; initAnnaleFilters(); }
      } else if (filterValue === 'statistiques') {
        if (statsSection) { statsSection.style.display = ''; initStats(); }
      } else {
        // cours or anything else → show cours
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

  // ============================================================
  //  ANNALES — Filtre par banque
  // ============================================================
  var _annaleFiltersInited = false;
  function initAnnaleFilters() {
    if (_annaleFiltersInited) return;
    _annaleFiltersInited = true;
    var filterContainer = document.getElementById('annaleFilters');
    if (!filterContainer) return;
    filterContainer.addEventListener('click', function(e) {
      var btn = e.target.closest('[data-abq]');
      if (!btn) return;
      filterContainer.querySelectorAll('.chip').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      var bq = btn.dataset.abq;
      document.querySelectorAll('.annale-banque').forEach(function(section) {
        if (bq === 'all' || section.dataset.banque === bq) {
          section.style.display = '';
        } else {
          section.style.display = 'none';
        }
      });
    });
  }

  // ============================================================
  //  EXERCICES — Chapitres → References avec corrections
  // ============================================================
  var _exoData = null;
  var _exoInited = false;
  var _annaleSections = null;

  function initExercices() {
    if (_exoInited) return;
    _exoInited = true;
    Promise.all([
      fetch('data/exercices.json').then(function(r) { return r.json(); }),
      fetch('data/annale-sections.json').then(function(r) { return r.json(); }).catch(function() { return {}; })
    ]).then(function(results) {
      _exoData = results[0];
      _annaleSections = results[1];
      renderExoHome();
    }).catch(function(e) {
      document.getElementById('exoChapters').innerHTML = '<p style="color:var(--ink-muted);text-align:center">Erreur de chargement.</p>';
    });
  }

  var BANQUE_MAP = { C: 'CCINP', CS: 'Centrale-Supelec', M: 'Mines-Ponts', X: 'X-ENS' };
  var DIFF_MAP = { S: 'Standard', I: 'Intermediaire', A: 'Avance' };
  var THEME_NAMES = { Fon: 'Fondements', Ana: 'Analyse', Alg: 'Algebre', Pro: 'Probabilites', Fondements: 'Fondements', Analyse: 'Analyse', Algebre: 'Algebre', Probabilites: 'Probabilites' };
  var THEME_ORDER_RAW = { Fon: 0, Ana: 1, Alg: 2, Pro: 3, Fondements: 0, Analyse: 1, Algebre: 2, Probabilites: 3 };

  function renderExoHome() {
    var container = document.getElementById('exoChapters');
    if (!_exoData) return;
    var chapitres = _exoData.c;

    // Group by theme only (merge SUP+SPE)
    var groups = {};
    chapitres.forEach(function(ch) {
      var key = ch.th;
      if (!groups[key]) groups[key] = { th: ch.th, items: [] };
      groups[key].items.push(ch);
    });

    // Sort groups by theme order
    var sortedKeys = Object.keys(groups).sort(function(a, b) {
      return (THEME_ORDER_RAW[a] || 99) - (THEME_ORDER_RAW[b] || 99);
    });

    var html = '';
    sortedKeys.forEach(function(key) {
      var g = groups[key];
      var themeName = THEME_NAMES[g.th] || g.th;
      var totalRefs = g.items.reduce(function(s, ch) { return s + ch.rc; }, 0);
      html += '<div class="chapter-group"><h2 class="chapter-group__title">' + themeName + '</h2><div class="chapter-grid">';
      g.items.sort(function(a, b) { return b.rc - a.rc; });
      g.items.forEach(function(ch) {
        var bqTags = ch.bq.map(function(b) {
          return '<span class="chapter-card__tag">' + b + '</span>';
        }).join('');
        html += '<div class="chapter-card chapter-card--link" data-exo-id="' + ch.id + '" tabindex="0" role="button" style="cursor:pointer">' +
          '<span class="chapter-card__num">' + ch.rc + ' ref.</span>' +
          '<h3 class="chapter-card__title">' + ch.n + '</h3>' +
          '<p class="chapter-card__desc">' + ch.bq.join(' · ') + '</p>' +
          '</div>';
      });
      html += '</div></div>';
    });

    container.innerHTML = html;

    // Event delegation for chapter clicks (robust — works even if child element is clicked)
    container.addEventListener('click', function(e) {
      var card = e.target.closest('[data-exo-id]');
      if (card) {
        e.preventDefault();
        e.stopPropagation();
        openExoDetail(card.dataset.exoId);
      }
    });
  }

  function openExoDetail(chapterId) {
    var ch = _exoData.c.find(function(c) { return c.id === chapterId; });
    if (!ch) return;

    document.getElementById('exoHome').style.display = 'none';
    var detail = document.getElementById('exoDetail');
    detail.style.display = '';
    document.getElementById('exoDetailTitle').textContent = ch.n;
    document.getElementById('exoDetailSubtitle').textContent = ch.rc + ' references — ' + (THEME_NAMES[ch.th] || ch.th);

    var refsContainer = document.getElementById('exoDetailRefs');
    refsContainer.innerHTML = '<p class="exo-count" style="text-align:center;padding:var(--space-lg)">Chargement des corrections...</p>';

    // Fetch corrections for this chapter
    fetch('data/corrections/' + chapterId + '.json')
      .then(function(r) { return r.json(); })
      .then(function(refs) {
        _currentChapterRefs = refs;
        renderBanqueFilter(refsContainer, refs);
      })
      .catch(function() {
        _currentChapterRefs = ch.refs;
        renderBanqueFilterLight(refsContainer, ch.refs);
      });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  var _currentChapterRefs = null;
  var _currentBanqueFilter = 'all';

  function renderBanqueFilter(container, refs) {
    // Collect unique banques from refs
    var banques = [];
    var seen = {};
    refs.forEach(function(ref) {
      var b = ref.banque || '';
      if (b && !seen[b]) { seen[b] = true; banques.push(b); }
    });

    var BANQUE_ORDER = { 'CCINP': 0, 'Centrale-Supelec': 1, 'Centrale-Supélec': 1, 'Mines-Ponts': 2, 'X-ENS': 3 };
    banques.sort(function(a, b) { return (BANQUE_ORDER[a] || 99) - (BANQUE_ORDER[b] || 99); });

    var filterHtml = '';
    if (banques.length > 1) {
      filterHtml = '<div class="exo-banque-filter">';
      filterHtml += '<button class="exo-banque-chip exo-banque-chip--active" data-banque="all">Tous <span class="exo-banque-chip__count">' + refs.length + '</span></button>';
      banques.forEach(function(b) {
        var bCode = b === 'CCINP' ? 'c' : (b.indexOf('Centrale') !== -1 ? 'cs' : (b.indexOf('Mines') !== -1 ? 'm' : 'x'));
        var count = refs.filter(function(r) { return r.banque === b; }).length;
        filterHtml += '<button class="exo-banque-chip exo-banque-chip--' + bCode + '" data-banque="' + b + '">' + b + ' <span class="exo-banque-chip__count">' + count + '</span></button>';
      });
      filterHtml += '</div>';
    }

    container.innerHTML = filterHtml + '<div class="exo-detail__list"></div>';
    var listEl = container.querySelector('.exo-detail__list');
    renderExoRefs(listEl, refs);
    _currentBanqueFilter = 'all';

    // Filter click handlers
    container.querySelectorAll('.exo-banque-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        container.querySelectorAll('.exo-banque-chip').forEach(function(c) { c.classList.remove('exo-banque-chip--active'); });
        chip.classList.add('exo-banque-chip--active');
        var filter = chip.dataset.banque;
        _currentBanqueFilter = filter;
        var filtered = filter === 'all' ? refs : refs.filter(function(r) { return r.banque === filter; });
        renderExoRefs(listEl, filtered);
      });
    });
  }

  function renderBanqueFilterLight(container, refs) {
    // Collect unique banques from light refs
    var banques = [];
    var seen = {};
    refs.forEach(function(ref) {
      var bFull = BANQUE_MAP[ref.b] || ref.b || '';
      if (bFull && !seen[bFull]) { seen[bFull] = true; banques.push(bFull); }
    });

    var BANQUE_ORDER = { 'CCINP': 0, 'Centrale-Supelec': 1, 'Centrale-Supélec': 1, 'Mines-Ponts': 2, 'X-ENS': 3 };
    banques.sort(function(a, b) { return (BANQUE_ORDER[a] || 99) - (BANQUE_ORDER[b] || 99); });

    var filterHtml = '';
    if (banques.length > 1) {
      filterHtml = '<div class="exo-banque-filter">';
      filterHtml += '<button class="exo-banque-chip exo-banque-chip--active" data-banque="all">Tous <span class="exo-banque-chip__count">' + refs.length + '</span></button>';
      banques.forEach(function(b) {
        var bCode = b === 'CCINP' ? 'c' : (b.indexOf('Centrale') !== -1 ? 'cs' : (b.indexOf('Mines') !== -1 ? 'm' : 'x'));
        var count = refs.filter(function(r) { return (BANQUE_MAP[r.b] || r.b) === b; }).length;
        filterHtml += '<button class="exo-banque-chip exo-banque-chip--' + bCode + '" data-banque="' + b + '">' + b + ' <span class="exo-banque-chip__count">' + count + '</span></button>';
      });
      filterHtml += '</div>';
    }

    container.innerHTML = filterHtml + '<div class="exo-detail__list"></div>';
    var listEl = container.querySelector('.exo-detail__list');
    renderExoRefsLight(listEl, refs);

    container.querySelectorAll('.exo-banque-chip').forEach(function(chip) {
      chip.addEventListener('click', function() {
        container.querySelectorAll('.exo-banque-chip').forEach(function(c) { c.classList.remove('exo-banque-chip--active'); });
        chip.classList.add('exo-banque-chip--active');
        var filter = chip.dataset.banque;
        var filtered = filter === 'all' ? refs : refs.filter(function(r) { return (BANQUE_MAP[r.b] || r.b) === filter; });
        renderExoRefsLight(listEl, filtered);
      });
    });
  }

  // Map banque + epreuve to subject URL (exercice.html for CCINP with HTML, annale page for others)
  var CCINP_HTML_YEARS = ['2017','2018','2019','2020','2021','2022','2023','2024','2025'];
  var BANQUE_TO_SLUG = {
    'CCINP': 'ccinp',
    'Centrale-Supélec': 'centrale',
    'Centrale-Supelec': 'centrale',
    'Mines-Ponts': 'mines',
    'X-ENS': 'xens'
  };
  var BANQUE_TO_PDF = {
    'CCINP': 'CCINP',
    'Centrale-Supélec': 'Centrale-Supelec',
    'Centrale-Supelec': 'Centrale-Supelec',
    'Mines-Ponts': 'Mines-Ponts',
    'X-ENS': 'X-ENS'
  };

  function getExerciceUrl(banque, epreuve, partie, questions) {
    if (!banque || !epreuve) return null;
    var match = epreuve.match(/maths\s*(\d)\s+(\d{4})/i);
    if (!match) return null;
    var mnum = match[1];
    var year = match[2];
    var slug = BANQUE_TO_SLUG[banque];
    if (!slug) return null;

    // Extract all question numbers (e.g., "5 q. : Q8, Q9, Q10, Q11, Q12" -> ["Q8","Q9","Q10","Q11","Q12"])
    var qList = [];
    if (questions) {
      var qMatches = questions.match(/Q\d+/g);
      if (qMatches) qList = qMatches;
    }
    var qParam = qList.length > 0 ? 'q=' + qList.join(',') : '';
    var firstQ = qList.length > 0 ? qList[0] : null;

    // CCINP: link to exercice.html (enonce + correction revealable)
    if (banque === 'CCINP' && CCINP_HTML_YEARS.indexOf(year) !== -1) {
      var sectionId = guessSectionId(partie);
      var url = 'cours/annales/exercice.html?banque=ccinp&annee=' + year + '&epreuve=maths' + mnum + '&section=' + sectionId;
      if (firstQ) url += '#' + firstQ;
      return url;
    }

    // All banques: link to full annale HTML page with question filter + anchor
    var htmlPath = 'cours/annales/' + slug + '-' + year + '-maths' + mnum + '.html';
    if (qParam) {
      htmlPath += '?' + qParam;
      if (firstQ) htmlPath += '#' + firstQ;
    } else {
      var anchor = findSectionAnchor(slug, year, mnum, partie);
      if (anchor) htmlPath += '#' + anchor;
    }
    return htmlPath;
  }

  function findSectionAnchor(slug, year, mnum, partie) {
    if (!partie || !_annaleSections) return null;
    var key = slug + '-' + year + '-maths' + mnum;
    var sections = _annaleSections[key];
    if (!sections || !sections.length) return null;

    var pLower = partie.toLowerCase().trim();
    var pNorm = pLower.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o');

    // Direct title match (case-insensitive, accent-insensitive)
    for (var i = 0; i < sections.length; i++) {
      var title = sections[i][1].toLowerCase();
      var tNorm = title.replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o');
      if (tNorm === pNorm || tNorm.indexOf(pNorm) !== -1 || pNorm.indexOf(tNorm) !== -1) {
        return sections[i][0];
      }
    }

    // Pattern-based matching
    // "Partie A" -> partieA or partA
    var partieMatch = pLower.match(/^partie\s+([a-z]|[ivx]+|\d+)$/i);
    if (partieMatch) {
      var suffix = partieMatch[1].toUpperCase();
      var candidates = ['partie' + suffix, 'part' + suffix, 'p' + suffix.toLowerCase()];
      for (var j = 0; j < candidates.length; j++) {
        for (var k = 0; k < sections.length; k++) {
          if (sections[k][0].toLowerCase() === candidates[j].toLowerCase()) return sections[k][0];
        }
      }
    }

    // "Exercice 1/2/I/II" -> exo1, exo2
    var exoMatch = pLower.match(/^exercice\s+(1|2|i{1,2})$/i);
    if (exoMatch) {
      var exoNum = exoMatch[1];
      if (exoNum.toLowerCase() === 'i') exoNum = '1';
      if (exoNum.toLowerCase() === 'ii') exoNum = '2';
      var eid = 'exo' + exoNum;
      for (var m = 0; m < sections.length; m++) {
        if (sections[m][0] === eid) return sections[m][0];
      }
    }

    // Sub-section pattern: "I.A", "II.B", "I.A.1" etc — find the top-level section
    var subMatch = pLower.match(/^([ivx]+|\d+)\./i);
    if (subMatch) {
      var roman = subMatch[1].toUpperCase();
      var numMap = { 'I': '1', 'II': '2', 'III': '3', 'IV': '4', 'V': '5' };
      var num = numMap[roman] || roman;
      var prefixes = ['partie' + roman, 'partie' + num, 'part' + roman, 'part' + num, 'p' + num, 'exo' + num];
      for (var pi = 0; pi < prefixes.length; pi++) {
        for (var si = 0; si < sections.length; si++) {
          if (sections[si][0].toLowerCase() === prefixes[pi].toLowerCase()) return sections[si][0];
        }
      }
    }

    // Named sections (Mines-Ponts style): fuzzy match on title keywords
    var keywords = pNorm;
    for (var fi = 0; fi < sections.length; fi++) {
      var sTitle = sections[fi][1].toLowerCase().replace(/[éèê]/g, 'e').replace(/[àâ]/g, 'a').replace(/[ùû]/g, 'u').replace(/[îï]/g, 'i').replace(/[ôö]/g, 'o');
      // Check significant word overlap
      var partieWords = keywords.split(/\s+/).filter(function(w) { return w.length > 3; });
      if (partieWords.length > 0) {
        var matchCount = partieWords.filter(function(w) { return sTitle.indexOf(w) !== -1; }).length;
        if (matchCount >= Math.ceil(partieWords.length * 0.6)) return sections[fi][0];
      }
    }

    return null;
  }

  function guessSectionId(partie) {
    if (!partie) return 'pb';
    var p = partie.toLowerCase();
    if (p.indexOf('exercice 1') !== -1 || p.indexOf('exercice i') !== -1) return 'exo1';
    if (p.indexOf('exercice 2') !== -1 || p.indexOf('exercice ii') !== -1) return 'exo2';
    if (p.indexOf('exercice') !== -1) return 'exo1';
    return 'pb'; // probleme by default
  }

  function renderExoRefs(container, refs) {
    var html = '<p class="exo-count">' + refs.length + ' references</p>';
    refs.forEach(function(ref) {
      var bCode = ref.banque === 'CCINP' ? 'c' : ref.banque === 'Centrale-Supelec' || ref.banque.indexOf('Centrale') !== -1 ? 'cs' : ref.banque === 'Mines-Ponts' || ref.banque.indexOf('Mines') !== -1 ? 'm' : 'x';
      var dCode = ref.difficulte ? ref.difficulte[0].toLowerCase() : 's';
      var bLabel = ref.banque || '';
      var annaleUrl = getExerciceUrl(ref.banque, ref.epreuve, ref.partie, ref.questions);

      html += '<div class="exo-ref">' +
        '<div class="exo-ref__header">' +
        '<span class="exo-ref__banque exo-ref__banque--' + bCode + '">' + bLabel + '</span>' +
        '<span class="exo-ref__epreuve">' + (ref.epreuve || '') + '</span>' +
        '<span class="exo-ref__partie">' + (ref.partie || '') + '</span>' +
        '<span class="exo-ref__questions">' + (ref.questions || '') + '</span>' +
        '<span class="exo-ref__diff exo-ref__diff--' + dCode + '">' + (ref.difficulte || '') + '</span>' +
        '</div>';

      if (ref.intitule) {
        html += '<p class="exo-ref__intitule">' + escHtml(ref.intitule) + '</p>';
      }

      // Action buttons row
      html += '<div class="exo-ref__actions">';
      if (annaleUrl) {
        var isPdf = annaleUrl.indexOf('.pdf') !== -1;
        html += '<a href="' + annaleUrl + '" class="exo-ref__link"' + (isPdf ? ' target="_blank"' : '') + '>' + (isPdf ? 'Sujet (PDF)' : 'Voir le sujet') + '</a>';
      }
      if (ref.corrections && ref.corrections.length > 0) {
        html += '<button class="exo-ref__toggle">Voir la correction</button>';
      }
      html += '</div>';

      if (ref.corrections && ref.corrections.length > 0) {
        html += '<div class="exo-ref__body" style="display:none">';
        ref.corrections.forEach(function(c) {
          html += '<div><span class="exo-ref__q-label">' + escHtml(c.question) + '</span>';
          var corrHtml = formatCorrection(c.correction || '');
          html += corrHtml + '</div>';
        });
        html += '</div>';
      }
      html += '</div>';
    });

    container.innerHTML = html;

    // Correction toggle handlers
    container.querySelectorAll('.exo-ref__toggle').forEach(function(btn) {
      btn.addEventListener('click', function() {
        var body = btn.closest('.exo-ref').querySelector('.exo-ref__body');
        if (body.style.display === 'none') {
          body.style.display = '';
          btn.textContent = 'Masquer la correction';
          // Render KaTeX on first open
          if (!body.dataset.rendered && window.renderMathInElement) {
            renderMathInElement(body, {
              delimiters: [
                { left: '$$', right: '$$', display: true },
                { left: '$', right: '$', display: false },
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
              ],
              throwOnError: false
            });
            body.dataset.rendered = '1';
          }
        } else {
          body.style.display = 'none';
          btn.textContent = 'Voir la correction';
        }
      });
    });
  }

  function renderExoRefsLight(container, refs) {
    var html = '<p class="exo-count">' + refs.length + ' references</p>';
    refs.forEach(function(ref) {
      var bFull = BANQUE_MAP[ref.b] || ref.b;
      var dFull = DIFF_MAP[ref.d] || ref.d;
      var dCode = (ref.d || 's').toLowerCase();
      var bCode = ref.b === 'C' ? 'c' : ref.b === 'CS' ? 'cs' : ref.b === 'M' ? 'm' : 'x';

      html += '<div class="exo-ref">' +
        '<div class="exo-ref__header">' +
        '<span class="exo-ref__banque exo-ref__banque--' + bCode + '">' + bFull + '</span>' +
        '<span class="exo-ref__epreuve">' + (ref.e || '') + '</span>' +
        '<span class="exo-ref__partie">' + (ref.p || '') + '</span>' +
        '<span class="exo-ref__questions">' + (ref.q || '') + '</span>' +
        '<span class="exo-ref__diff exo-ref__diff--' + dCode + '">' + dFull + '</span>' +
        '</div></div>';
    });
    container.innerHTML = html;
  }

  function formatCorrection(text) {
    // Handle code blocks
    text = text.replace(/```(\w*)\n?([\s\S]*?)```/g, function(m, lang, code) {
      return '<pre><code>' + escHtml(code.trim()) + '</code></pre>';
    });
    // Handle inline code
    text = text.replace(/`([^`]+)`/g, '<code>$1</code>');
    // Handle paragraphs (double newline)
    var parts = text.split(/\n\n+/);
    return parts.map(function(p) { return '<p>' + p.replace(/\n/g, '<br>') + '</p>'; }).join('');
  }

  function escHtml(s) {
    if (!s) return '';
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Back button
  var exoBack = document.getElementById('exoBack');
  if (exoBack) {
    exoBack.addEventListener('click', function() {
      document.getElementById('exoDetail').style.display = 'none';
      document.getElementById('exoHome').style.display = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ============================================================
  //  STATISTIQUES — Dashboard CCINP
  // ============================================================
  var _statsData = null;
  var _statsInited = false;
  var _statsActiveExam = null;

  function initStats() {
    if (_statsInited) return;
    _statsInited = true;
    fetch('data/stats.json')
      .then(function(r) { return r.json(); })
      .then(function(data) {
        _statsData = data;
        renderStatsPicker();
        var firstKey = Object.keys(data.exams)[0];
        switchStatsExam(firstKey);
      })
      .catch(function() {
        document.getElementById('statsDashboard').innerHTML = '<p style="color:var(--ink-muted);text-align:center;padding:var(--space-xl)">Erreur de chargement.</p>';
      });
  }

  function renderStatsPicker() {
    var picker = document.getElementById('statsPicker');
    var keys = Object.keys(_statsData.exams);
    var html = '';
    keys.forEach(function(key, i) {
      var ex = _statsData.exams[key];
      html += '<button class="stats-picker__btn' + (i === 0 ? ' stats-picker__btn--active' : '') + '" data-exam="' + key + '">' + ex.short + '</button>';
    });
    picker.innerHTML = html;

    picker.querySelectorAll('.stats-picker__btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        picker.querySelectorAll('.stats-picker__btn').forEach(function(b) { b.classList.remove('stats-picker__btn--active'); });
        btn.classList.add('stats-picker__btn--active');
        switchStatsExam(btn.dataset.exam);
      });
    });
  }

  function switchStatsExam(examKey) {
    _statsActiveExam = examKey;
    var ex = _statsData.exams[examKey];
    if (!ex) return;

    var dash = document.getElementById('statsDashboard');
    var d = ex.difficulte;
    var m = ex.methode;
    var total = d.standard + d.intermediaire + d.avance;
    var pctS = Math.round(d.standard / total * 100);
    var pctI = Math.round(d.intermediaire / total * 100);
    var pctA = 100 - pctS - pctI;
    var mTotal = m.classique + m.tunnel + m.pavlov + m.courspur;

    var html = '';

    // Header
    html += '<div class="stats-header" style="margin-top:0">';
    html += '<h3 class="stats-header__title">' + ex.label + '</h3>';
    html += '<p class="stats-header__subtitle">' + ex.questions + ' questions &middot; ' + ex.parties + ' parties</p>';
    html += '<p class="stats-header__themes">' + escHtml(ex.themes) + '</p>';
    html += '</div>';

    // KPIs
    html += '<div class="stats-kpis">';
    html += '<div class="stats-kpi"><span class="stats-kpi__value">' + ex.questions + '</span><span class="stats-kpi__label">Questions</span></div>';
    html += '<div class="stats-kpi"><span class="stats-kpi__value">' + pctS + '%</span><span class="stats-kpi__label">Standard</span></div>';
    html += '<div class="stats-kpi"><span class="stats-kpi__value">' + pctI + '%</span><span class="stats-kpi__label">Intermediaire</span></div>';
    html += '<div class="stats-kpi"><span class="stats-kpi__value">' + pctA + '%</span><span class="stats-kpi__label">Avance</span></div>';
    html += '</div>';

    // Donuts row
    html += '<div class="stats-row">';

    // Donut difficulte
    var dDeg1 = (d.standard / total * 360);
    var dDeg2 = dDeg1 + (d.intermediaire / total * 360);
    html += '<div class="stats-card"><div class="stats-card__title">Repartition par difficulte</div>';
    html += '<div class="stats-donut" style="background:conic-gradient(#4ECDC4 0deg ' + dDeg1 + 'deg, #FFB347 ' + dDeg1 + 'deg ' + dDeg2 + 'deg, #FF6B6B ' + dDeg2 + 'deg 360deg)"><div class="stats-donut__hole"></div></div>';
    html += '<div class="stats-donut__legend">';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#4ECDC4"></span>Standard ' + d.standard + '</span>';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#FFB347"></span>Intermediaire ' + d.intermediaire + '</span>';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#FF6B6B"></span>Avance ' + d.avance + '</span>';
    html += '</div></div>';

    // Donut methode
    var mDeg1 = (m.classique / mTotal * 360);
    var mDeg2 = mDeg1 + (m.tunnel / mTotal * 360);
    var mDeg3 = mDeg2 + (m.pavlov / mTotal * 360);
    html += '<div class="stats-card"><div class="stats-card__title">Repartition par methode</div>';
    html += '<div class="stats-donut" style="background:conic-gradient(#7B68EE 0deg ' + mDeg1 + 'deg, #FF8C42 ' + mDeg1 + 'deg ' + mDeg2 + 'deg, #4A90D9 ' + mDeg2 + 'deg ' + mDeg3 + 'deg, #5CB85C ' + mDeg3 + 'deg 360deg)"><div class="stats-donut__hole"></div></div>';
    html += '<div class="stats-donut__legend">';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#7B68EE"></span>Classique ' + m.classique + '</span>';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#FF8C42"></span>Tunnel ' + m.tunnel + '</span>';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#4A90D9"></span>Automatisme ' + m.pavlov + '</span>';
    html += '<span class="stats-donut__item"><span class="stats-donut__dot" style="background:#5CB85C"></span>Cours pur ' + m.courspur + '</span>';
    html += '</div></div>';
    html += '</div>';

    // Stacked bars by partie
    if (ex.parties_detail) {
      html += '<div class="stats-bars"><div class="stats-bars__title">Questions par partie — Repartition par difficulte</div>';
      ex.parties_detail.forEach(function(p) {
        var pTotal = p.standard + p.intermediaire + p.avance;
        if (pTotal === 0) return;
        var ws = (p.standard / pTotal * 100).toFixed(1);
        var wi = (p.intermediaire / pTotal * 100).toFixed(1);
        var wa = (p.avance / pTotal * 100).toFixed(1);
        html += '<div class="stats-bar-group"><div class="stats-bar-group__label">' + escHtml(p.nom) + ' <span style="color:var(--ink-muted);font-size:0.7rem">(' + pTotal + ' q.)</span></div>';
        html += '<div class="stats-bar-group__track">';
        if (p.standard > 0) html += '<div class="stats-bar-group__seg stats-bar-group__seg--s" style="width:' + ws + '%">' + p.standard + '</div>';
        if (p.intermediaire > 0) html += '<div class="stats-bar-group__seg stats-bar-group__seg--i" style="width:' + wi + '%">' + p.intermediaire + '</div>';
        if (p.avance > 0) html += '<div class="stats-bar-group__seg stats-bar-group__seg--a" style="width:' + wa + '%">' + p.avance + '</div>';
        html += '</div></div>';
      });
      html += '</div>';
    }

    // Difficulty arc
    if (ex.arc) {
      html += '<div class="stats-arc"><div class="stats-arc__title">Arc de difficulte — Q1 a Q' + ex.questions + '</div>';
      html += '<div class="stats-arc__dots">';
      ex.arc.forEach(function(a) {
        var cls = a.d === 'S' ? 's' : a.d === 'I' ? 'i' : 'a';
        html += '<div class="stats-arc__dot stats-arc__dot--' + cls + '">' + a.q.replace('Q', '') + '</div>';
      });
      html += '</div>';
      html += '<div class="stats-arc__legend">';
      html += '<span class="stats-arc__legend-item"><span class="stats-donut__dot" style="background:#4ECDC4"></span>Standard</span>';
      html += '<span class="stats-arc__legend-item"><span class="stats-donut__dot" style="background:#FFB347"></span>Intermediaire</span>';
      html += '<span class="stats-arc__legend-item"><span class="stats-donut__dot" style="background:#FF6B6B"></span>Avance</span>';
      html += '</div></div>';
    }

    // Reflexes & Tunnels
    if ((ex.pavlov && ex.pavlov.length > 0) || (ex.tunnels && ex.tunnels.length > 0)) {
      html += '<div class="stats-reflexes">';

      // Pavlov column
      html += '<div class="stats-col"><h3 class="stats-col__title stats-col__title--pavlov">Automatismes</h3>';
      html += '<p class="stats-col__count">' + (ex.pavlov ? ex.pavlov.length : 0) + ' automatisme' + (ex.pavlov && ex.pavlov.length > 1 ? 's' : '') + '</p>';
      html += '<div class="stats-col__items">';
      if (ex.pavlov) ex.pavlov.forEach(function(item) {
        html += '<div class="stats-item"><span class="stats-item__q">' + item.q + '</span><div class="stats-item__content"><div class="stats-item__title">' + escHtml(item.titre) + '</div><div class="stats-item__desc">' + escHtml(item.desc) + '</div></div></div>';
      });
      html += '</div></div>';

      // Tunnels column
      html += '<div class="stats-col"><h3 class="stats-col__title stats-col__title--tunnel">Tunnels a anticiper</h3>';
      html += '<p class="stats-col__count">' + (ex.tunnels ? ex.tunnels.length : 0) + ' sequence' + (ex.tunnels && ex.tunnels.length > 1 ? 's' : '') + ' guidee' + (ex.tunnels && ex.tunnels.length > 1 ? 's' : '') + '</p>';
      html += '<div class="stats-col__items">';
      if (ex.tunnels) ex.tunnels.forEach(function(item) {
        html += '<div class="stats-item"><span class="stats-item__q">' + item.q + '</span><div class="stats-item__content"><div class="stats-item__title">' + escHtml(item.titre) + '</div><div class="stats-item__desc">' + escHtml(item.desc) + '</div></div></div>';
      });
      html += '</div></div>';
      html += '</div>';
    }

    // Methodes classiques
    if (ex.classiques && ex.classiques.length > 0) {
      html += '<div class="stats-methodes"><h3 class="stats-methodes__title">Methodes classiques a maitriser</h3>';
      html += '<p class="stats-methodes__count">' + ex.classiques.length + ' question' + (ex.classiques.length > 1 ? 's' : '') + ' Intermediaire & Avance</p>';
      html += '<div class="stats-methodes__grid">';
      ex.classiques.forEach(function(item) {
        html += '<div class="stats-item"><span class="stats-item__q">' + item.q + '</span><div class="stats-item__content"><div class="stats-item__title">' + escHtml(item.titre) + '</div><div class="stats-item__desc">' + escHtml(item.desc) + '</div></div></div>';
      });
      html += '</div></div>';
    }

    dash.innerHTML = html;
  }

});
