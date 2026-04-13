// Programme intensif 7 jours — E3A-Polytech MP
// Structure: Cours retention (matin) > 2h exos maths > 1h correction > Pause
//            Cours physique > 2h exos physique > 1h correction > Pause
//            Flashcards + retention (soir)
// Exercices entiers tires des sujets E3A, repartis par probabilite d'apparition

const PROGRAMME_7J = {

  meta: {
    title: "Programme intensif 7 jours",
    subtitle: "Cours \u00b7 2h exos maths \u00b7 Correction \u00b7 2h exos physique \u00b7 Correction \u00b7 Flashcards",
    totalHours: 56,
    mathHours: 24,
    physHours: 22,
    ficheHours: 10,
    exerciseCount: { math: 20, physics: 15, total: 35 },
    colors: {
      cours: "#8B5CF6",
      math: "#E91E63",
      physics: "#4A90D9",
      correction: "#F5A623",
      fiche: "#4CAF50",
      annale: "#FF6B35",
      pause: "#62666d"
    }
  },

  days: [

    // ═══════════════════════════════════════
    // JOUR 1 — Reduction + Electromagnetisme
    // Reduction = 67% de frequence (chapitre #1)
    // EM = 4/6 annees physique (chapitre #1)
    // ═══════════════════════════════════════
    {
      id: "j1", num: 1,
      title: "Reduction + Electromagnetisme",
      mathTheme: "Reduction algebrique",
      physTheme: "Electromagnetisme / OEM",
      totalHours: "8h",
      slots: [
        {
          id: "j1-cours-matin", time: "7h30 \u2013 9h00", type: "cours",
          label: "Cours \u2014 Retention + Preparation",
          content: "Revoir : VP, polynome caracteristique, CNS diag, Cayley-Hamilton, poly minimal, lemme des noyaux, theoreme spectral. Preparer aussi : 4 equations de Maxwell pour cet apres-midi.",
          duration: "1h30", links: [{ text: "Fiche Reduction", href: "cours/fiches/mp-02-reduction-avancee.html" }]
        },
        {
          id: "j1-math-exo1", time: "9h00 \u2013 9h50", type: "math",
          label: "Exo maths 1",
          content: "Equations matricielles M\u00b2+pM+qI=0. Polynome annulateur direct, VP, diag.",
          source: "E3A 2010 \u2014 Maths 2 Exo 2", difficulty: "Standard", priority: "P1",
          duration: "50 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2010-maths2.html" }, { text: "Correction", href: "cours/annales/e3a-2010-correction.html" }]
        },
        {
          id: "j1-math-exo2", time: "9h50 \u2013 10h30", type: "math",
          label: "Exo maths 2",
          content: "Matrices par blocs, noyau/image, poly minimal, diagonalisabilite.",
          source: "E3A 2013 \u2014 Maths 2 Exo 1", difficulty: "Standard", priority: "P1",
          duration: "50 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2013-maths2.html" }, { text: "Correction", href: "cours/annales/e3a-2013-correction.html" }]
        },
        {
          id: "j1-math-exo3", time: "10h30 \u2013 11h00", type: "math",
          label: "Exo maths 3",
          content: "Poly annulateur : A\u1d40=3A\u00b2\u2212A\u2212I. Puissances par division euclidienne.",
          source: "E3A 2024 \u2014 Exo 3", difficulty: "Intermediaire", priority: "P1",
          duration: "30 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction.html" }]
        },
        {
          id: "j1-correction-math", time: "11h00 \u2013 12h00", type: "correction",
          label: "Correction active maths",
          content: "Corriger les 3 exos avec le protocole : comparer ses reponses, extraire les methodes, noter les erreurs, refaire le calcul cle de chaque exo.",
          duration: "1h",
          links: [{ text: "Enonce 2010", href: "cours/annales/e3a-2010-maths2.html" }, { text: "Corr. 2010", href: "cours/annales/e3a-2010-correction.html" }, { text: "Enonce 2013", href: "cours/annales/e3a-2013-maths2.html" }, { text: "Corr. 2013", href: "cours/annales/e3a-2013-correction.html" }, { text: "Enonce 2024", href: "cours/annales/e3a-2024-maths1.html" }, { text: "Corr. 2024", href: "cours/annales/e3a-2024-correction.html" }]
        },
        {
          id: "j1-pause-midi", time: "12h00 \u2013 14h00", type: "pause",
          label: "Dejeuner", content: "Vrai repos. Pas de maths.", duration: "2h", links: []
        },
        {
          id: "j1-cours-phys", time: "14h00 \u2013 14h30", type: "cours",
          label: "Rappel cours physique",
          content: "Maxwell (rot E, rot B, div E, div B), d'Alembert, Poynting \u03a0 = (1/\u03bc\u2080)E\u00d7B, OPPM, effet de peau \u03b4.",
          duration: "30 min", links: [{ text: "Fiche EM/OEM", href: "cours/fiches/phys-01-electromagnetisme-oem.html" }]
        },
        {
          id: "j1-phys-exo1", time: "14h30 \u2013 15h30", type: "physics",
          label: "Exo physique 1",
          content: "OEM dans le vide : propagation, polarisation, energie, Poynting.",
          source: "E3A 2024 \u2014 Physique Partie I", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction-physique.html" }]
        },
        {
          id: "j1-phys-exo2", time: "15h30 \u2013 16h30", type: "physics",
          label: "Exo physique 2",
          content: "Reflexion sur conducteur parfait, pression de radiation.",
          source: "E3A 2024 \u2014 Physique Partie III", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction-physique.html" }]
        },
        {
          id: "j1-correction-phys", time: "16h30 \u2013 17h30", type: "correction",
          label: "Correction active physique",
          content: "Corriger les 2 exos physique. Extraire les methodes, verifier les unites, noter les formules oubliees.",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction-physique.html" }]
        },
        {
          id: "j1-pause-soir", time: "17h30 \u2013 18h30", type: "pause",
          label: "Pause", content: "Repos.", duration: "1h", links: []
        },
        {
          id: "j1-flashcards", time: "18h30 \u2013 19h30", type: "fiche",
          label: "Flashcards + Retention",
          content: "12 flashcards Reduction + 8 flashcards EM. Relire les notes de correction du jour. Ecrire les 3 methodes cles retenues.",
          duration: "1h",
          links: [{ text: "Flashcards", href: "entrainement.html" }]
        }
      ]
    },

    // ═══════════════════════════════════════
    // JOUR 2 — Series entieres + Mecanique
    // SE = 55% freq (chapitre #2)
    // Meca = 3/6 annees (chapitre #2 phys)
    // ═══════════════════════════════════════
    {
      id: "j2", num: 2,
      title: "Series entieres + Mecanique",
      mathTheme: "Series entieres",
      physTheme: "Mecanique / Gravitation",
      totalHours: "8h",
      slots: [
        {
          id: "j2-cours-matin", time: "7h30 \u2013 9h00", type: "cours",
          label: "Cours \u2014 Retention + Preparation",
          content: "Retention J1 : redire a voix haute les methodes Reduction. Preparer : rayon CV (Hadamard, d'Alembert), derivation/integration t.a.t., DSE classiques. + Kepler, force centrale pour l'aprem.",
          duration: "1h30", links: [{ text: "Fiche SE", href: "cours/fiches/mp-08-series-entieres.html" }, { text: "Fiche Reduction", href: "cours/fiches/mp-02-reduction-avancee.html" }]
        },
        {
          id: "j2-math-exo1", time: "9h00 \u2013 9h50", type: "math",
          label: "Exo maths 1",
          content: "Series entieres, permutation somme/integrale, rayon de convergence.",
          source: "E3A 2009 \u2014 Maths 2 Exo 1", difficulty: "Standard", priority: "P1",
          duration: "50 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2009-maths2.html" }, { text: "Correction", href: "cours/annales/e3a-2009-correction.html" }]
        },
        {
          id: "j2-math-exo2", time: "9h50 \u2013 10h30", type: "math",
          label: "Exo maths 2",
          content: "Series harmoniques H(x), S(x), T(x). Rayons, sommes.",
          source: "E3A 2018 \u2014 Maths 1 Exo 3", difficulty: "Intermediaire", priority: "P1",
          duration: "40 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2018-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2018-correction.html" }]
        },
        {
          id: "j2-math-exo3", time: "10h30 \u2013 11h00", type: "math",
          label: "Exo maths 3",
          content: "\u03a3 cos(n)x\u207f/n via exponentielles complexes et \u2212ln(1\u2212z).",
          source: "E3A 2024 \u2014 Exo 2", difficulty: "Intermediaire", priority: "P1",
          duration: "30 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction.html" }]
        },
        {
          id: "j2-correction-math", time: "11h00 \u2013 12h00", type: "correction",
          label: "Correction active maths",
          content: "Corriger les 3 exos. Focus : bien comprendre les rayons de convergence et les techniques de sommation.",
          duration: "1h",
          links: [{ text: "Enonce 2009", href: "cours/annales/e3a-2009-maths2.html" }, { text: "Corr. 2009", href: "cours/annales/e3a-2009-correction.html" }, { text: "Enonce 2018", href: "cours/annales/e3a-2018-maths1.html" }, { text: "Corr. 2018", href: "cours/annales/e3a-2018-correction.html" }, { text: "Enonce 2024", href: "cours/annales/e3a-2024-maths1.html" }, { text: "Corr. 2024", href: "cours/annales/e3a-2024-correction.html" }]
        },
        {
          id: "j2-pause-midi", time: "12h00 \u2013 14h00", type: "pause",
          label: "Dejeuner", content: "Repos.", duration: "2h", links: []
        },
        {
          id: "j2-cours-phys", time: "14h00 \u2013 14h30", type: "cours",
          label: "Rappel cours physique",
          content: "Kepler (T\u00b2=4\u03c0\u00b2a\u00b3/GM), force centrale, moment cinetique, referentiels non galileens, Coriolis.",
          duration: "30 min", links: [{ text: "Fiche Mecanique", href: "cours/fiches/phys-02-mecanique-gravitation.html" }]
        },
        {
          id: "j2-phys-exo1", time: "14h30 \u2013 15h30", type: "physics",
          label: "Exo physique 1",
          content: "Attraction gravitationnelle + tir balistique.",
          source: "E3A 2023 \u2014 Physique I.1-I.2", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2023-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2023-correction-physique.html" }]
        },
        {
          id: "j2-phys-exo2", time: "15h30 \u2013 16h30", type: "physics",
          label: "Exo physique 2",
          content: "Mission Juno/Jupiter : orbite de transfert, Kepler, energie.",
          source: "E3A 2021 \u2014 Physique Bloc 1", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2021-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2021-correction-physique.html" }]
        },
        {
          id: "j2-correction-phys", time: "16h30 \u2013 17h30", type: "correction",
          label: "Correction active physique",
          content: "Corriger les 2 exos. Verifier homogeneite des resultats, ordres de grandeur.",
          duration: "1h",
          links: [{ text: "Enonce 2023", href: "cours/annales/e3a-2023-physique.html" }, { text: "Corr. 2023", href: "cours/annales/e3a-2023-correction-physique.html" }, { text: "Enonce 2021", href: "cours/annales/e3a-2021-physique.html" }, { text: "Corr. 2021", href: "cours/annales/e3a-2021-correction-physique.html" }]
        },
        {
          id: "j2-pause-soir", time: "17h30 \u2013 18h30", type: "pause",
          label: "Pause", content: "Repos.", duration: "1h", links: []
        },
        {
          id: "j2-flashcards", time: "18h30 \u2013 19h30", type: "fiche",
          label: "Flashcards + Retention",
          content: "Retention J1 (Reduction + EM) + 10 flashcards SE + 8 flashcards Mecanique. Notes du jour.",
          duration: "1h",
          links: [{ text: "Flashcards", href: "entrainement.html" }]
        }
      ]
    },

    // ═══════════════════════════════════════
    // JOUR 3 — Integrales/Probas + Oscillateurs
    // Integrales 48% + Probas 36% = chapitres #3/#4
    // Oscillateurs 3/6 annees
    // ═══════════════════════════════════════
    {
      id: "j3", num: 3,
      title: "Integrales/Probas + Oscillateurs",
      mathTheme: "Integrales + Probabilites",
      physTheme: "Oscillateurs / Circuits",
      totalHours: "8h",
      slots: [
        {
          id: "j3-cours-matin", time: "7h30 \u2013 9h00", type: "cours",
          label: "Cours \u2014 Retention + Preparation",
          content: "Retention J1-J2. Preparer : criteres CV integrales impropres (comparaison, equivalent, 1/x\u1d43), loi geometrique P(X=k)=pq^{k-1}, Poisson, E(X), V(X), FG. + Oscillateurs pour l'aprem.",
          duration: "1h30", links: [{ text: "Fiche Integrales", href: "cours/fiches/mp-11-integrales-generalisees.html" }, { text: "Fiche Probas", href: "cours/fiches/mp-18-probabilites.html" }]
        },
        {
          id: "j3-math-exo1", time: "9h00 \u2013 10h00", type: "math",
          label: "Exo maths 1",
          content: "Fonction Gamma et integrale de Gauss, relation fonctionnelle, transformee.",
          source: "E3A 2022 \u2014 Exo 1", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2022-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2022-correction.html" }]
        },
        {
          id: "j3-math-exo2", time: "10h00 \u2013 11h00", type: "math",
          label: "Exo maths 2",
          content: "Loi geometrique, couple de VA, P(X=Y), binomiale negative.",
          source: "E3A 2020 \u2014 Exo 1", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2020-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2020-correction.html" }]
        },
        {
          id: "j3-correction-math", time: "11h00 \u2013 12h00", type: "correction",
          label: "Correction active maths",
          content: "Corriger integrales + probas. Focus : justification de convergence, hypotheses des theoremes.",
          duration: "1h",
          links: [{ text: "Enonce 2022", href: "cours/annales/e3a-2022-maths1.html" }, { text: "Corr. 2022", href: "cours/annales/e3a-2022-correction.html" }, { text: "Enonce 2020", href: "cours/annales/e3a-2020-maths1.html" }, { text: "Corr. 2020", href: "cours/annales/e3a-2020-correction.html" }]
        },
        {
          id: "j3-pause-midi", time: "12h00 \u2013 14h00", type: "pause",
          label: "Dejeuner", content: "Repos.", duration: "2h", links: []
        },
        {
          id: "j3-cours-phys", time: "14h00 \u2013 14h30", type: "cours",
          label: "Rappel cours physique",
          content: "Oscillateur amorti : f\u2080=(1/2\u03c0)\u221a(k/m), Q=\u221a(km)/\u03bb. Impedances complexes, resonance, couplage electromecanique.",
          duration: "30 min", links: [{ text: "Fiche Oscillateurs", href: "cours/fiches/phys-03-oscillateurs-circuits.html" }]
        },
        {
          id: "j3-phys-exo1", time: "14h30 \u2013 15h30", type: "physics",
          label: "Exo physique 1",
          content: "Reponse percussionnelle du diapason, amortissement, facteur Q.",
          source: "E3A 2022 \u2014 Physique Partie I", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2022-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2022-correction-physique.html" }]
        },
        {
          id: "j3-phys-exo2", time: "15h30 \u2013 16h30", type: "physics",
          label: "Exo physique 2",
          content: "Haut-parleur electrodynamique + impedance equivalente.",
          source: "E3A 2020 \u2014 Physique Partie I-II", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2020-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2020-correction-physique.html" }]
        },
        {
          id: "j3-correction-phys", time: "16h30 \u2013 17h30", type: "correction",
          label: "Correction active physique",
          content: "Corriger les 2 exos. Verifier les impedances, les equations couplees.",
          duration: "1h",
          links: [{ text: "Enonce 2022", href: "cours/annales/e3a-2022-physique.html" }, { text: "Corr. 2022", href: "cours/annales/e3a-2022-correction-physique.html" }, { text: "Enonce 2020", href: "cours/annales/e3a-2020-physique.html" }, { text: "Corr. 2020", href: "cours/annales/e3a-2020-correction-physique.html" }]
        },
        {
          id: "j3-pause-soir", time: "17h30 \u2013 18h30", type: "pause",
          label: "Pause", content: "Repos.", duration: "1h", links: []
        },
        {
          id: "j3-flashcards", time: "18h30 \u2013 19h30", type: "fiche",
          label: "Flashcards + Retention",
          content: "Retention J1-J2 (rapide 15min). 8 flashcards Integrales + 8 Probas + 6 Oscillateurs.",
          duration: "1h",
          links: [{ text: "Flashcards", href: "entrainement.html" }]
        }
      ]
    },

    // ═══════════════════════════════════════
    // JOUR 4 — Prehilbertiens/Probas suite + Cristallo/Chimie
    // Prehilbertiens 38% + Probas suite
    // Cristallo 3/6 + Electrochimie 3/6
    // ═══════════════════════════════════════
    {
      id: "j4", num: 4,
      title: "Prehilbertiens + Cristallo/Chimie",
      mathTheme: "Espaces prehilbertiens + Probas",
      physTheme: "Cristallo / Electrochimie",
      totalHours: "8h",
      slots: [
        {
          id: "j4-cours-matin", time: "7h30 \u2013 9h00", type: "cours",
          label: "Cours \u2014 Retention + Preparation",
          content: "Retention J1-J3. Preparer : PS, Cauchy-Schwarz, projection orthogonale, Gram-Schmidt, th. spectral. Loi Poisson e^{-\u03bb}\u03bb\u1d4f/k!. + Cristallo/Nernst pour l'aprem.",
          duration: "1h30", links: [{ text: "Fiche Euclidiens", href: "cours/fiches/mp-04-espaces-euclidiens.html" }, { text: "Fiche Probas", href: "cours/fiches/mp-18-probabilites.html" }]
        },
        {
          id: "j4-math-exo1", time: "9h00 \u2013 10h00", type: "math",
          label: "Exo maths 1",
          content: "Optimisation sous contraintes : substitution, Lagrange, projection orthogonale.",
          source: "E3A 2025 \u2014 Exo 1", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2025-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2025-correction.html" }]
        },
        {
          id: "j4-math-exo2", time: "10h00 \u2013 11h00", type: "math",
          label: "Exo maths 2",
          content: "Loi du maximum (urnes), P(X\u2264j)=(j/n)\u1d4f, E(X\u2099). + Poisson parite (rapide).",
          source: "E3A 2022 \u2014 Exo 2 + E3A 2018 M1 Exo 2", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce 2022", href: "cours/annales/e3a-2022-maths1.html" }, { text: "Corr. 2022", href: "cours/annales/e3a-2022-correction.html" }, { text: "Enonce 2018", href: "cours/annales/e3a-2018-maths1.html" }, { text: "Corr. 2018", href: "cours/annales/e3a-2018-correction.html" }]
        },
        {
          id: "j4-correction-math", time: "11h00 \u2013 12h00", type: "correction",
          label: "Correction active maths",
          content: "Corriger prehilbertiens + probas. Focus : projection, Cauchy-Schwarz, lois discretes.",
          duration: "1h",
          links: [{ text: "Enonce 2025", href: "cours/annales/e3a-2025-maths1.html" }, { text: "Corr. 2025", href: "cours/annales/e3a-2025-correction.html" }, { text: "Enonce 2022", href: "cours/annales/e3a-2022-maths1.html" }, { text: "Corr. 2022", href: "cours/annales/e3a-2022-correction.html" }]
        },
        {
          id: "j4-pause-midi", time: "12h00 \u2013 14h00", type: "pause",
          label: "Dejeuner", content: "Repos.", duration: "2h", links: []
        },
        {
          id: "j4-cours-phys", time: "14h00 \u2013 14h30", type: "cours",
          label: "Rappel cours physique",
          content: "Cristallo : CFC, CC, Bragg 2d sin\u03b8=n\u03bb, \u03c1=ZM/(N\u2090V). Electrochimie : Nernst E=E\u00b0+RT/(nF)lnQ, piles, accumulateurs.",
          duration: "30 min", links: [{ text: "Fiche Cristallo/Chimie", href: "cours/fiches/phys-04-cristallographie-chimie.html" }]
        },
        {
          id: "j4-phys-exo1", time: "14h30 \u2013 15h30", type: "physics",
          label: "Exo physique 1",
          content: "Cristallographie du Ni CFC + diffraction de Bragg.",
          source: "E3A 2023 \u2014 Physique III (Q25-Q37)", difficulty: "Intermediaire", priority: "P2",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2023-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2023-correction-physique.html" }]
        },
        {
          id: "j4-phys-exo2", time: "15h30 \u2013 16h30", type: "physics",
          label: "Exo physique 2",
          content: "Accumulateur Cd-Ni + equation de Nernst. Chimie : ammoniac + Fe CC.",
          source: "E3A 2023 Phys III (Q38-Q44) + E3A 2022 Chimie", difficulty: "Intermediaire", priority: "P2",
          duration: "1h",
          links: [{ text: "Enonce 2023", href: "cours/annales/e3a-2023-physique.html" }, { text: "Corr. 2023", href: "cours/annales/e3a-2023-correction-physique.html" }, { text: "Enonce 2022", href: "cours/annales/e3a-2022-physique.html" }, { text: "Corr. 2022", href: "cours/annales/e3a-2022-correction-physique.html" }]
        },
        {
          id: "j4-correction-phys", time: "16h30 \u2013 17h30", type: "correction",
          label: "Correction active physique",
          content: "Corriger cristallo + chimie. Verifier les structures, les equations de Nernst.",
          duration: "1h",
          links: [{ text: "Enonce 2023", href: "cours/annales/e3a-2023-physique.html" }, { text: "Corr. 2023", href: "cours/annales/e3a-2023-correction-physique.html" }]
        },
        {
          id: "j4-pause-soir", time: "17h30 \u2013 18h30", type: "pause",
          label: "Pause", content: "Repos.", duration: "1h", links: []
        },
        {
          id: "j4-flashcards", time: "18h30 \u2013 19h30", type: "fiche",
          label: "Flashcards + Retention",
          content: "Retention J1-J3 (20min). 8 flashcards Prehilbertiens + 6 Cristallo + 6 Probas.",
          duration: "1h",
          links: [{ text: "Flashcards", href: "entrainement.html" }]
        }
      ]
    },

    // ═══════════════════════════════════════
    // JOUR 5 — EDL/Series fonctions + Revision transversale
    // Chapitres secondaires (31%) + consolidation
    // ═══════════════════════════════════════
    {
      id: "j5", num: 5,
      title: "EDL + Revision transversale",
      mathTheme: "EDL + Series fonctions + Revision",
      physTheme: "Revision physique globale",
      totalHours: "8h",
      slots: [
        {
          id: "j5-cours-matin", time: "7h30 \u2013 9h00", type: "cours",
          label: "Cours \u2014 Retention GLOBALE",
          content: "Retention complete J1-J4 : parcourir TOUTES les fiches. Repeter a voix haute les 5 methodes cles de chaque chapitre. Preparer : EDL1 (variation constante), CV uniforme.",
          duration: "1h30", links: [{ text: "Fiche EDL", href: "cours/fiches/mp-16-equations-differentielles.html" }, { text: "Fiche Suites/Series", href: "cours/fiches/mp-07-suites-series-fonctions.html" }]
        },
        {
          id: "j5-math-exo1", time: "9h00 \u2013 10h00", type: "math",
          label: "Exo maths 1",
          content: "EDL et developpement en serie entiere de la solution.",
          source: "E3A 2010 \u2014 Maths 2 Exo 1", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2010-maths2.html" }, { text: "Correction", href: "cours/annales/e3a-2010-correction.html" }]
        },
        {
          id: "j5-math-exo2", time: "10h00 \u2013 11h00", type: "math",
          label: "Exo maths 2 \u2014 Revision Reduction",
          content: "Reduction d'endomorphisme. Revision du chapitre #1.",
          source: "E3A 2018 \u2014 Maths 1 Exo 4", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2018-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2018-correction.html" }]
        },
        {
          id: "j5-correction-math", time: "11h00 \u2013 12h00", type: "correction",
          label: "Correction active maths",
          content: "Corriger les 2 exos. Pour la reduction : verifier qu'on a bien les automatismes (diag, poly annulateur).",
          duration: "1h",
          links: [{ text: "Enonce 2010", href: "cours/annales/e3a-2010-maths2.html" }, { text: "Corr. 2010", href: "cours/annales/e3a-2010-correction.html" }, { text: "Enonce 2018", href: "cours/annales/e3a-2018-maths1.html" }, { text: "Corr. 2018", href: "cours/annales/e3a-2018-correction.html" }]
        },
        {
          id: "j5-pause-midi", time: "12h00 \u2013 14h00", type: "pause",
          label: "Dejeuner", content: "Repos.", duration: "2h", links: []
        },
        {
          id: "j5-phys-exo1", time: "14h00 \u2013 15h00", type: "physics",
          label: "Exo physique 1",
          content: "Pesee en impesanteur, oscillateur masse-ressort en orbite.",
          source: "E3A 2025 \u2014 Physique Partie I", difficulty: "Standard", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2025-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2025-correction-physique.html" }]
        },
        {
          id: "j5-phys-exo2", time: "15h00 \u2013 16h00", type: "physics",
          label: "Exo physique 2",
          content: "Osteodensitometrie : Beer-Lambert, rayons X, attenuation.",
          source: "E3A 2025 \u2014 Physique Partie III", difficulty: "Intermediaire", priority: "P1",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2025-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2025-correction-physique.html" }]
        },
        {
          id: "j5-correction-phys", time: "16h00 \u2013 17h00", type: "correction",
          label: "Correction active physique",
          content: "Corriger + reprendre l'exo physique le plus dur de J1-J4.",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2025-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2025-correction-physique.html" }]
        },
        {
          id: "j5-quiz", time: "17h00 \u2013 17h30", type: "fiche",
          label: "Quiz rapide",
          content: "40 QCM maths + 20 QCM physique en rotation rapide. Identifier les trous.",
          duration: "30 min",
          links: [{ text: "Quiz", href: "entrainement.html" }]
        },
        {
          id: "j5-pause-soir", time: "17h30 \u2013 18h30", type: "pause",
          label: "Pause", content: "Repos.", duration: "1h", links: []
        },
        {
          id: "j5-flashcards", time: "18h30 \u2013 19h30", type: "fiche",
          label: "Flashcards \u2014 Rotation COMPLETE",
          content: "60 flashcards maths (toutes) + 40 flashcards physique (toutes). Derniere rotation avant les annales.",
          duration: "1h",
          links: [{ text: "Flashcards", href: "entrainement.html" }]
        }
      ]
    },

    // ═══════════════════════════════════════
    // JOUR 6 — Annale complete E3A 2024
    // ═══════════════════════════════════════
    {
      id: "j6", num: 6,
      title: "Annale E3A 2024",
      mathTheme: "Annale Maths 2024 (3h)",
      physTheme: "Annale Physique 2024 (3h)",
      totalHours: "10h",
      slots: [
        {
          id: "j6-cours-matin", time: "7h30 \u2013 8h30", type: "cours",
          label: "Retention matinale",
          content: "Relire toutes les fiches maths (30min) + physique (30min). Pas d'exercice, juste de la retention.",
          duration: "1h", links: [{ text: "Fiche Reduction", href: "cours/fiches/mp-02-reduction-avancee.html" }, { text: "Fiche SE", href: "cours/fiches/mp-08-series-entieres.html" }, { text: "Fiche EM", href: "cours/fiches/phys-01-electromagnetisme-oem.html" }, { text: "Fiche Meca", href: "cours/fiches/phys-02-mecanique-gravitation.html" }]
        },
        {
          id: "j6-annale-math", time: "9h00 \u2013 12h00", type: "annale",
          label: "Annale Maths \u2014 Conditions reelles",
          content: "E3A 2024 Mathematiques. 3h chrono, pas de telephone, pas de cours. Viser tous les exos Standard + debut Intermediaire.",
          source: "E3A 2024 \u2014 Mathematiques",
          duration: "3h",
          links: [{ text: "Sujet", href: "cours/annales/e3a-2024-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction.html" }]
        },
        {
          id: "j6-pause-midi", time: "12h00 \u2013 14h00", type: "pause",
          label: "Dejeuner + Decompression", content: "Pas de correction immediatement. Souffler.", duration: "2h", links: []
        },
        {
          id: "j6-annale-phys", time: "14h00 \u2013 17h00", type: "annale",
          label: "Annale Physique \u2014 Conditions reelles",
          content: "E3A 2024 Physique-Chimie. 3h chrono.",
          source: "E3A 2024 \u2014 Physique-Chimie",
          duration: "3h",
          links: [{ text: "Sujet", href: "cours/annales/e3a-2024-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction-physique.html" }]
        },
        {
          id: "j6-pause-aprem", time: "17h00 \u2013 18h00", type: "pause",
          label: "Pause", content: "Repos avant correction.", duration: "1h", links: []
        },
        {
          id: "j6-correction-math", time: "18h00 \u2013 19h00", type: "correction",
          label: "Correction Maths",
          content: "Corriger exercice par exercice. Noter les methodes manquantes dans les fiches.",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction.html" }]
        },
        {
          id: "j6-correction-phys", time: "19h00 \u2013 20h00", type: "correction",
          label: "Correction Physique",
          content: "Corriger la physique. Completer les fiches avec les formules oubliees.",
          duration: "1h",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2024-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2024-correction-physique.html" }]
        }
      ]
    },

    // ═══════════════════════════════════════
    // JOUR 7 — Annale 2022 + Consolidation
    // ═══════════════════════════════════════
    {
      id: "j7", num: 7,
      title: "Annale 2022 + Consolidation",
      mathTheme: "Annale Maths 2022 (2h30)",
      physTheme: "Annale Physique 2022 (2h30)",
      totalHours: "8h30",
      slots: [
        {
          id: "j7-cours-matin", time: "7h30 \u2013 8h30", type: "cours",
          label: "Retention finale matin",
          content: "Derniere relecture de TOUTES les fiches. Se repeter les methodes cles a voix haute.",
          duration: "1h", links: [{ text: "Fiche Reduction", href: "cours/fiches/mp-02-reduction-avancee.html" }, { text: "Fiche SE", href: "cours/fiches/mp-08-series-entieres.html" }, { text: "Fiche Integrales", href: "cours/fiches/mp-11-integrales-generalisees.html" }, { text: "Fiche Probas", href: "cours/fiches/mp-18-probabilites.html" }]
        },
        {
          id: "j7-annale-math", time: "9h00 \u2013 11h30", type: "annale",
          label: "Annale Maths \u2014 Conditions reelles",
          content: "E3A 2022 Mathematiques. 2h30 chrono. Bon mix des 5 chapitres prioritaires.",
          source: "E3A 2022 \u2014 Mathematiques",
          duration: "2h30",
          links: [{ text: "Sujet", href: "cours/annales/e3a-2022-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2022-correction.html" }]
        },
        {
          id: "j7-correction-math", time: "11h30 \u2013 12h00", type: "correction",
          label: "Correction rapide maths",
          content: "Corriger uniquement les exercices tentes.",
          duration: "30 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2022-maths1.html" }, { text: "Correction", href: "cours/annales/e3a-2022-correction.html" }]
        },
        {
          id: "j7-pause-midi", time: "12h00 \u2013 13h30", type: "pause",
          label: "Dejeuner", content: "Repos.", duration: "1h30", links: []
        },
        {
          id: "j7-annale-phys", time: "13h30 \u2013 16h00", type: "annale",
          label: "Annale Physique \u2014 Conditions reelles",
          content: "E3A 2022 Physique-Chimie. 2h30 chrono.",
          source: "E3A 2022 \u2014 Physique-Chimie",
          duration: "2h30",
          links: [{ text: "Sujet", href: "cours/annales/e3a-2022-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2022-correction-physique.html" }]
        },
        {
          id: "j7-correction-phys", time: "16h00 \u2013 16h30", type: "correction",
          label: "Correction rapide physique",
          content: "Corriger les exercices physique tentes.",
          duration: "30 min",
          links: [{ text: "Enonce", href: "cours/annales/e3a-2022-physique.html" }, { text: "Correction", href: "cours/annales/e3a-2022-correction-physique.html" }]
        },
        {
          id: "j7-retention", time: "17h00 \u2013 18h30", type: "fiche",
          label: "Consolidation finale",
          content: "Relecture COMPLETE de toutes les fiches (maths + physique). 60 flashcards maths + 40 physique \u2014 derniere rotation.",
          duration: "1h30",
          links: [{ text: "Flashcards", href: "entrainement.html" }]
        },
        {
          id: "j7-mental", time: "18h30 \u2013 19h00", type: "fiche",
          label: "Preparation mentale \u2014 STOP",
          content: "Relire 10 erreurs classiques + 20 reflexes maths + 10 formules physique. Puis ARRET TOTAL. Repos, sommeil, confiance.",
          duration: "30 min", links: []
        }
      ]
    }
  ],

  // ═══════════════════════════════════════
  // PROTOCOLE DE CORRECTION ACTIVE
  // ═══════════════════════════════════════
  method: {
    title: "Protocole de correction active",
    steps: [
      { action: "Comparer", detail: "Question par question : comparer sa reponse avec la correction. Cocher si correct.", time: "10 min" },
      { action: "Identifier les erreurs", detail: "Pour chaque erreur : etait-ce un oubli de cours, une mauvaise methode, ou un calcul faux ?", time: "5 min" },
      { action: "Extraire la methode", detail: "Ecrire la \u00abrecette\u00bb reutilisable en 3-5 lignes pour chaque exercice.", time: "10 min" },
      { action: "Refaire le calcul cle", detail: "Reprendre l'etape exacte ou on a bloque. La refaire seul, sans regarder.", time: "10 min" },
      { action: "Mettre a jour les fiches", detail: "Ajouter methode + piege + resultat cle dans la fiche du chapitre.", time: "5 min" },
      { action: "Auto-evaluation", detail: "Se noter /20 honnetement. Reporter dans Mon Parcours.", time: "2 min" }
    ]
  },

  // ═══════════════════════════════════════
  // REFLEXES & ERREURS
  // ═══════════════════════════════════════
  reflexes: {
    math: [
      { title: "Diagonaliser", formula: "\\(\\chi_A(\\lambda) = \\det(A - \\lambda I)\\) \u2192 racines \u2192 SEP \u2192 \\(\\dim E_\\lambda = m_\\lambda\\) \u2192 \\(P, D\\)", tip: "Toujours verifier que la somme des dims des SEP = n" },
      { title: "Polynome annulateur", formula: "Tester \\(A^2 = f(A)\\), ou Cayley-Hamilton : \\(\\chi_A(A) = 0\\)", tip: "Le poly minimal divise tout polynome annulateur" },
      { title: "Puissances de A", formula: "\\(X^n = Q \\cdot \\chi_A + R\\), evaluer \\(R\\) aux VP : \\(A^n = R(A)\\)", tip: "\\(\\deg(R) < \\deg(\\chi_A)\\), evaluer aux racines de \\(\\chi_A\\)" },
      { title: "Rayon de convergence", formula: "\\(\\dfrac{|a_{n+1}|}{|a_n|} \\to L \\implies R = \\dfrac{1}{L}\\)", tip: "Aussi Hadamard : \\(R = 1/\\limsup |a_n|^{1/n}\\)" },
      { title: "Somme de serie entiere", formula: "Reconnaitre derivee/primitive d'une serie connue : \\(\\sum x^n,\\; \\ln,\\; e^x,\\; \\arctan\\)", tip: "Deriver ou integrer terme a terme a l'interieur du disque ouvert" },
      { title: "DSE", formula: "Taylor : \\(f(x) = \\sum \\dfrac{f^{(n)}(0)}{n!}\\, x^n\\) ou EDL \u2192 identification", tip: "Unicite du DSE : si on le trouve par EDL, c'est le bon" },
      { title: "Convergence d'integrale", formula: "Equivalent en \\(0^+\\) ou \\(+\\infty\\), comparer a \\(\\dfrac{1}{t^\\alpha}\\) (Riemann)", tip: "\\(\\alpha > 1\\) en \\(+\\infty\\) \u21d2 CV, \\(\\alpha < 1\\) en \\(0^+\\) \u21d2 CV" },
      { title: "Loi d'une VA discrete", formula: "\\(P(X = k)\\) pour tout \\(k\\), verifier \\(\\displaystyle\\sum_k P(X=k) = 1\\)", tip: "Ne pas oublier le support : pour quelles valeurs de k ?" },
      { title: "Esperance", formula: "\\(E(X) = \\displaystyle\\sum_k k \\cdot P(X=k)\\), justifier CV absolue", tip: "TOUJOURS justifier la convergence absolue avant de calculer" },
      { title: "Fonction generatrice", formula: "\\(G_X(t) = E(t^X) = \\displaystyle\\sum_k P(X=k)\\,t^k\\)", tip: "Definie sur \\([-1,1]\\), \\(G_X(1) = 1\\), \\(G'_X(1) = E(X)\\)" },
      { title: "Theoreme spectral", formula: "\\(S \\in \\mathcal{S}_n(\\mathbb{R}) \\implies S\\) diag dans BON, VP reelles", tip: "Hypothese cruciale : matrice symetrique REELLE" },
      { title: "Projection orthogonale", formula: "\\(p_F(x) = \\displaystyle\\sum_i \\langle x, e_i \\rangle\\, e_i\\) sur une BON \\((e_i)\\) de \\(F\\)", tip: "Valable uniquement si \\((e_i)\\) est une BON de \\(F\\), pas de \\(E\\) entier" },
      { title: "Produit scalaire integrale", formula: "\\(\\langle P, Q \\rangle = \\displaystyle\\int P(t)Q(t)\\,dt\\), verifier bilin. sym. def. pos.", tip: "Defini positif = verifier \\(\\langle P,P\\rangle = 0 \\Rightarrow P = 0\\)" },
      { title: "Gram-Schmidt", formula: "\\(e_k = v_k - \\displaystyle\\sum_{i<k} \\langle v_k, e_i \\rangle\\, e_i\\), puis normaliser", tip: "Proceder dans l'ordre, ne pas oublier la normalisation" },
      { title: "Cauchy-Schwarz", formula: "\\(|\\langle x, y \\rangle| \\leq \\|x\\| \\cdot \\|y\\|\\), egalite ssi colineaires", tip: "Outil classique pour les inegalites avec des sommes ou integrales" },
      { title: "Convergence uniforme", formula: "\\(\\sup_x |f_n(x) - f(x)| \\to 0\\), ou critere de Weierstrass", tip: "CV normale \\(\\Rightarrow\\) CV uniforme \\(\\Rightarrow\\) interversion licite" },
      { title: "Interversion somme/integrale", formula: "CV normale \\(\\implies\\) interversion \\(\\sum / \\int\\) licite", tip: "Theoreme de convergence dominee pour les suites" },
      { title: "EDL1", formula: "\\(y' + a(x)y = b(x)\\) : homogene \\(Ce^{-A(x)}\\) + variation de la constante", tip: "Ne pas oublier la constante d'integration dans \\(A(x)\\)" },
      { title: "Formule de transfert", formula: "\\(E(g(X)) = \\displaystyle\\sum_k g(k) \\cdot P(X=k)\\)", tip: "Pas besoin de calculer la loi de \\(g(X)\\)" },
      { title: "Polynome minimal", formula: "Plus petit unitaire annulateur, divise \\(\\chi_A\\), memes racines", tip: "\\(A\\) diag \\(\\Leftrightarrow\\) \\(\\pi_A\\) scinde a racines simples" }
    ],
    physics: [
      { title: "Maxwell", formula: "\(\vec{\nabla} \times \vec{E} = -\dfrac{\partial \vec{B}}{\partial t}\), \(\vec{\nabla} \times \vec{B} = \mu_0 \vec{j} + \mu_0\varepsilon_0 \dfrac{\partial \vec{E}}{\partial t}\)", tip: "\(\text{div}\,\vec{E} = \rho/\varepsilon_0\), \(\text{div}\,\vec{B} = 0\)" },
      { title: "Poynting", formula: "\(\vec{\Pi} = \dfrac{1}{\mu_0} \vec{E} \times \vec{B}\)", tip: "Puissance surfacique transportee par l'onde EM" },
      { title: "Kepler (3e loi)", formula: "\(T^2 = \dfrac{4\pi^2 a^3}{GM}\)", tip: "\(a\) = demi-grand axe, valable aussi pour orbite circulaire" },
      { title: "Oscillateur", formula: "\(f_0 = \dfrac{1}{2\pi}\sqrt{\dfrac{k}{m}}\), \(Q = \dfrac{\sqrt{km}}{\lambda}\)", tip: "\(Q\) grand = oscillations peu amorties" },
      { title: "Effet de peau", formula: "\(\delta = \sqrt{\dfrac{2}{\mu_0 \sigma \omega}}\)", tip: "Profondeur de penetration dans un conducteur" },
      { title: "Nernst", formula: "\(E = E^\circ + \dfrac{RT}{nF} \ln Q\)", tip: "\(Q\) = quotient reactionnel, \(n\) = nb electrons echanges" },
      { title: "Bragg", formula: "\(2d \sin\theta = n\lambda\)", tip: "Condition de diffraction constructive" },
      { title: "Cristallographie", formula: "\(\rho = \dfrac{Z \cdot M}{N_A \cdot V_{\text{maille}}}\)", tip: "\(Z\) = nombre de motifs par maille" },
      { title: "Beer-Lambert", formula: "\(A = \varepsilon \ell c\) et \(I = I_0\, e^{-\mu x}\)", tip: "\(A\) = absorbance (sans unite), \(\varepsilon\) = coeff d'extinction molaire" },
      { title: "Arrhenius", formula: "\(k = A \exp\!\left(-\dfrac{E_a}{RT}\right)\)", tip: "\(\ln k\) vs \(1/T\) donne une droite de pente \(-E_a/R\)" }
    ],
    errors: [
      { icon: "warning", text: "Oublier de justifier la convergence avant de calculer une somme, integrale ou esperance" },
      { icon: "warning", text: "Ne pas verifier les hypotheses du theoreme spectral (matrice symetrique REELLE)" },
      { icon: "warning", text: "Confondre multiplicite algebrique et geometrique pour la diagonalisabilite" },
      { icon: "warning", text: "Oublier que le polynome caracteristique depend du corps (scinde sur C mais pas forcement sur R)" },
      { icon: "warning", text: "Derivation terme a terme : valable a l'INTERIEUR du disque ouvert, pas au bord" },
      { icon: "warning", text: "E(X) : justifier que la serie converge ABSOLUMENT avant de calculer" },
      { icon: "warning", text: "Produit scalaire : verifier qu'il est DEFINI positif, pas seulement positif" },
      { icon: "warning", text: "Integrale impropre : distinguer les problemes en 0 et en +infini separement" },
      { icon: "warning", text: "En physique : oublier l'homogeneite — toujours verifier les unites du resultat" },
      { icon: "warning", text: "Division euclidienne de X^n : preciser deg(R) < deg(P) et evaluer aux racines" }
    ]
  },

  lastDay: {
    title: "Protocole de la veille de l'epreuve",
    steps: [
      { when: "Veille au soir", action: "Relire uniquement les fiches (pas d'exercice, pas de calcul)", time: "30 min" },
      { when: "Veille au soir", action: "Relire la liste des 10 erreurs classiques", time: "10 min" },
      { when: "Matin de l'epreuve", action: "Relire les 5 fiches maths prioritaires", time: "15 min" },
      { when: "Matin de l'epreuve", action: "Relire les 3 fiches physique prioritaires", time: "10 min" },
      { when: "Juste avant", action: "3 reflexes : justifier convergence, citer le theoreme, verifier les hypotheses", time: "2 min" }
    ]
  },

  ficheTemplate: {
    title: "Modele de fiche de revision",
    sections: [
      { name: "Theoremes cles", desc: "3-5 theoremes avec enonce en 1 ligne + hypotheses a verifier" },
      { name: "Methodes standards", desc: "3-5 recettes : Situation \u2192 Reflexe \u2192 Etapes" },
      { name: "Pieges / Erreurs", desc: "Ce qu'il ne faut PAS faire (erreurs du jury)" },
      { name: "Resultats a connaitre", desc: "Formules encadrees, valeurs de reference" }
    ],
    dontInclude: [
      "Le cours complet",
      "Les demonstrations",
      "Les exercices entiers (juste la methode)",
      "Les notations evidentes"
    ]
  }
};
