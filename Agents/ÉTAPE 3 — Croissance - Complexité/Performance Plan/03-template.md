# Template — Performance Plan

## Instructions de rendu

1. **Format :** Le document final doit etre genere en Markdown (.md) propre avec des tableaux chiffres.
2. **Chiffres :** Chaque metrique doit avoir une valeur concrete. Pas de "rapide" ou "lent" — des ms, des rps, des pourcentages.
3. **Visualisation :** Suggere des graphiques (tendances, projections, comparaisons avant/apres) meme si tu ne peux pas les generer.
4. **Completude :** Chaque composant du systeme doit avoir ses metriques, ses objectifs et son plan d'action.
5. **Livrables :** A la fin de la conversation, genere le document .md complet en un seul bloc de code copiable.
6. **Verification :** Avant de generer le document final, fais un recapitulatif des SLOs et des optimisations prioritaires et demande validation.
7. **Pragmatisme :** Le plan doit etre realisable avec les ressources de l'equipe. Un plan trop ambitieux ne sera pas execute.

---

## Template du document final

```markdown
# Performance Plan — [Nom du projet]

**Date :** [JJ/MM/AAAA]
**Auteur(s) :** [Noms]
**Statut :** [Brouillon / En revue / Valide]
**Version :** [1.0]
**Prochaine revue :** [Date]

---

## 1. Objectifs de performance

### 1.1 SLIs et SLOs
| Service / Endpoint | SLI | SLO | SLA | Mesure actuelle |
|-------------------|-----|-----|-----|-----------------|
| [API — GET /users] | Latence P99 | < 200ms | < 500ms | [350ms] |
| [API — POST /orders] | Latence P99 | < 500ms | < 1s | [800ms] |
| [Web — Page d'accueil] | Time to First Byte | < 100ms | N/A | [150ms] |
| [Systeme global] | Disponibilite | 99.95% | 99.9% | [99.7%] |
| [Systeme global] | Taux d'erreur | < 0.1% | < 1% | [0.3%] |

### 1.2 Error Budget
| Service | SLO | Budget d'erreur (30j) | Consomme ce mois | Restant |
|---------|-----|-----------------------|-------------------|---------|
| [API] | 99.95% | 21.6 min | [15 min] | [6.6 min] |

### 1.3 Score Apdex
| Service | Seuil T | Apdex actuel | Apdex cible |
|---------|---------|-------------|-------------|
| [API] | [200ms] | [0.85] | [0.95] |
| [Web] | [1s] | [0.90] | [0.95] |

---

## 2. Capacite actuelle

### 2.1 Profil de charge actuel
| Metrique | Moyenne | Pic journalier | Pic hebdomadaire | Tendance |
|----------|---------|----------------|------------------|----------|
| Requetes/seconde | [X] | [Y] | [Z] | [+X%/mois] |
| Utilisateurs concurrents | [X] | [Y] | [Z] | [+X%/mois] |
| Volume donnees/jour | [X GB] | [Y GB] | [Z GB] | [+X%/mois] |

### 2.2 Utilisation des ressources (USE Method)
| Ressource | Utilisation moy. | Utilisation pic | Saturation | Erreurs |
|-----------|-----------------|-----------------|------------|---------|
| CPU (App servers) | [40%] | [75%] | [Pas de queue] | [0] |
| Memoire (App servers) | [60%] | [80%] | [Pas de swap] | [0] |
| CPU (Database) | [30%] | [85%] | [Queries en queue] | [Timeouts] |
| Connexions DB | [50/100] | [95/100] | [Pool sature au pic] | [Connection refused] |
| Disque I/O | [20%] | [60%] | [Pas de queue] | [0] |

### 2.3 Goulots d'etranglement identifies
| # | Composant | Symptome | Impact | Cause probable |
|---|-----------|----------|--------|---------------|
| 1 | [Database] | [Queries lentes au pic] | [P99 x3] | [Index manquant, pool trop petit] |
| 2 | [API externe] | [Timeout intermittent] | [Erreurs 5xx] | [Rate limit atteint] |

---

## 3. Projections de charge

### 3.1 Hypotheses de croissance
| Scenario | Croissance utilisateurs | Croissance trafic | Horizon |
|----------|------------------------|-------------------|---------|
| Conservateur | [+X%/mois] | [+Y%/mois] | 12 mois |
| Optimiste | [+X%/mois] | [+Y%/mois] | 12 mois |
| Agressif (viral) | [+X%/mois] | [+Y%/mois] | 12 mois |

### 3.2 Projections detaillees
| Metrique | Actuel | +3 mois | +6 mois | +12 mois |
|----------|--------|---------|---------|----------|
| Requetes/seconde (pic) | [X] | [Y] | [Z] | [W] |
| Utilisateurs concurrents (pic) | [X] | [Y] | [Z] | [W] |
| Taille base de donnees | [X GB] | [Y GB] | [Z GB] | [W GB] |
| Bande passante (pic) | [X Gbps] | [Y Gbps] | [Z Gbps] | [W Gbps] |

### 3.3 Evenements de charge exceptionnels
| Evenement | Date estimee | Multiplicateur de charge | Duree | Preparation necessaire |
|-----------|-------------|-------------------------|-------|----------------------|
| [Campagne marketing] | [Date] | [x3] | [48h] | [Pre-scaling, cache warm-up] |
| [Saisonnalite] | [Periode] | [x2] | [2 semaines] | [Capacity planning] |

---

## 4. Strategie de scalabilite

### 4.1 Scalabilite horizontale
| Composant | Scalable horizontalement | Contraintes | Actions necessaires |
|-----------|-------------------------|------------|-------------------|
| [App servers] | Oui | [Stateless requis] | [Migrer sessions vers Redis] |
| [Database] | Partiel | [Read replicas OK, write = single master] | [Implementer CQRS] |
| [Cache] | Oui | [Cluster Redis] | [Deja en place] |

### 4.2 Scalabilite verticale
| Composant | Instance actuelle | Instance cible | Gain attendu | Cout additionnel |
|-----------|------------------|---------------|-------------|-----------------|
| [Database] | [db.r5.xlarge] | [db.r5.2xlarge] | [+100% CPU, +100% RAM] | [+$X/mois] |

### 4.3 Strategie de cache
| Couche | Technologie | TTL | Hit rate actuel | Hit rate cible | Donnees cachees |
|--------|-----------|-----|----------------|---------------|----------------|
| [CDN] | [CloudFront] | [24h] | [85%] | [95%] | [Assets, images] |
| [Application] | [Redis] | [5min] | [70%] | [90%] | [Sessions, API responses] |
| [Database] | [Query cache] | [1min] | [N/A] | [60%] | [Requetes frequentes] |

### 4.4 Optimisations identifiees
| # | Optimisation | Composant | Impact attendu | Effort | Priorite |
|---|-------------|-----------|---------------|--------|----------|
| 1 | [Ajouter index sur X] | [Database] | [P99 -60%] | [S] | [P0] |
| 2 | [Implementer cache API] | [Application] | [Throughput +200%] | [M] | [P0] |
| 3 | [Connection pooling] | [Database] | [Eliminer connection refused] | [S] | [P1] |
| 4 | [CDN pour API responses] | [CDN] | [Latence -40% pour GET] | [M] | [P1] |

---

## 5. Monitoring

### 5.1 Dashboards
| Dashboard | Metriques cles | Outil | Audience |
|-----------|---------------|-------|---------|
| [Service Overview] | [RPS, latence P99, taux erreur, Apdex] | [Grafana] | [Toute l'equipe] |
| [Database Health] | [CPU, connexions, slow queries, replication lag] | [Grafana] | [Backend + SRE] |
| [Infrastructure] | [CPU, RAM, disque, reseau par instance] | [CloudWatch] | [SRE] |
| [Business Impact] | [Conversions, temps de chargement pages, abandons] | [Datadog] | [Product + Engineering] |

### 5.2 Alertes
| Alerte | Condition | Severite | Notification | Action |
|--------|----------|----------|-------------|--------|
| [Latence P99 elevee] | [P99 > SLO pendant 5min] | [Warning] | [Slack #alerts] | [Investiguer le goulot] |
| [Error rate eleve] | [> 1% pendant 2min] | [Critical] | [PagerDuty] | [Incident response] |
| [CPU sature] | [> 90% pendant 10min] | [Warning] | [Slack #infra] | [Auto-scaling ou scale manual] |
| [Error budget < 20%] | [Budget restant < 20%] | [Critical] | [Email engineering leads] | [Gel des deploiements features] |

---

## 6. Tests de charge

### 6.1 Plan de tests
| Type de test | Objectif | Charge | Duree | Frequence |
|-------------|---------|--------|-------|-----------|
| Smoke test | Verification post-deploy | [10% charge normale] | [5 min] | [A chaque deploy] |
| Load test | Valider la capacite nominale | [Charge pic prevue] | [30 min] | [Hebdomadaire] |
| Stress test | Trouver le point de rupture | [Incremental jusqu'a failure] | [1h] | [Mensuel] |
| Soak test | Detecter les fuites | [Charge normale] | [12-24h] | [Mensuel] |
| Spike test | Valider la reaction aux pics | [x5 charge normale en burst] | [15 min] | [Avant evenements] |

### 6.2 Scenarios de test
| Scenario | Endpoints | Ratio | Think time | Donnees |
|----------|----------|-------|-----------|---------|
| [Parcours consultation] | [GET /products, GET /products/{id}] | [70%] | [2-5s] | [Pool de 10K products] |
| [Parcours achat] | [POST /cart, POST /orders] | [20%] | [5-10s] | [Users + products] |
| [Parcours admin] | [GET /admin/dashboard] | [10%] | [10-30s] | [Admin users] |

### 6.3 Outils et environnement
- **Outil** : [k6 / Gatling / Locust]
- **Environnement** : [Staging identique a la prod / Prod avec feature flags]
- **Donnees** : [Anonymisees depuis la prod / Generees]
- **Resultats** : [Stockes dans InfluxDB + dashboards Grafana]

---

## 7. Plan de capacite

### 7.1 Roadmap infrastructure
| Echeance | Action | Declencheur | Cout estime | Responsable |
|----------|--------|-----------|-------------|-------------|
| [+1 mois] | [Ajouter read replica] | [CPU DB > 70% au pic] | [$X/mois] | [SRE] |
| [+3 mois] | [Migrer vers instances plus grandes] | [Projection charge] | [$X/mois] | [SRE] |
| [+6 mois] | [Implementer auto-scaling] | [Pics imprevisibles] | [$X setup + variable] | [SRE + Backend] |

### 7.2 Cadence de revue
| Activite | Frequence | Participants | Output |
|----------|-----------|-------------|--------|
| Revue metriques performance | Hebdomadaire | SRE + Tech Lead | Dashboard review |
| Revue capacite | Mensuelle | SRE + Engineering Manager | Capacity forecast update |
| Tests de charge complets | Mensuelle | SRE + QA | Test report |
| Revue Performance Plan | Trimestrielle | SRE + Product + Engineering | Document update |

---

## Annexes

### A. Baseline actuelle detaillee
[Metriques detaillees de chaque composant]

### B. Resultats des derniers tests de charge
[Rapports complets avec graphiques]

### C. Architecture cible
[Diagramme de l'architecture cible pour la charge projetee]

### D. Estimation des couts
[Detail des couts infrastructure actuels et projetes]
```
