# Frameworks et pieges — API Specification

## Frameworks de reference

### OpenAPI / Swagger (v3.1)
- Standard de facto pour decrire les APIs REST
- Schema-driven development : le schema EST la documentation
- Code generation possible a partir de la spec
- Validation automatique des requetes et reponses

### Google API Design Guide
- Nommage oriente ressources (noms, pas verbes)
- Methodes standard : List, Get, Create, Update, Delete
- Methodes custom pour les operations qui ne rentrent pas dans le CRUD
- Pagination, filtrage et tri standardises
- Long-running operations pour les taches asynchrones

### Stripe API Design Principles
- Coherence obsessionnelle : memes patterns partout
- Versionning par date (2024-01-15) plutot que par numero
- Expandable objects pour controler la profondeur de reponse
- Idempotency keys pour les operations non-idempotentes
- Pagination cursor-based plutot qu'offset-based

### Zalando RESTful API Guidelines
- Nommage en kebab-case pour les URLs
- snake_case pour les champs JSON
- Probleme standardise avec RFC 7807 (Problem Details)
- Pagination obligatoire pour les collections
- Deprecation headers standards

### GraphQL (Meta)
- Schema fortement type
- Le client demande exactement ce qu'il veut
- Introspection native
- Subscriptions pour le temps reel
- Quand privilegier GraphQL vs REST

### JSON:API Specification
- Format de reponse standardise
- Relations entre ressources (includes)
- Sparse fieldsets
- Pagination, tri et filtrage standardises

### API-First Design
- La spec est ecrite AVANT le code
- Contract testing (Pact, Dredd)
- Mock servers a partir de la spec
- Collaboration design-time entre equipes

---

## Pieges courants et comment les eviter

### Piege 1 — Les URLs basees sur des verbes
**Probleme :** `/getUsers`, `/createOrder`, `/deleteProduct`
**Solution :** Utiliser des noms de ressources : `GET /users`, `POST /orders`, `DELETE /products/{id}`. Le verbe HTTP porte la semantique de l'action.

### Piege 2 — L'absence de pagination
**Probleme :** Retourner tous les resultats d'un coup. Ca marche avec 10 items, ca explose avec 10 000.
**Solution :** Toujours paginer les collections. Privilegier la pagination cursor-based pour les grandes collections.

### Piege 3 — Les codes HTTP generiques
**Probleme :** Tout retourner en 200 avec un champ `success: false` dans le body.
**Solution :** Utiliser les codes HTTP semantiquement corrects : 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests.

### Piege 4 — Le versioning improvise
**Probleme :** Pas de strategie de versioning = breaking changes inevitables.
**Solution :** Decider de la strategie des le jour 1. Documenter ce qui constitue un breaking change. Planifier la coexistence de versions.

### Piege 5 — Ignorer l'idempotence
**Probleme :** Un POST execute deux fois cree deux ressources.
**Solution :** Implementer les idempotency keys (comme Stripe) pour les operations non-idempotentes.

### Piege 6 — La sur-specification ou la sous-specification
**Probleme :** Trop de details tue la lisibilite. Pas assez laisse place a l'interpretation.
**Solution :** Specifier : les contrats (schemas), les comportements (codes d'erreur), les limites (rate limiting). Ne pas specifier : l'implementation interne.

### Piege 7 — Exposer le modele de donnees interne
**Probleme :** L'API reflete exactement la structure de la base de donnees.
**Solution :** L'API expose un modele de domaine, pas un modele de persistance. Les deux doivent pouvoir evoluer independamment.

### Piege 8 — Oublier les cas d'erreur
**Probleme :** Seul le happy path est documente.
**Solution :** Pour chaque endpoint, lister systematiquement tous les codes d'erreur possibles avec des exemples de payloads.

### Piege 9 — Le nommage incoherent
**Probleme :** `user_id` ici, `userId` la, `userID` ailleurs.
**Solution :** Choisir UNE convention et s'y tenir religieusement. Documenter la convention dans les guidelines.

---

## Criteres de qualite du document final

1. **Coherence** : Memes conventions de nommage, format de reponse et gestion d'erreur partout.
2. **Completude** : Chaque endpoint a ses parametres, schemas de requete/reponse et codes d'erreur documentes.
3. **Clarte** : Un developpeur peut implementer un endpoint en lisant uniquement la spec.
4. **Exemples** : Chaque endpoint a au moins un exemple de requete et de reponse (happy path + erreur).
5. **Securite** : L'authentification, l'autorisation et le rate limiting sont documentes.
6. **Evolutivite** : La strategie de versioning et de deprecation est definie.
7. **Standards** : Le document est compatible avec OpenAPI 3.x ou peut y etre converti.
8. **Testabilite** : La spec est suffisamment precise pour ecrire des tests automatises.
9. **DX (Developer Experience)** : L'API est intuitive, previsible et bien documentee.
10. **Operabilite** : Les aspects monitoring, logging et SLA sont mentionnes.
