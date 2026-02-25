# OKRs / Metrics Document -- Frameworks et Pieges

## Ressources et frameworks de reference

### 1. Google OKR Methodology (John Doerr -- "Measure What Matters")
Le systeme OKR (Objectives and Key Results) de Google :

**Objective** : Ce qu'on veut accomplir. Qualitatif, inspirant, ambitieux.
- Doit etre memorable et motivant
- Formule de maniere active : "Devenir le leader de..."
- Duree : generalement 1 trimestre

**Key Results** : Comment on sait qu'on progresse. Quantitatif, mesurable, verifiable.
- 2 a 5 Key Results par Objective
- Chaque KR a une metrique, une baseline (valeur actuelle) et une cible (valeur visee)
- Un KR est binaire : atteint ou non atteint a la fin du trimestre
- Les KR doivent etre des outcomes (resultats), pas des outputs (activites)

**Scoring Google :** 0.0 a 1.0
- **0.7-1.0** : Objectif atteint (vert). Si systematiquement 1.0, les objectifs ne sont pas assez ambitieux.
- **0.4-0.6** : Progres significatif mais objectif non atteint (jaune). C'est le score "normal" chez Google.
- **0.0-0.3** : Peu de progres (rouge). Necessite une analyse.

**Principes cles :**
- Les OKR sont publics et transparents
- Les OKR ne sont PAS lies a la remuneration (sinon les gens visent bas)
- Il faut un mix d'OKR "committed" (on DOIT les atteindre) et "aspirational" (on VISE les atteindre, 70% de succes est normal)

### 2. Spotify's North Star Metric
Spotify utilise une **North Star Metric (NSM)** : la metrique unique qui capture le mieux la valeur delivree aux utilisateurs.

**Caracteristiques d'une bonne NSM :**
- Elle reflete la valeur percue par le client (pas la valeur pour l'entreprise)
- Elle est un leading indicator de la croissance a long terme
- Elle est actionnable : les equipes peuvent l'influencer par leurs actions

**Exemples :**
- Spotify : "Time spent listening" (temps d'ecoute)
- Airbnb : "Nights booked" (nuits reservees)
- Facebook : "Daily Active Users" (utilisateurs actifs quotidiens)
- Slack : "Messages sent in teams with 2000+ messages" (messages envoyes dans les equipes actives)

La NSM est le chapeau de tous les OKR : chaque OKR devrait, directement ou indirectement, contribuer a ameliorer la NSM.

### 3. AARRR Pirate Metrics (Dave McClure)
Framework de metriques organise autour du cycle de vie utilisateur :
- **Acquisition** : Comment les utilisateurs decouvrent-ils le produit ? (trafic, sources, cout d'acquisition)
- **Activation** : Les utilisateurs ont-ils une premiere experience positive ? (onboarding complete, "aha moment")
- **Retention** : Les utilisateurs reviennent-ils ? (taux de retention jour 1/7/30, churn)
- **Revenue** : Les utilisateurs paient-ils ? (conversion, ARPU, LTV)
- **Referral** : Les utilisateurs recommandent-ils le produit ? (NPS, viral coefficient, referrals)

Chaque lettre peut devenir un Objective avec des Key Results associes.

### 4. HEART Framework (Google)
Framework de metriques pour l'experience utilisateur :
- **Happiness** : Satisfaction subjective (NPS, CSAT, SUS)
- **Engagement** : Niveau d'interaction (frequence, intensite, profondeur d'usage)
- **Adoption** : Nouveaux utilisateurs qui commencent a utiliser le produit (activation rate, feature adoption)
- **Retention** : Utilisateurs qui continuent a utiliser le produit (retention rate, churn)
- **Task Success** : Efficacite et efficience des taches (completion rate, time on task, error rate)

Pour chaque dimension HEART, definir :
- **Goals** : Quel objectif ?
- **Signals** : Quel comportement utilisateur indique le succes ?
- **Metrics** : Quelle metrique concrete mesurer ?

### 5. NSM + Input Metrics
Framework qui decompose la North Star Metric en metriques d'input actionnables :

```
North Star Metric
|-- Input Metric 1 (equipe A peut influencer)
|-- Input Metric 2 (equipe B peut influencer)
|-- Input Metric 3 (equipe C peut influencer)
|-- Input Metric 4 (equipe D peut influencer)
```

Les input metrics sont les leviers sur lesquels les equipes peuvent agir. La NSM est le resultat. Cela permet a chaque equipe de savoir comment elle contribue a la NSM.

### 6. Amazon's "Input vs Output Metrics"
Amazon fait une distinction fondamentale :
- **Input metrics** : Ce que l'on controle (nombre de produits en catalogue, temps de livraison promis, nombre de pages de selection)
- **Output metrics** : Ce qui resulte des inputs (revenue, satisfaction client, part de marche)

**Philosophie Amazon :** Concentrez-vous sur les input metrics. Si les inputs sont bons, les outputs suivront. Mais l'inverse n'est pas vrai : fixer un objectif de revenue sans ameliorer les inputs ne sert a rien.

### 7. Counter-metrics (Guardrail Metrics)
Pour chaque metrique que tu optimises, definis une **counter-metric** qui assure que tu ne degrades pas autre chose :
- Si tu optimises le taux de conversion -> surveille le taux de churn (tu ne veux pas convertir des gens qui partent immediatement)
- Si tu optimises le temps de reponse -> surveille le taux d'erreur (tu ne veux pas aller vite en sacrifiant la qualite)
- Si tu optimises l'acquisition -> surveille la retention (tu ne veux pas acquerir des utilisateurs qui ne restent pas)

---

## Pieges courants et comment les eviter

### Piege 1 -- Les KR "activite" au lieu de "resultat"
**Probleme :** "KR : Lancer 3 fonctionnalites ce trimestre." C'est une activite, pas un resultat.
**Solution :** Reformule en resultat : "KR : Augmenter le taux d'adoption de la fonctionnalite X de 10% a 40%." Le test : "Si je lance 3 fonctionnalites mais que personne ne les utilise, le KR est-il atteint ?" Si oui, c'est mal formule.

### Piege 2 -- Les metriques de vanite
**Probleme :** "KR : Atteindre 1 million de pages vues." Les pages vues ne refletent pas la valeur.
**Solution :** Remplace par des metriques qui refletent l'engagement reel : taux de retention, temps d'utilisation, taux de completion des taches.

### Piege 3 -- Pas de baseline
**Probleme :** "KR : Atteindre un NPS de 50." Sans savoir que le NPS actuel est de 48, cela semble ambitieux mais ne l'est pas.
**Solution :** Chaque KR doit avoir baseline + cible. "De [valeur actuelle] a [valeur cible]."

### Piege 4 -- Trop d'OKR
**Probleme :** 8 Objectives avec 5 KR chacun = 40 metriques a suivre. Impossible.
**Solution :** Maximum 3-5 Objectives, 2-4 KR par Objective. La contrainte force la priorisation.

### Piege 5 -- OKR = performance evaluation
**Probleme :** Les OKR sont lies a la remuneration, donc les gens visent des cibles faciles.
**Solution :** Separe explicitement les OKR (outil d'alignement et d'ambition) de l'evaluation de performance. Les OKR aspirationnels doivent avoir un taux de succes de 60-70%, pas 100%.

### Piege 6 -- Ignorer les counter-metrics
**Probleme :** On optimise une metrique en degradant une autre sans s'en rendre compte.
**Solution :** Pour chaque KR, definir au moins une counter-metric. Ex: si on optimise le temps de chargement, surveiller le taux d'erreur.

### Piege 7 -- Les OKR en silo
**Probleme :** Chaque equipe definit ses OKR independamment, sans alignement avec la strategie globale.
**Solution :** Cascade ou alignment : les OKR d'equipe doivent contribuer a un OKR de niveau superieur. Revue croisee entre equipes.

### Piege 8 -- Set and forget
**Probleme :** Les OKR sont definis en debut de trimestre et oublies jusqu'a la fin.
**Solution :** Check-in hebdomadaire (5 minutes), deep-dive mensuel (30 minutes), revue trimestrielle (2 heures). Les OKR sont un outil de pilotage continu, pas un exercice administratif.

### Piege 9 -- Confondre North Star et Revenue
**Probleme :** La NSM est le chiffre d'affaires. C'est un output, pas un indicateur de valeur utilisateur.
**Solution :** La NSM doit refleter la valeur pour l'utilisateur. Le revenue est une consequence d'une bonne NSM, pas la NSM elle-meme.

---

## Criteres de qualite du document final

Le document OKRs / Metrics est considere comme complet et de qualite si :

- [ ] La North Star Metric est definie et justifiee
- [ ] Il y a maximum 3-5 Objectives, chacun qualitatif et inspirant
- [ ] Chaque Objective a 2-4 Key Results mesurables
- [ ] Chaque Key Result a une baseline (valeur actuelle) et une cible (valeur visee)
- [ ] Chaque Key Result est un OUTCOME (resultat), pas un OUTPUT (activite)
- [ ] Les Key Results sont mesurables avec des outils existants ou planifies
- [ ] Des counter-metrics (guardrails) sont definies pour chaque KR
- [ ] La distinction committed/aspirational est faite pour chaque OKR
- [ ] Le tableau de bord est defini (outils, frequence, responsables)
- [ ] La cadence de revue est planifiee (weekly, monthly, quarterly)
- [ ] Les OKR sont alignes avec la strategie de l'entreprise
- [ ] Il n'y a pas de metriques de vanite
- [ ] Le scoring en fin de periode est defini
- [ ] Le document est comprehensible par toutes les parties prenantes
