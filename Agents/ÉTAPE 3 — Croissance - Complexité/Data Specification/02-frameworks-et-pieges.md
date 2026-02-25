# Frameworks et pieges — Data Specification

## Frameworks de reference

### Domain-Driven Design (Eric Evans)
- **Bounded Contexts** : Chaque sous-domaine a son propre modele
- **Aggregates** : Groupes d'entites avec des invariants metier communs
- **Value Objects vs Entities** : Identite vs equivalence par valeur
- **Ubiquitous Language** : Le modele utilise le langage du metier
- **Context Mapping** : Comment les modeles interagissent entre bounded contexts

### Event Sourcing
- Stocker les evenements plutot que l'etat courant
- Reconstruction de l'etat a partir de l'historique des evenements
- Avantages : audit trail complet, temporal queries, debugging
- Challenges : complexite, taille du store, snapshots

### CQRS (Command Query Responsibility Segregation)
- Separer le modele de lecture du modele d'ecriture
- Optimiser chaque modele pour son cas d'usage
- Combinaison naturelle avec Event Sourcing
- Eventual consistency et ses implications

### Data Mesh (Zhamak Dehghani)
- **Domain Ownership** : Chaque domaine possede et gere ses donnees
- **Data as a Product** : Les donnees sont traitees comme un produit avec SLA
- **Self-Serve Data Platform** : Infrastructure partagee
- **Federated Computational Governance** : Gouvernance distribuee avec standards communs

### Master Data Management (MDM)
- Source unique de verite pour les entites de reference
- Deduplication et resolution d'identite
- Synchronisation entre systemes
- Golden record management

### RGPD / Data Classification
- **Donnees personnelles** : Tout ce qui identifie directement ou indirectement une personne
- **Donnees sensibles** : Sante, religion, orientation, biometrie, etc.
- **Droit a l'oubli** : Capacite a supprimer les donnees d'un utilisateur
- **Portabilite** : Capacite a exporter les donnees d'un utilisateur
- **Minimisation** : Ne collecter que ce qui est strictement necessaire

### Schema Evolution Patterns (Avro/Protobuf)
- **Backward compatibility** : Les anciens lecteurs lisent les nouveaux schemas
- **Forward compatibility** : Les nouveaux lecteurs lisent les anciens schemas
- **Full compatibility** : Les deux
- Strategies : ajout de champs optionnels, deprecation, migration progressive

---

## Pieges courants et comment les eviter

### Piege 1 — Modeliser la technique avant le metier
**Probleme :** Partir des tables de base de donnees au lieu de partir des concepts metier.
**Solution :** Toujours commencer par le modele logique (DDD) puis traduire en modele physique. Le vocabulaire des entites doit etre celui du metier, pas de la technique.

### Piege 2 — Sur-normaliser ou sous-normaliser
**Probleme :** Trop de normalisation = trop de jointures = mauvaise performance. Pas assez = donnees incoherentes.
**Solution :** Normaliser par defaut (3NF minimum), puis denormaliser consciemment pour la performance en documentant chaque compromis.

### Piege 3 — Ignorer les bounded contexts
**Probleme :** Un seul modele monolithique pour tout le domaine. Resultat : des entites "god objects" avec 50 attributs.
**Solution :** Decouper le domaine en bounded contexts. Chaque contexte a son propre modele optimise pour ses besoins.

### Piege 4 — Les IDs auto-increments exposes
**Probleme :** Exposer des IDs sequentiels dans les URLs revele le nombre d'enregistrements et permet l'enumeration.
**Solution :** Utiliser des UUIDs ou des identifiants opaques pour les ressources exposees. Les IDs auto-increments restent internes.

### Piege 5 — La dette technique des NULL
**Probleme :** Tout mettre en nullable "au cas ou".
**Solution :** Chaque champ nullable doit etre justifie. Un champ nullable signifie "cette information peut etre inconnue" — est-ce vraiment le cas ?

### Piege 6 — Oublier le RGPD des le design
**Probleme :** Decouvrir 6 mois apres le lancement qu'on ne peut pas supprimer les donnees d'un utilisateur parce que son ID est lie partout.
**Solution :** Integrer le "privacy by design" dans le modele. Planifier le droit a l'oubli et la portabilite des le depart.

### Piege 7 — Les migrations "big bang"
**Probleme :** Migrer tout le schema en une seule operation avec downtime.
**Solution :** Utiliser le pattern expand-contract : ajouter le nouveau schema, migrer les donnees progressivement, supprimer l'ancien schema.

### Piege 8 — Ignorer la temporalite des donnees
**Probleme :** Ne pas savoir quand une donnee a ete creee, modifiee ou par qui.
**Solution :** Ajouter systematiquement `created_at`, `updated_at`, et si pertinent `created_by`, `updated_by`. Pour les donnees sensibles, envisager un audit log separe.

---

## Criteres de qualite du document final

1. **Ancrage metier** : Le modele refleta le domaine metier avec un vocabulaire comprehensible par les non-techniques.
2. **Completude** : Toutes les entites, attributs, relations et contraintes sont documentes.
3. **Coherence** : Les conventions de nommage, types de donnees et patterns sont uniformes.
4. **Diagramme** : Un diagramme ER lisible accompagne le modele.
5. **Performance** : Les strategies d'indexation sont definies et justifiees.
6. **Conformite** : La classification RGPD et les politiques de retention sont explicites.
7. **Evolutivite** : Le document anticipe les evolutions et definit les strategies de migration.
8. **Validation** : Les regles de validation metier sont formalisees pour chaque entite.
9. **Tracabilite** : Chaque decision de design est justifiee (pourquoi ce type, pourquoi cette cardinalite).
10. **Utilisabilite** : Un developpeur peut implementer le modele en lisant uniquement ce document.
