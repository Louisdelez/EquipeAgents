# Frameworks et pieges -- Governance Documentation

## Frameworks de gouvernance

### 1. COBIT (Control Objectives for Information and Related Technologies)
Framework de gouvernance IT de l'ISACA. 5 principes : repondre aux besoins des parties prenantes, couvrir l'entreprise de bout en bout, appliquer un referentiel unique et integre, approche holistique, distinguer gouvernance et management.

### 2. ITIL v4
Framework de gestion des services IT. 4 dimensions : organisations et personnes, information et technologie, partenaires et fournisseurs, flux de valeur et processus. Systeme de valeur des services (SVS).

### 3. SAFe (Scaled Agile Framework)
Framework pour l'agilite a l'echelle. Niveaux : Team, Program (ART), Large Solution, Portfolio. Roles : RTE, Product Manager, System Architect. Ceremonies : PI Planning, Inspect & Adapt.

### 4. DACI Decision Framework
Modele de decision : Driver (qui pilote), Approver (qui approuve), Contributors (qui contribue), Informed (qui est informe). Plus precis que RACI pour les decisions.

### 5. Spotify Model
Modele organisationnel : Squads (equipes autonomes), Tribes (regroupement de squads), Chapters (communautes de pratique par competence), Guilds (communautes d'interet transverses).

## Best practices des grandes entreprises

### Amazon's Two-Pizza Teams
Equipes suffisamment petites pour etre nourries par deux pizzas (6-8 personnes). Autonomie totale sur leur domaine, responsabilite de bout en bout (you build it, you run it).

### Netflix's Freedom and Responsibility Culture
Minimum de processus, maximum de confiance. Les employes sont traites comme des adultes responsables. Le controle vient de la transparence (context, not control), pas de l'approbation hierarchique.

### Google's Engineering Governance
Gouvernance legere mais rigoureuse : code reviews obligatoires, design reviews pour les changements majeurs, post-mortems blameless, OKRs pour l'alignement strategique. L'expertise technique prime sur la hierarchie.

### Amazon's Tenets
Chaque equipe definit ses "tenets" (principes de decision) qui guident les arbitrages quotidiens sans avoir besoin d'escalader. Ex: "Nous privilegions la vitesse de livraison sur la perfection technique, SAUF si cela impacte la securite."

---

## Pieges courants et comment les eviter

### Piege 1 -- La bureaucratie excessive
**Probleme :** Trop de processus, trop de validations, trop de comites. Chaque decision prend des semaines. Les equipes contournent les processus ou se paralysent.
**Solution :** Applique le principe du "minimum viable governance" : quel est le processus minimal qui couvre le risque ? Si un processus ne cree pas de valeur evidente, supprime-le. Test : si personne ne remarque que le processus a disparu, il etait inutile.

### Piege 2 -- L'absence de proprietaire de decision
**Probleme :** "Tout le monde est responsable" = personne n'est responsable. Les decisions trainent parce que personne n'a le mandat de trancher.
**Solution :** Utilise DACI pour chaque type de decision. Une seule personne est l'Approver. Le consensus n'est pas un processus de decision, c'est un processus de paralysie.

### Piege 3 -- Le copier-coller de framework
**Probleme :** Implementer le "Spotify Model" sans comprendre pourquoi Spotify l'a cree (et en ignorant que Spotify lui-meme l'a fait evoluer).
**Solution :** Inspire-toi des frameworks mais adapte au contexte. Chaque organisation est unique. La gouvernance doit refleter ta culture, ta taille et tes contraintes.

### Piege 4 -- La gouvernance statique
**Probleme :** Definir la gouvernance une fois et ne jamais la revoir. L'organisation evolue, la gouvernance reste figee dans le passe.
**Solution :** Planifie une revue trimestrielle de la gouvernance. Pose la question : "Quels processus sont devenus inutiles ? Quels processus manquent ?" La gouvernance est un systeme vivant.

### Piege 5 -- Les comites fantomes
**Probleme :** Des comites qui existent sur le papier mais ne se reunissent jamais, ou qui se reunissent sans prendre de decision.
**Solution :** Chaque comite doit avoir un objectif mesurable, une cadence respectee, et un output concret (decision, action, recommandation). Si un comite ne produit rien, supprime-le.

### Piege 6 -- Le controle sans contexte
**Probleme :** Exiger des approbations sans donner le contexte necessaire pour decider. Les approbateurs signent sans comprendre, creant un faux sentiment de controle.
**Solution :** Inspire-toi de Netflix : donne le contexte (strategie, contraintes, objectifs) et laisse les equipes decider. "Context, not control."

### Piege 7 -- Confondre gouvernance et micromanagement
**Probleme :** Utiliser les processus de gouvernance pour controler chaque action des equipes. La gouvernance devient un outil de defiance, pas de coordination.
**Solution :** La gouvernance definit le cadre (QUOI et POURQUOI), les equipes decident du COMMENT. L'autonomie dans un cadre clair est le signe d'une gouvernance mature.

---

## Criteres de qualite du document final

1. **Clarte des roles** : Pour chaque domaine de decision, il est evident qui decide, qui contribue et qui est informe
2. **Proportionnalite** : Les processus sont proportionnes au risque -- pas de bureaucratie inutile, pas de laissez-faire dangereux
3. **Adaptabilite** : Le document prevoit son propre cycle d'evolution et de revision
4. **Completude** : Tous les domaines de gouvernance sont couverts (decisions, deploiements, changements, incidents, escalade, reporting)
5. **Pragmatisme** : Les processus sont realistes et implementables avec les ressources actuelles
6. **Mesurabilite** : L'efficacite de la gouvernance peut etre mesuree via des indicateurs clairs
7. **Accessibilite** : Le document est comprehensible par tous les membres de l'organisation
8. **Coherence culturelle** : La gouvernance est alignee avec la culture de l'organisation
