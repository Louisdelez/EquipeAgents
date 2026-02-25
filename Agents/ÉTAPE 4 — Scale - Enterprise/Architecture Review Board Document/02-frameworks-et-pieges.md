# Frameworks et pieges -- Architecture Review Board Document

## Methodologies d'analyse architecturale

### 1. ATAM (Architecture Tradeoff Analysis Method -- SEI)
Methode structuree d'evaluation des architectures logicielles. Etapes : presentation business drivers, presentation architecture, identification scenarios de qualite, analyse des approches architecturales, identification des trade-offs et points de sensibilite.

### 2. TOGAF (The Open Group Architecture Framework)
Framework d'architecture d'entreprise. ADM (Architecture Development Method) en 8 phases. Utile pour le contexte enterprise mais souvent trop lourd pour les equipes agiles.

### 3. C4 Model (Simon Brown)
Modele de diagramme d'architecture en 4 niveaux : Context, Container, Component, Code. Essentiel pour une communication claire de l'architecture.

### 4. Fitness Functions (Building Evolutionary Architectures -- Neal Ford, Rebecca Parsons)
Fonctions objectives qui mesurent si l'architecture respecte ses attributs de qualite. Permettent de valider en continu que l'architecture evolue dans la bonne direction.

### 5. ADR (Architecture Decision Records -- Michael Nygard)
Format standardise pour documenter les decisions architecturales : contexte, decision, consequences. Permettent de garder l'historique du raisonnement.

## Best practices des grandes entreprises

### Google's Design Review Process
Reviews structurees avec un doc de design (design doc) qui couvre : contexte, objectifs, design propose, alternatives considerees, plan de migration. Les reviewers sont choisis pour leur expertise du domaine.

### Amazon's Architecture Review
Bases sur les Well-Architected Framework pillars : Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability. Les reviews se font via un mecanisme de "bar raiser".

### Netflix's Architecture Committee
Approche legere : pas de gate formal mais des reviews collaboratives. Focus sur la resilience (Chaos Engineering) et la scalabilite. Utilisation de fitness functions pour valider les decisions.

### Spotify's Architecture Reviews
Reviews decentralisees au niveau des tribes avec des guilds transverses pour la coherence. Emphasis sur l'autonomie des equipes dans le cadre de guardrails architecturaux.

---

## Pieges courants et comment les eviter

### Piege 1 -- L'over-engineering premature
**Probleme :** Concevoir une architecture pour des millions d'utilisateurs quand vous en avez 10 000. Microservices quand un monolithe modulaire suffirait.
**Solution :** Dimensionne l'architecture pour les besoins a 12-18 mois, pas a 5 ans. Concois pour etre evolutif, pas pour etre a la cible finale des maintenant.

### Piege 2 -- Le CV-Driven Development
**Probleme :** Choisir des technologies parce qu'elles sont a la mode (Kubernetes, Kafka, Rust) et non parce qu'elles repondent au besoin.
**Solution :** Pour chaque technologie, demande : "Pourquoi pas l'alternative plus simple ?" Si la reponse est "parce que c'est cool", c'est un red flag.

### Piege 3 -- Ignorer le cout operationnel
**Probleme :** Une architecture brillante sur le papier mais impossible a operer avec l'equipe actuelle.
**Solution :** Integre l'operabilite dans les criteres d'evaluation. Qui va etre d'astreinte ? L'equipe sait-elle debugger ce systeme ?

### Piege 4 -- Le distributed monolith
**Probleme :** Migrer vers des microservices mais garder un couplage fort entre services, obtenant le pire des deux mondes.
**Solution :** Verifie l'independance reelle des services : deploiement independant, schema de donnees propre, equipe proprietaire. Si deux services doivent etre deployes ensemble, ce ne sont pas deux services.

### Piege 5 -- Negliger la migration
**Probleme :** Passer 90% du temps a designer l'architecture cible et 10% a planifier la migration, alors que c'est la migration qui echoue.
**Solution :** Le plan de migration EST l'architecture. Consacre autant d'attention a "comment on y arrive" qu'a "ou on veut aller".

### Piege 6 -- L'absence de rollback plan
**Probleme :** S'engager dans une migration sans plan de retour arriere.
**Solution :** Chaque etape de migration doit etre reversible. Si elle ne l'est pas, c'est un risque majeur a documenter explicitement.

### Piege 7 -- Les decisions sans donnees
**Probleme :** Prendre des decisions architecturales basees sur des intuitions plutot que sur des donnees.
**Solution :** Exige des benchmarks, des preuves de concept, des metriques. "Combien de requetes par seconde ?" est une meilleure question que "Est-ce que ca va scaler ?"

---

## Criteres de qualite du document final

1. **Clarte des trade-offs** : Chaque decision architecturale explicite clairement ce qu'on gagne et ce qu'on perd
2. **Completude de l'analyse** : Tous les aspects sont couverts (fonctionnel, non-fonctionnel, operationnel, securite, cout)
3. **Qualite des diagrammes** : L'architecture est representee visuellement de maniere claire et a differents niveaux de detail (C4 model)
4. **Rigueur des alternatives** : Chaque choix est compare a au moins 2 alternatives avec une analyse objective
5. **Realisme du plan de migration** : Le plan est incremental, reversible et realiste en termes de timeline et de ressources
6. **Fitness Functions definies** : Des metriques objectives sont definies pour valider chaque attribut de qualite
7. **ADR documentes** : Chaque decision majeure est formalisee en Architecture Decision Record
8. **Decision claire du board** : Le verdict est sans ambiguite avec des conditions explicites si necessaire
