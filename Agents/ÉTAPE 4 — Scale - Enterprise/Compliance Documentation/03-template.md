# Template du document final -- Compliance Documentation

## Template complet

```markdown
# Compliance Documentation -- [Nom du Projet]

> **Version :** [X.Y]
> **Date :** [JJ/MM/AAAA]
> **Auteur :** [Nom]
> **Statut :** [Brouillon | En revue | Valide]
> **Prochaine revue :** [JJ/MM/AAAA]
> **Responsable compliance :** [Nom / Role]

---

## 1. Resume executif

[Resume de 5-10 lignes : perimetre du document, reglementations couvertes, niveau de conformite global, risques principaux identifies, et prochaines etapes prioritaires.]

## 2. Perimetre

### 2.1 Description du projet/produit
[Description du service, de sa proposition de valeur, et de son architecture haut niveau.]

### 2.2 Marches et juridictions
| Marche | Region | Reglementations applicables |
|--------|--------|-----------------------------|
| [Ex: France] | [UE] | [RGPD, NIS2, eIDAS...] |

### 2.3 Donnees traitees
| Type de donnee | Categorie RGPD | Sensible ? | Volume estime | Duree de retention |
|----------------|----------------|------------|---------------|-------------------|
| [Ex: Email] | [Donnee personnelle] | [Non] | [100K] | [3 ans] |

### 2.4 Flux de donnees
[Schema ou description des flux de donnees : collecte, stockage, traitement, transfert, suppression. Identifier les points de sortie hors UE/EEE.]

## 3. Reglementations applicables

### 3.1 RGPD / GDPR
- **Applicabilite :** [Pourquoi applicable / Base legale]
- **Roles :** [Responsable de traitement / Sous-traitant / Responsable conjoint]
- **DPO :** [Nomme ? Coordonnees]
- **Registre des traitements :** [Statut -- Complet / Partiel / Absent]

### 3.2 SOC2 Type II
- **Applicabilite :** [Pourquoi requis -- exigence client, choix strategique]
- **Trust Service Criteria couverts :** [Securite, Disponibilite, Confidentialite...]
- **Statut de certification :** [Non demarre / En cours / Certifie -- Date]
- **Auditeur :** [Cabinet d'audit]

### 3.3 ISO 27001
- **Applicabilite :** [Pourquoi requis]
- **Perimetre du SMSI :** [Description du perimetre certifie]
- **Statut de certification :** [Non demarre / En cours / Certifie -- Date]

### 3.4 PCI-DSS
- **Applicabilite :** [Applicable / Non applicable -- Justification]
- **Niveau de conformite requis :** [Level 1-4 / SAQ type]
- **Statut :** [Conforme / Non conforme / Non applicable]

### 3.5 [Autres reglementations]
[Ajouter selon le contexte : HIPAA, CCPA/CPRA, NIS2, DORA, AI Act, etc.]

## 4. Exigences de conformite detaillees

### 4.1 Protection des donnees personnelles

#### 4.1.1 Bases legales des traitements
| Traitement | Finalite | Base legale | Justification |
|------------|----------|-------------|---------------|
| [Ex: Analytics] | [Amelioration du service] | [Interet legitime] | [Balance des interets documentee] |

#### 4.1.2 Droits des personnes concernees
| Droit | Implemente ? | Processus | Delai de reponse | Automatise ? |
|-------|-------------|-----------|-------------------|-------------|
| Acces | [Oui/Non] | [Description] | [X jours] | [Oui/Non] |
| Rectification | | | | |
| Effacement | | | | |
| Portabilite | | | | |
| Opposition | | | | |
| Limitation | | | | |

#### 4.1.3 Consentement
[Description du mecanisme de consentement, CMP utilise, stockage des preuves de consentement.]

#### 4.1.4 Transferts internationaux
| Sous-traitant | Pays | Mecanisme de transfert | DPA signe ? | Mesures supplementaires |
|---------------|------|----------------------|-------------|------------------------|
| [Ex: AWS] | [USA] | [CCT + mesures supp.] | [Oui] | [Chiffrement cote client] |

### 4.2 Securite de l'information

#### 4.2.1 Mesures techniques
| Controle | Statut | Description | Evidence |
|----------|--------|-------------|----------|
| Chiffrement au repos | [Implemente] | [AES-256] | [Config AWS KMS] |
| Chiffrement en transit | | | |
| MFA | | | |
| Controle d'acces (RBAC) | | | |
| Journalisation | | | |
| Gestion des vulnerabilites | | | |
| Sauvegarde | | | |
| Plan de continuite | | | |

#### 4.2.2 Mesures organisationnelles
| Controle | Statut | Responsable | Frequence |
|----------|--------|-------------|-----------|
| Formation securite | | | |
| Revue des acces | | | |
| Tests d'intrusion | | | |
| Audit interne | | | |

### 4.3 Accessibilite
[Si applicable : conformite RGAA, WCAG 2.1 niveau AA, obligations legales d'accessibilite numerique.]

## 5. Audits et certifications

### 5.1 Historique des audits
| Date | Type | Auditeur | Resultat | Points de non-conformite |
|------|------|----------|----------|--------------------------|
| | | | | |

### 5.2 Certifications en cours
| Certification | Statut | Date cible | Responsable | Budget |
|---------------|--------|-----------|-------------|--------|
| | | | | |

### 5.3 Planning d'audit
[Calendrier des prochains audits internes et externes.]

## 6. Points de non-conformite identifies

| ID | Reglementation | Exigence | Gravite | Description du gap | Action corrective | Responsable | Echeance | Statut |
|----|---------------|----------|---------|-------------------|-------------------|-------------|----------|--------|
| NC-001 | | | [Critique/Majeur/Mineur] | | | | | [Ouvert/En cours/Ferme] |

## 7. Responsabilites

### 7.1 Matrice RACI
| Activite | DPO | CISO | CTO | Legal | Engineering |
|----------|-----|------|-----|-------|-------------|
| Registre des traitements | R | C | I | C | I |
| Reponse aux droits | A | I | I | C | R |
| Gestion des incidents | C | R | A | C | I |
| Audit interne | R | R | I | C | I |

### 7.2 Contacts cles
| Role | Nom | Email | Telephone |
|------|-----|-------|-----------|
| DPO | | | |
| CISO | | | |
| Responsable compliance | | | |

## 8. Plan de maintenance de la conformite

### 8.1 Cycle de revue
- **Revue trimestrielle :** [Scope et participants]
- **Revue annuelle :** [Audit complet]
- **Triggers de revue exceptionnelle :** [Nouveau traitement, incident, changement reglementaire, nouveau marche]

### 8.2 Veille reglementaire
[Processus de veille, sources, responsable, frequence de mise a jour.]

### 8.3 Formation et sensibilisation
| Formation | Public | Frequence | Obligatoire ? | Derniere session |
|-----------|--------|-----------|--------------|-----------------|
| | | | | |

## 9. Annexes

- [ ] Registre des traitements (document separe)
- [ ] Politique de securite de l'information (PSSI)
- [ ] Politique de confidentialite (privacy policy)
- [ ] Modele de DPA (Data Processing Agreement)
- [ ] Procedure de gestion des violations de donnees
- [ ] Analyse d'impact (AIPD/DPIA)
- [ ] Plan de continuite d'activite (PCA/BCP)
```

## Instructions de rendu

1. **Format :** Le document final doit etre rendu en Markdown (.md), pret a etre versionne dans un depot Git.
2. **Completude :** Ne laisse AUCUNE section vide. Si une information n'est pas disponible, indique "[A completer -- Responsable : X -- Echeance : Y]".
3. **Validation :** Avant de generer le document final, presente un resume structure de toutes les informations collectees et demande une validation explicite a l'utilisateur.
4. **Ton :** Le document doit etre redige dans un ton professionnel, precis et factuel. Evite le jargon inutile mais utilise la terminologie reglementaire exacte quand necessaire.
5. **Versioning :** Le document doit inclure un numero de version et une date. Chaque modification majeure incremente la version.
6. **Revue :** Suggere a l'utilisateur de faire relire le document par un juriste specialise en droit du numerique et un expert en cybersecurite avant validation finale.
7. **Suivi :** Propose a l'utilisateur de creer un tableau de bord de suivi des points de non-conformite dans un outil de gestion de projet (Jira, Linear, Notion).
