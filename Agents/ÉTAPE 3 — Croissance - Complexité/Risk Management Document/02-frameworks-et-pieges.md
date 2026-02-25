# Frameworks et pieges — Risk Management Document

## Frameworks de reference

### ISO 31000 — Risk Management
- **Principes** : Integre, structure, personnalise, inclusif, dynamique, fonde sur la meilleure information, facteurs humains et culturels, amelioration continue
- **Processus** : Communication et consultation > Etablissement du contexte > Identification > Analyse > Evaluation > Traitement > Suivi et revue
- **Appetit pour le risque** : Le niveau de risque qu'une organisation est prete a accepter pour atteindre ses objectifs

### FMEA (Failure Mode and Effects Analysis)
- **Failure Mode** : Comment un composant peut defaillir
- **Effect** : L'impact de la defaillance
- **Severity** : Gravite de l'effet (1-10)
- **Occurrence** : Frequence probable (1-10)
- **Detection** : Capacite a detecter avant que ca arrive (1-10)
- **RPN (Risk Priority Number)** : Severity x Occurrence x Detection

### Monte Carlo Simulation
- Modeliser l'incertitude avec des distributions de probabilite
- Simuler des milliers de scenarios possibles
- Obtenir des intervalles de confiance sur les resultats
- Utile pour les estimations de cout, delai et performance
- Outil pour quantifier le risque agrege du projet

### Amazon Pre-Mortem
- Imaginer que le projet a echoue, puis se demander POURQUOI
- Chaque membre de l'equipe ecrit independamment les causes d'echec
- Aggreger et prioriser les causes identifiees
- Transformer chaque cause en risque avec un plan de mitigation
- Plus efficace que le brainstorming classique car libere des biais de groupe

### Netflix Chaos Engineering Approach to Risk
- Injecter deliberement des defaillances pour tester la resilience
- Ne pas supposer que les systemes sont fiables — le prouver
- Automatiser la detection et la recuperation
- "Game Days" : exercices planifies de simulation de crise
- Transformer les risques theoriques en tests pratiques

### Bowtie Method
- **Menace** : L'evenement dangereux potentiel
- **Barrieres preventives** (a gauche) : Ce qui empeche l'evenement de se produire
- **Barrieres de mitigation** (a droite) : Ce qui limite les consequences si l'evenement se produit
- **Facteurs d'escalade** : Ce qui peut degrader les barrieres
- Visualisation puissante pour communiquer les risques

### Risk Appetite Frameworks (Google, Microsoft)
- **Risk Appetite** : Niveau de risque global qu'on accepte
- **Risk Tolerance** : Limites specifiques par categorie de risque
- **Risk Capacity** : Niveau maximum de risque qu'on PEUT supporter
- Distinction entre risques a prendre (opportunites) et risques a eviter (menaces)
- Alignement entre appetit pour le risque et objectifs strategiques

---

## Pieges courants et comment les eviter

### Piege 1 — Le registre des risques qui prend la poussiere
**Probleme :** Creer un beau document de risques puis ne jamais le revoir.
**Solution :** Definir une cadence de revue NON NEGOCIABLE (minimum mensuelle). Integrer la revue des risques dans les rituels existants.

### Piege 2 — Confondre risques et problemes
**Probleme :** Lister des choses qui sont deja des problemes actuels, pas des risques futurs.
**Solution :** Un risque est un evenement FUTUR et INCERTAIN. Un probleme est ACTUEL et CERTAIN. Les deux se gerent differemment.

### Piege 3 — Evaluer tous les risques comme "Moyen"
**Probleme :** Par peur de surreagir ou de sous-estimer, tout atterrit au milieu de la matrice.
**Solution :** Utiliser des criteres objectifs pour chaque niveau. Forcer le choix entre "Eleve" et "Faible" pour les cas limites. Le "Moyen" doit etre l'exception.

### Piege 4 — L'optimisme systematique
**Probleme :** "Ca n'arrivera jamais" ou "On gerera quand ca arrivera".
**Solution :** Utiliser le Pre-Mortem pour forcer l'equipe a imaginer l'echec. Les humains sous-estiment systematiquement les risques — compenser consciemment.

### Piege 5 — Trop de risques, pas de priorisation
**Probleme :** Un registre de 100 risques ou tout est prioritaire = rien n'est prioritaire.
**Solution :** Focus sur les 10-15 risques les plus significatifs. Les autres sont documentes mais pas activement geres (risques acceptes).

### Piege 6 — Mitigation sans proprietaire
**Probleme :** "Il faudrait mettre en place X" mais personne n'est responsable.
**Solution :** Chaque action de mitigation a un proprietaire nomme, une echeance et un suivi explicite.

### Piege 7 — Ignorer les risques positifs (opportunites)
**Probleme :** Ne voir que les menaces et oublier que certaines incertitudes sont des opportunites.
**Solution :** Inclure les risques positifs : un concurrent qui ferme, une reglementation favorable, une tendance de marche. Preparer des plans pour en profiter.

### Piege 8 — La culture du blame
**Probleme :** Si remonter un risque est puni, personne ne remontera de risque.
**Solution :** Creer une culture ou identifier un risque est valorise, pas sanctionne. Le Pre-Mortem anonymise aide a destigmatiser.

---

## Criteres de qualite du document final

1. **Exhaustivite** : Les risques couvrent toutes les categories (technique, humain, business, legal, operationnel).
2. **Objectivite** : Les evaluations sont basees sur des criteres definis, pas sur des impressions.
3. **Priorisation** : Les risques sont classes de maniere a ce que l'equipe sache ou agir en premier.
4. **Actionnabilite** : Chaque risque significatif a des actions de mitigation concretes avec proprietaire et echeance.
5. **Mesurabilite** : Des indicateurs d'alerte precoce sont definis pour chaque risque majeur.
6. **Proportionnalite** : Les efforts de mitigation sont proportionnes a l'importance du risque.
7. **Dynamisme** : Le document definit une cadence de revue et d'actualisation.
8. **Communication** : Les risques sont formules de maniere comprehensible par toutes les parties prenantes.
9. **Coherence** : L'echelle d'evaluation est appliquee de maniere consistante.
10. **Realisme** : Le plan de mitigation est executable avec les ressources disponibles.
