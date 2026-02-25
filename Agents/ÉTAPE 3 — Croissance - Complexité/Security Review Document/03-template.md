# Template — Security Review Document

## Instructions de rendu

1. **Format :** Le document final doit etre genere en Markdown (.md) avec des tableaux bien structures.
2. **Exhaustivite :** Chaque surface d'attaque doit etre documentee avec ses menaces et controles associes.
3. **Priorisation :** Les recommandations doivent etre classees par criticite avec des echeances realistes.
4. **Conformite :** Les exigences reglementaires applicables doivent etre explicitement couvertes.
5. **Livrables :** A la fin de la conversation, genere le document .md complet en un seul bloc de code copiable.
6. **Verification :** Avant de generer le document final, fais un recapitulatif de la matrice des menaces et demande validation.
7. **Sensibilite :** Rappelle a l'utilisateur de ne PAS inclure de vrais secrets, mots de passe ou donnees sensibles dans le document.

---

## Template du document final

```markdown
# Security Review Document — [Nom du projet]

**Date :** [JJ/MM/AAAA]
**Auteur(s) :** [Noms]
**Statut :** [Brouillon / En revue / Valide]
**Version :** [1.0]
**Prochaine revue :** [Date]

---

## 1. Perimetre

### 1.1 Description du systeme
[Description de l'architecture, des composants et des flux de donnees]

### 1.2 Diagramme d'architecture
[Diagramme montrant les composants, les flux de donnees et les frontieres de confiance]

### 1.3 Surface d'attaque
| Point d'entree | Type | Exposition | Protections actuelles |
|----------------|------|------------|----------------------|
| [API publique] | REST API | Internet | [WAF, rate limiting] |
| [Interface admin] | Web UI | Reseau interne | [VPN, MFA] |
| [Webhook endpoint] | HTTP callback | Internet | [Signature verification] |

---

## 2. Classification des donnees

### 2.1 Inventaire des donnees
| Type de donnee | Classification | Stockage | Chiffrement repos | Chiffrement transit | Retention |
|---------------|---------------|----------|-------------------|--------------------|-----------|
| [Credentials] | Restreint | [Vault] | AES-256 | TLS 1.3 | Rotation 90j |
| [Donnees personnelles] | Confidentiel | [PostgreSQL] | AES-256 | TLS 1.2+ | Duree du compte |
| [Logs applicatifs] | Interne | [Elasticsearch] | Non | TLS 1.2+ | 90 jours |

### 2.2 Flux de donnees sensibles
[Diagramme des flux de donnees sensibles avec les points de chiffrement/dechiffrement]

---

## 3. Analyse des menaces (STRIDE)

### 3.1 Matrice des menaces
| ID | Categorie STRIDE | Menace | Composant cible | Vraisemblance | Impact | Risque | Statut |
|----|-----------------|--------|-----------------|---------------|--------|--------|--------|
| T1 | Spoofing | Usurpation de session utilisateur | Auth service | Moyen | Eleve | Eleve | Ouvert |
| T2 | Tampering | Modification de donnees en transit | API Gateway | Faible | Eleve | Moyen | Mitige |
| T3 | Information Disclosure | Fuite de PII via les logs | Log service | Moyen | Eleve | Eleve | Ouvert |
| T4 | Elevation of Privilege | IDOR sur les endpoints | API | Moyen | Critique | Critique | Ouvert |

### 3.2 Detail des menaces critiques

#### T1 — [Titre de la menace]
- **Description :** [Description detaillee du scenario d'attaque]
- **Vecteur d'attaque :** [Comment l'attaquant exploite la vulnerabilite]
- **Impact :** [Consequences en cas d'exploitation reussie]
- **Controles existants :** [Mesures deja en place]
- **Gap :** [Ce qui manque]
- **Recommandation :** [Mesure a implementer]
- **Priorite :** [P0 / P1 / P2 / P3]
- **Effort :** [S / M / L / XL]

---

## 4. Authentification

### 4.1 Mecanismes d'authentification
| Contexte | Methode | MFA | Session duration | Details |
|----------|---------|-----|-----------------|---------|
| Utilisateurs web | [OAuth2 + JWT] | [Oui, TOTP] | [1h access, 7j refresh] | [Details] |
| API partenaires | [API Key + HMAC] | [N/A] | [N/A] | [Details] |
| Services internes | [mTLS] | [N/A] | [N/A] | [Details] |

### 4.2 Politique de mots de passe
[Details de la politique : longueur, complexite, hash algorithm, rotation]

### 4.3 Gestion des sessions
[Details : creation, renouvellement, revocation, stockage]

---

## 5. Autorisation

### 5.1 Modele de permissions
[RBAC / ABAC / ACL — description du modele]

### 5.2 Matrice des roles
| Role | Permissions | Perimetre |
|------|-----------|-----------|
| [Admin] | [CRUD all] | [Global] |
| [User] | [Read own, Update own] | [Own resources] |
| [API Partner] | [Read limited] | [Contracted scope] |

### 5.3 Principe du moindre privilege
[Comment le moindre privilege est applique et verifie]

---

## 6. Chiffrement

### 6.1 Chiffrement au repos
| Donnee | Algorithme | Gestion des cles | Rotation |
|--------|-----------|------------------|----------|
| [Base de donnees] | [AES-256-GCM] | [AWS KMS] | [Annuelle] |
| [Fichiers] | [AES-256] | [HashiCorp Vault] | [Trimestrielle] |

### 6.2 Chiffrement en transit
| Flux | Protocole | Version min | Certificat | Renouvellement |
|------|-----------|------------|-----------|----------------|
| [Client -> API] | [TLS] | [1.2] | [Let's Encrypt] | [Automatique, 90j] |
| [Service -> Service] | [mTLS] | [1.3] | [CA interne] | [Annuel] |

### 6.3 Gestion des secrets
[Outil utilise, politique de rotation, acces]

---

## 7. Audit et Logging

### 7.1 Evenements traces
| Evenement | Niveau | Donnees capturees | Retention | Alerte |
|-----------|--------|------------------|-----------|--------|
| Connexion reussie | INFO | user_id, IP, timestamp | 1 an | Non |
| Echec d'authentification | WARN | IP, timestamp, motif | 1 an | > 5 en 5min |
| Modification de permissions | CRITICAL | actor, target, old/new | 2 ans | Immediate |
| Acces donnees sensibles | INFO | user_id, resource, timestamp | 2 ans | Non |

### 7.2 Protection des logs
[Comment les logs sont proteges contre la modification et les acces non autorises]

### 7.3 Monitoring et alertes
[Outils, seuils d'alerte, escalation]

---

## 8. Reponse aux incidents

### 8.1 Classification des incidents
| Severite | Description | Temps de reponse | Notification |
|----------|-------------|-----------------|-------------|
| SEV1 - Critique | Breche de donnees confirmee | < 15 min | CISO + Direction |
| SEV2 - Eleve | Tentative d'intrusion detectee | < 1h | Equipe securite |
| SEV3 - Moyen | Vulnerabilite identifiee | < 24h | Lead technique |
| SEV4 - Faible | Anomalie de configuration | < 1 semaine | Equipe concernee |

### 8.2 Procedure de reponse
1. **Detection :** [Comment les incidents sont detectes]
2. **Triage :** [Comment la severite est evaluee]
3. **Containment :** [Comment limiter l'impact immediatement]
4. **Eradication :** [Comment eliminer la cause]
5. **Recovery :** [Comment restaurer le service]
6. **Post-mortem :** [Comment tirer les lecons]

### 8.3 Contacts d'urgence
| Role | Nom | Contact | Disponibilite |
|------|-----|---------|--------------|
| [CISO] | [Nom] | [Email/Tel] | [24/7] |
| [Security Lead] | [Nom] | [Email/Tel] | [Heures ouvrables] |

---

## 9. Conformite

### 9.1 Exigences applicables
| Regulation/Standard | Applicable | Statut | Prochaine audit |
|---------------------|-----------|--------|----------------|
| RGPD | Oui/Non | [Conforme / Partiellement / Non conforme] | [Date] |
| PCI-DSS | Oui/Non | [Conforme / Partiellement / Non conforme] | [Date] |
| SOC 2 | Oui/Non | [Conforme / Partiellement / Non conforme] | [Date] |
| ISO 27001 | Oui/Non | [Conforme / Partiellement / Non conforme] | [Date] |

### 9.2 Gaps de conformite
| Exigence | Gap identifie | Remediation | Echeance |
|----------|--------------|-------------|----------|
| [Exigence 1] | [Gap] | [Action] | [Date] |

---

## 10. Plan d'action

### 10.1 Recommandations priorisees
| # | Recommandation | Menace(s) | Priorite | Effort | Responsable | Echeance | Statut |
|---|---------------|-----------|----------|--------|-------------|----------|--------|
| 1 | [Action] | [T1, T4] | P0 | M | [Equipe] | [Date] | [A faire] |
| 2 | [Action] | [T3] | P1 | L | [Equipe] | [Date] | [A faire] |

### 10.2 Cadence de revue
- Revue complete : [Tous les X mois]
- Revue des metriques : [Mensuelle]
- Test d'intrusion : [Annuel]
- Exercice de reponse aux incidents : [Semestriel]

---

## Annexes

### A. Resultats de scan de vulnerabilites
[Derniers resultats et dates]

### B. Diagrammes detailles
[Diagrammes de flux, diagrammes de deploiement]

### C. References
[Liens vers les frameworks et standards cites]
```
