# Template du document final -- SLA Documentation

## Template complet

```markdown
# SLA Documentation -- [Nom du Service]

> **Version :** [X.Y]
> **Date d'entree en vigueur :** [JJ/MM/AAAA]
> **Date de prochaine revue :** [JJ/MM/AAAA]
> **Auteur :** [Nom / Role]
> **Approuve par :** [Nom / Role]
> **Statut :** [Brouillon | En negociation | En vigueur | Expire]

---

## 1. Resume executif

[Resume de 5-10 lignes : services couverts, engagements principaux, mecanismes de compensation, points d'attention.]

## 2. Definitions

| Terme | Definition |
|-------|-----------|
| **Service** | [Definition precise du service couvert par ce SLA] |
| **Disponibilite** | [Definition precise : ex. "Le service est considere disponible lorsque X% des requetes API retournent un code 2xx en moins de Yms"] |
| **Indisponibilite / Downtime** | [Definition precise du contraire] |
| **Degradation** | [Definition d'un service partiellement fonctionnel] |
| **Maintenance planifiee** | [Definition et conditions] |
| **Periode de mesure** | [Ex: mois calendaire, rolling 30 jours] |
| **Uptime mensuel (%)** | [(Minutes totales - Minutes d'indisponibilite) / Minutes totales x 100] |
| **Incident** | [Definition d'un incident au sens du SLA] |
| **Credit de service** | [Definition du mecanisme de compensation] |

## 3. Services couverts

### 3.1 Perimetre
| Service / Composant | Inclus dans le SLA | Tier | Description |
|---------------------|-------------------|------|-------------|
| [API principale] | [Oui] | [Tier 1 -- Mission Critical] | [Description] |
| [Dashboard] | [Oui] | [Tier 2 -- Business Critical] | [Description] |
| [Documentation] | [Non] | [N/A] | [Hors perimetre SLA] |

### 3.2 Tiers de service (si applicable)
| Tier client | Services couverts | Niveau de SLA |
|-------------|-------------------|---------------|
| [Enterprise] | [Tous] | [Premium] |
| [Pro] | [API + Dashboard] | [Standard] |
| [Free] | [API uniquement] | [Best effort] |

## 4. Engagements de disponibilite

### 4.1 SLI (Service Level Indicators)
| SLI | Definition | Source de mesure | Granularite |
|-----|-----------|-----------------|-------------|
| [Disponibilite API] | [% de requetes HTTP avec code 2xx/3xx] | [Datadog / Synthetics] | [Par minute] |
| [Latence API] | [Latence P99 des requetes en ms] | [Datadog APM] | [Par minute] |
| [Disponibilite Dashboard] | [% de checks synthetiques reussis] | [Datadog Synthetics] | [Par 5 min] |

### 4.2 SLO (Service Level Objectives -- objectifs internes)
| SLI | SLO | Error budget (mensuel) | Alerte a |
|-----|-----|----------------------|----------|
| [Disponibilite API] | [99.95%] | [21.92 min] | [50%, 75%, 90%] |
| [Latence API P99] | [< 200ms] | [N/A] | [> 150ms] |

### 4.3 SLA (Service Level Agreements -- engagements contractuels)
| Engagement | Tier Enterprise | Tier Pro | Tier Free |
|-----------|----------------|---------|-----------|
| **Disponibilite mensuelle** | [99.9%] | [99.5%] | [Best effort] |
| **Latence API P99** | [< 500ms] | [< 1000ms] | [Best effort] |
| **Taux d'erreur** | [< 0.1%] | [< 0.5%] | [Best effort] |

## 5. Engagements de temps de reponse et support

### 5.1 Canaux de support
| Canal | Tier Enterprise | Tier Pro | Tier Free |
|-------|----------------|---------|-----------|
| [Email] | [Oui] | [Oui] | [Oui] |
| [Chat en direct] | [Oui] | [Oui] | [Non] |
| [Telephone] | [Oui] | [Non] | [Non] |
| [Slack dedie] | [Oui] | [Non] | [Non] |
| [Account Manager dedie] | [Oui] | [Non] | [Non] |

### 5.2 Temps de reponse par severite
| Severite | Definition | Enterprise | Pro | Free |
|----------|-----------|-----------|-----|------|
| **SEV1 -- Critique** | [Service completement indisponible] | [15 min] | [1h] | [Best effort] |
| **SEV2 -- Majeur** | [Fonctionnalite majeure impactee] | [30 min] | [4h] | [Best effort] |
| **SEV3 -- Modere** | [Fonctionnalite mineure impactee] | [4h] | [8h business] | [Best effort] |
| **SEV4 -- Mineur** | [Question, demande d'amelioration] | [8h business] | [24h business] | [Best effort] |

### 5.3 Temps de resolution cible
| Severite | Enterprise | Pro |
|----------|-----------|-----|
| **SEV1** | [4h] | [8h] |
| **SEV2** | [8h] | [24h] |
| **SEV3** | [5 jours business] | [10 jours business] |
| **SEV4** | [Best effort] | [Best effort] |

### 5.4 Horaires de support
| Tier | Disponibilite |
|------|--------------|
| Enterprise | [24/7/365] |
| Pro | [Lun-Ven 9h-18h CET] |
| Free | [Lun-Ven 9h-18h CET, best effort] |

## 6. Fenetres de maintenance planifiee

### 6.1 Maintenance reguliere
- **Frequence :** [Ex: hebdomadaire / mensuelle]
- **Fenetre preferee :** [Ex: Dimanche 02h-06h UTC]
- **Preavis minimum :** [Ex: 5 jours ouvrables]
- **Canal de notification :** [Ex: email + status page]
- **Duree maximale :** [Ex: 4 heures]

### 6.2 Maintenance d'urgence
- **Conditions de declenchement :** [Ex: vulnerabilite de securite critique, risque imminent pour les donnees]
- **Preavis :** [Ex: meilleur effort, minimum 1 heure si possible]
- **Canal de notification :** [Ex: email + status page + notification in-app]

### 6.3 Impact sur le calcul de disponibilite
[La maintenance planifiee avec preavis conforme EST / N'EST PAS exclue du calcul de disponibilite. Preciser.]

## 7. Exclusions

Les situations suivantes sont exclues du calcul de disponibilite et ne donnent pas lieu a compensation :

1. **Maintenance planifiee** conforme aux conditions definies en section 6
2. **Force majeure** telle que definie par [le droit applicable] : catastrophe naturelle, guerre, pandemie, decision gouvernementale
3. **Mauvaise utilisation** du service par le client, non conforme a la documentation
4. **Depassement des limites** d'utilisation definies dans le contrat (rate limiting, quotas)
5. **Defaillance des systemes du client** (infrastructure, reseau, navigateur)
6. **Actions demandees par le client** (ex: migration, changement de configuration a la demande du client)

**Exclusions qui NE SONT PAS applicables** (pour eviter les abus) :
- Les pannes de fournisseurs cloud NE SONT PAS exclues (c'est notre responsabilite de choisir des providers fiables)
- Les bugs logiciels NE SONT PAS exclus (c'est notre responsabilite)
- Les problemes de scalabilite NE SONT PAS exclus (c'est notre responsabilite de dimensionner le service)

## 8. Penalites et compensations

### 8.1 Credits de service -- Disponibilite
| Disponibilite mensuelle mesuree | Credit (% de la facture mensuelle) |
|-----------------------------------|------------------------------------|
| [< 99.9% mais >= 99.5%] | [10%] |
| [< 99.5% mais >= 99.0%] | [25%] |
| [< 99.0% mais >= 95.0%] | [50%] |
| [< 95.0%] | [100%] |

### 8.2 Credits de service -- Temps de reponse support
| Depassement du temps de reponse | Credit |
|---------------------------------|--------|
| [2x le temps engage] | [5% de la facture mensuelle] |
| [5x le temps engage] | [10% de la facture mensuelle] |

### 8.3 Conditions d'application
- Les credits sont **automatiques** / **sur reclamation** (preciser)
- Delai de reclamation : [X jours apres la fin du mois concerne]
- Plafond de credit mensuel : [X% de la facture mensuelle]
- Les credits sont appliques sur la facture suivante (pas de remboursement en especes)

### 8.4 Processus de reclamation
1. Le client soumet une reclamation via [canal] dans les [X] jours
2. L'equipe support verifie les metriques dans les [X] jours ouvrables
3. Le credit est applique ou la reclamation est rejetee avec justification
4. En cas de desaccord, escalade a [role/personne]

## 9. Monitoring et reporting

### 9.1 Status page
- **URL :** [https://status.example.com]
- **Provider :** [Statuspage.io / Betteruptime / Instatus]
- **Mise a jour :** [Temps reel / Manuelle lors d'incidents]
- **Historique disponible :** [90 jours]

### 9.2 Rapport mensuel de SLA
- **Contenu :** Disponibilite mesuree, incidents, temps de resolution, credits dus
- **Format :** [PDF / Dashboard client]
- **Distribution :** [Automatique le 5 du mois suivant]
- **Destinataires :** [Liste ou role]

### 9.3 Dashboards
| Dashboard | Audience | Acces | URL |
|-----------|----------|-------|-----|
| [Status page publique] | [Tous] | [Public] | [URL] |
| [Dashboard SLA client] | [Clients Enterprise] | [Authentifie] | [URL] |
| [Dashboard SLO interne] | [Equipe SRE] | [Interne] | [URL] |

## 10. Revue et evolution du SLA

### 10.1 Cycle de revue
- **Revue annuelle :** [Date] -- Revue complete du SLA avec ajustement des engagements
- **Revue trimestrielle :** Analyse des metriques et identification des tendances
- **Revue ad hoc :** Declenchee par un incident majeur, un changement d'architecture ou une demande client

### 10.2 Processus de modification
1. Proposition de modification par [role]
2. Analyse d'impact par [equipe SRE + Legal + Commercial]
3. Preavis de [X jours] aux clients avant toute modification
4. Entree en vigueur au debut du mois/trimestre suivant

### 10.3 Historique des versions
| Version | Date | Modifications | Auteur |
|---------|------|---------------|--------|
| [1.0] | [Date] | [Version initiale] | [Nom] |

## 11. Contacts et escalade

| Niveau | Contact | Canal | Delai d'escalade |
|--------|---------|-------|-----------------|
| Niveau 1 -- Support | [support@example.com] | [Email / Chat] | [Si non resolu en X heures] |
| Niveau 2 -- Engineering | [oncall@example.com] | [PagerDuty] | [Si non resolu en X heures] |
| Niveau 3 -- Management | [Nom -- VP Engineering] | [Telephone] | [Si SEV1 non resolu en X heures] |
| Escalade client | [Nom -- Account Manager] | [Email / Telephone] | [A tout moment] |

## 12. Annexes

- [ ] Methodologie de calcul de la disponibilite (formules detaillees)
- [ ] Liste des endpoints/services couverts avec leur classification
- [ ] Architecture haut niveau du service
- [ ] SLA des fournisseurs et dependances
- [ ] Historique de disponibilite (12 derniers mois)
- [ ] Glossaire des termes techniques
```

## Instructions de rendu

1. **Format :** Le document final doit etre rendu en Markdown (.md), pret a etre versionne dans un depot Git et a etre annexe a un contrat commercial.
2. **Precision juridique :** Les definitions doivent etre suffisamment precises pour etre enforceables contractuellement. Recommande une revue par le service juridique.
3. **Coherence SLI/SLO/SLA :** Verifie que la hierarchie SLI > SLO > SLA est respectee et que la marge entre SLO et SLA est suffisante.
4. **Donnees historiques :** Insiste pour que les engagements soient calibres sur des donnees reelles, pas sur des objectifs aspirationnels.
5. **Validation :** Avant de generer le document final, presente les engagements cles pour validation par l'utilisateur, l'equipe technique ET le service commercial.
6. **Comparaison concurrentielle :** Suggere de comparer les engagements avec ceux des concurrents pour s'assurer d'un positionnement adequat.
7. **Simulation :** Propose de simuler des scenarios d'incident pour verifier que les mecanismes de compensation fonctionnent comme prevu.
