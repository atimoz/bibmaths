# RAPPORT DE VERIFICATION — E3A PC 2016 Physique

## METADATA

| Champ | Valeur |
|---|---|
| Concours | E3A / Concours Communs Polytechniques |
| Filiere | PC |
| Annee | 2016 |
| Epreuve | Modelisation de systemes physiques ou chimiques |
| Duree | 4 h |
| Reference | PCMS006 |
| PDF source | `data/pdf-sujets/e3a-2016-PC-physique.pdf` (16 pages) |
| Enonce HTML | `annales/e3a-pc-2016-physique.html` |
| Correction HTML | `annales/e3a-pc-2016-correction-physique.html` |
| Date verification | 2026-04-10 |

---

## STRUCTURE DU SUJET (PDF)

### Parties et sections
- **I. Presentation du probleme** (pas de questions)
- **II. Modelisation des phenomenes**
  - II.1 Cas ou le solvant ne contient pas le reactif B : Q1.1 a Q1.10 (10 questions)
  - II.2 Cas ou le reactif B est present dans le solvant : Q2.1 a Q2.7 (7 questions)
- **III. Traitement numerique des donnees experimentales**
  - III.1 Determination de la valeur du produit kL x a : Q3.1 (intro), Q3.1.a, Q3.1.b, Q3.2, Q3.3 (intro), Q3.3.a, Q3.3.b, Q3.3.c, Q3.4, Q3.5, Q3.6
  - III.2 Determination des valeurs de a et kL : Q3.7, Q3.8 (intro), Q3.8.a, Q3.8.b, Q3.8.c, Q3.8.d, Q3.8.e, Q3.8.f, Q3.9, Q3.10, Q3.11
  - III.3 Utilisation du modele pour realiser des simulations : Q3.12, Q3.13, Q3.14, Q3.15
- **Annexe A** : Commandes Scilab
- **Annexe B** : Fonctions Python (B.1 numpy, B.2 matplotlib, B.3 intrinseque)

### Nombre de questions
- **PDF** : 43 questions (en comptant Q3.1, Q3.3 et Q3.8 comme des questions introductives distinctes, et les sous-questions Q3.1.a, Q3.1.b, Q3.3.a-c, Q3.8.a-f comme des questions a part entiere)
- **Enonce HTML** : 43 questions (OK)
- **Correction HTML** : 40 questions

### Figures du PDF
- Figure 1 : Colonne d'absorption (page 2)
- Figure 2 : Reacteur de laboratoire (page 3)
- Figure 3 : Interface gaz-liquide detaillee (page 4)
- Figure 4 : Interface gaz-liquide simplifiee (page 5)
- Figure 5 : Reacteur 2e experience (page 6)
- Figure 6 : Transformations Nelder-Mead (page 9)
- Figure 7 : Tri par selection (page 10)
- Tableau 1 : Donnees experimentales (page 7)
- Total : **7 figures + 1 tableau**

---

## ERREURS STRUCTURELLES

### ERR-S1 [CRITIQUE] — 3 questions manquantes dans la correction

La correction contient 40 questions. Les 3 questions manquantes sont :

| Question | Nature | Description dans le PDF |
|---|---|---|
| **Q3.1** | Question introductive | Presentation du fichier data.txt, description des colonnes (temps, debit exp1, debit exp2), donnees du Tableau 1. Ce n'est pas une question a proprement parler mais un enonce factuel precisant le contexte avant Q3.1.a et Q3.1.b |
| **Q3.3** | Question introductive | Presentation de l'algorithme de Nelder-Mead et de ses etapes (reflexion, etirement, contraction). Pas de question directe, mais contexte essentiel pour Q3.3.a-c |
| **Q3.8** | Question introductive | Presentation de la methode d'Euler a pas fixe. Rappel de t0, tf, Delta t. Pas de question directe, contexte pour Q3.8.a-f |

**Diagnostic** : Ces 3 items sont des blocs d'enonce qui posent le contexte mais ne contiennent pas de question directe (pas de "Ecrire...", "Donner...", "Calculer..."). L'enonce HTML les a retranscrits comme des `<section class="question">` a part entiere (ce qui gonfle le compte a 43), alors que la correction les a logiquement omis car il n'y a rien a corriger. **Le decompte de la correction (40) est correct**. L'enonce HTML devrait idealement ne pas traiter Q3.1, Q3.3 et Q3.8 comme des questions mais comme du texte introductif de section.

### ERR-S2 [MINEUR] — Numerotation des `id` dans l'enonce HTML

Les id des sections `<section class="question">` dans l'enonce HTML sont numerotes Q1 a Q43 de maniere sequentielle (id="Q1" pour Q1.1, id="Q2" pour Q1.2, etc.) au lieu de refleter la numerotation du sujet (id="Q1.1", id="Q1.2", etc.). Cela fonctionne mais n'est pas semantique.

---

## ERREURS DE RETRANSCRIPTION (ENONCE HTML vs PDF)

### ERR-R1 [ERREUR] — "triphasique" au lieu de "biphasique"

- **PDF (page 2)** : "Le reacteur de laboratoire utilise est un reacteur **biphasique** gaz-liquide."
- **Enonce HTML (ligne 78)** : "Le reacteur de laboratoire utilise est un reacteur **triphasique** gaz-liquide."
- **Impact** : Erreur factuelle. Le reacteur ne contient que 2 phases (gaz et liquide), pas 3. Le PDF dit bien "biphasique".

### ERR-R2 [ERREUR] — "dans les conditions de fonctionnement" — mot manquant

- **PDF (page 2)** : "...on realise une etude dans un reacteur de laboratoire **dont** les conditions de fonctionnement sont beaucoup plus simples..."
- **Enonce HTML (ligne 78)** : "...on realise une etude dans un reacteur de laboratoire **dans les** conditions de fonctionnement sont beaucoup plus simples..."
- **Impact** : Phrase agrammaticale. Le "dont" a ete remplace par "dans les" ce qui casse la syntaxe.

### ERR-R3 [ERREUR] — "Ptot" absent

- **PDF (page 2)** : "la pression totale $P_{tot}$ est egale a la pression partielle de A, notee $P_A$"
- **Enonce HTML** : Ce passage mentionne directement "la pression totale est egale a la pression partielle" sans introduire la notation $P_{tot}$ explicitement.
- **Impact** : Mineur, la notation Ptot n'est pas utilisee ensuite, mais c'est une omission.

### ERR-R4 [ERREUR] — Q3.1 donnees du Tableau 1 : valeur 1.8993 vs 1.8991

- **PDF (page 7, Tableau 1, ligne t=20.0, 3e colonne)** : 1.8991E-04
- **Enonce HTML (ligne 234)** : 1.8993E-04
- **Impact** : Donnee experimentale alteree. Ecart de 0.01% sur un point, mais c'est une erreur de retranscription.

### ERR-R5 [ATTENTION] — Q3.3 formule de C2 dans l'enonce

- **PDF (page 8)** : $x_{C_2} = x_M + 1/2 (x_M - x_N)$
- **Enonce HTML (ligne 270)** : $x_{C_2} = x_M + 1/2\,(x_M - x_N)$ -- identique
- **Observation** : La formule du PDF est elle-meme ambigue/erronee. Si C2 est l'homothetie de rapport -1 de centre M du point C1, et que $x_{C_1} = x_N + 1/2(x_M - x_N)$, alors $x_{C_2} = 2x_M - x_{C_1} = 2x_M - x_N - 1/2(x_M - x_N) = x_M + 1/2(x_M - x_N)$. La formule est la meme que C1 dans le PDF ce qui semble etre une coquille du sujet original. L'enonce HTML reproduit fidelement la coquille du PDF, ce qui est correct.

### ERR-R6 [ERREUR] — Q3.3.c : ecart relatif

- **PDF (page 9)** : "l'ecart relatif $abs\left(\frac{x_M - x_N}{x_M}\right)$" (denominateur $x_M$)
- **Enonce HTML (ligne 296)** : "l'ecart relatif $abs\left(\frac{x_M - x_N}{x_N}\right)$" (denominateur $x_N$)
- **Impact** : Formule modifiee. Le denominateur est $x_M$ dans le PDF mais $x_N$ dans le HTML. La correction reprend la version HTML ($x_N$).

### ERR-R7 [ERREUR] — Q3.3.c : valeur initiale $x_N^0$

- **PDF (page 9)** : "$x_N^0 = 10^{-5}$"
- **Enonce HTML (ligne 296)** : "$x_N^0 = 10^5$" (positif, sans le signe moins)
- **Impact** : Erreur de signe dans l'exposant. 10^{-5} vs 10^5 changent completement le segment initial.

### ERR-R8 [MINEUR] — Q3.11 unite de a_opt

- **PDF (page 12)** : "$a_{opt} = 10{,}0$ m$^2$.m$^{-3}$" (m^2 par m^3)
- **Enonce HTML (ligne 392)** : "$a_{opt} = 10{,}0$ m$^2$.m$^{-1}$" (m^2 par m^1)
- **Impact** : Unite incorrecte. L'unite correcte de l'aire interfaciale volumique est m^2.m^{-3} = m^{-1}, donc "m^2.m^{-1}" est faux (cela donnerait m, ce qui n'a pas de sens). Le PDF dit bien m^2.m^{-3}.

### ERR-R9 [MINEUR] — Q3.14 : "a_L" au lieu de "k_L"

- **PDF (page 12)** : "a l'aide du modele et des parametres optimises ($k_L$ et $a$)"
- **Enonce HTML (ligne 411)** : "des parametres optimises ($a_L$ et $a$)"
- **Impact** : Typo. $a_L$ n'existe pas dans le sujet, il s'agit de $k_L$.

### ERR-R10 [MINEUR] — Tableau 1 : ligne "..." et presentation

- **PDF (page 7)** : Les 6 lignes de donnees sont presentees sequentiellement sans interruption.
- **Enonce HTML (ligne 237)** : Une ligne "... ... ..." est inseree entre t=40 et t=50, ce qui n'existe pas dans le PDF original (les 6 lignes se suivent sans ellipse).

### ERR-R11 [MINEUR] — Annexe Scilab : "readl" au lieu de "read"

- **PDF (page 14)** : La fonction s'appelle `read("nom_fichier",m,n)`
- **Enonce HTML (ligne 445)** : `readl("nom_fichier",m,n)` avec un "l" supplementaire.

### ERR-R12 [MINEUR] — Annexe Scilab : x_trans=x'

- **PDF (page 13)** : `x_trans=x'` (avec un signe = correctement place)
- **Enonce HTML (ligne 434)** : `x_transx'` (le = est manquant, fusion des mots)

---

## ERREURS DE CITATION (CORRECTION HTML)

Verification des `.corr-question__statement` par rapport a l'enonce.

### ERR-C1 [OK mais attention] — Q1.1 : citation partielle

Le statement de la correction pour Q1.1 ne reprend que la question finale ("Calculer la valeur..."). Le contexte (loi de Henry, interface, pression) est omis. C'est acceptable car le contexte est dans l'enonce, mais la citation est tronquee par rapport au texte complet de la question.

### ERR-C2 [OK] — Q1.2 a Q1.10

Les statements dans la correction reprennent fidelelement la partie "question" de chaque enonce (la consigne, pas le contexte). Les formules sont identiques. Aucune paraphrase detectee.

### ERR-C3 [OK] — Q2.1 a Q2.7

Statements conformes. Pas de paraphrase.

### ERR-C4 [ATTENTION] — Q2.1 : citation tronquee

- **Enonce complet** : Texte detaille avec concentration CB0, hypotheses sur le reactif B, figure 5, volume constant, concentration initiale nulle, PUIS "Le bilan de matiere sur la phase gazeuse est-il modifie ? Justifier."
- **Correction statement** : "Le bilan de matiere sur la phase gazeuse est-il modifie ? Justifier." (seulement la question finale)
- **Impact** : Acceptable. Le contexte est dans l'enonce consultable a cote.

### ERR-C5 [ATTENTION] — Q2.2 : citation tronquee

Le statement de la correction ne reprend que "Indiquer la dimension de $r_{app}$. Preciser son unite dans le systeme SI." sans l'expression de $r_{app}$. L'etudiant doit se referer a l'enonce pour la formule complete. Acceptable mais l'information est perdue si on lit la correction seule.

### ERR-C6 [OK] — Q3.1.a a Q3.15

Les statements sont conformes a la partie "question" de chaque enonce. Pas de reformulation.

### ERR-C7 [ATTENTION] — Q3.8.a : statement simplifie

Le statement de la correction simplifie le texte original en omettant les details sur le pas 100 fois plus petit et la discretisation. La simplification est acceptable mais perd du contexte.

### ERR-C8 [ERREUR] — Q1.8 : reference dans le statement

- **Enonce** : "Verifier que $C_A$ evolue bien de la maniere prevue a la question **Q1.3)**, page 4."
- **Correction statement** : "Verifier que $C_A$ evolue bien de la maniere prevue a la question Q1.3)." (sans "page 4")
- **Impact** : Negligeable, la reference a la page n'est pas necessaire dans un contexte HTML.

---

## ERREURS PHYSIQUES / QUALITE

### ERR-P1 [OK] — Loi de Henry Q1.1

La correction donne $C_A^* = P_A^*/H = 1.0/26.0 = 3.85 \times 10^{-2}$ mol/L = 38.5 mol/m^3. Calcul correct. Conversion L -> m^3 correcte.

### ERR-P2 [OK] — Analyse dimensionnelle Q1.2

m.s^{-1} x m^{-1} x mol.m^{-3} x m^3 = mol.s^{-1}. Correct.

### ERR-P3 [OK] — Expression de F_A Q1.9

$F_A = k_L a C_A^* V_{liq} e^{-k_La t}$. Coherent avec le bilan Q1.4 et la solution Q1.7.

### ERR-P4 [OK] — Dimension de r_app Q2.2

$[r_{app}]$ = m^{-1} x mol.m^{-3} x m.s^{-1} = mol.m^{-3}.s^{-1}. Correct.

### ERR-P5 [OK] — Systeme EDO Q2.7

Le systeme couple est physiquement coherent : A est apporte par transfert et consomme par reaction, B est seulement consomme par reaction.

### ERR-P6 [OK] — Schema d'Euler Q3.8.e-f

$C_{A,j+1} = C_{A,j} + \Delta t \cdot g(t_j, C_{A,j}, C_{B,j}, a, k_La)$ -- schema d'Euler explicite standard. Correct.

### ERR-P7 [OK] — Calcul de k_L Q3.11

$k_L = (k_L a)_{opt} / a_{opt} = 5.0 \times 10^{-3} / 10.0 = 5.0 \times 10^{-4}$ m/s. Correct.

### ERR-P8 [ATTENTION] — Correction Q3.3.b : formule de C2

La correction donne `xC2 = xM - 0.5 * (xM - xN)`. Si on developpe : $x_{C_2} = x_M - \frac{1}{2}(x_M - x_N) = \frac{1}{2}x_M + \frac{1}{2}x_N = x_N + \frac{1}{2}(x_M - x_N) = x_{C_1}$. Or $C_2$ est cense etre l'image de $C_1$ par homothetie de centre M et de rapport -1, donc $x_{C_2} = 2x_M - x_{C_1}$. Avec $x_{C_1} = x_M + \frac{1}{2}(x_M - x_N) = \frac{3}{2}x_M - \frac{1}{2}x_N$, on obtient $x_{C_2} = 2x_M - \frac{3}{2}x_M + \frac{1}{2}x_N = \frac{1}{2}x_M + \frac{1}{2}x_N$. Cela correspond bien au milieu de [N,M]. Toutefois, le PDF donne la meme formule que pour C1 ($x_{C_2} = x_M + 1/2(x_M - x_N)$), ce qui est une erreur du sujet original. La correction interprete correctement l'homothetie malgre la coquille du PDF.

### ERR-P9 [OK] — Methode des trapezes Q3.15

Formule correcte : $n_A = \sum_{j=0}^{m-1} \frac{F_A(t_j) + F_A(t_{j+1})}{2} \Delta t$. Implementation conforme.

### ERR-P10 [OK] — Pas d'erreur KaTeX detectee

Les formules LaTeX dans les deux fichiers HTML utilisent la syntaxe KaTeX standard. Les delimiteurs `\(` `\)` et `$$` sont correctement utilises. Pas de formule cassee detectee.

---

## BILAN

### Resume quantitatif

| Categorie | Nb total | Critiques | Erreurs | Mineurs |
|---|---|---|---|---|
| Structurelles | 2 | 1 (3 Q manquantes corr) | 0 | 1 |
| Retranscription | 12 | 0 | 6 | 6 |
| Citation | 8 | 0 | 1 | 7 |
| Physique | 10 | 0 | 0 | 1 |
| **TOTAL** | **32** | **1** | **7** | **15** |

### Les 3 questions "manquantes" dans la correction

**Q3.1, Q3.3, Q3.8** -- Ce sont des blocs de contexte/introduction qui ne posent pas de question directe. L'enonce HTML les compte comme des questions (ce qui donne 43), mais la correction les omet legitimement (donnant 40). **Le decompte de la correction est correct.** L'enonce HTML devrait reclasser ces 3 blocs comme du texte introductif, pas comme des `<section class="question">`.

### Erreurs prioritaires a corriger

1. **ERR-R1** : "triphasique" -> "biphasique" (erreur factuelle)
2. **ERR-R2** : "dans les conditions" -> "dont les conditions" (syntaxe cassee)
3. **ERR-R7** : $x_N^0 = 10^5$ -> $x_N^0 = 10^{-5}$ (erreur de signe critique pour l'algorithme)
4. **ERR-R6** : denominateur de l'ecart relatif $x_N$ -> $x_M$ (incoherent avec le PDF)
5. **ERR-R4** : donnee Tableau 1 1.8993 -> 1.8991 (donnee experimentale alteree)
6. **ERR-R8** : unite a_opt m^2.m^{-1} -> m^2.m^{-3} (unite physique incorrecte)
7. **ERR-R9** : $a_L$ -> $k_L$ (typo)
8. **ERR-S1** : Reclasser Q3.1, Q3.3, Q3.8 comme texte introductif dans l'enonce HTML
