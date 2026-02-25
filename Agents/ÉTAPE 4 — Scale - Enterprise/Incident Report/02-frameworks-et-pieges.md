# Frameworks et pieges -- Incident Report

## Frameworks de gestion d'incidents

### 1. PagerDuty's Incident Response Framework
Processus structure en phases : Triage, Investigation, Resolution, Post-Incident. Roles definis : Incident Commander, Communications Lead, Subject Matter Experts. Severite sur 5 niveaux (SEV1-SEV5).

### 2. Google SRE Incident Management
Approche basee sur le livre "Site Reliability Engineering". Emphasis sur les error budgets, les SLO et la gestion structuree des incidents. Incident Commander, Operations Lead, Communications Lead.

### 3. Amazon COE (Cause of Error)
Methode Amazon pour analyser les causes profondes des incidents. Focus sur les mecanismes (pas les individus), les corrections systemiques et la prevention.

### 4. Jeli.io's Incident Analysis
Approche moderne de l'analyse d'incidents qui va au-dela de la cause racine unique. Focus sur les facteurs contributifs, les conditions latentes et l'apprentissage organisationnel.

### 5. ITIL Incident Management
Framework ITSM pour la gestion des incidents. Classification, priorisation, escalade, resolution, cloture. Adapte aux environnements enterprise traditionnels.

### 6. Blameless Post-Incident Reviews
Culture ou l'objectif est de comprendre le systeme, pas de punir les individus. Basee sur les travaux de Sidney Dekker ("The Field Guide to Understanding Human Error").

## Classification de severite (reference)

| Severite | Impact | Exemples | Response Time Target |
|----------|--------|----------|---------------------|
| **SEV1 - Critique** | Service completement indisponible pour tous les utilisateurs | Panne totale, perte de donnees, breach securite | Immediate (< 5 min) |
| **SEV2 - Majeur** | Fonctionnalite majeure impactee, degradation severe | Paiements impossibles, latence > 10x normal | < 15 min |
| **SEV3 - Modere** | Fonctionnalite mineure impactee, contournement possible | Feature secondaire HS, degradation moderee | < 1 heure |
| **SEV4 - Mineur** | Impact minimal, cosmetique | Bug UI, message d'erreur incorrect | < 4 heures |

---

## Pieges courants et comment les eviter

### Piege 1 -- Le blame game
**Probleme :** Pointer du doigt un individu comme cause de l'incident. "Jean a deploye le mauvais code" n'est pas une analyse -- c'est un blame.
**Solution :** Toujours demander : pourquoi le systeme a-t-il permis que cette erreur ait un tel impact ? Si un humain peut casser la production avec une seule action, c'est un probleme de systeme, pas d'individu.

### Piege 2 -- La cause racine superficielle
**Probleme :** S'arreter au premier niveau de "pourquoi" ("Le serveur a manque de memoire" -- ok, mais pourquoi ?).
**Solution :** Applique systematiquement les 5 Pourquoi. La vraie cause racine est generalement a 3-5 niveaux de profondeur. C'est souvent un probleme de processus ou d'architecture, pas un bug isole.

### Piege 3 -- La timeline approximative
**Probleme :** "Ca s'est passe vers 14h" ou "quelques minutes apres". L'imprecision rend l'analyse impossible.
**Solution :** Exige des horodatages precis (UTC). Utilise les logs, les metriques, les historiques Slack/Teams pour reconstituer la timeline avec precision.

### Piege 4 -- L'impact non quantifie
**Probleme :** "Beaucoup d'utilisateurs ont ete impactes" n'est pas une mesure.
**Solution :** Quantifie : nombre d'utilisateurs, nombre de requetes en erreur, revenu perdu (meme estime), SLO violes avec les chiffres precis.

### Piege 5 -- Les actions correctives vagues
**Probleme :** "Ameliorer le monitoring" ou "renforcer les tests" ne sont pas des actions correctives.
**Solution :** Chaque action doit etre SMART : Specifique, Mesurable, Attribuee, Realiste, Temporellement definie. "Ajouter une alerte PagerDuty sur le P99 latency du service X quand il depasse 500ms -- Responsable : [Nom] -- Echeance : [Date]".

### Piege 6 -- Le rapport oublie dans un tiroir
**Probleme :** Documenter l'incident puis ne jamais suivre les actions correctives.
**Solution :** Cree des tickets (Jira, Linear) pour chaque action corrective. Fais une revue de suivi a 30 jours. Refuse de clore l'incident tant que les actions critiques ne sont pas implementees.

### Piege 7 -- Ignorer les facteurs humains et organisationnels
**Probleme :** Se concentrer uniquement sur la technique en ignorant les facteurs humains (fatigue, pression, manque de formation, communication defaillante).
**Solution :** Inclus systematiquement une section sur les facteurs contributifs non-techniques. La fiabilite est autant une question humaine que technique.

---

## Criteres de qualite du document final

1. **Precision temporelle** : La timeline est documentee minute par minute avec des horodatages UTC verifies
2. **Impact quantifie** : Tous les impacts sont chiffres (utilisateurs, transactions, revenu, SLO)
3. **Cause racine profonde** : L'analyse va au-dela du symptome (minimum 3 niveaux de "pourquoi")
4. **Culture blameless** : Le rapport analyse les systemes et les processus, pas les individus
5. **Actions correctives SMART** : Chaque action est specifique, attribuee, datee et verifiable
6. **Completude** : Aucune section n'est vide ou baclee -- chaque aspect de l'incident est couvert
7. **Factualite** : Tout ce qui est documente est base sur des faits verifiables (logs, metriques, temoignages)
8. **Lecons apprises** : Le rapport identifie clairement ce que l'organisation doit apprendre de cet incident
