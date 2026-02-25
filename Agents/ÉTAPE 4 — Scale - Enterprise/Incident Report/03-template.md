# Template du document final -- Incident Report

## Template complet

```markdown
# Incident Report -- [Titre court et descriptif]

> **ID Incident :** INC-[YYYY]-[NNN]
> **Severite :** [SEV1 | SEV2 | SEV3 | SEV4]
> **Statut :** [En cours | Resolu | Cloture]
> **Date de l'incident :** [JJ/MM/AAAA]
> **Duree totale :** [Xh Ymin]
> **Auteur du rapport :** [Nom]
> **Date du rapport :** [JJ/MM/AAAA]
> **Incident Commander :** [Nom]

---

## 1. Resume de l'incident

[Resume de 5-10 lignes : ce qui s'est passe, l'impact, la cause racine, la resolution et les actions correctives principales.]

**Metriques cles :**
| Metrique | Valeur |
|----------|--------|
| Duree totale de l'incident | [Xh Ymin] |
| Temps de detection (TTD) | [X min] |
| Temps de mitigation (TTM) | [X min] |
| Temps de resolution (TTR) | [Xh Ymin] |
| Utilisateurs impactes | [N] |
| Transactions perdues | [N] |
| Impact financier estime | [X EUR] |
| SLO violes | [Oui/Non -- Details] |

## 2. Chronologie de l'incident

| Heure (UTC) | Evenement | Acteur | Impact |
|-------------|-----------|--------|--------|
| [HH:MM] | [Premier signe -- ex: spike d'erreurs 5xx] | [Systeme / Alerte] | [Description] |
| [HH:MM] | [Detection -- comment et par qui] | [Personne/Systeme] | |
| [HH:MM] | [Escalade -- qui est mobilise] | [Incident Commander] | |
| [HH:MM] | [Diagnostic -- hypotheses testees] | [Equipe] | |
| [HH:MM] | [Mitigation -- action prise] | [Personne] | [Effet de la mitigation] |
| [HH:MM] | [Resolution -- correctif applique] | [Personne] | [Retour a la normale] |
| [HH:MM] | [Cloture -- confirmation resolution] | [Incident Commander] | |

## 3. Impact

### 3.1 Impact utilisateurs
| Segment | Nombre impacte | Type d'impact | Duree |
|---------|---------------|---------------|-------|
| [Tous les utilisateurs] | [N] | [Service indisponible] | [Xh] |
| [Utilisateurs premium] | [N] | [Fonctionnalite X degradee] | [Xh] |

### 3.2 Impact business
| Element | Quantification | Details |
|---------|---------------|---------|
| Revenu perdu | [X EUR] | [Methode de calcul] |
| Transactions echouees | [N] | [Type de transactions] |
| SLA breaches | [N clients] | [Quels SLA] |
| Compensations dues | [X EUR] | [Selon les SLA] |

### 3.3 Impact technique
| Systeme | Impact | Donnees perdues ? | Rattrapage necessaire ? |
|---------|--------|-------------------|------------------------|
| | | [Oui/Non -- Detail] | [Oui/Non -- Plan] |

### 3.4 Impact sur les SLO
| SLO | Objectif | Valeur pendant l'incident | Error budget consomme |
|-----|----------|--------------------------|----------------------|
| [Disponibilite] | [99.9%] | [95.2%] | [X% du budget mensuel] |

## 4. Cause racine

### 4.1 Cause racine technique
[Description precise et detaillee de la cause racine technique. Pas un symptome, mais la vraie cause.]

### 4.2 Analyse des 5 Pourquoi
1. **Pourquoi l'incident s'est-il produit ?** [Reponse]
2. **Pourquoi [reponse 1] ?** [Reponse]
3. **Pourquoi [reponse 2] ?** [Reponse]
4. **Pourquoi [reponse 3] ?** [Reponse]
5. **Pourquoi [reponse 4] ?** [Reponse -- cause racine profonde]

### 4.3 Facteurs contributifs
| Facteur | Categorie | Description | Impact sur l'incident |
|---------|-----------|-------------|-----------------------|
| [Ex: Absence d'alerte sur la metrique X] | [Detection] | [Description] | [A retarde la detection de X min] |
| [Ex: Documentation de runbook obsolete] | [Processus] | [Description] | [A complique le diagnostic] |
| [Ex: Deployement en vendredi soir] | [Organisationnel] | [Description] | [Equipe reduite pour le diagnostic] |

## 5. Actions de resolution

### 5.1 Actions de mitigation immediate
| Action | Heure | Responsable | Effet |
|--------|-------|-------------|-------|
| [Ex: Rollback du deploiement v2.3.1] | [HH:MM UTC] | [Nom] | [Retour au service normal] |

### 5.2 Resolution definitive
[Description de la correction definitive appliquee.]

## 6. Actions correctives

### 6.1 Actions immediates (0-7 jours)
| ID | Action | Responsable | Echeance | Ticket | Statut |
|----|--------|-------------|----------|--------|--------|
| AC-001 | | | | [JIRA-XXX] | [A faire] |

### 6.2 Actions a court terme (7-30 jours)
| ID | Action | Responsable | Echeance | Ticket | Statut |
|----|--------|-------------|----------|--------|--------|
| AC-010 | | | | [JIRA-XXX] | [A faire] |

### 6.3 Actions structurelles (30+ jours)
| ID | Action | Responsable | Echeance | Ticket | Statut |
|----|--------|-------------|----------|--------|--------|
| AC-020 | | | | [JIRA-XXX] | [A faire] |

## 7. Lecons apprises

### 7.1 Ce qui a bien fonctionne
- [Element 1 -- Description]
- [Element 2 -- Description]

### 7.2 Ce qui a mal fonctionne
- [Element 1 -- Description et recommandation]
- [Element 2 -- Description et recommandation]

### 7.3 Ce qui a ete chanceux
- [Element 1 -- Pourquoi c'etait de la chance et comment en faire un acquis]

### 7.4 Recommandations generales
[Recommandations qui depassent cet incident specifique et concernent la fiabilite globale du systeme.]

## 8. Communication

### 8.1 Communication interne
| Audience | Canal | Message | Heure |
|----------|-------|---------|-------|
| [Engineering] | [Slack #incidents] | [Resume] | [HH:MM] |
| [Direction] | [Email] | [Resume executif] | [HH:MM] |

### 8.2 Communication externe
| Audience | Canal | Message | Heure |
|----------|-------|---------|-------|
| [Clients impactes] | [Status page / Email] | [Description] | [HH:MM] |

## 9. Suivi

### 9.1 Revue de suivi
- **Date de revue a 30 jours :** [JJ/MM/AAAA]
- **Responsable du suivi :** [Nom]
- **Critere de cloture :** Toutes les actions correctives de priorite haute sont implementees et verifiees

### 9.2 Metriques de suivi
| Metrique | Avant l'incident | Apres corrections | Objectif |
|----------|-----------------|-------------------|----------|
| [TTD pour incidents similaires] | [X min] | [X min] | [X min] |
| [Couverture monitoring] | [X%] | [X%] | [X%] |

## 10. Annexes

- [ ] Logs pertinents (anonymises si necessaire)
- [ ] Captures d'ecran des dashboards pendant l'incident
- [ ] Transcription des communications (Slack, Teams)
- [ ] Diagramme d'architecture du systeme impacte
```

## Instructions de rendu

1. **Format :** Le document final doit etre rendu en Markdown (.md), pret a etre versionne dans un depot Git.
2. **Horodatages :** Tous les horodatages doivent etre en UTC. Si l'utilisateur donne des heures locales, convertis-les en UTC.
3. **Factualite :** Ne documente que des faits verifies. Si une information est incertaine, indique-le explicitement avec "[A confirmer]".
4. **Culture blameless :** Le rapport ne doit JAMAIS pointer du doigt un individu comme cause. Les actions sont attribuees a des individus, les causes sont attribuees a des systemes.
5. **Validation :** Avant de generer le document final, presente la timeline reconstruite et l'analyse de cause racine pour validation.
6. **Suivi :** Insiste pour que chaque action corrective soit creee comme ticket dans l'outil de gestion de projet (Jira, Linear, etc.).
7. **Distribution :** Recommande de partager le rapport avec toutes les equipes d'ingenierie -- la transparence est essentielle a l'apprentissage organisationnel.
