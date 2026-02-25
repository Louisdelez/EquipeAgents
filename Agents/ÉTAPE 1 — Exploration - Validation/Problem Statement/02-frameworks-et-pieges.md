# Problem Statement — Frameworks, Pieges et Criteres de qualite

## Frameworks de reference

### 1. Jobs-to-be-Done Framework (Clayton Christensen, Harvard Business School)
Le framework JTBD postule que les clients n'"achetent" pas des produits — ils "embauchent" des produits pour accomplir un "job" dans leur vie. Le probleme a definir n'est pas une fonctionnalite manquante, mais un "job" que les gens essaient d'accomplir et pour lequel les solutions actuelles sont inadequates.

**3 dimensions du JTBD :**
- **Fonctionnel** : Quelle tache la personne essaie-t-elle d'accomplir ? (Ex: "envoyer de l'argent a un ami")
- **Emotionnel** : Comment veut-elle se sentir en le faisant ? (Ex: "en confiance, sans stress")
- **Social** : Comment veut-elle etre percue par les autres ? (Ex: "comme quelqu'un de genereux et fiable")

**Application dans la conversation :** Quand l'utilisateur decrit le probleme, decompose-le selon ces 3 dimensions. Souvent, la dimension emotionnelle ou sociale revele le vrai probleme cache.

### 2. Les 5 Whys (Methode Toyota / Sakichi Toyoda)
Technique iterative qui consiste a demander "Pourquoi ?" cinq fois consecutives pour passer des symptomes visibles a la cause racine invisible.

**Exemple :**
- Pourquoi le client quitte l'application ? → Parce qu'il ne trouve pas ce qu'il cherche.
- Pourquoi ne trouve-t-il pas ? → Parce que la recherche est mauvaise.
- Pourquoi la recherche est-elle mauvaise ? → Parce qu'elle n'est pas contextualisee.
- Pourquoi n'est-elle pas contextualisee ? → Parce qu'on n'a pas de donnees sur les preferences.
- Pourquoi n'a-t-on pas ces donnees ? → Parce qu'on n'a jamais mis en place de systeme de personalisation.

**Application dans la conversation :** Utilise systematiquement les 5 Whys sur le probleme principal de l'utilisateur. Arrete-toi quand tu arrives a une cause sur laquelle on peut agir concretement.

### 3. Design Thinking — Phase "Empathize & Define" (Stanford d.school)
Le Design Thinking place l'empathie au centre de la resolution de probleme. La phase "Define" produit un "Point of View" (POV) qui suit le format :
**[Utilisateur] a besoin de [besoin] parce que [insight surprenant].**

**Application dans la conversation :** Aide l'utilisateur a formuler un POV pour son probleme. L'insight surprenant est crucial — c'est ce qui distingue une bonne definition de probleme d'une definition banale.

### 4. Google Design Sprint — "How Might We" (HMW)
Le Design Sprint de Google utilise des questions "Comment pourrions-nous...?" pour recadrer les problemes en opportunites. C'est un outil puissant pour verifier que le probleme est formule de maniere actionnable.

**Application dans la conversation :** Apres avoir defini le probleme, propose a l'utilisateur de le reformuler en "How Might We" : "Comment pourrions-nous [resoudre le probleme] pour [les utilisateurs] afin qu'ils [benefice] ?" Si la question HMW sonne bien, le probleme est bien defini.

### 5. Amazon Customer Obsession Principle
Amazon commence tout par le client. Leur methode "Working Backwards" force a definir le probleme du point de vue du client AVANT de penser a la solution.

**Application dans la conversation :** Ramene constamment la discussion au client/utilisateur. Si l'utilisateur parle du probleme en termes techniques ou business, recentre : "D'accord, mais du point de vue de l'utilisateur, quel est le probleme exact qu'il vit au quotidien ?"

### 6. Problem-Solution Fit Canvas
Ce canvas est un outil qui structure la reflexion en 4 quadrants :
- **Probleme** : Les 3 problemes majeurs
- **Segments clients** : Les segments les plus affectes
- **Proposition de valeur** : Ce qui soulage ces problemes
- **Solution** : Les fonctionnalites cles

**Application dans la conversation :** Utilise ce canvas comme grille de verification finale pour s'assurer que le probleme est bien connecte aux utilisateurs et a une solution potentielle.

### 7. Lean Problem Interview (Lean Startup)
Methode d'interview utilisateur qui valide l'existence et la severite d'un probleme en posant des questions ouvertes aux utilisateurs potentiels, SANS parler de la solution.

**Application dans la conversation :** Demande a l'utilisateur s'il a mene des interviews. Si non, aide-le a preparer les bonnes questions. Si oui, exploite les insights obtenus.

---

## Pieges courants et comment les eviter

### Piege 1 : Confondre probleme et solution
**Symptome :** "Le probleme c'est qu'il n'y a pas d'application pour faire X."
**Solution :** L'absence d'une solution n'est PAS un probleme. Le probleme est la difficulte que les gens rencontrent. Reformule : "Le probleme n'est pas l'absence d'application. Le probleme, c'est que les gens ont du mal a [faire X] parce que [raison]. L'application est UNE solution possible."

### Piege 2 : Rester en surface — les symptomes au lieu des causes
**Symptome :** L'utilisateur decrit des symptomes observables sans creuser les causes profondes.
**Solution :** Utilise les 5 Whys systematiquement. Explique la difference : "Ce que tu decris, c'est le symptome. C'est ce qu'on VOIT. Mais pourquoi ca arrive ? Quelle est la cause en dessous ?"

### Piege 3 : Le probleme invente (absence de validation)
**Symptome :** "Je pense que les gens ont besoin de..." sans aucune preuve.
**Solution :** Demande : "Comment sais-tu que ce probleme est reel ? L'as-tu observe, mesure, ou est-ce une intuition ?" L'intuition n'est pas mauvaise, mais elle doit etre flaguee comme hypothese a valider.

### Piege 4 : Le probleme trop large
**Symptome :** "Le probleme de la sante en France" ou "La complexite administrative".
**Solution :** Force la specificite : "Quel ASPECT specifique de la sante ? Pour QUELLE population ? Dans QUEL contexte precis ? Un bon Problem Statement est comme un bistouri, pas comme un marteau."

### Piege 5 : Le probleme trop etroit
**Symptome :** Le probleme decrit ne concerne que 3 personnes et ne justifie pas un projet.
**Solution :** Verifie l'echelle : "Combien de personnes sont concernees ? Si c'est un probleme de niche, est-ce que cette niche est prete a payer beaucoup ? Sinon, le projet risque de ne pas etre viable."

### Piege 6 : Ignorer les solutions existantes
**Symptome :** L'utilisateur ne mentionne aucun concurrent ou solution de contournement.
**Solution :** "Attends — les gens qui ont ce probleme, comment le gerent-ils AUJOURD'HUI ? Ils ne restent pas les bras croises. Quelles sont leurs solutions de contournement ?" Il y a TOUJOURS une alternative (meme si c'est ne rien faire).

### Piege 7 : L'impact non quantifie
**Symptome :** "C'est un gros probleme" sans aucun chiffre.
**Solution :** Insiste sur la quantification : "Gros comment ? Ca coute combien en temps ? En argent ? En frustration ? Meme un ordre de grandeur approximatif aide a calibrer la gravite."

### Piege 8 : Oublier la dimension emotionnelle
**Symptome :** Le probleme est decrit de maniere purement fonctionnelle/technique.
**Solution :** Utilise le JTBD : "Au-dela de l'aspect pratique, comment les gens se SENTENT face a ce probleme ? Frustres ? Stresses ? Humilies ? Resignes ? L'emotion est souvent le vrai moteur d'adoption d'une solution."

---

## Criteres de qualite du document final

Avant de produire le document, verifie que CHAQUE critere est rempli :

- [ ] **Cause racine identifiee** : Le probleme decrit est une cause profonde, pas un symptome de surface.
- [ ] **Specifique et cible** : Le probleme est clairement delimite — on sait exactement ce qui est inclus et exclu.
- [ ] **Centre utilisateur** : Le probleme est decrit du point de vue des personnes affectees, pas du point de vue technique.
- [ ] **Quantifie** : L'impact est mesure ou estime (en temps, argent, frequence, nombre de personnes).
- [ ] **Prouve** : Des donnees, observations ou temoignages soutiennent l'existence du probleme.
- [ ] **Hypotheses flagguees** : Les suppositions non validees sont clairement identifiees comme telles.
- [ ] **Solutions existantes cartographiees** : On sait ce qui existe et pourquoi c'est insuffisant.
- [ ] **Resultat attendu clair** : On peut visualiser la situation "apres" et mesurer l'amelioration.
- [ ] **Actionnable** : Le probleme est formule de maniere a orienter vers des solutions (test HMW).
- [ ] **Coherence avec la Vision** : Le probleme est clairement lie a la vision du projet (si le Vision Document existe).
- [ ] **JTBD complet** : Les dimensions fonctionnelle, emotionnelle et sociale sont couvertes.
- [ ] **POV formule** : Un Point of View (Design Thinking) est inclus ou peut etre derive du document.