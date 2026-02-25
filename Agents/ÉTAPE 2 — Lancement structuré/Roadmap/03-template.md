# Roadmap -- Template du document final

## Template

```markdown
# Roadmap -- [Nom du produit]

> Organise les grandes phases de developpement dans le temps.

---

## Vision produit

**Vision a 1-3 ans :** [Description de la vision]

**North Star Metric :** [La metrique unique qui capture la valeur produit]

**Objectifs strategiques (12 mois) :**
1. [Objectif 1 -- SMART]
2. [Objectif 2 -- SMART]
3. [Objectif 3 -- SMART]

## Roadmap par trimestre

### NOW -- [Periode, ex: Q1 2026]
*Statut : Engage | Niveau de confiance : Eleve*

**Theme 1 : [Nom du theme]**
- Objectif : [Outcome vise]
- Initiatives :
  - [Initiative A] -- [Description courte] -- [Appetite/Budget temps]
  - [Initiative B] -- [Description courte] -- [Appetite/Budget temps]
- Metrique de succes : [Metrique et cible]

**Theme 2 : [Nom du theme]**
- Objectif : [Outcome vise]
- Initiatives :
  - [Initiative C] -- [Description courte] -- [Appetite/Budget temps]
- Metrique de succes : [Metrique et cible]

**Theme Infra/Dette technique :**
- [Initiative technique] -- [Description]

### NEXT -- [Periode, ex: Q2 2026]
*Statut : Probable | Niveau de confiance : Moyen*

**Theme 3 : [Nom du theme]**
- Objectif : [Outcome vise]
- Initiatives envisagees :
  - [Initiative D] -- [Description courte]
  - [Initiative E] -- [Description courte]
- Conditions prealables : [Ce qui doit etre valide avant]

### LATER -- [Periode, ex: S2 2026]
*Statut : Exploratoire | Niveau de confiance : Bas*

**Directions envisagees :**
- [Direction 1] -- [Pourquoi c'est envisage, quelle hypothese sous-tend]
- [Direction 2] -- [Pourquoi c'est envisage, quelle hypothese sous-tend]

**Ce qui pourrait changer cette direction :**
- [Evenement ou apprentissage qui ferait pivoter]

## Jalons cles

| Jalon | Date cible | Critere de validation | Type | Responsable |
|-------|-----------|----------------------|------|-------------|
| [Jalon 1] | [Date] | [Critere objectif et mesurable] | Go/No-Go | [Nom] |
| [Jalon 2] | [Date] | [Critere objectif et mesurable] | Livraison | [Nom] |
| [Jalon 3] | [Date] | [Critere objectif et mesurable] | Review | [Nom] |

### Points de decision (Gates)
- **Gate 1 -- [Date] :** [Question a laquelle on doit repondre. Si la reponse est non, que fait-on ?]
- **Gate 2 -- [Date] :** [Question a laquelle on doit repondre. Si la reponse est non, que fait-on ?]

## Dependances entre phases

```
[Initiative A] --> [Initiative D] (A doit etre terminee avant de commencer D)
[Initiative B] --> [Initiative E] (B fournit l'API necessaire a E)
[Externe: Equipe X] --> [Initiative C] (API tierce necessaire)
```

| Dependance | De | Vers | Type | Risque | Plan B |
|------------|-----|------|------|--------|--------|
| [Description] | [Initiative/Equipe] | [Initiative] | Bloquante/Souple | [Faible/Moyen/Eleve] | [Alternative] |

## Hypotheses de planification

| # | Hypothese | Niveau de confiance | Impact si fausse | Date de verification |
|---|-----------|--------------------|-----------------|--------------------|
| H1 | [Hypothese] | [Eleve/Moyen/Bas] | [Impact] | [Date] |
| H2 | [Hypothese] | [Eleve/Moyen/Bas] | [Impact] | [Date] |

### Capacite de l'equipe
| Parametre | Valeur |
|-----------|--------|
| Taille de l'equipe | [Nombre] |
| Capacite theorique | [100%] |
| Capacite reelle estimee | [60-70%] |
| % dedie aux nouvelles fonctionnalites | [X%] |
| % dedie a la dette technique | [X%] |
| % dedie au support/maintenance | [X%] |

### Scenarios
**Scenario optimiste :** [Ce qu'on pourrait accomplir en plus si tout va bien]

**Scenario pessimiste :** [Ce qu'on livre quand meme si les choses se compliquent]

## Communication et mise a jour

| Audience | Frequence | Format | Canal |
|----------|-----------|--------|-------|
| [Equipe produit] | [Hebdomadaire] | [Standup/Review] | [Canal] |
| [Leadership] | [Mensuel] | [Presentation] | [Canal] |
| [Parties prenantes] | [Trimestriel] | [Email/Document] | [Canal] |

**Prochaine revue de roadmap :** [Date]

---

*Derniere mise a jour : [Date]*
*Auteur : [Nom]*
*Version : 1.0*
*Prochaine revue : [Date]*
```

---

## Instructions de rendu

1. **Ne produis JAMAIS la roadmap avant d'avoir clarifie la vision et les objectifs strategiques.** Une roadmap sans vision est une liste de taches deguisee.
2. **Oriente systematiquement vers une roadmap outcome-driven.** Si l'utilisateur propose une liste de fonctionnalites, aide-le a les regrouper en themes lies a des outcomes.
3. **Challenge le realisme.** Verifie la capacite de l'equipe vs le volume prevu. Une equipe de 3 developpeurs ne peut pas livrer 15 initiatives par trimestre.
4. **Insiste sur les hypotheses.** Chaque decision de planning repose sur des hypotheses. Explicite-les pour que la roadmap puisse etre mise a jour quand elles changent.
5. **Place des points de decision.** La roadmap doit inclure des moments ou l'on s'arrete pour evaluer si on continue dans la meme direction.
6. **Produis le document final en un seul bloc Markdown.** L'utilisateur doit pouvoir copier-coller directement.
7. **Propose une checklist de validation** basee sur les criteres de qualite.
8. **Demande explicitement : "Souhaites-tu que je modifie quelque chose avant de finaliser ?"**
