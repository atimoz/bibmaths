// Quiz QCM E3A-Polytech Physique-Chimie — 40 questions niveau E3A MP
// Thèmes : em, mecanique, thermo, ondes, optique, chimie

var E3A_QUIZ_PHYSIQUE = [

  // ═══════════════════════════════════════════════
  //  ÉLECTROMAGNÉTISME / OEM (8 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-qp-em-01",
    theme: "em",
    themeColor: "#2196F3",
    question: "L'équation de Maxwell-Faraday en régime quelconque s'écrit :",
    choices: [
      "\\(\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\dfrac{\\partial \\vec{B}}{\\partial t}\\)",
      "\\(\\vec{\\mathrm{rot}}\\,\\vec{E} = \\dfrac{\\partial \\vec{B}}{\\partial t}\\)",
      "\\(\\mathrm{div}\\,\\vec{E} = -\\dfrac{\\partial B}{\\partial t}\\)",
      "\\(\\vec{\\mathrm{rot}}\\,\\vec{B} = -\\dfrac{\\partial \\vec{E}}{\\partial t}\\)"
    ],
    correct: 0,
    explanation: "L'équation de Maxwell-Faraday s'écrit \\(\\vec{\\mathrm{rot}}\\,\\vec{E} = -\\dfrac{\\partial \\vec{B}}{\\partial t}\\). Elle traduit le fait qu'un champ magnétique variable dans le temps crée un champ électrique à circulation non nulle (phénomène d'induction). Le signe moins est essentiel (loi de Lenz). Ne pas confondre avec Maxwell-Ampère qui fait intervenir \\(\\vec{\\mathrm{rot}}\\,\\vec{B}\\)."
  },
  {
    id: "e3a-qp-em-02",
    theme: "em",
    themeColor: "#2196F3",
    question: "Le vecteur de Poynting \\(\\vec{\\Pi}\\) est défini par :",
    choices: [
      "\\(\\vec{\\Pi} = \\dfrac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}\\)",
      "\\(\\vec{\\Pi} = \\mu_0 \\, \\vec{E} \\wedge \\vec{B}\\)",
      "\\(\\vec{\\Pi} = \\dfrac{\\vec{B} \\wedge \\vec{E}}{\\mu_0}\\)",
      "\\(\\vec{\\Pi} = \\varepsilon_0 \\, \\vec{E} \\wedge \\vec{B}\\)"
    ],
    correct: 0,
    explanation: "Le vecteur de Poynting est \\(\\vec{\\Pi} = \\dfrac{\\vec{E} \\wedge \\vec{B}}{\\mu_0}\\). Il représente la densité surfacique de puissance électromagnétique transportée. Son flux à travers une surface fermée, pris avec le signe moins, donne la puissance rayonnée à travers cette surface. En moyenne temporelle pour une OPPM, \\(\\langle \\Pi \\rangle = \\dfrac{E_0^2}{2\\mu_0 c}\\)."
  },
  {
    id: "e3a-qp-em-03",
    theme: "em",
    themeColor: "#2196F3",
    question: "Pour une onde plane progressive monochromatique (OPPM) se propageant dans le vide selon \\(\\vec{u_z}\\), quelle relation lie \\(\\vec{E}\\) et \\(\\vec{B}\\) ?",
    choices: [
      "\\(\\vec{B} = \\dfrac{\\vec{u_z} \\wedge \\vec{E}}{c}\\)",
      "\\(\\vec{B} = c \\, \\vec{u_z} \\wedge \\vec{E}\\)",
      "\\(\\vec{B} = \\dfrac{\\vec{E} \\wedge \\vec{u_z}}{c}\\)",
      "\\(\\vec{B} = -\\dfrac{\\vec{u_z} \\wedge \\vec{E}}{c}\\)"
    ],
    correct: 0,
    explanation: "Pour une OPPM dans le vide, la relation de structure est \\(\\vec{B} = \\dfrac{\\vec{u_z} \\wedge \\vec{E}}{c} = \\dfrac{1}{c}\\vec{u_z} \\wedge \\vec{E}\\). Le champ \\(\\vec{B}\\) est perpendiculaire à \\(\\vec{E}\\) et à la direction de propagation, et son amplitude vérifie \\(B_0 = E_0/c\\). Le trièdre \\((\\vec{E}, \\vec{B}, \\vec{u_z})\\) est direct."
  },
  {
    id: "e3a-qp-em-04",
    theme: "em",
    themeColor: "#2196F3",
    question: "L'épaisseur de peau \\(\\delta\\) d'un conducteur ohmique de conductivité \\(\\gamma\\) à la pulsation \\(\\omega\\) vaut :",
    choices: [
      "\\(\\delta = \\sqrt{\\dfrac{2}{\\mu_0 \\gamma \\omega}}\\)",
      "\\(\\delta = \\sqrt{\\dfrac{\\mu_0 \\gamma \\omega}{2}}\\)",
      "\\(\\delta = \\dfrac{1}{\\mu_0 \\gamma \\omega}\\)",
      "\\(\\delta = \\dfrac{2}{\\mu_0 \\gamma \\omega}\\)"
    ],
    correct: 0,
    explanation: "L'épaisseur de peau (ou profondeur de pénétration) est \\(\\delta = \\sqrt{\\dfrac{2}{\\mu_0 \\gamma \\omega}}\\). Elle caractérise la distance sur laquelle l'amplitude de l'onde est divisée par \\(e\\) dans un conducteur. Plus la conductivité ou la fréquence est grande, plus \\(\\delta\\) est petite : le courant se concentre en surface (effet de peau)."
  },
  {
    id: "e3a-qp-em-05",
    theme: "em",
    themeColor: "#2196F3",
    question: "L'équation de Maxwell-Gauss dans le vide s'écrit \\(\\mathrm{div}\\,\\vec{E} = \\rho/\\varepsilon_0\\). Quelle est la forme intégrale associée ?",
    choices: [
      "\\(\\oint_S \\vec{E} \\cdot d\\vec{S} = \\dfrac{Q_{\\mathrm{int}}}{\\varepsilon_0}\\)",
      "\\(\\oint_C \\vec{E} \\cdot d\\vec{\\ell} = -\\dfrac{d\\Phi_B}{dt}\\)",
      "\\(\\oint_S \\vec{E} \\cdot d\\vec{S} = \\varepsilon_0 \\, Q_{\\mathrm{int}}\\)",
      "\\(\\oint_S \\vec{B} \\cdot d\\vec{S} = \\dfrac{Q_{\\mathrm{int}}}{\\varepsilon_0}\\)"
    ],
    correct: 0,
    explanation: "Par le théorème de Green-Ostrogradski, on passe de \\(\\mathrm{div}\\,\\vec{E} = \\rho/\\varepsilon_0\\) à la forme intégrale \\(\\oint_S \\vec{E} \\cdot d\\vec{S} = \\dfrac{Q_{\\mathrm{int}}}{\\varepsilon_0}\\), qui est le théorème de Gauss. C'est l'outil fondamental pour calculer \\(\\vec{E}\\) dans les situations à haute symétrie (sphérique, cylindrique, plane)."
  },
  {
    id: "e3a-qp-em-06",
    theme: "em",
    themeColor: "#2196F3",
    question: "La densité volumique d'énergie électromagnétique dans le vide vaut :",
    choices: [
      "\\(u_{\\mathrm{em}} = \\dfrac{\\varepsilon_0 E^2}{2} + \\dfrac{B^2}{2\\mu_0}\\)",
      "\\(u_{\\mathrm{em}} = \\varepsilon_0 E^2 + \\dfrac{B^2}{\\mu_0}\\)",
      "\\(u_{\\mathrm{em}} = \\dfrac{\\varepsilon_0 E^2}{2} - \\dfrac{B^2}{2\\mu_0}\\)",
      "\\(u_{\\mathrm{em}} = \\dfrac{E \\cdot B}{\\mu_0}\\)"
    ],
    correct: 0,
    explanation: "La densité volumique d'énergie EM dans le vide est \\(u_{\\mathrm{em}} = \\dfrac{\\varepsilon_0 E^2}{2} + \\dfrac{B^2}{2\\mu_0}\\). Le premier terme est l'énergie électrique, le second l'énergie magnétique. Pour une OPPM dans le vide, les deux contributions sont égales (équipartition) : \\(\\varepsilon_0 E^2/2 = B^2/(2\\mu_0)\\)."
  },
  {
    id: "e3a-qp-em-07",
    theme: "em",
    themeColor: "#2196F3",
    question: "Quelle est l'équation de propagation vérifiée par \\(\\vec{E}\\) dans le vide sans source ?",
    choices: [
      "\\(\\Delta \\vec{E} - \\mu_0 \\varepsilon_0 \\dfrac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}\\)",
      "\\(\\Delta \\vec{E} + \\mu_0 \\varepsilon_0 \\dfrac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}\\)",
      "\\(\\Delta \\vec{E} - \\dfrac{1}{c} \\dfrac{\\partial \\vec{E}}{\\partial t} = \\vec{0}\\)",
      "\\(\\vec{\\mathrm{rot}}\\,\\vec{E} - \\mu_0 \\varepsilon_0 \\dfrac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}\\)"
    ],
    correct: 0,
    explanation: "En combinant Maxwell-Faraday et Maxwell-Ampère dans le vide sans charge ni courant, on obtient l'équation de d'Alembert : \\(\\Delta \\vec{E} - \\mu_0 \\varepsilon_0 \\dfrac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}\\), soit \\(\\Delta \\vec{E} - \\dfrac{1}{c^2} \\dfrac{\\partial^2 \\vec{E}}{\\partial t^2} = \\vec{0}\\) avec \\(c = 1/\\sqrt{\\mu_0 \\varepsilon_0}\\). C'est une équation d'onde à la vitesse \\(c\\)."
  },
  {
    id: "e3a-qp-em-08",
    theme: "em",
    themeColor: "#2196F3",
    question: "Dans l'approximation des régimes quasi-stationnaires (ARQS), on néglige :",
    choices: [
      "Le courant de déplacement \\(\\varepsilon_0 \\dfrac{\\partial \\vec{E}}{\\partial t}\\) devant la densité de courant \\(\\vec{j}\\)",
      "Le champ magnétique devant le champ électrique",
      "La charge volumique \\(\\rho\\) devant le courant \\(\\vec{j}\\)",
      "Le flux magnétique à travers tout circuit"
    ],
    correct: 0,
    explanation: "L'ARQS consiste à négliger le courant de déplacement de Maxwell \\(\\varepsilon_0 \\dfrac{\\partial \\vec{E}}{\\partial t}\\) devant le courant de conduction \\(\\vec{j}\\) dans l'équation de Maxwell-Ampère. Cela revient à dire que les dimensions du circuit sont très petites devant la longueur d'onde \\(\\lambda = c/f\\) des signaux. L'ARQS est valable en basse fréquence ou pour des circuits de petite taille."
  },

  // ═══════════════════════════════════════════════
  //  MÉCANIQUE / GRAVITATION (8 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-qp-meca-01",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "La troisième loi de Kepler relie la période \\(T\\) d'une orbite elliptique au demi-grand axe \\(a\\) par :",
    choices: [
      "\\(T^2 = \\dfrac{4\\pi^2}{GM} \\, a^3\\)",
      "\\(T^2 = \\dfrac{GM}{4\\pi^2} \\, a^3\\)",
      "\\(T = \\dfrac{2\\pi a}{\\sqrt{GM}}\\)",
      "\\(T^2 = \\dfrac{4\\pi^2}{GM} \\, a^2\\)"
    ],
    correct: 0,
    explanation: "La troisième loi de Kepler s'écrit \\(T^2 = \\dfrac{4\\pi^2}{GM} \\, a^3\\) où \\(M\\) est la masse du corps central et \\(a\\) le demi-grand axe de l'ellipse. Pour une orbite circulaire de rayon \\(r\\), on retrouve \\(T^2 = \\dfrac{4\\pi^2 r^3}{GM}\\). Cette loi découle directement de la mécanique newtonienne et s'applique à tout mouvement képlérien."
  },
  {
    id: "e3a-qp-meca-02",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "Pour un satellite en orbite circulaire de rayon \\(r\\) autour d'un corps de masse \\(M\\), la vitesse orbitale vaut :",
    choices: [
      "\\(v = \\sqrt{\\dfrac{GM}{r}}\\)",
      "\\(v = \\sqrt{\\dfrac{GM}{r^2}}\\)",
      "\\(v = \\dfrac{GM}{r}\\)",
      "\\(v = \\sqrt{\\dfrac{2GM}{r}}\\)"
    ],
    correct: 0,
    explanation: "En égalisant la force gravitationnelle et la force centripète : \\(\\dfrac{GMm}{r^2} = \\dfrac{mv^2}{r}\\), on obtient \\(v = \\sqrt{\\dfrac{GM}{r}}\\). Attention : \\(v = \\sqrt{2GM/r}\\) est la vitesse de libération (et non la vitesse orbitale). La vitesse orbitale décroît quand le rayon de l'orbite augmente."
  },
  {
    id: "e3a-qp-meca-03",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "Le moment cinétique \\(\\vec{L}\\) d'un point matériel soumis à une force centrale est :",
    choices: [
      "Constant en norme et en direction",
      "Constant en norme mais pas en direction",
      "Variable mais de norme croissante",
      "Nul à tout instant"
    ],
    correct: 0,
    explanation: "Pour une force centrale \\(\\vec{F} = F(r)\\vec{u_r}\\), le moment de la force par rapport au centre est nul : \\(\\vec{\\mathcal{M}} = \\vec{r} \\wedge \\vec{F} = \\vec{0}\\). Donc \\(\\dfrac{d\\vec{L}}{dt} = \\vec{0}\\) et \\(\\vec{L}\\) est un vecteur constant (théorème du moment cinétique). Cela implique que le mouvement est plan (dans le plan perpendiculaire à \\(\\vec{L}\\)) et que la loi des aires s'applique."
  },
  {
    id: "e3a-qp-meca-04",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "L'énergie mécanique d'un satellite de masse \\(m\\) en orbite circulaire de rayon \\(r\\) autour d'un corps de masse \\(M\\) vaut :",
    choices: [
      "\\(E_m = -\\dfrac{GMm}{2r}\\)",
      "\\(E_m = -\\dfrac{GMm}{r}\\)",
      "\\(E_m = +\\dfrac{GMm}{2r}\\)",
      "\\(E_m = 0\\)"
    ],
    correct: 0,
    explanation: "L'énergie potentielle est \\(E_p = -\\dfrac{GMm}{r}\\) et l'énergie cinétique vaut \\(E_c = \\dfrac{1}{2}mv^2 = \\dfrac{GMm}{2r}\\) (en utilisant \\(v^2 = GM/r\\)). Donc \\(E_m = E_c + E_p = \\dfrac{GMm}{2r} - \\dfrac{GMm}{r} = -\\dfrac{GMm}{2r}\\). On a la relation \\(E_m = -E_c = E_p/2\\), qui est une conséquence du théorème du viriel pour une force en \\(1/r^2\\)."
  },
  {
    id: "e3a-qp-meca-05",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "La loi des aires (deuxième loi de Kepler) traduit la conservation :",
    choices: [
      "Du moment cinétique",
      "De l'énergie mécanique",
      "De la quantité de mouvement",
      "De l'énergie cinétique"
    ],
    correct: 0,
    explanation: "La loi des aires s'écrit \\(r^2 \\dot{\\theta} = C\\) (constante des aires). Or le moment cinétique est \\(L = mr^2 \\dot{\\theta} = mC\\). La constance de \\(C\\) traduit donc exactement la conservation du moment cinétique. Géométriquement, cela signifie que le rayon vecteur balaie des aires égales en des temps égaux."
  },
  {
    id: "e3a-qp-meca-06",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "Un solide de moment d'inertie \\(J\\) tourne autour d'un axe fixe. Son énergie cinétique de rotation est :",
    choices: [
      "\\(E_c = \\dfrac{1}{2} J \\omega^2\\)",
      "\\(E_c = J \\omega^2\\)",
      "\\(E_c = \\dfrac{1}{2} J \\omega\\)",
      "\\(E_c = J \\omega\\)"
    ],
    correct: 0,
    explanation: "Par analogie avec l'énergie cinétique de translation \\(\\frac{1}{2}mv^2\\), l'énergie cinétique de rotation est \\(E_c = \\dfrac{1}{2} J \\omega^2\\), où \\(J\\) est le moment d'inertie par rapport à l'axe de rotation et \\(\\omega\\) la vitesse angulaire. Le moment d'inertie joue le rôle de la masse et \\(\\omega\\) celui de la vitesse."
  },
  {
    id: "e3a-qp-meca-07",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "On considère l'énergie potentielle effective \\(E_{p,\\text{eff}}(r) = -\\dfrac{GMm}{r} + \\dfrac{L^2}{2mr^2}\\). La trajectoire est une ellipse si :",
    choices: [
      "\\(E_m < 0\\)",
      "\\(E_m > 0\\)",
      "\\(E_m = 0\\)",
      "\\(E_m < -\\dfrac{GMm}{2r}\\)"
    ],
    correct: 0,
    explanation: "Dans le problème de Kepler, la nature de la trajectoire dépend du signe de l'énergie mécanique. Si \\(E_m < 0\\), la trajectoire est une ellipse (ou un cercle si \\(E_m = E_{p,\\text{eff}}^{\\min}\\)). Si \\(E_m = 0\\), c'est une parabole. Si \\(E_m > 0\\), c'est une hyperbole. C'est un résultat classique du problème à deux corps en \\(1/r^2\\)."
  },
  {
    id: "e3a-qp-meca-08",
    theme: "mecanique",
    themeColor: "#4CAF50",
    question: "Le théorème du moment cinétique pour un système de points par rapport à un point fixe \\(O\\) s'écrit :",
    choices: [
      "\\(\\dfrac{d\\vec{L}_O}{dt} = \\vec{\\mathcal{M}}_O^{\\text{ext}}\\)",
      "\\(\\dfrac{d\\vec{L}_O}{dt} = \\vec{\\mathcal{M}}_O^{\\text{int}} + \\vec{\\mathcal{M}}_O^{\\text{ext}}\\)",
      "\\(\\dfrac{d\\vec{L}_O}{dt} = \\sum \\vec{F}^{\\text{ext}}\\)",
      "\\(\\vec{L}_O = \\text{constante}\\)"
    ],
    correct: 0,
    explanation: "Le théorème du moment cinétique pour un système s'écrit \\(\\dfrac{d\\vec{L}_O}{dt} = \\vec{\\mathcal{M}}_O^{\\text{ext}}\\) où seul le moment des forces extérieures intervient. Les moments des forces intérieures se compensent deux à deux (par la troisième loi de Newton, les forces intérieures sont portées par la droite joignant les deux points). Si le moment extérieur est nul, \\(\\vec{L}_O\\) est conservé."
  },

  // ═══════════════════════════════════════════════
  //  THERMODYNAMIQUE (6 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-qp-thermo-01",
    theme: "thermo",
    themeColor: "#FF9800",
    question: "Le rendement d'un cycle de Carnot fonctionnant entre une source chaude à \\(T_c\\) et une source froide à \\(T_f\\) est :",
    choices: [
      "\\(\\eta = 1 - \\dfrac{T_f}{T_c}\\)",
      "\\(\\eta = 1 - \\dfrac{T_c}{T_f}\\)",
      "\\(\\eta = \\dfrac{T_c - T_f}{T_f}\\)",
      "\\(\\eta = \\dfrac{T_f}{T_c}\\)"
    ],
    correct: 0,
    explanation: "Le rendement de Carnot est \\(\\eta_C = 1 - \\dfrac{T_f}{T_c}\\) où les températures sont en Kelvin. C'est le rendement maximal théorique pour un moteur ditherme. Il est atteint uniquement pour un cycle réversible. Plus l'écart de température est grand, meilleur est le rendement. Aucun moteur réel ne peut dépasser ce rendement (second principe)."
  },
  {
    id: "e3a-qp-thermo-02",
    theme: "thermo",
    themeColor: "#FF9800",
    question: "Pour un gaz parfait, lors d'une détente isotherme réversible de \\(V_1\\) à \\(V_2 > V_1\\), le travail reçu par le gaz vaut :",
    choices: [
      "\\(W = -nRT \\ln\\left(\\dfrac{V_2}{V_1}\\right)\\)",
      "\\(W = nRT \\ln\\left(\\dfrac{V_2}{V_1}\\right)\\)",
      "\\(W = -nRT \\left(\\dfrac{V_2}{V_1} - 1\\right)\\)",
      "\\(W = nR(T_2 - T_1)\\)"
    ],
    correct: 0,
    explanation: "Pour une transformation quasi-statique réversible, \\(W = -\\int_{V_1}^{V_2} P \\, dV = -\\int_{V_1}^{V_2} \\dfrac{nRT}{V} dV = -nRT \\ln\\left(\\dfrac{V_2}{V_1}\\right)\\). Comme \\(V_2 > V_1\\), on a \\(W < 0\\) : le gaz fournit du travail lors d'une détente. Pour l'isotherme d'un GP, \\(\\Delta U = 0\\), donc \\(Q = -W > 0\\)."
  },
  {
    id: "e3a-qp-thermo-03",
    theme: "thermo",
    themeColor: "#FF9800",
    question: "La variation d'entropie d'un gaz parfait entre deux états \\((T_1, V_1)\\) et \\((T_2, V_2)\\) est :",
    choices: [
      "\\(\\Delta S = nC_v \\ln\\dfrac{T_2}{T_1} + nR \\ln\\dfrac{V_2}{V_1}\\)",
      "\\(\\Delta S = nC_p \\ln\\dfrac{T_2}{T_1} + nR \\ln\\dfrac{V_2}{V_1}\\)",
      "\\(\\Delta S = nC_v \\ln\\dfrac{T_2}{T_1} - nR \\ln\\dfrac{V_2}{V_1}\\)",
      "\\(\\Delta S = nR \\ln\\dfrac{V_2}{V_1}\\)"
    ],
    correct: 0,
    explanation: "Pour un gaz parfait, \\(dS = \\dfrac{nC_v \\, dT}{T} + \\dfrac{nR \\, dV}{V}\\) (en utilisant \\(dU = nC_v dT\\) et \\(PV = nRT\\)). Par intégration : \\(\\Delta S = nC_v \\ln\\dfrac{T_2}{T_1} + nR \\ln\\dfrac{V_2}{V_1}\\). On peut aussi exprimer \\(\\Delta S\\) en fonction de \\((T,P)\\) : \\(\\Delta S = nC_p \\ln\\dfrac{T_2}{T_1} - nR \\ln\\dfrac{P_2}{P_1}\\). L'entropie est une fonction d'état."
  },
  {
    id: "e3a-qp-thermo-04",
    theme: "thermo",
    themeColor: "#FF9800",
    question: "Pour une transformation adiabatique réversible d'un gaz parfait de coefficient \\(\\gamma\\), on a :",
    choices: [
      "\\(TV^{\\gamma - 1} = \\text{constante}\\)",
      "\\(TV^{\\gamma} = \\text{constante}\\)",
      "\\(PV = \\text{constante}\\)",
      "\\(T^{\\gamma} V = \\text{constante}\\)"
    ],
    correct: 0,
    explanation: "Pour une isentropique (adiabatique réversible) d'un GP, les lois de Laplace donnent : \\(PV^\\gamma = \\text{cte}\\), \\(TV^{\\gamma-1} = \\text{cte}\\), \\(TP^{-\\frac{\\gamma-1}{\\gamma}} = \\text{cte}\\). La relation \\(TV^{\\gamma-1} = \\text{cte}\\) se déduit de \\(PV^\\gamma = \\text{cte}\\) en remplaçant \\(P\\) par \\(nRT/V\\)."
  },
  {
    id: "e3a-qp-thermo-05",
    theme: "thermo",
    themeColor: "#FF9800",
    question: "Le second principe de la thermodynamique impose pour toute transformation :",
    choices: [
      "\\(\\Delta S_{\\text{créée}} \\geq 0\\)",
      "\\(\\Delta S \\geq 0\\)",
      "\\(\\Delta S_{\\text{échangée}} \\geq 0\\)",
      "\\(\\Delta U \\geq Q\\)"
    ],
    correct: 0,
    explanation: "Le second principe s'écrit \\(\\Delta S = \\Delta S_{\\text{échangée}} + \\Delta S_{\\text{créée}}\\) avec \\(\\Delta S_{\\text{créée}} \\geq 0\\). L'entropie créée est nulle pour une transformation réversible et strictement positive pour une transformation irréversible. Attention : l'entropie totale du système peut diminuer (si \\(\\Delta S_{\\text{éch}} < 0\\)), c'est l'entropie créée qui ne peut être que positive."
  },
  {
    id: "e3a-qp-thermo-06",
    theme: "thermo",
    themeColor: "#FF9800",
    question: "On met en contact thermique deux corps de même capacité calorifique \\(C\\) à des températures initiales \\(T_1\\) et \\(T_2\\) (\\(T_1 > T_2\\)). La température d'équilibre est :",
    choices: [
      "\\(T_f = \\dfrac{T_1 + T_2}{2}\\)",
      "\\(T_f = \\sqrt{T_1 T_2}\\)",
      "\\(T_f = \\dfrac{2T_1 T_2}{T_1 + T_2}\\)",
      "\\(T_f = T_1 - T_2\\)"
    ],
    correct: 0,
    explanation: "En l'absence de travail et d'échange avec l'extérieur, le premier principe donne \\(C(T_f - T_1) + C(T_f - T_2) = 0\\), d'où \\(T_f = \\dfrac{T_1 + T_2}{2}\\) (moyenne arithmétique). L'entropie créée vaut \\(\\Delta S_{\\text{créée}} = C \\ln\\dfrac{T_f^2}{T_1 T_2} > 0\\) car la moyenne arithmétique est supérieure à la moyenne géométrique. La transformation est irréversible."
  },

  // ═══════════════════════════════════════════════
  //  ONDES / OSCILLATEURS / CIRCUITS (6 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-qp-ondes-01",
    theme: "ondes",
    themeColor: "#9C27B0",
    question: "La pulsation propre d'un circuit RLC série est :",
    choices: [
      "\\(\\omega_0 = \\dfrac{1}{\\sqrt{LC}}\\)",
      "\\(\\omega_0 = \\sqrt{\\dfrac{L}{C}}\\)",
      "\\(\\omega_0 = \\dfrac{1}{LC}\\)",
      "\\(\\omega_0 = \\dfrac{R}{2L}\\)"
    ],
    correct: 0,
    explanation: "La pulsation propre du circuit RLC série est \\(\\omega_0 = \\dfrac{1}{\\sqrt{LC}}\\). Elle correspond à la fréquence naturelle d'oscillation du circuit en l'absence d'amortissement (\\(R = 0\\)). Le facteur de qualité est \\(Q = \\dfrac{L\\omega_0}{R} = \\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}\\). La grandeur \\(R/(2L)\\) est le coefficient d'amortissement."
  },
  {
    id: "e3a-qp-ondes-02",
    theme: "ondes",
    themeColor: "#9C27B0",
    question: "Le facteur de qualité \\(Q\\) d'un circuit RLC série est :",
    choices: [
      "\\(Q = \\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}\\)",
      "\\(Q = R\\sqrt{\\dfrac{L}{C}}\\)",
      "\\(Q = \\dfrac{R}{L\\omega_0}\\)",
      "\\(Q = RC\\omega_0\\)"
    ],
    correct: 0,
    explanation: "Le facteur de qualité d'un RLC série est \\(Q = \\dfrac{L\\omega_0}{R} = \\dfrac{1}{R\\omega_0 C} = \\dfrac{1}{R}\\sqrt{\\dfrac{L}{C}}\\). Il caractérise l'acuité de la résonance : plus \\(Q\\) est grand, plus la résonance est pointue. La largeur de la bande passante à \\(-3\\) dB est \\(\\Delta \\omega = \\omega_0/Q\\). Pour un RLC parallèle, \\(Q = R\\sqrt{C/L}\\)."
  },
  {
    id: "e3a-qp-ondes-03",
    theme: "ondes",
    themeColor: "#9C27B0",
    question: "La célérité d'une onde sur une corde de masse linéique \\(\\mu\\) tendue avec une tension \\(T\\) est :",
    choices: [
      "\\(v = \\sqrt{\\dfrac{T}{\\mu}}\\)",
      "\\(v = \\sqrt{T \\mu}\\)",
      "\\(v = \\dfrac{T}{\\mu}\\)",
      "\\(v = \\dfrac{\\mu}{T}\\)"
    ],
    correct: 0,
    explanation: "La célérité de l'onde transversale sur une corde est \\(v = \\sqrt{\\dfrac{T}{\\mu}}\\) où \\(T\\) est la tension de la corde et \\(\\mu\\) sa masse linéique. On peut retrouver cette formule par analyse dimensionnelle : \\([T] = \\text{kg} \\cdot \\text{m} \\cdot \\text{s}^{-2}\\) et \\([\\mu] = \\text{kg} \\cdot \\text{m}^{-1}\\), donc \\([T/\\mu] = \\text{m}^2 \\cdot \\text{s}^{-2}\\)."
  },
  {
    id: "e3a-qp-ondes-04",
    theme: "ondes",
    themeColor: "#9C27B0",
    question: "L'impédance complexe d'un condensateur de capacité \\(C\\) en régime sinusoïdal forcé de pulsation \\(\\omega\\) est :",
    choices: [
      "\\(\\underline{Z}_C = \\dfrac{1}{jC\\omega}\\)",
      "\\(\\underline{Z}_C = jC\\omega\\)",
      "\\(\\underline{Z}_C = \\dfrac{j}{C\\omega}\\)",
      "\\(\\underline{Z}_C = -jC\\omega\\)"
    ],
    correct: 0,
    explanation: "En notation complexe avec la convention \\(e^{j\\omega t}\\), l'impédance du condensateur est \\(\\underline{Z}_C = \\dfrac{1}{jC\\omega}\\). La tension est en retard de \\(\\pi/2\\) sur le courant (le condensateur est en avance de phase). Pour une bobine : \\(\\underline{Z}_L = jL\\omega\\). Pour une résistance : \\(\\underline{Z}_R = R\\)."
  },
  {
    id: "e3a-qp-ondes-05",
    theme: "ondes",
    themeColor: "#9C27B0",
    question: "Pour une corde fixée à ses deux extrémités, les fréquences propres de vibration sont :",
    choices: [
      "\\(f_n = n \\dfrac{v}{2L}\\) avec \\(n \\in \\mathbb{N}^*\\)",
      "\\(f_n = n \\dfrac{v}{L}\\) avec \\(n \\in \\mathbb{N}^*\\)",
      "\\(f_n = (2n+1) \\dfrac{v}{4L}\\) avec \\(n \\in \\mathbb{N}\\)",
      "\\(f_n = n \\dfrac{v}{4L}\\) avec \\(n \\in \\mathbb{N}^*\\)"
    ],
    correct: 0,
    explanation: "Pour une corde de longueur \\(L\\) fixée aux deux bouts, il faut un nombre entier de demi-longueurs d'onde : \\(L = n \\dfrac{\\lambda_n}{2}\\), d'où \\(\\lambda_n = \\dfrac{2L}{n}\\) et \\(f_n = \\dfrac{v}{\\lambda_n} = n \\dfrac{v}{2L}\\). La fréquence fondamentale est \\(f_1 = v/(2L)\\) et les harmoniques sont des multiples entiers de \\(f_1\\)."
  },
  {
    id: "e3a-qp-ondes-06",
    theme: "ondes",
    themeColor: "#9C27B0",
    question: "On considère un oscillateur harmonique amorti de pulsation propre \\(\\omega_0\\) et de facteur de qualité \\(Q\\). Le régime est pseudo-périodique si :",
    choices: [
      "\\(Q > \\dfrac{1}{2}\\)",
      "\\(Q > 1\\)",
      "\\(Q < \\dfrac{1}{2}\\)",
      "\\(Q = 1\\)"
    ],
    correct: 0,
    explanation: "L'équation \\(\\ddot{x} + \\dfrac{\\omega_0}{Q}\\dot{x} + \\omega_0^2 x = 0\\) a un discriminant \\(\\Delta = \\omega_0^2\\left(\\dfrac{1}{Q^2} - 4\\right)\\). Le régime est pseudo-périodique (oscillations amorties) si \\(\\Delta < 0\\), soit \\(Q > 1/2\\). Pour \\(Q = 1/2\\), le régime est critique. Pour \\(Q < 1/2\\), le régime est apériodique (suramorti)."
  },

  // ═══════════════════════════════════════════════
  //  OPTIQUE (4 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-qp-opt-01",
    theme: "optique",
    themeColor: "#00BCD4",
    question: "La condition d'interférences constructives pour deux ondes de même longueur d'onde \\(\\lambda\\) est :",
    choices: [
      "\\(\\delta = p\\lambda\\) avec \\(p \\in \\mathbb{Z}\\)",
      "\\(\\delta = (2p+1)\\dfrac{\\lambda}{2}\\) avec \\(p \\in \\mathbb{Z}\\)",
      "\\(\\delta = p\\dfrac{\\lambda}{2}\\) avec \\(p \\in \\mathbb{Z}\\)",
      "\\(\\delta = (2p+1)\\lambda\\) avec \\(p \\in \\mathbb{Z}\\)"
    ],
    correct: 0,
    explanation: "Les interférences sont constructives lorsque la différence de marche \\(\\delta\\) est un multiple entier de la longueur d'onde : \\(\\delta = p\\lambda\\), \\(p \\in \\mathbb{Z}\\). Les ondes arrivent en phase et leurs amplitudes s'additionnent. Les interférences destructives correspondent à \\(\\delta = (2p+1)\\lambda/2\\) (opposition de phase)."
  },
  {
    id: "e3a-qp-opt-02",
    theme: "optique",
    themeColor: "#00BCD4",
    question: "La relation de conjugaison d'une lentille mince de distance focale \\(f'\\) (avec origine au centre optique) est :",
    choices: [
      "\\(\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}\\)",
      "\\(\\dfrac{1}{\\overline{OA'}} + \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}\\)",
      "\\(\\overline{OA'} - \\overline{OA} = f'\\)",
      "\\(\\dfrac{\\overline{OA'}}{\\overline{OA}} = \\dfrac{1}{f'}\\)"
    ],
    correct: 0,
    explanation: "La relation de conjugaison de Descartes pour une lentille mince est \\(\\dfrac{1}{\\overline{OA'}} - \\dfrac{1}{\\overline{OA}} = \\dfrac{1}{f'}\\). Toutes les grandeurs sont algébriques, orientées dans le sens de propagation de la lumière. Pour une lentille convergente, \\(f' > 0\\). Le grandissement transversal est \\(\\gamma = \\dfrac{\\overline{OA'}}{\\overline{OA}}\\)."
  },
  {
    id: "e3a-qp-opt-03",
    theme: "optique",
    themeColor: "#00BCD4",
    question: "Dans l'expérience des fentes d'Young séparées de \\(a\\), à la distance \\(D\\) de l'écran, l'interfrange vaut :",
    choices: [
      "\\(i = \\dfrac{\\lambda D}{a}\\)",
      "\\(i = \\dfrac{a D}{\\lambda}\\)",
      "\\(i = \\dfrac{\\lambda a}{D}\\)",
      "\\(i = \\dfrac{\\lambda}{aD}\\)"
    ],
    correct: 0,
    explanation: "L'interfrange des fentes d'Young est \\(i = \\dfrac{\\lambda D}{a}\\) où \\(\\lambda\\) est la longueur d'onde, \\(D\\) la distance fentes-écran et \\(a\\) la distance entre les fentes. Plus les fentes sont proches (\\(a\\) petit) ou l'écran éloigné (\\(D\\) grand), plus les franges sont espacées. C'est un résultat fondamental de l'optique ondulatoire."
  },
  {
    id: "e3a-qp-opt-04",
    theme: "optique",
    themeColor: "#00BCD4",
    question: "Le critère de Rayleigh pour la résolution angulaire d'une ouverture circulaire de diamètre \\(D\\) donne un angle limite :",
    choices: [
      "\\(\\theta_{\\min} \\approx 1{,}22 \\dfrac{\\lambda}{D}\\)",
      "\\(\\theta_{\\min} \\approx \\dfrac{\\lambda}{D}\\)",
      "\\(\\theta_{\\min} \\approx \\dfrac{\\lambda}{2D}\\)",
      "\\(\\theta_{\\min} \\approx 2{,}44 \\dfrac{\\lambda}{D}\\)"
    ],
    correct: 0,
    explanation: "Le critère de Rayleigh stipule que deux sources sont résolues si le maximum central de diffraction de l'une coïncide avec le premier minimum de l'autre. Pour une ouverture circulaire, cela donne \\(\\theta_{\\min} \\approx 1{,}22 \\dfrac{\\lambda}{D}\\). Le facteur 1,22 provient du premier zéro de la fonction de Bessel \\(J_1\\). Pour une fente rectangulaire, on a simplement \\(\\theta_{\\min} = \\lambda/a\\)."
  },

  // ═══════════════════════════════════════════════
  //  CHIMIE (8 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-qp-chim-01",
    theme: "chimie",
    themeColor: "#F44336",
    question: "La compacité d'une structure cubique à faces centrées (CFC) est :",
    choices: [
      "\\(C = \\dfrac{\\pi\\sqrt{2}}{6} \\approx 0{,}74\\)",
      "\\(C = \\dfrac{\\pi\\sqrt{3}}{8} \\approx 0{,}68\\)",
      "\\(C = \\dfrac{\\pi}{6} \\approx 0{,}52\\)",
      "\\(C = \\dfrac{\\pi}{4} \\approx 0{,}79\\)"
    ],
    correct: 0,
    explanation: "En CFC, la maille contient 4 atomes (8 sommets partagés par 8 mailles + 6 faces partagées par 2 mailles : \\(8 \\times 1/8 + 6 \\times 1/2 = 4\\)). La relation de tangence est \\(a\\sqrt{2} = 4r\\). Le volume des atomes est \\(4 \\times \\dfrac{4}{3}\\pi r^3\\) dans un cube de côté \\(a = 2r\\sqrt{2}\\). D'où \\(C = \\dfrac{\\pi\\sqrt{2}}{6} \\approx 0{,}74\\). C'est un empilement compact maximal."
  },
  {
    id: "e3a-qp-chim-02",
    theme: "chimie",
    themeColor: "#F44336",
    question: "La loi de Nernst pour un couple rédox \\(\\text{Ox}/\\text{Red}\\) s'écrit :",
    choices: [
      "\\(E = E^\\circ + \\dfrac{RT}{nF} \\ln\\dfrac{a_{\\text{Ox}}}{a_{\\text{Red}}}\\)",
      "\\(E = E^\\circ - \\dfrac{RT}{nF} \\ln\\dfrac{a_{\\text{Ox}}}{a_{\\text{Red}}}\\)",
      "\\(E = E^\\circ + \\dfrac{nF}{RT} \\ln\\dfrac{a_{\\text{Ox}}}{a_{\\text{Red}}}\\)",
      "\\(E = E^\\circ + \\dfrac{RT}{F} \\ln\\dfrac{a_{\\text{Ox}}}{a_{\\text{Red}}}\\)"
    ],
    correct: 0,
    explanation: "La loi de Nernst est \\(E = E^\\circ + \\dfrac{RT}{nF} \\ln\\dfrac{a_{\\text{Ox}}}{a_{\\text{Red}}}\\) où \\(n\\) est le nombre d'électrons échangés, \\(F = 96485\\) C/mol la constante de Faraday. À 25 °C, \\(\\dfrac{RT}{F} \\approx 0{,}026\\) V, d'où la formule simplifiée \\(E = E^\\circ + \\dfrac{0{,}06}{n} \\log\\dfrac{[\\text{Ox}]}{[\\text{Red}]}\\)."
  },
  {
    id: "e3a-qp-chim-03",
    theme: "chimie",
    themeColor: "#F44336",
    question: "La loi d'Arrhenius donne la constante de vitesse \\(k\\) en fonction de la température :",
    choices: [
      "\\(k = A \\exp\\left(-\\dfrac{E_a}{RT}\\right)\\)",
      "\\(k = A \\exp\\left(\\dfrac{E_a}{RT}\\right)\\)",
      "\\(k = A \\exp\\left(-\\dfrac{RT}{E_a}\\right)\\)",
      "\\(k = A \\left(1 - \\dfrac{E_a}{RT}\\right)\\)"
    ],
    correct: 0,
    explanation: "La loi d'Arrhenius est \\(k = A \\exp\\left(-\\dfrac{E_a}{RT}\\right)\\) où \\(A\\) est le facteur pré-exponentiel (ou facteur de fréquence) et \\(E_a\\) l'énergie d'activation. La constante de vitesse augmente avec la température. En traçant \\(\\ln k\\) en fonction de \\(1/T\\), on obtient une droite de pente \\(-E_a/R\\), ce qui permet de déterminer \\(E_a\\) expérimentalement."
  },
  {
    id: "e3a-qp-chim-04",
    theme: "chimie",
    themeColor: "#F44336",
    question: "Dans une structure CFC, le nombre de sites octaédriques par maille est :",
    choices: [
      "4",
      "8",
      "2",
      "1"
    ],
    correct: 0,
    explanation: "Dans une maille CFC, il y a 4 sites octaédriques : 1 au centre de la maille + 12 au milieu des arêtes (chacun partagé par 4 mailles), soit \\(1 + 12 \\times 1/4 = 4\\). Il y a autant de sites octaédriques que d'atomes dans la maille. Les sites tétraédriques sont au nombre de 8 (au centre des 8 petits cubes). Le rapport sites octaédriques / atomes = 1."
  },
  {
    id: "e3a-qp-chim-05",
    theme: "chimie",
    themeColor: "#F44336",
    question: "Pour une réaction d'ordre 1, \\(A \\rightarrow \\text{produits}\\), la concentration en \\(A\\) évolue selon :",
    choices: [
      "\\([A](t) = [A]_0 \\, e^{-kt}\\)",
      "\\([A](t) = [A]_0 - kt\\)",
      "\\(\\dfrac{1}{[A](t)} = \\dfrac{1}{[A]_0} + kt\\)",
      "\\([A](t) = \\dfrac{[A]_0}{1 + k[A]_0 t}\\)"
    ],
    correct: 0,
    explanation: "Pour un ordre 1, la loi de vitesse est \\(\\dfrac{d[A]}{dt} = -k[A]\\), ce qui donne par intégration \\([A](t) = [A]_0 \\, e^{-kt}\\). La décroissance est exponentielle. Le temps de demi-réaction est \\(t_{1/2} = \\dfrac{\\ln 2}{k}\\), indépendant de la concentration initiale. La réponse B correspond à l'ordre 0, la C à l'ordre 2 et la D aussi à l'ordre 2."
  },
  {
    id: "e3a-qp-chim-06",
    theme: "chimie",
    themeColor: "#F44336",
    question: "La coordinence d'un ion dans un site octaédrique est :",
    choices: [
      "6",
      "4",
      "8",
      "12"
    ],
    correct: 0,
    explanation: "Un site octaédrique est entouré de 6 voisins disposés aux sommets d'un octaèdre régulier, donc la coordinence est 6. Pour un site tétraédrique, la coordinence est 4. Par exemple, dans NaCl (structure type), Na\\(^+\\) occupe les sites octaédriques du réseau CFC de Cl\\(^-\\) et a donc 6 voisins Cl\\(^-\\)."
  },
  {
    id: "e3a-qp-chim-07",
    theme: "chimie",
    themeColor: "#F44336",
    question: "La relation entre le potentiel standard \\(E^\\circ\\) et la constante d'équilibre \\(K\\) d'une réaction rédox est :",
    choices: [
      "\\(\\ln K = \\dfrac{nFE^\\circ}{RT}\\)",
      "\\(\\ln K = -\\dfrac{nFE^\\circ}{RT}\\)",
      "\\(\\ln K = \\dfrac{FE^\\circ}{nRT}\\)",
      "\\(K = nFE^\\circ\\)"
    ],
    correct: 0,
    explanation: "À l'équilibre, \\(\\Delta_r G^\\circ = -nFE^\\circ = -RT \\ln K\\), d'où \\(\\ln K = \\dfrac{nFE^\\circ}{RT}\\). Si \\(E^\\circ > 0\\), alors \\(K > 1\\) et la réaction est thermodynamiquement favorable dans le sens direct. À 25 °C, cela donne \\(\\log K = \\dfrac{nE^\\circ}{0{,}06}\\). Cette relation est fondamentale pour prévoir le sens d'évolution spontanée d'une pile."
  },
  {
    id: "e3a-qp-chim-08",
    theme: "chimie",
    themeColor: "#F44336",
    question: "La compacité d'une structure cubique centrée (CC) est :",
    choices: [
      "\\(C = \\dfrac{\\pi\\sqrt{3}}{8} \\approx 0{,}68\\)",
      "\\(C = \\dfrac{\\pi\\sqrt{2}}{6} \\approx 0{,}74\\)",
      "\\(C = \\dfrac{\\pi}{6} \\approx 0{,}52\\)",
      "\\(C = \\dfrac{\\pi}{3\\sqrt{2}} \\approx 0{,}74\\)"
    ],
    correct: 0,
    explanation: "En CC (cubique centrée), la maille contient 2 atomes (8 sommets partagés par 8 + 1 centre : \\(8 \\times 1/8 + 1 = 2\\)). La tangence est selon la grande diagonale du cube : \\(a\\sqrt{3} = 4r\\). Le volume des atomes est \\(2 \\times \\dfrac{4}{3}\\pi r^3\\) dans un cube de côté \\(a = 4r/\\sqrt{3}\\). D'où \\(C = \\dfrac{\\pi\\sqrt{3}}{8} \\approx 0{,}68\\). C'est moins compact que CFC/HC (0,74)."
  }

];
