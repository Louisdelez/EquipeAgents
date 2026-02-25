# Decision Log -- Frameworks et Pieges

## Ressources et frameworks de reference

### 1. ADR -- Architecture Decision Records (Michael Nygard)
Le format ADR est le standard de facto pour documenter les decisions techniques :

**Structure d'un ADR :**
- **Title** : Description courte et descriptive (ex: "ADR-001: Utiliser PostgreSQL comme base de donnees principale")
- **Date** : Quand la decision a ete prise
- **Status** : Proposed -> Accepted -> Deprecated -> Superseded
- **Context** : Les forces en presence qui motivent la decision (contraintes, besoins, problemes)
- **Decision** : Ce qui a ete decide, formule de maniere active ("Nous allons...")
- **Consequences** : Les impacts positifs, negatifs et neutres de cette decision

**Principes cles :**
- Un ADR est **immutable**. Si une decision change, on cree un nouvel ADR qui "supersede" l'ancien. L'historique est preserve.
- Les ADR sont **courts** (1-2 pages maximum). S'il faut plus, c'est probablement une spec technique.
- Les ADR capturent les decisions **significatives**, pas les micro-decisions. Un bon test : "Est-ce que cette decision sera difficile a reverser ?"

### 2. DACI Framework (Atlassian)
Framework de prise de decision collaborative :
- **Driver** : La personne qui pilote le processus de decision (organise les reunions, collecte les inputs, assure le suivi). Ce n'est PAS necessairement le decideur.
- **Approver** : La personne qui a le pouvoir final de decision. Une seule personne pour eviter l'impasse.
- **Contributors** : Les personnes qui apportent des expertises, des donnees, des opinions. Elles ont une voix mais pas un vote.
- **Informed** : Les personnes qui doivent etre informees de la decision une fois prise.

**Quand utiliser DACI :** Pour les decisions importantes qui impliquent plusieurs parties prenantes et ou il y a un risque de paralysie decisionnelle.

### 3. Amazon's "Disagree and Commit"
Principe culturel d'Amazon :
- Il est non seulement acceptable mais encourage de ne pas etre d'accord avec une decision.
- Cependant, une fois la decision prise (par la personne accountable), tout le monde s'engage a la soutenir pleinement.
- Cela evite deux pieges : (1) la decision par consensus mou qui ne satisfait personne, (2) le sabotage passif de ceux qui ne sont pas d'accord.

**Application dans le Decision Log :** Documenter les desaccords et les discussions est une force, pas une faiblesse. Ecrire "Alice preferait l'option B pour [raisons], mais la decision finale est l'option A pour [raisons]" enrichit le contexte.

### 4. Netflix's "Context, not Control"
Netflix donne du contexte aux equipes pour qu'elles puissent prendre des decisions elles-memes, plutot que de controler chaque decision d'en haut. Cela implique :
- Les decisions strategiques (direction, budget, priorites) sont prises centralement et documentees
- Les decisions tactiques (implementation, outils, methodes) sont deleguees aux equipes
- Le contexte necessaire pour decider est explicitement partage

**Application dans le Decision Log :** Categoriser les decisions par niveau (strategique vs tactique) et par perimetre d'impact.

### 5. Lightweight ADR (LADR)
Version simplifiee des ADR pour les equipes qui trouvent le format complet trop lourd :
- **Decision** : Quoi (une phrase)
- **Rationale** : Pourquoi (2-3 phrases)
- **Consequences** : Et alors ? (une phrase)

Utile pour les decisions de moindre importance ou les equipes debutant avec les ADR.

### 6. Decision Matrix (Matrice de Decision)
Outil quantitatif pour comparer des options :
- Lister les criteres de decision et leur poids
- Evaluer chaque option sur chaque critere (note de 1 a 5)
- Calculer le score pondere

Utile quand plusieurs alternatives serieuses existent et que la decision n'est pas evidente.

### 7. Reversible vs Irreversible Decisions (Amazon -- Type 1 vs Type 2)
Amazon distingue deux types de decisions :
- **Type 1 (portes a sens unique)** : Decisions irreversibles ou tres couteuses a reverser. Elles meritent une analyse approfondie. Exemples : choix d'une base de donnees, changement de modele de pricing.
- **Type 2 (portes a double sens)** : Decisions facilement reversibles. Elles doivent etre prises vite. Exemples : couleur d'un bouton, format d'un rapport.

**Application dans le Decision Log :** Marquer chaque decision comme Type 1 ou Type 2. Les Type 1 meritent une documentation detaillee. Les Type 2 peuvent etre documentees en version legere.

---

## Pieges courants et comment les eviter

### Piege 1 -- Documenter seulement les decisions "heureuses"
**Probleme :** On ne documente que les decisions ou tout le monde etait d'accord, pas les decisions controversees.
**Solution :** Les decisions controversees sont les PLUS importantes a documenter. Le desaccord et les raisons du choix final sont essentiels pour le contexte futur.

### Piege 2 -- Le contexte insuffisant
**Probleme :** "Decision : utiliser PostgreSQL." Sans contexte, dans 6 mois personne ne saura pourquoi.
**Solution :** Le contexte doit repondre a : Quel probleme ? Quelles contraintes ? Quelles options ? Pourquoi ce choix ?

### Piege 3 -- Le Decision Log abandonne
**Probleme :** Le log est cree au debut du projet puis oublie. Les decisions suivantes ne sont pas documentees.
**Solution :** Integre la creation d'ADR dans le workflow quotidien. A chaque sprint review, demande : "Y a-t-il de nouvelles decisions a documenter ?"

### Piege 4 -- Tout documenter
**Probleme :** Chaque micro-decision est documentee, le log devient inutilisable.
**Solution :** Utilise le test : "Cette decision sera-t-elle difficile a reverser ?" et "Quelqu'un demandera-t-il 'pourquoi' dans 6 mois ?" Si non aux deux, ce n'est pas un ADR.

### Piege 5 -- Modifier les decisions existantes
**Probleme :** Quand une decision change, on modifie l'ADR original. L'historique est perdu.
**Solution :** Les ADR sont immutables. Si une decision change, creez un nouvel ADR avec le statut "Supersedes D-XXX". L'ancien ADR passe en statut "Superseded by D-YYY".

### Piege 6 -- Pas de decideur clair
**Probleme :** La decision a ete prise "par l'equipe" ou "en reunion" sans decideur identifie.
**Solution :** Utilise DACI. Chaque decision doit avoir un Approver nomme. Si personne ne veut etre l'Approver, c'est un signal d'alerte.

### Piege 7 -- Ignorer les decisions implicites
**Probleme :** Certaines decisions sont prises par defaut (ne rien faire, garder l'existant) et ne sont jamais documentees.
**Solution :** "Ne rien faire" est une decision. "Garder la solution actuelle" est une decision. Documentez-les quand elles sont significatives.

### Piege 8 -- Les decisions sans consequences documentees
**Probleme :** On sait ce qui a ete decide mais pas l'impact de cette decision.
**Solution :** Chaque ADR doit avoir une section "Consequences" avec les impacts positifs, negatifs et neutres. C'est ce qui permet de comprendre les trade-offs.

---

## Criteres de qualite du document final

Le Decision Log est considere comme complet et de qualite si :

- [ ] Chaque decision a un identifiant unique (D-001, D-002...)
- [ ] Chaque decision a une date et un decideur nomme
- [ ] Chaque decision a un statut clair (Proposed/Accepted/Deprecated/Superseded)
- [ ] Le contexte de chaque decision est suffisant pour qu'un nouveau venu comprenne le "pourquoi"
- [ ] Au moins 2 alternatives sont documentees pour chaque decision majeure (Type 1)
- [ ] Les avantages ET inconvenients de chaque alternative sont listes
- [ ] Les consequences (positives et negatives) sont documentees
- [ ] Les decisions sont classees par categorie (business, technique, produit, organisationnel)
- [ ] Le type de decision (reversible/irreversible) est indique
- [ ] Les desaccords sont documentes avec respect
- [ ] Il n'y a pas de contradictions entre les decisions
- [ ] Le processus de mise a jour est defini (qui, quand, comment)
- [ ] Le registre de synthese en haut du document donne une vue d'ensemble rapide
