## Rapport de verification : E3A PC 2013 Physique

Date de verification : 2026-04-10

### METADATA
- Pages PDF : 9 pages de contenu (12 pages totales dont pages blanches et couverture)
- Questions PDF : 47 | Enonce HTML : 47 | Correction HTML : 47
- Schema de numerotation PDF : A1-A16, B1-B18, C1-C7, D1-D6
- Schema de numerotation Enonce HTML : Q1-Q16 (partie A), Q1b-Q18b (partie B), Q1c-Q7c (partie C), Q1d-Q6d (partie D)
- Schema de numerotation Correction HTML : A1-A16, B1-B18, C1-C7, D1-D6
- Figures PDF : 7 (Figure 1 a Figure 7) | Enonce HTML : 7 (Figure 1 a Figure 7)
- Encadres pedagogiques correction : 47 result, 13 rappel, 9 method, 19 why, 4 piege

### ERREURS STRUCTURELLES

#### ES-1 [CRITIQUE] Numerotation des questions dans l'enonce HTML

Le PDF et la correction utilisent le schema "A1, A2, ..., A16, B1, ..., B18, C1, ..., C7, D1, ..., D6" (prefixe de partie + numero). L'enonce HTML utilise "Question 1, Question 2, ..." avec remise a zero par partie, sans prefixe de partie. Les identifiants HTML sont Q1, Q2, ..., Q16, Q1b, Q2b, ..., Q18b, Q1c, ..., Q7c, Q1d, ..., Q6d.

Impact : la correspondance entre enonce et correction est cassee pour l'utilisateur. L'enonce dit "Question 1" pour A1, B1, C1 et D1 (quatre questions differentes portent le meme libelle "Question 1"). La correction dit "Question A1", "Question B1", etc.

La table des matieres de l'enonce HTML reflete aussi ce probleme :
- "Premiere partie - Geometrie de la molecule d'eau (Q1 a Q16)" au lieu de (A1 a A16)
- "Deuxieme partie - Propagation d'une micro-onde dans un aliment surgele (Q1b a Q18b)" au lieu de (B1 a B18)
- "Troisieme partie - Decongelation d'un aliment (Q1c a Q6c)" au lieu de (C1 a C7, D1 a D6)

De plus la table des matieres omet la section D (decongelation par micro-ondes) et indique "Q1c a Q6c" au lieu de "C1-C7, D1-D6".

#### ES-2 [MODEREE] Section D integree dans l'article de la partie C

Dans le PDF, la section "D / Decongelation par micro-ondes" est une section distincte au meme niveau que A, B, C. Dans l'enonce HTML, les questions D1-D6 sont a l'interieur de la meme balise `<article id="exo3">` que les questions C1-C7, ce qui est structurellement correct (meme partie), mais le titre `<h3>` pour la section D est place a l'interieur de la `<section>` de Q7c (ligne 352) au lieu d'etre au meme niveau. La question Q7c ne se ferme qu'a la ligne 375, engloutissant le titre de la section D, les textes introductifs, les figures 6 et 7, et tous les textes descriptifs de la partie D.

#### ES-3 [MINEURE] Sous-titre de correction partie 3 inexact

Correction HTML ligne 1114 : le sous-titre indique "(Q1c a Q7c, Q1d a Q6d)". Devrait etre "(C1 a C7, D1 a D6)".

#### ES-4 [MINEURE] Table des matieres de l'enonce HTML incomplete

La table des matieres ne liste pas la section D separement. Elle indique seulement "Troisieme partie - Decongelation d'un aliment (Q1c a Q6c)" alors qu'il y a aussi Q7c + les questions D1-D6.

### ERREURS DE RETRANSCRIPTION

#### ER-1 [MODEREE] Question A3 : "ion hydrogene" au lieu de "un ion hydrogene"
- Question : A3
- Texte PDF : "si la charge q_1 est un ion hydrogene H+ et q_2 un ion oxygene O^{2-}"
- Texte HTML : "si la charge q_1 est celle d'un hydrogene H+ et q_2 un ion oxygene O^{2-}"
- Type : reformulation -- le PDF dit "est un ion hydrogene", le HTML dit "est celle d'un hydrogene". Le mot "ion" est absent du HTML pour H+.

#### ER-2 [MINEURE] Donnees : symbole "approximativement egal" pour L
- Question : Donnees partie A
- Texte PDF : "L \simeq 1,0.10^{-10} m" (avec le symbole approximativement egal)
- Texte HTML ligne 69 : "L = 1,0.10^{-10} m" (avec le symbole egal strict)
- Type : symbole mathematique different

#### ER-3 [MODEREE] Question B4 : "les consequences du point de vue thermique" tronque/reformule
- Question : B4
- Texte PDF : "Quelles sont les consequences du point de vue thermique ?"
- Texte HTML ligne 215 : "Quelles sont les consequences sur la conversion d'energie ou sur thermique ?"
- Type : reformulation -- le PDF dit "du point de vue thermique", le HTML ajoute "la conversion d'energie ou sur" et la formulation "sur thermique" est grammaticalement incorrecte (manque "le plan").

#### ER-4 [MODEREE] Question B13 : "des nombres reels" au lieu de "deux nombres reels" et ajouts
- Question : B13
- Texte PDF : "trouver des nombres reels r_1 et r_2 (a exprimer en fonction de chi_0, omega et tau)"
- Texte HTML ligne 267 : "trouver dans premiers reels r_1 et r_2 (a exprimer en fonction de chi_0, omega et c)"
- Type : multiples erreurs --
  1. "trouver dans premiers reels" est une phrase incoherente (corruption du texte original "trouver des nombres reels")
  2. les variables d'expression incluent "c" dans le HTML mais pas dans le PDF (le PDF dit "chi_0, omega et tau", le HTML dit "chi_0, omega et c")

#### ER-5 [MODEREE] Question B15 : reformulation et ajouts multiples
- Question : B15
- Texte PDF : "En deduire l'expression precise du champ electrique reel E en faisant notamment intervenir k_1 et k_2. Commenter la forme de l'onde obtenue : est-elle plane, progressive (si oui, dans quelle direction), stationnaire (si oui, par rapport a quelle direction) ? Quelle est sa polarisation ?"
- Texte HTML ligne 278 : "En deduire l'expression precise du champ electrique reel E en faisant notamment intervenir k_1 et k_2. Commenter la forme (le terme obtenue : est-elle plane, progressive (ou non) ; stationnaire (ou non), par exemple ?). Quelle est l'effet de la perturbation k_2 sur la propagation ? Quelle est sa polarisation ?"
- Type : reformulation -- 
  1. "(le terme obtenue" est une parenthese parasite et grammaticalement incorrecte
  2. "(ou non)" remplace "(si oui, dans quelle direction)" -- perte d'information
  3. "Quelle est l'effet" au lieu du texte PDF qui dit "par rapport a quelle direction" -- ajout
  4. "par exemple" ajoute

#### ER-6 [MODEREE] Question B18 : reformulation significative
- Question : B18
- Texte PDF : "Sans faire de calcul, donner la direction du vecteur de POYNTING moyen, ainsi que l'expression de sa dependance par rapport aux variables spatiales."
- Texte HTML ligne 293 : "Faire un calcul de puissance, donner la direction du vecteur de POYNTING moyen, ainsi que l'expression de sa dependance par rapport aux variables spatiales."
- Type : reformulation -- le PDF dit "Sans faire de calcul", le HTML dit "Faire un calcul de puissance". C'est le sens inverse.

#### ER-7 [MINEURE] Introduction partie C : "dans cette troisieme partie seront" vs "cette troisieme partie seront"
- Question : intro partie C
- Texte PDF : "Dans cette troisieme partie seront mis en evidence..."
- Texte HTML ligne 299 : "Cette troisieme partie seront mis en evidence..."
- Type : mot manquant ("Dans" manque)

#### ER-8 [MINEURE] Question C4 : parenthese exp(-nu*t_2) vs exp(nu*t_2)
- Question : C4
- Texte PDF : "(calculer notamment exp(nu*t_2))" -- pas de signe moins
- Texte HTML ligne 333 : "(calculer notamment exp(-nu*t_2))" -- signe moins ajoute
- Type : signe different dans la formule. Bien que le signe moins soit plus coherent avec le contexte (exponentielle decroissante), le PDF original n'a pas de signe moins dans cette indication.

#### ER-9 [CRITIQUE] Question C5 : signe de l'exponentielle dans la serie
- Question : C5 (texte introductif)
- Texte PDF : "T(x,t) = T_ext + sum theta_n sin(mu_n x) exp(v_n t)" (signe + devant v_n t)
- Texte HTML ligne 340 : "T(x,t) = T_ext + sum theta_n sin(mu_n x) exp(v_n t)" 
- Note : Le PDF utilise bien exp(v_n t) avec v_n qui est en fait negatif (v_n = -D_th mu_n^2). L'HTML semble coherent avec le PDF sur ce point. Pas d'erreur detectee ici apres re-verification.

#### ER-10 [MINEURE] Question D4 : detail de formulation des fractions de puissance
- Question : D4
- Texte PDF : il y a trois sous-questions distinctes dans D4 : (1) calculer P_j/P_0, (2) calculer la fraction des deux ondes P'_j/(2P_0), (3) calculer Delta t_1
- Texte HTML : les sous-questions sont presentes mais les notations des fractions de puissance different legerement du PDF (P_1^i/P_0^i dans le HTML au lieu de P_j/P_0 pour la premiere, et P_j^i/(2P_0^i) au lieu de P'_j/(2P_0)).

#### ER-11 [MINEURE] Accents systematiquement manquants dans l'enonce HTML

L'ensemble de l'enonce HTML est ecrit sans accents (pas d'accents sur les e, a, u, etc.). Le PDF original comporte tous les accents francais. Exemples :
- PDF : "Epreuve de Physique" / HTML : "Epreuve de Physique" (pas de difference sur ce titre)
- PDF : "Premiere partie" / HTML : "Premiere partie" (accent absent)
- PDF : "decongelation" / HTML : "decongelation" (accent absent)
- PDF : "electromagnetique" / HTML : "electromagnetique" (accent absent)
- PDF : "modelisation" / HTML : "modelisation" (accent absent)
- etc.

Ceci est systematique dans tout l'enonce HTML. La correction HTML est egalement sans accents.

Note : cela semble etre un choix delibere du generateur et non une erreur accidentelle, car c'est parfaitement coherent. Neanmoins, c'est un ecart avec le PDF original.

#### ER-12 [MINEURE] Question A11 : "alpha_ato" au lieu de "alpha_pol"
- Question : A11
- Texte PDF : "p_i = epsilon_0 alpha_pol E_0, ou alpha_pol sera exprime en fonction de R."
- Texte HTML ligne 148 : "p_i = epsilon_0 alpha_ato E_0, ou alpha_ato sera exprime en fonction de R."
- Type : indice different -- le PDF utilise "pol" (pour polarisabilite), le HTML utilise "ato" (pour atomique)

#### ER-13 [MODEREE] Question A12 : "W' = -p_i . E_0 / 2" vs "W = -p_i . F_0 / 2"
- Question : A12 (texte introductif)
- Texte PDF : "W' = -p_i . E_0 / 2"
- Texte HTML ligne 159 : "W = -p_i . F_0 / 2" -- utilise "F_0" au lieu de "E_0" et "W" au lieu de "W'"
- Type : erreur de symbole -- F_0 n'est pas defini dans ce contexte. Devrait etre E_0 (le champ exterieur).

#### ER-14 [MODEREE] Question B4 texte introductif : onde E ecrite avec direction erronee
- Question : B4 (texte introductif apres la question)
- Texte PDF : "E = E_0 exp j(omega t - k x) u, ou E_0 est une constante reelle..." et u est un vecteur unitaire fixe
- Texte HTML ligne 218 : "E = E_0 exp j(omega t - k x) u_x" -- le HTML ajoute "u_x" au lieu de "u"
- Type : erreur -- dans le PDF, u est un vecteur unitaire generique (sa direction sera determinee plus tard comme u_y). Ecrire u_x est faux car le champ est transverse et ne peut pas etre selon u_x.

#### ER-15 [MINEURE] Donnees partie B : "c = 3,0.10^8 m.s^{-1}"
- Le PDF ecrit "c = 3,0.10^8 m.s^{-1}" et le HTML ecrit identiquement. Pas d'erreur.

#### ER-16 [MINEURE] Question D5 texte d'intro manquant
- Question : D5 (texte italique apres la question)
- Texte PDF apres D5 : "En pratique, pour pallier le probleme precedent, l'aliment est decongele par micro-ondes dans une piece tres froide, a une temperature de l'ordre de -50 degC a -60 degC."
- Texte HTML : present ligne 404, OK.

#### ER-17 [MINEURE] Capacite thermique notation
- Question : Donnees partie C
- Texte PDF : "c_{th}" pour la capacite thermique massique, notation standard
- Texte HTML ligne 309 : "c_m" -- notation differente mais coherente avec le texte du PDF qui dit aussi "notee c_{th}" en certains endroits
- Le PDF utilise c_{th} et le HTML utilise c_m. La correction utilise c_m. L'enonce HTML est coherent avec sa propre correction mais pas avec le PDF.

### ERREURS DE CITATION (correction vs enonce)

#### EC-1 [OK] Questions A1 a A16
Les citations dans les `.corr-question__statement` de la correction sont globalement fideles au texte de l'enonce HTML. Le texte est copie sans reformulation majeure pour A1 a A16.

#### EC-2 [MODEREE] Question B4 : citation ajoutee/modifiee
- Enonce HTML : "Quelles sont les consequences sur la conversion d'energie ou sur thermique ?"
- Correction HTML : "Quelles sont les consequences sur la conversion d'energie ou sur thermique ?"
- Note : la citation est fidele a l'enonce HTML, mais l'enonce HTML lui-meme est deja une reformulation du PDF (voir ER-3). L'erreur est donc propagee.

#### EC-3 [MODEREE] Question B13 : citation reprend l'erreur de l'enonce
- Correction HTML ligne 937 : reprend le texte corrompu "trouver deux nombres reels" mais la correction HTML dit en fait "trouver deux nombres reels r_1 et r_2" -- c'est une correction silencieuse par rapport a l'enonce HTML qui dit "trouver dans premiers reels r_1 et r_2". La correction a corrige l'erreur de l'enonce.

#### EC-4 [MODEREE] Question B15 : citation differente de l'enonce
- Enonce HTML : "Commenter la forme (le terme obtenue : est-elle plane, progressive (ou non) ; stationnaire (ou non), par exemple ?). Quelle est l'effet de la perturbation k_2..."
- Correction HTML : "Commenter la forme de l'onde obtenue : est-elle plane, progressive (ou non) ; stationnaire (ou non), par exemple ? Quelle est l'effet de la perturbation k_2..."
- La correction a corrige silencieusement "(le terme obtenue" en "de l'onde obtenue" -- c'est une amelioration mais un ecart.

#### EC-5 [MODEREE] Question B18 : citation diverge du PDF et de l'enonce
- Enonce HTML : "Faire un calcul de puissance, donner la direction..."
- Correction HTML : "Faire un calcul de puissance, donner la direction..." 
- Citation fidele a l'enonce HTML, mais l'enonce HTML est deja faux par rapport au PDF (voir ER-6).

#### EC-6 [OK] Questions C1 a C7, D1 a D6
Les citations dans la correction sont globalement fideles a l'enonce HTML pour les parties C et D. Pas d'ecart significatif detecte.

### ERREURS PHYSIQUES

#### EP-1 [MINEURE] Correction B6 : signe de beta
La correction conclut beta = -1, ce qui est correct avec la convention exp(j omega t) de l'enonce. C'est physiquement correct.

#### EP-2 [OK] Verification de l'application numerique de eta (A3)
- Numerateur : 2 * (1,6e-19)^2 = 2 * 2,56e-38 = 5,12e-38
- Denominateur : 4*pi * 8,8e-12 * 6,7e-11 * 1,7e-27 * 2,7e-26
  = 4*pi * 8,8e-12 = 1,106e-10
  * 6,7e-11 = 7,41e-21
  * 1,7e-27 * 2,7e-26 = 4,59e-53
  => 7,41e-21 * 4,59e-53 = 3,40e-73
- eta = 5,12e-38 / 3,40e-73 = 1,51e35
Resultat : eta ~ 1,5e35. Correct.

#### EP-3 [OK] Verification D_th (C1)
D_th = lambda_th / (rho * c_m) = 1,0 / (1,1e3 * 2,0e3) = 1,0 / 2,2e6 = 4,55e-7 m^2/s. Correct.

#### EP-4 [OK] Verification nu_1 (C4)
nu_1 = D_th * pi^2 / L^2 = 4,55e-7 * 9,87 / 0,04 = 4,55e-7 * 246,7 = 1,12e-4 s^{-1}. Correct.

#### EP-5 [OK] Verification exp(-nu_1 * t_2) (C4)
nu_1 * t_2 = 1,12e-4 * 18000 = 2,02. exp(-2,02) = 0,133 ~ 0,14. Correct.

#### EP-6 [OK] Verification Q_total (D2)
Q_A = 220 * 2000 * 17 = 7,48e6 J
Q_B = 220 * 20000 * 3 = 1,32e7 J
Q_total = 2,07e7 J ~ 21 MJ. Correct.

#### EP-7 [OK] Verification Delta t decongelation (D3)
Delta t = Q / (2*P_0) = 2,07e7 / 1e4 = 2070 s ~ 35 min. Correct.

#### EP-8 [MINEURE] Coherence dimensionnelle B17 : delta
delta = 2c / (omega^2 * tau * sqrt(chi_0))
[delta] = m.s^{-1} / (rad^2.s^{-2} * s * 1) = m.s^{-1} / (s^{-1}) = m. Correct dimensionnellement.
Valeur numerique : 2*3e8 / ((1,54e10)^2 * 1e-12 * 8,66)
= 6e8 / (2,37e20 * 8,66e-12) = 6e8 / 2,05e9 = 0,29 m. Correct.

#### EP-9 [MINEURE] Erreurs KaTeX potentielles
Aucune erreur KaTeX flagrante detectee (delimiteurs fermes, commandes valides). L'enonce et la correction utilisent coheremment les delimiteurs \( ... \) et \[ ... \].

### BILAN

- Erreurs critiques : 1
  - ES-1 : numerotation des questions "Question 1, 2, 3..." au lieu de "A1, A2, ..., B1, B2, ..."

- Erreurs moderees : 9
  - ES-2 : section D imbriquee dans la section de Q7c
  - ER-1 : "celle d'un hydrogene" au lieu de "un ion hydrogene"
  - ER-3 : B4 "consequences sur la conversion d'energie ou sur thermique" mal formule
  - ER-4 : B13 texte corrompu "trouver dans premiers reels"
  - ER-5 : B15 reformulation avec parenthese parasite et perte d'info
  - ER-6 : B18 "Faire un calcul" au lieu de "Sans faire de calcul" (sens inverse)
  - ER-12 : A11 "alpha_ato" au lieu de "alpha_pol"
  - ER-13 : A12 "F_0" au lieu de "E_0" et "W" au lieu de "W'"
  - ER-14 : B4 intro "u_x" au lieu de "u" (direction erronee du champ)

- Erreurs mineures : 7
  - ES-3 : sous-titre correction avec prefixes Qxc/Qxd au lieu de Cx/Dx
  - ES-4 : table des matieres incomplete (section D manquante)
  - ER-2 : symbole = au lieu de simeq pour L dans les donnees
  - ER-7 : "Dans" manquant au debut intro partie C
  - ER-8 : signe moins ajoute dans exp(-nu*t_2) Q C4
  - ER-11 : absence systematique d'accents dans tout l'enonce HTML
  - ER-17 : c_m au lieu de c_{th} pour la capacite thermique

### RECOMMANDATIONS PRIORITAIRES

1. **URGENT** : Corriger la numerotation des questions dans l'enonce HTML pour utiliser A1-A16, B1-B18, C1-C7, D1-D6 (identifiants, h4, table des matieres).
2. **IMPORTANT** : Corriger les erreurs de retranscription moderees (ER-3, ER-4, ER-5, ER-6, ER-12, ER-13, ER-14) en recopiant fidelement le texte du PDF.
3. **IMPORTANT** : Sortir le titre h3 de la section D de l'interieur de la question Q7c (ES-2).
4. MINEUR : Corriger les erreurs mineures de retranscription.
