/* ═══════════════════════════════════════════════
   STATISTIQUES — Dashboard d'analyse des concours
   E3A-Polytech + CCINP  |  Frequences, difficulte, comparaison
   ═══════════════════════════════════════════════ */
(function() {
  'use strict';

  // ── Constants ──
  var CHAPTER_LABELS = {
    'reduction-algebrique':          'Reduction algebrique',
    'series-entieres':               'Series entieres',
    'suites-series-fonctions':       'Suites & series de fonctions',
    'integrales-impropres':          'Integrales impropres',
    'integrales-parametres':         'Integrales a parametre',
    'espaces-prehilbertiens':        'Espaces prehilbertiens',
    'endomorphismes-euclidiens':     'Endomorphismes euclidiens',
    'equations-differentielles-spe': 'Equations differentielles',
    'polynomes':                     'Polynomes',
    'probabilites-spe':              'Probabilites',
    'topologie':                     'Topologie',
    'espaces-vectoriels-normes':     'Espaces vectoriels normes',
    'series-numeriques-spe':         'Series numeriques',
    'calcul-differentiel':           'Calcul differentiel',
    'reduction-geometrique':         'Reduction geometrique',
    'determinants':                  'Determinants',
    'complexes':                     'Nombres complexes',
    'trigonometrie':                  'Trigonometrie'
  };

  var DIFF_COLORS  = { standard: '#2dd4a8', intermediaire: '#f0a050', avance: '#ef5350' };
  var BANK_COLORS  = { e3a: '#D97706', ccinp: '#4A90D9' };
  var BANK_LABELS  = { e3a: 'E3A-Polytech', ccinp: 'CCINP' };

  var CHAPTER_URLS = {
    'reduction-algebrique':          'cours/mp-02-reduction-avancee.html',
    'series-entieres':               'cours/mp-08-series-entieres-avancees.html',
    'suites-series-fonctions':       'cours/mp-07-suites-series-fonctions.html',
    'integrales-impropres':          'cours/mp-11-integrales-generalisees.html',
    'integrales-parametres':         'cours/mp-12-fonctions-plusieurs-variables.html',
    'espaces-prehilbertiens':        'cours/mp-04-espaces-euclidiens.html',
    'endomorphismes-euclidiens':     'cours/mp-05-endomorphismes-remarquables.html',
    'equations-differentielles-spe': 'cours/mp-16-equations-differentielles-lineaires.html',
    'polynomes':                     'cours/mpsi-04-polynomes.html',
    'probabilites-spe':              'cours/mp-18-variables-aleatoires-densite.html',
    'topologie':                     'cours/mp-06-topologie-evn.html',
    'espaces-vectoriels-normes':     'cours/mp-06-topologie-evn.html',
    'series-numeriques-spe':         'cours/mp-07-suites-series-fonctions.html',
    'calcul-differentiel':           'cours/mp-17-calcul-differentiel.html',
    'reduction-geometrique':         'cours/mp-02-reduction-avancee.html',
    'determinants':                  'cours/mpsi-18-determinants.html',
    'complexes':                     'cours/mpsi-03-nombres-complexes.html'
  };

  // ── State ──
  var e3aData  = null;
  var ccinpData = null;

  // ── Bootstrap ──
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    Promise.all([
      fetch('data/descriptions-e3a.json').then(function(r) { return r.json(); }),
      fetch('data/stats.json').then(function(r) { return r.json(); })
    ]).then(function(results) {
      e3aData  = results[0];
      ccinpData = results[1];
      bindTabs();
      renderGlobal();
    }).catch(function(err) {
      console.error('Erreur chargement stats:', err);
    });
  }

  // ── Tab switching ──
  function bindTabs() {
    var tabs = document.querySelectorAll('.stats-tab');
    tabs.forEach(function(tab) {
      tab.addEventListener('click', function() {
        tabs.forEach(function(t) { t.classList.remove('stats-tab--active'); });
        tab.classList.add('stats-tab--active');
        switchBank(tab.dataset.bank);
      });
    });
  }

  function switchBank(bank) {
    var panels = document.querySelectorAll('.stats-panel');
    panels.forEach(function(p) { p.style.display = 'none'; });

    if (bank === 'global') {
      document.getElementById('panelGlobal').style.display = '';
      renderGlobal();
    } else if (bank === 'e3a') {
      document.getElementById('panelE3a').style.display = '';
      renderE3a();
    } else if (bank === 'ccinp') {
      document.getElementById('panelCcinp').style.display = '';
      renderCcinp();
    } else if (bank === 'plan') {
      document.getElementById('panelPlan').style.display = '';
    }
  }

  // ═══════════════════════════════════════════════
  //  DATA PROCESSING
  // ═══════════════════════════════════════════════

  function computeChapterFreq(bank) {
    var freq = {};
    if (bank === 'e3a' || bank === 'global') {
      var totalE3a = e3aData.sujets.length;
      e3aData.sujets.forEach(function(s) {
        (s.chapitres || []).forEach(function(ch) {
          if (!freq[ch]) freq[ch] = { e3a: 0, ccinp: 0 };
          freq[ch].e3a++;
        });
      });
    }
    if (bank === 'ccinp' || bank === 'global') {
      var exams = ccinpData.exams;
      for (var k in exams) {
        (exams[k].chapitres || []).forEach(function(ch) {
          if (!freq[ch]) freq[ch] = { e3a: 0, ccinp: 0 };
          freq[ch].ccinp++;
        });
      }
    }
    return freq;
  }

  function getE3aTotalSujets() {
    return e3aData.sujets.filter(function(s) { return s.chapitres && s.chapitres.length > 0; }).length;
  }

  function getCcinpTotalExams() {
    return Object.keys(ccinpData.exams).length;
  }

  function normDiff(raw) {
    if (!raw) return null;
    var l = raw.toLowerCase();
    if (l.indexOf('avance') !== -1 && l.indexOf('intermediaire') !== -1) return 'intermediaire';
    if (l.indexOf('avance') !== -1) return 'avance';
    if (l.indexOf('intermediaire') !== -1 && l.indexOf('standard') !== -1) return 'standard';
    if (l.indexOf('intermediaire') !== -1) return 'intermediaire';
    return 'standard';
  }

  function computeE3aDiffDist() {
    var d = { standard: 0, intermediaire: 0, avance: 0 };
    e3aData.sujets.forEach(function(s) {
      (s.exercices || []).forEach(function(ex) {
        var cat = normDiff(ex.difficulte);
        if (cat) d[cat]++;
      });
    });
    return d;
  }

  function computeCcinpDiffDist() {
    var d = { standard: 0, intermediaire: 0, avance: 0 };
    var exams = ccinpData.exams;
    for (var k in exams) {
      var dd = exams[k].difficulte;
      d.standard += dd.standard || 0;
      d.intermediaire += dd.intermediaire || 0;
      d.avance += dd.avance || 0;
    }
    return d;
  }

  function computeE3aDiffByYear() {
    var years = {};
    e3aData.sujets.forEach(function(s) {
      if (!years[s.annee]) years[s.annee] = { standard: 0, intermediaire: 0, avance: 0, total: 0 };
      (s.exercices || []).forEach(function(ex) {
        var cat = normDiff(ex.difficulte);
        if (cat) { years[s.annee][cat]++; years[s.annee].total++; }
      });
    });
    var arr = [];
    for (var y in years) arr.push({ year: parseInt(y), d: years[y] });
    arr.sort(function(a, b) { return b.year - a.year; });
    return arr;
  }

  function getAllChapters() {
    var s = new Set();
    e3aData.sujets.forEach(function(sj) { (sj.chapitres || []).forEach(function(c) { s.add(c); }); });
    var exams = ccinpData.exams;
    for (var k in exams) (exams[k].chapitres || []).forEach(function(c) { s.add(c); });
    return s.size;
  }

  function getE3aYears() {
    var s = new Set();
    e3aData.sujets.forEach(function(sj) { s.add(sj.annee); });
    return s.size;
  }

  // ═══════════════════════════════════════════════
  //  CHART HELPERS
  // ═══════════════════════════════════════════════

  function donutHTML(segments, size, centerLabel) {
    // segments: [{value, color, label}]
    var total = 0;
    segments.forEach(function(s) { total += s.value; });
    if (total === 0) return '<div style="color:var(--ink-faint);font-size:.8rem;">Aucune donnee</div>';

    var gradParts = [];
    var deg = 0;
    segments.forEach(function(s) {
      var next = deg + (s.value / total * 360);
      gradParts.push(s.color + ' ' + deg.toFixed(1) + 'deg ' + next.toFixed(1) + 'deg');
      deg = next;
    });

    var sz = size || 160;
    var hole = Math.round(sz * 0.6);
    var fontSize = sz >= 160 ? '1.3rem' : '1rem';

    var html = '<div class="sp-donut" style="width:' + sz + 'px;height:' + sz + 'px;background:conic-gradient(' + gradParts.join(',') + ');">';
    html += '<div class="sp-donut__hole" style="width:' + hole + 'px;height:' + hole + 'px;">';
    html += '<span class="sp-donut__total" style="font-size:' + fontSize + ';">' + total + '</span>';
    html += '<span class="sp-donut__total-label">' + (centerLabel || 'total') + '</span>';
    html += '</div></div>';
    html += '<div class="sp-donut-legend">';
    segments.forEach(function(s) {
      var pct = (s.value / total * 100).toFixed(0);
      html += '<div class="sp-donut-legend__item"><span class="sp-donut-legend__dot" style="background:' + s.color + ';"></span>' + s.label + ' <span class="sp-donut-legend__pct">' + pct + '%</span></div>';
    });
    html += '</div>';
    return html;
  }

  function freqBarHTML(label, counts, maxVal, banks) {
    // banks: [{key, count, color}]
    var html = '<div class="sp-freq__row">';
    html += '<div class="sp-freq__label">' + esc(label) + '</div>';
    html += '<div class="sp-freq__bars">';
    banks.forEach(function(b) {
      var w = maxVal > 0 ? (b.count / maxVal * 100) : 0;
      html += '<div class="sp-freq__bar" style="width:' + w.toFixed(1) + '%;background:' + b.color + ';">';
      if (w > 12) html += '<span class="sp-freq__val">' + b.count + '</span>';
      html += '</div>';
    });
    html += '</div>';
    html += '</div>';
    return html;
  }

  function stackedBarHTML(s, i, a) {
    var total = s + i + a;
    if (total === 0) return '';
    var ws = (s / total * 100).toFixed(1);
    var wi = (i / total * 100).toFixed(1);
    var wa = (a / total * 100).toFixed(1);
    var html = '<div class="sp-stacked">';
    if (s > 0) html += '<div class="sp-stacked__seg" style="width:' + ws + '%;background:' + DIFF_COLORS.standard + ';">' + (parseFloat(ws) > 15 ? s : '') + '</div>';
    if (i > 0) html += '<div class="sp-stacked__seg" style="width:' + wi + '%;background:' + DIFF_COLORS.intermediaire + ';">' + (parseFloat(wi) > 15 ? i : '') + '</div>';
    if (a > 0) html += '<div class="sp-stacked__seg" style="width:' + wa + '%;background:' + DIFF_COLORS.avance + ';">' + (parseFloat(wa) > 15 ? a : '') + '</div>';
    html += '</div>';
    return html;
  }

  function kpiCard(value, label, color) {
    return '<div class="sp-kpi" style="--kpi-accent:' + color + ';--kpi-glow:' + color + '15;"><div class="sp-kpi__value" style="color:' + color + ';">' + value + '</div><div class="sp-kpi__label">' + label + '</div></div>';
  }

  function insightCard(icon, title, text, color) {
    return '<div class="sp-insight" style="border-color:' + color + '22;--insight-accent:' + color + ';">' +
      '<div class="sp-insight__title" style="color:' + color + ';">' + icon + ' ' + title + '</div>' +
      '<div class="sp-insight__text">' + text + '</div></div>';
  }

  function diffExplainer() {
    return '<details class="sp-diff-explainer">' +
      '<summary>Comprendre les niveaux de difficulte</summary>' +
      '<div class="sp-diff-explainer__body">' +
      '<div class="sp-diff-explainer__level">' +
        '<span class="sp-diff-explainer__dot" style="background:' + DIFF_COLORS.standard + ';"></span>' +
        '<span class="sp-diff-explainer__name" style="color:' + DIFF_COLORS.standard + ';">Standard</span>' +
        '<span class="sp-diff-explainer__desc">Application directe du cours. A maitriser absolument — ce sont les points « gratuits » du concours.</span>' +
      '</div>' +
      '<div class="sp-diff-explainer__level">' +
        '<span class="sp-diff-explainer__dot" style="background:' + DIFF_COLORS.intermediaire + ';"></span>' +
        '<span class="sp-diff-explainer__name" style="color:' + DIFF_COLORS.intermediaire + ';">Intermediaire</span>' +
        '<span class="sp-diff-explainer__desc">Necessite de combiner plusieurs techniques ou une bonne maitrise des outils. A tenter apres avoir securise le Standard.</span>' +
      '</div>' +
      '<div class="sp-diff-explainer__level">' +
        '<span class="sp-diff-explainer__dot" style="background:' + DIFF_COLORS.avance + ';"></span>' +
        '<span class="sp-diff-explainer__name" style="color:' + DIFF_COLORS.avance + ';">Avance</span>' +
        '<span class="sp-diff-explainer__desc">Questions de synthese ou techniques inhabituelles. Ce sont les questions departageantes — ne pas paniquer si on bloque.</span>' +
      '</div>' +
      '</div></details>';
  }

  function diffLegend() {
    return '<div class="sp-legend">' +
      '<span class="sp-legend__item"><span class="sp-legend__dot" style="background:' + DIFF_COLORS.standard + ';"></span>Standard</span>' +
      '<span class="sp-legend__item"><span class="sp-legend__dot" style="background:' + DIFF_COLORS.intermediaire + ';"></span>Intermediaire</span>' +
      '<span class="sp-legend__item"><span class="sp-legend__dot" style="background:' + DIFF_COLORS.avance + ';"></span>Avance</span>' +
      '</div>';
  }

  function esc(s) { return (s || '').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

  function chapterLink(slug) {
    var label = CHAPTER_LABELS[slug] || slug;
    var url = CHAPTER_URLS[slug];
    if (url) return '<a href="' + url + '">' + esc(label) + '</a>';
    return esc(label);
  }

  function chapterTag(slug) {
    var label = CHAPTER_LABELS[slug] || slug;
    var url = CHAPTER_URLS[slug];
    if (url) return '<a class="sp-tag" href="' + url + '">' + esc(label) + '</a>';
    return '<span class="sp-tag">' + esc(label) + '</span>';
  }

  // ═══════════════════════════════════════════════
  //  ANIMATION HELPERS
  // ═══════════════════════════════════════════════

  function observeSections(container) {
    var sections = container.querySelectorAll('.sp-section');
    if (!sections.length) return;

    function revealIfVisible() {
      var vh = window.innerHeight || document.documentElement.clientHeight;
      var allDone = true;
      sections.forEach(function(s) {
        if (s.classList.contains('sp-visible')) return;
        var rect = s.getBoundingClientRect();
        if (rect.top < vh - 30 && rect.bottom > 0) {
          s.classList.add('sp-visible');
          // Stagger children
          s.querySelectorAll('.sp-freq__row, .sp-year-row').forEach(function(row, idx) {
            row.style.transitionDelay = (idx * 50) + 'ms';
          });
          s.querySelectorAll('.sp-freq__bar').forEach(function(bar, idx) {
            bar.style.transitionDelay = (idx * 40 + 100) + 'ms';
          });
        } else {
          allDone = false;
        }
      });
      if (allDone) {
        window.removeEventListener('scroll', onScroll);
      }
    }

    var ticking = false;
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(function() { revealIfVisible(); ticking = false; });
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    // Check immediately + after a frame for sections already in viewport
    requestAnimationFrame(function() { revealIfVisible(); });
  }

  // ═══════════════════════════════════════════════
  //  RENDER: VUE GLOBALE
  // ═══════════════════════════════════════════════

  function renderGlobal() {
    var el = document.getElementById('globalDashboard');
    if (!el) return;

    var freq = computeChapterFreq('global');
    var e3aDiff = computeE3aDiffDist();
    var ccinpDiff = computeCcinpDiffDist();
    var totalE3a = getE3aTotalSujets();
    var totalCcinp = getCcinpTotalExams();
    var totalAll = totalE3a + totalCcinp;
    var allChapters = getAllChapters();
    var e3aYears = getE3aYears();

    var e3aDiffTotal = e3aDiff.standard + e3aDiff.intermediaire + e3aDiff.avance;
    var ccinpDiffTotal = ccinpDiff.standard + ccinpDiff.intermediaire + ccinpDiff.avance;
    var globalStdPct = e3aDiffTotal + ccinpDiffTotal > 0 ?
      ((e3aDiff.standard + ccinpDiff.standard) / (e3aDiffTotal + ccinpDiffTotal) * 100).toFixed(0) : 0;

    var html = '';

    // KPI Band
    html += '<div class="sp-kpis">';
    html += kpiCard(totalAll, 'sujets analyses', 'var(--accent)');
    html += kpiCard(globalStdPct + '%', 'questions Standard', DIFF_COLORS.standard);
    html += kpiCard(allChapters, 'chapitres couverts', BANK_COLORS.e3a);
    html += kpiCard(e3aYears, 'annees couvertes', BANK_COLORS.ccinp);
    html += '</div>';

    // Frequency comparison
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Frequence des chapitres par banque</h3>';
    html += '<p class="sp-section__sub">Nombre de sujets contenant chaque chapitre</p>';

    // Sort by total frequency
    var sorted = [];
    for (var ch in freq) sorted.push({ ch: ch, e3a: freq[ch].e3a, ccinp: freq[ch].ccinp, total: freq[ch].e3a + freq[ch].ccinp });
    sorted.sort(function(a, b) { return b.total - a.total; });

    var maxFreq = sorted.length > 0 ? sorted[0].total : 1;
    html += '<div class="sp-freq sp-freq--dual">';
    sorted.forEach(function(item, idx) {
      html += '<div class="sp-freq__row">';
      html += '<div class="sp-freq__rank">#' + (idx + 1) + '</div>';
      html += '<div class="sp-freq__label">' + chapterLink(item.ch) + '</div>';
      html += '<div class="sp-freq__bars">';
      var we3a = maxFreq > 0 ? (item.e3a / maxFreq * 100) : 0;
      var wccinp = maxFreq > 0 ? (item.ccinp / maxFreq * 100) : 0;
      html += '<div class="sp-freq__bar sp-freq__bar--e3a" style="width:' + we3a.toFixed(1) + '%;"></div>';
      html += '<div class="sp-freq__bar sp-freq__bar--ccinp" style="width:' + wccinp.toFixed(1) + '%;"></div>';
      html += '</div>';
      html += '<div class="sp-freq__count">' + item.e3a + ' / ' + item.ccinp + '</div>';
      html += '</div>';
    });
    html += '</div>';
    html += '<div class="sp-bank-legend">';
    html += '<span class="sp-legend__item"><span class="sp-legend__dot" style="background:' + BANK_COLORS.e3a + ';"></span>E3A-Polytech (' + totalE3a + ' sujets)</span>';
    html += '<span class="sp-legend__item"><span class="sp-legend__dot" style="background:' + BANK_COLORS.ccinp + ';"></span>CCINP (' + totalCcinp + ' epreuves)</span>';
    html += '</div>';
    html += '</div>';

    // Difficulty comparison donuts
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Repartition de la difficulte</h3>';
    html += diffExplainer();
    html += '<div class="sp-compare">';
    // E3A donut
    html += '<div class="sp-compare__col">';
    html += '<div class="sp-compare__label" style="color:' + BANK_COLORS.e3a + ';">E3A-Polytech</div>';
    html += donutHTML([
      { value: e3aDiff.standard, color: DIFF_COLORS.standard, label: 'Standard' },
      { value: e3aDiff.intermediaire, color: DIFF_COLORS.intermediaire, label: 'Intermediaire' },
      { value: e3aDiff.avance, color: DIFF_COLORS.avance, label: 'Avance' }
    ], 150);
    html += '</div>';
    // CCINP donut
    html += '<div class="sp-compare__col">';
    html += '<div class="sp-compare__label" style="color:' + BANK_COLORS.ccinp + ';">CCINP</div>';
    html += donutHTML([
      { value: ccinpDiff.standard, color: DIFF_COLORS.standard, label: 'Standard' },
      { value: ccinpDiff.intermediaire, color: DIFF_COLORS.intermediaire, label: 'Intermediaire' },
      { value: ccinpDiff.avance, color: DIFF_COLORS.avance, label: 'Avance' }
    ], 150);
    html += '</div>';
    html += '</div></div>';

    // Insights
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Points cles</h3>';
    html += '<div class="sp-insights">';

    // Find top chapter
    var topCh = sorted.length > 0 ? sorted[0] : null;
    if (topCh) {
      var topLabel = CHAPTER_LABELS[topCh.ch] || topCh.ch;
      html += insightCard('&#9733;', 'Chapitre n\u00b01', '<b>' + topLabel + '</b> apparait dans ' + topCh.e3a + ' sujets E3A et ' + topCh.ccinp + ' epreuves CCINP. Priorite absolue de revision.', DIFF_COLORS.standard);
    }

    // E3A vs CCINP Standard %
    var e3aStdPct = e3aDiffTotal > 0 ? (e3aDiff.standard / e3aDiffTotal * 100).toFixed(0) : 0;
    var ccinpStdPct = ccinpDiffTotal > 0 ? (ccinpDiff.standard / ccinpDiffTotal * 100).toFixed(0) : 0;
    html += insightCard('&#9878;', 'Difficulte comparee', 'CCINP a <b>' + ccinpStdPct + '%</b> de questions Standard vs <b>' + e3aStdPct + '%</b> pour E3A. ' + (parseInt(ccinpStdPct) > parseInt(e3aStdPct) ? 'CCINP est globalement plus accessible.' : 'E3A est globalement plus accessible.'), '#ff9800');

    // Find chapter with biggest E3A/CCINP difference
    var maxDiffCh = null, maxDiffVal = 0;
    sorted.forEach(function(item) {
      var diff = Math.abs((item.e3a / Math.max(totalE3a, 1)) - (item.ccinp / Math.max(totalCcinp, 1)));
      if (diff > maxDiffVal) { maxDiffVal = diff; maxDiffCh = item; }
    });
    if (maxDiffCh) {
      var chLabel = CHAPTER_LABELS[maxDiffCh.ch] || maxDiffCh.ch;
      var e3aPct = (maxDiffCh.e3a / Math.max(totalE3a, 1) * 100).toFixed(0);
      var cPct = (maxDiffCh.ccinp / Math.max(totalCcinp, 1) * 100).toFixed(0);
      html += insightCard('&#8800;', 'Plus grande difference', '<b>' + chLabel + '</b> : ' + e3aPct + '% chez E3A vs ' + cPct + '% chez CCINP. Adaptez vos revisions selon la banque visee.', BANK_COLORS.e3a);
    }

    html += '</div></div>';

    el.innerHTML = html;
    observeSections(el);
  }

  // ═══════════════════════════════════════════════
  //  RENDER: E3A DASHBOARD
  // ═══════════════════════════════════════════════

  function renderE3a() {
    var el = document.getElementById('e3aDashboard');
    if (!el) return;

    var freq = computeChapterFreq('e3a');
    var diff = computeE3aDiffDist();
    var diffByYear = computeE3aDiffByYear();
    var totalSujets = getE3aTotalSujets();
    var years = getE3aYears();
    var diffTotal = diff.standard + diff.intermediaire + diff.avance;

    // Count unique chapters
    var chCount = 0;
    for (var c in freq) if (freq[c].e3a > 0) chCount++;

    // Top chapter
    var topCh = '', topCount = 0;
    for (var ch in freq) {
      if (freq[ch].e3a > topCount) { topCount = freq[ch].e3a; topCh = ch; }
    }

    var html = '';

    // KPIs
    html += '<div class="sp-kpis">';
    html += kpiCard(totalSujets, 'sujets', BANK_COLORS.e3a);
    html += kpiCard(years, 'annees', 'var(--accent)');
    html += kpiCard(chCount, 'chapitres', DIFF_COLORS.standard);
    html += kpiCard(CHAPTER_LABELS[topCh] || topCh, 'plus frequent', BANK_COLORS.e3a);
    html += '</div>';

    // Top chapters frequency
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Frequence des chapitres</h3>';
    html += '<p class="sp-section__sub">Nombre de sujets E3A contenant ce chapitre (sur ' + totalSujets + ')</p>';

    var sorted = [];
    for (var k in freq) if (freq[k].e3a > 0) sorted.push({ ch: k, count: freq[k].e3a });
    sorted.sort(function(a, b) { return b.count - a.count; });
    var maxF = sorted.length > 0 ? sorted[0].count : 1;

    html += '<div class="sp-freq">';
    sorted.forEach(function(item, idx) {
      var pct = (item.count / totalSujets * 100).toFixed(0);
      html += '<div class="sp-freq__row">';
      html += '<div class="sp-freq__rank">#' + (idx + 1) + '</div>';
      html += '<div class="sp-freq__label">' + chapterLink(item.ch) + '</div>';
      html += '<div class="sp-freq__bars">';
      var w = (item.count / maxF * 100).toFixed(1);
      html += '<div class="sp-freq__bar sp-freq__bar--e3a" style="width:' + w + '%;"></div>';
      html += '</div>';
      html += '<div class="sp-freq__count">' + item.count + ' <span>(' + pct + '%)</span></div>';
      html += '</div>';
    });
    html += '</div></div>';

    // Difficulty donut
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Repartition globale de la difficulte</h3>';
    html += diffExplainer();
    html += '<div class="sp-donut-wrap">';
    html += donutHTML([
      { value: diff.standard, color: DIFF_COLORS.standard, label: 'Standard' },
      { value: diff.intermediaire, color: DIFF_COLORS.intermediaire, label: 'Intermediaire' },
      { value: diff.avance, color: DIFF_COLORS.avance, label: 'Avance' }
    ], 180);
    html += '</div></div>';

    // Difficulty by year (stacked bars)
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Difficulte par annee</h3>';
    html += diffLegend();
    html += '<div class="sp-year-bars">';
    diffByYear.forEach(function(item) {
      html += '<div class="sp-year-row">';
      html += '<div class="sp-year-row__label">' + item.year + '</div>';
      html += stackedBarHTML(item.d.standard, item.d.intermediaire, item.d.avance);
      html += '</div>';
    });
    html += '</div></div>';

    // Subject list
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Liste des sujets</h3>';
    html += '<div class="sp-subjects">';

    var sujets = e3aData.sujets.slice().sort(function(a, b) { return b.annee - a.annee || a.epreuve.localeCompare(b.epreuve); });
    sujets.forEach(function(s) {
      if (!s.chapitres || s.chapitres.length === 0) return;
      html += '<div class="sp-subject">';
      html += '<div class="sp-subject__header">';
      html += '<span class="sp-subject__year">' + s.annee + '</span>';
      html += '<span class="sp-subject__epreuve">' + esc(s.epreuve) + '</span>';
      html += '<span class="sp-subject__format">' + esc(s.format) + '</span>';
      html += '</div>';
      html += '<div class="sp-subject__desc">' + esc(s.description) + '</div>';
      html += '<div class="sp-subject__tags">';
      (s.chapitres || []).forEach(function(ch) {
        html += chapterTag(ch);
      });
      html += '</div>';
      html += '</div>';
    });
    html += '</div></div>';

    el.innerHTML = html;
    observeSections(el);
  }

  // ═══════════════════════════════════════════════
  //  RENDER: CCINP DASHBOARD
  // ═══════════════════════════════════════════════

  function renderCcinp() {
    var el = document.getElementById('ccinpDashboard');
    if (!el) return;

    var exams = ccinpData.exams;
    var keys = Object.keys(exams);
    var freq = computeChapterFreq('ccinp');
    var diff = computeCcinpDiffDist();
    var totalExams = keys.length;
    var diffTotal = diff.standard + diff.intermediaire + diff.avance;

    var html = '';

    // KPIs
    html += '<div class="sp-kpis">';
    html += kpiCard(totalExams, 'epreuves', BANK_COLORS.ccinp);
    html += kpiCard(diffTotal, 'questions totales', 'var(--accent)');
    var stdPct = diffTotal > 0 ? (diff.standard / diffTotal * 100).toFixed(0) : 0;
    html += kpiCard(stdPct + '%', 'Standard', DIFF_COLORS.standard);
    var advPct = diffTotal > 0 ? (diff.avance / diffTotal * 100).toFixed(0) : 0;
    html += kpiCard(advPct + '%', 'Avance', DIFF_COLORS.avance);
    html += '</div>';

    // Chapter frequency
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Chapitres couverts</h3>';
    var sorted = [];
    for (var k in freq) if (freq[k].ccinp > 0) sorted.push({ ch: k, count: freq[k].ccinp });
    sorted.sort(function(a, b) { return b.count - a.count; });
    var maxF = sorted.length > 0 ? sorted[0].count : 1;

    html += '<div class="sp-freq">';
    sorted.forEach(function(item, idx) {
      html += '<div class="sp-freq__row">';
      html += '<div class="sp-freq__rank">#' + (idx + 1) + '</div>';
      html += '<div class="sp-freq__label">' + chapterLink(item.ch) + '</div>';
      html += '<div class="sp-freq__bars">';
      var w = (item.count / maxF * 100).toFixed(1);
      html += '<div class="sp-freq__bar sp-freq__bar--ccinp" style="width:' + w + '%;"></div>';
      html += '</div>';
      html += '<div class="sp-freq__count">' + item.count + ' <span>/ ' + totalExams + '</span></div>';
      html += '</div>';
    });
    html += '</div></div>';

    // Difficulty donut
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Difficulte globale</h3>';
    html += diffExplainer();
    html += '<div class="sp-donut-wrap">';
    html += donutHTML([
      { value: diff.standard, color: DIFF_COLORS.standard, label: 'Standard' },
      { value: diff.intermediaire, color: DIFF_COLORS.intermediaire, label: 'Intermediaire' },
      { value: diff.avance, color: DIFF_COLORS.avance, label: 'Avance' }
    ], 180);
    html += '</div></div>';

    // Per-exam picker + detail
    html += '<div class="sp-section">';
    html += '<h3 class="sp-section__title">Detail par epreuve</h3>';
    html += '<div class="sp-exam-picker">';
    keys.forEach(function(k, idx) {
      var cls = idx === 0 ? 'sp-exam-btn sp-exam-btn--active' : 'sp-exam-btn';
      html += '<button class="' + cls + '" data-exam="' + k + '">' + esc(exams[k].short) + '</button>';
    });
    html += '</div>';
    html += '<div id="ccinpExamDetail"></div>';
    html += '</div>';

    el.innerHTML = html;

    // Bind exam picker
    var btns = el.querySelectorAll('.sp-exam-btn');
    btns.forEach(function(btn) {
      btn.addEventListener('click', function() {
        btns.forEach(function(b) { b.classList.remove('sp-exam-btn--active'); });
        btn.classList.add('sp-exam-btn--active');
        renderCcinpExam(btn.dataset.exam);
      });
    });

    // Show first exam
    if (keys.length > 0) renderCcinpExam(keys[0]);
    observeSections(el);
  }

  function renderCcinpExam(examKey) {
    var el = document.getElementById('ccinpExamDetail');
    if (!el) return;
    var ex = ccinpData.exams[examKey];
    if (!ex) return;

    var d = ex.difficulte;
    var m = ex.methode;
    var total = d.standard + d.intermediaire + d.avance;
    var mTotal = (m.classique || 0) + (m.tunnel || 0) + (m.pavlov || 0) + (m.courspur || 0);

    var html = '';

    // Header
    html += '<div class="sp-exam-header">';
    html += '<h4 class="sp-exam-header__title">' + esc(ex.label) + '</h4>';
    html += '<div class="sp-exam-header__meta">' + ex.questions + ' questions &middot; ' + ex.parties + ' parties</div>';
    html += '<div class="sp-exam-header__themes">' + esc(ex.themes) + '</div>';
    html += '</div>';

    // Donuts row
    html += '<div class="sp-compare">';
    // Difficulty donut
    html += '<div class="sp-compare__col">';
    html += '<div class="sp-compare__label">Difficulte</div>';
    html += donutHTML([
      { value: d.standard, color: DIFF_COLORS.standard, label: 'Standard' },
      { value: d.intermediaire, color: DIFF_COLORS.intermediaire, label: 'Intermediaire' },
      { value: d.avance, color: DIFF_COLORS.avance, label: 'Avance' }
    ], 140);
    html += '</div>';
    // Method donut
    html += '<div class="sp-compare__col">';
    html += '<div class="sp-compare__label">Methode de resolution</div>';
    html += donutHTML([
      { value: m.classique || 0, color: '#7B68EE', label: 'Classique' },
      { value: m.tunnel || 0, color: '#FF8C42', label: 'Tunnel' },
      { value: m.pavlov || 0, color: '#4A90D9', label: 'Reflexe' },
      { value: m.courspur || 0, color: '#5CB85C', label: 'Cours pur' }
    ], 140);
    html += '</div>';
    html += '</div>';

    // Stacked bars by partie
    if (ex.parties_detail && ex.parties_detail.length > 0) {
      html += '<div class="sp-subsection">';
      html += '<div class="sp-subsection__title">Difficulte par partie</div>';
      html += diffLegend();
      ex.parties_detail.forEach(function(p) {
        html += '<div class="sp-year-row">';
        html += '<div class="sp-year-row__label" style="min-width:160px;">' + esc(p.nom) + '</div>';
        html += stackedBarHTML(p.standard, p.intermediaire, p.avance);
        html += '</div>';
      });
      html += '</div>';
    }

    // Arc
    if (ex.arc && ex.arc.length > 0) {
      html += '<div class="sp-subsection">';
      html += '<div class="sp-subsection__title">Arc de difficulte (Q1 → Q' + ex.arc.length + ')</div>';
      html += '<div class="sp-arc">';
      ex.arc.forEach(function(q) {
        var col = q.d === 'S' ? DIFF_COLORS.standard : (q.d === 'I' ? DIFF_COLORS.intermediaire : DIFF_COLORS.avance);
        html += '<div class="sp-arc__dot" style="background:' + col + ';" title="' + q.q + ' — ' + q.d + ' — ' + q.m + '">' + q.q.replace('Q', '') + '</div>';
      });
      html += '</div>';
      html += diffLegend();
      html += '</div>';
    }

    // Tunnels & Reflexes
    if ((ex.tunnels && ex.tunnels.length) || (ex.pavlov && ex.pavlov.length)) {
      html += '<div class="sp-subsection">';
      html += '<div class="sp-subsection__title">Reflexes & Tunnels</div>';
      html += '<div class="sp-two-cols">';
      if (ex.pavlov && ex.pavlov.length) {
        html += '<div class="sp-col"><div class="sp-col__title" style="color:#4A90D9;">Reflexes (Pavlov)</div>';
        ex.pavlov.forEach(function(p) {
          html += '<div class="sp-method-item"><span class="sp-method-item__q">' + p.q + '</span><span class="sp-method-item__title">' + esc(p.titre) + '</span></div>';
        });
        html += '</div>';
      }
      if (ex.tunnels && ex.tunnels.length) {
        html += '<div class="sp-col"><div class="sp-col__title" style="color:#FF8C42;">Tunnels</div>';
        ex.tunnels.forEach(function(t) {
          html += '<div class="sp-method-item"><span class="sp-method-item__q">' + t.q + '</span><span class="sp-method-item__title">' + esc(t.titre) + '</span></div>';
        });
        html += '</div>';
      }
      html += '</div></div>';
    }

    // Classiques
    if (ex.classiques && ex.classiques.length) {
      html += '<div class="sp-subsection">';
      html += '<div class="sp-subsection__title">Methodes classiques</div>';
      html += '<div class="sp-methods-grid">';
      ex.classiques.forEach(function(c) {
        html += '<div class="sp-method-card"><div class="sp-method-card__q">' + c.q + '</div><div class="sp-method-card__title">' + esc(c.titre) + '</div><div class="sp-method-card__desc">' + esc(c.desc) + '</div></div>';
      });
      html += '</div></div>';
    }

    el.innerHTML = html;
  }

})();
