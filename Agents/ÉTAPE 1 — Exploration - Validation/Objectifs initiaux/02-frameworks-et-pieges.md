# Objectifs initiaux — Frameworks, Pieges et Criteres de qualite

## Frameworks de reference

### 1. SMART Goals (utilise par Google, Intel et des milliers d'organisations)
Chaque objectif doit etre :
- **Specific** (Specifique) : Clair, sans ambiguite. "Ameliorer l'experience utilisateur" n'est pas specifique. "Reduire le temps d'inscription a moins de 2 minutes" l'est.
- **Measurable** (Mesurable) : On peut verifier objectivement si c'est atteint. Il faut un chiffre ou un critere observable.
- **Achievable** (Atteignable) : Ambitieux mais realiste avec les ressources disponibles.
- **Relevant** (Pertinent) : Directement lie a la vision et au probleme adresse.
- **Time-bound** (Borne dans le temps) : Date limite ou horizon clair.

**Application dans la conversation :** Teste chaque objectif formule par l'utilisateur contre les 5 criteres SMART. Si un critere manque, pose la question correspondante. Sois intraitable sur le "Measurable" — un objectif non mesurable est un voeu pieux.

### 2. MoSCoW Prioritization (utilise par Spotify, Atlassian et beaucoup de boites agiles)
Methode de priorisation en 4 categories :
- **Must Have** : Indispensable. Sans ca, la v1 n'a aucun sens. C'est le minimum vital.
- **Should Have** : Important mais pas bloquant. Si on a le temps, on le fait.
- **Could Have** : Agreable a avoir. On le fait seulement s'il reste du temps et du budget.
- **Won't Have (this time)** : Explicitement exclu de la v1. On le fera plus tard. CRUCIAL : noter ce qu'on NE fait PAS est aussi important que noter ce qu'on fait.

**Application dans la conversation :** Utilise MoSCoW pour classer chaque fonctionnalite ou objectif. Challenge systematiquement les "Must Have" : "Est-ce vraiment un Must Have ? Si on le retire, la v1 est-elle inutile ?" Souvent, les Must Have sont en realite des Should Have deguises.

### 3. Lean Startup MVP (Eric Ries)
Le MVP (Minimum Viable Product) est la version la plus simple d'un produit qui permet de tester l'hypothese la plus risquee avec un minimum d'effort.

**Principes cles :**
- Le MVP n'est PAS un produit bacle. C'est un produit minimum mais VIABLE.
- L'objectif du MVP est d'APPRENDRE, pas de vendre. La question cle : "Quelle est l'hypothese la plus risquee, et comment la tester avec le minimum d'effort ?"
- Build-Measure-Learn : Construire le minimum, mesurer les resultats, apprendre et iterer.

**Application dans la conversation :** Demande a l'utilisateur : "Quelle est l'hypothese la plus risquee de ton projet ? Celle qui, si elle s'avere fausse, remet tout en question ?" Le MVP doit etre concu pour tester CETTE hypothese en priorite.

### 4. Kano Model (pour la priorisation des fonctionnalites)
Le modele de Kano classe les fonctionnalites en categories :
- **Basic (Must-be)** : Attendues par defaut. Leur absence cree de l'insatisfaction, mais leur presence ne cree pas de satisfaction. (Ex: un site e-commerce doit avoir un panier)
- **Performance (One-dimensional)** : Plus il y en a, plus l'utilisateur est satisfait. Relation lineaire. (Ex: vitesse de chargement)
- **Excitement (Attractive/Delighters)** : L'utilisateur ne s'y attend pas, mais leur presence cree un effet "wow". (Ex: les recommandations personnalisees de Netflix a leurs debuts)
- **Indifferent** : L'utilisateur s'en fiche. NE PAS investir du temps la-dessus.
- **Reverse** : Plus il y en a, MOINS l'utilisateur est satisfait. (Ex: trop de notifications)

**Application dans la conversation :** Aide l'utilisateur a classer ses fonctionnalites selon Kano. Pour un MVP, on veut : tous les "Basic" + 1-2 "Excitement" (les delighters qui differencient). Les "Performance" peuvent etre au minimum acceptable.

### 5. Amazon "Working Backwards from the Customer"
Amazon redige les criteres de succes et le communique de presse AVANT de commencer. Cela force a penser au resultat final et a definir des metriques claires.

**Application dans la conversation :** Demande a l'utilisateur : "Imaginons que ta v1 est lancee. 3 mois apres, ton equipe se reunit pour evaluer le succes. Quel dashboard regardez-vous ? Quels chiffres doivent etre verts ?"

### 6. RICE Scoring (Intercom)
Methode de priorisation quantitative :
- **Reach** : Combien de personnes seront affectees par cette fonctionnalite ? (par periode)
- **Impact** : Quel est l'impact sur l'objectif principal ? (echelle : 3 = massif, 2 = fort, 1 = moyen, 0.5 = faible, 0.25 = minimal)
- **Confidence** : A quel point es-tu confiant dans tes estimations ? (100% = haute, 80% = moyenne, 50% = basse)
- **Effort** : Combien de temps-personne faut-il ? (en semaines-personne)
- **Score RICE** = (Reach x Impact x Confidence) / Effort

**Application dans la conversation :** Propose le scoring RICE pour les fonctionnalites difficiles a prioriser. Ca aide a depasser les debats d'opinion ("moi je pense que c'est important") en introduisant une methode quantitative.

### 7. ICE Scoring (Sean Ellis, Growth Hacking)
Version simplifiee de RICE :
- **Impact** : Quel impact potentiel ? (1-10)
- **Confidence** : Quelle confiance dans l'impact ? (1-10)
- **Ease** : Quelle facilite d'implementation ? (1-10)
- **Score ICE** = Impact x Confidence x Ease

**Application dans la conversation :** Alternative plus simple au RICE, utile quand l'utilisateur n'a pas assez de donnees pour estimer le "Reach".

### 8. Spotify Minimum Lovable Product (MLP)
Spotify va au-dela du MVP : le concept de Minimum Lovable Product insiste sur le fait que le produit minimum doit non seulement fonctionner, mais aussi creer une EMOTION positive chez l'utilisateur. Un MVP que personne n'aime n'apprend rien.

**Application dans la conversation :** Apres avoir defini le scope minimum, demande : "OK, ce minimum est viable. Mais est-il LOVABLE ? Est-ce que les premiers utilisateurs vont dire 'wow' et en parler a leurs amis ? Si non, que faut-il ajouter pour creer cet effet ?"

---

## Pieges courants et comment les eviter

### Piege 1 : Le MVP qui n'est pas minimum
**Symptome :** La v1 contient 15 fonctionnalites, un back-office complet, des integrations tierces et un systeme de notifications.
**Solution :** Applique la regle des 3 : "Si tu ne pouvais garder que 3 fonctionnalites, lesquelles ?" Ensuite, construis autour de ces 3. Rappelle : le premier iPhone n'avait pas de copier-coller. Spotify v1 etait desktop only.

### Piege 2 : Les objectifs non mesurables
**Symptome :** "L'objectif est d'avoir une bonne UX" ou "satisfaire les utilisateurs".
**Solution :** Force le SMART : "C'est quoi 'bonne UX' en chiffres ? Un taux de completion de 80% ? Un NPS de 40+ ? Un temps de chargement < 2s ?" Un objectif non mesurable est un voeu, pas un objectif.

### Piege 3 : Confondre "j'ai envie" et "l'utilisateur a besoin"
**Symptome :** Les fonctionnalites sont priorisees sur la base de ce que l'equipe trouve "cool" plutot que ce que l'utilisateur attend.
**Solution :** Pour chaque fonctionnalite, demande : "Quel probleme utilisateur ca resout ? Si l'utilisateur n'a pas ce probleme, pourquoi le mettre dans la v1 ?"

### Piege 4 : Oublier le "Won't Have"
**Symptome :** Le document liste ce qui est inclus mais pas ce qui est exclu.
**Solution :** La liste des exclusions est AUSSI importante que la liste des inclusions. C'est le meilleur rempart contre le scope creep. "Si ce n'est pas ecrit dans les exclusions, quelqu'un va le demander et ca va atterrir dans le scope."

### Piege 5 : Des criteres de succes impossibles a mesurer
**Symptome :** Les metriques sont definies mais aucun outil n'est en place pour les mesurer.
**Solution :** Demande : "As-tu un outil d'analytics en place ? Peux-tu TECHNIQUEMENT mesurer cette metrique ? Sinon, la mise en place du tracking est un Must Have de ta v1."

### Piege 6 : Les hypotheses implicites
**Symptome :** L'utilisateur fait des suppositions non dites ("les gens vont payer", "le bouche-a-oreille suffira", "la technologie marchera").
**Solution :** Force l'explicitation : "Listons TOUTES les hypotheses que tu fais. Pour chacune : sur quelle preuve te bases-tu ? Et si c'est faux, que se passe-t-il ?"

### Piege 7 : L'absence de plan B
**Symptome :** Aucune reflexion sur ce qui se passe si la v1 echoue.
**Solution :** "Imaginons le pire : ta v1 ne valide aucune hypothese. Que fais-tu ? Tu pivotes ? Tu arretes ? Tu iteres ? Avoir un plan B n'est pas du pessimisme, c'est de la prudence."

### Piege 8 : Objectifs deconnectes de la vision
**Symptome :** Les objectifs de la v1 ne contribuent pas clairement a la vision long terme.
**Solution :** Pour chaque objectif, trace le lien : "Cet objectif contribue a la vision comment exactement ?" Si le lien est tenu ou inexistant, l'objectif n'a peut-etre pas sa place dans la v1.

### Piege 9 : Les contraintes non reconnues
**Symptome :** Un plan ambitieux mais aucune mention des limites de budget, equipe ou temps.
**Solution :** Sois direct : "C'est un beau plan. Maintenant, reality check : combien de personnes, combien d'argent, combien de temps ? Est-ce que ca tient ?" Si le scope depasse les contraintes, il faut couper.

### Piege 10 : La v1 parfaite
**Symptome :** L'utilisateur veut que la v1 soit parfaite avant de lancer.
**Solution :** Cite Reid Hoffman (fondateur de LinkedIn) : "If you're not embarrassed by the first version of your product, you've launched too late." La v1 doit etre assez bonne pour apprendre, pas assez bonne pour etre finale.

---

## Criteres de qualite du document final

Avant de produire le document, verifie que CHAQUE critere est rempli :

- [ ] **Objectif principal SMART** : L'objectif n°1 est specifique, mesurable, atteignable, pertinent et borne dans le temps.
- [ ] **Objectifs secondaires SMART** : Chaque objectif secondaire passe le test SMART.
- [ ] **Scope minimum** : Le perimetre est le minimum necessaire pour valider les hypotheses cles. Pas un feature de plus.
- [ ] **MoSCoW applique** : Chaque element est classe Must / Should / Could / Won't.
- [ ] **Exclusions explicites** : Ce qui n'est PAS dans la v1 est clairement liste.
- [ ] **Criteres mesurables** : Chaque critere de succes a une metrique et une cible chiffree.
- [ ] **Mesurabilite technique** : On PEUT techniquement mesurer chaque metrique (outils en place ou prevus).
- [ ] **Hypotheses explicites** : Les hypotheses cles sont listees avec leur methode de validation.
- [ ] **Contraintes realistes** : Les contraintes de temps, budget et equipe sont coherentes avec le scope.
- [ ] **Lien avec la vision** : Chaque objectif contribue clairement a la vision long terme du projet.
- [ ] **Plan B** : Il existe une reflexion sur ce qui se passe si les hypotheses sont invalidees.
- [ ] **Lovable** : La v1 n'est pas juste viable — elle a au moins un element "wow" (MLP Spotify).
- [ ] **Coherence globale** : Le document est coherent avec le Vision Document, le Problem Statement et le Business Case.