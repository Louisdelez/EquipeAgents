# Frameworks et pieges -- Post-Mortem Document

## Cultures et methodologies

### 1. Google's Blameless Post-Mortem Culture
Decrite dans le livre "Site Reliability Engineering". Principes cles : focus sur le systeme pas les individus, documentation exhaustive, diffusion large, actions correctives tracees. Les post-mortems sont consideres comme un investissement, pas un cout.

### 2. Etsy's "Just Culture"
Inspiree des travaux de Sidney Dekker. Trois axiomes : les gens font du mieux qu'ils peuvent avec les informations disponibles, les erreurs sont des symptomes de problemes systemiques, le blame empeche l'apprentissage.

### 3. 5 Whys (Toyota Production System / Amazon)
Technique d'analyse causale iterative. Poser "Pourquoi ?" 5 fois pour remonter de l'effet a la cause profonde. Amazon l'utilise dans ses COE (Correction of Errors).

### 4. Swiss Cheese Model (James Reason)
Modele qui explique les accidents comme le resultat de "trous" dans plusieurs couches de defense qui s'alignent. Chaque couche (design, processus, monitoring, formation) a des faiblesses, et un incident survient quand les faiblesses de toutes les couches s'alignent.

### 5. Netflix's Post-Incident Review
Approche collaborative ou l'equipe entiere participe a la reconstruction de l'incident. Focus sur le contexte dans lequel les decisions ont ete prises (pas sur le jugement retrospectif de ces decisions).

### 6. Learning from Incidents (LFI) Methodology
Approche moderne promue par Jeli.io et Nora Jones. Va au-dela de la cause racine unique pour explorer les conditions latentes, les surprises et les adaptations. Considere l'incident comme une fenetre sur le fonctionnement reel du systeme.

### 7. SRE Approach to Post-Mortems
Les post-mortems sont declenchees automatiquement si un SLO est viole ou si un incident depasse un seuil de severite. Le processus est standardise mais l'analyse est approfondie.

## Concepts cles

### Hindsight bias (biais retrospectif)
Tendance a juger les decisions passees avec les informations du present. "C'etait evident qu'il ne fallait pas deployer vendredi" -- non, ca ne l'etait pas sur le moment.

### Outcome bias (biais de resultat)
Juger la qualite d'une decision par son resultat plutot que par le processus de decision. Un mauvais resultat ne signifie pas une mauvaise decision.

### Normalization of deviance (Diane Vaughan)
Quand des ecarts par rapport aux normes deviennent la norme parce qu'ils n'ont jamais cause de probleme... jusqu'au jour ou.

### Sharp end vs. Blunt end
Le "sharp end" (l'operateur) est souvent blame, mais les causes profondes sont au "blunt end" (management, processus, architecture, culture).

---

## Pieges courants et comment les eviter

### Piege 1 -- Le blame deguise
**Probleme :** "L'erreur humaine de [Nom]" reformule en "Le processus n'a pas empeche l'erreur de [Nom]" -- c'est toujours du blame, juste plus subtil.
**Solution :** Ne mentionne JAMAIS de nom dans les causes. Parle de "l'operateur" ou "l'equipe". Focus sur : pourquoi le systeme permettait cette erreur, pas sur qui l'a commise.

### Piege 2 -- Le hindsight bias
**Probleme :** "Il etait evident que le deploiement allait causer un probleme" -- non, ca ne l'etait pas avec les informations disponibles a l'instant T.
**Solution :** Pour chaque decision, reconstruis le contexte informationnel : que savait la personne ? Quelles alternatives avait-elle ? Avec ces informations, la decision etait-elle raisonnable ?

### Piege 3 -- La cause racine unique
**Probleme :** "La cause racine est X" -- les incidents complexes n'ont presque jamais une seule cause. C'est une convergence de facteurs.
**Solution :** Parle de "facteurs contributifs" plutot que de "cause racine unique". Utilise le Swiss Cheese Model pour montrer comment plusieurs couches de defense ont failli simultanement.

### Piege 4 -- Les actions correctives vagues
**Probleme :** "Ameliorer les tests" ou "Former l'equipe" -- ce ne sont pas des actions, ce sont des voeux pieux.
**Solution :** SMART : "Ajouter un test d'integration qui simule un pic de charge de 10x sur le service de paiement -- Responsable : [Nom] -- Echeance : [Date] -- Ticket : [JIRA-XXX]".

### Piege 5 -- Le post-mortem administratif
**Probleme :** Remplir le template par obligation sans reel effort d'analyse. Cocher les cases et passer a autre chose.
**Solution :** Un bon post-mortem prend 2-4 heures d'effort d'analyse. Si ca prend 30 minutes, l'analyse est probablement superficielle. Challenge la profondeur a chaque section.

### Piege 6 -- Ignorer ce qui a bien fonctionne
**Probleme :** Se concentrer uniquement sur les echecs, creant une atmosphere negative qui decourage la participation future.
**Solution :** Celebre explicitement ce qui a bien fonctionne. Les equipes qui ont reagi vite, les outils qui ont aide, les decisions qui etaient bonnes. Le renforcement positif est essentiel.

### Piege 7 -- Le post-mortem sans suivi
**Probleme :** Des actions correctives identifiees mais jamais implementees. Le meme incident se reproduit 6 mois plus tard.
**Solution :** Chaque action doit etre un ticket dans l'outil de suivi. Planifie une revue de suivi a 30 jours. Le post-mortem n'est "cloture" que quand les actions critiques sont faites.

---

## Criteres de qualite du document final

1. **Culture blameless** : Aucune mention de blame individuel -- focus exclusif sur les systemes et les processus
2. **Profondeur de l'analyse** : L'analyse va au-dela de la cause racine technique pour explorer les facteurs systemiques et organisationnels
3. **Equilibre** : Le document couvre ce qui a bien fonctionne autant que ce qui a mal fonctionne
4. **Precision factuelle** : Chaque affirmation est basee sur des faits verifiables (logs, metriques, temoignages)
5. **Actions correctives SMART** : Chaque action est specifique, mesurable, attribuee, realiste et temporellement definie
6. **Apprentissage organisationnel** : Le document identifie clairement les lecons qui depassent cet incident specifique
7. **Lisibilite** : Le document est accessible a quiconque dans l'organisation, pas seulement aux equipes techniques
8. **Plan de diffusion** : Le document prevoit comment et a qui les apprentissages seront partages
