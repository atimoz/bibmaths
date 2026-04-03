// E3A-Polytech Flashcards — 60 cartes
// Thèmes : Réduction, Séries entières, Intégrales, Probabilités, Espaces euclidiens, Calcul différentiel, Bonus classiques

var E3A_FLASHCARDS = [

  // ═══════════════════════════════════════
  // RÉDUCTION (12 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-red-01",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Définir valeur propre et vecteur propre d'un endomorphisme \\(f \\in \\mathcal{L}(E)\\).",
    a: "Un scalaire \\(\\lambda \\in \\mathbb{K}\\) est une <b>valeur propre</b> de \\(f\\) s'il existe \\(v \\neq 0_E\\) tel que \\(f(v) = \\lambda v\\). Ce vecteur \\(v\\) est un <b>vecteur propre</b> associé à \\(\\lambda\\). Le <b>sous-espace propre</b> est \\(E_\\lambda = \\ker(f - \\lambda\\,\\mathrm{Id})\\).",
    hint: "Valeur propre"
  },
  {
    id: "e3a-red-02",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Qu'est-ce que le polynôme caractéristique d'une matrice \\(A \\in \\mathcal{M}_n(\\mathbb{K})\\) ?",
    a: "Le polynôme caractéristique de \\(A\\) est : $$\\chi_A(\\lambda) = \\det(A - \\lambda I_n)$$ C'est un polynôme de degré \\(n\\) en \\(\\lambda\\), unitaire à un signe près : \\(\\chi_A(\\lambda) = (-1)^n(\\lambda^n - \\mathrm{tr}(A)\\,\\lambda^{n-1} + \\cdots + (-1)^n \\det(A))\\). Les valeurs propres de \\(A\\) sont les racines de \\(\\chi_A\\).",
    hint: "Polynôme caractéristique"
  },
  {
    id: "e3a-red-03",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Qu'est-ce que le polynôme minimal d'une matrice \\(A\\) ?",
    a: "Le <b>polynôme minimal</b> \\(\\mu_A\\) est le polynôme unitaire de plus petit degré tel que \\(\\mu_A(A) = 0\\). Il divise tout polynôme annulateur de \\(A\\), et en particulier il divise \\(\\chi_A\\). De plus, \\(\\mu_A\\) et \\(\\chi_A\\) ont les mêmes racines (mêmes valeurs propres).",
    hint: "Polynôme minimal"
  },
  {
    id: "e3a-red-04",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Énoncer le théorème de Cayley-Hamilton.",
    a: "Toute matrice \\(A \\in \\mathcal{M}_n(\\mathbb{K})\\) annule son propre polynôme caractéristique : $$\\chi_A(A) = 0$$ Autrement dit, \\(\\chi_A\\) est un polynôme annulateur de \\(A\\). Le polynôme minimal \\(\\mu_A\\) divise donc \\(\\chi_A\\).",
    hint: "Cayley-Hamilton"
  },
  {
    id: "e3a-red-05",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Donner une CNS de diagonalisabilité faisant intervenir le polynôme caractéristique.",
    a: "Une matrice \\(A \\in \\mathcal{M}_n(\\mathbb{K})\\) est diagonalisable si et seulement si :\\n1. \\(\\chi_A\\) est <b>scindé</b> sur \\(\\mathbb{K}\\), et\\n2. Pour chaque valeur propre \\(\\lambda\\), la <b>multiplicité géométrique</b> \\(\\dim(E_\\lambda)\\) égale la <b>multiplicité algébrique</b> (ordre de \\(\\lambda\\) comme racine de \\(\\chi_A\\)).\\n\\nÉquivalemment : \\(A\\) est diagonalisable ssi \\(\\mu_A\\) est scindé à racines simples.",
    hint: "CNS diagonalisabilité"
  },
  {
    id: "e3a-red-06",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Énoncer le théorème spectral pour les matrices symétriques réelles.",
    a: "Soit \\(A \\in \\mathcal{S}_n(\\mathbb{R})\\) (matrice symétrique réelle). Alors :\\n1. Toutes les valeurs propres de \\(A\\) sont <b>réelles</b>.\\n2. \\(A\\) est <b>diagonalisable dans une base orthonormée</b> : il existe \\(P \\in \\mathcal{O}_n(\\mathbb{R})\\) (orthogonale) et \\(D\\) diagonale telles que \\(A = PDP^T\\).\\n3. Les sous-espaces propres sont deux à deux orthogonaux.",
    hint: "Théorème spectral"
  },
  {
    id: "e3a-red-07",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Qu'est-ce qu'un polynôme annulateur ? Quel lien avec la diagonalisabilité ?",
    a: "Un polynôme \\(P \\in \\mathbb{K}[X]\\) est <b>annulateur</b> de \\(A\\) si \\(P(A) = 0\\). Le polynôme minimal divise tout annulateur.\\n\\n<b>Lien</b> : \\(A\\) est diagonalisable si et seulement s'il existe un polynôme annulateur <b>scindé à racines simples</b>. En particulier, si \\(A^2 = A\\) (projection) ou \\(A^2 = I\\) (involution), alors \\(A\\) est diagonalisable.",
    hint: "Polynôme annulateur"
  },
  {
    id: "e3a-red-08",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Comment calculer \\(A^n\\) si on connaît un polynôme annulateur de degré \\(d\\) ?",
    a: "On effectue la <b>division euclidienne</b> de \\(X^n\\) par le polynôme annulateur \\(P\\) : $$X^n = Q(X) \\cdot P(X) + R(X), \\quad \\deg(R) < d$$ Comme \\(P(A) = 0\\), on obtient \\(A^n = R(A)\\). Il reste à déterminer les coefficients de \\(R\\) en évaluant aux racines de \\(P\\).",
    hint: "Calcul A^n"
  },
  {
    id: "e3a-red-09",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Énoncer le lemme des noyaux.",
    a: "Soient \\(P_1, \\ldots, P_r \\in \\mathbb{K}[X]\\) des polynômes deux à deux premiers entre eux, et \\(P = P_1 \\cdots P_r\\). Si \\(f \\in \\mathcal{L}(E)\\), alors : $$\\ker(P(f)) = \\ker(P_1(f)) \\oplus \\ker(P_2(f)) \\oplus \\cdots \\oplus \\ker(P_r(f))$$ C'est la clé pour décomposer \\(E\\) en sous-espaces stables.",
    hint: "Lemme des noyaux"
  },
  {
    id: "e3a-red-10",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Qu'est-ce qu'une matrice de projection ? Quel est son spectre ?",
    a: "Une matrice \\(P\\) est un <b>projecteur</b> si \\(P^2 = P\\). Son polynôme annulateur divise \\(X^2 - X = X(X - 1)\\), qui est scindé à racines simples, donc \\(P\\) est diagonalisable. Son spectre est \\(\\mathrm{Sp}(P) \\subset \\{0, 1\\}\\). On a \\(E = \\ker(P) \\oplus \\mathrm{Im}(P)\\) et \\(\\mathrm{tr}(P) = \\mathrm{rg}(P)\\).",
    hint: "Matrice projection"
  },
  {
    id: "e3a-red-11",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Définir l'exponentielle d'une matrice. Comment la calculer si \\(A\\) est diagonalisable ?",
    a: "L'exponentielle de matrice est définie par : $$e^A = \\sum_{k=0}^{+\\infty} \\frac{A^k}{k!}$$ Si \\(A = PDP^{-1}\\) avec \\(D = \\mathrm{diag}(\\lambda_1, \\ldots, \\lambda_n)\\), alors : $$e^A = P \\, \\mathrm{diag}(e^{\\lambda_1}, \\ldots, e^{\\lambda_n}) \\, P^{-1}$$",
    hint: "Exponentielle matrice"
  },
  {
    id: "e3a-red-12",
    theme: "Réduction",
    themeColor: "#E91E63",
    q: "Quel est le lien entre sous-espaces propres et sous-espaces caractéristiques ?",
    a: "Pour une valeur propre \\(\\lambda\\) de multiplicité algébrique \\(m_\\lambda\\) :\\n- Le <b>sous-espace propre</b> est \\(E_\\lambda = \\ker(f - \\lambda\\,\\mathrm{Id})\\).\\n- Le <b>sous-espace caractéristique</b> est \\(F_\\lambda = \\ker((f - \\lambda\\,\\mathrm{Id})^{m_\\lambda})\\).\\n\\nOn a toujours \\(E_\\lambda \\subset F_\\lambda\\) et \\(\\dim(F_\\lambda) = m_\\lambda\\). La matrice est diagonalisable ssi \\(E_\\lambda = F_\\lambda\\) pour toute valeur propre.",
    hint: "Sous-espaces caractéristiques"
  },

  // ═══════════════════════════════════════
  // SÉRIES ENTIÈRES (10 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-se-01",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Définir le rayon de convergence d'une série entière \\(\\sum a_n x^n\\).",
    a: "Le <b>rayon de convergence</b> \\(R\\) est défini par : $$R = \\sup\\{r \\geqslant 0 \\mid (a_n r^n) \\text{ est bornée}\\}$$ Pour \\(|x| < R\\), la série converge absolument. Pour \\(|x| > R\\), la série diverge grossièrement. Le comportement en \\(|x| = R\\) doit être étudié au cas par cas.",
    hint: "Rayon convergence"
  },
  {
    id: "e3a-se-02",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Énoncer la règle de d'Alembert pour le rayon de convergence.",
    a: "Si la limite existe : $$R = \\lim_{n \\to +\\infty} \\left|\\frac{a_n}{a_{n+1}}\\right|$$ avec la convention \\(R = +\\infty\\) si \\(a_{n+1} = 0\\) à partir d'un certain rang. Attention : la limite doit exister (sinon utiliser Hadamard).",
    hint: "Règle d'Alembert"
  },
  {
    id: "e3a-se-03",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Énoncer le critère de Hadamard pour le rayon de convergence.",
    a: "Le rayon de convergence de \\(\\sum a_n x^n\\) est donné par : $$\\frac{1}{R} = \\limsup_{n \\to +\\infty} |a_n|^{1/n}$$ avec les conventions \\(1/0 = +\\infty\\) et \\(1/+\\infty = 0\\). Ce critère est toujours applicable (contrairement à d'Alembert).",
    hint: "Hadamard"
  },
  {
    id: "e3a-se-04",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Donner le DSE de \\(e^x\\) et son domaine de validité.",
    a: "$$e^x = \\sum_{n=0}^{+\\infty} \\frac{x^n}{n!} = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$ Rayon de convergence \\(R = +\\infty\\). Valable pour tout \\(x \\in \\mathbb{R}\\) (et même \\(z \\in \\mathbb{C}\\)).",
    hint: "DSE exp"
  },
  {
    id: "e3a-se-05",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Donner le DSE de \\(\\ln(1+x)\\) et son domaine de validité.",
    a: "$$\\ln(1+x) = \\sum_{n=1}^{+\\infty} \\frac{(-1)^{n+1}}{n}\\, x^n = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots$$ Rayon de convergence \\(R = 1\\). Valable pour \\(x \\in ]-1, 1]\\) (converge aussi en \\(x = 1\\) par le théorème d'Abel).",
    hint: "DSE ln(1+x)"
  },
  {
    id: "e3a-se-06",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Donner le DSE de \\(\\displaystyle\\frac{1}{1-x}\\) et son domaine de validité.",
    a: "$$\\frac{1}{1-x} = \\sum_{n=0}^{+\\infty} x^n = 1 + x + x^2 + x^3 + \\cdots$$ C'est la série géométrique. Rayon de convergence \\(R = 1\\). Valable pour \\(x \\in ]-1, 1[\\).",
    hint: "DSE 1/(1-x)"
  },
  {
    id: "e3a-se-07",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Donner les DSE de \\(\\sin(x)\\) et \\(\\cos(x)\\).",
    a: "$$\\sin(x) = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{(2n+1)!}\\, x^{2n+1} = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$ $$\\cos(x) = \\sum_{n=0}^{+\\infty} \\frac{(-1)^n}{(2n)!}\\, x^{2n} = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$ Rayon \\(R = +\\infty\\) pour les deux.",
    hint: "DSE sin cos"
  },
  {
    id: "e3a-se-08",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Énoncer le théorème de dérivation terme à terme d'une série entière.",
    a: "Soit \\(f(x) = \\sum_{n=0}^{+\\infty} a_n x^n\\) de rayon \\(R > 0\\). Alors \\(f\\) est de classe \\(C^\\infty\\) sur \\(]-R, R[\\) et on peut dériver terme à terme : $$f'(x) = \\sum_{n=1}^{+\\infty} n\\, a_n\\, x^{n-1}$$ La série dérivée a le <b>même rayon de convergence</b> \\(R\\).",
    hint: "Dérivation terme à terme"
  },
  {
    id: "e3a-se-09",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Énoncer le théorème d'Abel radial.",
    a: "Si \\(\\sum a_n x^n\\) a un rayon \\(R > 0\\) et si la série \\(\\sum a_n R^n\\) converge, alors : $$\\lim_{x \\to R^-} \\sum_{n=0}^{+\\infty} a_n x^n = \\sum_{n=0}^{+\\infty} a_n R^n$$ Autrement dit, la somme de la série entière est <b>continue à gauche</b> en \\(R\\). Cela justifie par exemple que \\(\\ln 2 = \\sum_{n=1}^{+\\infty} \\frac{(-1)^{n+1}}{n}\\).",
    hint: "Abel radial"
  },
  {
    id: "e3a-se-10",
    theme: "Séries entières",
    themeColor: "#FF9800",
    q: "Comment trouver la somme d'une série entière \\(\\sum a_n x^n\\) ?",
    a: "Méthode classique :\\n1. <b>Identifier</b> le rayon de convergence \\(R\\).\\n2. Poser \\(S(x) = \\sum a_n x^n\\) et chercher une <b>équation différentielle</b> vérifiée par \\(S\\).\\n3. Souvent : <b>dériver</b> ou <b>intégrer</b> terme à terme pour reconnaître un DSE classique.\\n4. Résoudre l'ED et utiliser \\(S(0) = a_0\\) comme condition initiale.\\n5. Vérifier la convergence aux bords avec Abel si nécessaire.",
    hint: "Somme série entière"
  },

  // ═══════════════════════════════════════
  // INTÉGRALES (8 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-int-01",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Définir une intégrale impropre convergente.",
    a: "Soit \\(f : [a, b[ \\to \\mathbb{R}\\) continue (avec \\(b \\in \\mathbb{R} \\cup \\{+\\infty\\}\\)). L'intégrale impropre \\(\\int_a^b f(t)\\,dt\\) est dite <b>convergente</b> si la limite : $$\\lim_{x \\to b^-} \\int_a^x f(t)\\,dt$$ existe et est finie. On dit que \\(f\\) est <b>intégrable</b> sur \\([a, b[\\) si \\(\\int_a^b |f(t)|\\,dt\\) converge (convergence absolue).",
    hint: "Intégrale impropre"
  },
  {
    id: "e3a-int-02",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Énoncer le critère de comparaison pour les intégrales impropres.",
    a: "Soient \\(f, g : [a, +\\infty[ \\to \\mathbb{R}\\) continues avec \\(0 \\leqslant f(t) \\leqslant g(t)\\) pour tout \\(t \\geqslant a\\). Alors :\\n- Si \\(\\int_a^{+\\infty} g(t)\\,dt\\) converge, alors \\(\\int_a^{+\\infty} f(t)\\,dt\\) converge.\\n- Si \\(\\int_a^{+\\infty} f(t)\\,dt\\) diverge, alors \\(\\int_a^{+\\infty} g(t)\\,dt\\) diverge.\\n\\nVariante avec équivalents : si \\(f \\sim g\\) en \\(+\\infty\\) et \\(f, g \\geqslant 0\\), les deux intégrales sont de même nature.",
    hint: "Comparaison intégrales"
  },
  {
    id: "e3a-int-03",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Intégrales de Riemann : quand \\(\\displaystyle\\int_1^{+\\infty} \\frac{dt}{t^\\alpha}\\) converge-t-elle ?",
    a: "$$\\int_1^{+\\infty} \\frac{dt}{t^\\alpha} \\text{ converge} \\iff \\alpha > 1$$ Pour \\(\\alpha > 1\\) : \\(\\int_1^{+\\infty} \\frac{dt}{t^\\alpha} = \\frac{1}{\\alpha - 1}\\).\\n\\nEn \\(0\\) : \\(\\int_0^1 \\frac{dt}{t^\\alpha}\\) converge ssi \\(\\alpha < 1\\).\\n\\nCe sont les intégrales de <b>référence</b> pour le critère de comparaison.",
    hint: "Intégrales Riemann"
  },
  {
    id: "e3a-int-04",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Définir la fonction Gamma et donner la relation \\(\\Gamma(n+1) = n!\\).",
    a: "La fonction Gamma est définie pour \\(x > 0\\) par : $$\\Gamma(x) = \\int_0^{+\\infty} t^{x-1} e^{-t}\\,dt$$ Par intégration par parties : \\(\\Gamma(x+1) = x\\,\\Gamma(x)\\) pour tout \\(x > 0\\). Comme \\(\\Gamma(1) = 1\\), on obtient par récurrence : $$\\Gamma(n+1) = n! \\quad \\forall\\, n \\in \\mathbb{N}$$ On a aussi \\(\\Gamma(1/2) = \\sqrt{\\pi}\\).",
    hint: "Fonction Gamma"
  },
  {
    id: "e3a-int-05",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Intégrales de Wallis : donner la formule de récurrence de \\(W_n = \\displaystyle\\int_0^{\\pi/2} \\sin^n(t)\\,dt\\).",
    a: "Par intégration par parties : $$W_n = \\frac{n-1}{n}\\, W_{n-2} \\quad \\text{pour } n \\geqslant 2$$ avec \\(W_0 = \\frac{\\pi}{2}\\) et \\(W_1 = 1\\). On a aussi \\(W_n \\sim \\sqrt{\\frac{\\pi}{2n}}\\) quand \\(n \\to +\\infty\\), et le produit \\(n\\, W_n\\, W_{n-1} = \\frac{\\pi}{2}\\) pour tout \\(n \\geqslant 1\\).",
    hint: "Wallis"
  },
  {
    id: "e3a-int-06",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Énoncer le théorème de convergence dominée.",
    a: "Soit \\((f_n)\\) une suite de fonctions intégrables sur \\(I\\) telle que :\\n1. \\(f_n \\to f\\) <b>simplement</b> sur \\(I\\),\\n2. Il existe \\(g \\geqslant 0\\) <b>intégrable</b> sur \\(I\\) telle que \\(|f_n(t)| \\leqslant g(t)\\) pour tout \\(n\\) et tout \\(t\\) (<b>hypothèse de domination</b>).\\n\\nAlors \\(f\\) est intégrable et : $$\\lim_{n \\to +\\infty} \\int_I f_n(t)\\,dt = \\int_I f(t)\\,dt$$",
    hint: "Convergence dominée"
  },
  {
    id: "e3a-int-07",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Énoncer le théorème de dérivation sous le signe intégral (Leibniz). Quelles sont les hypothèses ?",
    a: "Soit \\(F(x) = \\int_I f(x, t)\\,dt\\). On peut dériver sous l'intégrale si :\\n1. \\(t \\mapsto f(x, t)\\) est intégrable pour tout \\(x\\),\\n2. \\(x \\mapsto f(x, t)\\) est de classe \\(C^1\\) pour presque tout \\(t\\),\\n3. (<b>Domination</b>) \\(\\left|\\frac{\\partial f}{\\partial x}(x, t)\\right| \\leqslant g(t)\\) avec \\(g\\) intégrable, indépendante de \\(x\\).\\n\\nAlors \\(F\\) est \\(C^1\\) et \\(F'(x) = \\int_I \\frac{\\partial f}{\\partial x}(x, t)\\,dt\\).",
    hint: "Leibniz"
  },
  {
    id: "e3a-int-08",
    theme: "Intégrales",
    themeColor: "#4CAF50",
    q: "Donner la valeur de l'intégrale de Gauss \\(\\displaystyle\\int_{-\\infty}^{+\\infty} e^{-t^2}\\,dt\\).",
    a: "$$\\int_{-\\infty}^{+\\infty} e^{-t^2}\\,dt = \\sqrt{\\pi}$$ Autrement dit \\(\\int_0^{+\\infty} e^{-t^2}\\,dt = \\frac{\\sqrt{\\pi}}{2}\\). Démonstration classique : calculer \\(I^2\\) en passant en coordonnées polaires, ou utiliser \\(\\Gamma(1/2) = \\sqrt{\\pi}\\) après le changement \\(t = \\sqrt{u}\\).",
    hint: "Intégrale de Gauss"
  },

  // ═══════════════════════════════════════
  // PROBABILITÉS (10 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-proba-01",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Loi de Bernoulli \\(\\mathcal{B}(p)\\) : donner \\(P(X=k)\\), \\(E(X)\\), \\(V(X)\\).",
    a: "\\(X \\sim \\mathcal{B}(p)\\) avec \\(p \\in [0,1]\\) :\\n- \\(P(X = 1) = p\\), \\(P(X = 0) = 1 - p = q\\)\\n- \\(E(X) = p\\)\\n- \\(V(X) = p(1-p) = pq\\)",
    hint: "Bernoulli"
  },
  {
    id: "e3a-proba-02",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Loi binomiale \\(\\mathcal{B}(n, p)\\) : donner \\(P(X=k)\\), \\(E(X)\\), \\(V(X)\\).",
    a: "\\(X \\sim \\mathcal{B}(n, p)\\), \\(X = \\) nombre de succès en \\(n\\) épreuves indépendantes :\\n- \\(P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}\\) pour \\(k \\in \\{0, 1, \\ldots, n\\}\\)\\n- \\(E(X) = np\\)\\n- \\(V(X) = np(1-p)\\)",
    hint: "Binomiale"
  },
  {
    id: "e3a-proba-03",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Loi de Poisson \\(\\mathcal{P}(\\lambda)\\) : donner \\(P(X=k)\\), \\(E(X)\\), \\(V(X)\\).",
    a: "\\(X \\sim \\mathcal{P}(\\lambda)\\) avec \\(\\lambda > 0\\) :\\n- \\(P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}\\) pour \\(k \\in \\mathbb{N}\\)\\n- \\(E(X) = \\lambda\\)\\n- \\(V(X) = \\lambda\\)\\n\\nApproximation : si \\(X \\sim \\mathcal{B}(n, p)\\) avec \\(n\\) grand, \\(p\\) petit, \\(np \\to \\lambda\\), alors \\(X \\approx \\mathcal{P}(\\lambda)\\).",
    hint: "Poisson"
  },
  {
    id: "e3a-proba-04",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Loi géométrique \\(\\mathcal{G}(p)\\) : donner \\(P(X=k)\\), \\(E(X)\\), \\(V(X)\\).",
    a: "\\(X \\sim \\mathcal{G}(p)\\), \\(X = \\) rang du premier succès :\\n- \\(P(X = k) = (1-p)^{k-1} p\\) pour \\(k \\in \\mathbb{N}^*\\)\\n- \\(E(X) = \\frac{1}{p}\\)\\n- \\(V(X) = \\frac{1-p}{p^2}\\)\\n\\nPropriété d'absence de mémoire : \\(P(X > m + n \\mid X > m) = P(X > n)\\).",
    hint: "Géométrique"
  },
  {
    id: "e3a-proba-05",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Définir l'indépendance de deux variables aléatoires discrètes.",
    a: "Deux VA discrètes \\(X\\) et \\(Y\\) sont <b>indépendantes</b> si pour tout \\((x, y) \\in X(\\Omega) \\times Y(\\Omega)\\) : $$P(X = x \\text{ et } Y = y) = P(X = x) \\cdot P(Y = y)$$ Conséquences : \\(E(XY) = E(X) \\cdot E(Y)\\) et \\(V(X + Y) = V(X) + V(Y)\\).",
    hint: "Indépendance VA"
  },
  {
    id: "e3a-proba-06",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Énoncer la formule de l'espérance totale.",
    a: "Si \\((B_1, \\ldots, B_n)\\) est un système complet d'événements (partition de \\(\\Omega\\) avec \\(P(B_i) > 0\\)), alors : $$E(X) = \\sum_{i=1}^{n} E(X \\mid B_i) \\, P(B_i)$$ C'est l'analogue pour l'espérance de la formule des probabilités totales : \\(P(A) = \\sum_i P(A \\mid B_i)\\, P(B_i)\\).",
    hint: "Espérance totale"
  },
  {
    id: "e3a-proba-07",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Donner la formule de la variance : \\(V(X) = E(X^2) - E(X)^2\\).",
    a: "La variance est : $$V(X) = E\\big[(X - E(X))^2\\big] = E(X^2) - [E(X)]^2$$ Propriétés :\\n- \\(V(X) \\geqslant 0\\), et \\(V(X) = 0 \\iff X\\) est constante p.s.\\n- \\(V(aX + b) = a^2 V(X)\\)\\n- L'écart-type est \\(\\sigma(X) = \\sqrt{V(X)}\\).",
    hint: "Formule variance"
  },
  {
    id: "e3a-proba-08",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Définir la fonction génératrice d'une VA discrète à valeurs dans \\(\\mathbb{N}\\) et donner ses propriétés.",
    a: "La <b>fonction génératrice</b> de \\(X\\) est : $$G_X(s) = E(s^X) = \\sum_{k=0}^{+\\infty} P(X = k)\\, s^k$$ définie au moins pour \\(|s| \\leqslant 1\\). Propriétés :\\n- \\(G_X(1) = 1\\)\\n- \\(G_X'(1) = E(X)\\)\\n- \\(G_X''(1) = E(X(X-1))\\), d'où \\(V(X) = G_X''(1) + G_X'(1) - [G_X'(1)]^2\\)\\n- Si \\(X, Y\\) indépendantes : \\(G_{X+Y} = G_X \\cdot G_Y\\).",
    hint: "Fonction génératrice"
  },
  {
    id: "e3a-proba-09",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Loi de \\(X + Y\\) pour \\(X, Y\\) indépendantes discrètes (formule de convolution).",
    a: "Si \\(X\\) et \\(Y\\) sont indépendantes et à valeurs dans \\(\\mathbb{N}\\) : $$P(X + Y = n) = \\sum_{k=0}^{n} P(X = k)\\, P(Y = n - k)$$ C'est le <b>produit de convolution</b> des lois. Exemples classiques :\\n- \\(\\mathcal{B}(n,p) + \\mathcal{B}(m,p) = \\mathcal{B}(n+m, p)\\)\\n- \\(\\mathcal{P}(\\lambda) + \\mathcal{P}(\\mu) = \\mathcal{P}(\\lambda + \\mu)\\)",
    hint: "Convolution"
  },
  {
    id: "e3a-proba-10",
    theme: "Probabilités",
    themeColor: "#9C27B0",
    q: "Énoncer l'inégalité de Markov et l'inégalité de Bienaymé-Tchebychev.",
    a: "<b>Markov</b> : si \\(X \\geqslant 0\\) admet une espérance, alors pour tout \\(a > 0\\) : $$P(X \\geqslant a) \\leqslant \\frac{E(X)}{a}$$ <b>Bienaymé-Tchebychev</b> : si \\(X\\) admet une variance, alors pour tout \\(\\varepsilon > 0\\) : $$P(|X - E(X)| \\geqslant \\varepsilon) \\leqslant \\frac{V(X)}{\\varepsilon^2}$$ Conséquence : la loi faible des grands nombres.",
    hint: "Markov / Tchebychev"
  },

  // ═══════════════════════════════════════
  // ESPACES EUCLIDIENS (10 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-eucl-01",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Définir un produit scalaire sur un \\(\\mathbb{R}\\)-espace vectoriel \\(E\\).",
    a: "Un <b>produit scalaire</b> sur \\(E\\) est une forme bilinéaire \\(\\langle \\cdot, \\cdot \\rangle : E \\times E \\to \\mathbb{R}\\) qui est :\\n1. <b>Symétrique</b> : \\(\\langle x, y \\rangle = \\langle y, x \\rangle\\)\\n2. <b>Définie positive</b> : \\(\\langle x, x \\rangle \\geqslant 0\\) et \\(\\langle x, x \\rangle = 0 \\iff x = 0\\)\\n\\nOn note \\(\\|x\\| = \\sqrt{\\langle x, x \\rangle}\\) la norme associée. Le couple \\((E, \\langle \\cdot, \\cdot \\rangle)\\) est un espace euclidien si \\(\\dim(E) < +\\infty\\).",
    hint: "Produit scalaire"
  },
  {
    id: "e3a-eucl-02",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Énoncer l'inégalité de Cauchy-Schwarz et le cas d'égalité.",
    a: "Pour tout \\(x, y \\in E\\) : $$|\\langle x, y \\rangle| \\leqslant \\|x\\| \\cdot \\|y\\|$$ <b>Cas d'égalité</b> : \\(|\\langle x, y \\rangle| = \\|x\\| \\cdot \\|y\\|\\) si et seulement si \\(x\\) et \\(y\\) sont <b>colinéaires</b> (i.e. \\((x, y)\\) est liée).\\n\\nConséquence : l'inégalité triangulaire \\(\\|x + y\\| \\leqslant \\|x\\| + \\|y\\|\\).",
    hint: "Cauchy-Schwarz"
  },
  {
    id: "e3a-eucl-03",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Décrire le procédé de Gram-Schmidt.",
    a: "Soit \\((e_1, \\ldots, e_n)\\) une base de \\(E\\). On construit une base orthonormée \\((\\varepsilon_1, \\ldots, \\varepsilon_n)\\) par récurrence :\\n$$\\tilde{\\varepsilon}_k = e_k - \\sum_{j=1}^{k-1} \\langle e_k, \\varepsilon_j \\rangle\\, \\varepsilon_j, \\qquad \\varepsilon_k = \\frac{\\tilde{\\varepsilon}_k}{\\|\\tilde{\\varepsilon}_k\\|}$$ Propriété clé : \\(\\mathrm{Vect}(\\varepsilon_1, \\ldots, \\varepsilon_k) = \\mathrm{Vect}(e_1, \\ldots, e_k)\\) pour tout \\(k\\).",
    hint: "Gram-Schmidt"
  },
  {
    id: "e3a-eucl-04",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Qu'est-ce que la projection orthogonale sur un sous-espace \\(F\\) ?",
    a: "Soit \\(F\\) un sous-espace de \\(E\\). Pour tout \\(x \\in E\\), il existe un unique \\(p \\in F\\) tel que \\((x - p) \\perp F\\). Ce \\(p\\) est la <b>projection orthogonale</b> de \\(x\\) sur \\(F\\), notée \\(p_F(x)\\).\\n\\nSi \\((\\varepsilon_1, \\ldots, \\varepsilon_r)\\) est une BON de \\(F\\) : $$p_F(x) = \\sum_{i=1}^{r} \\langle x, \\varepsilon_i \\rangle\\, \\varepsilon_i$$",
    hint: "Projection orthogonale"
  },
  {
    id: "e3a-eucl-05",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Comment calculer la distance d'un vecteur \\(x\\) à un sous-espace \\(F\\) ?",
    a: "$$d(x, F) = \\|x - p_F(x)\\|$$ où \\(p_F(x)\\) est la projection orthogonale de \\(x\\) sur \\(F\\). Le minimum de \\(\\|x - y\\|\\) pour \\(y \\in F\\) est atteint en \\(y = p_F(x)\\) (c'est le meilleur approximant dans \\(F\\)).\\n\\nSi \\((\\varepsilon_1, \\ldots, \\varepsilon_r)\\) est une BON de \\(F\\) : $$d(x, F)^2 = \\|x\\|^2 - \\sum_{i=1}^{r} \\langle x, \\varepsilon_i \\rangle^2$$",
    hint: "Distance sous-espace"
  },
  {
    id: "e3a-eucl-06",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Donner la matrice de la projection orthogonale sur \\(F = \\mathrm{Im}(A)\\).",
    a: "Si \\(A\\) est la matrice dont les colonnes forment une base de \\(F\\), la matrice de la projection orthogonale sur \\(F\\) est : $$P = A(A^T A)^{-1} A^T$$ Si les colonnes de \\(A\\) forment une base orthonormée de \\(F\\), cela se simplifie en \\(P = AA^T\\). On a \\(P^2 = P\\), \\(P^T = P\\), et \\(\\mathrm{rg}(P) = \\dim(F)\\).",
    hint: "Matrice projection ortho"
  },
  {
    id: "e3a-eucl-07",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Définir le supplémentaire orthogonal et donner sa dimension.",
    a: "Soit \\(F\\) un sous-espace de \\(E\\). Le <b>supplémentaire orthogonal</b> de \\(F\\) est : $$F^\\perp = \\{x \\in E \\mid \\langle x, y \\rangle = 0 \\;\\forall\\, y \\in F\\}$$ On a : \\(E = F \\oplus F^\\perp\\) et \\(\\dim(F^\\perp) = \\dim(E) - \\dim(F)\\). De plus, \\((F^\\perp)^\\perp = F\\).",
    hint: "Supplémentaire orthogonal"
  },
  {
    id: "e3a-eucl-08",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Qu'est-ce qu'une base orthonormale (BON) ?",
    a: "Une base \\((e_1, \\ldots, e_n)\\) de \\(E\\) est <b>orthonormale</b> (ou orthonormée) si : $$\\langle e_i, e_j \\rangle = \\delta_{ij} = \\begin{cases} 1 & \\text{si } i = j \\\\ 0 & \\text{si } i \\neq j \\end{cases}$$ Tout espace euclidien admet une BON (Gram-Schmidt). Dans une BON, \\(x = \\sum_{i=1}^{n} \\langle x, e_i \\rangle\\, e_i\\) et \\(\\|x\\|^2 = \\sum \\langle x, e_i \\rangle^2\\) (Parseval).",
    hint: "Base orthonormale"
  },
  {
    id: "e3a-eucl-09",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Définir une matrice orthogonale et donner ses propriétés.",
    a: "\\(P \\in \\mathcal{M}_n(\\mathbb{R})\\) est <b>orthogonale</b> si \\(P^T P = I_n\\), i.e. \\(P^{-1} = P^T\\). Propriétés :\\n- Les colonnes (et les lignes) forment une BON de \\(\\mathbb{R}^n\\).\\n- \\(\\det(P) = \\pm 1\\). Si \\(\\det(P) = 1\\) : rotation ; si \\(\\det(P) = -1\\) : anti-rotation.\\n- \\(P\\) conserve le produit scalaire : \\(\\langle Px, Py \\rangle = \\langle x, y \\rangle\\).\\n- Les valeurs propres réelles sont \\(\\pm 1\\).",
    hint: "Matrice orthogonale"
  },
  {
    id: "e3a-eucl-10",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    q: "Définir un endomorphisme symétrique (auto-adjoint).",
    a: "Un endomorphisme \\(f \\in \\mathcal{L}(E)\\) est <b>symétrique</b> (ou auto-adjoint) si : $$\\langle f(x), y \\rangle = \\langle x, f(y) \\rangle \\quad \\forall\\, x, y \\in E$$ Matriciellement, cela revient à dire que la matrice de \\(f\\) dans une BON est symétrique (\\(A = A^T\\)). Par le théorème spectral, \\(f\\) est diagonalisable dans une BON.",
    hint: "Endomorphisme symétrique"
  },

  // ═══════════════════════════════════════
  // CALCUL DIFFÉRENTIEL (5 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-diff-01",
    theme: "Calcul différentiel",
    themeColor: "#00BCD4",
    q: "Définir le gradient d'une fonction \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) différentiable.",
    a: "Le <b>gradient</b> de \\(f\\) en \\(a\\) est le vecteur : $$\\nabla f(a) = \\left(\\frac{\\partial f}{\\partial x_1}(a), \\ldots, \\frac{\\partial f}{\\partial x_n}(a)\\right)$$ Il vérifie \\(df_a(h) = \\langle \\nabla f(a), h \\rangle\\) et indique la direction de plus grande pente. Sa norme donne le taux de variation maximal.",
    hint: "Gradient"
  },
  {
    id: "e3a-diff-02",
    theme: "Calcul différentiel",
    themeColor: "#00BCD4",
    q: "Énoncer la méthode des multiplicateurs de Lagrange.",
    a: "Pour trouver les extrema de \\(f\\) sous la contrainte \\(g(x) = 0\\) (avec \\(\\nabla g \\neq 0\\) sur la contrainte) :\\n\\nLes points candidats vérifient : $$\\nabla f(a) = \\lambda\\, \\nabla g(a) \\quad \\text{et} \\quad g(a) = 0$$ pour un certain \\(\\lambda \\in \\mathbb{R}\\) (le <b>multiplicateur de Lagrange</b>). On résout le système de \\(n + 1\\) équations à \\(n + 1\\) inconnues \\((a_1, \\ldots, a_n, \\lambda)\\).",
    hint: "Lagrange"
  },
  {
    id: "e3a-diff-03",
    theme: "Calcul différentiel",
    themeColor: "#00BCD4",
    q: "Qu'est-ce que la matrice hessienne ? Comment déterminer la nature d'un point critique ?",
    a: "La <b>matrice hessienne</b> de \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) en \\(a\\) est : $$H_f(a) = \\left(\\frac{\\partial^2 f}{\\partial x_i \\partial x_j}(a)\\right)_{1 \\leqslant i,j \\leqslant n}$$ Si \\(\\nabla f(a) = 0\\) :\\n- \\(H_f(a)\\) définie positive \\(\\Rightarrow\\) minimum local\\n- \\(H_f(a)\\) définie négative \\(\\Rightarrow\\) maximum local\\n- \\(H_f(a)\\) indéfinie \\(\\Rightarrow\\) point selle\\n\\nEn dimension 2 : on utilise \\(\\det(H) = rt - s^2\\) et le signe de \\(r\\).",
    hint: "Hessienne"
  },
  {
    id: "e3a-diff-04",
    theme: "Calcul différentiel",
    themeColor: "#00BCD4",
    q: "Énoncer la condition nécessaire d'extremum local pour \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\).",
    a: "Si \\(f\\) est différentiable en \\(a\\) et admet un extremum local en \\(a\\), alors : $$\\nabla f(a) = 0$$ i.e. toutes les dérivées partielles s'annulent : \\(\\frac{\\partial f}{\\partial x_i}(a) = 0\\) pour tout \\(i\\). Un tel point est appelé <b>point critique</b> (ou point stationnaire). Attention : la réciproque est fausse (exemple : point selle).",
    hint: "CN extremum"
  },
  {
    id: "e3a-diff-05",
    theme: "Calcul différentiel",
    themeColor: "#00BCD4",
    q: "Énoncer le théorème des extrema liés (cas général).",
    a: "Soit \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) de classe \\(C^1\\) et \\(g_1, \\ldots, g_p : \\mathbb{R}^n \\to \\mathbb{R}\\) de classe \\(C^1\\) avec \\(p < n\\). Si \\(f\\) admet un extremum en \\(a\\) sur \\(\\{g_1 = 0, \\ldots, g_p = 0\\}\\) et si \\((\\nabla g_1(a), \\ldots, \\nabla g_p(a))\\) est libre, alors il existe \\(\\lambda_1, \\ldots, \\lambda_p \\in \\mathbb{R}\\) tels que : $$\\nabla f(a) = \\lambda_1 \\nabla g_1(a) + \\cdots + \\lambda_p \\nabla g_p(a)$$",
    hint: "Extrema liés"
  },

  // ═══════════════════════════════════════
  // BONUS CLASSIQUES E3A (5 cartes)
  // ═══════════════════════════════════════

  {
    id: "e3a-bonus-01",
    theme: "Bonus classiques E3A",
    themeColor: "#607D8B",
    q: "Énoncer le théorème de Cesàro.",
    a: "Si \\((u_n)\\) est une suite réelle convergeant vers \\(\\ell \\in \\mathbb{R}\\), alors la suite des moyennes de Cesàro converge aussi vers \\(\\ell\\) : $$\\frac{u_1 + u_2 + \\cdots + u_n}{n} \\xrightarrow[n \\to +\\infty]{} \\ell$$ La réciproque est fausse : \\(u_n = (-1)^n\\) diverge mais les moyennes convergent vers \\(0\\).",
    hint: "Cesàro"
  },
  {
    id: "e3a-bonus-02",
    theme: "Bonus classiques E3A",
    themeColor: "#607D8B",
    q: "Définir une fonction lipschitzienne et donner le lien avec \\(C^1\\).",
    a: "\\(f : I \\to \\mathbb{R}\\) est <b>\\(k\\)-lipschitzienne</b> s'il existe \\(k \\geqslant 0\\) tel que : $$|f(x) - f(y)| \\leqslant k\\,|x - y| \\quad \\forall\\, x, y \\in I$$ Lien avec \\(C^1\\) : si \\(f \\in C^1(I)\\) et \\(|f'| \\leqslant k\\) sur \\(I\\), alors \\(f\\) est \\(k\\)-lipschitzienne (par le TAF). Toute fonction lipschitzienne est uniformément continue.",
    hint: "Lipschitz"
  },
  {
    id: "e3a-bonus-03",
    theme: "Bonus classiques E3A",
    themeColor: "#607D8B",
    q: "Définir le produit de convolution \\(f * g\\) pour des fonctions intégrables.",
    a: "Si \\(f, g : \\mathbb{R} \\to \\mathbb{R}\\) sont intégrables, leur <b>produit de convolution</b> est : $$(f * g)(x) = \\int_{-\\infty}^{+\\infty} f(t)\\, g(x - t)\\,dt$$ Propriétés : la convolution est <b>commutative</b> (\\(f * g = g * f\\)), <b>associative</b>, et la transformée de Fourier transforme la convolution en produit : \\(\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}\\).",
    hint: "Convolution"
  },
  {
    id: "e3a-bonus-04",
    theme: "Bonus classiques E3A",
    themeColor: "#607D8B",
    q: "Qu'est-ce qu'une matrice circulante ? Quel est son spectre ?",
    a: "Une matrice <b>circulante</b> d'ordre \\(n\\) est de la forme : $$C = \\begin{pmatrix} c_0 & c_{n-1} & \\cdots & c_1 \\\\ c_1 & c_0 & \\cdots & c_2 \\\\ \\vdots & & \\ddots & \\vdots \\\\ c_{n-1} & c_{n-2} & \\cdots & c_0 \\end{pmatrix}$$ Les valeurs propres sont : \\(\\lambda_k = \\sum_{j=0}^{n-1} c_j\\, \\omega^{jk}\\) pour \\(k = 0, \\ldots, n-1\\), où \\(\\omega = e^{2i\\pi/n}\\). Les vecteurs propres sont les colonnes de la matrice de Fourier discrète.",
    hint: "Matrice circulante"
  },
  {
    id: "e3a-bonus-05",
    theme: "Bonus classiques E3A",
    themeColor: "#607D8B",
    q: "Énoncer la formule de Stirling.",
    a: "Quand \\(n \\to +\\infty\\) : $$n! \\sim \\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$$ Cela signifie que \\(\\dfrac{n!}{\\sqrt{2\\pi n}\\,(n/e)^n} \\xrightarrow[n \\to +\\infty]{} 1\\). Utile pour estimer \\(\\binom{2n}{n} \\sim \\frac{4^n}{\\sqrt{\\pi n}}\\) et pour les comparaisons série-intégrale.",
    hint: "Stirling"
  }

];
