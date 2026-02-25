# Template — Risk Management Document

## Instructions de rendu

1. **Format :** Le document final doit etre genere en Markdown (.md) propre avec des tableaux et une matrice visuelle.
2. **Exhaustivite :** Couvrir toutes les categories de risques (technique, humain, business, legal, operationnel).
3. **Concret :** Chaque risque doit avoir des actions de mitigation specifiques, pas generiques.
4. **Priorise :** Les risques doivent etre clairement ordonnes par score pour guider l'allocation des efforts.
5. **Livrables :** A la fin de la conversation, genere le document .md complet en un seul bloc de code copiable.
6. **Verification :** Avant de generer le document final, fais un recapitulatif de la matrice des risques et demande validation.
7. **Culture :** Rappelle a l'utilisateur que le document est un outil vivant, pas un livrable ponctuel. La valeur est dans la revue reguliere, pas dans la creation initiale.

---

## Template du document final

```markdown
# Risk Management Document — [Nom du projet/produit]

**Date :** [JJ/MM/AAAA]
**Auteur(s) :** [Noms]
**Statut :** [Brouillon / En revue / Valide]
**Version :** [1.0]
**Prochaine revue :** [Date]

---

## 1. Contexte et appetit pour le risque

### 1.1 Description du projet
[Description du projet, ses objectifs et ses facteurs de succes critiques]

### 1.2 Parties prenantes
| Partie prenante | Role | Preoccupation principale | Influence |
|----------------|------|------------------------|-----------|
| [Equipe produit] | [Execution] | [Delai et qualite] | [Elevee] |
| [Investisseurs] | [Financement] | [ROI et traction] | [Elevee] |
| [Clients] | [Utilisateurs] | [Fiabilite et valeur] | [Moyenne] |
| [Regulateurs] | [Conformite] | [Respect des normes] | [Elevee] |

### 1.3 Appetit pour le risque
| Categorie | Appetit | Justification |
|-----------|---------|--------------|
| Risques techniques | [Modere] | [On accepte de tester de nouvelles technos, avec des fallbacks] |
| Risques financiers | [Faible] | [Runway limite, pas de marge pour des surprises majeures] |
| Risques reglementaires | [Tres faible] | [Conformite non negociable] |
| Risques marche | [Eleve] | [On teste des hypotheses de marche agressives] |

---

## 2. Matrice des risques

### 2.1 Vue d'ensemble
```
Impact
  ^
  |  Critique |          |    R3    |    R1    |    R5    |
  |  Majeur   |          |    R7    |    R2    |          |
  |  Modere   |    R8    |    R4    |    R6    |          |
  |  Mineur   |    R9    |          |          |          |
  |  Negl.    |          |          |          |          |
  +-----------|----------|----------|----------|----------|-->
              Tres faible  Faible     Moyen     Eleve    Prob.
```

### 2.2 Registre des risques (resume)
| ID | Risque | Categorie | Probabilite | Impact | Score | Proprietaire | Strategie | Statut |
|----|--------|-----------|-------------|--------|-------|-------------|-----------|--------|
| R1 | [Description courte] | [Tech/Business/Humain/Legal] | [1-5] | [1-5] | [P*I] | [Nom] | [Eviter/Transferer/Mitiguer/Accepter] | [Ouvert/En cours/Ferme] |
| R2 | [Description courte] | [Categorie] | [1-5] | [1-5] | [P*I] | [Nom] | [Strategie] | [Statut] |
| R3 | [Description courte] | [Categorie] | [1-5] | [1-5] | [P*I] | [Nom] | [Strategie] | [Statut] |

---

## 3. Echelle d'evaluation

### 3.1 Echelle de probabilite
| Niveau | Score | Description | Critere |
|--------|-------|-------------|---------|
| Tres faible | 1 | Improbable | < 5% de chance de se produire |
| Faible | 2 | Peu probable | 5-20% de chance |
| Moyen | 3 | Possible | 20-50% de chance |
| Eleve | 4 | Probable | 50-80% de chance |
| Tres eleve | 5 | Quasi certain | > 80% de chance |

### 3.2 Echelle d'impact
| Niveau | Score | Delai | Cout | Qualite / Scope | Reputation |
|--------|-------|-------|------|----------------|-----------|
| Negligeable | 1 | < 1 semaine de retard | < 1% du budget | Impact minimal | Pas de visibilite externe |
| Mineur | 2 | 1-2 semaines | 1-5% du budget | Feature secondaire impactee | Quelques plaintes isolees |
| Modere | 3 | 2-4 semaines | 5-10% du budget | Feature importante degradee | Insatisfaction mesurable |
| Majeur | 4 | 1-3 mois | 10-25% du budget | Objectif principal menace | Couverture negative, churn |
| Critique | 5 | > 3 mois ou arret | > 25% du budget | Echec du projet | Crise, perte de confiance majeure |

### 3.3 Matrice de priorisation
| Score (P*I) | Priorite | Action requise |
|-------------|----------|---------------|
| 20-25 | **Critique** | Action immediate, escalation direction |
| 12-19 | **Eleve** | Plan de mitigation actif, revue hebdomadaire |
| 6-11 | **Moyen** | Plan de mitigation defini, revue mensuelle |
| 1-5 | **Faible** | Accepte et surveille, revue trimestrielle |

---

## 4. Detail des risques

### R1 — [Titre du risque]
- **Description :** [Description detaillee du risque, contexte et conditions d'occurrence]
- **Categorie :** [Technique / Business / Humain / Legal / Operationnel]
- **Probabilite :** [Score] — [Justification]
- **Impact :** [Score] — [Justification, consequences concretes]
- **Score de risque :** [P x I]
- **Strategie de traitement :** [Eviter / Transferer / Mitiguer / Accepter]
- **Actions de mitigation :**
  | Action | Responsable | Echeance | Statut | Cout estime |
  |--------|------------|----------|--------|-------------|
  | [Action 1] | [Nom] | [Date] | [A faire / En cours / Fait] | [Cout] |
  | [Action 2] | [Nom] | [Date] | [Statut] | [Cout] |
- **Indicateurs d'alerte precoce :**
  - [Signal 1 : ex. "Augmentation de 20% des temps de reponse API"]
  - [Signal 2 : ex. "Depart d'un membre de l'equipe core"]
- **Plan de contingence (si le risque se materialise) :**
  [Description du plan B, actions immediates a entreprendre]
- **Risque residuel apres mitigation :** [Faible / Moyen — justification]

### R2 — [Titre du risque]
[Meme structure detaillee]

### R3 — [Titre du risque]
[Meme structure detaillee]

---

## 5. Suivi des risques

### 5.1 Dashboard de suivi
| Metrique | Valeur actuelle | Tendance | Cible |
|----------|----------------|----------|-------|
| Nombre de risques ouverts | [X] | [Stable / Augmentation / Diminution] | [< Y] |
| Risques critiques ouverts | [X] | [Tendance] | [0] |
| Actions de mitigation en retard | [X] | [Tendance] | [0] |
| Risques materialises ce trimestre | [X] | [Tendance] | [< Y] |
| Score de risque agrege | [X] | [Tendance] | [< Y] |

### 5.2 Historique des changements
| Date | Risque | Changement | Raison |
|------|--------|-----------|--------|
| [Date] | [R1] | [Probabilite 3 -> 4] | [Nouveau signal d'alerte detecte] |
| [Date] | [R5] | [Ferme] | [Mitigation implementee et validee] |
| [Date] | [R10] | [Nouveau risque ajoute] | [Identifie lors de la revue mensuelle] |

---

## 6. Cadence de revue

### 6.1 Rituels de risk management
| Rituel | Frequence | Participants | Objectif | Duree |
|--------|-----------|-------------|---------|-------|
| Revue rapide des risques | Hebdomadaire | Tech Lead + PM | Mise a jour des risques critiques | 15 min |
| Revue complete du registre | Mensuelle | Equipe elargie | Reevaluation de tous les risques ouverts | 1h |
| Pre-Mortem | Trimestrielle | Toute l'equipe | Identification de nouveaux risques | 1h30 |
| Revue strategique des risques | Trimestrielle | Leadership | Alignement appetit/tolerance | 1h |
| Exercice de simulation (Game Day) | Semestrielle | Equipe concernee | Tester les plans de contingence | 2-4h |

### 6.2 Processus d'escalation
| Niveau | Declencheur | Escalade vers | Delai | Action |
|--------|-----------|--------------|-------|--------|
| Normal | Score < 12 | [Tech Lead / PM] | Prochaine revue | Suivi standard |
| Eleve | Score 12-19 | [Engineering Manager] | 24h | Plan de mitigation active |
| Critique | Score >= 20 | [CTO / Direction] | Immediat | Reunion d'urgence + plan d'action |
| Materialise | Risque realise | [Incident Commander] | Immediat | Activation du plan de contingence |

---

## Annexes

### A. Resultats du Pre-Mortem
[Notes de la session Pre-Mortem avec tous les scenarios d'echec imagines]

### B. Analyse Bowtie des risques critiques
[Diagrammes Bowtie pour les risques les plus importants]

### C. Historique des risques materialises
[Lecons tirees des risques qui se sont concretises dans le passe]

### D. Glossaire
| Terme | Definition |
|-------|-----------|
| Risque | Evenement incertain qui, s'il se produit, aurait un effet positif ou negatif sur les objectifs |
| Probabilite | Vraisemblance qu'un risque se materialise |
| Impact | Consequence sur les objectifs si le risque se materialise |
| Mitigation | Action visant a reduire la probabilite ou l'impact d'un risque |
| Contingence | Plan d'action a executer si le risque se materialise |
| Risque residuel | Risque restant apres application des mesures de mitigation |
| Appetit pour le risque | Niveau de risque qu'une organisation est prete a accepter |
```
