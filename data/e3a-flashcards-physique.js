var E3A_FLASHCARDS_PHYSIQUE = [

  // ═══════════════════════════════════════════════════════════════
  //  ÉLECTROMAGNÉTISME / OEM — 8 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-em-01",
    theme: "em",
    themeColor: "#E91E63",
    q: "Écrire les <b>quatre équations de Maxwell</b> dans le vide en présence de charges et courants.",
    a: "$$\\vec{\\nabla} \\cdot \\vec{E} = \\frac{\\rho}{\\varepsilon_0}$$ $$\\vec{\\nabla} \\cdot \\vec{B} = 0$$ $$\\vec{\\nabla} \\times \\vec{E} = -\\frac{\\partial \\vec{B}}{\\partial t}$$ $$\\vec{\\nabla} \\times \\vec{B} = \\mu_0 \\vec{j} + \\mu_0 \\varepsilon_0 \\frac{\\partial \\vec{E}}{\\partial t}$$",
    hint: "Maxwell-Gauss, flux magnétique, Maxwell-Faraday, Maxwell-Ampère"
  },
  {
    id: "e3a-phys-em-02",
    theme: "em",
    themeColor: "#E91E63",
    q: "Donner l'expression du <b>vecteur de Poynting</b> et son interprétation physique.",
    a: "$$\\vec{\\Pi} = \\frac{1}{\\mu_0} \\vec{E} \\times \\vec{B}$$ Il représente la <b>densité surfacique de puissance</b> transportée par l'onde électromagnétique (en W/m²). Son flux à travers une surface donne la puissance rayonnée.",
    hint: "Produit vectoriel de E et B, divisé par μ₀"
  },
  {
    id: "e3a-phys-em-03",
    theme: "em",
    themeColor: "#E91E63",
    q: "Établir l'<b>équation de propagation</b> (équation de d'Alembert) pour \\(\\vec{E}\\) dans le vide sans sources.",
    a: "À partir de Maxwell-Faraday et Maxwell-Ampère sans sources : $$\\Delta \\vec{E} - \\mu_0 \\varepsilon_0 \\frac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}$$ On identifie la célérité : \\(c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}\\).",
    hint: "Prendre le rotationnel de Maxwell-Faraday"
  },
  {
    id: "e3a-phys-em-04",
    theme: "em",
    themeColor: "#E91E63",
    q: "Pour une OPPM se propageant selon \\(\\vec{u_z}\\), donner la <b>relation de structure</b> entre \\(\\vec{E}\\) et \\(\\vec{B}\\).",
    a: "$$\\vec{B} = \\frac{1}{c} \\vec{u_z} \\times \\vec{E} = \\frac{\\vec{k} \\times \\vec{E}}{\\omega}$$ \\(\\vec{E}\\), \\(\\vec{B}\\) et \\(\\vec{u_z}\\) forment un trièdre direct. L'onde est <b>transverse</b> : \\(\\vec{E} \\perp \\vec{k}\\) et \\(\\vec{B} \\perp \\vec{k}\\).",
    hint: "B = (1/c) u × E"
  },
  {
    id: "e3a-phys-em-05",
    theme: "em",
    themeColor: "#E91E63",
    q: "Qu'est-ce que l'<b>effet de peau</b> ? Donner l'expression de l'épaisseur de peau \\(\\delta\\).",
    a: "Dans un conducteur ohmique soumis à un champ EM variable, le courant se concentre en surface. L'épaisseur de peau vaut : $$\\delta = \\sqrt{\\frac{2}{\\mu_0 \\sigma \\omega}}$$ où \\(\\sigma\\) est la conductivité et \\(\\omega\\) la pulsation. L'amplitude décroît en \\(e^{-z/\\delta}\\).",
    hint: "Décroissance exponentielle, dépend de σ et ω"
  },
  {
    id: "e3a-phys-em-06",
    theme: "em",
    themeColor: "#E91E63",
    q: "Donner l'expression de la <b>densité volumique d'énergie électromagnétique</b> et écrire l'équation locale de conservation de l'énergie (Poynting).",
    a: "Densité d'énergie : $$u_{em} = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0}$$ Équation de Poynting : $$\\frac{\\partial u_{em}}{\\partial t} + \\vec{\\nabla} \\cdot \\vec{\\Pi} = -\\vec{j} \\cdot \\vec{E}$$ Le terme \\(-\\vec{j} \\cdot \\vec{E}\\) est la puissance volumique cédée aux charges.",
    hint: "u = ε₀E²/2 + B²/(2μ₀)"
  },
  {
    id: "e3a-phys-em-07",
    theme: "em",
    themeColor: "#E91E63",
    q: "Donner la <b>puissance moyenne rayonnée</b> par un dipôle oscillant \\(\\vec{p} = p_0 \\cos(\\omega t) \\vec{u_z}\\).",
    a: "$$\\langle P \\rangle = \\frac{p_0^2 \\omega^4}{12 \\pi \\varepsilon_0 c^3}$$ La puissance rayonnée est proportionnelle à \\(\\omega^4\\) (loi en puissance quatrième), ce qui explique la <b>diffusion Rayleigh</b> (le ciel est bleu).",
    hint: "Proportionnelle à ω⁴"
  },
  {
    id: "e3a-phys-em-08",
    theme: "em",
    themeColor: "#E91E63",
    q: "Écrire la <b>relation de dispersion</b> d'une OEM dans un plasma non collisionnel. Qu'est-ce que la <b>fréquence de coupure</b> ?",
    a: "$$\\omega^2 = \\omega_p^2 + c^2 k^2$$ avec la pulsation plasma : $$\\omega_p = \\sqrt{\\frac{n_e e^2}{m_e \\varepsilon_0}}$$ Si \\(\\omega < \\omega_p\\), l'onde est <b>évanescente</b> (\\(k\\) imaginaire). Le plasma est un <b>filtre passe-haut</b>.",
    hint: "ω² = ωₚ² + c²k², filtre passe-haut"
  },

  // ═══════════════════════════════════════════════════════════════
  //  MÉCANIQUE / GRAVITATION — 8 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-meca-01",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Énoncer les <b>trois lois de Kepler</b> pour le mouvement des planètes.",
    a: "<b>1ère loi (orbites)</b> : les planètes décrivent des ellipses dont le Soleil occupe un foyer.<br><b>2ème loi (aires)</b> : le rayon vecteur balaie des aires égales en des temps égaux.<br><b>3ème loi (périodes)</b> : $$\\frac{T^2}{a^3} = \\frac{4\\pi^2}{G M}$$ où \\(a\\) est le demi-grand axe.",
    hint: "Ellipses, aires, T²/a³ = cste"
  },
  {
    id: "e3a-phys-meca-02",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'expression de l'<b>énergie potentielle effective</b> pour un problème à force centrale en \\(1/r^2\\). Tracer son allure.",
    a: "$$E_{p,\\text{eff}}(r) = -\\frac{G M m}{r} + \\frac{L^2}{2 m r^2}$$ Le premier terme est attractif (gravitation), le second est la <b>barrière centrifuge</b> (répulsif). Le minimum de \\(E_{p,\\text{eff}}\\) correspond à l'<b>orbite circulaire</b>.",
    hint: "Gravitation + barrière centrifuge en L²/(2mr²)"
  },
  {
    id: "e3a-phys-meca-03",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Exprimer le <b>moment cinétique</b> \\(\\vec{L}\\) par rapport à un point O et donner le théorème du moment cinétique.",
    a: "$$\\vec{L}_O = \\vec{r} \\times m\\vec{v}$$ Théorème du moment cinétique : $$\\frac{d\\vec{L}_O}{dt} = \\vec{\\mathcal{M}}_O(\\vec{F})$$ où \\(\\vec{\\mathcal{M}}_O\\) est le moment des forces extérieures. Si \\(\\vec{\\mathcal{M}}_O = \\vec{0}\\), alors \\(\\vec{L}_O\\) est <b>conservé</b>.",
    hint: "dL/dt = moment des forces"
  },
  {
    id: "e3a-phys-meca-04",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'expression du <b>moment d'inertie</b> d'une sphère homogène de masse \\(M\\) et rayon \\(R\\) par rapport à un axe passant par son centre. Énoncer le théorème de Huygens.",
    a: "$$J_{\\Delta} = \\frac{2}{5} M R^2$$ <b>Théorème de Huygens</b> (axes parallèles) : $$J_{\\Delta'} = J_{\\Delta_G} + M d^2$$ où \\(d\\) est la distance entre l'axe \\(\\Delta'\\) et l'axe \\(\\Delta_G\\) passant par le centre de masse.",
    hint: "2/5 MR² et théorème des axes parallèles"
  },
  {
    id: "e3a-phys-meca-05",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Écrire le <b>PFD en référentiel non galiléen</b> en rotation uniforme \\(\\vec{\\Omega}\\). Identifier les forces d'inertie.",
    a: "$$m\\vec{a}_{R'} = \\vec{F} - m\\vec{a}_e - m\\vec{a}_c$$ avec : <br>• Force d'inertie d'<b>entraînement</b> : \\(-m\\vec{a}_e = -m\\vec{\\Omega} \\times (\\vec{\\Omega} \\times \\vec{r})\\) (centrifuge)<br>• Force de <b>Coriolis</b> : \\(-m\\vec{a}_c = -2m\\vec{\\Omega} \\times \\vec{v}_{R'}\\)",
    hint: "Entraînement (centrifuge) + Coriolis"
  },
  {
    id: "e3a-phys-meca-06",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Pour un <b>oscillateur harmonique amorti</b> \\(m\\ddot{x} + f\\dot{x} + kx = 0\\), donner le facteur de qualité \\(Q\\) et la condition de pseudo-période.",
    a: "On pose \\(\\omega_0 = \\sqrt{k/m}\\) et \\(Q = \\frac{m\\omega_0}{f} = \\frac{\\sqrt{km}}{f}\\).<br><b>Régime pseudo-périodique</b> si \\(Q > 1/2\\). La pseudo-pulsation vaut : $$\\omega_1 = \\omega_0 \\sqrt{1 - \\frac{1}{4Q^2}}$$ Le décrément logarithmique : \\(\\delta = \\frac{\\pi}{Q\\sqrt{1 - 1/(4Q^2)}}\\).",
    hint: "Q = mω₀/f, pseudo-périodique si Q > 1/2"
  },
  {
    id: "e3a-phys-meca-07",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner la <b>vitesse de libération</b> (vitesse d'évasion) à la surface d'un astre de masse \\(M\\) et rayon \\(R\\).",
    a: "On écrit la conservation de l'énergie avec \\(E = 0\\) à l'infini : $$\\frac{1}{2}mv_{lib}^2 - \\frac{GMm}{R} = 0$$ $$v_{lib} = \\sqrt{\\frac{2GM}{R}}$$ Pour la Terre : \\(v_{lib} \\approx 11{,}2 \\text{ km/s}\\).",
    hint: "Conservation de l'énergie, E∞ = 0"
  },
  {
    id: "e3a-phys-meca-08",
    theme: "mecanique",
    themeColor: "#4A90D9",
    q: "Donner l'équation de la <b>trajectoire</b> (formule de Binet) pour une force centrale gravitationnelle. Quels sont les types de trajectoires possibles ?",
    a: "En posant \\(u = 1/r\\) : $$r(\\theta) = \\frac{p}{1 + e \\cos(\\theta - \\theta_0)}$$ avec \\(p = L^2/(GMm^2)\\) le paramètre et \\(e\\) l'excentricité.<br>• \\(e = 0\\) : cercle<br>• \\(0 < e < 1\\) : ellipse<br>• \\(e = 1\\) : parabole<br>• \\(e > 1\\) : hyperbole",
    hint: "Conique : r = p/(1 + e cos θ)"
  },

  // ═══════════════════════════════════════════════════════════════
  //  THERMODYNAMIQUE — 6 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-thermo-01",
    theme: "thermo",
    themeColor: "#FF9800",
    q: "Énoncer le <b>premier principe</b> de la thermodynamique pour un système fermé. Distinguer les conventions.",
    a: "$$\\Delta U = W + Q$$ L'énergie interne \\(U\\) est une <b>fonction d'état</b>. \\(W\\) est le travail reçu et \\(Q\\) la chaleur reçue par le système (convention récepteur). Pour une transformation infinitésimale : \\(dU = \\delta W + \\delta Q\\).",
    hint: "ΔU = W + Q, U fonction d'état"
  },
  {
    id: "e3a-phys-thermo-02",
    theme: "thermo",
    themeColor: "#FF9800",
    q: "Énoncer le <b>second principe</b> de la thermodynamique. Que vaut la création d'entropie pour une transformation réversible ?",
    a: "$$\\Delta S = S_{éch} + S_{créée}$$ avec \\(S_{éch} = \\int \\frac{\\delta Q}{T_{ext}}\\) et \\(S_{créée} \\geq 0\\).<br>• Transformation <b>réversible</b> : \\(S_{créée} = 0\\)<br>• Transformation <b>irréversible</b> : \\(S_{créée} > 0\\)<br>L'entropie est une <b>fonction d'état</b> extensive.",
    hint: "ΔS = Séch + Scréée ≥ Séch"
  },
  {
    id: "e3a-phys-thermo-03",
    theme: "thermo",
    themeColor: "#FF9800",
    q: "Donner le <b>rendement de Carnot</b> d'un moteur ditherme fonctionnant entre une source chaude \\(T_c\\) et une source froide \\(T_f\\).",
    a: "$$\\eta_{Carnot} = 1 - \\frac{T_f}{T_c}$$ C'est le <b>rendement maximal</b> possible pour un moteur ditherme. Il est atteint uniquement pour un cycle <b>réversible</b>. Les températures sont en <b>kelvins</b>.",
    hint: "η = 1 − Tf/Tc, rendement maximal"
  },
  {
    id: "e3a-phys-thermo-04",
    theme: "thermo",
    themeColor: "#FF9800",
    q: "Donner les expressions de \\(\\Delta U\\), \\(\\Delta H\\) et \\(\\Delta S\\) pour un <b>gaz parfait</b> entre deux états \\((T_1, V_1)\\) et \\((T_2, V_2)\\).",
    a: "$$\\Delta U = n C_V (T_2 - T_1)$$ $$\\Delta H = n C_P (T_2 - T_1)$$ $$\\Delta S = n C_V \\ln\\frac{T_2}{T_1} + nR \\ln\\frac{V_2}{V_1}$$ avec \\(C_P - C_V = R\\) (relation de Mayer) et \\(\\gamma = C_P / C_V\\).",
    hint: "Fonctions d'état → chemin quelconque, relation de Mayer"
  },
  {
    id: "e3a-phys-thermo-05",
    theme: "thermo",
    themeColor: "#FF9800",
    q: "Donner l'expression de la <b>loi de Laplace</b> pour une transformation adiabatique réversible d'un gaz parfait.",
    a: "$$T V^{\\gamma - 1} = \\text{cste}$$ $$P V^{\\gamma} = \\text{cste}$$ $$T^{\\gamma} P^{1-\\gamma} = \\text{cste}$$ avec \\(\\gamma = C_P / C_V\\). Pour un gaz monoatomique : \\(\\gamma = 5/3\\), diatomique : \\(\\gamma = 7/5\\).",
    hint: "PVγ = cste, adiabatique réversible"
  },
  {
    id: "e3a-phys-thermo-06",
    theme: "thermo",
    themeColor: "#FF9800",
    q: "Lors d'un <b>changement de phase</b> liquide→gaz, donner la relation de <b>Clausius-Clapeyron</b>.",
    a: "$$\\frac{dP}{dT} = \\frac{L_{vap}}{T \\Delta v}$$ où \\(L_{vap}\\) est l'enthalpie massique de vaporisation et \\(\\Delta v = v_{gaz} - v_{liq}\\). Si on assimile la vapeur à un GP et qu'on néglige \\(v_{liq}\\) : $$\\frac{dP}{dT} \\approx \\frac{P L_{vap}}{RT^2}$$",
    hint: "dP/dT = L/(TΔv)"
  },

  // ═══════════════════════════════════════════════════════════════
  //  ONDES / OSCILLATEURS / CIRCUITS — 6 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-ondes-01",
    theme: "ondes",
    themeColor: "#4CAF50",
    q: "Écrire l'<b>équation de d'Alembert</b> à une dimension et donner la forme générale de sa solution.",
    a: "$$\\frac{\\partial^2 y}{\\partial t^2} = c^2 \\frac{\\partial^2 y}{\\partial x^2}$$ Solution générale : $$y(x,t) = f(x - ct) + g(x + ct)$$ soit la superposition d'une onde progressive se propageant vers les \\(x > 0\\) et d'une vers les \\(x < 0\\).",
    hint: "f(x−ct) + g(x+ct)"
  },
  {
    id: "e3a-phys-ondes-02",
    theme: "ondes",
    themeColor: "#4CAF50",
    q: "Pour un circuit <b>RLC série</b> en régime sinusoïdal forcé, donner l'<b>impédance complexe</b> et la condition de résonance en intensité.",
    a: "$$\\underline{Z} = R + j\\left(L\\omega - \\frac{1}{C\\omega}\\right)$$ <b>Résonance en intensité</b> quand la partie imaginaire s'annule : $$\\omega_0 = \\frac{1}{\\sqrt{LC}}$$ À la résonance, \\(|\\underline{Z}| = R\\) (minimum) et \\(I\\) est <b>maximale</b>. Le facteur de qualité : \\(Q = \\frac{L\\omega_0}{R} = \\frac{1}{R}\\sqrt{\\frac{L}{C}}\\).",
    hint: "Z = R + j(Lω − 1/(Cω)), résonance quand Im(Z) = 0"
  },
  {
    id: "e3a-phys-ondes-03",
    theme: "ondes",
    themeColor: "#4CAF50",
    q: "Donner la condition d'existence d'<b>ondes stationnaires</b> sur une corde fixée aux deux extrémités de longueur \\(L\\).",
    a: "$$y(x,t) = A \\sin(k_n x) \\cos(\\omega_n t)$$ Conditions aux limites : \\(y(0,t) = y(L,t) = 0\\), d'où : $$k_n = \\frac{n\\pi}{L} \\quad \\Rightarrow \\quad f_n = \\frac{nc}{2L}, \\quad n \\in \\mathbb{N}^*$$ Le mode \\(n=1\\) est le <b>fondamental</b>, les suivants sont les <b>harmoniques</b>.",
    hint: "Nœuds aux extrémités : fₙ = nc/(2L)"
  },
  {
    id: "e3a-phys-ondes-04",
    theme: "ondes",
    themeColor: "#4CAF50",
    q: "Dans un circuit RC série en régime transitoire, donner l'expression de la <b>tension aux bornes du condensateur</b> lors de la charge sous tension \\(E\\).",
    a: "$$u_C(t) = E\\left(1 - e^{-t/\\tau}\\right)$$ avec la constante de temps \\(\\tau = RC\\). À \\(t = \\tau\\), on atteint 63% de \\(E\\). À \\(t = 5\\tau\\), la charge est considérée terminée (>99%).",
    hint: "τ = RC, charge exponentielle"
  },
  {
    id: "e3a-phys-ondes-05",
    theme: "ondes",
    themeColor: "#4CAF50",
    q: "Donner le <b>diagramme de Bode</b> (gain et phase) d'un filtre passe-bas du 1er ordre de fonction de transfert \\(\\underline{H} = \\frac{H_0}{1 + j\\omega/\\omega_c}\\).",
    a: "• <b>Gain</b> : \\(G_{dB} = 20\\log(H_0) - 10\\log\\left(1 + (\\omega/\\omega_c)^2\\right)\\)<br>• BF (\\(\\omega \\ll \\omega_c\\)) : palier à \\(20\\log(H_0)\\)<br>• HF (\\(\\omega \\gg \\omega_c\\)) : pente de \\(-20\\) dB/décade<br>• <b>Phase</b> : \\(\\varphi = -\\arctan(\\omega/\\omega_c)\\), de \\(0\\) à \\(-\\pi/2\\)<br>• À \\(\\omega = \\omega_c\\) : \\(G = 20\\log(H_0) - 3\\) dB et \\(\\varphi = -\\pi/4\\).",
    hint: "−20 dB/décade en HF, −3 dB à ωc"
  },
  {
    id: "e3a-phys-ondes-06",
    theme: "ondes",
    themeColor: "#4CAF50",
    q: "Énoncer le théorème de <b>superposition</b> et le théorème de <b>Thévenin</b> pour un circuit linéaire.",
    a: "<b>Superposition</b> : dans un circuit linéaire à plusieurs sources, la réponse est la somme des réponses à chaque source prise séparément (les autres éteintes).<br><b>Thévenin</b> : tout dipôle linéaire est équivalent à une source de tension \\(E_{th}\\) (tension à vide) en série avec une résistance \\(R_{th}\\) (résistance vue entre les bornes, sources éteintes).",
    hint: "Superposition et modèle équivalent tension + résistance"
  },

  // ═══════════════════════════════════════════════════════════════
  //  OPTIQUE — 4 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-opt-01",
    theme: "optique",
    themeColor: "#9C27B0",
    q: "Énoncer les <b>lois de Snell-Descartes</b> pour la réfraction. Qu'est-ce que l'angle de réfraction limite ?",
    a: "<b>1ère loi</b> : le rayon réfracté est dans le plan d'incidence.<br><b>2ème loi</b> : $$n_1 \\sin(i_1) = n_2 \\sin(i_2)$$ Si \\(n_1 > n_2\\), il existe un <b>angle limite</b> : $$\\sin(i_{lim}) = \\frac{n_2}{n_1}$$ Au-delà, <b>réflexion totale</b>.",
    hint: "n₁ sin i₁ = n₂ sin i₂"
  },
  {
    id: "e3a-phys-opt-02",
    theme: "optique",
    themeColor: "#9C27B0",
    q: "Donner la <b>relation de conjugaison</b> d'une lentille mince de focale \\(f'\\) avec les positions algébriques.",
    a: "$$\\frac{1}{\\overline{OA'}} - \\frac{1}{\\overline{OA}} = \\frac{1}{f'}$$ Le <b>grandissement</b> transversal : $$\\gamma = \\frac{\\overline{A'B'}}{\\overline{AB}} = \\frac{\\overline{OA'}}{\\overline{OA}}$$ \\(f' > 0\\) pour une lentille convergente, \\(f' < 0\\) pour une divergente.",
    hint: "1/OA' − 1/OA = 1/f'"
  },
  {
    id: "e3a-phys-opt-03",
    theme: "optique",
    themeColor: "#9C27B0",
    q: "Donner la formule de la <b>figure de diffraction</b> par une fente simple de largeur \\(a\\) éclairée en incidence normale.",
    a: "L'intensité diffractée vaut : $$I(\\theta) = I_0 \\left(\\frac{\\sin(\\pi a \\sin\\theta / \\lambda)}{\\pi a \\sin\\theta / \\lambda}\\right)^2 = I_0 \\text{sinc}^2\\left(\\frac{\\pi a \\sin\\theta}{\\lambda}\\right)$$ Les <b>minima</b> (zéros) sont en \\(\\sin\\theta = k\\lambda/a\\) pour \\(k \\in \\mathbb{Z}^*\\). La largeur angulaire du pic central vaut \\(2\\lambda/a\\).",
    hint: "sinc², minima en sin θ = kλ/a"
  },
  {
    id: "e3a-phys-opt-04",
    theme: "optique",
    themeColor: "#9C27B0",
    q: "Décrire le dispositif des <b>fentes d'Young</b> et donner l'expression de l'interfrange.",
    a: "Deux fentes séparées de \\(a\\), à distance \\(D\\) de l'écran, éclairées par une source monochromatique \\(\\lambda\\). La <b>différence de marche</b> : \\(\\delta = ax/D\\). L'<b>interfrange</b> : $$i = \\frac{\\lambda D}{a}$$ Franges brillantes quand \\(\\delta = k\\lambda\\), sombres quand \\(\\delta = (k + 1/2)\\lambda\\).",
    hint: "i = λD/a"
  },

  // ═══════════════════════════════════════════════════════════════
  //  CHIMIE — 8 cartes
  // ═══════════════════════════════════════════════════════════════

  {
    id: "e3a-phys-chim-01",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Décrire la structure <b>CFC</b> (cubique faces centrées). Donner la coordinence, le nombre de motifs par maille et la compacité.",
    a: "<b>Atomes</b> : 8 sommets (×1/8) + 6 faces (×1/2) = <b>4 atomes/maille</b>.<br><b>Coordinence</b> : 12.<br><b>Relation paramètre-rayon</b> : \\(a = 2r\\sqrt{2}\\) (contact sur la diagonale de face).<br><b>Compacité</b> : $$C = \\frac{4 \\times \\frac{4}{3}\\pi r^3}{a^3} = \\frac{\\pi}{3\\sqrt{2}} \\approx 0{,}74$$",
    hint: "4 atomes, coordinence 12, compacité ≈ 0.74"
  },
  {
    id: "e3a-phys-chim-02",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Décrire la structure <b>CC</b> (cubique centrée). Donner la coordinence, le nombre de motifs par maille et la compacité.",
    a: "<b>Atomes</b> : 8 sommets (×1/8) + 1 centre = <b>2 atomes/maille</b>.<br><b>Coordinence</b> : 8.<br><b>Relation paramètre-rayon</b> : \\(a\\sqrt{3} = 4r\\) (contact sur la grande diagonale du cube).<br><b>Compacité</b> : $$C = \\frac{\\pi\\sqrt{3}}{8} \\approx 0{,}68$$",
    hint: "2 atomes, coordinence 8, compacité ≈ 0.68"
  },
  {
    id: "e3a-phys-chim-03",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Donner la <b>loi d'Arrhenius</b> pour la constante de vitesse \\(k(T)\\). Comment déterminer \\(E_a\\) expérimentalement ?",
    a: "$$k(T) = A \\, e^{-E_a / (RT)}$$ où \\(A\\) est le facteur pré-exponentiel et \\(E_a\\) l'énergie d'activation.<br>En traçant \\(\\ln k\\) en fonction de \\(1/T\\), on obtient une droite de pente \\(-E_a/R\\). C'est le <b>diagramme d'Arrhenius</b>.",
    hint: "k = A exp(−Ea/RT), diagramme ln(k) vs 1/T"
  },
  {
    id: "e3a-phys-chim-04",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Donner la <b>loi de Nernst</b> pour un couple redox \\(\\text{Ox}/\\text{Red}\\). Quelle est la valeur numérique du facteur \\(RT/F\\) à 25°C ?",
    a: "$$E = E^\\circ + \\frac{RT}{nF} \\ln \\frac{[\\text{Ox}]}{[\\text{Red}]}$$ À 25°C : \\(\\frac{RT}{F} \\approx 0{,}026\\) V, donc : $$E = E^\\circ + \\frac{0{,}06}{n} \\log \\frac{[\\text{Ox}]}{[\\text{Red}]}$$ où \\(n\\) est le nombre d'électrons échangés.",
    hint: "E = E° + (RT/nF) ln([Ox]/[Red])"
  },
  {
    id: "e3a-phys-chim-05",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Donner la relation entre le <b>pH</b> et le <b>pKa</b> pour une solution tampon (couple acide/base conjugué).",
    a: "Équation de <b>Henderson-Hasselbalch</b> : $$\\text{pH} = \\text{pK}_a + \\log \\frac{[\\text{A}^-]}{[\\text{AH}]}$$ Le pouvoir tampon est maximal quand \\(\\text{pH} = \\text{pK}_a\\), soit \\([\\text{A}^-] = [\\text{AH}]\\). Le pH varie peu lors de l'ajout d'acide ou de base.",
    hint: "Henderson-Hasselbalch : pH = pKa + log([A⁻]/[AH])"
  },
  {
    id: "e3a-phys-chim-06",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Donner les expressions des <b>temps de demi-réaction</b> pour des réactions d'<b>ordre 1</b> et d'<b>ordre 2</b>.",
    a: "<b>Ordre 1</b> : \\([A] = [A]_0 e^{-kt}\\) $$t_{1/2} = \\frac{\\ln 2}{k}$$ (indépendant de \\([A]_0\\)).<br><br><b>Ordre 2</b> : \\(\\frac{1}{[A]} = \\frac{1}{[A]_0} + kt\\) $$t_{1/2} = \\frac{1}{k [A]_0}$$ (dépend de la concentration initiale).",
    hint: "Ordre 1 : ln2/k ; Ordre 2 : 1/(k[A]₀)"
  },
  {
    id: "e3a-phys-chim-07",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Décrire la structure du <b>chlorure de sodium NaCl</b>. Combien de motifs NaCl par maille ? Quelle est la condition de contact ?",
    a: "Structure <b>CFC de Cl⁻</b> avec Na⁺ dans <b>tous les sites octaédriques</b> (ou vice-versa).<br><b>Motifs par maille</b> : 4 NaCl (4 Na⁺ + 4 Cl⁻).<br><b>Coordinence</b> : 6 pour chaque ion.<br><b>Condition de contact</b> : \\(a = 2(r_{Na^+} + r_{Cl^-})\\) (contact anion-cation le long de l'arête).",
    hint: "CFC + sites octaédriques, 4 motifs, coordinence 6"
  },
  {
    id: "e3a-phys-chim-08",
    theme: "chimie",
    themeColor: "#D4873B",
    q: "Qu'est-ce qu'une <b>pile électrochimique</b> ? Donner l'expression de la <b>f.é.m.</b> d'une pile et la relation avec \\(\\Delta_r G\\).",
    a: "Une pile convertit l'énergie chimique en énergie électrique grâce à deux demi-réactions séparées.<br><b>f.é.m.</b> : $$e = E_{cathode} - E_{anode}$$ Relation avec l'enthalpie libre : $$\\Delta_r G = -nFe$$ La réaction est spontanée si \\(e > 0\\) (soit \\(\\Delta_r G < 0\\)).",
    hint: "e = E(cathode) − E(anode), ΔrG = −nFe"
  }
];
