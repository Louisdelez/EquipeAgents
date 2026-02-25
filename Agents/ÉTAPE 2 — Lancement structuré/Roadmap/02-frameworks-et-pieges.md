# Roadmap -- Frameworks et Pieges

## Ressources et frameworks de reference

### 1. NOW / NEXT / LATER (ProductBoard)
Au lieu de dates fixes, organise la roadmap en trois horizons :
- **NOW** : Ce sur quoi on travaille activement (engagement ferme, 2-4 semaines)
- **NEXT** : Ce qui vient juste apres (haute confiance, 1-3 mois)
- **LATER** : Ce qu'on envisage pour l'avenir (exploratoire, 3-12 mois)

**Avantage :** Evite le piege des dates fixes et communique le niveau de certitude.

### 2. Theme-based Roadmaps (Spotify)
Spotify organise sa roadmap par **themes strategiques** plutot que par fonctionnalites :
- Chaque theme est lie a un objectif business ou utilisateur
- Les fonctionnalites sont regroupees sous les themes
- On peut changer les fonctionnalites sous un theme sans changer la direction strategique

Exemple : Au lieu de "Ajouter la fonctionnalite X", le theme serait "Ameliorer l'onboarding" avec plusieurs initiatives possibles.

### 3. Outcome-driven Roadmaps vs Feature-based
**Feature-based (a eviter) :** "En Q1, on livrera la fonctionnalite A, B, C"
- Probleme : enferme l'equipe dans des solutions predefinies, ne laisse pas de place a l'apprentissage.

**Outcome-driven (a privilegier) :** "En Q1, on veut atteindre un taux de conversion de 5%"
- Avantage : donne de la liberte a l'equipe pour trouver la meilleure solution, le focus est sur le resultat.

### 4. GIST (Google: Goals, Ideas, Steps, Tasks)
Framework de planification a quatre niveaux :
- **Goals** : Objectifs strategiques a long terme (1-5 ans), peu nombreux, stables
- **Ideas** : Hypotheses de comment atteindre les goals (nombreuses, on en teste beaucoup)
- **Steps** : Petites experiences pour valider les ideas (1-2 semaines)
- **Tasks** : Travail concret dans chaque step (heures/jours)

Les Goals alimentent la roadmap. Les Ideas sont les initiatives. Les Steps sont les sprints.

### 5. Shape Up (Basecamp)
Basecamp travaille en cycles de 6 semaines :
- **6 semaines de travail** : L'equipe a un "appetite" (budget temps) fixe et doit livrer dans ce cadre
- **2 semaines de cooldown** : Pause pour corriger les bugs, explorer de nouvelles idees, se ressourcer
- **Betting table** : Les leaders "parient" sur les projets pour le prochain cycle

**Concept cle : l'appetite.** Au lieu de demander "Combien de temps pour cette fonctionnalite ?", on demande "Combien de temps sommes-nous prets a investir dans cette fonctionnalite ?" Si la reponse est "6 semaines max", la solution doit tenir dans ce budget temps.

### 6. Amazon 6-pager Narrative
Amazon utilise des documents narratifs de 6 pages au lieu de PowerPoints pour presenter la strategie. Pour la roadmap, cela implique :
- Chaque phase doit avoir un narratif clair : pourquoi cette phase, qu'apprend-on, que debloque-t-elle ?
- Les transitions entre phases doivent etre justifiees
- Les hypotheses de planification doivent etre explicitees

### 7. Opportunity Solution Trees (Teresa Torres)
Framework qui connecte :
- **Outcome desire** (objectif) -> **Opportunites** (problemes/besoins utilisateur) -> **Solutions** (fonctionnalites possibles) -> **Experiments** (comment valider)

Utilise ce framework pour verifier que chaque element de la roadmap est connecte a un outcome.

---

## Pieges courants et comment les eviter

### Piege 1 -- La roadmap Gantt
**Probleme :** Chaque fonctionnalite a une date precise de debut et de fin. La roadmap ressemble a un planning de chantier.
**Solution :** Utilise NOW/NEXT/LATER ou des trimestres, pas des semaines precises. Les dates precises donnent une fausse impression de certitude.

### Piege 2 -- La roadmap feature-driven
**Probleme :** La roadmap est une liste de fonctionnalites sans lien avec les objectifs business.
**Solution :** Chaque element de la roadmap doit repondre a la question : "Quel outcome business ou utilisateur cela genere-t-il ?" Passe a une roadmap outcome-driven.

### Piege 3 -- La roadmap immuable
**Probleme :** La roadmap est creee une fois et devient un engagement contractuel.
**Solution :** Definis clairement ce qui est un engagement (NOW) et ce qui est une intention (NEXT/LATER). Mets a jour regulierement.

### Piege 4 -- Surcharge de l'equipe
**Probleme :** Trop d'initiatives par trimestre, sans tenir compte de la capacite reelle.
**Solution :** Calcule la capacite reelle (60-70% du temps disponible apres support, maintenance, reunions). Prevois du slack (temps libre) pour l'imprevu.

### Piege 5 -- Ignorer la dette technique
**Probleme :** Toute la capacite va aux fonctionnalites, la dette technique s'accumule.
**Solution :** Reserve 15-20% de la capacite pour la dette technique. Integre-la comme un theme a part entiere dans la roadmap.

### Piege 6 -- Pas de jalons de decision
**Probleme :** L'equipe avance tete baissee sans jamais s'arreter pour valider les hypotheses.
**Solution :** Place des "gates" (points de decision) entre chaque phase majeure. A chaque gate, la question est : "Continuons-nous, pivotons-nous ou arretons-nous ?"

### Piege 7 -- La roadmap qui ne communique pas le "pourquoi"
**Probleme :** La roadmap dit "quoi" et "quand" mais pas "pourquoi".
**Solution :** Chaque initiative doit avoir une justification explicite. Utilise le format : "[Initiative] pour [outcome] parce que [evidence/hypothese]."

### Piege 8 -- Confondre roadmap et backlog
**Probleme :** La roadmap contient des user stories et des tickets JIRA.
**Solution :** La roadmap est strategique (themes, initiatives, outcomes). Le backlog est operationnel (user stories, tasks). Ce sont deux niveaux differents.

---

## Criteres de qualite du document final

La Roadmap est consideree comme complete et de qualite si :

- [ ] La vision produit est clairement articulee et sert de fil conducteur
- [ ] Le North Star Metric est defini
- [ ] La roadmap est organisee par outcomes/themes, pas par fonctionnalites
- [ ] Chaque initiative est rattachee a un objectif strategique
- [ ] Le niveau de certitude est clairement communique (NOW = engagement, LATER = intention)
- [ ] Les jalons cles ont des criteres de validation objectifs
- [ ] Les dependances entre initiatives sont identifiees et documentees
- [ ] Les hypotheses de planification sont explicitees
- [ ] La capacite de l'equipe est realiste (pas 100% du temps)
- [ ] Il y a des points de decision (gates/offramps) entre les phases
- [ ] La dette technique est prise en compte
- [ ] Le plan de communication et de mise a jour est defini
- [ ] Le document est comprehensible par toutes les parties prenantes (pas seulement l'equipe tech)
- [ ] Il n'y a pas de surcharge manifeste (trop d'initiatives pour la capacite)
