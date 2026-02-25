# Technical Specification -- Template du document final

## Template

```markdown
# Technical Specification -- [Nom du projet]

> Decrit l'architecture technique et les choix d'implementation.

---

## Resume technique

**Contexte :** [Resume du probleme business -- reference au PRD]

**Objectif technique :** [Ce que l'architecture doit accomplir]

**Contraintes :** [Contraintes techniques, organisationnelles, budgetaires]

**Audience :** [Pour qui ce document est-il ecrit]

## Architecture globale

### Vue Context (C1)
[Description du systeme dans son environnement : utilisateurs, systemes externes, integrations]

```
[Diagramme texte ou description de l'architecture haut niveau]
Utilisateurs -> [Frontend] -> [Backend/API] -> [Base de donnees]
                                             -> [Services tiers]
```

### Vue Containers (C2)
[Description des grandes briques du systeme]

| Container | Technologie | Responsabilite | Communication |
|-----------|-------------|---------------|---------------|
| [Frontend] | [Tech] | [Role] | [Protocol] |
| [API Backend] | [Tech] | [Role] | [Protocol] |
| [Base de donnees] | [Tech] | [Role] | [Protocol] |
| [Queue/Events] | [Tech] | [Role] | [Protocol] |

## Stack technique

| Couche | Technologie | Version | Justification |
|--------|-------------|---------|---------------|
| Frontend | [Tech] | [Version] | [Pourquoi ce choix] |
| Backend | [Tech] | [Version] | [Pourquoi ce choix] |
| Base de donnees | [Tech] | [Version] | [Pourquoi ce choix] |
| Cache | [Tech] | [Version] | [Pourquoi ce choix] |
| Queue/Messaging | [Tech] | [Version] | [Pourquoi ce choix] |
| Infrastructure | [Cloud/On-prem] | -- | [Pourquoi ce choix] |
| CI/CD | [Tech] | -- | [Pourquoi ce choix] |
| Monitoring | [Tech] | -- | [Pourquoi ce choix] |

## Composants principaux

### Composant 1 -- [Nom]
**Responsabilite :** [Ce que fait ce composant]

**Interfaces :**
- Entree : [Ce qu'il recoit]
- Sortie : [Ce qu'il produit]

**Logique metier cle :**
- [Regle 1]
- [Regle 2]

**Dependances :** [De quoi il depend]

### Composant 2 -- [Nom]
[Meme structure]

## Modele de donnees

### Entites principales

#### [Entite 1]
| Champ | Type | Contraintes | Description |
|-------|------|-------------|-------------|
| id | UUID | PK | Identifiant unique |
| [champ] | [type] | [contraintes] | [description] |

#### [Entite 2]
[Meme structure]

### Relations
```
[Entite 1] 1--N [Entite 2]
[Entite 2] N--N [Entite 3]
```

### Volumes estimes
| Entite | Volume initial | Croissance/mois | Volume a 12 mois |
|--------|---------------|----------------|------------------|
| [Entite] | [Nombre] | [Croissance] | [Projection] |

### Index recommandes
| Table | Index | Justification |
|-------|-------|---------------|
| [Table] | [Champs] | [Pattern d'acces] |

## APIs / Interfaces

### API 1 -- [Nom]
| Methode | Endpoint | Description | Auth |
|---------|----------|-------------|------|
| GET | /api/v1/[resource] | [Description] | [Type] |
| POST | /api/v1/[resource] | [Description] | [Type] |
| PUT | /api/v1/[resource]/:id | [Description] | [Type] |
| DELETE | /api/v1/[resource]/:id | [Description] | [Type] |

**Format de reponse :**
```json
{
  "data": {},
  "meta": {},
  "errors": []
}
```

**Codes d'erreur :**
| Code | Signification | Action client |
|------|--------------|--------------|
| 400 | Requete invalide | Corriger les parametres |
| 401 | Non authentifie | Se reconnecter |
| 403 | Non autorise | Verifier les permissions |
| 429 | Rate limit atteint | Retry avec backoff |
| 500 | Erreur serveur | Retry ou contacter le support |

**Rate Limiting :** [Limites par client/endpoint]

## Securite

### Authentification et autorisation
- [Methode d'authentification (OAuth2, JWT, etc.)]
- [Modele d'autorisation (RBAC, ABAC, etc.)]
- [Gestion des sessions]

### Protection des donnees
- [Chiffrement at rest]
- [Chiffrement in transit]
- [Donnees sensibles et leur traitement]
- [Conformite RGPD / autres]

### Gestion des secrets
- [Outil utilise (Vault, KMS, etc.)]
- [Rotation des secrets]

### Menaces identifiees
| Menace | Probabilite | Impact | Mitigation |
|--------|-------------|--------|------------|
| [Menace] | [P] | [I] | [Action] |

## Scalabilite

### SLA / SLO
| Metrique | Objectif | Mesure |
|----------|----------|--------|
| Disponibilite | [Ex: 99.9%] | [Comment c'est mesure] |
| Latence P50 | [Ex: < 100ms] | [Comment c'est mesure] |
| Latence P99 | [Ex: < 500ms] | [Comment c'est mesure] |
| Throughput | [Ex: 1000 req/s] | [Comment c'est mesure] |

### Strategie de scaling
- [Auto-scaling horizontal/vertical]
- [Bottlenecks identifies]
- [Caching strategy]

### Disaster Recovery
| Parametre | Valeur |
|-----------|--------|
| RPO (Recovery Point Objective) | [Ex: 1 heure] |
| RTO (Recovery Time Objective) | [Ex: 4 heures] |
| Strategie de backup | [Description] |
| Procedure de failover | [Description] |

## Observabilite

### Monitoring
- [Metriques systeme a surveiller]
- [Metriques metier a surveiller]
- [Dashboards principaux]

### Logging
- [Format de logs]
- [Niveaux de log]
- [Retention]

### Alerting
| Alerte | Condition | Severite | Action |
|--------|-----------|----------|--------|
| [Nom] | [Condition de declenchement] | [Critical/Warning/Info] | [Runbook/Action] |

## Alternatives considerees

| Decision | Option choisie | Alternative 1 | Alternative 2 | Raison du choix |
|----------|---------------|---------------|---------------|----------------|
| [Decision] | [Choix] | [Alt 1 + pros/cons] | [Alt 2 + pros/cons] | [Justification] |

## Risques techniques

| Risque | Probabilite | Impact | Mitigation | Owner |
|--------|-------------|--------|------------|-------|
| [Risque] | [H/M/B] | [H/M/B] | [Plan] | [Personne] |

## Open Questions

- [ ] [Question non resolue 1]
- [ ] [Question non resolue 2]

## Plan de migration (si applicable)

### Strategie de migration
[Big bang / Progressive / Blue-green / Canary]

### Etapes de migration
1. [Etape 1]
2. [Etape 2]

### Plan de rollback
[Comment revenir en arriere si la migration echoue]

---

*Derniere mise a jour : [Date]*
*Auteur : [Nom]*
*Reviewers : [Noms]*
*Version : 1.0*
*Statut : Draft / In Review / Approved*
```

---

## Instructions de rendu

1. **Ne produis JAMAIS la spec technique sans avoir compris le contexte business.** Une architecture hors contexte est un exercice academique.
2. **Exige des justifications pour chaque choix.** "On utilise React" n'est pas suffisant. "On utilise React parce que l'equipe a 3 ans d'experience dessus et que le design system existant est en React" est suffisant.
3. **Challenge les alternatives.** Pour chaque choix majeur, demande au moins une alternative et pourquoi elle a ete rejetee.
4. **Pense production des le debut.** Monitoring, logging, alerting, backup, rollback ne sont pas des afterthoughts.
5. **Verifie l'alignement PRD-Tech Spec.** Chaque exigence du PRD doit avoir une reponse technique dans la spec.
6. **Identifie les SPOF.** Pour chaque composant, pose la question : "Que se passe-t-il si ca tombe ?"
7. **Produis le document final en un seul bloc Markdown.** L'utilisateur doit pouvoir copier-coller directement.
8. **Propose une checklist de validation** basee sur les criteres de qualite.
9. **Demande explicitement : "Souhaites-tu que je modifie quelque chose avant de finaliser ?"**
