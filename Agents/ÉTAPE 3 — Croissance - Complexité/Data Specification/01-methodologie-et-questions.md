# Methodologie et questions — Data Specification

## Methodologie de conversation detaillee

### Etape 1 — Comprendre le domaine metier (8-10 minutes)
Avant de modeler quoi que ce soit, il faut comprendre le metier profondement. Les meilleurs modeles de donnees refletent le domaine, pas la technique.

**Actions :**
- Identifier le domaine principal et les sous-domaines
- Comprendre les processus metier cles
- Identifier les acteurs et leurs interactions avec les donnees
- Definir l'Ubiquitous Language du domaine

### Etape 2 — Identifier les entites et bounded contexts (8-10 minutes)
Mapper le domaine en entites et definir les frontieres entre sous-domaines.

**Actions :**
- Lister toutes les entites du domaine
- Distinguer entites, value objects et aggregates
- Definir les bounded contexts
- Identifier les entites partagees entre contextes

### Etape 3 — Definir les attributs et les relations (10-15 minutes)
Detailler chaque entite et ses connexions.

**Actions :**
- Definir les attributs de chaque entite (nom, type, contraintes)
- Specifier les cardinalites des relations
- Identifier les cles primaires et etrangeres
- Documenter les invariants metier

### Etape 4 — Strategie technique (5-8 minutes)
Traduire le modele logique en decisions techniques.

**Actions :**
- Choisir les strategies d'indexation
- Planifier le partitionnement si necessaire
- Definir les regles de validation
- Specifier les strategies de cache

### Etape 5 — Conformite et gouvernance (5-8 minutes)
S'assurer que le modele respecte les contraintes legales et organisationnelles.

**Actions :**
- Classifier les donnees (personnelles, sensibles, publiques)
- Definir les politiques de retention
- Planifier les mecanismes de droit a l'oubli
- Documenter les politiques d'acces

### Etape 6 — Migration et evolution (5 minutes)
Planifier comment le modele evoluera dans le temps.

**Actions :**
- Definir la strategie de migration
- Planifier le schema evolution
- Documenter les backwards compatibility rules
- Identifier les risques d'evolution

---

## Questions a poser a l'utilisateur

### Bloc 1 — Domaine et contexte
1. Decris le domaine metier de ton application en 3-5 phrases. Quels sont les processus metier principaux ?
2. Quels sont les sous-domaines distincts que tu identifies ? (Ex: gestion utilisateurs, facturation, catalogue produits, logistique...)
3. Quels sont les acteurs qui interagissent avec le systeme ? (Utilisateurs finaux, admins, systemes externes, partenaires...)
4. Y a-t-il un systeme existant que tu remplaces ou avec lequel tu dois coexister ? Quelles sont les contraintes de migration ?
5. Quelle est la volumetrie attendue ? (Nombre d'utilisateurs, de transactions par jour, taille des donnees)

### Bloc 2 — Entites et modele
6. Quelles sont les entites principales de ton domaine ? Pour chacune, donne une definition metier en une phrase.
7. Parmi ces entites, lesquelles ont une identite propre (Entities DDD) et lesquelles sont definies par leurs valeurs (Value Objects) ? Par exemple, une adresse est souvent un Value Object.
8. Quels sont les Aggregates de ton domaine ? C'est-a-dire, quels groupes d'entites doivent toujours etre coherents entre eux ?
9. Y a-t-il des entites qui existent dans plusieurs bounded contexts mais avec des significations differentes ? (Ex: "Utilisateur" dans le contexte Auth vs dans le contexte Facturation)
10. Quels sont les evenements metier cles de ton domaine ? (Ex: commande creee, paiement valide, utilisateur desactive)

### Bloc 3 — Attributs et relations
11. Pour chaque entite principale, quels sont les attributs indispensables ? Precise le type de donnee et si c'est obligatoire ou optionnel.
12. Quelles sont les relations entre tes entites ? Pour chaque relation, precise la cardinalite (1-1, 1-N, N-N) et si c'est obligatoire ou optionnel.
13. Y a-t-il des attributs qui changent rarement vs frequemment ? (Cela influence les strategies de stockage et de cache.)
14. Certains attributs ont-ils des regles de validation metier specifiques ? (Ex: un email doit etre unique, un statut ne peut passer que de "en attente" a "valide")
15. As-tu besoin de gerer l'historique des changements de certains attributs ? (Audit trail, versioning)

### Bloc 4 — Technique et performance
16. Quel(s) systeme(s) de stockage utilises-tu ou envisages-tu ? (PostgreSQL, MongoDB, DynamoDB, Elasticsearch...) Pourquoi ce choix ?
17. Quelles sont les requetes les plus frequentes et les plus critiques en termes de performance ? Decris les 5 queries les plus importantes.
18. As-tu besoin de recherche full-text sur certaines donnees ? Quels champs ?
19. Quelles sont tes contraintes de latence ? (Ex: la page produit doit charger en moins de 200ms)
20. Envisages-tu du partitionnement (sharding) ? Si oui, quelle cle de partition ?

### Bloc 5 — Conformite et securite
21. Quelles donnees sont des donnees personnelles au sens du RGPD ? Les as-tu identifiees formellement ?
22. Collectes-tu des donnees sensibles ? (Sante, biometrie, opinions politiques/religieuses...)
23. Quelle est ta politique de retention des donnees ? Combien de temps conserves-tu chaque type de donnee ?
24. Comment geres-tu le droit a l'oubli ? Peux-tu supprimer toutes les donnees d'un utilisateur specifique ?
25. Qui a acces a quelles donnees ? As-tu une matrice d'acces definie ?

### Bloc 6 — Evolution et migration
26. Quelles evolutions du modele anticipes-tu dans les 6 a 12 prochains mois ? (Nouvelles entites, nouveaux attributs, changements de cardinalite)
27. Comment geres-tu les migrations de schema ? (Migrations sequentielles, expand-contract pattern, feature flags...)
28. As-tu besoin de backward compatibility avec des clients existants pendant les migrations ?
29. Utilises-tu ou envisages-tu Event Sourcing pour certaines parties du domaine ? Pourquoi ?
30. Comment synchronises-tu les donnees entre differents systemes ou services ? (Event-driven, CDC, batch sync...)
