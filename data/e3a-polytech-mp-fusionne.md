# E3A-Polytech MP -- Rapport fusionne (Maths + Physique)

> Filiere MP uniquement | 2025 -> 2017 | Exercice par exercice
> Fusion de 5 sources : structure P1/P2/P3, liens PDF, detail des questions, methodes, statistiques
> Derniere mise a jour : avril 2026

---

## Sources consolidees

| Source | Contenu | URL |
|--------|---------|-----|
| Officiel e3a-Polytech | Sujets + rapports + corriges (2020-2025) | https://www.e3a-polytech.fr/annales-et-rapport/ |
| Archive officielle 2019-2001 | Index PDF ancien format | https://www.e3a-polytech.fr/wp-content/uploads/2019/12/annales-rapports_e3a-Polytech.pdf |
| VMaths | Sujets + corriges MP | https://www.vmaths.fr/sujets-des-epreuves-ecrites-e3a-polytech-filiere-mp/ |
| Maths-France | Corriges detailles 2017-2023 | https://maths-france.fr/math-spe/problemes/e3a/ |
| Groupe Reussite | Physique-Chimie E3A MP | https://groupe-reussite.fr/ressources/annales-physique-chimie-e3a/ |
| AlloSchool | Archives physique MP | https://www.alloschool.com/course/concours-physique-et-chimie-mp |

## Format du concours

### Avant 2020 (ancien E3A)
- **Maths 1** (4h) : 4 exercices independants
- **Maths 2** (3h) : 1 probleme long

### Depuis 2020 (E3A-Polytech)
- **Mathematiques** (4h) : 3-5 exercices independants, sans calculatrice
- **Physique-Chimie** (4h) : 2 problemes (physique + chimie), contextualises

---

# PARTIE I -- MATHEMATIQUES MP (2025 -> 2017)

---

## 2025

**PDF** : [Sujet + corrige MP 2025](https://www.e3a-polytech.fr/wp-content/uploads/2025/09/MP.pdf)

### Exercice 1 -- Optimisation sous contraintes (3 methodes)
**Priorite : P1** | `calcul-differentiel`, `espaces_prehilbertiens`, `topologie`
**Difficulte :** Standard | **Type :** Tres classique

**Enonce :** Minimiser f(x,y,z,t) = x^2 + y^2 + z^2 + t^2 sous la contrainte x + y = 2.

**Questions detaillees :**
- Methode 1 : Substitution directe y = 2-x, reduction a h(u,v,w) = 2u^2 + v^2 + w^2 - 4u + 4 sur R^3. Minimisation libre.
- Methode 2 : Multiplicateurs de Lagrange avec g(X) = x + y - 2. Systeme grad(f) = lambda*grad(g).
- Methode 3 : Interpretation geometrique comme distance au sous-espace affine F = {x+y=2}. Calcul de d(0,F) par projection orthogonale.

**Methodes cles :**
- Gradient, points critiques, matrice hessienne
- Lagrange : nabla f = lambda * nabla g + conditions
- Distance a un sous-espace affine = ||proj_{F^perp}(0)||

**Pieges :** Verifier que le minimum est global (pas local). En methode 3, bien identifier le sous-espace vectoriel directeur de F.

**Ce qu'il faut savoir faire :**
1. Parametrer proprement un hyperplan
2. Trouver un point critique avec une contrainte lineaire
3. Reconnaitre qu'un hyperplan affine est une translation d'un sous-espace
4. Convertir l'extremum en probleme de distance

---

### Exercice 2 -- Racines n-iemes de l'unite et reduction d'endomorphisme
**Priorite : P1** | `reduction-algebrique`, `reduction-geometrique`, `polynomes`, `complexes`
**Difficulte :** Intermediaire | **Type :** Semi-classique (DFT)

**Enonce :** omega = e^{2ipi/n}. Endomorphisme Phi_lambda sur C_{n-1}[X] defini par evaluation sur les racines de l'unite.

**Questions detaillees (18 questions) :**
- Q1 : Calculer sum_{r=1}^m omega^{m(r-1)} (somme geometrique)
- Q2 : Ecrire la matrice A pour n=3 avec j = e^{2ipi/3}
- Q3 : Formule generale a_{k,l} = (1/n) * omega^{(k-1)(l-1)}
- Q4 : Montrer A symetrique -> diagonalisable
- Q5 : Calculer A * A_barre et A^{-1}
- Q6-Q8 : (A_barre)^2, (A_barre)^4 = I_n, valeurs propres de A_barre
- Q9 : Factoriser via L_q(X) = (X^n - 1)/(X - omega^q) -- polynomes de Lagrange
- Q10-Q11 : Spectre explicite pour n=3, n=4
- Q12 : Pour n >= 5, sous-espace stable G = Vect(Q_1, Q_{n-1}, L_1, L_{n-1})

**Methodes cles :**
- Somme de racines de l'unite : sum omega^k = 0 si n ne divise pas l'exposant
- Polynome annulateur pour trouver les valeurs propres
- Decomposition spectrale via les polynomes de Lagrange

**Pieges :** Calculs lourds pour n=4. Bien distinguer la base des L_q et la base canonique.

**Ce qu'il faut savoir faire :**
1. Utiliser la somme des puissances de racines de l'unite
2. Construire une matrice d'endomorphisme sans perdre le sens de l'application
3. Identifier des vecteurs propres "naturels"
4. Lire une matrice comme operateur de transformation

---

### Exercice 3 -- Series entieres et fonctions de Bessel
**Priorite : P1** | `series-entieres`, `integrales-impropres`, `suites-series-fonctions`
**Difficulte :** Intermediaire | **Type :** Original (fonction de Bessel modifiee)

**Enonce :** f(x) = sum_{n>=0} x^{2n}/(n!)^2, puis g(x) = int_0^x 1/(1 + t*f(t)^2) dt sur R_+*.

**Questions detaillees :**
- Partie A (6 questions) :
  - f est C^infini sur R (rayon infini car a_n = 1/(n!)^2)
  - f est lipschitzienne sur [a,b]
  - f'(x) <= e^x pour x >= 0
  - f(x) - 1 <= x quand x -> 0 (DL a l'ordre 1)
- Partie B (7 questions) :
  - g est C^infini sur ]0,+infini[
  - Signe de g (positif car integrande positif)
  - g(x) <= ln(x) (majoration par comparaison)
  - f(t) > 1 + t pour t > 0 (terme dominant)
  - g admet une limite finie en +infini
- Partie C (3 questions) :
  - Decomposition en elements simples de F(X) = 1/(X(1+X)^2)
  - Encadrement de g par integration de la DES
  - g bornee par ln(2) sur ]0,+infini[

**Methodes cles :**
- Rayon par d'Alembert : |a_{n+1}/a_n| = 1/(n+1)^2 -> 0
- Accroissements finis pour la lipschitzianite
- Comparaison integrale/serie pour les majorations

**Ce qu'il faut savoir faire :**
1. Justifier domaine et regularite d'une somme de serie
2. Controler la derivee par comparaison
3. Faire une estimation de type Lipschitz
4. Exploiter une equivalence au voisinage de 0

**Absence notable :** Aucun exercice de probabilites en MP 2025.

---

## 2024

**PDF** : [Rapport MP 2024](https://www.e3a-polytech.fr/wp-content/uploads/2024/07/Rapport_MP_2024.pdf)

### Exercice 1 -- Loi geometrique et partie entiere
**Priorite : P1** | `probabilites_spe`
**Difficulte :** Standard | **Type :** Tres classique

**Enonce :** Variable geometrique X, transformation Y = floor((X+1)/2), determination de la loi.

**Methodes :** Formule de transfert, sommation de series geometriques. P(floor(X) = k) = sum sur les valeurs de X telles que floor(X) = k.

**Ce qu'il faut savoir faire :**
1. Reecrire (Y = k) a partir des valeurs de X
2. Sommer proprement une loi geometrique
3. Identifier une loi image sans se noyer dans les notations

---

### Exercice 2 -- Series entieres et trigonometrie
**Priorite : P1** | `series-entieres`, `complexes`, `trigonometrie`
**Difficulte :** Intermediaire | **Type :** Semi-classique

**Enonce :** Serie entiere sum cos(n) x^n / n.

**Methodes :** Rayon par d'Alembert/Hadamard, decomposition cos(n) = Re(e^{in}), utilisation de -ln(1-z) = sum z^n/n pour |z| < 1.

**Pieges :** Manipulations algebriques lourdes. Bien distinguer convergence simple et uniforme.

**Ce qu'il faut savoir faire :**
1. Etudier le rayon de convergence
2. Reconnaitre un prolongement via la serie geometrique complexe
3. Revenir d'une somme complexe a une expression reelle exploitable
4. Reexploiter le schema sur une variante comme cos(2n)/n

---

### Exercice 3 -- Reduction par polynome annulateur
**Priorite : P1** | `reduction-algebrique`, `endomorphismes-euclidiens`
**Difficulte :** Intermediaire | **Type :** Classique

**Enonce :** Matrice A reelle telle que A^T = 3A^2 - A - I. Puissances de A via polynome annulateur, matrices symetriques.

**Methodes :**
- Division euclidienne : X^n = Q(X)*P(X) + R(X) donc A^n = R(A)
- Pour les matrices symetriques : theoreme spectral -> diagonalisable dans une BON

**Ce qu'il faut savoir faire :**
1. Fabriquer une matrice symetrique a partir de A
2. Exploiter le theoreme spectral au bon moment
3. Deduire un polynome annulateur sans erreur de logique
4. Remonter du polynome aux valeurs propres possibles

---

### Exercice 4 -- Integrales generalisees et convolution
**Priorite : P2** | `topologie`, `espaces-vectoriels-normes`, `integrales-parametres`
**Difficulte :** Avance | **Type :** Semi-classique

**Enonce :** Produit de convolution (f*g)(x) = int f(t)*g(x-t) dt. Lipschitz, continuite uniforme, espaces de fonctions.

**Methodes :** Majoration par Cauchy-Schwarz, Fubini, derivation sous le signe integral.

**Ce qu'il faut savoir faire :**
1. Utiliser proprement le TAF
2. Distinguer continuite, continuite uniforme et Lipschitz
3. Raisonner dans un espace de fonctions sans perdre les hypotheses

---

## 2023

**PDF** : [Sujet MP 2023](https://www.e3a-polytech.fr/wp-content/uploads/2023/12/MP.pdf)

### Exercice 1 -- Endomorphisme de R_n[X] (Taylor + racines multiples)
**Priorite : P1** | `reduction-algebrique`, `polynomes`
**Difficulte :** Standard a Intermediaire | **Type :** Classique

**Enonce :** Endomorphisme sur R_n[X], base decalee (1, X-a, ..., (X-a)^n), valeurs propres et diagonalisabilite.

**Questions :** Questions de cours sur Taylor pour polynomes, puis elements propres de l'endomorphisme (necessitant la complexification pour les racines de l'unite).

**Methodes :** P(X) = sum P^{(k)}(a)/k! * (X-a)^k. Multiplicite de a comme racine = min{k : P^{(k)}(a) != 0}.

**Ce qu'il faut savoir faire :**
1. Changer de base dans R_n[X]
2. Utiliser la multiplicite d'une racine
3. Identifier une forme de vecteur propre a partir des racines

---

### Exercice 2 -- Fonction Gamma et integrales a parametre
**Priorite : P1** | `integrales-parametres`, `integrales-impropres`, `suites-series-fonctions`
**Difficulte :** Intermediaire | **Type :** Semi-classique

**Enonce :** Puissances t^x, fonction Gamma, fonction integrale. Continuite, derivabilite a parametre.

**Methodes :** Convergence dominee pour la continuite, derivation sous le signe integral (hypotheses a verifier).

**Ce qu'il faut savoir faire :**
1. Manipuler Gamma
2. Etudier domaine, variations et continuite d'une fonction definie par integrale
3. Justifier rigoureusement les passages a la limite

---

### Exercice 3 -- Operateur integral sur C^0(R_+)
**Priorite : P2** | `fonctions-valeurs-vectorielles`, `topologie`, `integrales-parametres`
**Difficulte :** Avance | **Type :** Original

**Enonce :** Endomorphisme de C^0(R_+) defini par un operateur integral. Continuite, derivabilite, EDL.

**Remarque jury :** Exercice le plus discriminant du sujet.

**Ce qu'il faut savoir faire :**
1. Appliquer le theoreme fondamental de l'analyse
2. Raisonner sur un operateur defini par integration
3. Tenir une redaction propre sur les fonctions

---

### Exercice 4 -- Matrices aleatoires (trace, det, rang, spectre)
**Priorite : P2** | `probabilites_spe`, `matrices`, `reduction-algebrique`
**Difficulte :** Intermediaire | **Type :** Original

**Enonce :** VA discretes avec application a l'algebre lineaire matricielle. Probabilite qu'une matrice aleatoire soit inversible, diagonalisable.

**Methodes :** P(det(A) != 0) par les proprietes du determinant. Trace = somme des VP -> lien avec la loi.

---

## 2022

**PDF** : [Rapport epreuve MP 2022](https://www.e3a-polytech.fr/wp-content/uploads/2022/11/Rapport_epreuve_MP_2022.pdf)

### Exercice 1 -- Fonction Gamma et integrale de Gauss
**Priorite : P1** | `integrales-impropres`, `integrales-parametres`, `series-entieres`
**Difficulte :** Intermediaire a avance | **Type :** Classique

**Questions detaillees :**
- Q1 : Gamma(x) = int_0^{+infini} t^{x-1}*e^{-t} dt, domaine = R_+*
  - Gamma(x+1) = x*Gamma(x) (IPP)
  - Gamma(n+1/2) = sqrt(pi)*(2n)!/(2^{2n}*n!)
- Q2 : I_n = int_0^{+infini} t^{2n}*e^{-t^2} dt = Gamma(n+1/2)/2 (changement u=t^2)
- Q3 : H(x) = int_0^{+infini} cos(xt)*e^{-t^2} dt
  - DSE de cos, interversion serie/integrale : **H(x) = sqrt(pi)/2 * e^{-x^2/4}**
- Q4 : Retrouver par EDL1 : H' = -(x/2)*H (IPP), puis H(0) = sqrt(pi)/2

**Ce qu'il faut savoir faire :**
1. Passer de Gamma a des integrales gaussiennes
2. Utiliser un DSE a l'interieur d'une integrale
3. Retrouver une expression fermee par equation differentielle

---

### Exercice 2 -- Loi du maximum (urnes)
**Priorite : P1** | `probabilites_spe`
**Difficulte :** Standard | **Type :** Classique

**Enonce :** k urnes, n boules chacune. X_n = max des numeros tires.

**Questions :**
- Somme de Riemann -> integrale. lim (1/n)*sum(j/n)^m = 1/(m+1).
- P(X_n <= j) = (j/n)^k, P(X_n = j) = (j^k - (j-1)^k)/n^k
- E(X_n) via P(X_n > j), equivalent : **E(X_n) ~ nk/(k+1)**

**Ce qu'il faut savoir faire :**
1. Determiner la loi d'un maximum
2. Sommer proprement des probabilites
3. Trouver une esperance sous une forme exploitable

---

### Exercice 3 -- Algebre bilineaire, Cauchy-Schwarz
**Priorite : P1** | `espaces_prehilbertiens`, `endomorphismes-euclidiens`
**Difficulte :** Intermediaire a avance | **Type :** Semi-classique

**Enonce :** F(X) = sum x_i*x_j (i != j) sur la boule unite de R^n. Espace euclidien, Cauchy-Schwarz, colinearite.

**Questions :**
- F(X) = S_1^2 - S_2 avec S_1 = sum x_i, S_2 = sum x_i^2
- Maximum M = n-1 par Cauchy-Schwarz : (sum x_i)^2 <= n * sum x_i^2
- Atteint pour X = +/- (1,...,1)/sqrt(n)
- Matrice A = J - I_n, Sp(A) = {-1 (mult n-1), n-1 (mult 1)}

**Ce qu'il faut savoir faire :**
1. Rediger une preuve propre de Cauchy-Schwarz
2. Caracteriser le cas d'egalite
3. Raisonner avec projections/orthogonalite dans un espace euclidien

---

### Exercice 4 -- Matrices circulantes et racines de l'unite
**Priorite : P2** | `reduction-algebrique`, `complexes`, `polynomes`
**Difficulte :** Avance | **Type :** Original

**Enonce :** omega = e^{2ipi/n}, matrice de permutation circulaire F.

**Questions :**
- F^n = I_n, polynome minimal X^n - 1
- F diagonalisable dans C : D = diag(1, omega, ..., omega^{n-1})
- A = P(F) -> Delta = P(D), det(A), inversibilite

---

## 2021

**PDF** : [Compte-rendu MP 2021](https://www.e3a-polytech.fr/wp-content/uploads/2021/07/Compte-rendu-MP-2021.pdf)

### Exercice 1 -- Serie de fonctions, convergence normale, Gamma
**Priorite : P1** | `suites-series-fonctions`, `integrales-parametres`, `integrales-impropres`
**Difficulte :** Intermediaire a avance | **Type :** Classique

**Enonce :** Serie de fonctions sur [0,1], convergence simple puis normale, lien avec Gamma, calcul d'integrales.

**Ce qu'il faut savoir faire :**
1. Etudier x ln x
2. Reconnaitre une somme exponentielle
3. Utiliser Gamma(n+1)
4. Encadrer un reste numerique

---

### Exercice 2 -- Endomorphisme symetrique euclidien
**Priorite : P1** | `endomorphismes-euclidiens`, `reduction-geometrique`
**Difficulte :** Intermediaire | **Type :** Classique

**Enonce :** Endomorphisme symetrique dans un espace euclidien, theoreme spectral, noyau, image, orthogonalite. Inverse generalisee, projecteurs spectraux.

**Ce qu'il faut savoir faire :**
1. Citer correctement le theoreme spectral
2. Passer de "non inversible" a "0 valeur propre" proprement
3. Montrer Ker(f) orthogonal a Im(f)

---

### Exercice 3 -- Fonctions generatrices
**Priorite : P1** | `probabilites_spe`
**Difficulte :** Intermediaire | **Type :** Classique

**Enonce :** Fonctions generatrices de variables aleatoires.

**Ce qu'il faut savoir faire :**
1. Retrouver une loi via sa fonction generatrice
2. Calculer esperance / variance a partir de la fonction generatrice

---

### Exercice 4 -- Forme lineaire integrale sur R_n[X]
**Priorite : P2** | `espaces-vectoriels-normes`, `polynomes`
**Difficulte :** Standard | **Type :** Classique

**Enonce :** Forme lineaire integrale sur R_n[X], base adaptee, noyau, dimension. Produit scalaire, projection, distances.

**Ce qu'il faut savoir faire :**
1. Construire une base bien choisie
2. Calculer noyau / dimension d'une forme lineaire

---

## 2020

**PDF** : [Corrige maths MP 2020](https://www.e3a-polytech.fr/wp-content/uploads/2020/12/Corrig%C3%A9-math_MP_2020.pdf)

### Exercice 1 -- Loi geometrique, couple de VA
**Priorite : P1** | `probabilites_spe`
**Difficulte :** Standard | **Type :** Tres classique

**Enonce :** X, Y independantes, P(X=k) = p*q^k. Variables geometriques, comparaison, somme.

**Resultats :** E(X) = q/p. P(X=Y) = p/(1+q). Loi de S=X+Y : P(S=k) = (k+1)*p^2*q^k (loi binomiale negative).

**Ce qu'il faut savoir faire :**
1. Loi d'une somme discrete
2. Comparaison X=Y, X<Y
3. Usage propre de la serie geometrique

---

### Exercice 2 -- Produit infini de ch
**Priorite : P1** | `series-entieres`, `series-numeriques-spe`, `integrales-impropres`
**Difficulte :** Intermediaire a avance | **Type :** Original

**Enonce :** P_n(x) = prod_{k=1}^n ch(x/k). Convergence du produit infini.

**Methodes :** ln(P_n) = sum ln(ch(x/k)), DL ln(ch(t)) ~ t^2/2 -> serie de Riemann convergente (sum 1/k^2).

**Ce qu'il faut savoir faire :**
1. Transformer un produit en somme via le logarithme
2. Determiner l'ensemble de convergence
3. Exploiter parite, monotonie, continuite

---

### Exercice 3 -- Suites recurrentes, endomorphisme en dim infinie
**Priorite : P3** | `topologie`, `espaces-vectoriels-normes`, `fonctions-valeurs-vectorielles`
**Difficulte :** Avance | **Type :** Original

**Enonce :** Endomorphismes de l'espace des familles convergentes indexees par Z.

**Resultat :** Seule VP reelle de T : lambda = 2. N et norme infinie NON equivalentes.

---

### Exercice 4 -- Produit scalaire sur R_n[X], polynomes de Legendre
**Priorite : P2** | `espaces_prehilbertiens`, `polynomes`
**Difficulte :** Intermediaire a avance | **Type :** Classique

**Enonce :** <P,Q> = int_0^1 P(t)Q(t)dt. Orthogonal de R_{n-1}[X]. Fractions rationnelles.

**Ce qu'il faut savoir faire :**
1. Verifier qu'une integrale definit un produit scalaire
2. Calculer un orthogonal dans R_n[X]
3. Articuler algebre lineaire et rationnel

---

### Exercice 5 -- Cesaro par convergence dominee
**Priorite : P2** | `suites-series-fonctions`, `topologie`
**Difficulte :** Standard | **Type :** Tres classique

**Enonce :** Preuve du theoreme de Cesaro via convergence dominee.

**Methode :** f_n(t) = w_{[nt]+1} -> l, |f_n| <= M, convergence dominee -> (1/n)*sum w_k -> l.

**Ce qu'il faut savoir faire :**
1. Comprendre une fonction en escalier
2. Passer de la convergence simple a une conclusion sur des moyennes

---

## 2019 (ancien format Maths 1 + Maths 2)

**PDF** :
- [Maths 1 MP 2019](https://www.vmaths.fr/wp-content/uploads/E3A/MP/E3A_2019_MP_Maths1_enonce.pdf)
- [Maths 2 MP 2019](https://www.vmaths.fr/wp-content/uploads/E3A/MP/E3A_2019_MP_Maths2_enonce.pdf)

### Maths 1 -- Exercice 1 : Series de fonctions trigonometriques
**Priorite : P2** | `suites-series-fonctions`, `trigonometrie`, `integrales-impropres`
**Difficulte :** Intermediaire | **Type :** Classique

**Enonce :** u_n(x) = alpha^n*cos(nx)/n!. C(x) = sum u_n(x). Convergence uniforme (Weierstrass), expression C(x) = exp(alpha*cos(x))*cos(alpha*sin(x)). Integrales I_n et J_n.

### Maths 1 -- Exercice 2 : Determinant d'un endomorphisme de M_n(K)
**Priorite : P2** | `determinants`, `reduction-algebrique`
**Difficulte :** Intermediaire a avance | **Type :** Classique

**Resultats :** det(u(A)) = (-1)^{n-1}*(n-1)*det(A). Polynome annulateur de u de degre 2.

### Maths 1 -- Exercice 3 : Equation fonctionnelle -> EDL2 + DSE
**Priorite : P2** | `equations-differentielles-spe`, `series-entieres`, `integrales-impropres`
**Difficulte :** Avance | **Type :** Original

**Enonce :** f continue verifiant f(x) = 1 - int_0^x (t+x)*f(x-t)dt. Reduction a une EDL2.

### Maths 1 -- Exercice 4 : Endomorphisme symetrique euclidien de R_n[X]
**Priorite : P2** | `endomorphismes-euclidiens`, `espaces_prehilbertiens`
**Difficulte :** Avance | **Type :** Original

**Enonce :** u(P)(x) = int_0^1 (x+t)^n*P(t)dt dans (R_n[X], <.,.> = int_0^1).

**Resultats :** u est symetrique (via binome), decomposition spectrale (x+y)^n = sum lambda_j*P_j(x)*P_j(y).

### Maths 2 -- Sommes de puissances des VP (formules de Newton)
**Priorite : P1** | `reduction-algebrique`, `polynomes`
**Difficulte :** Intermediaire | **Type :** Classique

**Theme :** S_k = sum lambda_i^k. Lien avec les coefficients du polynome caracteristique. Diagonalisation, polynomes annulateurs.

---

## 2018

**Themes identifies :**

### Maths 1 -- 4 exercices
1. **Produit scalaire sur R[X] et projection** (`espaces_prehilbertiens`) -- P2, Standard
2. **Loi de Poisson, parite** (`probabilites_spe`) -- P1, Standard
3. **Series harmoniques, series entieres H(x), S(x), T(x)** (`series-entieres`) -- P1, Intermediaire
4. **Reduction d'endomorphisme** (`reduction-algebrique`) -- P1, Standard

### Maths 2 -- Probabilites + algebre euclidienne
**Priorite : P2** | 5 parties -- Intermediaire a avance, Original

---

## 2017

**Themes identifies :**

### Maths 1 -- 3 exercices
1. **Series trigonometriques, endomorphisme fonctionnel** (`suites-series-fonctions`) -- P2, Intermediaire
2. **Matrices stochastiques, diagonalisation, nilpotentes** (`reduction-algebrique`, `probabilites_spe`) -- P1, Intermediaire
3. **VA entieres, fonctions generatrices** (`probabilites_spe`, `series-entieres`) -- P1, Intermediaire

### Maths 2 -- 2 exercices
1. **Theoreme spectral, exponentielle de matrice** (`reduction-geometrique`, `equations-differentielles-spe`) -- P1, Avance
2. **Sous-groupes compacts de GL_n** (`endomorphismes-euclidiens`, `topologie`) -- P3, Avance

---

# PARTIE II -- PHYSIQUE-CHIMIE MP (2025 -> 2020)

---

## 2025

**PDF** : [Corrige MP 2025 - physique](https://www.e3a-polytech.fr/wp-content/uploads/2025/07/corrige_MP_2025.pdf)
**Theme general :** Suivi medical d'un spationaute

### Partie I -- Pesee en impesanteur
**Priorite : P1** | `mecanique-spatiale-et-referentiels`, `oscillateurs-circuits-et-signaux`
**Difficulte :** Standard

- Poids vs pesanteur vs impesanteur
- Mesure de masse par oscillateur masse-ressort : T = 2pi*sqrt(m/k)
- Estimation de la masse d'un spationaute
- **Formules :** F = -kx, T = 2pi*sqrt(m/k), poids apparent P = mg

**Classiques a savoir faire :**
1. Distinguer referentiel geocentrique et terrestre
2. Comparer poids et force gravitationnelle
3. Calculer vitesse orbitale et periode
4. Comprendre pourquoi l'ISS est en impesanteur apparente

### Partie II -- Epreuve d'effort et acide lactique
**Priorite : P2** | `electromagnetisme-et-ondes`, `mesures-et-analyses-experimentales`
**Difficulte :** Standard

- Production d'acide lactique lors de l'effort
- Dosage acido-basique, pKa, courbe de titrage, solution tampon
- Utiliser le theoreme d'Ampere, symetries et invariances

### Partie III -- Osteodensitometrie
**Priorite : P1** | `electromagnetisme-et-ondes`
**Difficulte :** Intermediaire

- Rayons X a deux longueurs d'onde
- Loi d'attenuation : I = I_0 * exp(-mu*x) (Beer-Lambert pour X)
- Coefficient d'attenuation lineique mu
- Energie du photon E = hv
- **Formules :** I = I_0*e^{-mu*x}, E = hv = hc/lambda

**Classiques a savoir faire :**
1. Redonner Maxwell
2. Retrouver l'equation de propagation
3. Relier champ, onde, energie et interpretation physique

### Partie IV -- Electrocardiogramme / fibres nerveuses
**Priorite : P2** | `electromagnetisme-et-ondes`, `oscillateurs-circuits-et-signaux`
**Difficulte :** Avance

- Propagation de signaux electriques : modele de cable (RC distribue)
- Vecteur d'onde complexe dans un conducteur ohmique
- Profondeur de penetration delta
- **Formules :** Equations de Maxwell, ARQS, delta = sqrt(2/(mu_0*sigma*omega))

---

## 2024

**PDF** : [Corrige MP 2024 - physique](https://www.e3a-polytech.fr/wp-content/uploads/2024/06/corrige_MP_2024.pdf)
**Theme general :** Interaction champ EM / matiere + Isomerisation

### Partie I -- OEM dans le vide (Q2-Q9)
**Priorite : P1** | `electromagnetisme-et-ondes`
**Difficulte :** Standard (cours)

- Equation de d'Alembert, c = 1/sqrt(epsilon_0*mu_0)
- Transversalite de E et B
- Relation de dispersion k = omega/c
- Vecteur de Poynting, intensite moyenne

**Classiques a savoir faire :**
1. Passer de Maxwell a d'Alembert
2. Caracteriser une onde plane
3. Calculer B, Pi, densite d'energie et moyennes temporelles

### Partie II -- Modele de Bohr (Q10-Q20)
**Priorite : P2** | `mecanique-spatiale-et-referentiels`
**Difficulte :** Intermediaire

- Quantification du moment cinetique orbital
- Niveaux d'energie : E_n = -13.6/n^2 eV
- Serie de Balmer : lambda = hc/DeltaE
- **Formules :** E_n = -E_0/n^2, lambda_{n->m} = hc/(E_n - E_m)

**Classiques a savoir faire :**
1. Exploiter la conservation du moment cinetique
2. Ecrire la dynamique circulaire
3. Retrouver a_0, E_0 et les transitions d'energie

### Partie III -- Reflexion sur conducteur parfait
**Priorite : P1** | `electromagnetisme-et-ondes`
**Difficulte :** Intermediaire

- Conditions aux limites, onde stationnaire
- Pression de radiation

**Classiques a savoir faire :**
1. Imposer les conditions de passage
2. Deduire le champ reflechi
3. Calculer une pression a partir du flux d'impulsion

### Partie IV -- Force ponderomotrice
**Priorite : P2** | `electromagnetisme-et-ondes`, `oscillateurs-circuits-et-signaux`
**Difficulte :** Intermediaire a avance

- Force moyenne sur une charge dans un champ oscillant
- Notation complexe pour la vitesse

### Chimie -- Cinetique d'isomerisation (~20%)
**Difficulte :** Standard

- Ordres de reaction, constante de vitesse
- Loi d'Arrhenius : k = A*exp(-E_a/RT)
- Analyse de code Python (interpretation de resultats)

---

## 2023

**PDF** :
- [Rapport Physique-Chimie MP 2023](https://www.e3a-polytech.fr/wp-content/uploads/2023/06/Rapport-Physique-Chimie-MP-2023.pdf)
- [Corrige MP 2023 - physique](https://www.e3a-polytech.fr/wp-content/uploads/2025/03/Corrige-MP-2023.pdf)

**Theme general :** Vivre dans l'espace (44+ questions)

### I.1 -- Attraction gravitationnelle (Q1-Q4)
**Priorite : P1** | `mecanique-spatiale-et-referentiels`
**Difficulte :** Standard

- Referentiel galileen vs geocentrique vs terrestre
- F_G = -GMm/r^2, E_p = -GMm/r
- Vitesse de liberation v_lib = sqrt(2GM/R_T)

**Classiques a savoir faire :**
1. Definir un referentiel galileen sans phrase vague
2. Faire un raisonnement energetique complet
3. Projeter proprement les equations du mouvement

### I.2 -- Tir de boulet de canon (Q5-Q16)
**Priorite : P1** | `mecanique-spatiale-et-referentiels`
**Difficulte :** Intermediaire a avance

- Frottement quadratique F_f = -gamma*v*|v|
- Vitesse limite v_lim = sqrt(mg/gamma)
- Regime transitoire tau, exploitation graphique
- Force de Coriolis en referentiel terrestre
- **Formules :** F_Coriolis = -2m*(omega^v), v_lim = sqrt(mg/gamma)
- **AN :** D = 15 cm, m = 12 kg, v_0 = 650 m/s

### II.1-II.3 -- Station spatiale (Q17-Q24)
**Priorite : P1** | `mecanique-spatiale-et-referentiels`
**Difficulte :** Intermediaire

- Impesanteur en orbite
- Station toroidale de Von Braun (R_S = 100 m)
- Pesanteur artificielle g_a = Omega^2*R_S -> Omega ~ 0.31 rad/s
- Coriolis dans la station, vitesse critique v_i
- Question ouverte : jonglage en impesanteur

**Classiques a savoir faire :**
1. Bilan des forces et forces d'inertie
2. Lecture correcte d'un referentiel non galileen

### III -- Stocker l'energie (Q25-Q44+)
**Priorite : P2** | `electrochimie-et-materiaux`
**Difficulte :** Intermediaire a avance

**Cristallographie du nickel (Q25-Q37) :**
- Nickel CFC : coordinence 12, a = 2*sqrt(2)*R_Ni
- Loi de Bragg : 2d*sin(theta) = n*lambda
- Montage goniometrique, rayons X
- AN : theta_1 = 14.0 deg, lambda = 0.171 nm -> a, R_Ni, compacite
- Verification par rho = 8.90 g/cm^3

**Accumulateur Cd-Ni (Q38-Q44+) :**
- Nombres d'oxydation de Ni et Cd
- Diagramme E-pH du nickel
- Loi de Nernst, reaction de fonctionnement

**Classiques a savoir faire :**
1. Relier proprietes macroscopiques et liaison metallique
2. Argumenter qualitativement sans paraphrase

---

## 2022

**PDF** :
- [Sujet Physique-Chimie MP 2022](https://www.e3a-polytech.fr/wp-content/uploads/2022/07/MP9PC.pdf)
- [Rapport MP 2022 - physique](https://www.e3a-polytech.fr/wp-content/uploads/2022/07/rapport_MP_2022.pdf)

**Theme general :** Diapason + Ammoniac

### Partie I -- Reponse percussionnelle (Q1-Q9)
**Priorite : P1** | `oscillateurs-circuits-et-signaux`
**Difficulte :** Intermediaire

- m*z'' + lambda*z' + k*z = 0
- f_0 = (1/2pi)*sqrt(k/m), Q = sqrt(km)/lambda
- AN : f_0 = 500 Hz, m = 30 g -> k ~ 3*10^5 N/m, Q ~ 500

**Classiques a savoir faire :**
1. Ecrire l'ODE d'un oscillateur amorti
2. Distinguer regime libre et reponse mesuree

### Partie II -- Generation du champ excitateur (Q10-Q16)
**Priorite : P1** | `electromagnetisme-et-ondes`
**Difficulte :** Standard

- Solenoide : B = mu_0*n*I
- AN : n = 10^3 spires/m, I = 0.1 A -> B_0 ~ 1.3*10^{-4} T

**Classiques a savoir faire :**
1. Utiliser Ampere
2. Justifier direction, sens et dependance du champ

### Partie III -- Interaction champ/diapason (Q17-Q22)
**Priorite : P2** | `electromagnetisme-et-ondes`, `oscillateurs-circuits-et-signaux`
**Difficulte :** Intermediaire

- Force magnetique en cos^2(omega*t)
- **Piege :** f_source = 128 Hz (pas 256) car force en cos^2 = (1+cos(2wt))/2

**Classiques a savoir faire :**
1. Calculer une force de Laplace
2. Coupler un modele mecanique et un modele electromagnetique

### Partie IV -- Oscillateur de relaxation (Q23-Q29)
**Priorite : P2** | `oscillateurs-circuits-et-signaux`, `mesures-et-analyses-experimentales`
**Difficulte :** Intermediaire

- Tube fluorescent : tensions d'allumage/extinction
- Courbe de resonance du diapason

### Chimie -- Ammoniac (Q30-Q40)
**Priorite : P2** | `electrochimie-et-materiaux`
**Difficulte :** Intermediaire

- 3H_2 + N_2 -> 2NH_3 : Delta_r H = -114.7 kJ/mol
- K_1 = exp(-DeltaG/RT), effet de P (Le Chatelier -> P = 300 bar)
- Role du catalyseur Fe
- Cristallographie du fer : CC

---

## 2021

**PDF** :
- [Corrige Physique-Chimie MP 2021](https://www.e3a-polytech.fr/wp-content/uploads/2021/07/Corrig%C3%A9-Physique-Chimie-MP-2021.pdf)
- [Rapport Physique-Chimie MP 2021](https://www.e3a-polytech.fr/wp-content/uploads/2021/07/RAPPORT-Physique-Chimie-MP-2021.pdf)

**Theme general :** Mission Juno

### Bloc 1 -- Mission Juno / Jupiter
**Priorite : P1** | `mecanique-spatiale-et-referentiels`
**Difficulte :** Intermediaire

- Masse de Jupiter via T^2 = 4pi^2*a^3/(GM_J) (3eme loi de Kepler)
- Vitesse de liberation v_lib = sqrt(2GM/R)
- Orbite de Juno : forces centrales, moment cinetique
- Champ gravitationnel non uniforme (termes multipolaires)

**Classiques a savoir faire :**
1. Regression lineaire / lecture de loi puissance
2. Exploitation de Kepler
3. Ordres de grandeur orbitaux

### Bloc 2 -- Physique appliquee
**Priorite : P2** | `mecanique-spatiale-et-referentiels`, `mesures-et-analyses-experimentales`

Suite de sous-problemes de physique spatiale autour de la sonde.

### Bloc 3 -- Accumulateurs de nouvelle technologie
**Priorite : P2** | `electrochimie-et-materiaux`
**Difficulte :** Intermediaire

- Accumulateurs lithium-ion / sodium-ion
- Cristallographie du germanium (structure diamant)

**Classiques a savoir faire :**
1. Comparer deux technologies
2. Lire les arguments de chimie/materiaux sans perdre le sens physique

---

## 2020

**PDF** : [Corrige Physique-Chimie MP 2020](https://www.e3a-polytech.fr/wp-content/uploads/2020/12/corrige_MP-Physique-Chimie.pdf)
**Theme general :** Haut-parleur / Titane

### Partie I -- Modelisation d'un haut-parleur electrodynamique
**Priorite : P1** | `electromagnetisme-et-ondes`, `oscillateurs-circuits-et-signaux`
**Difficulte :** Intermediaire

- U = R*I + L*dI/dt + Bl*v (equation electrique)
- m*dv/dt + lambda_m*v + k*x = Bl*I (equation mecanique)
- Impedance equivalente Z(omega)

**Classiques a savoir faire :**
1. Ecrire Faraday sans erreur de signe
2. Ecrire une force de Laplace
3. Coupler circuit et mecanique

### Partie II -- Impedance electrique equivalente
**Priorite : P1** | `oscillateurs-circuits-et-signaux`
**Difficulte :** Intermediaire

**Classiques a savoir faire :**
1. Passer en amplitudes complexes
2. Lire une impedance comme somme de contributions physiques

### Partie III -- Mesure de Z
**Priorite : P2** | `mesures-et-analyses-experimentales`, `oscillateurs-circuits-et-signaux`

- Rapport de tensions, montage de mesure, interpretation

### Partie IV -- Mesure de |X|
**Priorite : P2** | `mesures-et-analyses-experimentales`

- Choix de composants, bande de frequence, exploitation d'une notice

### Chimie -- Extraction et alliages du titane
**Priorite : P2** | `electrochimie-et-materiaux`

- Configuration electronique, ions, extraction, nitrure de titane, cristallographie
- TiN structure NaCl, TiO_2 photocatalyse
- Procede Kroll, Ziegler-Natta

---

# PARTIE III -- SYNTHESE

---

## Statistiques de frequence -- Maths MP (2017-2025)

| Chapitre | Apparitions | Priorite |
|---|---|---|
| `reduction-algebrique` / `reduction-geometrique` | 25+ (toutes filieres), present **chaque annee** | MAXIMALE |
| `series-entieres` | 18+ | MAXIMALE |
| `integrales-impropres` / `integrales-parametres` | 16+ | MAXIMALE |
| `probabilites_spe` | 15+ (absent MP 2025 mais present toutes les autres annees) | TRES HAUTE |
| `espaces_prehilbertiens` / `endomorphismes-euclidiens` | 12+ | TRES HAUTE |
| `polynomes` | 10+ | TRES HAUTE |
| `matrices` / `determinants` | 10+ | HAUTE |
| `suites-series-fonctions` | 8+ | HAUTE |
| `equations-differentielles-spe` | 7+ | HAUTE |
| `series-numeriques-spe` | 6+ | HAUTE |
| `calcul-differentiel` | 3 (en forte hausse depuis 2025) | MOYENNE |
| `suites-numeriques` | 5+ | MOYENNE |
| `complexes` / `trigonometrie` | 5+ | MOYENNE |
| `topologie` / `espaces-vectoriels-normes` | 2-3 | FAIBLE |
| `groupes-spe` / `anneaux-spe` | 0-1 | FAIBLE |

## Statistiques de frequence -- Physique MP (2020-2025)

| Theme | Annees presentes | Total |
|---|---|---|
| **Electromagnetisme / OEM** | 2020, 2022, 2024, 2025 | 4+ |
| **Mecanique / Gravitation** | 2021, 2023, 2025 | 3+ |
| **Oscillateurs / Circuits** | 2020, 2022, 2025 | 3+ |
| **Cristallographie** | 2020, 2022, 2023 | 3+ |
| **Electrochimie / Materiaux** | 2020, 2021, 2023 | 3+ |
| **Thermochimie** | 2022, 2024, 2025 | 3+ |

## Formules physique les plus demandees

1. **Equations de Maxwell** (Maxwell-Faraday, Maxwell-Ampere, div, rot)
2. **Vecteur de Poynting** Pi = (1/mu_0)*ExB
3. **Lois de Kepler** T^2 = 4pi^2*a^3/(GM)
4. **Oscillateur** f_0 = (1/2pi)*sqrt(k/m), Q = sqrt(km)/lambda
5. **Effet de peau** delta = sqrt(2/(mu_0*sigma*omega))
6. **Loi de Nernst** E = E^0 + (RT/nF)*ln(Q)
7. **Bragg** 2d*sin(theta) = n*lambda
8. **Cristallographie** rho = Z*M/(N_A*V_maille)
9. **Beer-Lambert** A = epsilon*l*c (et I = I_0*e^{-mu*x})
10. **Loi d'Arrhenius** k = A*exp(-E_a/RT)

---

## Ordre de travail recommande

### Maths MP

| Vague | Chapitres | Justification |
|---|---|---|
| 1 | `probabilites_spe` | Exos courts, tres recyclables, present quasi chaque annee |
| 2 | `series-entieres`, `suites-series-fonctions`, `integrales-impropres`, `integrales-parametres` | Zone la plus recurrente du recent, couleur E3A forte (Gamma, gaussiennes) |
| 3 | `reduction-algebrique`, `reduction-geometrique`, `endomorphismes-euclidiens` | Bloc le plus frequent historiquement, meilleur reservoir algebre |
| 4 | `calcul-differentiel`, `topologie`, `espaces-vectoriels-normes` | En hausse 2025, structure beaucoup d'exercices |
| 5 | `equations-differentielles-spe`, `series-numeriques-spe`, `groupes-spe`, `anneaux-spe` | Moins centraux dans le recent, a integrer apres stabilisation du noyau |

### Physique MP

| Vague | Chapitres | Justification |
|---|---|---|
| 1 | `mecanique-spatiale-et-referentiels` | Recurrence la plus nette (2021, 2023, 2025) |
| 2 | `electromagnetisme-et-ondes` | Tres recurrent sous forme appliquee (2020, 2022, 2024, 2025) |
| 3 | `oscillateurs-circuits-et-signaux` | E3A aime les montages modelisables par ODE et impedances |
| 4 | `electrochimie-et-materiaux` | Sujet recurrent lie a un theme applique |
| 5 | `mesures-et-analyses-experimentales` | Transversal, methode plus que chapitre |

---

## Top 10 exercices classiques a maitriser (maths)

1. **Diagonaliser via polynome annulateur** (lemme des noyaux) -- PC 2023, MP 2024
2. **Endomorphisme de R_n[X]** (Taylor, VP, sous-espaces propres) -- MP 2023, 2025
3. **Produit scalaire integral sur R_n[X]** + projection orthogonale -- MP 2020, PC 2020, 2024
4. **Integrales de Wallis / Gamma / gaussiennes** -- MP 2022, PC 2022, 2023
5. **Loi de Poisson + parite / Loi geometrique** -- PC 2024, MP 2018, 2024
6. **Reflexion orthogonale** phi_u(x) -- PC 2023
7. **Cesaro par convergence dominee** -- MP 2020
8. **Optimisation sous contrainte** (3 methodes) -- MP 2025
9. **Exponentielle de matrice** pour systeme differentiel -- PC 2019, MP 2017
10. **Rayon de convergence + somme de serie entiere** -- present chaque annee

## Top exercices classiques physique MP

1. **Mecanique orbitale + Kepler** -- MP 2021, 2023
2. **OEM dans le vide : Maxwell -> d'Alembert -> Poynting** -- MP 2024, 2025
3. **Oscillateur amorti : ODE + resonance** -- MP 2022
4. **Haut-parleur : couplage electromecanique + impedance** -- MP 2020
5. **Cristallographie CFC + Bragg** -- MP 2022, 2023
6. **Referentiel non galileen + Coriolis** -- MP 2023, 2025
7. **Pression de radiation** -- MP 2024
8. **Accumulateurs electrochimiques + Nernst** -- MP 2021, 2023

---

## Conseils du jury

1. **Connaitre le cours** : beaucoup de questions sont des applications directes
2. **Questions de cours** : elles permettent de marquer des points facilement
3. **Traiter toutes les parties** : les exercices sont independants, parcourir tout le sujet
4. **Soigner la redaction** : justifier les hypotheses des theoremes utilises
5. **Critiquer les resultats** : homogeneite, cas limites, ordres de grandeur
6. **Maitriser les fondamentaux sur TOUT le programme** : E3A couvre largement
7. **Ne pas negliger la chimie** : elle represente ~30% du sujet de physique-chimie
