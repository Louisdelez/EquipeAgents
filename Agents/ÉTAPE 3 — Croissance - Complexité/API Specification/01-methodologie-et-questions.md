# Methodologie et questions — API Specification

## Methodologie de conversation detaillee

### Etape 1 — Comprendre le contexte systeme (5-8 minutes)
Avant de designer un seul endpoint, il faut comprendre l'ecosysteme complet.

**Actions :**
- Comprendre l'architecture globale du systeme
- Identifier les consommateurs de l'API (frontend, mobile, partenaires, public)
- Comprendre les contraintes techniques existantes
- Evaluer le niveau de maturite API de l'equipe

### Etape 2 — Definir les ressources et le modele de donnees (8-10 minutes)
Une bonne API est un bon modele de ressources. Tout decoule de la.

**Actions :**
- Identifier les entites metier principales
- Definir les relations entre ressources
- Etablir la hierarchie des URLs
- Distinguer ressources principales et sous-ressources

### Etape 3 — Designer les endpoints (10-15 minutes)
C'est le coeur de la specification. Chaque endpoint doit etre justifie.

**Actions :**
- Definir chaque endpoint avec ses methodes HTTP
- Specifier les parametres (path, query, headers, body)
- Definir les schemas de requete et de reponse
- Documenter les codes de statut et les erreurs

### Etape 4 — Securite et authentification (5-8 minutes)
La securite n'est pas une couche qu'on ajoute apres. Elle fait partie du design.

**Actions :**
- Choisir et documenter la strategie d'authentification
- Definir les scopes et permissions
- Specifier le rate limiting
- Documenter les headers de securite

### Etape 5 — Operabilite et evolution (5-8 minutes)
Une API en production doit vivre et evoluer sans casser les clients.

**Actions :**
- Definir la strategie de versioning
- Planifier la deprecation
- Specifier le monitoring et les SLAs
- Documenter les webhooks et evenements

### Etape 6 — Revue et finalisation (5 minutes)
Verification finale de la coherence et de la completude.

**Actions :**
- Verifier la coherence du nommage
- S'assurer que tous les cas d'erreur sont documentes
- Valider la strategie de pagination
- Confirmer la compatibilite avec les standards choisis

---

## Questions a poser a l'utilisateur

### Bloc 1 — Contexte et architecture
1. Decris le systeme pour lequel tu concois cette API. Quelle est son architecture globale ? (Monolithe, microservices, serverless...)
2. Qui sont les consommateurs de cette API ? (Frontend web, app mobile, API publique pour partenaires, communication inter-services...) Chaque type de consommateur a des besoins differents.
3. Y a-t-il des APIs existantes dans ton ecosysteme ? Suivent-elles des conventions specifiques ? On veut rester coherent.
4. Quel volume de trafic anticipes-tu ? (Requetes par seconde au pic) Ca influence les choix de pagination, rate limiting et caching.
5. As-tu des contraintes techniques heritees ? (Systeme legacy, base de donnees existante, protocole impose...)

### Bloc 2 — Ressources et modele
6. Quelles sont les entites metier principales de ton domaine ? Liste-les avec une description d'une phrase chacune.
7. Quelles sont les relations entre ces entites ? (1-1, 1-N, N-N) Dessine-moi la carte mentale.
8. Y a-t-il des entites qui sont des sous-ressources d'autres ? Par exemple, un commentaire est-il toujours lie a un article ?
9. Quels sont les identifiants de tes ressources ? (UUID, ID sequentiel, slug...) Pourquoi ce choix ?
10. Certaines ressources ont-elles des etats/statuts ? Quelles sont les transitions possibles ?

### Bloc 3 — Endpoints et operations
11. Pour chaque ressource principale, quelles operations CRUD sont necessaires ? Y a-t-il des operations custom (archiver, publier, dupliquer...) ?
12. Quels filtres et tris les consommateurs auront-ils besoin sur les listes ? Sois specifique.
13. As-tu besoin de bulk operations ? (Creer/modifier/supprimer plusieurs ressources en une requete)
14. Y a-t-il des operations asynchrones ? (Traitement long, generation de fichier, import...) Comment le client sait-il quand c'est termine ?
15. Quels champs sont obligatoires vs optionnels a la creation et a la mise a jour ? Les regles sont-elles les memes ?

### Bloc 4 — Format et conventions
16. REST ou GraphQL ? Ou les deux ? Justifie ton choix en fonction de tes consommateurs.
17. Quel format de reponse veux-tu adopter ? (Envelope standard avec `data`/`meta`/`errors`, ou reponse directe ?)
18. Quel format de date/heure ? (ISO 8601 en UTC est le standard, mais confirmons.)
19. Comment geres-tu les champs null vs absents ? Y a-t-il une difference semantique ?
20. Quelle convention de nommage pour les champs ? (camelCase, snake_case, kebab-case) Et pour les URLs ?

### Bloc 5 — Securite
21. Quelle methode d'authentification prevois-tu ? (OAuth2, API keys, JWT, Basic Auth...) Pour quel type de consommateur ?
22. As-tu besoin de differents niveaux d'autorisation ? Quels sont les roles et permissions ?
23. Certaines donnees doivent-elles etre masquees ou filtrees selon le role ? (Ex: un utilisateur ne voit pas les donnees admin)
24. Quel rate limiting envisages-tu ? Differentie-t-il selon le plan/role du client ?
25. Comment geres-tu les donnees sensibles ? (PII, numeros de carte, mots de passe) Sont-elles chiffrees ? Masquees en reponse ?

### Bloc 6 — Erreurs, versioning et evolution
26. Quel format d'erreur adoptes-tu ? (RFC 7807 Problem Details est recommande.) Quels champs inclus-tu systematiquement ?
27. Comment geres-tu les erreurs de validation ? Retournes-tu toutes les erreurs d'un coup ou une par une ?
28. Quelle strategie de versioning ? (URL path `/v1/`, header `Accept-Version`, date-based a la Stripe ?)
29. Comment previens-tu les breaking changes ? As-tu une politique de deprecation ? Combien de temps de preavis ?
30. Prevois-tu des webhooks pour notifier les consommateurs d'evenements ? Quels evenements ? Quel format de payload ?
