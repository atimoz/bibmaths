# SYNTHESE DE VERIFICATION — E3A-PC Physique 2013-2018

**Date** : 2026-04-10
**Scope** : 6 annees, 12 fichiers HTML (6 enonces + 6 corrections), vs 6 PDFs originaux
**Methode** : Comparaison exhaustive par agents (1 agent/annee en parallele)

---

## BILAN GLOBAL

| Annee | Critiques | Elevees | Moderees | Mineures | Total | Verdict |
|-------|-----------|---------|----------|----------|-------|---------|
| 2013  | 1         | 0       | 9        | 7        | 17    | A REPRENDRE |
| 2014  | 5         | 0       | 12       | 7        | 24    | A REPRENDRE |
| 2015  | 1         | 0       | 0        | 4        | 5     | CORRECTIF CIBLE |
| 2016  | 0         | 0       | 7        | 6        | 13    | CORRECTIF CIBLE |
| 2017  | 0         | 0       | 1        | 1        | 2     | QUASI-CONFORME |
| 2018  | 0         | 2       | 4        | 2        | 8     | CORRECTIF CIBLE |
| **TOTAL** | **7** | **2** | **33** | **27** | **69** | |

**Constats transversaux** :
- Accents absents dans tous les fichiers (choix delibere, coherent — non comptabilise comme erreur critique)
- Citations correction vs enonce : globalement fideles (erreurs propagees de l'enonce, pas de reformulation)
- KaTeX : 0 erreur de rendu detectee sur l'ensemble
- Physique des corrections : 0 erreur de calcul detectee (toutes les AN verifiees sont correctes)
- Questions "manquantes" dans corrections 2015/2016 : ce sont des chapeaux introductifs, pas de vraies questions

---

## ERREURS CRITIQUES (7 au total — a corriger en premier)

### 1. [2013] Numerotation des questions dans l'enonce
- **Probleme** : L'enonce utilise "Question 1, 2, 3..." avec remise a zero par partie. Le PDF et la correction utilisent "A1, B1, C1, D1". Quatre questions differentes portent le libelle "Question 1".
- **Impact** : Correspondance enonce/correction cassee pour l'utilisateur
- **Fichier** : `e3a-pc-2013-physique.html` — refaire toute la numerotation + table des matieres
- **Effort** : ELEVE (touche 47 questions + table des matieres + structure HTML)

### 2. [2014] Definitions T_S et T_infty INVERSEES
- **Probleme** : L'intro de la partie C definit T_S comme "temperature du fluide" alors que c'est la temperature du solide (et inversement pour T_infty)
- **Impact** : Toute la partie C a des definitions inversees
- **Fichier** : `e3a-pc-2014-physique.html` ligne 137

### 3. [2014] Bi << 1 remplace par Bi = 1
- **Probleme** : Q C7 demande le cas Bi << 1 (PDF), le HTML demande Bi = 1 — situations physiques differentes
- **Fichier** : `e3a-pc-2014-physique.html` ligne 180
- **Note** : La correction traite aussi Bi = 1 (erreur propagee) — corriger dans les deux fichiers

### 4. [2014] T_K (289 K) remplace par T_S (273 K)
- **Probleme** : Q F3 — T_K est l'air injecte en cabine (289 K), T_S est la sortie turbine (273 K). Ce ne sont pas les memes grandeurs.
- **Fichier** : `e3a-pc-2014-physique.html` ligne 302

### 5. [2014] T_C remplace par T_1 (Q F5)
- **Probleme** : PDF demande T_C (sortie vanne detente), HTML demande T_1 (sortie echangeur). La correction utilise une 3e notation T_O.
- **Fichier** : `e3a-pc-2014-physique.html` ligne 330 + correction ligne 857

### 6. [2014] Altitude 6 km remplacee par 5 km (Q G3)
- **Probleme** : Valeur numerique factuelle changee
- **Fichier** : `e3a-pc-2014-physique.html` ligne 374
- **Impact** : Faible sur le calcul (domine par altitude satellite), mais infidele au PDF

### 7. [2015] Unite de lambda : W.m^{-2}.K^{-1} au lieu de W.m^{-1}.K^{-1}
- **Probleme** : m^{-2} est l'unite d'un coefficient de transfert, pas d'une conductivite thermique
- **Fichier** : `e3a-pc-2015-physique.html` ligne 62
- **Note** : La correction signale cela comme "coquille de l'enonce" alors que c'est une erreur de retranscription

---

## ERREURS ELEVEES (2 au total)

### 8. [2018] U^t au lieu de L^t (Q23/Q24)
- **Probleme** : P = L^t x L (PDF) transcrit comme P = U^t x L — confusion avec le coefficient U de la partie I
- **Fichier** : `e3a-pc-2018-physique.html` lignes 272, 277

### 9. [2018] Seuil Newton-Raphson 10^{-3} au lieu de 10^{-5} (Q39)
- **Probleme** : Precision du critere d'arret modifiee d'un facteur 100
- **Fichier** : `e3a-pc-2018-physique.html` ligne 393 + correction

---

## ERREURS MODEREES NOTABLES (selection des plus impactantes)

| # | Annee | Question | Erreur | Fichier |
|---|-------|----------|--------|---------|
| 10 | 2013 | B18 | "Faire un calcul" au lieu de "Sans faire de calcul" — sens inverse | enonce L293 |
| 11 | 2013 | A12 | F_0 au lieu de E_0 — symbole indefini | enonce L159 |
| 12 | 2013 | B4 intro | u_x au lieu de u — direction erronee du champ | enonce L218 |
| 13 | 2013 | B13 | Texte corrompu "trouver dans premiers reels" | enonce L267 |
| 14 | 2014 | Systematique | T_FL -> T_infty, T_MA -> T_Mh, omega_p -> omega_0, R_T -> R_e, t_i -> t_e | enonce global |
| 15 | 2014 | E1/E2 | Questions fusionnees puis dupliquees | enonce L272-277 |
| 16 | 2015 | II.B.2.j(vii) | Seuil convergence 10^{-5} au lieu de 10^{-2} (x2) | enonce L263, L365 |
| 17 | 2016 | Intro | "triphasique" au lieu de "biphasique" — erreur factuelle | enonce L78 |
| 18 | 2016 | Q3.3.c | x_N^0 = 10^5 au lieu de 10^{-5} — signe exposant | enonce L296 |
| 19 | 2016 | Q3.3.c | Denominateur ecart relatif x_N au lieu de x_M | enonce L296 |
| 20 | 2016 | Q3.11 | Unite a_opt : m^2.m^{-1} au lieu de m^2.m^{-3} | enonce L392 |
| 21 | 2018 | Intro | Temperature Seveso 159 degC au lieu de 150 degC | enonce L63 |

---

## PAR ANNEE — RESUME DES ACTIONS

### 2013 — A REPRENDRE
L'enonce doit etre fondamentalement revu :
- Refaire toute la numerotation (A1-A16, B1-B18, C1-C7, D1-D6)
- Corriger 9 erreurs de retranscription moderees (textes corrompus, symboles errones, sens inverse)
- Restructurer la section D (sortir du scope de Q7c)

### 2014 — A REPRENDRE
L'enonce le plus problematique avec 5 erreurs critiques :
- Corriger les inversions T_S/T_infty dans l'intro partie C
- Corriger Bi << 1, T_K, T_C, altitude 6 km
- Corriger les 12 changements de notation systematiques (T_FL, omega_p, R_T, etc.)
- Verifier et corriger la correction aux endroits ou elle propage les erreurs (C7, F3, F5, G3)

### 2015 — CORRECTIF CIBLE
- Corriger l'unite de lambda (m^{-2} -> m^{-1}) dans l'enonce L62
- Corriger le seuil de convergence (10^{-5} -> 10^{-2}) dans l'enonce L263 et L365 + correction
- Corriger la notation T_{ext}^2 -> T_{ext2} dans l'intro
- Supprimer le piege "coquille de l'enonce" dans la correction (devenu obsolete apres correction)

### 2016 — CORRECTIF CIBLE
- Corriger "triphasique" -> "biphasique" L78
- Corriger x_N^0 = 10^5 -> 10^{-5} L296
- Corriger "dans les conditions" -> "dont les conditions" L78
- Corriger denominateur ecart relatif x_N -> x_M L296
- Corriger unite a_opt m^{-1} -> m^{-3} L392
- Corriger a_L -> k_L L411
- Corriger donnee tableau 1.8993 -> 1.8991
- Corriger annexe Scilab (readl -> read, x_transx' -> x_trans=x')

### 2017 — QUASI-CONFORME
- Corriger la description Figure 2 : courant court-circuit phi_T=1100 W/m^2 est ~9-10 A, pas 5 A
- (Optionnel) Ajouter note sur correction "seleniunm" -> "selenium"

### 2018 — CORRECTIF CIBLE
- Corriger U^t -> L^t aux Q23, Q24 (enonce + verifier correction)
- Corriger seuil Q39 : 10^{-3} -> 10^{-5} (enonce + correction)
- Corriger temperature Seveso 159 -> 150 degC
- Corriger nomenclature chimique (retablir tirets)

---

## POINTS POSITIFS

- **Physique des corrections** : 0 erreur de calcul detectee sur l'ensemble des 6 annees
- **KaTeX** : 0 erreur de rendu sur 12 fichiers
- **Citations** : Les corrections ne reformulent pas les questions (regle respectee)
- **Completude** : Toutes les questions sont presentes dans tous les fichiers
- **2017** : Retranscription quasi-parfaite malgre le format cahier-reponses de 48 pages
- **Pedagogie** : Les encadres (rappel, piege, method, why) sont pertinents et utiles

---

## RAPPORTS DETAILLES

- [rapport-2013.md](rapport-2013.md)
- [rapport-2014.md](rapport-2014.md)
- [rapport-2015.md](rapport-2015.md)
- [rapport-2016.md](rapport-2016.md)
- [rapport-2017.md](rapport-2017.md)
- [rapport-2018.md](rapport-2018.md)
