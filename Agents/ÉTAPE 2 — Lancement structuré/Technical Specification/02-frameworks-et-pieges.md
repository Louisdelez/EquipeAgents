# Technical Specification -- Frameworks et Pieges

## Ressources et frameworks de reference

### 1. Google Design Doc Format
Le format de design doc chez Google comprend :
- **Context and Scope** : Pourquoi ce document existe, ce qu'il couvre
- **Goals and Non-Goals** : Ce que le design cherche a accomplir et ce qu'il ne cherche PAS
- **The Actual Design** : L'architecture proposee avec des diagrammes
- **Alternatives Considered** : Les autres approches evaluees et pourquoi elles ont ete rejetees
- **Cross-cutting Concerns** : Securite, privacy, observabilite
- **Open Questions** : Ce qui n'est pas encore decide

Le document est revu par les pairs (peer review) avant implementation.

### 2. Amazon Tech Spec
Amazon met l'accent sur :
- **Customer obsession** : La spec commence toujours par le probleme client
- **Working backwards** : Du besoin client vers l'architecture, pas l'inverse
- **Operational excellence** : Comment le systeme sera opere, monitore, debugge en production
- **Blast radius** : En cas de panne, quel est l'impact et comment le limiter ?

### 3. ADR (Architecture Decision Records)
Les ADR documentent chaque decision architecturale significative :
- **Title** : Description courte de la decision
- **Status** : Proposed / Accepted / Deprecated / Superseded
- **Context** : Pourquoi cette decision doit etre prise
- **Decision** : Ce qui a ete decide
- **Consequences** : Les impacts positifs et negatifs de cette decision

Format popularise par Michael Nygard. Chaque ADR est immutable -- si une decision change, on cree un nouvel ADR qui "supersede" l'ancien.

### 4. C4 Model (Simon Brown)
Modele de documentation d'architecture en 4 niveaux de zoom :
- **Context (C1)** : Le systeme dans son environnement (utilisateurs, systemes externes). Vue d'ensemble la plus haute.
- **Containers (C2)** : Les grandes briques du systeme (applications, bases de donnees, files de messages). Comment le systeme est deploye.
- **Components (C3)** : Les composants a l'interieur de chaque container (modules, services, controllers).
- **Code (C4)** : Le detail du code (classes, interfaces). Rarement necessaire dans une tech spec.

Pour une tech spec, les niveaux C1 et C2 sont indispensables. C3 est souhaitable pour les composants critiques.

### 5. DORA Metrics
Les 4 metriques DORA pour evaluer la performance d'une equipe de delivery :
- **Deployment Frequency** : A quelle frequence deploie-t-on en production ?
- **Lead Time for Changes** : Combien de temps entre un commit et la production ?
- **Change Failure Rate** : Quel pourcentage de deployments cause un incident ?
- **Time to Restore** : Combien de temps pour restaurer le service apres un incident ?

La tech spec doit decrire comment l'architecture supporte de bonnes metriques DORA.

### 6. Stripe's RFC Process
Stripe utilise un processus de RFC (Request for Comments) formalise :
- L'auteur ecrit une proposition detaillee
- L'equipe a un delai defini pour commenter et challenger
- Les desaccords sont explicitement resolus avant implementation
- Le RFC est "accepted" ou "rejected" avec une justification

### 7. Netflix Microservices Patterns
Netflix a popularise plusieurs patterns d'architecture distribuee :
- **Circuit Breaker** : Couper les appels a un service defaillant pour eviter les cascades
- **Bulkhead** : Isoler les composants pour limiter le blast radius
- **Chaos Engineering** : Tester la resilience en injectant des pannes volontaires
- **Edge Services** : API Gateway pour gerer l'authentification, le rate limiting, le routing

---

## Pieges courants et comment les eviter

### Piege 1 -- La spec qui prescrit sans justifier
**Probleme :** "On utilise PostgreSQL" sans aucune justification ni alternative consideree.
**Solution :** Chaque choix technique doit avoir un "pourquoi" et au moins une alternative evaluee. Format : "On choisit X parce que [raison]. On a considere Y mais [raison du rejet]."

### Piege 2 -- L'over-engineering
**Probleme :** Architecture microservices avec Kubernetes pour un MVP avec 100 utilisateurs.
**Solution :** Applique YAGNI et KISS. Pose la question : "Cette complexite est-elle justifiee par les besoins actuels ou par des besoins hypothetiques futurs ?" Recommande de commencer simple et de complexifier si necessaire.

### Piege 3 -- Ignorer les operations
**Probleme :** La spec decrit comment construire mais pas comment operer (monitoring, debugging, on-call).
**Solution :** Ajoute systematiquement une section operations : comment monitorer, comment debugger, comment deployer, comment rollback.

### Piege 4 -- Le modele de donnees sous-estime
**Probleme :** Le modele de donnees est un afterthought, pas un first-class citizen.
**Solution :** Le modele de donnees est la fondation de l'architecture. Investis du temps pour le definir correctement. Challenge les relations, les index, les volumes.

### Piege 5 -- La securite en dernier
**Probleme :** "On ajoutera la securite plus tard."
**Solution :** La securite n'est pas une fonctionnalite, c'est une propriete du systeme. Elle doit etre integree des la conception (security by design).

### Piege 6 -- Pas de plan de migration
**Probleme :** Le nouveau systeme est concu sans penser a comment passer de l'ancien au nouveau.
**Solution :** Si il y a un systeme existant, la strategie de migration est une section obligatoire de la spec. Comment migrer les donnees ? Comment gerer la coexistence ? Comment rollback ?

### Piege 7 -- Les single points of failure
**Probleme :** Un seul composant dont la panne fait tomber tout le systeme.
**Solution :** Pour chaque composant, demande : "Que se passe-t-il si ca tombe ?" Identifie et mitige les SPOF.

### Piege 8 -- Le biais du resume
**Probleme :** L'architecture choisie est la seule que l'equipe connait (marteau dore).
**Solution :** Challenge : "Si tu ne pouvais PAS utiliser [technologie favorite], que choisirais-tu et pourquoi ?"

---

## Criteres de qualite du document final

La Technical Specification est consideree comme complete et de qualite si :

- [ ] Le contexte business est explicite (lien avec le PRD/Charter)
- [ ] L'architecture est decrite a au moins 2 niveaux du C4 Model (Context + Containers)
- [ ] Chaque choix technique a une justification et au moins une alternative evaluee
- [ ] Le modele de donnees est complet (entites, relations, volumes)
- [ ] Les APIs sont documentees (endpoints, auth, erreurs)
- [ ] La securite est traitee comme un first-class concern
- [ ] Les exigences de performance et scalabilite sont chiffrees (SLA/SLO)
- [ ] L'observabilite est couverte (monitoring, logging, alerting)
- [ ] La strategie de deployment est documentee (CI/CD, rollback)
- [ ] Les risques techniques sont identifies avec des plans de mitigation
- [ ] Les open questions sont listees (ce qui n'est pas encore decide)
- [ ] Le document est lisible par un developpeur qui ne connait pas le projet
- [ ] Il n'y a pas d'over-engineering evident par rapport aux besoins actuels
