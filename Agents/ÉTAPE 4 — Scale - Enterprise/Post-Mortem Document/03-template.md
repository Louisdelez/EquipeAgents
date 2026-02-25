# Template du document final -- Post-Mortem Document

## Template complet

```markdown
# Post-Mortem -- [Titre descriptif de l'incident]

> **ID Post-Mortem :** PM-[YYYY]-[NNN]
> **Incident associe :** INC-[YYYY]-[NNN]
> **Date de l'incident :** [JJ/MM/AAAA]
> **Date du post-mortem :** [JJ/MM/AAAA]
> **Auteur(s) :** [Noms]
> **Participants au post-mortem :** [Noms et roles]
> **Statut :** [Brouillon | Revue en cours | Publie]

---

## 1. Resume

[Resume de 10-15 lignes : ce qui s'est passe, pourquoi (causes profondes), quel a ete l'impact, quelles sont les principales lecons et actions correctives.]

**Severite :** [SEV1 | SEV2 | SEV3]
**Duree de l'incident :** [Xh Ymin]
**Impact :** [N utilisateurs impactes, X EUR de pertes estimees]

## 2. Ce qui s'est passe

[Recit narratif de l'incident, ecrit de maniere accessible. Pas une timeline seche, mais une histoire qui aide le lecteur a comprendre le deroulement et le contexte. Inclure le contexte avant l'incident (qu'est-ce qui a mene a cette situation ?).]

## 3. Chronologie detaillee

| Heure (UTC) | Evenement | Contexte decisionnel |
|-------------|-----------|---------------------|
| [HH:MM] | [Ce qui s'est passe] | [Ce que les equipes savaient a ce moment, pourquoi elles ont pris cette decision] |
| [HH:MM] | | |

**Metriques temporelles :**
| Metrique | Valeur |
|----------|--------|
| Temps entre le debut reel et la detection (TTD) | [X min] |
| Temps entre la detection et la premiere action (TTR) | [X min] |
| Temps entre la premiere action et la mitigation | [X min] |
| Temps total de l'incident | [Xh Ymin] |

## 4. Analyse des causes profondes

### 4.1 Methode des 5 Pourquoi

```
Pourquoi 1 : [L'incident s'est produit parce que...]
  |
  +-- Pourquoi 2 : [Cela etait possible parce que...]
        |
        +-- Pourquoi 3 : [Cela n'a pas ete detecte/prevenu parce que...]
              |
              +-- Pourquoi 4 : [Cette faiblesse existait parce que...]
                    |
                    +-- Pourquoi 5 : [Fondamentalement, cela est du a...]
```

### 4.2 Modele Swiss Cheese -- Couches de defense
| Couche de defense | Existait ? | Efficace ? | "Trou" identifie | Action corrective |
|-------------------|-----------|-----------|-------------------|-------------------|
| Design / Architecture | [Oui/Non] | [Oui/Non] | [Description] | [Action] |
| Code review | | | | |
| Tests automatises | | | | |
| CI/CD pipeline | | | | |
| Feature flags | | | | |
| Monitoring / Alerting | | | | |
| Runbooks / Documentation | | | | |
| Formation des equipes | | | | |
| Architecture de resilience (failover, circuit breaker) | | | | |

### 4.3 Facteurs contributifs
| Facteur | Categorie | Impact sur l'incident | Recurrent ? |
|---------|-----------|----------------------|-------------|
| | [Technique / Processus / Organisationnel / Culturel] | [Description] | [Oui/Non] |

### 4.4 Normalisation de la deviance
[Y avait-il des pratiques deviantes de la norme qui etaient devenues "normales" ? Si oui, lesquelles et depuis quand ?]

## 5. Ce qui a bien fonctionne

| Element | Description | Impact positif |
|---------|-------------|---------------|
| | | |

**A retenir et a formaliser :**
[Quelles bonnes pratiques observees pendant cet incident devraient etre documentees et generalisees ?]

## 6. Ce qui a mal fonctionne

| Element | Description | Impact negatif | Recommendation |
|---------|-------------|---------------|----------------|
| | | | |

## 7. Ce qui a ete chanceux

| Element | Description | Risque si la chance n'avait pas ete la | Action pour transformer la chance en acquis |
|---------|-------------|----------------------------------------|---------------------------------------------|
| | | | |

## 8. Metriques d'impact

### 8.1 Impact utilisateurs
| Metrique | Valeur |
|----------|--------|
| Utilisateurs impactes | [N] |
| Pourcentage de la base | [X%] |
| Duree d'indisponibilite | [Xh Ymin] |

### 8.2 Impact business
| Metrique | Valeur |
|----------|--------|
| Revenu perdu estime | [X EUR] |
| Transactions echouees | [N] |
| SLA breaches | [N] |
| Compensations dues | [X EUR] |
| Impact NPS estime | [X points] |

### 8.3 Impact sur les SLO
| SLO | Objectif | Realise | Error budget consomme |
|-----|----------|---------|----------------------|
| | | | |

### 8.4 Cout total de l'incident
| Poste | Cout estime |
|-------|-------------|
| Revenu perdu | [X EUR] |
| Heures d'ingenierie (gestion incident) | [X heures = X EUR] |
| Compensations SLA | [X EUR] |
| Impact reputationnel (estime) | [X EUR] |
| **Total** | **[X EUR]** |

## 9. Actions correctives

### 9.1 Prevention (empecher que ca arrive)
| ID | Action | Categorie | Responsable | Echeance | Ticket | Statut | Verification |
|----|--------|-----------|-------------|----------|--------|--------|-------------|
| PM-AC-001 | | [Technique/Process/Orga] | [Nom] | [Date] | [JIRA-XXX] | [A faire] | [Comment verifier l'efficacite] |

### 9.2 Detection (detecter plus vite)
| ID | Action | Responsable | Echeance | Ticket | Statut |
|----|--------|-------------|----------|--------|--------|
| PM-AC-010 | | | | | |

### 9.3 Mitigation (limiter l'impact)
| ID | Action | Responsable | Echeance | Ticket | Statut |
|----|--------|-------------|----------|--------|--------|
| PM-AC-020 | | | | | |

### 9.4 Actions structurelles (long terme)
| ID | Action | Responsable | Echeance | Ticket | Statut |
|----|--------|-------------|----------|--------|--------|
| PM-AC-030 | | | | | |

### 9.5 Actions souhaitees mais non planifiees
[Actions identifiees comme utiles mais trop couteuses ou complexes pour etre planifiees maintenant. Documentees pour reference future.]
| Action | Raison du report | Condition de declenchement |
|--------|-----------------|---------------------------|
| | | [Dans quelles conditions cette action deviendrait prioritaire] |

## 10. Diffusion et apprentissage

### 10.1 Plan de diffusion
| Audience | Format | Date | Responsable |
|----------|--------|------|-------------|
| Equipe directe | Reunion post-mortem | [Date] | [Nom] |
| Engineering complet | Presentation + Q&A | [Date] | [Nom] |
| Management | Resume executif | [Date] | [Nom] |
| Clients (si applicable) | Communication post-incident | [Date] | [Nom] |

### 10.2 Apprentissages cles
1. [Apprentissage 1 -- En une phrase percutante]
2. [Apprentissage 2]
3. [Apprentissage 3]

### 10.3 Suivi
- **Revue de suivi a 30 jours :** [Date] -- Verification de l'avancement des actions correctives
- **Responsable du suivi :** [Nom]
- **Critere de cloture du post-mortem :** Toutes les actions de severite haute sont implementees et verifiees

## 11. Annexes

- [ ] Incident Report original
- [ ] Logs et metriques pertinents
- [ ] Captures d'ecran des dashboards
- [ ] Transcriptions des communications
- [ ] Diagramme du systeme impacte
- [ ] Notes de la reunion post-mortem
```

## Instructions de rendu

1. **Format :** Le document final doit etre rendu en Markdown (.md), pret a etre versionne dans un depot Git.
2. **Blameless :** Verifie une derniere fois que le document ne contient AUCUN blame individuel. Aucun nom dans les causes. Les noms n'apparaissent que dans les responsabilites des actions correctives (qui est une marque de confiance, pas de blame).
3. **Recit narratif :** La section "Ce qui s'est passe" doit etre un recit fluide et accessible, pas une liste a puces. C'est la section qui sera la plus lue -- soigne-la.
4. **Validation :** Avant de generer le document final, presente l'analyse des causes profondes et les actions correctives pour validation. C'est la partie la plus critique.
5. **Ton :** Factuel, empathique, oriente apprentissage. Ni froid ni emotionnel. Le lecteur doit sentir que l'objectif est d'apprendre, pas de punir.
6. **Diffusion :** Insiste pour que le post-mortem soit presente en session d'equipe, pas seulement envoye par email. La discussion est aussi importante que le document.
7. **Archivage :** Le post-mortem doit etre stocke dans un endroit accessible a toute l'organisation (wiki, Notion, Confluence, repo Git). La valeur d'un post-mortem augmente avec le temps -- c'est une base de connaissances vivante.
