# RAPPORT DE VERIFICATION — e3a PC 2015 Physique

## METADATA

| Champ | Valeur |
|---|---|
| Concours | E3A / Concours Communs Polytechniques |
| Annee | 2015 |
| Filiere | PC |
| Matiere | Physique (Modelisation de systemes physiques ou chimiques) |
| PDF source | `data/pdf-sujets/e3a-2015-PC-physique.pdf` (12 pages) |
| Enonce HTML | `cours/annales/e3a-pc-2015-physique.html` (493 lignes) |
| Correction HTML | `cours/annales/e3a-pc-2015-correction-physique.html` (1275 lignes) |
| Date verification | 2026-04-10 |
| Verificateur | Claude Opus 4.6 (zero-tolerance) |

### Comptage PDF original

| Element | Nombre |
|---|---|
| Pages sujet | 9 (pages 1-9, hors annexes) |
| Pages annexes | 3 (pages 10-12 : Scilab, numpy, matplotlib) |
| Parties | 2 (I : Etude preliminaire, II : Resolution numerique) |
| Sous-parties | 7 (I.A, I.B, I.C, II.A, II.B, II.C) |
| Questions totales PDF | 49 |
| Figures PDF | 2 (Figure 1 a+b, Figure 2) |

### Comptage HTML

| Element | Enonce HTML | Correction HTML |
|---|---|---|
| Questions | 49 | 46 |
| Figures (descriptions) | 3 (Fig 1a, Fig 1b, Fig 2 + matrice M) | 0 |

---

## ERREURS STRUCTURELLES

### S1 — CRITIQUE : 3 questions manquantes dans la correction

La correction contient 46 questions, l'enonce 49. Les 3 questions manquantes sont :

| # enonce | Ref PDF | Nature | Verdict |
|---|---|---|---|
| Q20 | II.B.2.j. | Texte introductif definissant la fonction `schema_explicite`, ses variables, la matrice `T_tous_k`, le critere d'arret. Ne pose pas directement de question a resoudre -- c'est un enonce de contexte pour les sous-questions (i) a (viii). | **ACCEPTABLE** -- question chapeau sans reponse attendue |
| Q32 | II.B.3.d. | Texte introductif presentant l'algorithme de Thomas (formules de c'_i, d'_i, u_i). Ne pose pas directement de question -- la question effective est II.B.3.d.(i). | **ACCEPTABLE** -- question chapeau sans reponse attendue |
| Q34 | II.B.3.e. | Texte introductif definissant la fonction `schema_implicite` (memes arguments que `schema_explicite`, memes criteres d'arret). La question effective est II.B.3.e.(i). | **ACCEPTABLE** -- question chapeau sans reponse attendue |

**Conclusion** : Les 3 "questions" manquantes sont en realite des enonces introductifs/chapeaux qui fournissent du contexte pour les sous-questions. Elles n'appellent pas de reponse calculee. L'absence de correction pour ces 3 items est **justifiee**. Cependant, pour la coherence du decompte affiche (si un compteur "49 questions" est montre a l'etudiant), il serait preferable de ne pas compter ces chapeaux comme des questions, ou d'ajouter un court paragraphe dans la correction rappelant le contexte.

### S2 — OK : Numerotation des questions

La numerotation dans l'enonce HTML suit fidelement le schema du PDF :
- Partie I : I.A.1, I.A.2, I.B.1, I.C.1, I.C.2, I.C.3
- Partie II : II.A.1, II.A.2, II.B.1.a, II.B.1.b, II.B.2.a-i, II.B.2.j.(i)-(viii), II.B.3.a-c, II.B.3.d.(i), II.B.3.e.(i)-(vii), II.C.1.a-e, II.C.2.a, II.C.3.a-b

Conforme au PDF.

### S3 — OK : Titres des parties et sous-parties

| PDF | Enonce HTML | Conforme |
|---|---|---|
| PARTIE I : ETUDE PRELIMINAIRE | Partie I : Etude preliminaire | OK |
| I.A. Equation gouvernant la temperature | I.A. Equation gouvernant la temperature | OK |
| I.B. Conditions aux limites | I.B. Conditions aux limites | OK |
| I.C. Solutions en regime permanent | I.C. Solutions en regime permanent | OK |
| PARTIE II : RESOLUTION NUMERIQUE | Partie II : Resolution numerique | OK |
| II.A. Equation a resoudre | II.A. Equation a resoudre | OK |
| II.B. Methode des differences finies | II.B. Methode des differences finies | OK |
| II.B.1. Discretisation dans l'espace et dans le temps | II.B.1. Discretisation ... | OK |
| II.B.2. Methode utilisant un schema explicite | II.B.2. Methode utilisant un schema explicite | OK |
| II.B.3. Methode utilisant un schema implicite | II.B.3. Methode utilisant un schema implicite | OK |
| II.C. Programme principal | II.C. Programme principal | OK |
| II.C.1. Debut du programme | II.C.1. Debut du programme | OK |
| II.C.2. Calcul des temperatures | II.C.2. Calcul des temperatures | OK |
| II.C.3. Analyse du resultat | II.C.3. Analyse du resultat | OK |

### S4 — OK : Figures

Les 2 figures du PDF (Figure 1 a+b et Figure 2) sont presentes dans l'enonce HTML sous forme de descriptions textuelles dans des blocs `annale-figure`. Ceci est conforme au format du site (pas d'images raster, descriptions accessibles).

### S5 — OK : Annexes

Les 3 annexes (A: Scilab, B: numpy, C: matplotlib) sont presentes dans l'enonce HTML et fideles au PDF.

---

## ERREURS DE RETRANSCRIPTION

### R1 — ERREUR CRITIQUE : Unite de la conductivite thermique (lambda)

| | Valeur |
|---|---|
| **PDF** | lambda = 1,65 W.m^{-1}.K^{-1} |
| **Enonce HTML** | lambda = 1,65 W.m^{-2}.K^{-1} |

**Localisation** : Ligne 62 du HTML enonce, dans le paragraphe introductif des donnees numeriques.

Le PDF indique clairement W.m^{-1}.K^{-1} (exposant -1 sur le metre). L'enonce HTML ecrit m^{-2} ce qui est dimensionnellement incorrect pour une conductivite thermique. L'unite W.m^{-2}.K^{-1} correspond a un coefficient de transfert thermique surfacique (h), pas a une conductivite.

**Note** : La correction HTML (ligne 89, bloc contexte) donne correctement W.m^{-1}.K^{-1} et signale dans un piege (ligne 1119) que c'est "vraisemblablement une coquille dans l'enonce". Cependant, l'examen du PDF original montre bien m^{-1} et non m^{-2}. C'est donc une erreur de retranscription dans l'enonce HTML, pas une coquille du sujet original.

**Action requise** : Corriger dans l'enonce HTML `m\(^{-2}\)` en `m\(^{-1}\)`.

### R2 — ERREUR MINEURE : Notation T_{ext}^1 vs T_{ext1}

| | Notation |
|---|---|
| **PDF** | T_{ext1} et T_{ext2} (indices en bas) |
| **Enonce HTML** | Mixte : utilise tantot T_{ext}^1 / T_{ext}^2 (exposants), tantot T_{ext1} / T_{ext2} (indices) |

Dans le paragraphe introductif (ligne 54 HTML), on lit `T_{ext} = 10` puis `T_{ext}^2 = -10` au lieu de `T_{ext2} = -10`. Le PDF utilise systematiquement les indices en bas : T_{ext1} et T_{ext2}. L'enonce HTML melange les deux notations.

Dans les conditions de l'equation (1) (lignes 127-129), l'HTML ecrit correctement `T_{ext2}` (indice bas), ce qui est conforme au PDF.

**Action recommandee** : Harmoniser la notation dans le paragraphe introductif pour utiliser T_{ext1} et T_{ext2} partout.

### R3 — ERREUR : Seuil de convergence (II.B.2.j.vii)

| | Valeur |
|---|---|
| **PDF** | 10^{-2} |
| **Enonce HTML** | 10^{-5} |

**Localisation** : Question II.B.2.j.(vii), ligne 263 du HTML enonce.

Le PDF (page 6) indique clairement que la boucle sera interrompue lorsque la norme 2 du vecteur T^k - T^{k-1} "deviendra inferieure a 10^{-2}". L'enonce HTML ecrit 10^{-5}.

**Note** : La meme erreur se repete dans la question II.B.3.e.(vi) (ligne 365 HTML) : 10^{-5} au lieu de 10^{-2}.

**Action requise** : Remplacer `10^{-5}` par `10^{-2}` dans les questions II.B.2.j.(vii) et II.B.3.e.(vi) de l'enonce HTML.

### R4 — ERREUR : Contenu de T_tous_k dans II.B.2.j. (matrice)

| | Contenu |
|---|---|
| **PDF** | Colonnes de T_tous_k : T^1, T^2, ..., T^k, ..., T^{k-1}, T^k (indices de 1 a k) |
| **Enonce HTML** | Colonnes : T^1, T^2, ..., T^{k+1}, ..., T^{ItMax} |

L'enonce HTML (ligne 226) ecrit dans la matrice `T_1^{k+1}` la ou le PDF montre `T_1^k`. Plus precisement, le PDF montre les exposants de colonne comme `1, 2, ..., k, ..., k-1, k` tandis que le HTML saute a `k+1` et `ItMax`. C'est une difference mineure de notation d'indexation des colonnes mais elle pourrait induire en confusion.

### R5 — OK AVEC RESERVE : Texte des questions

Verification question par question (echantillon exhaustif) :

| Question | Verdict | Detail |
|---|---|---|
| I.A.1 | OK | Texte fidele |
| I.A.2 | OK | Texte fidele |
| I.B.1 | OK | Texte fidele |
| I.C.1 | OK | Texte fidele (format en liste a puces conforme) |
| I.C.2 | OK | Texte fidele |
| I.C.3 | OK | Texte fidele |
| II.A.1 | OK | Texte fidele |
| II.A.2 | OK | Texte fidele |
| II.B.1.a | OK | Texte fidele |
| II.B.1.b | OK | Texte fidele |
| II.B.2.a | OK | Texte fidele |
| II.B.2.b | OK | Texte fidele |
| II.B.2.c | OK | Texte fidele |
| II.B.2.d | OK | Texte fidele |
| II.B.2.e | OK | Texte fidele |
| II.B.2.f | OK | Texte fidele |
| II.B.2.g | OK | Texte fidele |
| II.B.2.h | OK | Formule (2) et texte fideles |
| II.B.2.i | OK | Texte fidele |
| II.B.2.j.(i) | OK | Texte fidele |
| II.B.2.j.(ii) | OK | Texte fidele |
| II.B.2.j.(iii) | OK | Texte fidele |
| II.B.2.j.(iv) | OK | Texte fidele |
| II.B.2.j.(v) | OK | Texte fidele |
| II.B.2.j.(vi) | OK | Formule de la norme et texte fideles |
| II.B.2.j.(vii) | **ERREUR** | Seuil 10^{-5} au lieu de 10^{-2} (cf. R3) |
| II.B.2.j.(viii) | OK | Texte fidele |
| II.B.3.a | OK | Texte fidele |
| II.B.3.b | OK | Formule (3) fidele |
| II.B.3.c | OK | Texte fidele |
| II.B.3.d.(i) | OK | Texte fidele |
| II.B.3.e.(i) | OK | Texte fidele |
| II.B.3.e.(ii) | OK | Texte fidele |
| II.B.3.e.(iii) | OK | Texte fidele |
| II.B.3.e.(iv) | OK | Texte fidele |
| II.B.3.e.(v) | OK | Texte fidele |
| II.B.3.e.(vi) | **ERREUR** | Seuil 10^{-5} au lieu de 10^{-2} (cf. R3) |
| II.B.3.e.(vii) | OK | Texte fidele |
| II.C.1.a | OK | Texte fidele, toutes les variables mentionnees |
| II.C.1.b | OK | Texte fidele |
| II.C.1.c | OK | Texte fidele |
| II.C.1.d | OK | Texte fidele |
| II.C.1.e | OK | Texte fidele |
| II.C.2.a | OK | Texte fidele |
| II.C.3.a | OK | Texte fidele |
| II.C.3.b | OK | Texte fidele |

### R6 — OK : Formules mathematiques principales

| Formule | PDF | HTML | Conforme |
|---|---|---|---|
| Eq. (1) : a dT/dt = d2T/dx2 | OK | OK | OUI |
| Conditions T(0,t)=Tint, T(e,t)=Text2, T(x,0)=ax+b | OK | OK | OUI |
| Eq. (2) schema explicite | OK | OK | OUI |
| Eq. (3) schema implicite | OK | OK | OUI |
| Eq. (4) M T^{k+1} = T^k + r v | OK | OK | OUI |
| Eq. (5) M u = d | OK | OK | OUI |
| Algorithme de Thomas (c'_i, d'_i, u_i) | OK | OK | OUI |
| Norme 2 | OK | OK | OUI |

### R7 — OK : Donnees numeriques

| Donnee | PDF | HTML | Conforme |
|---|---|---|---|
| e = 40 cm | 40 cm | 40 cm | OUI |
| lambda = 1,65 | 1,65 | 1,65 | OUI (valeur OK, unite NON cf. R1) |
| c_p = 1 000 J.kg^{-1}.K^{-1} | 1 000 | 1 000 | OUI |
| rho = 2 150 kg.m^{-3} | 2 150 | 2 150 | OUI |
| T_int = 20 C | 20 | 20 | OUI |
| T_ext1 = 10 C | 10 | 10 | OUI |
| T_ext2 = -10 C | -10 | -10 | OUI |
| N = 60 | 60 | 60 | OUI |
| dt = 25 s | 25 | 25 | OUI |
| ItMax = 2 000 | 2 000 | 2 000 | OUI |

---

## ERREURS DE CITATION (Phase 3)

Verification des blocs `.corr-question__statement` dans la correction par rapport a l'enonce.

### C1 — OK : Pas de paraphrase detectee

Toutes les citations dans la correction (blocs `.corr-question__statement`) reproduisent fidelement le texte des questions de l'enonce HTML. Aucune reformulation, aucune paraphrase, aucune invention de question.

Echantillon verifie (exhaustif) :

| Question | Enonce HTML | Citation correction | Fidele ? |
|---|---|---|---|
| I.A.1 | "A quelle condition peut-on supposer que la temperature ne depend pas des coordonnees y et z ?" | Identique | OUI |
| I.A.2 | "Donner l'equation generale qui decrit le transport de chaleur..." | Identique | OUI |
| I.B.1 | "Traduire chacune de ces conditions aux limites..." | Identique | OUI |
| I.C.1 | "Resoudre l'equation obtenue a la question I.A.2..." | Identique | OUI |
| II.B.2.h | "Montrer que l'equation obtenue..." avec formule (2) | Identique | OUI |
| II.B.2.j.(vii) | Texte de la boucle... | Identique (mais avec le meme seuil 10^{-5} errone) | OUI (coherent enonce-correction, erreur propagee des deux cotes) |
| II.C.1.a | Long texte avec toutes les variables... | Identique | OUI |
| II.C.3.b | "Faire afficher le temps en heures..." | Identique | OUI |

### C2 — NOTE : Seuil de convergence propage

Le seuil errone de 10^{-5} (cf. R3) est present de maniere coherente dans l'enonce ET la correction. L'erreur par rapport au PDF est propagee identiquement dans les deux fichiers. La correction est donc fidele a l'enonce HTML (meme si les deux divergent du PDF).

---

## ERREURS PHYSIQUES (Phase 4)

### P1 — OK : Coherence dimensionnelle de a = rho*cp/lambda

- rho*cp/lambda = [kg.m^{-3}] * [J.kg^{-1}.K^{-1}] / [W.m^{-1}.K^{-1}]
- = [J.m^{-3}.K^{-1}] / [W.m^{-1}.K^{-1}]
- = [W.s.m^{-3}.K^{-1}] / [W.m^{-1}.K^{-1}]
- = s.m^{-2}

Conforme : a a la dimension d'un temps par surface, l'inverse de la diffusivite.

### P2 — OK : Application numerique de a

a = 2150 * 1000 / 1.65 = 1.303 * 10^6 s.m^{-2}. La correction donne 1,303 * 10^6. Conforme.

### P3 — OK : Application numerique de r

dx = 0.4 / 61 = 6.557 * 10^{-3} m
r = 25 / (1.303 * 10^6 * (6.557 * 10^{-3})^2) = 25 / (1.303 * 10^6 * 4.30 * 10^{-5}) = 25 / 56.0 = 0.446

La correction donne r ≈ 0,446. Conforme. Et bien r < 0.5 (schema explicite stable).

### P4 — OK : Profils de temperature en regime permanent

- T1(x) = 20 - 25x : T1(0) = 20, T1(0.4) = 10. Correct.
- T2(x) = 20 - 75x : T2(0) = 20, T2(0.4) = -10. Correct.

### P5 — OK : Estimation du temps caracteristique

tau ~ e^2 / alpha_diff = (0.4)^2 / (1.65 / (2150*1000)) = 0.16 / (7.67 * 10^{-7}) = 2.09 * 10^5 s ≈ 58 h. Conforme.

### P6 — OK : Algorithme de Thomas

Les formules de l'algorithme de Thomas dans la correction sont conformes a celles du PDF et mathematiquement correctes. L'implementation Python respecte les formules.

### P7 — OK : Pas d'erreur KaTeX detectee

Les formules KaTeX dans les deux fichiers utilisent une syntaxe standard (delimiteurs `\(` `\)` et `\[` `\]`). Pas de commandes KaTeX non supportees detectees. Les `\boxed{}`, `\dfrac{}{}`, `\begin{pmatrix}`, `\bigg|` sont tous valides.

### P8 — NOTE : Commentaire sur la coquille unite dans la correction

La correction (piege a la question II.C.1.a, ligne 1119) signale que l'enonce donne W.m^{-2}.K^{-1} alors que la bonne unite est W.m^{-1}.K^{-1}. C'est exact mais la source de l'erreur est la retranscription HTML, pas le PDF original qui donne bien m^{-1}. Le commentaire pedagogique est correct mais devrait preciser que c'est une erreur de retranscription, pas du sujet officiel.

---

## BILAN

### Statistiques

| Categorie | Nb erreurs | Critiques | Mineures |
|---|---|---|---|
| Structure | 1 | 0 | 1 (3 questions-chapeau non corrigees, acceptable) |
| Retranscription | 4 | 1 | 3 |
| Citations | 0 | 0 | 0 |
| Physique | 0 | 0 | 0 |
| **TOTAL** | **5** | **1** | **4** |

### Erreurs a corriger (par priorite)

| Priorite | Ref | Description | Fichier | Action |
|---|---|---|---|---|
| **P0 CRITIQUE** | R1 | Unite lambda : m^{-2} au lieu de m^{-1} | enonce HTML L62 | Remplacer `m\(^{-2}\)` par `m\(^{-1}\)` |
| **P1** | R3 | Seuil 10^{-5} au lieu de 10^{-2} (x2) | enonce HTML L263, L365 | Remplacer `10^{-5}` par `10^{-2}` |
| **P1** | R3bis | Meme seuil dans correction | correction HTML L752, L1043 | Remplacer `10^{-5}` par `10^{-2}` |
| **P2** | R2 | Notation T_{ext}^2 au lieu de T_{ext2} dans l'intro | enonce HTML L54 | Harmoniser notation en T_{ext1}, T_{ext2} |
| **P2** | P8 | Piege II.C.1.a dit "coquille dans l'enonce" alors que c'est une erreur de retranscription | correction HTML L1119 | Reformuler le piege ou corriger R1 (ce qui rend le piege obsolete) |
| **P3** | R4 | Indexation colonnes T_tous_k legerement differente | enonce HTML L226 | Verifier si c'est intentionnel |

### Note globale

La retranscription est globalement de bonne qualite. Les formules mathematiques, la numerotation, la structure et les donnees numeriques sont fideles au PDF original. Les 3 "questions manquantes" dans la correction sont justifiees (questions-chapeaux sans reponse attendue). Les erreurs identifiees sont au nombre de 5, dont 1 critique (unite de lambda) et 2 erreurs de seuil de convergence. Aucune erreur de citation ni de physique dans les corrections.
