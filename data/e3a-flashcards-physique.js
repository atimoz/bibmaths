var E3A_FLASHCARDS_PHYSIQUE = [

  // ═══════════════════════════════════════════════════════════════
  //  ÉLECTROMAGNÉTISME / OEM — 10 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-em-01",
    theme: "em",
    themeColor: "#E91E63",
    q: "Écrire l'équation de <b>Maxwell-Gauss</b> (forme locale). Quelle est sa signification physique ?",
    a: "$$\\vec{\\nabla} \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$$ Les <b>charges électriques</b> sont les sources du champ \\(\\vec{E}\\). En forme intégrale (théorème de Gauss) : $$\\oiint \\vec{E} \\cdot d\\vec{S} = \\frac{Q_{int}}{\\varepsilon_0}$$ Le flux de \\(\\vec{E}\\) à travers une surface fermée est proportionnel à la charge intérieure.",
    hint: "div E = ρ/ε₀, les charges sont sources de E"
  },
  {
    id: "e3a-phys-em-02",
    theme: "em",
    themeColor: "#E91E63",
    q: "Écrire l'équation de <b>Maxwell-Thomson</b> (conservation du flux magnétique). Quelle conséquence physique ?",
    a: "$$\\vec{\\nabla} \\cdot \\vec{B} = 0$$ Le champ \\(\\vec{B}\\) est à <b>flux conservatif</b> : il n'existe pas de monopôle magnétique. Les lignes de champ de \\(\\vec{B}\\) se referment toujours sur elles-mêmes. En forme intégrale : $$\\oiint \\vec{B} \\cdot d\\vec{S} = 0$$",
    hint: "div B = 0, pas de monopôle magnétique"
  },
  {
    id: "e3a-phys-em-03",
    theme: "em",
    themeColor: "#E91E63",
    q: "Écrire l'équation de <b>Maxwell-Faraday</b> (forme locale). Quel phénomène décrit-elle ?",
    a: "$$\\vec{\\nabla} \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$$ Un champ magnétique variable dans le temps <b>induit</b> un champ électrique à circulation non nulle. C'est le fondement de l'<b>induction électromagnétique</b>. En forme intégrale : $$\\oint \\vec{E} \\cdot d\\vec{l} = -\\frac{d\\Phi_B}{dt}$$",
    hint: "rot E = −∂B/∂t, induction"
  },
  {
    id: "e3a-phys-em-04",
    theme: "em",
    themeColor: "#E91E63",
    q: "Écrire l'équation de <b>Maxwell-Ampère</b> (forme locale). Quel terme a ajouté Maxwell et pourquoi ?",
    a: "$$\\vec{\\nabla} \\times \\vec{B} = \\mu_0 \\vec{j} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$$ Maxwell a ajouté le <b>courant de déplacement</b> \\(\\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}\\) pour assurer la <b>conservation de la charge</b> (compatibilité avec \\(\\vec{\\nabla} \\cdot \\vec{j} + \\frac{\\partial \\rho}{\\partial t} = 0\\)). Ce terme permet l'existence des <b>ondes EM</b>.",
    hint: "rot B = μ₀j + μ₀ε₀ ∂E/∂t, courant de déplacement"
  },
  {
    id: "e3a-phys-em-05",
    theme: "em",
    themeColor: "#E91E63",
    q: "Donner l'expression du <b>vecteur de Poynting</b> et écrire l'équation locale de conservation de l'énergie EM.",
    a: "$$\\vec{\\Pi} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$$ Il représente la <b>densité surfacique de puissance</b> transportée par l'onde (W/m²). Équation de Poynting : $$\\frac{\\partial u_{em}}{\\partial t} + \\vec{\\nabla} \\cdot \\vec{\\Pi} = -\\vec{j} \\cdot \\vec{E}$$ avec \\(u_{em} = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}\\).",
    hint: "Π = (1/μ₀) E × B, puissance surfacique"
  },
  {
    id: "e3a-phys-em-06",
    theme: "em",
    themeColor: "#E91E63",
    q: "Pour une OPPM se propageant selon \\(\\vec{u_z}\\), donner la <b>relation de structure</b> entre \\(\\vec{E}\\) et \\(\\vec{B}\\).",
    a: "$$\\vec{B} = \\frac{1}{c} \\vec{u_z} \\times \\vec{E} = \\frac{\\vec{k} \\times \\vec{E}}{\\omega}$$ \\(\\vec{E}\\), \\(\\vec{B}\\) et \\(\\vec{u_z}\\) forment un <b>trièdre direct</b>. L'onde est <b>transverse</b> : \\(\\vec{E} \\perp \\vec{k}\\) et \\(\\vec{B} \\perp \\vec{k}\\). Les amplitudes vérifient \\(B_0 = E_0/c\\).",
    hint: "B = (1/c) u × E, onde transverse"
  },
  {
    id: "e3a-phys-em-07",
    theme: "em",
    themeColor: "#E91E63",
    q: "Qu'est-ce que l'<b>effet de peau</b> ? Donner l'expression de l'épaisseur de peau \\(\\delta\\).",
    a: "Dans un conducteur ohmique soumis à un champ EM variable, le courant se <b>concentre en surface</b>. L'épaisseur de peau vaut : $$\\delta = \\sqrt{\\frac{2}{\\mu_0 \\sigma \\omega}}$$ où \\(\\sigma\\) est la conductivité et \\(\\omega\\) la pulsation. L'amplitude décroît en \\(e^{-z/\\delta}\\). Plus \\(\\omega\\) est grand, plus \\(\\delta\\) est petit.",
    hint: "δ = √(2/(μ₀σω)), décroissance exponentielle"
  },
  {
    id: "e3a-phys-em-08",
    theme: "em",
    themeColor: "#E91E63",
    q: "Donner les expressions des <b>densités volumiques d'énergie</b> électrique et magnétique. Que vaut leur rapport pour une OPPM ?",
    a: "$$u_E = \\frac{1}{2}\\varepsilon_0 E^2 \\qquad u_B = \\frac{B^2}{2\\mu_0}$$ $$u_{em} = u_E + u_B$$ Pour une OPPM dans le vide, comme \\(B = E/c\\) et \\(c = 1/\\sqrt{\\mu_0\\varepsilon_0}\\) : $$u_E = u_B$$ Il y a <b>équipartition</b> de l'énergie entre les composantes électrique et magnétique.",
    hint: "u = ε₀E²/2 + B²/(2μ₀), équipartition pour OPPM"
  },
  {
    id: "e3a-phys-em-09",
    theme: "em",
    themeColor: "#E91E63",
    q: "Donner les <b>conditions aux limites</b> du champ EM à l'interface entre deux milieux (composantes tangentielle et normale).",
    a: "En l'absence de charges et courants surfaciques :<br>• \\(E_{t1} = E_{t2}\\) — composante <b>tangentielle de E</b> continue<br>• \\(B_{n1} = B_{n2}\\) — composante <b>normale de B</b> continue<br>• \\(\\varepsilon_1 E_{n1} = \\varepsilon_2 E_{n2}\\) — discontinuité de \\(E_n\\) liée à \\(\\varepsilon\\)<br>• \\(\\frac{B_{t1}}{\\mu_1} = \\frac{B_{t2}}{\\mu_2}\\) — discontinuité de \\(B_t\\) liée à \\(\\mu\\)",
    hint: "Et continue, Bn continue"
  },
  {
    id: "e3a-phys-em-10",
    theme: "em",
    themeColor: "#E91E63",
    q: "Qu'est-ce que la <b>pression de radiation</b> ? Donner son expression pour une onde arrivant sur un miroir parfait.",
    a: "La pression de radiation est la <b>force par unité de surface</b> exercée par une onde EM sur un obstacle. Pour une onde d'intensité moyenne \\(\\langle \\Pi \\rangle\\) :<br>• <b>Absorption totale</b> : $$P_{rad} = \\frac{\\langle \\Pi \\rangle}{c}$$<br>• <b>Réflexion totale</b> (miroir parfait) : $$P_{rad} = \\frac{2\\langle \\Pi \\rangle}{c}$$ Le facteur 2 vient du <b>transfert d'impulsion</b> doublé lors de la réflexion.",
    hint: "P = ⟨Π⟩/c (absorption), 2⟨Π⟩/c (réflexion)"
  },

  // ═══════════════════════════════════════════════════════════════
  //  MÉCANIQUE / GRAVITATION — 10 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-meca-01",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Énoncer la <b>1ère loi de Kepler</b> (loi des orbites).",
    a: "Les planètes décrivent des <b>ellipses</b> dont le Soleil occupe l'un des <b>foyers</b>. L'équation de la trajectoire en coordonnées polaires : $$r(\\theta) = \\frac{p}{1 + e\\cos\\theta}$$ avec \\(p = L^2/(GMm^2)\\) le paramètre et \\(e\\) l'excentricité (\\(0 \\leq e < 1\\) pour une ellipse).",
    hint: "Ellipses, Soleil au foyer"
  },
  {
    id: "e3a-phys-meca-02",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Énoncer la <b>2ème loi de Kepler</b> (loi des aires). Quelle grandeur est conservée ?",
    a: "Le <b>rayon vecteur</b> Soleil-planète balaie des <b>aires égales en des temps égaux</b>. La vitesse aréolaire est constante : $$\\frac{dA}{dt} = \\frac{L}{2m} = \\text{cste}$$ C'est une conséquence directe de la <b>conservation du moment cinétique</b> \\(\\vec{L}\\), car la force gravitationnelle est centrale.",
    hint: "Aires égales en temps égaux, conservation de L"
  },
  {
    id: "e3a-phys-meca-03",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Énoncer la <b>3ème loi de Kepler</b> (loi des périodes). Comment la démontrer ?",
    a: "$$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{GM}$$ Le rapport \\(T^2/a^3\\) est le même pour toutes les planètes d'un même système. <b>Démonstration</b> (orbite circulaire) : on égale la force gravitationnelle et la force centripète : $$\\frac{GMm}{r^2} = m\\omega^2 r \\quad \\Rightarrow \\quad \\omega^2 = \\frac{GM}{r^3}$$ d'où \\(T = 2\\pi/\\omega\\).",
    hint: "T²/a³ = 4π²/(GM), même pour toutes les planètes"
  },
  {
    id: "e3a-phys-meca-04",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'expression de l'<b>énergie potentielle gravitationnelle</b> et l'énergie mécanique totale pour une orbite elliptique.",
    a: "$$E_p(r) = -\\frac{GMm}{r}$$ L'énergie mécanique totale : $$E_m = \\frac{1}{2}mv^2 - \\frac{GMm}{r} = -\\frac{GMm}{2a}$$ où \\(a\\) est le demi-grand axe. On a \\(E_m < 0\\) pour une orbite <b>liée</b> (ellipse/cercle), \\(E_m = 0\\) pour la parabole, \\(E_m > 0\\) pour l'hyperbole.",
    hint: "Ep = −GMm/r, Em = −GMm/(2a)"
  },
  {
    id: "e3a-phys-meca-05",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner la <b>vitesse de libération</b> à la surface d'un astre de masse \\(M\\) et rayon \\(R\\).",
    a: "On écrit la conservation de l'énergie avec \\(E_m = 0\\) (trajectoire parabolique, énergie minimale pour s'échapper) : $$\\frac{1}{2}mv_{lib}^2 - \\frac{GMm}{R} = 0$$ $$\\boxed{v_{lib} = \\sqrt{\\frac{2GM}{R}}}$$ Pour la Terre : \\(v_{lib} \\approx 11{,}2\\) km/s. C'est \\(\\sqrt{2}\\) fois la vitesse orbitale circulaire en surface.",
    hint: "v = √(2GM/R), conservation de l'énergie"
  },
  {
    id: "e3a-phys-meca-06",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Exprimer le <b>moment cinétique</b> \\(\\vec{L}\\) et montrer qu'il est conservé pour une <b>force centrale</b>.",
    a: "$$\\vec{L}_O = \\vec{r} \\times m\\vec{v} = mr^2\\dot{\\theta}\\,\\vec{u_z}$$ Théorème du moment cinétique : \\(\\frac{d\\vec{L}}{dt} = \\vec{r} \\times \\vec{F}\\). Pour une force <b>centrale</b>, \\(\\vec{F} = F(r)\\vec{u_r}\\), donc : $$\\vec{r} \\times \\vec{F} = \\vec{0} \\quad \\Rightarrow \\quad \\vec{L} = \\text{cste}$$ Conséquences : mouvement <b>plan</b> et loi des aires.",
    hint: "L = mr²θ̇, conservé si force centrale"
  },
  {
    id: "e3a-phys-meca-07",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'expression de l'<b>énergie potentielle effective</b> pour un problème à force centrale gravitationnelle. Tracer son allure.",
    a: "$$E_{p,\\text{eff}}(r) = -\\frac{GMm}{r} + \\frac{L^2}{2mr^2}$$ Le premier terme est <b>attractif</b> (gravitation), le second est la <b>barrière centrifuge</b> (répulsif, \\(\\propto 1/r^2\\)). Le minimum de \\(E_{p,\\text{eff}}\\) correspond à l'<b>orbite circulaire</b> de rayon \\(r_0 = L^2/(GMm^2)\\).",
    hint: "Gravitation + barrière centrifuge en L²/(2mr²)"
  },
  {
    id: "e3a-phys-meca-08",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'expression de l'<b>accélération en coordonnées polaires</b> \\((r, \\theta)\\).",
    a: "$$\\vec{a} = (\\ddot{r} - r\\dot{\\theta}^2)\\,\\vec{u_r} + (r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta})\\,\\vec{u_\\theta}$$ • Composante <b>radiale</b> : \\(\\ddot{r} - r\\dot{\\theta}^2\\) (le terme \\(-r\\dot{\\theta}^2\\) est l'accélération centripète)<br>• Composante <b>orthoradiale</b> : \\(r\\ddot{\\theta} + 2\\dot{r}\\dot{\\theta} = \\frac{1}{r}\\frac{d(r^2\\dot{\\theta})}{dt}\\) (liée à la variation du moment cinétique)",
    hint: "a_r = r̈ − rθ̇², a_θ = rθ̈ + 2ṙθ̇"
  },
  {
    id: "e3a-phys-meca-09",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'expression de la <b>force de Coriolis</b>. Quel est son effet sur un objet en mouvement à la surface de la Terre ?",
    a: "$$\\vec{F}_{Cor} = -2m\\vec{\\Omega} \\times \\vec{v}_{R'}$$ Propriétés : toujours <b>perpendiculaire</b> à la vitesse (ne travaille pas), et à \\(\\vec{\\Omega}\\). À la surface de la Terre :<br>• Dévie les objets vers la <b>droite</b> dans l'hémisphère Nord<br>• Dévie vers la <b>gauche</b> dans l'hémisphère Sud<br>• Explique la rotation des cyclones et la déviation de Foucault.",
    hint: "F = −2mΩ × v', déviation vers la droite (hém. Nord)"
  },
  {
    id: "e3a-phys-meca-10",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Écrire le <b>PFD en référentiel non galiléen</b> en rotation uniforme. Identifier les forces d'inertie.",
    a: "$$m\\vec{a}_{R'} = \\vec{F} + \\vec{F}_{ie} + \\vec{F}_{ic}$$ • Force d'<b>entraînement</b> : $$\\vec{F}_{ie} = -m\\vec{\\Omega} \\times (\\vec{\\Omega} \\times \\vec{r})$$ dirigée vers l'extérieur (<b>centrifuge</b>)<br>• Force de <b>Coriolis</b> : $$\\vec{F}_{ic} = -2m\\vec{\\Omega} \\times \\vec{v}_{R'}$$ perpendiculaire à la vitesse relative.<br>La force centrifuge dérive d'une énergie potentielle : \\(E_{p,cf} = -\\frac{1}{2}m\\Omega^2 r^2\\).",
    hint: "Centrifuge + Coriolis, PFD modifié"
  },

  // ═══════════════════════════════════════════════════════════════
  //  OSCILLATEURS / CIRCUITS — 10 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-osc-01",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Écrire l'<b>équation différentielle de l'oscillateur harmonique</b> amorti. Quelle est la forme canonique ?",
    a: "Forme canonique : $$\\ddot{x} + \\frac{\\omega_0}{Q}\\dot{x} + \\omega_0^2 x = 0$$ avec \\(\\omega_0 = \\sqrt{k/m}\\) la pulsation propre et \\(Q = m\\omega_0/f\\) le facteur de qualité (\\(f\\) coefficient de frottement). Solution générale : \\(x(t) = e^{-\\omega_0 t/(2Q)}\\left(A\\cos(\\omega_1 t) + B\\sin(\\omega_1 t)\\right)\\) avec \\(\\omega_1 = \\omega_0\\sqrt{1 - 1/(4Q^2)}\\).",
    hint: "ẍ + (ω₀/Q)ẋ + ω₀²x = 0"
  },
  {
    id: "e3a-phys-osc-02",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Donner la définition et l'expression du <b>facteur de qualité</b> \\(Q\\) d'un oscillateur. Quelle est son interprétation physique ?",
    a: "$$Q = \\frac{\\omega_0}{\\Delta\\omega} = \\frac{\\text{énergie stockée}}{\\text{énergie dissipée par cycle}} \\times 2\\pi$$ Pour un oscillateur mécanique : \\(Q = \\frac{m\\omega_0}{f} = \\frac{\\sqrt{km}}{f}\\). Pour un circuit RLC série : \\(Q = \\frac{L\\omega_0}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}\\). Un <b>grand Q</b> signifie peu d'amortissement et une résonance <b>aiguë</b>.",
    hint: "Q = ω₀/Δω = énergie stockée / énergie dissipée × 2π"
  },
  {
    id: "e3a-phys-osc-03",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Décrire les <b>3 régimes d'amortissement</b> d'un oscillateur harmonique amorti selon la valeur de \\(Q\\).",
    a: "Le discriminant dépend de \\(Q\\) :<br><br>• <b>Pseudo-périodique</b> (\\(Q > 1/2\\)) : oscillations amorties de pseudo-pulsation \\(\\omega_1 = \\omega_0\\sqrt{1 - 1/(4Q^2)}\\)<br><br>• <b>Critique</b> (\\(Q = 1/2\\)) : retour à l'équilibre le plus rapide sans oscillation, \\(x(t) = (A + Bt)e^{-\\omega_0 t}\\)<br><br>• <b>Apériodique</b> (\\(Q < 1/2\\)) : retour lent, somme de deux exponentielles décroissantes.",
    hint: "Q > 1/2, Q = 1/2, Q < 1/2"
  },
  {
    id: "e3a-phys-osc-04",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Distinguer la <b>résonance en amplitude</b> et la <b>résonance en vitesse</b> pour un oscillateur forcé.",
    a: "<b>Résonance en amplitude</b> : le maximum de \\(|X|\\) est atteint à $$\\omega_A = \\omega_0\\sqrt{1 - \\frac{1}{2Q^2}}$$ Elle n'existe que si \\(Q > 1/\\sqrt{2}\\).<br><br><b>Résonance en vitesse</b> : le maximum de \\(|\\dot{X}|\\) est atteint exactement à $$\\omega_V = \\omega_0$$ Elle existe <b>toujours</b>, quel que soit \\(Q\\). À la résonance en vitesse, la puissance absorbée est maximale.",
    hint: "ωA < ω₀ (si Q > 1/√2), ωV = ω₀ (toujours)"
  },
  {
    id: "e3a-phys-osc-05",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Définir la <b>bande passante</b> d'un oscillateur ou d'un filtre. Quel est le lien avec \\(Q\\) ?",
    a: "La bande passante \\(\\Delta\\omega\\) est l'intervalle de pulsations pour lequel le gain est supérieur à \\(G_{max} - 3\\) dB (soit \\(|H| \\geq |H|_{max}/\\sqrt{2}\\)). $$\\Delta\\omega = \\frac{\\omega_0}{Q} \\qquad \\text{soit} \\qquad \\Delta f = \\frac{f_0}{Q}$$ Plus \\(Q\\) est <b>grand</b>, plus la bande passante est <b>étroite</b> (résonance aiguë, système sélectif).",
    hint: "Δω = ω₀/Q, −3 dB"
  },
  {
    id: "e3a-phys-osc-06",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Donner les <b>impédances complexes</b> de la résistance \\(R\\), de l'inductance \\(L\\) et du condensateur \\(C\\) en régime sinusoïdal.",
    a: "$$\\underline{Z}_R = R$$ $$\\underline{Z}_L = jL\\omega$$ $$\\underline{Z}_C = \\frac{1}{jC\\omega} = \\frac{-j}{C\\omega}$$ \\(R\\) est <b>en phase</b> avec le courant, \\(L\\) fait <b>avancer</b> la tension de \\(\\pi/2\\), \\(C\\) fait <b>retarder</b> la tension de \\(\\pi/2\\). Les impédances s'ajoutent en série et les admittances en parallèle.",
    hint: "R, jLω, 1/(jCω)"
  },
  {
    id: "e3a-phys-osc-07",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Pour un circuit <b>RLC série</b>, donner la pulsation propre \\(\\omega_0\\), le facteur de qualité \\(Q\\), et la condition de résonance en intensité.",
    a: "$$\\omega_0 = \\frac{1}{\\sqrt{LC}} \\qquad Q = \\frac{L\\omega_0}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}$$ Impédance : \\(\\underline{Z} = R + j(L\\omega - 1/(C\\omega))\\). <b>Résonance en intensité</b> quand \\(\\text{Im}(\\underline{Z}) = 0\\), soit \\(\\omega = \\omega_0\\). Alors \\(|\\underline{Z}| = R\\) (minimum) et l'intensité est <b>maximale</b>.",
    hint: "ω₀ = 1/√(LC), Q = Lω₀/R"
  },
  {
    id: "e3a-phys-osc-08",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Donner les <b>analogies mécanique-électrique</b> pour un oscillateur amorti.",
    a: "<table style='text-align:center'><tr><td><b>Mécanique</b></td><td><b>Électrique</b></td></tr><tr><td>Position \\(x\\)</td><td>Charge \\(q\\)</td></tr><tr><td>Vitesse \\(\\dot{x}\\)</td><td>Intensité \\(i\\)</td></tr><tr><td>Masse \\(m\\)</td><td>Inductance \\(L\\)</td></tr><tr><td>Raideur \\(k\\)</td><td>\\(1/C\\)</td></tr><tr><td>Frottement \\(f\\)</td><td>Résistance \\(R\\)</td></tr><tr><td>Force \\(F\\)</td><td>Tension \\(e\\)</td></tr></table><br>L'équation \\(m\\ddot{x} + f\\dot{x} + kx = F\\) correspond à \\(L\\ddot{q} + R\\dot{q} + q/C = e\\).",
    hint: "m↔L, k↔1/C, f↔R, x↔q, v↔i"
  },
  {
    id: "e3a-phys-osc-09",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Qu'est-ce que le <b>couplage électromécanique</b> ? Donner un exemple avec un haut-parleur.",
    a: "Le couplage électromécanique convertit l'énergie entre les domaines <b>électrique</b> et <b>mécanique</b>. Dans un <b>haut-parleur</b> : une bobine de longueur \\(\\ell\\) parcourue par \\(i\\) dans un champ \\(B\\) subit la force de Laplace : $$F = Bi\\ell$$ Réciproquement, le mouvement de la bobine induit une f.é.m. : $$e = -B\\ell v$$ Le système est décrit par deux équations couplées (mécanique + électrique).",
    hint: "Force de Laplace + f.é.m. induite, énergie E↔M"
  },
  {
    id: "e3a-phys-osc-10",
    theme: "oscillateurs",
    themeColor: "#FF9800",
    q: "Donner la <b>fonction de transfert</b> d'un filtre passe-bas du 1er ordre (circuit RC). Tracer le diagramme de Bode asymptotique.",
    a: "$$\\underline{H}(j\\omega) = \\frac{1}{1 + jRC\\omega} = \\frac{1}{1 + j\\omega/\\omega_c}$$ avec \\(\\omega_c = 1/(RC)\\).<br>• <b>BF</b> (\\(\\omega \\ll \\omega_c\\)) : \\(G \\approx 0\\) dB, \\(\\varphi \\approx 0\\)<br>• <b>HF</b> (\\(\\omega \\gg \\omega_c\\)) : pente \\(-20\\) dB/décade, \\(\\varphi \\to -\\pi/2\\)<br>• À \\(\\omega = \\omega_c\\) : \\(G = -3\\) dB, \\(\\varphi = -\\pi/4\\)",
    hint: "H = 1/(1 + jω/ωc), −20 dB/déc, −3 dB à ωc"
  },

  // ═══════════════════════════════════════════════════════════════
  //  CRISTALLOGRAPHIE / CHIMIE — 10 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-chim-01",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Comment calculer la <b>masse volumique</b> d'un cristal à partir des paramètres de maille ?",
    a: "$$\\rho = \\frac{Z \\cdot M}{N_A \\cdot a^3}$$ où \\(Z\\) est le nombre de motifs par maille, \\(M\\) la masse molaire, \\(N_A\\) le nombre d'Avogadro et \\(a\\) le paramètre de maille. <b>Méthode</b> : compter \\(Z\\) (sommets ×1/8, arêtes ×1/4, faces ×1/2, intérieur ×1), puis appliquer la formule.",
    hint: "ρ = ZM/(NA·a³)"
  },
  {
    id: "e3a-phys-chim-02",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Décrire la structure <b>CFC</b>. Donner \\(Z\\), la coordinence et la compacité.",
    a: "<b>Atomes</b> : 8 sommets (×1/8) + 6 faces (×1/2) = <b>Z = 4</b><br><b>Coordinence</b> : 12<br><b>Contact</b> sur la diagonale de face : \\(a\\sqrt{2} = 4r\\), soit \\(a = 2r\\sqrt{2}\\)<br><b>Compacité</b> : $$C = \\frac{4 \\times \\frac{4}{3}\\pi r^3}{a^3} = \\frac{\\pi}{3\\sqrt{2}} \\approx 0{,}74$$ C'est la compacité <b>maximale</b> (empilement compact). Exemples : Al, Cu, Au, Ag.",
    hint: "Z = 4, coordinence 12, C ≈ 0.74"
  },
  {
    id: "e3a-phys-chim-03",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Décrire la structure <b>CC</b> (cubique centrée). Donner \\(Z\\), la coordinence et la compacité.",
    a: "<b>Atomes</b> : 8 sommets (×1/8) + 1 centre = <b>Z = 2</b><br><b>Coordinence</b> : 8<br><b>Contact</b> sur la grande diagonale : \\(a\\sqrt{3} = 4r\\)<br><b>Compacité</b> : $$C = \\frac{\\pi\\sqrt{3}}{8} \\approx 0{,}68$$ Non compact. Exemples : Fe (α), Cr, W, Na, K.",
    hint: "Z = 2, coordinence 8, C ≈ 0.68"
  },
  {
    id: "e3a-phys-chim-04",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Énoncer la <b>loi de Bragg</b>. Comment l'utiliser pour déterminer les paramètres de maille ?",
    a: "$$2d_{hkl} \\sin\\theta = n\\lambda$$ où \\(d_{hkl}\\) est la distance inter-réticulaire des plans \\((hkl)\\), \\(\\theta\\) l'angle de Bragg, \\(n\\) l'ordre de diffraction et \\(\\lambda\\) la longueur d'onde des rayons X. Pour un réseau cubique : $$d_{hkl} = \\frac{a}{\\sqrt{h^2 + k^2 + l^2}}$$ On mesure les angles \\(\\theta\\) des pics de diffraction pour remonter à \\(a\\).",
    hint: "2d sin θ = nλ, diffraction des rayons X"
  },
  {
    id: "e3a-phys-chim-05",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Donner la <b>loi de Nernst</b> pour un couple redox. Quelle est la valeur de \\(RT/F\\) à 25°C ?",
    a: "$$E = E^\\circ + \\frac{RT}{nF} \\ln\\frac{a_{\\text{Ox}}}{a_{\\text{Red}}}$$ À 25°C : \\(RT/F \\approx 0{,}026\\) V, d'où la formule avec le log décimal : $$E = E^\\circ + \\frac{0{,}06}{n} \\log\\frac{[\\text{Ox}]}{[\\text{Red}]}$$ \\(n\\) = nombre d'électrons échangés, \\(E^\\circ\\) = potentiel standard.",
    hint: "E = E° + (0.06/n) log([Ox]/[Red]) à 25°C"
  },
  {
    id: "e3a-phys-chim-06",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Énoncer la <b>loi de Beer-Lambert</b>. Quelles sont ses conditions de validité ?",
    a: "$$A = \\log\\frac{I_0}{I} = \\varepsilon \\ell c$$ où \\(A\\) est l'absorbance, \\(\\varepsilon\\) le coefficient d'extinction molaire (L·mol⁻¹·cm⁻¹), \\(\\ell\\) la longueur de trajet optique (cm), \\(c\\) la concentration (mol/L). <b>Conditions</b> : lumière monochromatique, solution diluée (\\(c < 10^{-2}\\) mol/L), pas de réaction chimique, pas de diffusion.",
    hint: "A = εℓc, absorbance proportionnelle à la concentration"
  },
  {
    id: "e3a-phys-chim-07",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Donner la <b>loi d'Arrhenius</b> pour la constante de vitesse \\(k(T)\\). Comment déterminer \\(E_a\\) ?",
    a: "$$k(T) = A\\,e^{-E_a/(RT)}$$ où \\(A\\) est le facteur pré-exponentiel et \\(E_a\\) l'énergie d'activation. En passant au logarithme : $$\\ln k = \\ln A - \\frac{E_a}{RT}$$ En traçant \\(\\ln k\\) vs \\(1/T\\), on obtient une droite de pente \\(-E_a/R\\) (<b>diagramme d'Arrhenius</b>). Une \\(E_a\\) élevée signifie une forte dépendance en température.",
    hint: "k = A exp(−Ea/RT), pente −Ea/R"
  },
  {
    id: "e3a-phys-chim-08",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Donner la relation entre \\(\\Delta_r G^\\circ\\) et la <b>constante d'équilibre</b> \\(K\\). Quand la réaction est-elle spontanée ?",
    a: "$$\\Delta_r G^\\circ = -RT \\ln K$$ et plus généralement : $$\\Delta_r G = \\Delta_r G^\\circ + RT \\ln Q_r$$ où \\(Q_r\\) est le quotient réactionnel. À l'équilibre : \\(Q_r = K\\) et \\(\\Delta_r G = 0\\).<br>• \\(\\Delta_r G^\\circ < 0 \\Rightarrow K > 1\\) : réaction <b>thermodynamiquement favorisée</b><br>• \\(\\Delta_r G^\\circ > 0 \\Rightarrow K < 1\\) : réaction défavorisée",
    hint: "ΔrG° = −RT ln K, K > 1 si ΔrG° < 0"
  },
  {
    id: "e3a-phys-chim-09",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Énoncer la <b>loi de Hess</b>. Comment l'utiliser pour calculer un \\(\\Delta_r H^\\circ\\) ?",
    a: "L'enthalpie étant une <b>fonction d'état</b>, la variation d'enthalpie d'une réaction ne dépend que des états initial et final, pas du chemin suivi. $$\\Delta_r H^\\circ = \\sum \\nu_i \\, \\Delta_f H^\\circ_i(\\text{produits}) - \\sum \\nu_j \\, \\Delta_f H^\\circ_j(\\text{réactifs})$$ On peut aussi décomposer la réaction en étapes connues et <b>sommer</b> les \\(\\Delta_r H^\\circ\\) de chaque étape.",
    hint: "ΔrH° = Σ ΔfH°(produits) − Σ ΔfH°(réactifs)"
  },
  {
    id: "e3a-phys-chim-10",
    theme: "chimie",
    themeColor: "#4CAF50",
    q: "Énoncer la <b>relation de Van't Hoff</b>. Comment évolue \\(K\\) avec la température ?",
    a: "$$\\frac{d \\ln K}{dT} = \\frac{\\Delta_r H^\\circ}{RT^2}$$ En intégrant entre \\(T_1\\) et \\(T_2\\) (si \\(\\Delta_r H^\\circ \\approx \\text{cste}\\)) : $$\\ln\\frac{K(T_2)}{K(T_1)} = \\frac{\\Delta_r H^\\circ}{R}\\left(\\frac{1}{T_1} - \\frac{1}{T_2}\\right)$$ • Réaction <b>exothermique</b> (\\(\\Delta_r H^\\circ < 0\\)) : \\(K\\) <b>diminue</b> quand \\(T\\) augmente<br>• Réaction <b>endothermique</b> (\\(\\Delta_r H^\\circ > 0\\)) : \\(K\\) <b>augmente</b> avec \\(T\\)",
    hint: "d(ln K)/dT = ΔrH°/(RT²), sens exo/endo"
  }
];
