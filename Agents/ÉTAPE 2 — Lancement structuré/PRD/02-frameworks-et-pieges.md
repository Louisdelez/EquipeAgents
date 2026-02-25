# PRD -- Frameworks et Pieges

## Ressources et frameworks de reference

### 1. Amazon PR/FAQ
Amazon redige d'abord un faux communique de presse et une FAQ avant meme de commencer le developpement. Le communique de presse repond a :
- Quel est le probleme client ?
- Quelle est la solution proposee ?
- Quel benefice concret pour le client ?
- Citation fictive d'un client satisfait

La FAQ repond aux questions que poseront les parties prenantes internes et les clients.

### 2. Google PRD Format
Le format Google met l'accent sur :
- **Le probleme avant la solution** : Toujours commencer par pourquoi ce produit doit exister
- **Les non-goals** : Ce que le produit ne fait PAS est aussi important que ce qu'il fait
- **Les metriques de succes** : Chaque feature doit avoir des metriques associees
- **Les alternatives considerees** : Montrer qu'on a explore d'autres options

### 3. RICE Scoring (Intercom)
Framework de priorisation des fonctionnalites :
- **Reach** : Combien d'utilisateurs seront impactes ? (nombre par trimestre)
- **Impact** : Quel sera l'impact sur chaque utilisateur ? (3 = massif, 2 = haut, 1 = moyen, 0.5 = faible, 0.25 = minimal)
- **Confidence** : Quel est le niveau de confiance dans les estimations ? (100% = donnees solides, 80% = plutot confiant, 50% = pari)
- **Effort** : Combien de "person-months" pour implementer ?

Score RICE = (Reach x Impact x Confidence) / Effort

### 4. ICE Scoring
Alternative plus simple a RICE :
- **Impact** : Quel impact sur l'objectif principal ? (1-10)
- **Confidence** : Confiance dans l'estimation ? (1-10)
- **Ease** : Facilite d'implementation ? (1-10)

Score ICE = Impact x Confidence x Ease

### 5. Jobs-to-be-Done (JTBD)
Framework de Clayton Christensen. L'idee : les gens n'achetent pas des produits, ils "engagent" des produits pour accomplir un "job". Format :
- "Quand je [situation], je veux [motivation], pour pouvoir [resultat attendu]"
- Separe les jobs fonctionnels, emotionnels et sociaux

### 6. User Story Mapping (Jeff Patton)
Organise les user stories en une carte visuelle :
- Axe horizontal : le parcours utilisateur (les etapes chronologiques)
- Axe vertical : la profondeur de chaque etape (du MVP aux fonctionnalites avancees)
- Permet de definir les "releases" par tranches horizontales

### 7. Spotify Dual-Track Agile
Spotify separe :
- **Discovery Track** : Explorer et valider les problemes et solutions (interviews, prototypes, tests)
- **Delivery Track** : Construire et livrer les fonctionnalites validees

Le PRD est le pont entre les deux tracks. Il documente les apprentissages du Discovery pour guider le Delivery.

### 8. Kano Model
Classifie les fonctionnalites en :
- **Basic (Must-be)** : Attendues, leur absence genere de l'insatisfaction mais leur presence ne genere pas de satisfaction
- **Performance** : Plus on en a, plus on est satisfait (lineaire)
- **Excitement (Delighters)** : Inattendues, leur presence genere beaucoup de satisfaction
- **Indifferent** : N'impacte pas la satisfaction
- **Reverse** : Leur presence genere de l'insatisfaction

---

## Pieges courants et comment les eviter

### Piege 1 -- Le PRD "liste de souhaits"
**Probleme :** Le PRD est une liste interminable de fonctionnalites sans priorisation ni justification.
**Solution :** Chaque fonctionnalite doit repondre a un job-to-be-done documente et avoir un score de priorisation. Si une fonctionnalite n'a pas de "pourquoi", elle sort du PRD.

### Piege 2 -- Les personas fictifs
**Probleme :** Les personas sont inventes a partir d'assumptions, pas de donnees reelles.
**Solution :** Challenge systematiquement : "As-tu parle a de vrais utilisateurs ? Combien ? Qu'ont-ils dit ?" Meme 5 interviews valent mieux que 0.

### Piege 3 -- Le PRD qui prescrit la solution technique
**Probleme :** Le PM decide de la technologie au lieu de decrire le besoin.
**Solution :** Le PRD decrit le QUOI et le POURQUOI, jamais le COMMENT. Remplace "Utiliser une base NoSQL" par "Le systeme doit supporter 10 000 ecritures par seconde".

### Piege 4 -- Ignorer les edge cases
**Probleme :** Seul le "happy path" est documente.
**Solution :** Pour chaque user story, demande : "Et si ca echoue ? Et si les donnees sont manquantes ? Et si l'utilisateur fait n'importe quoi ?"

### Piege 5 -- Le PRD statique
**Probleme :** Le PRD est ecrit une fois et jamais mis a jour.
**Solution :** Precise que c'est un document vivant. Inclus un numero de version et un historique des modifications.

### Piege 6 -- Confondre MVP et V1 complete
**Probleme :** Le "MVP" contient 50 fonctionnalites.
**Solution :** Un vrai MVP est le plus petit produit qui delivre de la valeur. Challenge : "Si tu ne pouvais livrer que 3 fonctionnalites, lesquelles ?"

### Piege 7 -- Oublier les exigences non fonctionnelles
**Probleme :** Aucune mention de performance, securite, accessibilite.
**Solution :** Pose systematiquement les questions de la section 6. Un produit rapide mais non securise est un produit dangereux.

### Piege 8 -- Les metriques de vanite
**Probleme :** Les metriques choisies ne refletent pas la valeur reelle (ex: nombre de pages vues au lieu du taux de conversion).
**Solution :** Pour chaque metrique, demande : "Si cette metrique augmente de 50%, est-ce que ca veut dire que le produit reussit ?"

---

## Criteres de qualite du document final

Le PRD est considere comme complet et de qualite si :

- [ ] Le probleme est clairement defini avant la solution
- [ ] Au moins 2-3 personas sont decrits avec suffisamment de detail pour etre empathiques
- [ ] Chaque user story suit le format standard et est rattachee a un persona
- [ ] Les user stories couvrent le happy path ET les cas d'erreur/edge cases
- [ ] Chaque fonctionnalite a une priorite justifiee (RICE, ICE ou MoSCoW)
- [ ] Les exigences non fonctionnelles sont documentees (performance, securite, accessibilite)
- [ ] Le hors perimetre est explicitement defini
- [ ] Les dependances sont identifiees et evaluees
- [ ] Les metriques de succes sont definies et pertinentes (pas des metriques de vanite)
- [ ] Le document est comprehensible par un designer ET un developpeur
- [ ] Il y a une claire distinction entre MVP et fonctionnalites futures
- [ ] Les anti-objectifs (non-goals) sont documentes
- [ ] Le document ne prescrit pas de solution technique
