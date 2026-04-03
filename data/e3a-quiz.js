// Quiz QCM E3A-Polytech — 40 questions niveau faible à moyen
// Thèmes : Réduction, Séries entières, Intégrales, Probabilités, Espaces euclidiens, Calcul différentiel

var E3A_QUIZ = [

  // ═══════════════════════════════════════════════
  //  RÉDUCTION (8 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-q-red-01",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(A \\in \\mathcal{M}_n(\\mathbb{R})\\) une matrice symétrique réelle. Laquelle de ces affirmations est vraie ?",
    choices: [
      "\\(A\\) est toujours diagonalisable dans \\(\\mathbb{R}\\)",
      "\\(A\\) est diagonalisable dans \\(\\mathbb{C}\\) mais pas forcément dans \\(\\mathbb{R}\\)",
      "\\(A\\) n'est diagonalisable que si ses valeurs propres sont distinctes",
      "\\(A\\) est diagonalisable seulement si elle est inversible"
    ],
    correct: 0,
    explanation: "C'est le théorème spectral : toute matrice symétrique réelle est diagonalisable dans \\(\\mathbb{R}\\), et même orthogonalement diagonalisable (il existe \\(P \\in O_n(\\mathbb{R})\\) telle que \\(P^\\top A P\\) soit diagonale). La clé est que les valeurs propres d'une matrice symétrique réelle sont toujours réelles, et que les sous-espaces propres sont en somme directe orthogonale."
  },
  {
    id: "e3a-q-red-02",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(A \\in \\mathcal{M}_n(\\mathbb{C})\\) et \\(P \\in \\mathbb{C}[X]\\) un polynôme annulateur de \\(A\\) qui est scindé à racines simples. Que peut-on dire de \\(A\\) ?",
    choices: [
      "\\(A\\) est nilpotente",
      "\\(A\\) est diagonalisable",
      "\\(A\\) est inversible",
      "\\(A\\) est triangulaire"
    ],
    correct: 1,
    explanation: "Si \\(P(A) = 0\\) avec \\(P\\) scindé à racines simples, alors le polynôme minimal \\(\\mu_A\\) divise \\(P\\), donc \\(\\mu_A\\) est lui aussi scindé à racines simples. Or une matrice est diagonalisable si et seulement si son polynôme minimal est scindé à racines simples. C'est un critère fondamental de diagonalisabilité, très fréquent aux concours E3A."
  },
  {
    id: "e3a-q-red-03",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(A \\in \\mathcal{M}_n(\\mathbb{C})\\). Les valeurs propres de \\(A^\\top\\) (transposée) sont :",
    choices: [
      "Les conjuguées des valeurs propres de \\(A\\)",
      "Les inverses des valeurs propres de \\(A\\)",
      "Les mêmes que celles de \\(A\\)",
      "Les opposées des valeurs propres de \\(A\\)"
    ],
    correct: 2,
    explanation: "Le polynôme caractéristique de \\(A^\\top\\) est \\(\\det(XI_n - A^\\top) = \\det((XI_n - A)^\\top) = \\det(XI_n - A) = \\chi_A(X)\\). Donc \\(A\\) et \\(A^\\top\\) ont le même polynôme caractéristique, et par conséquent les mêmes valeurs propres (avec les mêmes multiplicités). Attention : les sous-espaces propres sont en général différents."
  },
  {
    id: "e3a-q-red-04",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(A \\in \\mathcal{M}_n(\\mathbb{C})\\) telle que \\(A^2 = A\\) (matrice idempotente). Quelles sont les valeurs propres possibles de \\(A\\) ?",
    choices: [
      "\\(0\\) uniquement",
      "\\(1\\) uniquement",
      "\\(0\\) et \\(1\\)",
      "\\(-1\\) et \\(1\\)"
    ],
    correct: 2,
    explanation: "Si \\(\\lambda\\) est valeur propre de \\(A\\), alors \\(A^2 = A\\) implique \\(\\lambda^2 = \\lambda\\), soit \\(\\lambda(\\lambda - 1) = 0\\). Donc \\(\\lambda \\in \\{0, 1\\}\\). De plus, le polynôme \\(X^2 - X = X(X-1)\\) est scindé à racines simples et annule \\(A\\), ce qui prouve que \\(A\\) est diagonalisable. On a alors \\(A\\) semblable à \\(\\text{diag}(1,\\ldots,1,0,\\ldots,0)\\), c'est-à-dire que \\(A\\) est la matrice d'un projecteur."
  },
  {
    id: "e3a-q-red-05",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Le polynôme caractéristique de la matrice identité \\(I_n\\) est :",
    choices: [
      "\\(X^n\\)",
      "\\((X-1)^n\\)",
      "\\((X+1)^n\\)",
      "\\(X^n - 1\\)"
    ],
    correct: 1,
    explanation: "Par définition, \\(\\chi_{I_n}(X) = \\det(XI_n - I_n) = \\det((X-1)I_n) = (X-1)^n\\). La seule valeur propre est \\(1\\), de multiplicité \\(n\\). C'est cohérent : \\(I_n\\) est déjà diagonale, et tous ses coefficients diagonaux valent \\(1\\)."
  },
  {
    id: "e3a-q-red-06",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(A \\in \\mathcal{M}_n(\\mathbb{C})\\) nilpotente, c'est-à-dire qu'il existe \\(k \\geq 1\\) tel que \\(A^k = 0\\). Quelles sont les valeurs propres de \\(A\\) ?",
    choices: [
      "\\(0\\) est la seule valeur propre",
      "\\(A\\) n'a aucune valeur propre",
      "Les racines \\(k\\)-ièmes de l'unité",
      "\\(0\\) et \\(1\\)"
    ],
    correct: 0,
    explanation: "Si \\(\\lambda\\) est valeur propre de \\(A\\), avec \\(Ax = \\lambda x\\) (\\(x \\neq 0\\)), alors \\(A^k x = \\lambda^k x\\). Comme \\(A^k = 0\\), on obtient \\(\\lambda^k = 0\\), donc \\(\\lambda = 0\\). Ainsi \\(0\\) est l'unique valeur propre. Le polynôme caractéristique est \\(\\chi_A(X) = X^n\\). Attention : \\(A\\) n'est pas nécessairement la matrice nulle (penser aux matrices de Jordan nilpotentes)."
  },
  {
    id: "e3a-q-red-07",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(\\lambda\\) une valeur propre de \\(A \\in \\mathcal{M}_n(\\mathbb{C})\\), de multiplicité algébrique \\(m_\\lambda\\). Quelle inégalité relie \\(\\dim(E_\\lambda)\\) et \\(m_\\lambda\\) ?",
    choices: [
      "\\(\\dim(E_\\lambda) \\geq m_\\lambda\\)",
      "\\(\\dim(E_\\lambda) = m_\\lambda\\) toujours",
      "\\(1 \\leq \\dim(E_\\lambda) \\leq m_\\lambda\\)",
      "\\(\\dim(E_\\lambda) = 1\\) toujours"
    ],
    correct: 2,
    explanation: "C'est une inégalité fondamentale de la théorie de la réduction. La dimension du sous-espace propre (multiplicité géométrique) vérifie toujours \\(1 \\leq \\dim(E_\\lambda) \\leq m_\\lambda\\). Le \\(1\\) vient du fait qu'un sous-espace propre contient au moins un vecteur propre non nul. L'inégalité \\(\\dim(E_\\lambda) \\leq m_\\lambda\\) est un résultat classique. La matrice \\(A\\) est diagonalisable si et seulement si on a égalité pour chaque valeur propre."
  },
  {
    id: "e3a-q-red-08",
    theme: "Réduction",
    themeColor: "#E91E63",
    question: "Soit \\(A \\in \\mathcal{M}_n(\\mathbb{C})\\) diagonalisable dans \\(\\mathbb{C}\\). Est-elle nécessairement diagonalisable dans \\(\\mathbb{R}\\) ?",
    choices: [
      "Oui, toujours",
      "Oui, si et seulement si \\(A\\) est symétrique",
      "Non, par exemple la matrice de rotation d'angle \\(\\pi/2\\)",
      "Non, sauf si \\(n = 1\\)"
    ],
    correct: 2,
    explanation: "Contre-exemple classique : la matrice \\(R = \\begin{pmatrix} 0 & -1 \\\\\\\\ 1 & 0 \\end{pmatrix}\\) (rotation d'angle \\(\\pi/2\\)) a pour valeurs propres \\(i\\) et \\(-i\\), donc elle est diagonalisable dans \\(\\mathbb{C}\\) (polynôme caractéristique scindé à racines simples). Mais elle n'a pas de valeur propre réelle, donc elle n'est pas diagonalisable dans \\(\\mathbb{R}\\). Retenez : diagonalisable dans \\(\\mathbb{C}\\) n'implique pas diagonalisable dans \\(\\mathbb{R}\\)."
  },

  // ═══════════════════════════════════════════════
  //  SÉRIES ENTIÈRES (7 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-q-se-01",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "Quel est le rayon de convergence de la série entière \\(\\displaystyle\\sum_{n=0}^{+\\infty} \\frac{x^n}{n!}\\) ?",
    choices: [
      "\\(R = 0\\)",
      "\\(R = 1\\)",
      "\\(R = e\\)",
      "\\(R = +\\infty\\)"
    ],
    correct: 3,
    explanation: "On utilise le critère de d'Alembert : \\(\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{1}{n+1} \\to 0\\). Donc le rayon est \\(R = +\\infty\\). La série converge pour tout \\(x \\in \\mathbb{R}\\) (et même pour tout \\(z \\in \\mathbb{C}\\)). C'est la série de l'exponentielle : \\(\\sum \\frac{x^n}{n!} = e^x\\). Le factoriel au dénominateur fait converger la série \"très vite\"."
  },
  {
    id: "e3a-q-se-02",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "Quel est le rayon de convergence de \\(\\displaystyle\\sum_{n=1}^{+\\infty} \\frac{x^n}{n}\\) ?",
    choices: [
      "\\(R = 0\\)",
      "\\(R = 1\\)",
      "\\(R = e\\)",
      "\\(R = +\\infty\\)"
    ],
    correct: 1,
    explanation: "Par d'Alembert : \\(\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{n}{n+1} \\to 1\\), donc \\(R = 1\\). On peut aussi utiliser la règle de Hadamard : \\(\\frac{1}{R} = \\limsup |a_n|^{1/n} = \\limsup (1/n)^{1/n} = 1\\). Sur l'intervalle \\(]-1, 1[\\), cette série vaut \\(-\\ln(1-x)\\). Aux bords : en \\(x=1\\) on obtient la série harmonique (diverge), en \\(x=-1\\) on obtient \\(-\\sum (-1)^n/n = -\\ln 2\\) (converge)."
  },
  {
    id: "e3a-q-se-03",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "Quel est le rayon de convergence de \\(\\displaystyle\\sum_{n=0}^{+\\infty} n!\\, x^n\\) ?",
    choices: [
      "\\(R = 0\\)",
      "\\(R = 1\\)",
      "\\(R = e\\)",
      "\\(R = +\\infty\\)"
    ],
    correct: 0,
    explanation: "Par d'Alembert : \\(\\left|\\frac{a_{n+1}}{a_n}\\right| = (n+1) \\to +\\infty\\), donc \\(R = 0\\). La série ne converge qu'en \\(x = 0\\). Le factoriel au numérateur croît beaucoup trop vite pour être compensé par \\(x^n\\). C'est l'exemple canonique de rayon nul, à connaître par coeur."
  },
  {
    id: "e3a-q-se-04",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "Pour \\(|x| < 1\\), que vaut \\(\\displaystyle\\sum_{n=0}^{+\\infty} x^n\\) ?",
    choices: [
      "\\(\\dfrac{1}{1+x}\\)",
      "\\(\\dfrac{1}{1-x}\\)",
      "\\(\\dfrac{x}{1-x}\\)",
      "\\(e^x\\)"
    ],
    correct: 1,
    explanation: "C'est la série géométrique : pour \\(|x| < 1\\), \\(\\sum_{n=0}^{+\\infty} x^n = \\frac{1}{1-x}\\). C'est le résultat le plus fondamental sur les séries entières. On le retrouve partout : en dérivant on obtient \\(\\sum n x^{n-1} = \\frac{1}{(1-x)^2}\\), en intégrant on obtient \\(-\\ln(1-x)\\), etc. C'est la \"brique de base\" de toutes les séries entières classiques."
  },
  {
    id: "e3a-q-se-05",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "Si \\(f(x) = \\displaystyle\\sum_{n=0}^{+\\infty} a_n x^n\\) a un rayon de convergence \\(R\\), quel est le rayon de convergence de \\(f'(x) = \\displaystyle\\sum_{n=1}^{+\\infty} n a_n x^{n-1}\\) ?",
    choices: [
      "\\(R' = R\\)",
      "\\(R' = R - 1\\)",
      "\\(R' = R/2\\)",
      "On ne peut pas conclure en général"
    ],
    correct: 0,
    explanation: "C'est un théorème fondamental : la dérivée d'une série entière a le même rayon de convergence que la série d'origine. Intuitivement, le facteur \\(n\\) devant \\(a_n\\) ne change pas le comportement asymptotique du rayon (car \\(n^{1/n} \\to 1\\)). Plus précisément, \\(\\limsup |n a_n|^{1/n} = \\limsup |a_n|^{1/n}\\). C'est aussi vrai pour les primitives."
  },
  {
    id: "e3a-q-se-06",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "La série \\(\\displaystyle\\sum_{n=1}^{+\\infty} \\frac{1}{n}\\) (obtenue en \\(x = 1\\) dans \\(\\sum x^n/n\\)) est-elle convergente ?",
    choices: [
      "Oui, elle converge vers \\(\\ln 2\\)",
      "Oui, elle converge vers \\(1\\)",
      "Non, c'est la série harmonique qui diverge",
      "Non, elle diverge vers \\(-\\infty\\)"
    ],
    correct: 2,
    explanation: "La série harmonique \\(\\sum 1/n\\) est l'exemple le plus classique de série à termes positifs qui diverge malgré un terme général tendant vers \\(0\\). On montre sa divergence par comparaison intégrale : \\(\\sum_{k=1}^n \\frac{1}{k} \\sim \\ln n \\to +\\infty\\). Cela montre aussi que le rayon \\(R = 1\\) de \\(\\sum x^n/n\\) est atteint mais la série diverge au bord \\(x = 1\\)."
  },
  {
    id: "e3a-q-se-07",
    theme: "Séries entières",
    themeColor: "#9C27B0",
    question: "La série \\(\\displaystyle\\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n}\\) (obtenue en \\(x = -1\\) dans \\(\\sum x^n/n\\)) converge-t-elle ?",
    choices: [
      "Non, elle diverge",
      "Oui, elle converge vers \\(-\\ln 2\\)",
      "Oui, elle converge vers \\(\\ln 2\\)",
      "Oui, elle converge vers \\(1\\)"
    ],
    correct: 1,
    explanation: "C'est une série alternée dont le terme général \\(1/n\\) décroît vers \\(0\\) : le critère de Leibniz assure la convergence. Sa somme est \\(\\sum_{n=1}^{+\\infty} \\frac{(-1)^n}{n} = -\\ln 2\\). En effet, \\(-\\ln(1-x) = \\sum x^n/n\\) pour \\(|x| < 1\\), et le théorème d'Abel radial étend la formule en \\(x = -1\\) : \\(-\\ln(2) = \\sum (-1)^n/n\\). Attention au signe : \\(\\sum_{n=1}^{+\\infty} \\frac{(-1)^{n+1}}{n} = +\\ln 2\\)."
  },

  // ═══════════════════════════════════════════════
  //  INTÉGRALES (5 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-q-int-01",
    theme: "Intégrales",
    themeColor: "#FF9800",
    question: "L'intégrale \\(\\displaystyle\\int_1^{+\\infty} \\frac{1}{t^2}\\, dt\\) est-elle convergente, et si oui, que vaut-elle ?",
    choices: [
      "Divergente",
      "Convergente, égale à \\(2\\)",
      "Convergente, égale à \\(1\\)",
      "Convergente, égale à \\(1/2\\)"
    ],
    correct: 2,
    explanation: "On calcule directement : \\(\\int_1^T \\frac{dt}{t^2} = \\left[-\\frac{1}{t}\\right]_1^T = 1 - \\frac{1}{T} \\xrightarrow[T \\to +\\infty]{} 1\\). Plus généralement, l'intégrale de Riemann \\(\\int_1^{+\\infty} t^{-\\alpha}\\, dt\\) converge si et seulement si \\(\\alpha > 1\\). Ici \\(\\alpha = 2 > 1\\), donc convergence. Ce critère est un classique absolu des concours."
  },
  {
    id: "e3a-q-int-02",
    theme: "Intégrales",
    themeColor: "#FF9800",
    question: "L'intégrale \\(\\displaystyle\\int_0^1 \\frac{1}{\\sqrt{t}}\\, dt\\) est-elle convergente, et si oui, que vaut-elle ?",
    choices: [
      "Divergente",
      "Convergente, égale à \\(1\\)",
      "Convergente, égale à \\(2\\)",
      "Convergente, égale à \\(\\sqrt{2}\\)"
    ],
    correct: 2,
    explanation: "L'intégrande n'est pas définie en \\(0\\), c'est une intégrale impropre en \\(0^+\\). On calcule : \\(\\int_\\varepsilon^1 t^{-1/2}\\, dt = \\left[2\\sqrt{t}\\right]_\\varepsilon^1 = 2 - 2\\sqrt{\\varepsilon} \\xrightarrow[\\varepsilon \\to 0^+]{} 2\\). Plus généralement, \\(\\int_0^1 t^{-\\alpha}\\, dt\\) converge si et seulement si \\(\\alpha < 1\\). Ici \\(\\alpha = 1/2 < 1\\), donc convergence. Attention : le critère est inversé par rapport à \\(+\\infty\\)."
  },
  {
    id: "e3a-q-int-03",
    theme: "Intégrales",
    themeColor: "#FF9800",
    question: "La fonction Gamma est définie par \\(\\Gamma(s) = \\displaystyle\\int_0^{+\\infty} t^{s-1} e^{-t}\\, dt\\). Que vaut \\(\\Gamma(5)\\) ?",
    choices: [
      "\\(5\\)",
      "\\(120\\)",
      "\\(24\\)",
      "\\(4\\)"
    ],
    correct: 2,
    explanation: "La propriété fondamentale de \\(\\Gamma\\) est la relation \\(\\Gamma(s+1) = s\\,\\Gamma(s)\\), et \\(\\Gamma(1) = 1\\). Par récurrence : \\(\\Gamma(n+1) = n!\\) pour tout \\(n \\in \\mathbb{N}\\). Donc \\(\\Gamma(5) = 4! = 24\\). Attention au décalage : \\(\\Gamma(n)\\) vaut \\((n-1)!\\), pas \\(n!\\). C'est un piège fréquent aux concours."
  },
  {
    id: "e3a-q-int-04",
    theme: "Intégrales",
    themeColor: "#FF9800",
    question: "Que vaut l'intégrale de Gauss \\(\\displaystyle\\int_{-\\infty}^{+\\infty} e^{-t^2}\\, dt\\) ?",
    choices: [
      "\\(1\\)",
      "\\(2\\)",
      "\\(\\sqrt{\\pi}\\)",
      "\\(\\pi\\)"
    ],
    correct: 2,
    explanation: "C'est un résultat célèbre : \\(\\int_{-\\infty}^{+\\infty} e^{-t^2}\\, dt = \\sqrt{\\pi}\\). La démonstration classique utilise le passage en coordonnées polaires en calculant \\(I^2 = \\iint_{\\mathbb{R}^2} e^{-(x^2+y^2)}\\, dx\\, dy = \\int_0^{2\\pi}\\int_0^{+\\infty} r e^{-r^2}\\, dr\\, d\\theta = \\pi\\). Ce résultat est fondamental en probabilités (loi normale) et en physique."
  },
  {
    id: "e3a-q-int-05",
    theme: "Intégrales",
    themeColor: "#FF9800",
    question: "Le théorème de convergence dominée (TCD) permet de passer la limite sous le signe intégral. Il s'applique :",
    choices: [
      "Uniquement aux suites de fonctions",
      "Uniquement aux séries de fonctions",
      "Aux suites et aux séries de fonctions",
      "Uniquement aux intégrales à paramètre continu"
    ],
    correct: 2,
    explanation: "Le TCD s'applique aux suites de fonctions (\\(\\lim \\int f_n = \\int \\lim f_n\\)) comme aux séries de fonctions (\\(\\sum \\int f_n = \\int \\sum f_n\\), car une série est la limite de ses sommes partielles). Les hypothèses sont : convergence simple de \\(f_n\\) vers \\(f\\), et existence d'une fonction \\(g\\) intégrable dominant toutes les \\(|f_n|\\). Le TCD est l'outil central pour permuter limites et intégrales."
  },

  // ═══════════════════════════════════════════════
  //  PROBABILITÉS (8 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-q-proba-01",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Soit \\(X\\) une variable aléatoire suivant la loi géométrique de paramètre \\(p \\in ]0,1[\\), avec \\(P(X = k) = p(1-p)^{k-1}\\) pour \\(k \\geq 1\\). Que vaut \\(E(X)\\) ?",
    choices: [
      "\\(p\\)",
      "\\(1 - p\\)",
      "\\(\\dfrac{1}{p}\\)",
      "\\(\\dfrac{1-p}{p}\\)"
    ],
    correct: 2,
    explanation: "Pour la loi géométrique avec \\(P(X = k) = p(1-p)^{k-1}\\) (\\(k \\geq 1\\)), l'espérance est \\(E(X) = \\frac{1}{p}\\). Intuitivement, si on lance une pièce de probabilité \\(p\\) de succès, on attend en moyenne \\(1/p\\) lancers avant le premier succès. Par exemple, pour \\(p = 1/6\\) (dé), on attend en moyenne \\(6\\) lancers. Attention à la convention : si \\(X\\) compte les échecs (\\(k \\geq 0\\)), alors \\(E(X) = \\frac{1-p}{p}\\)."
  },
  {
    id: "e3a-q-proba-02",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Soit \\(X \\sim \\mathcal{B}(n, p)\\) une variable binomiale. Que vaut sa variance \\(V(X)\\) ?",
    choices: [
      "\\(np\\)",
      "\\(np(1-p)\\)",
      "\\(np^2\\)",
      "\\(n^2 p(1-p)\\)"
    ],
    correct: 1,
    explanation: "Si \\(X \\sim \\mathcal{B}(n,p)\\), on écrit \\(X = X_1 + \\ldots + X_n\\) avec les \\(X_i\\) iid de loi \\(\\mathcal{B}(1,p)\\). Pour chaque \\(X_i\\) : \\(V(X_i) = p(1-p)\\). Par indépendance : \\(V(X) = nV(X_1) = np(1-p)\\). On a aussi \\(E(X) = np\\). Le couple \\((E,V) = (np,\\, np(1-p))\\) est à connaître par coeur pour la loi binomiale."
  },
  {
    id: "e3a-q-proba-03",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Soit \\(X \\sim \\mathcal{P}(\\lambda)\\) une variable de Poisson. Quelle relation remarquable lie \\(E(X)\\) et \\(V(X)\\) ?",
    choices: [
      "\\(E(X) = \\lambda\\) et \\(V(X) = \\lambda^2\\)",
      "\\(E(X) = V(X) = \\lambda\\)",
      "\\(E(X) = \\lambda\\) et \\(V(X) = \\sqrt{\\lambda}\\)",
      "\\(E(X) = V(X) = \\lambda^2\\)"
    ],
    correct: 1,
    explanation: "C'est la propriété remarquable de la loi de Poisson : l'espérance et la variance sont toutes les deux égales au paramètre \\(\\lambda\\). Pour le montrer : \\(E(X) = \\sum_{k=0}^{+\\infty} k \\frac{\\lambda^k e^{-\\lambda}}{k!} = \\lambda\\), et \\(E(X(X-1)) = \\lambda^2\\), d'où \\(V(X) = E(X^2) - E(X)^2 = \\lambda^2 + \\lambda - \\lambda^2 = \\lambda\\). Cette égalité \\(E = V\\) caractérise presque la loi de Poisson."
  },
  {
    id: "e3a-q-proba-04",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Soient \\(X, Y\\) indépendantes, de même loi géométrique sur \\(\\{1, 2, \\ldots\\}\\) de paramètre \\(p\\). Que vaut \\(P(X = Y)\\) ?",
    choices: [
      "\\(p\\)",
      "\\(p^2\\)",
      "\\(\\dfrac{p}{2-p}\\)",
      "\\(\\dfrac{1}{2}\\)"
    ],
    correct: 2,
    explanation: "Par indépendance : \\(P(X = Y) = \\sum_{k=1}^{+\\infty} P(X=k)P(Y=k) = \\sum_{k=1}^{+\\infty} p^2 (1-p)^{2(k-1)} = p^2 \\sum_{k=0}^{+\\infty} (1-p)^{2k}\\). En posant \\(q = 1-p\\), c'est une série géométrique : \\(p^2 \\cdot \\frac{1}{1-q^2} = \\frac{p^2}{1-(1-p)^2} = \\frac{p^2}{p(2-p)} = \\frac{p}{2-p}\\). Par exemple, pour \\(p = 1/2\\) : \\(P(X=Y) = 1/3\\)."
  },
  {
    id: "e3a-q-proba-05",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Si \\(X\\) et \\(Y\\) sont deux variables aléatoires indépendantes, que vaut \\(V(X + Y)\\) ?",
    choices: [
      "\\(V(X) + V(Y) + 2\\text{Cov}(X,Y)\\)",
      "\\(V(X) + V(Y)\\)",
      "\\(V(X) \\cdot V(Y)\\)",
      "\\((V(X) + V(Y))^2\\)"
    ],
    correct: 1,
    explanation: "En général, \\(V(X+Y) = V(X) + V(Y) + 2\\text{Cov}(X,Y)\\). Mais quand \\(X\\) et \\(Y\\) sont indépendantes, \\(\\text{Cov}(X,Y) = 0\\), donc \\(V(X+Y) = V(X) + V(Y)\\). Cette propriété d'additivité de la variance sous indépendance est fondamentale. Attention : l'espérance, elle, est toujours additive (\\(E(X+Y) = E(X) + E(Y)\\)) même sans indépendance. Le choix A est la formule générale (sans hypothèse d'indépendance)."
  },
  {
    id: "e3a-q-proba-06",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Soit \\(X\\) une variable aléatoire discrète et \\(G_X(s) = E(s^X)\\) sa fonction génératrice. Que vaut \\(G_X(1)\\) ?",
    choices: [
      "\\(E(X)\\)",
      "\\(0\\)",
      "\\(1\\)",
      "\\(V(X)\\)"
    ],
    correct: 2,
    explanation: "Par définition, \\(G_X(1) = E(1^X) = E(1) = 1\\). C'est la somme de toutes les probabilités : \\(G_X(1) = \\sum_k P(X = k) \\cdot 1^k = \\sum_k P(X = k) = 1\\). C'est une vérification utile : si vous calculez une fonction génératrice et que \\(G_X(1) \\neq 1\\), il y a une erreur. Pour l'espérance, on utilise \\(G_X'(1) = E(X)\\)."
  },
  {
    id: "e3a-q-proba-07",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "Si \\(X\\) et \\(Y\\) sont deux variables aléatoires indépendantes à valeurs dans \\(\\mathbb{N}\\), la loi de \\(X + Y\\) se calcule par :",
    choices: [
      "Addition des densités",
      "Multiplication des fonctions de répartition",
      "Convolution des lois",
      "Somme des espérances"
    ],
    correct: 2,
    explanation: "La loi de la somme de deux v.a. indépendantes se calcule par convolution : \\(P(X+Y = n) = \\sum_{k=0}^{n} P(X = k)\\, P(Y = n-k)\\). C'est la formule de convolution discrète. En continu, c'est l'intégrale de convolution des densités. La fonction génératrice simplifie souvent le calcul : \\(G_{X+Y}(s) = G_X(s) \\cdot G_Y(s)\\) (le produit des génératrices)."
  },
  {
    id: "e3a-q-proba-08",
    theme: "Probabilités",
    themeColor: "#4CAF50",
    question: "La suite \\((\\cos(n))_{n \\geq 1}\\) admet-elle une limite quand \\(n \\to +\\infty\\) ?",
    choices: [
      "Oui, elle tend vers \\(0\\)",
      "Oui, elle tend vers \\(1\\)",
      "Non, elle diverge mais reste bornée",
      "Non, elle n'est pas bornée"
    ],
    correct: 2,
    explanation: "La suite \\((\\cos(n))\\) ne converge pas. En effet, si elle convergeait vers \\(\\ell\\), alors \\(\\cos(n+1) - \\cos(n-1) = -2\\sin(1)\\sin(n) \\to 0\\), donc \\(\\sin(n) \\to 0\\), et alors \\(\\cos^2(n) + \\sin^2(n) = 1\\) donnerait \\(\\ell^2 = 1\\). Mais on montre que ni \\(\\ell = 1\\) ni \\(\\ell = -1\\) ne sont possibles (car \\(\\pi\\) est irrationnel, la suite \\((n \\mod 2\\pi)\\) est dense dans \\([0, 2\\pi]\\)). La suite est bornée (par \\(1\\)) mais ne converge pas : c'est un piège classique."
  },

  // ═══════════════════════════════════════════════
  //  ESPACES EUCLIDIENS (7 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-q-eucl-01",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "L'inégalité de Cauchy-Schwarz affirme que \\(|\\langle x, y \\rangle| \\leq \\ldots\\)",
    choices: [
      "\\(\\|x\\| + \\|y\\|\\)",
      "\\(\\|x\\| \\cdot \\|y\\|\\)",
      "\\(\\|x\\|^2 + \\|y\\|^2\\)",
      "\\(\\dfrac{\\|x\\|^2 + \\|y\\|^2}{2}\\)"
    ],
    correct: 1,
    explanation: "L'inégalité de Cauchy-Schwarz s'écrit \\(|\\langle x, y \\rangle| \\leq \\|x\\| \\cdot \\|y\\|\\). C'est l'une des inégalités les plus importantes de l'analyse et de l'algèbre. Elle permet de définir l'angle entre deux vecteurs : \\(\\cos \\theta = \\frac{\\langle x, y \\rangle}{\\|x\\| \\|y\\|}\\). Le choix A (\\(\\|x\\| + \\|y\\|\\)) correspond à l'inégalité triangulaire, qui est une conséquence de Cauchy-Schwarz."
  },
  {
    id: "e3a-q-eucl-02",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "Quand y a-t-il égalité dans l'inégalité de Cauchy-Schwarz \\(|\\langle x, y \\rangle| = \\|x\\| \\cdot \\|y\\|\\) ?",
    choices: [
      "Quand \\(x\\) et \\(y\\) sont orthogonaux",
      "Quand \\(\\|x\\| = \\|y\\|\\)",
      "Quand \\(x\\) et \\(y\\) sont colinéaires (ou l'un est nul)",
      "Toujours dans un espace de dimension \\(2\\)"
    ],
    correct: 2,
    explanation: "L'égalité dans Cauchy-Schwarz a lieu si et seulement si \\(x\\) et \\(y\\) sont colinéaires, c'est-à-dire liés (\\(\\exists \\lambda : x = \\lambda y\\) ou l'un des deux est nul). C'est le cas d'égalité, crucial dans beaucoup de démonstrations d'optimalité. Géométriquement, cela correspond à un angle \\(\\theta = 0\\) ou \\(\\theta = \\pi\\) entre les vecteurs."
  },
  {
    id: "e3a-q-eucl-03",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "Soit \\(E\\) un espace euclidien de dimension \\(n\\) et \\(F\\) un sous-espace vectoriel de \\(E\\). Que vaut \\(\\dim(F) + \\dim(F^\\perp)\\) ?",
    choices: [
      "\\(\\dim(F)\\)",
      "\\(n - 1\\)",
      "\\(n\\)",
      "\\(2n\\)"
    ],
    correct: 2,
    explanation: "C'est un résultat fondamental des espaces euclidiens : \\(\\dim(F) + \\dim(F^\\perp) = \\dim(E) = n\\), et on a la décomposition en somme directe orthogonale \\(E = F \\oplus F^\\perp\\). Cela signifie que tout vecteur \\(x \\in E\\) s'écrit de manière unique \\(x = x_F + x_{F^\\perp}\\) avec \\(x_F \\in F\\) et \\(x_{F^\\perp} \\in F^\\perp\\)."
  },
  {
    id: "e3a-q-eucl-04",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "Soit \\(F\\) un sous-espace vectoriel d'un espace euclidien \\(E\\) et \\(x \\in E\\). La projection orthogonale \\(p_F(x)\\) minimise :",
    choices: [
      "\\(\\|x\\|\\)",
      "\\(\\|x - y\\|\\) pour \\(y \\in F\\)",
      "\\(\\langle x, y \\rangle\\) pour \\(y \\in F\\)",
      "\\(\\|y\\|\\) pour \\(y \\in F\\)"
    ],
    correct: 1,
    explanation: "La projection orthogonale \\(p_F(x)\\) est l'unique élément de \\(F\\) le plus proche de \\(x\\) : \\(p_F(x) = \\arg\\min_{y \\in F} \\|x - y\\|\\). La distance de \\(x\\) à \\(F\\) est \\(d(x, F) = \\|x - p_F(x)\\|\\). C'est le théorème de la meilleure approximation. Le vecteur \\(x - p_F(x) \\in F^\\perp\\) est orthogonal à \\(F\\), ce qui est la caractérisation de la projection orthogonale."
  },
  {
    id: "e3a-q-eucl-05",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "L'application \\(\\langle P, Q \\rangle = \\displaystyle\\int_0^1 P(t)Q(t)\\, dt\\) définit-elle un produit scalaire sur \\(\\mathbb{R}_n[X]\\) ?",
    choices: [
      "Non, car elle n'est pas définie positive",
      "Non, car elle n'est pas symétrique",
      "Oui, c'est un produit scalaire",
      "Seulement si \\(n \\leq 2\\)"
    ],
    correct: 2,
    explanation: "On vérifie les quatre propriétés : (1) bilinéarité par linéarité de l'intégrale, (2) symétrie car \\(P(t)Q(t) = Q(t)P(t)\\), (3) positivité car \\(\\int_0^1 P(t)^2\\, dt \\geq 0\\), (4) définie : si \\(\\int_0^1 P(t)^2\\, dt = 0\\), alors \\(P\\) (continue, positive) est nulle sur \\([0,1]\\), et comme \\(P\\) est un polynôme de degré \\(\\leq n\\) ayant une infinité de zéros (tout \\([0,1]\\)), \\(P = 0\\). C'est l'exemple standard de produit scalaire sur un espace de polynômes."
  },
  {
    id: "e3a-q-eucl-06",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "Soit \\(u\\) un endomorphisme symétrique d'un espace euclidien. Les sous-espaces propres de \\(u\\) sont :",
    choices: [
      "Inclus les uns dans les autres",
      "De même dimension",
      "Deux à deux orthogonaux",
      "Tous de dimension \\(1\\)"
    ],
    correct: 2,
    explanation: "Si \\(u\\) est symétrique (\\(\\langle u(x), y \\rangle = \\langle x, u(y) \\rangle\\)) et \\(u(x) = \\lambda x\\), \\(u(y) = \\mu y\\) avec \\(\\lambda \\neq \\mu\\), alors \\(\\lambda \\langle x, y \\rangle = \\langle u(x), y \\rangle = \\langle x, u(y) \\rangle = \\mu \\langle x, y \\rangle\\). Donc \\((\\lambda - \\mu)\\langle x, y \\rangle = 0\\), et comme \\(\\lambda \\neq \\mu\\), on a \\(\\langle x, y \\rangle = 0\\). Les sous-espaces propres associés à des valeurs propres distinctes sont orthogonaux. C'est la raison pour laquelle les matrices symétriques sont orthogonalement diagonalisables."
  },
  {
    id: "e3a-q-eucl-07",
    theme: "Espaces euclidiens",
    themeColor: "#2196F3",
    question: "Soit \\((e_1, \\ldots, e_k)\\) une famille de vecteurs d'un espace euclidien. La matrice de Gram \\(G = (\\langle e_i, e_j \\rangle)_{i,j}\\) est définie positive si et seulement si :",
    choices: [
      "Les \\(e_i\\) sont tous de norme \\(1\\)",
      "Les \\(e_i\\) forment une famille orthogonale",
      "Les \\(e_i\\) forment une famille libre",
      "Les \\(e_i\\) forment une base orthonormée"
    ],
    correct: 2,
    explanation: "La matrice de Gram \\(G\\) est toujours symétrique positive. Elle est définie positive si et seulement si la famille \\((e_1, \\ldots, e_k)\\) est libre. En effet, pour \\(\\alpha = (\\alpha_1, \\ldots, \\alpha_k)^\\top\\) : \\(\\alpha^\\top G \\alpha = \\left\\|\\sum \\alpha_i e_i\\right\\|^2\\). Cela vaut \\(0\\) ssi \\(\\sum \\alpha_i e_i = 0\\), qui n'implique \\(\\alpha = 0\\) que si la famille est libre. C'est un critère très utile pour tester l'indépendance linéaire."
  },

  // ═══════════════════════════════════════════════
  //  CALCUL DIFFÉRENTIEL (5 questions)
  // ═══════════════════════════════════════════════

  {
    id: "e3a-q-diff-01",
    theme: "Calcul différentiel",
    themeColor: "#607D8B",
    question: "Soit \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) de classe \\(\\mathcal{C}^1\\). Un point \\(x_0\\) est un point critique de \\(f\\) si :",
    choices: [
      "\\(f(x_0) = 0\\)",
      "\\(\\nabla f(x_0) = 0\\)",
      "La hessienne de \\(f\\) en \\(x_0\\) est nulle",
      "\\(f\\) n'est pas dérivable en \\(x_0\\)"
    ],
    correct: 1,
    explanation: "Un point critique est un point où le gradient s'annule : \\(\\nabla f(x_0) = 0\\), c'est-à-dire \\(\\frac{\\partial f}{\\partial x_i}(x_0) = 0\\) pour tout \\(i\\). C'est une condition nécessaire d'extremum local (pour un point intérieur). Attention : \\(\\nabla f(x_0) = 0\\) ne garantit pas un extremum, il peut aussi s'agir d'un point selle. Il faut ensuite étudier la hessienne pour conclure."
  },
  {
    id: "e3a-q-diff-02",
    theme: "Calcul différentiel",
    themeColor: "#607D8B",
    question: "Soit \\(f : \\mathbb{R}^n \\to \\mathbb{R}\\) de classe \\(\\mathcal{C}^2\\) avec \\(\\nabla f(x_0) = 0\\). Si la matrice hessienne \\(H_f(x_0)\\) est définie positive, alors \\(x_0\\) est :",
    choices: [
      "Un maximum local",
      "Un minimum local",
      "Un point selle",
      "Un point d'inflexion"
    ],
    correct: 1,
    explanation: "C'est le critère du second ordre : si \\(\\nabla f(x_0) = 0\\) et \\(H_f(x_0)\\) est définie positive (toutes les valeurs propres sont \\(> 0\\)), alors \\(x_0\\) est un minimum local strict. Si \\(H_f(x_0)\\) est définie négative, c'est un maximum local. Si \\(H_f(x_0)\\) a des valeurs propres de signes différents, c'est un point selle. En dimension \\(1\\), \\(H_f\\) se réduit à \\(f''(x_0)\\), et on retrouve le critère habituel."
  },
  {
    id: "e3a-q-diff-03",
    theme: "Calcul différentiel",
    themeColor: "#607D8B",
    question: "Dans la méthode des multiplicateurs de Lagrange, on cherche les extrema de \\(f\\) sous la contrainte \\(g = 0\\). La condition \\(\\nabla f = \\lambda \\nabla g\\) fait intervenir un scalaire \\(\\lambda\\). Que représente-t-il ?",
    choices: [
      "La valeur de l'extremum",
      "La norme du gradient de \\(f\\)",
      "La sensibilité de la valeur optimale par rapport à la contrainte",
      "Le déterminant de la hessienne"
    ],
    correct: 2,
    explanation: "Le multiplicateur de Lagrange \\(\\lambda\\) mesure la sensibilité (ou \"prix fictif\") : si on remplace la contrainte \\(g = 0\\) par \\(g = \\varepsilon\\), la valeur optimale de \\(f\\) varie approximativement de \\(\\lambda \\varepsilon\\). Autrement dit, \\(\\lambda = \\frac{d f^*}{d\\varepsilon}\\) où \\(f^*\\) est le minimum sous \\(g = \\varepsilon\\). C'est une interprétation fondamentale en optimisation et en économie (coût marginal de la contrainte)."
  },
  {
    id: "e3a-q-diff-04",
    theme: "Calcul différentiel",
    themeColor: "#607D8B",
    question: "On minimise \\(f(x,y) = x^2 + y^2\\) sous la contrainte \\(x + y = 2\\). En quel point le minimum est-il atteint ?",
    choices: [
      "\\((0, 2)\\)",
      "\\((2, 0)\\)",
      "\\((1, 1)\\)",
      "\\((1/2, 3/2)\\)"
    ],
    correct: 2,
    explanation: "Par Lagrange : \\(\\nabla f = \\lambda \\nabla g\\) donne \\((2x, 2y) = \\lambda(1,1)\\), donc \\(x = y\\). Avec la contrainte \\(x + y = 2\\) : \\(x = y = 1\\). La valeur minimale est \\(f(1,1) = 2\\). On peut aussi le voir géométriquement : on cherche le point de la droite \\(x + y = 2\\) le plus proche de l'origine, qui est le projeté orthogonal. Par symétrie de \\(f\\) et de la droite, c'est \\((1,1)\\)."
  },
  {
    id: "e3a-q-diff-05",
    theme: "Calcul différentiel",
    themeColor: "#607D8B",
    question: "Quelle est la distance du point \\((0, 0, 0, 0)\\) au sous-espace affine \\(H = \\{(x,y,z,t) \\in \\mathbb{R}^4 : x + y = 2\\}\\) ?",
    choices: [
      "\\(1\\)",
      "\\(\\sqrt{2}\\)",
      "\\(2\\)",
      "\\(2\\sqrt{2}\\)"
    ],
    correct: 1,
    explanation: "L'hyperplan \\(H\\) a pour vecteur normal \\(n = (1, 1, 0, 0)\\) et passe par \\(A = (2, 0, 0, 0)\\) par exemple. La distance de l'origine à \\(H\\) est \\(d = \\frac{|\\langle \\overrightarrow{0A}, n \\rangle|}{\\|n\\|} = \\frac{|1 \\cdot 2 + 1 \\cdot 0|}{\\sqrt{1^2 + 1^2}} = \\frac{2}{\\sqrt{2}} = \\sqrt{2}\\). On peut aussi le retrouver en minimisant \\(x^2 + y^2 + z^2 + t^2\\) sous \\(x + y = 2\\) : par la question précédente, le min vaut \\(2\\), donc la distance est \\(\\sqrt{2}\\)."
  }
];
