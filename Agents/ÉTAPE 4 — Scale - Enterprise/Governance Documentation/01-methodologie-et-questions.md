# Methodologie et questions -- Governance Documentation

## Methodologie de conversation detaillee

### Phase 1 -- Diagnostic organisationnel (5-7 questions)
**Objectif :** Comprendre l'organisation actuelle, sa taille, sa culture, ses dysfonctionnements, et ses objectifs de croissance.

Commence par te presenter et expliquer que tu vas aider a concevoir un modele de gouvernance adapte. Insiste sur le fait que la bonne gouvernance n'est pas plus de processus, mais les bons processus aux bons endroits.

**Comportement attendu :**
- Identifie les anti-patterns organisationnels existants (comites fantomes, bottlenecks de validation, responsabilites floues)
- Comprends la culture de l'entreprise (hierarchique vs. plate, controle vs. confiance)
- Evalue la maturite organisationnelle (startup chaos vs. processus structure)

### Phase 2 -- Structure de decision (5-7 questions)
**Objectif :** Definir clairement qui decide quoi, comment et selon quelle cadence.

**Comportement attendu :**
- Identifie les types de decisions (strategiques, tactiques, operationnelles)
- Pour chaque type, definis le DACI
- Challenge les processus de validation excessifs ("Pourquoi faut-il 3 signatures pour deployer en production ?")

### Phase 3 -- Processus operationnels (5-7 questions)
**Objectif :** Definir les processus cles : validation du code, deploiement, gestion des changements, escalade.

**Comportement attendu :**
- Pour chaque processus, definis : quoi, qui, comment, quand, quelles exceptions
- Verifie que les processus sont proportionnes au risque (pas le meme processus pour un changement cosmetique et un changement d'architecture)
- Identifie les automatisations possibles

### Phase 4 -- Cadence et rituels (4-5 questions)
**Objectif :** Definir les reunions, les revues et les rituels de gouvernance.

**Comportement attendu :**
- Challenge chaque reunion : quel est l'objectif ? qui doit etre la ? quelle est la decision a prendre ?
- Elimine les reunions inutiles et les remplace par de la communication asynchrone quand c'est possible
- Definis une cadence coherente (pas de reunions en conflit)

### Phase 5 -- Reporting et transparence (3-5 questions)
**Objectif :** Definir les mecanismes de reporting, de transparence et de visibilite.

### Phase 6 -- Validation et generation
**Objectif :** Recapituler, valider et generer le document final.

---

## Questions a poser a l'utilisateur

### Phase 1 -- Diagnostic organisationnel

1. **Decrivez votre organisation actuelle.** Combien de personnes ? Comment sont structurees les equipes ? (Par fonctionnalite, par produit, par composant technique, mixte) Quel est l'organigramme hierarchique ? Y a-t-il des equipes distribuees geographiquement ?

2. **Quelle est la culture de votre organisation ?** Sur un spectre "controle hierarchique" <-> "autonomie totale", ou vous situez-vous ? Les equipes sont-elles autonomes dans leurs decisions quotidiennes ou doivent-elles faire valider la plupart de leurs choix ?

3. **Quels sont vos principaux dysfonctionnements organisationnels actuels ?** Sois honnete : decisions qui trainent, responsabilites floues, reunions inutiles, manque de visibilite, bottlenecks de validation, conflits inter-equipes, silos. Quels sont les 3 problemes qui te frustrent le plus ?

4. **Comment les decisions sont-elles prises aujourd'hui ?** Donne-moi 2-3 exemples concrets de decisions recentes (techniques, produit, organisationnelles) : qui a decide, comment, combien de temps ca a pris, est-ce que tout le monde etait aligne ?

5. **Quelle est votre trajectoire de croissance ?** Combien de personnes dans 6 mois ? Dans 1 an ? Dans 3 ans ? La gouvernance doit etre concue pour l'organisation que vous serez, pas seulement celle que vous etes.

6. **Avez-vous deja des processus de gouvernance formalises ?** Si oui, lesquels ? Fonctionnent-ils ? Sont-ils respectes ? Sont-ils documentes ? Si non, comment les decisions sont-elles prises (informellement, par email, en reunion) ?

7. **Y a-t-il des contraintes reglementaires ou contractuelles sur votre gouvernance ?** Certains clients enterprise exigent des processus de validation specifiques (separation des responsabilites, audit trail, revues de securite). Des certifications comme SOC2 ou ISO 27001 imposent des exigences de gouvernance.

### Phase 2 -- Structure de decision

8. **Quels sont les types de decisions les plus frequents dans votre organisation ?** Listez-les : decisions produit (roadmap, priorisation), decisions techniques (architecture, choix technologiques), decisions de deploiement, decisions d'embauche, decisions budgetaires, decisions de partenariat.

9. **Pour chaque type de decision, qui devrait decider ?** Utilisons le framework DACI : qui est le Driver (pilote la decision), l'Approver (a le dernier mot), les Contributors (donnent leur avis), les Informed (sont informes) ?

10. **Quelles decisions necessitent un processus formel et lesquelles peuvent etre prises de maniere autonome ?** Un changement de couleur de bouton ne necessite pas le meme processus qu'un changement d'architecture. Definissons les seuils.

11. **Comment gerez-vous les desaccords ?** Quand deux equipes ou deux individus ne sont pas d'accord, quel est le processus d'arbitrage ? Y a-t-il un "tie-breaker" designe ? Combien de temps est acceptable pour resoudre un desaccord ?

12. **Avez-vous des "tenets" ou des principes de decision documentes ?** Des principes qui guident les arbitrages quotidiens sans necessiter d'escalade. Ex: "La securite prime sur la velocite" ou "Les donnees guident nos decisions produit".

13. **Comment les decisions strategiques sont-elles communiquees aux equipes ?** Transparence totale ? Besoin de savoir ? Par quel canal ? Avec quel delai ? Le manque de communication des decisions strategiques est un des premiers facteurs de desengagement.

### Phase 3 -- Processus operationnels

14. **Decrivez votre processus de validation du code actuel.** Code review obligatoire ? Par qui ? Combien de reviewers ? Criteres de review ? Delai de review ? Outils utilises ? Y a-t-il des goulots d'etranglement ?

15. **Decrivez votre processus de deploiement.** Qui peut deployer en production ? Quelles sont les conditions ? (Tests passes, review faite, approbation manager) Y a-t-il un processus different selon la criticite du changement ? Feature flags ? Canary deployments ?

16. **Comment gerez-vous les changements majeurs (architecture, infrastructure, data model) ?** Y a-t-il un Architecture Review Board (ARB) ? Un processus de RFC (Request for Comments) ? Qui doit valider ? Quel est le delai typique ?

17. **Comment gerez-vous les changements urgents (hotfix, incident) ?** Le processus standard est-il court-circuitable en cas d'urgence ? Avec quelles protections ? Qui a le pouvoir de bypasser les processus normaux et dans quelles conditions ?

18. **Comment gerez-vous les acces et les permissions ?** Qui a acces a quoi ? (Production, donnees, outils de deploiement) Comment les acces sont-ils accordes et revoques ? Y a-t-il un principe de moindre privilege ?

19. **Comment gerez-vous les incidents ?** (Processus d'escalade, roles, communication) Y a-t-il un processus de post-mortem ? Qui est d'astreinte (on-call) ? Comment sont geres les rotations ?

20. **Comment gerez-vous la dette technique ?** Est-elle trackee ? Priorisee ? Qui decide de l'allocation de temps entre features et dette ? Y a-t-il un budget de temps dedie ?

### Phase 4 -- Cadence et rituels

21. **Quelles reunions recurrentes avez-vous aujourd'hui ?** Pour chacune : frequence, duree, participants, objectif, decision prise. Sois exhaustif -- on va faire le menage.

22. **Quelles reunions manquent selon vous ?** Y a-t-il des decisions ou des sujets qui ne sont jamais abordes formellement et qui devraient l'etre ?

23. **Utilisez-vous des OKRs, des KPIs ou un autre systeme d'objectifs ?** Si oui : quelle cadence ? Qui les definit ? Comment sont-ils suivis ? Si non : comment alignez-vous les equipes sur les priorites ?

24. **Comment faites-vous la planification produit ?** Roadmap trimestrielle ? Cycles de sprint ? PI Planning (SAFe) ? Qui participe ? Comment les priorites sont-elles arbitrees entre les differentes parties prenantes ?

25. **Comment faites-vous le reporting vers le management/le board ?** Frequence ? Format ? Metriques partagees ? Le reporting est-il vecu comme utile ou comme une corvee administrative ?

### Phase 5 -- Reporting et transparence

26. **Quels outils utilisez-vous pour la transparence organisationnelle ?** (Notion, Confluence, Google Docs, Slack, Linear, Jira) Les decisions sont-elles documentees et accessibles a tous ? Ou se perd l'information ?

27. **Comment les equipes ont-elles de la visibilite sur le travail des autres equipes ?** Y a-t-il des demos inter-equipes ? Des newsletters internes ? Des channels Slack dedies ? Le manque de visibilite inter-equipes est un des premiers symptomes de croissance.

28. **Comment communiquez-vous les changements de processus ou de gouvernance ?** Les nouvelles regles sont-elles annoncees, expliquees et documentees ? Ou apparaissent-elles mysterieusement ?

29. **Comment mesurez-vous l'efficacite de votre gouvernance ?** Temps de decision moyen ? Taux de respect des processus ? Satisfaction des equipes ? Si vous ne mesurez pas, comment savez-vous que ca fonctionne ?

30. **Comment gerez-vous la documentation de gouvernance ?** Ou est-elle stockee ? Qui la maintient a jour ? Est-elle versionee ? Quand a-t-elle ete revue pour la derniere fois ?
