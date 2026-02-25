# Template — Data Specification

## Instructions de rendu

1. **Format :** Le document final doit etre genere en Markdown (.md) propre avec des tableaux bien alignes.
2. **Diagramme :** Inclure au minimum un diagramme ER en syntaxe Mermaid (copiable dans un outil de rendu).
3. **Completude :** Chaque entite doit avoir tous ses attributs, types, contraintes et classification RGPD.
4. **Coherence :** Les conventions definies en section 1 doivent etre respectees partout dans le document.
5. **Livrables :** A la fin de la conversation, genere le document .md complet en un seul bloc de code copiable.
6. **Verification :** Avant de generer le document final, fais un recapitulatif du modele et demande validation a l'utilisateur.
7. **Iteration :** Propose une revue critique du modele avant de le considerer comme termine.

---

## Template du document final

```markdown
# Data Specification — [Nom du projet]

**Date :** [JJ/MM/AAAA]
**Auteur(s) :** [Noms]
**Statut :** [Brouillon / En revue / Valide]
**Version :** [1.0]

---

## 1. Vue d'ensemble

### 1.1 Description du domaine
[Description du domaine metier et des processus principaux]

### 1.2 Bounded Contexts
[Identification des sous-domaines et de leurs frontieres]

| Bounded Context | Description | Entites principales |
|----------------|-------------|-------------------|
| [Contexte 1] | [Description] | [Entite A, Entite B] |
| [Contexte 2] | [Description] | [Entite C, Entite D] |

### 1.3 Conventions
| Element | Convention | Exemple |
|---------|-----------|---------|
| Noms de tables | snake_case, pluriel | `user_profiles` |
| Noms de colonnes | snake_case | `created_at` |
| Cles primaires | UUID v4 | `id` |
| Timestamps | UTC, ISO 8601 | `2024-01-15T10:30:00Z` |
| Soft delete | Champ `deleted_at` nullable | `deleted_at` |

---

## 2. Entites

### 2.1 [Entite 1 — Nom]

**Description :** [Description metier de l'entite]
**Type DDD :** Entity / Aggregate Root / Value Object
**Bounded Context :** [Contexte]

| Attribut | Type | Nullable | Unique | Description | Exemple |
|----------|------|----------|--------|-------------|---------|
| `id` | UUID | Non | Oui | Identifiant unique | `550e8400-...` |
| `name` | VARCHAR(255) | Non | Non | Nom de l'entite | `"John Doe"` |
| `email` | VARCHAR(320) | Non | Oui | Adresse email | `"john@example.com"` |
| `status` | ENUM | Non | Non | Statut courant | `active` |
| `created_at` | TIMESTAMP | Non | Non | Date de creation | `2024-01-15T10:30:00Z` |
| `updated_at` | TIMESTAMP | Non | Non | Date de derniere modification | `2024-01-15T10:30:00Z` |
| `deleted_at` | TIMESTAMP | Oui | Non | Date de suppression logique | `null` |

**Regles de validation :**
- `email` : format email valide, unique dans le systeme
- `status` : valeurs possibles `active`, `inactive`, `suspended`
- Transition de statut : `active` -> `inactive` | `suspended`, `suspended` -> `active`

**Classification RGPD :**
| Attribut | Classification | Retention | Droit a l'oubli |
|----------|---------------|-----------|-----------------|
| `name` | Donnee personnelle | Duree du compte + 30 jours | Anonymisation |
| `email` | Donnee personnelle | Duree du compte + 30 jours | Suppression |

### 2.2 [Entite 2 — Nom]
[Meme structure]

---

## 3. Relations

### 3.1 Diagramme entite-relation
```
[Diagramme ER en ASCII ou description pour outil comme Mermaid, dbdiagram.io]

Exemple en syntaxe Mermaid :
erDiagram
    USER ||--o{ ORDER : "passe"
    ORDER ||--|{ ORDER_LINE : "contient"
    PRODUCT ||--o{ ORDER_LINE : "reference"
```

### 3.2 Detail des relations
| Entite A | Relation | Entite B | Cardinalite | Obligatoire | Description |
|----------|----------|----------|-------------|-------------|-------------|
| User | passe | Order | 1-N | Non | Un utilisateur peut passer 0 ou plusieurs commandes |
| Order | contient | OrderLine | 1-N | Oui | Une commande contient au moins une ligne |
| Product | reference | OrderLine | 1-N | Non | Un produit peut apparaitre dans plusieurs lignes |

---

## 4. Indexation

### 4.1 Index principaux
| Table | Index | Colonnes | Type | Justification |
|-------|-------|----------|------|---------------|
| `users` | `idx_users_email` | `email` | UNIQUE | Recherche par email (login) |
| `orders` | `idx_orders_user_id` | `user_id` | B-TREE | Lister les commandes d'un user |
| `orders` | `idx_orders_status_created` | `status, created_at` | B-TREE | Filtrer par statut + tri chronologique |

### 4.2 Strategie de partitionnement (si applicable)
[Description de la strategie de sharding/partitionnement]

| Table | Cle de partition | Strategie | Justification |
|-------|-----------------|-----------|---------------|
| [Table] | [Colonne] | [Range/Hash/List] | [Raison] |

---

## 5. Regles de validation

### 5.1 Contraintes d'integrite
| Regle | Tables | Description | Implementation |
|-------|--------|-------------|----------------|
| [Regle 1] | [Tables] | [Description] | CHECK / TRIGGER / Application |
| [Regle 2] | [Tables] | [Description] | CHECK / TRIGGER / Application |

### 5.2 Invariants metier
| Invariant | Description | Verification |
|-----------|-------------|-------------|
| [Invariant 1] | [Description metier] | [Comment c'est verifie] |
| [Invariant 2] | [Description metier] | [Comment c'est verifie] |

---

## 6. Migration

### 6.1 Strategie de migration
[Description de l'approche : expand-contract, blue-green, migrations sequentielles...]

### 6.2 Plan de migration
| Phase | Description | Rollback possible | Downtime |
|-------|-------------|-------------------|----------|
| Phase 1 | [Description] | Oui/Non | [Duree] |
| Phase 2 | [Description] | Oui/Non | [Duree] |

### 6.3 Schema Evolution Rules
- Ajout de colonnes : toujours nullable ou avec valeur par defaut
- Suppression de colonnes : deprecation pendant [X] sprints puis suppression
- Renommage : nouvelle colonne + migration + suppression ancienne

---

## 7. Politique de retention

### 7.1 Classification des donnees
| Categorie | Description | Exemples | Retention |
|-----------|-------------|----------|-----------|
| Donnees personnelles | Identifiant direct/indirect | Nom, email, IP | Duree du compte + 30j |
| Donnees sensibles | Categories speciales RGPD | Sante, biometrie | Strictement necessaire |
| Donnees operationnelles | Logs, metriques | Access logs | 90 jours |
| Donnees analytiques | Donnees anonymisees | Stats agregees | Illimitee |

### 7.2 Procedures de suppression
| Type | Methode | Delai | Verification |
|------|---------|-------|-------------|
| Droit a l'oubli | Anonymisation / Hard delete | 30 jours | Audit log |
| Expiration | Job batch automatise | [Frequence] | Monitoring |

---

## Annexes

### A. Glossaire metier
[Ubiquitous Language : termes metier et leurs definitions precises]

### B. Scripts de migration
[Liens vers les scripts ou exemples]

### C. Requetes frequentes
[Top 5-10 queries les plus utilisees avec leur plan d'execution attendu]
```
