## Rapport de verification : E3A PC 2014 Physique

### METADATA
- Pages PDF : 10 (1 page de garde + 9 pages de sujet)
- Questions PDF : 47 (A1-A3, B1-B8, C1-C8, D1-D9, E1-E3, F1-F9, G1-G15)
- Questions Enonce HTML : 47 | Correction HTML : 47
- Figures PDF : 2 (Figure 1 : cylindre fuselage, Figure 2 : schema climatisation)
- Figures Enonce HTML : 2 (descriptions textuelles)
- Parties PDF : 4 | Enonce HTML : 4 | Correction HTML : 4

### ERREURS STRUCTURELLES

1. **E1 et E2 fusionnees puis separees a tort dans l'enonce HTML**
   - PDF : La question E1 demande "evaluer numeriquement la puissance P" et la question E2 demande "Faut-il chauffer ou refroidir la cabine". Ce sont deux questions distinctes.
   - Enonce HTML (ligne 272) : La question E1 fusionne les deux enonces en un seul paragraphe : "Avec les hypotheses precedemment posees, evaluer numeriquement la puissance P traduisant le bilan thermique global pour l'air contenu dans la cabine. Faut-il chauffer ou refroidir la cabine pour la maintenir a temperature constante ?"
   - Enonce HTML (ligne 277) : Puis une question E2 separee reprend uniquement "Faut-il chauffer ou refroidir la cabine pour la maintenir a temperature constante ?"
   - Type : ERREUR MODEREE -- E1 contient le texte de E2, et E2 est dupliquee.

2. **Question F5 : erreur de notation dans l'enonce HTML**
   - PDF : "Determiner la temperature T_C, en utilisant la relation etablie en F1."
   - Enonce HTML (ligne 330) : "Determiner la temperature T_1, en utilisant la relation etablie en F1."
   - Type : ERREUR CRITIQUE -- Dans le PDF, F5 demande T_C (temperature a la sortie de la vanne de detente, voie 2). L'enonce HTML l'a remplacee par T_1 qui est une autre grandeur (temperature en sortie de l'echangeur, voie 1). Ce sont deux grandeurs physiques distinctes.
   - Note : La correction HTML (ligne 857) reprend l'erreur en parlant de T_O (qui correspond a T_C du PDF). La correction donne la bonne physique (detente de Joule-Thomson) mais la citation de l'enonce est erronee.

3. **Question G10 : fusion de deux sous-questions**
   - PDF : G10 commence par "En deduire la relation de dispersion reliant le module k du vecteur d'onde et la pulsation omega de l'onde se propageant dans le plasma." C'est une question distincte de la verification de compatibilite.
   - Enonce HTML (lignes 413-416) : Fusionne la demande de rappel de l'equation de propagation dans le vide, la verification de compatibilite, ET la relation de dispersion en une seule question G10. Le PDF separe clairement : la premiere partie de G9 demande l'equation de propagation dans le plasma, la seconde partie de G9 demande le rappel dans le vide + compatibilite. Puis G10 demande la relation de dispersion.
   - Enonce HTML : Regroupe le rappel dans le vide + compatibilite + relation de dispersion sous G10, tandis que G9 ne contient que l'equation de propagation + le rappel vectoriel.
   - Type : ERREUR MODEREE -- Le decoupage des sous-questions entre G9 et G10 est modifie.

4. **Absence d'accents dans l'enonce HTML**
   - PDF : Utilise les accents francais (Evaluer, Ecrire, Etablir, Decrire, etc.)
   - Enonce HTML : Systematiquement sans accents (Evaluer, Ecrire, Etablir, Decrire, etc.)
   - Concerne l'integralite du document.
   - Type : ERREUR MINEURE systematique -- Il s'agit d'un choix delibere de l'encodage mais ce n'est pas fidele au PDF.

5. **Table des matieres dans l'enonce HTML : erreur de plage pour partie 3**
   - Enonce HTML (ligne 57) : "E1 a F9"
   - PDF : Les questions vont effectivement de E1 a F9. Correct.
   - (Verifie, pas d'erreur ici.)

### ERREURS DE RETRANSCRIPTION

#### Partie 1 -- Phenomenes physiques dominants

6. **Question B5 : notation des puissances**
   - PDF : Utilise les notations d(script-P)_e pour la puissance entrante et d(script-P)_s pour la sortante, puis d(script-P)_1 pour la puissance recue par conduction.
   - Enonce HTML (ligne 115) : Utilise d^2 P_1 pour l'entrante et d^2 P_2 pour la sortante (indices 1 et 2 au lieu de e et s dans la premiere partie). La notation globale utilise d^2P au lieu de dP.
   - PDF : "la puissance d(script-P)_e entrante par conduction thermique" et "la puissance d(script-P)_s sortante par conduction thermique"
   - Enonce HTML : "la puissance d^2 P_1 entrant par conduction thermique" et "la puissance d^2 P_2 sortant par conduction thermique"
   - Type : ERREUR MODEREE -- Les indices changent (e/s -> 1/2) et la notation d^2P n'est pas standard pour un differentiel simple.

7. **Question B6 : notation de la puissance de convection**
   - PDF : Utilise d(script-P)_2 pour la puissance recue par convection.
   - Enonce HTML (ligne 123) : Utilise d^2 P' (avec prime) pour la meme grandeur.
   - Type : ERREUR MODEREE -- La notation change entre le PDF (indice 2) et le HTML (prime).

8. **Question B7 : rapport des puissances**
   - PDF : |d(script-P)_2 / d(script-P)_1|
   - Enonce HTML (ligne 128) : d^2 P' / d^2 P (sans valeur absolue dans l'enonce HTML, alors que le PDF utilise des barres de valeur absolue)
   - Type : ERREUR MINEURE -- Absence des barres de valeur absolue.

9. **Section C intro : inversion T_S et T_FL**
   - PDF : "phi = h(T_S - T_FL) Sigma, ou T_S est la temperature du solide a sa surface en contact avec le fluide, T_FL la temperature du fluide et Sigma la surface de contact"
   - Enonce HTML (ligne 137) : "phi = h(T_S - T_infty) Sigma, ou T_S la temperature du fluide, T_infty la temperature du solide a sa surface en contact avec le fluide"
   - Type : ERREUR CRITIQUE -- Les definitions de T_S et T_infty sont INVERSEES dans l'enonce HTML. De plus, le PDF utilise T_FL pour la temperature du fluide, pas T_infty. L'enonce HTML dit que T_S est la temperature du fluide alors que c'est celle du solide.

10. **Section C intro : notation T_FL -> T_infty**
    - PDF : Utilise systematiquement T_FL pour la temperature du fluide.
    - Enonce HTML : Utilise T_infty partout a la place de T_FL.
    - Type : ERREUR MODEREE -- Changement de notation coherent mais pas fidele au PDF.

11. **Question C1 : expression de h**
    - PDF : "h = alpha (lambda/L) (Pe)^p (Re)^q, ou alpha est un nombre pur"
    - Enonce HTML (ligne 139) : "h = a (lambda/L) (Pe)^p (Re)^q, ou a est un nombre pur"
    - Type : ERREUR MINEURE -- alpha remplace par "a".

12. **Question C2 : loi experimentale**
    - PDF : "selon une loi en v^{1/2} lambda^{2/3}"
    - Enonce HTML (ligne 144) : "selon une loi en v^{1/2} lambda^{2/3}"
    - Correct, pas d'erreur.

13. **Question C4 : notation R_T -> R_e**
    - PDF : "En deduire la resistance thermique R_T de l'ensemble"
    - Enonce HTML (ligne 162) : "En deduire la resistance thermique R_e de l'ensemble"
    - Type : ERREUR MODEREE -- R_T (PDF) remplacee par R_e (HTML). Ce sont des notations differentes.

14. **Question C6 : notation dans la formule**
    - PDF : dT/dx = -(Bi/E) * (T_0 - T_FL)/(1+Bi)
    - Enonce HTML (ligne 175) : dT/dx = -(Bi/E) * (T_0 - T_infty)/(1+Bi)
    - Type : ERREUR MODEREE -- T_FL remplace par T_infty (coherent avec le changement systematique note au point 10).

15. **Question C7 : description des cas limites**
    - PDF : "pour Bi << 1, puis pour Bi >> 1"
    - Enonce HTML (ligne 180) : "pour Bi = 1, puis pour Bi >> 1"
    - Type : ERREUR CRITIQUE -- Le PDF demande Bi << 1, l'enonce HTML demande Bi = 1. Ce sont deux cas physiquement differents.

#### Partie 2 -- Echanges thermiques du fuselage

16. **Texte introductif : notation T_MA -> T_Mh**
    - PDF : "La temperature moyenne de l'atmosphere, compte tenu des couches situees a grande distance de l'avion, est notee T_MA"
    - Enonce HTML (ligne 201) : Utilise T_Mh
    - Type : ERREUR MODEREE -- Changement de notation (MA -> Mh).

17. **Texte figure 1 : angle theta ajoute**
    - PDF Figure 1 : Le schema montre un cylindre avec R_INT, e, L. Pas d'angle theta visible.
    - Enonce HTML (ligne 195) : La description mentionne "Un angle theta est indique sur la section circulaire droite."
    - Type : ERREUR MINEURE -- L'angle theta n'est pas present sur la figure du PDF.

18. **Question D4 : notation puissance solaire**
    - PDF : P_solaire = 2 R_EXT L epsilon phi_S
    - Enonce HTML (ligne 224) : Utilise la meme formule avec script-P (P_solaire).
    - Correct.

19. **Question D6 : valeur de T_MA**
    - PDF : "T_MA = 290 K"
    - Enonce HTML (ligne 239) : "T_Mh = 290 K"
    - Type : ERREUR MODEREE -- Meme changement de notation que le point 16, coherent.

20. **Question D7 : logarithme**
    - PDF : "Donnee : Ln(5,6/5,3) ~ 5.10^{-2}"
    - Enonce HTML (ligne 246) : "Donnee : ln(5,6/5,3) ~ 5.10^{-2}"
    - Type : Pas d'erreur significative (Ln vs ln est une convention).

21. **Question D7 : valeur du bilan radiatif**
    - PDF : "le terme lie au bilan radiatif a pour valeur numerique : 6.10^5 W"
    - Enonce HTML (ligne 247) : "~ 6.10^5 W"
    - Correct.

#### Partie 3 -- Climatisation et pressurisation

22. **Question E1/E2 : voir erreur structurelle #1 ci-dessus**
    - Repetition du probleme de fusion/duplication.

23. **Question F1 : notation des puissances**
    - PDF : "D_m(h_S - h_E) = p_mec + p_th"
    - Enonce HTML (ligne 291) : Meme notation. Correct.

24. **Question F2 : notation**
    - PDF : "h_0 (dependant d'une convention sur l'origine des enthalpies, qu'il n'est pas demande d'expliciter)"
    - Enonce HTML (ligne 296) : Correct, meme texte.

25. **Question F3 : notation T_K -> T_S**
    - PDF : "Evaluer numeriquement le debit massique D_m de l'air injecte a cette temperature T_K pour compenser le bilan thermique P de la cabine evalue a la question E1."
    - Enonce HTML (ligne 302) : Utilise T_S au lieu de T_K : "a cette temperature T_S pour compenser..."
    - Type : ERREUR CRITIQUE -- Le PDF utilise T_K = 289 K (temperature de l'air injecte dans la cabine), l'enonce HTML utilise T_S. Or T_S = 273 K est la temperature en sortie de turbine (voie 1). Ce n'est PAS la meme grandeur.

26. **Question F5 : voir erreur structurelle #2 ci-dessus**
    - PDF demande T_C, HTML demande T_1.

27. **Donnees numeriques : T_K et T_S dans la figure 2**
    - PDF Figure 2 : L'air vers la cabine est a T_K = 289 K
    - Enonce HTML (lignes 314-318) : L'air vers la cabine est a T_K = 289 K. Correct dans la description de figure.
    - Mais les questions utilisent T_S au lieu de T_K (voir erreur #25).

28. **Question F5 dans la correction : citation erronee**
    - PDF : "Determiner la temperature T_C"
    - Correction HTML (ligne 857) : Statement dit "Determiner la temperature T_O"
    - Type : ERREUR MODEREE -- Ni T_C (PDF) ni T_1 (enonce HTML) n'est utilise ; la correction invente une 3e notation T_O.

#### Partie 4 -- Suivi de la trajectoire de l'avion

29. **Texte introductif GPS : notation t_i -> t_e**
    - PDF : "A l'instant t_i, le satellite numero i emet un signal indiquant tres precisement l'heure d'emission t_i et les coordonnees (x_i, y_i, z_i)"
    - Enonce HTML (ligne 359) : "A l'instant t_e, le satellite numero i emet un signal indiquant tres precisement l'heure d'emission t_e"
    - Type : ERREUR MODEREE -- t_i (PDF, indice lie au satellite) remplace par t_e (HTML, indice "emission"). C'est un changement de convention qui modifie le sens (t_i identifie le satellite, t_e identifie l'action).

30. **Question G1 : notation du temps**
    - PDF : "l'equation reliant les grandeurs x_j, y_j, z_j, x, y, z, t_i, t_a et c"
    - Enonce HTML (ligne 364) : "l'equation reliant les grandeurs x_i, y_i, z_i, x, y, z, t_e, t_r et c"
    - Type : ERREUR MODEREE -- Indices j -> i, t_i -> t_e, t_a -> t_r. Changement de convention complet.

31. **Question G3 : altitude de l'avion**
    - PDF : "alors qu'un avion vole a 6 km d'altitude" (attention: il est ecrit "a 6 km" dans le PDF)
    - Enonce HTML (ligne 374) : "alors qu'un avion vole a 5 km d'altitude"
    - Type : ERREUR CRITIQUE -- La valeur numerique 6 km (PDF) a ete remplacee par 5 km (HTML). C'est un ecart numerique.

32. **Question G6 : enonce**
    - PDF : "Rappeler les equations de Maxwell dans un tel milieu."
    - Enonce HTML (ligne 393) : "Rappeler les equations de Maxwell dans un tel milieu et indiquer celles qui pourront etre negligees ou prises en compte."
    - Type : ERREUR MODEREE -- L'enonce HTML fusionne G6 du PDF (rappeler les equations) avec la deuxieme partie de G7 du PDF (indiquer celles negligees). Le texte ajoute "et indiquer celles qui pourront etre negligees ou prises en compte" qui n'est pas dans le texte de G6 du PDF mais dans G7.

33. **Question G8 : notation vitesse electron**
    - PDF : "l'expression de la vitesse v (souligne) d'un electron" (le v est souligne, pas vecteur)
    - Enonce HTML (ligne 403) : Utilise \vec{v} (vecteur v fleche)
    - Type : ERREUR MINEURE -- Le PDF utilise un soulignement pour la notation complexe, l'HTML utilise une fleche vectorielle.

34. **Question G8 : notation densite de courant**
    - PDF : "la densite volumique de courant J (souligne)"
    - Enonce HTML (ligne 403) : Utilise \vec{j}
    - Type : ERREUR MINEURE -- J majuscule souligne (PDF) vs j minuscule avec fleche (HTML).

35. **Question G9 : rappel vectoriel**
    - PDF : "Rappel de la relation vectorielle : rot(rot C) = grad(div C) - Delta C"
    - Enonce HTML (lignes 409-410) : Presente le rappel comme un texte en italique a l'interieur de G9.
    - Correct dans le contenu.

36. **Question G11 : notation omega_p -> omega_0**
    - PDF : "une valeur omega_p dont l'expression sera ecrite en fonction de n et de constantes physiques"
    - Enonce HTML (ligne 420) : Utilise omega_0 au lieu de omega_p.
    - Type : ERREUR MODEREE -- omega_p (pulsation plasma, notation standard) remplacee par omega_0.

### ERREURS DE CITATION (correction vs enonce)

37. **Question E1 dans la correction**
    - Enonce HTML : "Avec les hypotheses precedemment posees, evaluer numeriquement la puissance P traduisant le bilan thermique global pour l'air contenu dans la cabine. Faut-il chauffer ou refroidir la cabine pour la maintenir a temperature constante ?"
    - Correction (ligne 732) : Citation identique a l'enonce HTML (incluant la fusion E1+E2). Fidele a l'enonce HTML mais pas au PDF.
    - Type : ERREUR -- La correction reprend l'enonce HTML fusionne, pas le PDF.

38. **Question F2 dans la correction**
    - Enonce HTML : "Exprimer l'enthalpie massique h d'un gaz parfait en fonction de sa temperature T, de sa masse molaire M, de R et d'une constante h_0 (dependant d'une convention sur l'origine des enthalpies, qu'il n'est pas demande d'expliciter)."
    - Correction (ligne 810-811) : "Exprimer l'enthalpie massique h d'un gaz parfait en fonction de sa temperature T, de sa masse molaire M, de R et d'une constante h_0."
    - Type : ERREUR MINEURE -- La correction tronque la parenthese "(dependant d'une convention sur l'origine des enthalpies, qu'il n'est pas demande d'expliciter)".

39. **Question F3 dans la correction**
    - Enonce HTML (F3) : "Evaluer numeriquement le debit massique D_m de l'air injecte a cette temperature T_S pour compenser le bilan thermique P de la cabine evalue a la question E1."
    - Correction (ligne 823) : "Evaluer numeriquement le debit massique D_m de l'air injecte a cette temperature T_S pour compenser le bilan thermique P de la cabine evalue a la question E1."
    - Fidele a l'enonce HTML. Mais le PDF dit T_K, pas T_S (voir erreur #25). La correction propage l'erreur.

40. **Question F5 dans la correction**
    - Enonce HTML (F5) : "Determiner la temperature T_1, en utilisant la relation etablie en F1."
    - Correction (ligne 857) : "Determiner la temperature T_O, en utilisant la relation etablie en F1."
    - Type : ERREUR CRITIQUE -- La correction ne cite pas fidlement l'enonce HTML. L'enonce dit T_1, la correction dit T_O, et le PDF dit T_C. Trois notations differentes pour la meme question.

41. **Question G10 dans la correction**
    - Enonce HTML (G10) : Contient la demande de rappeler l'equation dans le vide ET la relation de dispersion.
    - Correction (ligne 1182) : La citation reprend l'integralite de la question fusionnee. Fidele a l'enonce HTML.

42. **Question G3 dans la correction**
    - Correction (ligne 1029) : Statement cite "5 km d'altitude"
    - PDF : "6 km d'altitude"
    - La correction propage l'erreur de l'enonce HTML (5 km au lieu de 6 km).

43. **Toutes les citations de la correction** utilisent la notation T_infty la ou le PDF utilise T_FL. Coherent avec l'enonce HTML mais pas avec le PDF.

### ERREURS PHYSIQUES

44. **Question G3 : valeur numerique de l'altitude de l'avion**
    - PDF : 6 km, Enonce HTML : 5 km
    - Impact physique : L'ordre de grandeur de la distance satellite-avion est domine par l'altitude du satellite (20 000 km), donc le changement 6->5 km n'a aucun impact significatif sur le resultat (la difference est negligeable). Pas d'erreur dans le resultat final.
    - Severite : MINEURE (pas d'impact sur le calcul)

45. **Verification dimensionnelle des resultats encadres de la correction**
    - Re = rho V L / eta : [kg.m^-3][m.s^-1][m] / [Pa.s] = [kg.m^-1.s^-1] / [kg.m^-1.s^-1] = sans dim. CORRECT.
    - Pe = rho c v L / lambda : [kg.m^-3][J.kg^-1.K^-1][m.s^-1][m] / [W.m^-1.K^-1] = [W.m^-2] * [m^2] / [W] = sans dim. CORRECT.
    - Bi = E*h/lambda_S : [m][W.m^-2.K^-1] / [W.m^-1.K^-1] = sans dim. CORRECT.
    - Phi = 2 pi lambda_C L (T_INT - T_EXT) / ln(R_EXT/R_INT) : [W.m^-1.K^-1][m][K] / [1] = W. CORRECT.
    - omega_0 = sqrt(ne^2 / epsilon_0 m) : [m^-3 * C^2] / [F.m^-1 * kg] = [s^-2]. CORRECT (racine donne s^-1 = rad/s).

46. **Verification d'applications numeriques (au moins 5)**
    - AN D7 (Phi) : 2*pi*0.03*60*59 / 0.05 = 2*pi*106.2/0.05 = 667/0.05 = 13 340 W ~ 13 kW. CORRECT.
    - AN D7 (P_cc) : 20*2*pi*5.6*60*14 = 20*2*pi*4704 = 20*29558 ~ 5.9*10^5 W. CORRECT.
    - AN D9 (Bi) : (293-234)/(234-220) = 59/14 ~ 4.2. CORRECT.
    - AN F3 (D_m) : 7500/(1000*4) = 1.875 ~ 2 kg/s. CORRECT.
    - AN F6 (x) : (289-520)/(273-520) = -231/-247 ~ 0.935. CORRECT.
    - AN G3 (Delta t) : 2*10^7 / 3*10^8 = 0.067 s ~ 70 ms. CORRECT.
    - AN G4 (delta d) : 3*10^8 * 10^-6 = 300 m. CORRECT.

47. **Erreurs KaTeX potentielles**
    - Recherche de delimiteurs non fermes : Aucun delimiteur \( ou \[ non ferme detecte dans l'enonce HTML ni dans la correction HTML.
    - Les formules utilisent des constructions standard (frac, vec, overrightarrow, boxed, etc.).
    - Pas d'erreur KaTeX detectee.

48. **Question C7 : changement de cas physique (Bi << 1 vs Bi = 1)**
    - Le PDF demande Bi << 1 (cas ou la conduction est negligeable). L'enonce HTML demande Bi = 1 (cas ou les deux resistances sont egales). Ce sont deux situations physiques differentes necessitant des graphiques differents.
    - La correction HTML (lignes 455-457) traite les cas Bi = 1 et Bi >> 1, coherent avec l'enonce HTML mais pas avec le PDF.
    - Severite : CRITIQUE -- Le cas physique etudie est modifie.

### BILAN

- **Erreurs critiques : 5**
  1. (#9) Inversion des definitions de T_S et T_infty dans l'intro de la partie C
  2. (#15) C7 : Bi << 1 (PDF) remplace par Bi = 1 (HTML) -- cas physique different
  3. (#25) F3 : T_K (PDF) remplace par T_S (HTML) -- grandeur physique differente (289 K vs 273 K)
  4. (#2/26) F5 : T_C (PDF) remplace par T_1 (HTML) -- grandeur physique differente
  5. (#31) G3 : altitude de 6 km (PDF) remplacee par 5 km (HTML)

- **Erreurs moderees : 12**
  1. (#1) E1/E2 fusion + duplication structurelle
  2. (#3) G9/G10 decoupage modifie
  3. (#6) B5 notation indices e/s -> 1/2
  4. (#7) B6 notation puissance convection indice 2 -> prime
  5. (#10) T_FL -> T_infty (systematique partie C)
  6. (#13) R_T -> R_e
  7. (#16) T_MA -> T_Mh
  8. (#28) F5 correction cite T_O au lieu de T_1 (enonce) ou T_C (PDF)
  9. (#29) t_i -> t_e dans l'intro GPS
  10. (#30) Indices j->i, t_i->t_e, t_a->t_r dans G1
  11. (#32) G6 : fusion partielle avec G7
  12. (#36) omega_p -> omega_0

- **Erreurs mineures : 7**
  1. (#4) Absence systematique des accents francais dans l'enonce HTML
  2. (#8) B7 : absence de barres de valeur absolue
  3. (#11) C1 : alpha -> a
  4. (#17) Figure 1 : angle theta mentionne mais absent du PDF
  5. (#33) G8 : soulignement (notation complexe) -> fleche vectorielle
  6. (#34) G8 : J majuscule -> j minuscule
  7. (#38) F2 correction : parenthese explicative tronquee
