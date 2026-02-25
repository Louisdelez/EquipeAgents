# Template — API Specification

## Instructions de rendu

1. **Format :** Le document final doit etre genere en Markdown (.md) propre, avec des blocs de code JSON bien formates.
2. **Exemples :** Chaque endpoint DOIT avoir au moins un exemple de requete et de reponse complete.
3. **Coherence :** Verifie que les conventions definies en section 1 sont respectees dans tous les exemples.
4. **Completude :** Chaque endpoint doit documenter : description, parametres, schemas requete/reponse, codes d'erreur.
5. **Livrables :** A la fin de la conversation, genere le document .md complet en un seul bloc de code copiable.
6. **Verification :** Avant de generer le document final, fais un recapitulatif de tous les endpoints et demande validation.
7. **OpenAPI :** Si possible, propose egalement un extrait de schema OpenAPI 3.x pour les endpoints principaux.

---

## Template du document final

```markdown
# API Specification — [Nom de l'API]

**Date :** [JJ/MM/AAAA]
**Auteur(s) :** [Noms]
**Statut :** [Brouillon / En revue / Valide]
**Version :** [1.0]

---

## 1. Vue d'ensemble

### 1.1 Description
[Description de l'API, son objectif et ses consommateurs cibles]

### 1.2 Architecture
[Diagramme ou description de l'architecture : ou se situe cette API dans le systeme global]

### 1.3 Conventions
| Element | Convention | Exemple |
|---------|-----------|---------|
| URL paths | kebab-case | `/user-profiles` |
| Champs JSON | snake_case | `created_at` |
| Dates | ISO 8601 UTC | `2024-01-15T10:30:00Z` |
| IDs | UUID v4 | `550e8400-e29b-41d4-a716-446655440000` |
| Pagination | Cursor-based | `?after=cursor_abc123&limit=20` |

---

## 2. Base URL

| Environnement | URL |
|---------------|-----|
| Production | `https://api.example.com/v1` |
| Staging | `https://api.staging.example.com/v1` |
| Development | `https://api.dev.example.com/v1` |

---

## 3. Authentification

### 3.1 Methode
[Description de la methode d'authentification : OAuth2, API key, JWT...]

### 3.2 Obtenir un token
```
POST /auth/token
Content-Type: application/json

{
  "client_id": "your_client_id",
  "client_secret": "your_client_secret",
  "grant_type": "client_credentials"
}
```

### 3.3 Utiliser le token
```
GET /resources
Authorization: Bearer {access_token}
```

### 3.4 Scopes et permissions
| Scope | Description | Endpoints |
|-------|------------|-----------|
| `read:users` | Lecture des profils utilisateurs | `GET /users`, `GET /users/{id}` |
| `write:users` | Modification des profils | `POST /users`, `PUT /users/{id}` |

---

## 4. Endpoints

### 4.1 [Ressource 1] — `/resource-name`

#### GET /resource-name — Lister les ressources

**Description :** [Description de l'endpoint]

**Parametres de requete :**
| Parametre | Type | Requis | Description | Exemple |
|-----------|------|--------|-------------|---------|
| `limit` | integer | Non | Nombre max de resultats (defaut: 20, max: 100) | `50` |
| `after` | string | Non | Cursor de pagination | `cursor_abc123` |
| `filter[status]` | string | Non | Filtrer par statut | `active` |
| `sort` | string | Non | Champ de tri (prefixe `-` pour DESC) | `-created_at` |

**Reponse 200 OK :**
```json
{
  "data": [
    {
      "id": "550e8400-e29b-41d4-a716-446655440000",
      "type": "resource_name",
      "attributes": {
        "name": "Exemple",
        "status": "active",
        "created_at": "2024-01-15T10:30:00Z",
        "updated_at": "2024-01-15T10:30:00Z"
      }
    }
  ],
  "meta": {
    "total_count": 142,
    "has_more": true
  },
  "links": {
    "next": "/resource-name?after=cursor_xyz789&limit=20"
  }
}
```

**Codes d'erreur :**
| Code | Description | Body |
|------|------------|------|
| 401 | Token invalide ou expire | `{"error": {"type": "authentication_error", "message": "..."}}` |
| 403 | Scope insuffisant | `{"error": {"type": "authorization_error", "message": "..."}}` |
| 429 | Rate limit depasse | `{"error": {"type": "rate_limit_error", "message": "...", "retry_after": 30}}` |

#### POST /resource-name — Creer une ressource

[Meme structure detaillee]

#### GET /resource-name/{id} — Obtenir une ressource

[Meme structure detaillee]

#### PUT /resource-name/{id} — Mettre a jour une ressource

[Meme structure detaillee]

#### DELETE /resource-name/{id} — Supprimer une ressource

[Meme structure detaillee]

---

## 5. Format d'erreur standard

### 5.1 Structure
```json
{
  "error": {
    "type": "validation_error",
    "message": "Description lisible par un humain",
    "code": "INVALID_PARAMETER",
    "details": [
      {
        "field": "email",
        "message": "Format d'email invalide",
        "code": "INVALID_FORMAT"
      }
    ],
    "request_id": "req_abc123",
    "documentation_url": "https://docs.example.com/errors/INVALID_PARAMETER"
  }
}
```

### 5.2 Types d'erreur
| Type | Code HTTP | Description |
|------|-----------|------------|
| `authentication_error` | 401 | Token absent, invalide ou expire |
| `authorization_error` | 403 | Permissions insuffisantes |
| `not_found_error` | 404 | Ressource introuvable |
| `validation_error` | 422 | Donnees de requete invalides |
| `conflict_error` | 409 | Conflit avec l'etat actuel |
| `rate_limit_error` | 429 | Trop de requetes |
| `internal_error` | 500 | Erreur interne du serveur |

---

## 6. Rate Limiting

### 6.1 Limites
| Plan | Limite | Fenetre |
|------|--------|---------|
| Free | 100 requetes | Par minute |
| Pro | 1 000 requetes | Par minute |
| Enterprise | 10 000 requetes | Par minute |

### 6.2 Headers de reponse
```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 742
X-RateLimit-Reset: 1705312200
Retry-After: 30
```

---

## 7. Versioning

### 7.1 Strategie
[Description de la strategie : URL-based, header-based, date-based]

### 7.2 Politique de deprecation
- Annonce de deprecation : minimum [X] mois avant suppression
- Header `Deprecation` ajoute aux endpoints concernes
- Communication par email et changelog

### 7.3 Changelog
| Date | Version | Changement | Breaking |
|------|---------|-----------|----------|
| [Date] | [Version] | [Description] | Oui/Non |

---

## 8. Webhooks (si applicable)

### 8.1 Evenements disponibles
| Evenement | Description | Payload |
|-----------|------------|---------|
| `resource.created` | Nouvelle ressource creee | `{...}` |
| `resource.updated` | Ressource mise a jour | `{...}` |
| `resource.deleted` | Ressource supprimee | `{...}` |

### 8.2 Format du webhook
```json
{
  "id": "evt_abc123",
  "type": "resource.created",
  "created_at": "2024-01-15T10:30:00Z",
  "data": {
    "object": { ... }
  }
}
```

### 8.3 Verification de signature
[Description du mecanisme de signature HMAC]

---

## Annexes

### A. Glossaire
[Termes metier specifiques et leurs definitions]

### B. Schemas OpenAPI
[Lien vers le fichier openapi.yaml complet]

### C. Collection Postman / Insomnia
[Lien vers la collection importable]
```
