# Frameworks et pieges — Performance Plan

## Frameworks de reference

### Google SRE Book
- **SLI (Service Level Indicator)** : Metrique quantitative de la qualite de service
- **SLO (Service Level Objective)** : Cible pour un SLI (ex: P99 latence < 200ms)
- **SLA (Service Level Agreement)** : Contrat business avec penalites
- **Error Budget** : Marge d'erreur acceptable avant de geler les deployments
- **Toil** : Travail manuel repetitif a automatiser
- **Postmortem** : Analyse sans blame apres incident

### USE Method (Brendan Gregg)
Pour chaque ressource du systeme :
- **Utilization** : Pourcentage de la capacite utilisee
- **Saturation** : Travail en file d'attente (au-dela de la capacite)
- **Errors** : Nombre d'evenements d'erreur

### RED Method
Pour chaque service :
- **Rate** : Nombre de requetes par seconde
- **Errors** : Nombre de requetes en erreur par seconde
- **Duration** : Distribution de la latence (P50, P90, P95, P99)

### Netflix Chaos Engineering
- **Chaos Monkey** : Tuer aleatoirement des instances en production
- **Chaos Kong** : Simuler la panne d'une region entiere
- **Principles** : Definir l'etat stable, varier les evenements du monde reel, executer en production, automatiser
- **Game Days** : Exercices planifies de simulation d'incidents

### AWS Well-Architected Framework — Performance Pillar
- **Selection** : Choisir les bons types de ressources
- **Review** : Revoir regulierement les choix
- **Monitoring** : Surveiller la performance en continu
- **Trade-offs** : Comprendre les compromis (cout vs performance vs complexite)

### Apdex Scoring
- **Satisfied** : Temps de reponse < T (seuil)
- **Tolerating** : T < temps de reponse < 4T
- **Frustrated** : Temps de reponse > 4T
- **Score** : (Satisfied + Tolerating/2) / Total, objectif > 0.9

### Load Testing Patterns
- **Smoke Test** : Charge minimale pour verifier que ca marche
- **Load Test** : Charge normale attendue
- **Stress Test** : Au-dela de la capacite, pour trouver le point de rupture
- **Soak Test** : Charge soutenue pendant longtemps (memory leaks, connection leaks)
- **Spike Test** : Pics soudains de charge
- Outils : Gatling, k6, Locust, Artillery, JMeter

---

## Pieges courants et comment les eviter

### Piege 1 — Optimiser sans mesurer
**Probleme :** "On a l'impression que c'est lent" sans donnees concretes.
**Solution :** Toujours mesurer avant d'optimiser. Toujours mesurer apres pour verifier l'impact. Les perceptions sont trompeuses.

### Piege 2 — Focus sur la latence moyenne
**Probleme :** La moyenne cache les extremes. Un P50 a 50ms avec un P99 a 5s est un desastre.
**Solution :** Toujours regarder les percentiles : P50, P90, P95, P99. Le P99 represente l'experience de vos pires utilisateurs.

### Piege 3 — Scaler sans comprendre le goulot
**Probleme :** Ajouter des serveurs applicatifs quand le probleme est la base de donnees.
**Solution :** Identifier le goulot d'etranglement avec la USE method avant de scaler. Scaler le mauvais composant gaspille de l'argent.

### Piege 4 — Le cache qui cache les problemes
**Probleme :** Tout mettre en cache pour masquer un probleme de performance fondamental.
**Solution :** Le cache est un accelerateur, pas un pansement. D'abord optimiser la source, puis cacher le resultat. Un cache miss catastrophique est pire que pas de cache.

### Piege 5 — Les tests de charge en environnement non representatif
**Probleme :** Tester avec 1% des donnees de production et conclure que "ca scale".
**Solution :** L'environnement de test doit etre aussi proche que possible de la production : meme volume de donnees, meme reseau, meme configuration.

### Piege 6 — Ignorer le cout de la scalabilite
**Probleme :** Scaler sans regarder la facture. Decouvrir un mois apres que le budget infra a triple.
**Solution :** Toujours calculer le cout par requete et le cout par utilisateur. Monitorer les couts en parallele des performances.

### Piege 7 — L'absence de limites (backpressure)
**Probleme :** Le systeme accepte tout le trafic jusqu'a l'effondrement.
**Solution :** Implementer du rate limiting, du circuit breaking et du load shedding. Mieux vaut refuser proprement 10% des requetes que de planter pour 100%.

### Piege 8 — Optimiser le mauvais parcours
**Probleme :** Passer des semaines a optimiser un endpoint utilise 10 fois par jour.
**Solution :** Prioriser les optimisations par impact : frequence d'utilisation x nombre d'utilisateurs x degradation percue.

---

## Criteres de qualite du document final

1. **Chiffre** : Chaque objectif est quantifie (ms, rps, %, score Apdex).
2. **Mesurable** : Chaque metrique a un SLI defini et un outil de mesure identifie.
3. **Realiste** : Les projections sont basees sur des donnees reelles, pas sur des estimations en l'air.
4. **Priorise** : Les optimisations sont classees par impact/effort.
5. **Actionnable** : Chaque recommandation a un responsable et une echeance.
6. **Complet** : Tous les composants du systeme sont couverts (pas juste l'API).
7. **Teste** : Le plan inclut une strategie de tests de charge concrete.
8. **Monitore** : Les dashboards et alertes sont specifies.
9. **Evolutif** : Le plan definit une cadence de revue et d'adaptation.
10. **Business-driven** : Le lien entre performance technique et impact business est explicite.
