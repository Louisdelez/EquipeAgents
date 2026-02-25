# Methodologie et questions — Risk Management Document

## Methodologie de conversation detaillee

### Etape 1 — Comprendre le contexte et les enjeux (5-8 minutes)
Avant d'identifier les risques, il faut comprendre ce qu'on cherche a proteger et ce qui definit le succes.

**Actions :**
- Comprendre le projet/produit, ses objectifs et ses parties prenantes
- Identifier les facteurs de succes critiques
- Evaluer l'appetit pour le risque de l'organisation
- Comprendre le contexte (marche, concurrence, reglementation, equipe)

### Etape 2 — Identifier les risques (10-15 minutes)
L'identification est l'etape la plus critique. Un risque non identifie ne peut pas etre gere. On utilise plusieurs techniques complementaires.

**Actions :**
- Mener un Pre-Mortem (Amazon style)
- Parcourir les categories de risque systematiquement
- Analyser les risques par composant (technique, humain, business, reglementaire)
- Consulter les lecons des projets precedents

### Etape 3 — Evaluer les risques (8-10 minutes)
Chaque risque doit etre evalue objectivement pour permettre la priorisation.

**Actions :**
- Evaluer la probabilite de chaque risque
- Evaluer l'impact de chaque risque
- Calculer le score de risque
- Positionner les risques sur la matrice

### Etape 4 — Definir les strategies de traitement (8-10 minutes)
Pour chaque risque significatif, definir comment le traiter.

**Actions :**
- Choisir la strategie : Eviter, Transferer, Mitiguer, Accepter
- Definir les actions concretes de mitigation
- Identifier les proprietaires de chaque risque
- Definir les indicateurs d'alerte precoce (early warning signs)

### Etape 5 — Structurer le suivi (5 minutes)
Un document de risques qui n'est pas revu regulierement est inutile.

**Actions :**
- Definir la cadence de revue
- Etablir les criteres d'escalation
- Planifier les exercices de simulation
- Definir les metriques de suivi du risk management

---

## Questions a poser a l'utilisateur

### Bloc 1 — Contexte et enjeux
1. Decris le projet ou le produit pour lequel tu veux gerer les risques. Quels sont ses objectifs principaux et ses facteurs de succes critiques ?
2. Quelles sont les parties prenantes cles ? (Equipe, clients, investisseurs, regulateurs...) Quelles sont leurs attentes et leurs preoccupations ?
3. Quel est l'appetit pour le risque de ton organisation ? Etes-vous plutot conservateurs (minimiser tous les risques) ou aventureux (prendre des risques calcules pour aller plus vite) ?
4. Y a-t-il des contraintes absolues — des choses qui, si elles se produisent, signifient la fin du projet ? (Ex: perte de licence, faillite, incident reglementaire majeur)
5. Quelles lecons as-tu tirees de projets precedents similaires ? Quels risques s'etaient materialises ?

### Bloc 2 — Risques techniques
6. Quels sont les composants techniques les plus critiques et les plus fragiles de ton systeme ? Ou est le "single point of failure" ?
7. As-tu des dependances techniques fortes sur des technologies, des fournisseurs ou des services tiers ? Que se passe-t-il si l'un d'eux tombe ?
8. Quelle est ta dette technique actuelle ? Y a-t-il des parties du systeme que tu redoutes de toucher ?
9. As-tu des contraintes de scalabilite connues qui pourraient devenir critiques avec la croissance ?
10. Quel est ton niveau d'automatisation des tests et du deploiement ? Un deploiement peut-il casser la production ?

### Bloc 3 — Risques humains et organisationnels
11. Y a-t-il des "bus factors" dans ton equipe ? (Personnes cles dont le depart paralyserait le projet) Combien de personnes maitrisent chaque composant critique ?
12. L'equipe est-elle suffisamment dimensionnee pour les objectifs fixes ? Y a-t-il des competences manquantes ?
13. Comment est le moral de l'equipe ? Y a-t-il des tensions, de l'epuisement, des frustrations non adressees ?
14. La communication entre les equipes est-elle fluide ? Y a-t-il des silos qui pourraient creer des angles morts ?
15. As-tu des dependances sur des prestataires ou des partenaires externes ? Quel est le plan si un prestataire cle fait defaut ?

### Bloc 4 — Risques business et marche
16. Quels changements de marche pourraient rendre ton produit moins pertinent ? (Nouveau concurrent, changement de comportement utilisateur, evolution technologique)
17. Tes projections de revenus sont-elles basees sur des donnees solides ou sur des hypotheses optimistes ? Quel est le scenario pessimiste ?
18. Quelle est ta piste de tresorerie (runway) ? Combien de temps peux-tu survivre si les revenus sont 50% en dessous des previsions ?
19. Y a-t-il des clients ou partenaires dont tu depends de maniere disproportionnee ? (Ex: un client = 40% du CA)
20. Ton modele economique est-il valide a l'echelle ? Ce qui marche avec 100 clients marchera-t-il avec 10 000 ?

### Bloc 5 — Risques reglementaires et legaux
21. A quelles reglementations es-tu soumis ? (RGPD, PCI-DSS, reglementation sectorielle...) Es-tu conforme aujourd'hui ?
22. Y a-t-il des evolutions reglementaires en cours qui pourraient impacter ton produit ? (AI Act, DMA, DORA...)
23. As-tu une couverture juridique adequate ? (CGU, CGV, politique de confidentialite, contrats fournisseurs)
24. Quel est ton risque de propriete intellectuelle ? (Brevets, licences open source, droits d'auteur)
25. Que se passe-t-il en cas de litige avec un client, un partenaire ou un employe ? As-tu une assurance RC Pro ?

### Bloc 6 — Suivi et culture du risque
26. Avais-tu deja un processus de gestion des risques ? Si oui, qu'est-ce qui marchait et ne marchait pas ?
27. A quelle frequence veux-tu revoir les risques ? (Hebdomadaire, bimensuel, mensuel, trimestriel) Qui doit etre present ?
28. Comment veux-tu communiquer sur les risques ? (Dashboard, rapport, section du standup, reunion dediee)
29. As-tu des "canaris dans la mine" — des metriques ou signaux qui t'alertent avant qu'un risque ne se materialise ?
30. Es-tu pret a faire un exercice de Pre-Mortem avec ton equipe ? C'est l'exercice le plus puissant pour identifier les risques que personne n'ose mentionner.
