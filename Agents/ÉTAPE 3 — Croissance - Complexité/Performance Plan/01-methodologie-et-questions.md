# Methodologie et questions — Performance Plan

## Methodologie de conversation detaillee

### Etape 1 — Comprendre le systeme et ses enjeux (5-8 minutes)
Avant de parler de performance, il faut comprendre ce qui tourne et pourquoi c'est important.

**Actions :**
- Comprendre l'architecture du systeme (composants, dependencies, infrastructure)
- Identifier les parcours utilisateurs critiques (ceux ou la performance impacte le business)
- Evaluer la maturite actuelle en termes de monitoring et de tests de charge
- Comprendre les enjeux business lies a la performance

### Etape 2 — Definir les objectifs de performance (8-10 minutes)
Des objectifs flous menent a des efforts gaspilles. On veut des chiffres, pas des voeux pieux.

**Actions :**
- Definir les SLIs pertinents pour chaque service
- Fixer les SLOs avec des cibles chiffrees
- Calculer le budget d'erreur
- Aligner les objectifs avec les attentes business et utilisateurs

### Etape 3 — Evaluer la capacite actuelle (8-10 minutes)
Ou en est-on aujourd'hui ? Quels sont les goulots d'etranglement connus et inconnus ?

**Actions :**
- Inventorier les metriques actuelles
- Identifier les goulots d'etranglement connus
- Evaluer les margins de capacite
- Analyser les incidents de performance passes

### Etape 4 — Projeter la charge future (5-8 minutes)
La croissance est previsible si on regarde les bonnes donnees.

**Actions :**
- Projeter la croissance des utilisateurs et du trafic
- Identifier les evenements de charge exceptionnels (marketing, saisonnalite)
- Calculer la capacite necessaire a 3, 6 et 12 mois
- Planifier les investissements infrastructure

### Etape 5 — Definir la strategie de scalabilite et optimisation (8-10 minutes)
Comment grandir sans casser et sans ruiner le budget.

**Actions :**
- Evaluer les options de scalabilite horizontale et verticale
- Identifier les optimisations a fort impact
- Planifier la strategie de cache et CDN
- Definir l'architecture cible pour la charge projetee

### Etape 6 — Tests, monitoring et plan de capacite (5-8 minutes)
Un plan sans monitoring est un voeu. Un plan sans tests est une priere.

**Actions :**
- Definir le plan de tests de charge
- Specifier les dashboards et alertes
- Planifier les revues de capacite regulieres
- Definir les procedures d'escalation performance

---

## Questions a poser a l'utilisateur

### Bloc 1 — Systeme et architecture
1. Decris l'architecture de ton systeme : quels sont les principaux composants (services, bases de donnees, caches, queues, CDN) et comment sont-ils connectes ?
2. Ou est heberge le systeme ? (Cloud provider, region(s), single/multi-AZ, multi-region) Quels services manages utilises-tu ?
3. Quels sont les parcours utilisateurs les plus critiques en termes de performance ? Ceux ou chaque milliseconde compte pour le business.
4. As-tu des traitements batch ou asynchrones ? (Jobs de fond, processing de queues, imports/exports) Quels sont leurs volumes et frequences ?
5. Quelles sont les dependances externes de ton systeme ? (APIs tierces, services de paiement, CDN, email providers) Quel est leur impact sur ta latence ?

### Bloc 2 — Etat actuel des performances
6. Quelles metriques de performance surveilles-tu actuellement ? (Latence P50/P95/P99, throughput, taux d'erreur, saturation CPU/memoire)
7. Quels sont les temps de reponse actuels de tes endpoints principaux ? Donne-moi les P50, P95 et P99 si tu les as.
8. Quel est ton trafic actuel ? (Requetes par seconde au pic, nombre d'utilisateurs concurrents, volume de donnees traite par jour)
9. Quels incidents de performance as-tu rencontre recemment ? Quelles en etaient les causes racines ?
10. As-tu identifie des goulots d'etranglement actuels ? (Base de donnees, CPU, memoire, reseau, I/O disque, service externe)

### Bloc 3 — Objectifs et SLOs
11. Quels objectifs de performance souhaites-tu atteindre ? Sois specifique : quels endpoints, quels temps de reponse, pour quel percentile ?
12. As-tu des SLAs contractuels avec des clients ou partenaires ? Quels sont les engagements et les penalites ?
13. Quel est le seuil a partir duquel la performance impacte l'experience utilisateur pour TON produit ? (Un moteur de recherche tolere 200ms, un jeu en temps reel tolere 50ms)
14. Quel score Apdex vises-tu ? Quel est ton seuil T ?
15. Quel est ton error budget acceptable ? (Ex: 99.9% de disponibilite = 8h45 de downtime par an)

### Bloc 4 — Projections et croissance
16. Quelle est ta projection de croissance pour les 6 et 12 prochains mois ? (Utilisateurs, requetes, volume de donnees)
17. As-tu des evenements previsibles qui generent des pics de charge ? (Campagnes marketing, saisonnalite, Product Hunt, Black Friday)
18. Comment ta charge evolue-t-elle au cours d'une journee/semaine typique ? As-tu des patterns clairs ? (Peak morning, peak evening, weekend faible...)
19. Prevois-tu de lancer de nouvelles fonctionnalites qui vont significativement changer le profil de charge ? Lesquelles ?
20. Quel est ton budget infrastructure actuel et prevu ? Y a-t-il des contraintes de cout ?

### Bloc 5 — Strategies de scalabilite et optimisation
21. Quelles strategies de cache utilises-tu actuellement ? (Redis, Memcached, CDN, cache applicatif, cache navigateur) Quels sont les taux de hit ?
22. Ta base de donnees est-elle le goulot ? Quelles optimisations as-tu deja faites ? (Index, query optimization, read replicas, connection pooling)
23. Utilises-tu un CDN ? Pour quels contenus ? (Assets statiques, API responses, images)
24. Ton architecture supporte-t-elle le scaling horizontal ? Quels composants sont stateful et empechent le scaling ?
25. As-tu envisage des patterns d'architecture specifiques pour la performance ? (CQRS, Event Sourcing, materialized views, denormalization)

### Bloc 6 — Tests et monitoring
26. Fais-tu des tests de charge reguliers ? Avec quel outil ? (k6, Gatling, Locust, JMeter, Artillery) A quelle frequence ?
27. Quels dashboards de performance as-tu en place ? Quels outils utilises-tu ? (Grafana, Datadog, New Relic, CloudWatch)
28. Quelles alertes de performance sont configurees ? Quels sont les seuils et qui est notifie ?
29. As-tu deja fait un test de stress pour trouver le point de rupture de ton systeme ? Quel etait-il ?
30. Pratiques-tu le chaos engineering ? Si non, serais-tu pret a l'envisager ? A quelle echelle ?
