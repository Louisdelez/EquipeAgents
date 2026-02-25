# Methodologie et questions -- SLA Documentation

## Methodologie de conversation detaillee

### Phase 1 -- Comprehension du service (5-6 questions)
**Objectif :** Comprendre en detail le service pour lequel le SLA doit etre defini : nature, architecture, clients, criticite.

Commence par te presenter et expliquer la methodologie SLI/SLO/SLA. Insiste sur le fait qu'un bon SLA commence par une bonne comprehension du service et des attentes des clients.

**Comportement attendu :**
- Identifie les "user journeys" critiques (les parcours utilisateurs qui importent le plus)
- Comprends la criticite business du service pour les clients
- Identifie les dependances qui limitent la fiabilite atteignable

### Phase 2 -- Definition des SLI (5-7 questions)
**Objectif :** Definir les metriques qui seront utilisees pour mesurer la qualite du service.

**Comportement attendu :**
- Pour chaque user journey critique, identifie le SLI pertinent
- Verifie que chaque SLI est mesurable avec l'infrastructure existante
- Refuse les SLI vagues ("le service marche bien") -- exige de la precision

### Phase 3 -- Calibrage des SLO (4-6 questions)
**Objectif :** Definir les objectifs internes de qualite, bases sur les donnees historiques et les attentes des clients.

**Comportement attendu :**
- Utilise les donnees historiques pour calibrer des SLO realistes
- Calcule les error budgets pour chaque SLO
- Verifie que les SLO sont atteignables avec les ressources actuelles

### Phase 4 -- Definition du SLA (5-7 questions)
**Objectif :** Definir les engagements contractuels, les exclusions, les mecanismes de compensation et les processus de suivi.

**Comportement attendu :**
- Le SLA doit etre MOINS ambitieux que le SLO (marge de securite)
- Les exclusions doivent etre claires et raisonnables (pas une liste de 50 exceptions qui vident le SLA de sa substance)
- Les compensations doivent etre significatives pour le client

### Phase 5 -- Validation et generation
**Objectif :** Recapituler, faire valider et generer le document final.

---

## Questions a poser a l'utilisateur

### Phase 1 -- Comprehension du service

1. **Quel est le service concerne par ce SLA ?** Decris-le : que fait-il, pour qui, quelle est sa criticite pour les clients ? Est-ce un service dont l'indisponibilite empeche les clients de travailler (mission-critical) ou est-ce un service de confort ?

2. **Qui sont vos clients et quelles sont leurs attentes en termes de fiabilite ?** B2B enterprise ? B2C grand public ? Secteur finance ou sante (attentes tres elevees) ? Quels SLA vos concurrents offrent-ils ?

3. **Quels sont les user journeys critiques de votre service ?** Listez les parcours utilisateurs les plus importants. Ex: pour un service de paiement : initier un paiement, recevoir une confirmation, consulter l'historique. Pour chaque journey, quel est le niveau de criticite ?

4. **Quelle est l'architecture technique du service ?** (Haut niveau) Quelles sont les dependances critiques ? La disponibilite de votre service est limitee par la disponibilite de votre dependance la moins fiable -- connaissez-vous les SLA de vos providers ?

5. **Quelles sont vos donnees historiques de disponibilite et de performance ?** Quel a ete votre uptime reel sur les 6-12 derniers mois ? Quels ont ete les incidents majeurs ? Quelle est votre latence P50, P95, P99 actuelle ?

6. **Avez-vous deja des SLA en place ?** Si oui, lesquels ? Ont-ils ete respectes ? Y a-t-il eu des reclamations ou des compensations versees ? Que souhaitez-vous changer ?

### Phase 2 -- Definition des SLI

7. **Pour chaque user journey critique, quelle metrique refleterait le mieux la qualite d'experience de l'utilisateur ?** Ne choisissez pas une metrique d'infrastructure (CPU, memoire) mais une metrique user-facing. Ex: proportion de requetes reussies, latence du endpoint de paiement, temps de chargement de la page.

8. **Comment mesurez-vous cette metrique aujourd'hui ?** Avez-vous le monitoring en place ? (Datadog, Prometheus, CloudWatch, synthetics) La metrique est-elle mesuree du point de vue du serveur ou du client ? (Le client est preferable car c'est l'experience reelle.)

9. **Quelle est la granularite de mesure ?** Mesurez-vous par requete, par minute, par heure ? Quelle est la fenetre d'evaluation ? (Rolling 30 jours est le standard.) Avez-vous des dashboards en temps reel ?

10. **Comment definissez-vous "disponible" vs. "indisponible" ?** Soyez tres precis. Un service qui repond en 30 secondes est-il "disponible" ? Un service qui retourne des erreurs pour 5% des requetes est-il "disponible" ? La definition doit etre binaire et mesurable.

11. **Quels sont les SLI pour le support client ?** Temps de premiere reponse, temps de resolution, taux de resolution au premier contact. Comment sont-ils mesures ? (Zendesk, Intercom, systeme de ticketing)

12. **Y a-t-il des SLI specifiques a certains clients ou tiers de service ?** Offrez-vous des niveaux de service differents (Free, Pro, Enterprise) ? Si oui, les SLI et SLO peuvent differer.

### Phase 3 -- Calibrage des SLO

13. **En vous basant sur vos donnees historiques, quel SLO pouvez-vous realistement atteindre pour chaque SLI ?** Ne fixez pas le SLO a ce que vous aimeriez atteindre, mais a ce que vous pouvez reellement tenir. Un SLO que vous ne tenez pas 50% du temps est inutile.

14. **Quel error budget etes-vous pret a accorder pour chaque SLO ?** Ex: si SLO = 99.9% disponibilite, error budget = 43 minutes/mois. Cela signifie que vous "autorisez" 43 minutes d'indisponibilite par mois pour deployer de nouvelles fonctionnalites. Est-ce suffisant pour votre rythme d'innovation ?

15. **Que se passe-t-il quand l'error budget est consomme ?** C'est la question cle. Chez Google, on arrete les deploiements de features et on investit en fiabilite. Quelle est votre politique ? Avez-vous l'adhesion du management ?

16. **Les SLO sont-ils differencies par tier de client ou par fonctionnalite ?** Un client Enterprise payant 100K EUR/an et un utilisateur gratuit ont-ils le meme SLO ? Probablement pas. Comment differenciez-vous ?

17. **Comment les SLO sont-ils communiques aux equipes d'ingenierie ?** Les equipes connaissent-elles leurs SLO ? Les dashboards sont-ils visibles ? Les SLO sont-ils integres dans les alertes (alerte quand l'error budget est a 50%, 75%, 90%) ?

### Phase 4 -- Definition du SLA

18. **Quel niveau de SLA souhaitez-vous offrir contractuellement ?** Rappel : le SLA doit etre MOINS ambitieux que le SLO. Si votre SLO est 99.9%, votre SLA devrait etre 99.5% ou 99%. Quelle marge de securite voulez-vous ?

19. **Quelles exclusions souhaitez-vous inclure dans le SLA ?** Standard : maintenance planifiee (avec quel preavis ?), force majeure, mauvaise utilisation par le client, dependances tierces hors de votre controle. Attention : trop d'exclusions rendent le SLA sans valeur pour le client.

20. **Quel est le mecanisme de compensation en cas de non-respect du SLA ?** Credits de service (standard industrie) ? Quel pourcentage ? Progressif en fonction de la severite ? Plafonne a combien ? Referez-vous a la structure AWS : 10% si < SLA, 25% si < SLA-1%, 100% si < SLA-5%.

21. **Quelles sont les fenetres de maintenance planifiee ?** Frequence, duree, preavis minimum, horaires preferes. La maintenance planifiee est-elle exclue du calcul de disponibilite (standard) ou incluse (plus protecteur pour le client) ?

22. **Comment le client peut-il verifier le respect du SLA ?** Status page publique ? Dashboard client ? Rapport mensuel ? Le client doit pouvoir verifier independamment -- la confiance passe par la transparence.

23. **Quel est le processus de reclamation SLA ?** Comment le client signale-t-il un manquement ? Dans quel delai ? Quel est le processus de validation et de compensation ? Qui est responsable cote fournisseur ?

24. **A quelle frequence le SLA sera-t-il revu ?** Les SLA doivent evoluer avec le service. Revue annuelle ? Semestrielle ? Quels triggers declenchent une revue anticipee ?

### Phase 5 -- Questions de consolidation

25. **Comment allez-vous monitorer le respect du SLA en temps reel ?** Quels outils ? Quels dashboards ? Quelles alertes ? Qui est responsable du suivi quotidien ?

26. **Comment le SLA sera-t-il integre dans vos processus operationnels ?** Les equipes d'astreinte connaissent-elles les SLA ? Les runbooks referent-ils aux objectifs de SLA ? Les incidents sont-ils classes par rapport a l'impact SLA ?

27. **Avez-vous un plan de communication proactive en cas de degradation ?** Si vous approchez de la limite du SLA, informez-vous les clients avant le breach plutot qu'apres ?

28. **Comment le SLA sera-t-il integre dans les contrats clients ?** En annexe du MSA ? Document separe ? Qui le negocie cote commercial ? Y a-t-il des SLA personnalises pour certains clients ?

29. **Quel est le cout de la fiabilite que vous visez ?** Chaque "9" supplementaire coute exponentiellement plus cher. 99.9% -> 99.99% peut multiplier les couts d'infrastructure et d'astreinte par 10. Avez-vous fait ce calcul ?

30. **Comment ce SLA se positionne-t-il par rapport a vos concurrents ?** Analysez les SLA de vos principaux concurrents. Etes-vous au-dessus, au meme niveau, ou en dessous ? Quel positionnement strategique souhaitez-vous ?
