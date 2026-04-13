# RAPPORT DE VERIFICATION -- e3a PC 2018 Physique

## METADATA

| Champ | Valeur |
|---|---|
| PDF source | `data/pdf-sujets/e3a-2018-PC-physique.pdf` |
| Enonce HTML | `cours/annales/e3a-pc-2018-physique.html` |
| Correction HTML | `cours/annales/e3a-pc-2018-correction-physique.html` |
| Date de verification | 2026-04-10 |
| Verificateur | Claude Opus (zero-tolerance) |

### Comptage PDF original
- **Nombre total de questions** : 42 (Q1 a Q42)
- **Schema de numerotation** : Q1, Q2, ..., Q42 (numerotation continue)
- **Nombre de figures** : 5 (Figure 1 a Figure 5)
- **Parties** :
  - Partie I -- Modelisation du reacteur ferme parfaitement agite avec double enveloppe
    - I.1 -- Etalonnage thermique du reacteur (Q1-Q7)
    - I.2 -- Etude d'une reaction exothermique en reacteur ferme a double enveloppe (Q8-Q17)
    - I.3 -- Stabilite thermique du reacteur (Q18-Q20)
  - Partie II -- Traitement numerique des donnees experimentales
    - II.1 -- Determination des parametres d'un modele par regression lineaire (Q21-Q26)
    - II.2 -- Prediction du comportement thermique du reacteur (Q27-Q42)
  - Annexe : Fonctions de Python (numpy, matplotlib.pyplot, fonctions intrinseques)
- **Pages** : 18 (sujet pages 1-14, annexe pages 15-18)

### Comptage HTML enonce
- Questions presentes : Q1 a Q42 (42 questions) -- **OK**
- Figures presentes : Figure 1 a Figure 5 (5 figures, en descriptions textuelles) -- **OK**
- Sections : toutes presentes -- **OK**
- Annexe Python : presente avec numpy, matplotlib.pyplot, fonctions intrinseques -- **OK**

### Comptage HTML correction
- Questions corrigees : Q1 a Q42 (42 questions) -- **OK**

---

## ERREURS STRUCTURELLES

### ES-01 -- ERREUR : Temperature de Seveso incorrecte
- **Localisation** : Enonce HTML, ligne 63, paragraphe Seveso
- **PDF** : "a une temperature voisine de 150 degC"
- **HTML** : "a une temperature voisine de 159 degC"
- **Gravite** : MOYENNE (valeur numerique factuelle alteree)

### ES-02 -- ERREUR : Noms de matrices Q23/Q24 incoherents avec le PDF
- **Localisation** : Enonce HTML, Q23 (ligne 272) et Q24 (ligne 277)
- **PDF** : Q23 demande "la matrice P = L^t x L", Q24 demande "la matrice Q = L^t x Y"
- **HTML** : Q23 ecrit "P = U^t x L", Q24 ecrit "Q = U^t x Y"
- **Gravite** : ELEVEE -- Le PDF utilise clairement la lettre L pour la matrice (definie juste au-dessus). Le HTML a substitue "U^t" au lieu de "L^t". Cela cree une confusion avec le coefficient de transfert thermique U de la Partie I. Le PDF est sans ambiguite : c'est L^t.
- **Note** : La correction (ligne 624-645) signale cette confusion dans un encadre "piege" mais la bonne retranscription doit etre P = L^t L et Q = L^t Y comme dans le PDF.

### ES-03 -- ERREUR : Q26 - Nom de matrice incoherent
- **Localisation** : Enonce HTML, Q26 (ligne 287)
- **PDF** : "On note N la matrice inverse de M"
- **HTML** : "On note N la matrice inverse de M" -- texte identique, mais dans la correction (ligne 691), il est ecrit "N la matrice inverse de P", ce qui corrige effectivement le contexte. L'enonce du PDF dit bien "M" mais dans le contexte du calcul moindres carres, c'est la matrice P = L^t L qui est inversee. Le sujet original utilise "M" comme nom generique dans l'enonce de Q25-Q26.
- **Gravite** : FAIBLE (suit le PDF)

### ES-04 -- OK STRUCTUREL
- Toutes les 42 questions sont presentes et numerotees correctement dans l'enonce HTML.
- Toutes les 42 questions sont corrigees dans la correction HTML.
- Les 5 figures sont presentes sous forme de descriptions textuelles (pas d'images).
- L'annexe Python est complete avec numpy, matplotlib.pyplot et fonctions intrinseques.

---

## ERREURS DE RETRANSCRIPTION

### ER-01 -- ERREUR : Temperature Seveso
- Deja rapportee en ES-01 : 150 degC (PDF) vs 159 degC (HTML)

### ER-02 -- ERREUR : "2,4,5-trichloro-phenol" vs "2,4,5-trichlorophenol"
- **PDF** : "2,4,5-trichloro-phenol" (avec tiret)
- **HTML** : "2,4,5-trichlorophenol" (sans tiret, ligne 63)
- **Gravite** : MINEURE (nomenclature chimique, les deux formes existent)

### ER-03 -- ERREUR : "1,2,4,5-tetrachloro-benzene" vs "1,2,4,5-tetrachlorobenzene"
- **PDF** : "1,2,4,5-tetrachloro-benzene" (avec tiret)
- **HTML** : "1,2,4,5-tetrachlorobenzene" (sans tiret, ligne 63)
- **Gravite** : MINEURE (nomenclature chimique)

### ER-04 -- Accents et caracteres speciaux systematiquement absents
- **PDF** : Texte avec accents francais normaux (e accent aigu, e accent grave, etc.)
- **HTML** : Tous les accents sont supprimes systematiquement dans le texte : "reacteur" au lieu de "reacteur", "temperature" au lieu de "temperature", etc.
- **Gravite** : FAIBLE -- C'est une convention deliberee du site (probable choix technique). Coherent dans tout le fichier. Pas une erreur de retranscription a proprement parler mais un choix de style.

### ER-05 -- OK : Equation (1)
- **PDF** : `(rho x V x Cp) dT/dt = P_th - U x A x (T - T_p)`
- **HTML** : `(\rho \times V \times C_p) \frac{dT}{dt} = P_{th} - U \times A \times (T - T_p)` (ligne 102)
- **Statut** : CONFORME

### ER-06 -- OK : Equation (2)
- **PDF** : `dT/dt = s + (T_p - T)/tau_c`
- **HTML** : `\frac{dT}{dt} = s + \frac{T_p - T}{\tau_c}` (ligne 124)
- **Statut** : CONFORME

### ER-07 -- OK : Q3 Valeurs numeriques
- **PDF** : T_p = 320,0 K, rho = 1 000,0 kg.m^-3, V = 0,1 x 10^-3 m^3, C_p = 1 800,0 J.kg^-1.K^-1, P_th = 96,0 W, A = 8,0 x 10^-3 m^2
- **HTML** : Memes valeurs (ligne 118)
- **Statut** : CONFORME

### ER-08 -- OK : Q7 Equation de la droite
- **PDF** : y = -1,33 x 10^-2 x x + 3,68
- **HTML** : `y = -1{,}33 \times 10^{-2} \times x + 3{,}68` (ligne 142)
- **Statut** : CONFORME

### ER-09 -- OK : Equation (3)
- **PDF** : S(t, X_R, T) = -Delta_r H^0(T) x r(t, X_R, T) x V
- **HTML** : `S(t, X_R, T) = -\Delta_r H^0(T) \times r(t, X_R, T) \times V` (ligne 194)
- **Statut** : CONFORME

### ER-10 -- OK : Equation (4)
- **PDF** : dT/dt = J dX_R/dt - (T - T_p)/tau_c = J dX_R/dt + (T_p - T)/tau_c
- **HTML** : `\frac{dT}{dt} = J \frac{dX_R}{dt} + \frac{T_p - T}{\tau_c}` (ligne 207)
- **Statut** : CONFORME (signe correct avec T_p - T)

### ER-11 -- OK : Q17 Valeurs numeriques
- **PDF** : Delta_r H^0 = -360,0 kJ.mol^-1, rho = 1 000,0 kg.m^-3, C_p = 1 800,0 J.kg^-1.K^-1, C_R^0 = 500,0 mol.m^-3
- **HTML** : Memes valeurs (ligne 218)
- **Statut** : CONFORME

### ER-12 -- OK : Q37 Parametres numeriques
- **PDF** : dt = 0,01 s, k_0 = 5,0 s^-1, E_a = 20 000,0 J.mol^-1, J = 100,0 K, tau_c = 75 s, R = 8,314 J.K^-1.mol^-1
- **HTML** : Memes valeurs (ligne 383)
- **Statut** : CONFORME

### ER-13 -- OK : Q39 Valeurs initiales et seuil
- **PDF** : X_{Ri+1}^0 = 0,5, T_{i+1}^0 = T_p + J/2, seuil 10^-5 K
- **HTML** : "0,5 et T_p + J/2", seuil "10^{-3} K" (ligne 393)
- **ERREUR** : Le PDF dit 10^{-5}, le HTML dit 10^{-3}
- **Gravite** : ELEVEE -- La precision du critere d'arret est modifiee d'un facteur 100.

### ER-14 -- OK : Equation (5)
- **PDF** : y_i = beta_1_hat x x_i + beta_0_hat
- **HTML** : `y_i = \widehat{\beta_1} \times x_i + \widehat{\beta_0}` (ligne 254)
- **Statut** : CONFORME

### ER-15 -- OK : Equation (6), (7), (8), (9)
- Toutes conformes entre PDF et HTML.
- **Statut** : CONFORME

### ER-16 -- OK : Q42 Parametres de simulation
- **PDF** : k_0 = 5,0 s^-1, E_a = 20 000,0 J.mol^-1, J = 100,0 K, tau_c = 75 s
- **HTML** : Memes valeurs (ligne 410)
- **Statut** : CONFORME

### ER-17 -- ERREUR : Figure 5 description des temperatures
- **PDF** : Figure 5 graphe du haut montre temperature allant jusqu'a ~338 K (ordonnee 320-338)
- **HTML** : description dit "de 320 a 356" (ligne 416)
- **Gravite** : FAIBLE (description textuelle d'une figure, valeurs approximatives de lecture graphique; la correction mentionne ~355 K ce qui est plus proche de la realite simulee)

---

## ERREURS DE CITATION (Correction)

Verification systematique de chaque `.corr-question__statement` dans la correction par rapport a l'enonce HTML.

### EC-01 -- Q1 : CONFORME
- Enonce : "Interpreter concretement chacun des trois termes du bilan d'energie en precisant leur signification physique et verifier qu'ils sont homogenes aux puissances."
- Citation correction : identique

### EC-02 -- Q2 : CONFORME
- Texte identique entre enonce et citation correction.

### EC-03 -- Q3 : CONFORME
- Texte et valeurs numeriques identiques.

### EC-04 -- Q4 : CONFORME
- Texte identique, equation (2) correctement citee.

### EC-05 -- Q5 : CONFORME

### EC-06 -- Q6 : CONFORME

### EC-07 -- Q7 : CONFORME

### EC-08 -- Q8 : CONFORME

### EC-09 -- Q9 : CONFORME

### EC-10 -- Q10 : CONFORME

### EC-11 -- Q11 : CONFORME

### EC-12 -- Q12 : CONFORME

### EC-13 -- Q13 : CONFORME
- Texte identique, y compris "marche quelconque, c'est-a-dire non isotherme".

### EC-14 -- Q14 : CONFORME

### EC-15 -- Q15 : CONFORME
- Citation correcte incluant la longue phrase sur les capacites thermiques.

### EC-16 -- Q16 : CONFORME

### EC-17 -- Q17 : CONFORME
- Valeurs numeriques correctement citees.

### EC-18 -- Q18 : CONFORME

### EC-19 -- Q19 : CONFORME

### EC-20 -- Q20 : CONFORME

### EC-21 -- Q21 : CONFORME

### EC-22 -- Q22 : CONFORME

### EC-23 -- Q23 : ATTENTION
- Citation correction (ligne 624) : "P = L^t x L"
- Enonce HTML (ligne 272) : "P = U^t x L"
- La correction CORRIGE l'enonce HTML (utilise L^t L comme dans le PDF). C'est incoherent : l'enonce HTML devrait etre corrige pour correspondre au PDF.

### EC-24 -- Q24 : ATTENTION
- Meme probleme que Q23 : correction dit "L^t x Y", enonce HTML dit "U^t x Y".

### EC-25 -- Q25 : CONFORME

### EC-26 -- Q26 : CONFORME
- Citation : "N la matrice inverse de P" (correction) vs "N la matrice inverse de M" (enonce). La correction a adapte le contexte de facon coherente car P est effectivement la matrice a inverser dans le calcul.

### EC-27 a EC-42 : CONFORME
- Toutes les citations Q27 a Q42 sont fideles au texte de l'enonce HTML.

### EC-SPECIAL -- Q39 : INCOHERENCE CRITIQUE
- Enonce HTML cite le seuil "10^{-3} K" dans la correction (ligne 945)
- PDF original dit "10^{-5} K"
- La correction et l'enonce HTML sont coherents entre eux (tous deux disent 10^{-3}) mais sont en desaccord avec le PDF. Cf. ER-13.

---

## ERREURS PHYSIQUES

### EP-01 -- OK : Coherence dimensionnelle Q1
- Verification des trois termes du bilan : W = W = W. Correct.

### EP-02 -- OK : Application numerique Q3
- U = P_th / (A x (T-T_p)) = 96,0 / (8,0e-3 x 40) = 96/0,32 = 300 W.m^-2.K^-1
- **Correct** dans la correction.

### EP-03 -- OK : Application numerique tau_c (Q4)
- tau_c = rho V C_p / (U A) = 1000 x 0,1e-3 x 1800 / (300 x 8e-3) = 180/2,4 = 75 s
- **Correct**.

### EP-04 -- OK : Application numerique Q7
- tau_c = 1/1,33e-2 = 75,2 s. Coherent avec Q4.
- U = rho V Cp / (tau_c x A) = 180 / (75,2 x 8e-3) = 180/0,6016 = 299 W.m^-2.K^-1
- **Correct** (coherent avec 300 a l'arrondi pres).

### EP-05 -- OK : Dimension de J (Q16)
- [J] = J.mol^-1 x mol.m^-3 / (kg.m^-3 x J.kg^-1.K^-1) = K
- **Correct**.

### EP-06 -- OK : Application numerique J (Q17)
- J = 360000 x 500 / (1000 x 1800) = 1,8e8 / 1,8e6 = 100 K
- **Correct**.

### EP-07 -- OK : Stabilite Q20
- T_f = 320 + 100 = 420 K > T_max = 1,25 x 320 = 400 K
- Conclusion : reacteur instable en adiabatique. **Correct**.

### EP-08 -- OK : Derivees de la Jacobienne Q36
- d/dT(e^{-Ea/RT}) = (Ea/RT^2) e^{-Ea/RT} -- signe correct (pas de moins).
- dg1/dXr = 1 + dt K -- correct (derive de X - X_i - dt K(1-X) par rapport a X donne 1 + dt K).
- dg1/dT = -dt K (1-X) Ea/(RT^2) -- correct.
- dg2/dXr = dt J K -- correct (signe : le terme est -dt J K (1-X), derive par rapport a X donne +dt J K).
- dg2/dT = 1 + dt/tau_c - dt J K (1-X) Ea/(RT^2) -- correct.
- **Toutes les derivees sont correctes**.

### EP-09 -- OK : Pas d'erreur KaTeX detectee
- Toutes les formules KaTeX utilisent la syntaxe correcte.
- Les delimiteurs \(...\) et \[...\] sont correctement apparies.
- Les commandes \frac, \exp, \left, \right, \boxed sont standard KaTeX.
- Pas de commande inconnue detectee.

### EP-10 -- AVERTISSEMENT : Constante de gaz parfaits dans la correction Q37
- La correction (ligne 893 et code Q37) utilise "R = 8,314 J.K^-1.mol^-1", ce qui est correct.
- Le code utilise `R` comme nom de variable, ce qui est aussi le symbole du reactif dans l'enonce. Pas d'ambiguite dans le code mais pourrait preter a confusion. C'est conforme au PDF.

---

## BILAN

### Statistiques

| Categorie | Nombre | Critiques | Elevees | Moyennes | Faibles |
|---|---|---|---|---|---|
| Erreurs structurelles | 2 | 0 | 1 | 1 | 0 |
| Erreurs de retranscription | 4 | 0 | 1 | 1 | 2 |
| Erreurs de citation | 2 | 0 | 0 | 2 | 0 |
| Erreurs physiques | 0 | 0 | 0 | 0 | 0 |
| **TOTAL** | **8** | **0** | **2** | **4** | **2** |

### Liste des corrections a effectuer (par priorite)

#### PRIORITE HAUTE
1. **ES-02 / EC-23-24** : Q23 et Q24 -- Remplacer "U^t" par "L^t" dans l'enonce HTML. Le PDF dit clairement P = L^t x L et Q = L^t x Y. L'utilisation de "U" cree une confusion avec le coefficient de transfert thermique.
2. **ER-13** : Q39 -- Le seuil d'arret Newton-Raphson est 10^{-5} K dans le PDF, mais 10^{-3} K dans l'enonce HTML et la correction. Corriger les deux fichiers pour mettre 10^{-5}.

#### PRIORITE MOYENNE
3. **ES-01 / ER-01** : Temperature de Seveso -- Corriger "159 degC" en "150 degC" dans l'enonce HTML (ligne 63).

#### PRIORITE FAIBLE
4. **ER-02/ER-03** : Nomenclature chimique -- Retablir les tirets dans "2,4,5-trichloro-phenol" et "1,2,4,5-tetrachloro-benzene" pour correspondre au PDF.
5. **ER-17** : Description Figure 5 -- La plage de temperature decrite (320-356) pourrait etre ajustee pour correspondre au graphique du PDF (320-338 sur l'echelle visible).

### Points positifs
- Les 42 questions sont presentes et correctement numerotees.
- L'integralite de la structure (parties, sous-parties, sections) est respectee.
- Toutes les equations numerotees (1) a (9) sont correctement retranscrites.
- Toutes les valeurs numeriques des applications numeriques sont correctes (sauf le seuil Q39).
- L'annexe Python est complete et fidele.
- Les citations dans la correction sont fideles a l'enonce HTML (pas de paraphrase detectee).
- Toutes les formules KaTeX sont syntaxiquement correctes.
- Toute la physique de la correction est dimensionnellement coherente et numeriquement exacte.
- Les figures sont decrites en texte alt de facon adequate.
