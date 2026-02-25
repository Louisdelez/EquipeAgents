# Methodologie et questions -- Incident Report

## Methodologie de conversation detaillee

### Phase 1 -- Identification et cadrage (4-5 questions)
**Objectif :** Identifier l'incident, sa severite, son statut actuel et le perimetre.

Commence par te presenter et expliquer que tu vas aider a documenter l'incident de maniere complete et structuree. Demande d'abord si l'incident est en cours ou resolu -- cela change completement l'approche.

**Comportement attendu :**
- Si l'incident est en cours, priorise la resolution avant la documentation
- Classifie la severite immediatement
- Identifie les interlocuteurs cles

### Phase 2 -- Reconstruction de la timeline (6-8 questions)
**Objectif :** Reconstruire minute par minute ce qui s'est passe, depuis la premiere alerte jusqu'a la resolution.

**Comportement attendu :**
- Insiste sur la precision des horodatages (UTC)
- Demande des preuves (logs, metriques, screenshots, messages Slack)
- Identifie les moments de decision cles et les delais
- Ne te contente JAMAIS de "vers 14h" -- demande l'heure exacte

### Phase 3 -- Analyse d'impact (4-6 questions)
**Objectif :** Quantifier l'impact de l'incident sur les utilisateurs, le business et les systemes techniques.

**Comportement attendu :**
- Quantifie l'impact en chiffres (nombre d'utilisateurs, transactions perdues, revenu impacte)
- Distingue impact direct et impact indirect
- Identifie les SLO violes et l'impact sur l'error budget

### Phase 4 -- Cause racine et facteurs contributifs (5-7 questions)
**Objectif :** Identifier la cause racine veritable (pas le symptome) et les facteurs qui ont contribue a l'incident.

**Comportement attendu :**
- Utilise la methode des 5 Pourquoi pour creuser au-dela du symptome initial
- Challenge les reponses superficielles ("erreur humaine" n'est pas une cause racine)
- Identifie les facteurs systemiques et organisationnels

### Phase 5 -- Actions correctives (3-5 questions)
**Objectif :** Definir les actions correctives concretes, tracables et priorisees.

**Comportement attendu :**
- Chaque action a un responsable nomme et une echeance
- Distingue les quick fixes des corrections structurelles
- Verifie que les actions adressent la cause racine, pas seulement les symptomes

### Phase 6 -- Validation et generation
**Objectif :** Recapituler, faire valider et generer le document final.

---

## Questions a poser a l'utilisateur

### Phase 1 -- Identification et cadrage

1. **L'incident est-il en cours ou resolu ?** Si en cours, quelle est la situation actuelle ? Y a-t-il un Incident Commander designe ? Priorise-t-on la resolution ou la documentation est-elle possible en parallele ?

2. **Decrivez l'incident en une phrase.** Quel est le symptome visible ? Quel service ou fonctionnalite est affecte ?

3. **Quelle est la severite de l'incident ?** (SEV1 - Critique / SEV2 - Majeur / SEV3 - Modere / SEV4 - Mineur) Sur quelle base classez-vous cette severite ? Le classement a-t-il change au cours de l'incident ?

4. **Quand l'incident a-t-il ete detecte et par qui/quoi ?** (Alerte automatique, monitoring, signalement client, decouverte manuelle) Combien de temps s'est-il ecoule entre le debut reel de l'incident et sa detection ?

5. **Qui sont les personnes impliquees dans la gestion de cet incident ?** Incident Commander, equipes mobilisees, experts sollicites, management informe.

### Phase 2 -- Reconstruction de la timeline

6. **A quelle heure exacte (UTC) le premier signe de l'incident est-il apparu ?** (Log d'erreur, metrique qui deviation, premier signalement). Avez-vous des traces (logs, metriques, alertes) qui confirment cette heure ?

7. **Reconstituez la chronologie complete de l'incident, etape par etape.** Pour chaque etape, je veux : l'heure exacte (UTC), l'action prise, par qui, et le resultat. Utilisez les logs et les historiques de messages (Slack, Teams) pour etre precis.

8. **Y a-t-il eu des changements recents (deploiement, configuration, migration) avant l'incident ?** Quand ont-ils ete deployes ? Par qui ? Y avait-il un lien de causalite ? Le changement avait-il passe les tests et les reviews ?

9. **Comment l'alerte initiale a-t-elle ete escaladee ?** Qui a ete notifie et a quelle heure ? Le processus d'escalade a-t-il fonctionne correctement ? Y a-t-il eu des delais anormaux ?

10. **Quelles actions de diagnostic ont ete menees ?** Quels outils ont ete utilises ? (Logs, metriques, tracing, acces console) Quelles hypotheses ont ete formulees et testees ? Quelles fausses pistes ont ete suivies ?

11. **Quelles actions de mitigation ont ete prises avant la resolution definitive ?** (Rollback, restart, scaling, feature flag, DNS switch, communication degradee) A quelle heure chaque action a-t-elle ete prise et quel a ete son effet ?

12. **A quelle heure exacte l'incident a-t-il ete resolu ?** Comment avez-vous confirme la resolution ? Quels metriques ou indicateurs avez-vous utilises pour valider le retour a la normale ?

13. **A quelle heure l'incident a-t-il ete officiellement cloture ?** Y a-t-il eu une periode de monitoring renforce apres la resolution ? Combien de temps a-t-elle dure ?

### Phase 3 -- Analyse d'impact

14. **Combien d'utilisateurs ont ete impactes ?** Nombre total, pourcentage de la base utilisateurs, segmentation geographique ou par type de client si pertinent. Comment avez-vous obtenu ces chiffres ?

15. **Quel a ete l'impact business ?** Transactions perdues, revenu impacte (estimez en euros), contrats ou SLA breaches, clients perdus ou a risque. Avez-vous recu des reclamations ?

16. **Quel a ete l'impact technique ?** Services degrades ou indisponibles, donnees perdues ou corrompues, impact sur d'autres systemes (effet cascade), backlog de traitement a rattraper.

17. **Quels SLO ont ete violes ?** Pour chaque SLO viole : le seuil defini, la valeur mesuree pendant l'incident, l'impact sur l'error budget restant.

18. **Y a-t-il eu un impact reputationnel ?** Mentions sur les reseaux sociaux, articles de presse, tickets de support en augmentation, impact sur la confiance client.

19. **Combien de temps a dure l'incident au total ?** Decomposez : temps de detection (TTD), temps de mobilisation (TTM), temps de mitigation, temps de resolution definitive (TTR), temps de recovery complet.

### Phase 4 -- Cause racine et facteurs contributifs

20. **Quelle est la cause racine technique de l'incident ?** Attention : "le serveur a crash" ou "il y avait un bug" ne sont pas des causes racines. Creuse. Appliquons la methode des 5 Pourquoi ensemble.

21. **Pourquoi cette cause racine existait-elle ?** (1er Pourquoi) Le probleme etait-il connu ? Depuis quand ? Pourquoi n'avait-il pas ete corrige ?

22. **Pourquoi n'a-t-il pas ete detecte plus tot ?** (2eme Pourquoi) Le monitoring etait-il en place ? Les tests couvraient-ils ce scenario ? Y avait-il des signaux faibles ignores ?

23. **Pourquoi les protections en place n'ont-elles pas fonctionne ?** (3eme Pourquoi) Circuit breakers, failovers, auto-scaling, alertes -- pourquoi n'ont-ils pas empeche ou limite l'impact ?

24. **Quels sont les facteurs contributifs (au-dela de la cause racine technique) ?** Pression pour deployer vite ? Documentation obsolete ? Manque de formation ? Architecture fragile ? Process de review insuffisant ? Fatigue de l'equipe d'astreinte ?

25. **Y a-t-il eu des elements de chance (bons ou mauvais) ?** Quelque chose qui a ameliore ou empire la situation de maniere non planifiee ? (Ex: "heureusement c'etait en heures creuses" ou "malheureusement le backup etait aussi corrompu")

### Phase 5 -- Actions correctives

26. **Quelles actions correctives proposez-vous pour que cet incident ne se reproduise jamais ?** Listez-les toutes, meme celles qui semblent couteuses. On priorisera ensuite.

27. **Pour chaque action : qui est responsable, quelle est l'echeance, et comment verifierez-vous qu'elle a ete implementee ?** Une action sans responsable et sans echeance ne sera jamais faite.

28. **Quelles actions adressent la cause racine vs. les symptomes ?** Distinguez les quick fixes (mitigation immediate) des corrections structurelles (prevention long terme).

29. **Y a-t-il des actions qui ameliorent la detection ?** (Nouvelles alertes, meilleurs dashboards, metriques supplementaires) L'objectif est de reduire le TTD pour les incidents similaires.

30. **Y a-t-il des actions qui ameliorent la resilience globale du systeme ?** Au-dela de cet incident specifique, que pouvons-nous faire pour rendre le systeme plus tolerant aux pannes en general ?
