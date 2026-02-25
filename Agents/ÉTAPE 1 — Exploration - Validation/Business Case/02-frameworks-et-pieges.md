# Business Case — Frameworks, Pieges et Criteres de qualite

## Frameworks de reference

### 1. Lean Canvas (Ash Maurya)
Le Lean Canvas est une adaptation du Business Model Canvas specifiquement concue pour les startups et les nouveaux projets. Il se concentre sur 9 blocs :
- Probleme, Segments clients, Proposition de valeur unique, Solution, Canaux, Sources de revenus, Structure de couts, Metriques cles, Avantage injuste.

**Application dans la conversation :** Utilise le Lean Canvas comme checklist mentale pour verifier que tous les aspects business sont couverts. Si l'utilisateur a un trou dans l'un de ces blocs, pose les questions correspondantes.

### 2. Porter's Five Forces (Michael Porter, Harvard)
Cadre d'analyse concurrentielle qui evalue 5 forces :
- **Rivalite entre concurrents existants** : Intensite de la competition.
- **Menace de nouveaux entrants** : Facilite pour de nouveaux acteurs d'entrer sur le marche.
- **Pouvoir de negociation des fournisseurs** : Dependance vis-a-vis des fournisseurs.
- **Pouvoir de negociation des clients** : Facilite pour les clients de changer de solution.
- **Menace de produits de substitution** : Risque que les clients utilisent une alternative completement differente.

**Application dans la conversation :** Utilise les 5 Forces pour structurer l'analyse concurrentielle. Ne te contente pas de lister les concurrents — analyse les dynamiques du marche.

### 3. TAM / SAM / SOM (Market Sizing)
- **TAM (Total Addressable Market)** : Le marche total theorique si tout le monde achetait.
- **SAM (Serviceable Addressable Market)** : La part du marche que tu peux techniquement servir.
- **SOM (Serviceable Obtainable Market)** : La part realiste que tu peux capturer a court terme.

**Application dans la conversation :** Exige de l'utilisateur qu'il estime au moins son SAM et son SOM. Le TAM seul est une vanity metric. Aide-le a faire un calcul bottom-up (nombre de clients potentiels x panier moyen) plutot que top-down (X% du marche mondial).

### 4. Business Model Canvas (Alexander Osterwalder)
Le BMC original couvre 9 blocs : Segments clients, Proposition de valeur, Canaux, Relations clients, Sources de revenus, Ressources cles, Activites cles, Partenaires cles, Structure de couts.

**Application dans la conversation :** Utilise le BMC pour verifier la completude du modele economique. En particulier, insiste sur les **sources de revenus** et la **structure de couts** — les deux piliers de la viabilite.

### 5. Amazon PR/FAQ pour la viabilite
Amazon inclut dans son PR/FAQ une section "Frequently Asked Questions" qui anticipe les questions difficiles, notamment sur la viabilite : "Comment ca gagne de l'argent ?", "Qu'est-ce qui empeche un concurrent de copier ?", "Quel est le cout d'acquisition client ?"

**Application dans la conversation :** Pose les questions FAQ les plus difficiles. Si l'utilisateur ne peut pas y repondre de maniere convaincante, le Business Case n'est pas pret.

### 6. Unit Economics Analysis
L'analyse des unit economics examine la rentabilite au niveau d'une seule unite (un client, une transaction, un produit vendu) :
- **CAC (Customer Acquisition Cost)** : Combien ca coute d'acquerir un client.
- **LTV (Lifetime Value)** : Combien un client rapporte au total.
- **Ratio LTV/CAC** : Idealement > 3x (benchmark SaaS).
- **Payback Period** : Temps pour recuperer le cout d'acquisition.
- **Marge brute** : Revenu moins couts variables.
- **Churn Rate** : Taux de perte de clients.

**Application dans la conversation :** Meme si l'utilisateur n'a pas de chiffres exacts, aide-le a estimer ces metriques. Des unit economics saines sont la base d'un business scalable. Stripe et Netflix maitrisent cela parfaitement.

### 7. NPV / ROI Calculations
- **NPV (Net Present Value)** : Valeur actuelle nette des flux de tresorerie futurs, actualisee au taux d'actualisation.
- **ROI (Return on Investment)** : (Gains - Couts) / Couts x 100.
- **Payback Period** : Temps necessaire pour recuperer l'investissement initial.

**Application dans la conversation :** Pour les projets internes (pas des startups), le ROI et le payback period sont souvent plus pertinents. Pour les startups, le NPV peut etre utile pour comparer des scenarios.

---

## Pieges courants et comment les eviter

### Piege 1 : Le "marche gigantesque" sans segmentation
**Symptome :** "Le marche mondial de la sante, c'est 8000 milliards !"
**Solution :** Le TAM total est inutile sans SAM et SOM. Demande : "D'accord, mais QUELLE part de ce marche peux-tu realitement adresser avec ton produit specifique, dans ta geographie, avec tes moyens ?" Fais un calcul bottom-up.

### Piege 2 : Le modele de revenus vague
**Symptome :** "On monetisera plus tard" ou "On fera du freemium".
**Solution :** Freemium n'est PAS un modele de revenus — c'est une strategie d'acquisition. Challenge : "Qui paye ? Combien ? Pourquoi ? A quelle frequence ?" Pas de modele de revenus = pas de business.

### Piege 3 : Sous-estimer les couts
**Symptome :** Les estimations de couts sont systematiquement optimistes.
**Solution :** Applique la "regle de Pi" : multiplie toute estimation de cout par 3.14. Plus serieusement, demande l'estimation "worst case" et utilise-la comme base realiste. Integre les couts caches : recrutement, juridique, imprevisible (15-20% de marge).

### Piege 4 : Ignorer la concurrence
**Symptome :** "On n'a pas de concurrent" ou "Notre seul concurrent c'est Excel".
**Solution :** Tout le monde a des concurrents. Meme si aucun produit identique n'existe, il y a des solutions de substitution. Demande : "Comment les gens resolvent-ils ce probleme AUJOURD'HUI sans ton produit ? C'est ca, ta concurrence."

### Piege 5 : L'avantage competitif non durable
**Symptome :** "On est les premiers sur le marche" (first-mover advantage).
**Solution :** Etre premier n'est pas un avantage durable. MySpace etait premier, Facebook a gagne. Demande : "Qu'est-ce qui empeche un concurrent avec 10x plus de ressources de te copier en 6 mois ?" Un vrai moat, c'est un brevet, un effet de reseau, des donnees proprietaires, une marque forte, des couts de changement eleves.

### Piege 6 : Le hockey stick de revenus
**Symptome :** Les previsions de revenus montrent une courbe exponentielle magique a partir du mois 6.
**Solution :** Challenge chaque hypothese derriere la courbe : "Pour atteindre 1000 clients en mois 12, il faut acquerir 83 clients par mois. Avec un CAC de X euros, ca represente Y euros de marketing par mois. As-tu ce budget ?"

### Piege 7 : Oublier le cashflow
**Symptome :** Le projet est "rentable" sur le papier mais manque de cash en cours de route.
**Solution :** La rentabilite et le cashflow sont deux choses differentes. Une entreprise peut etre rentable sur l'annee mais faire faillite au mois 6 par manque de tresorerie. Demande : "As-tu assez de cash pour tenir jusqu'au break-even ?"

### Piege 8 : Le Business Case sans scenario pessimiste
**Symptome :** Seul le scenario optimiste est presente.
**Solution :** Exige 3 scenarios : pessimiste, realiste, optimiste. Le scenario pessimiste doit etre viable ou du moins acceptable. "Que se passe-t-il si tu acquiers 2x moins de clients que prevu ?"

---

## Criteres de qualite du document final

Avant de produire le document, verifie que CHAQUE critere est rempli :

- [ ] **Chiffre** : Les estimations de marche, couts et revenus sont quantifiees (meme approximativement).
- [ ] **TAM/SAM/SOM** : Le marche est dimensionne avec la methode TAM/SAM/SOM, idealement en bottom-up.
- [ ] **Modele de revenus clair** : On comprend exactement qui paye, combien, pourquoi et a quelle frequence.
- [ ] **Unit economics** : CAC, LTV et marge brute sont estimes ou au moins discutes.
- [ ] **Couts realistes** : Les couts incluent une marge pour l'imprevu et ne sont pas systematiquement optimistes.
- [ ] **Analyse concurrentielle** : Les concurrents directs et indirects sont identifies avec forces/faiblesses.
- [ ] **Avantage competitif** : Le moat est identifie et sa durabilite est evaluee.
- [ ] **Risques identifies** : Au moins 3-5 risques majeurs sont listes avec probabilite, impact et mitigation.
- [ ] **3 scenarios** : Pessimiste, realiste et optimiste sont presentes pour les projections financieres.
- [ ] **Recommandation justifiee** : Le Go/No Go est argumente avec des faits, pas du feeling.
- [ ] **Coherence** : Le Business Case est coherent avec le Vision Document et le Problem Statement.
- [ ] **Honnete** : Les faiblesses et incertitudes sont reconnues ouvertement, pas cachees.