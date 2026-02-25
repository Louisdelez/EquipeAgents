# Frameworks et pieges -- Legal Review Document

## Methodologies et approches

### 1. Legal Design Thinking
Approche qui applique les principes du design thinking au droit : centree utilisateur, iterative, visuelle. Rendre les documents juridiques comprehensibles et actionnables par des non-juristes.

### 2. Privacy by Design (Ann Cavoukian)
Les 7 principes fondateurs : proactif et non reactif, protection par defaut, integree au design, fonctionnalite complete, securite de bout en bout, visibilite et transparence, respect de la vie privee de l'utilisateur.

### 3. Stripe's Approach to Global Legal Compliance
Modularite juridique par pays, automatisation de la compliance, contrats adaptatifs selon les juridictions, approche "legal as a platform".

### 4. IP Audit Frameworks
Methodologie structuree d'audit de propriete intellectuelle : identification, classification, evaluation, protection, monetisation.

### 5. Contract Lifecycle Management (CLM)
Gestion du cycle de vie complet des contrats : creation, negociation, execution, suivi, renouvellement, resiliation.

### 6. Open Source License Compliance (FOSS)
Frameworks de conformite aux licences open source : classification des licences (permissives vs. copyleft), obligations associees, risques de contamination.

### 7. Data Processing Agreements Best Practices
Standards pour les accords de traitement de donnees : clauses essentielles, mecanismes de transfert, obligations de securite, droits d'audit.

## References juridiques cles

- Code civil et Code de commerce (droit francais)
- Reglement General sur la Protection des Donnees (RGPD/GDPR)
- Directive sur le droit d'auteur dans le marche unique numerique
- Convention de Berne pour la protection des oeuvres litteraires et artistiques
- Accord sur les ADPIC (TRIPS) - OMC
- Uniform Commercial Code (UCC) -- si marche US
- AI Act europeen (si applicable)

---

## Pieges courants et comment les eviter

### Piege 1 -- L'IP qui n'appartient pas a l'entreprise
**Probleme :** Le code a ete ecrit par un co-fondateur avant la creation de la societe, ou par un freelance sans clause de cession d'IP. L'entreprise utilise du code dont elle n'est pas proprietaire.
**Solution :** Verifie systematiquement la chaine de cession d'IP pour chaque contributeur. Un acte de cession retroactif peut etre necessaire.

### Piege 2 -- La contamination open source
**Probleme :** Utilisation de code sous licence copyleft (GPL, AGPL) dans un produit proprietaire, creant une obligation de divulgation du code source.
**Solution :** Fais un audit complet des dependances open source. Utilise des outils comme FOSSA, Snyk ou Black Duck pour identifier les licences.

### Piege 3 -- Les CGV generiques copiees d'internet
**Probleme :** Des CGV/CGU non adaptees au produit, copiees d'un template generique, qui ne protegent pas reellement l'entreprise et peuvent meme creer des obligations non souhaitees.
**Solution :** Insiste sur des CGV/CGU sur mesure, redigees ou au minimum revues par un avocat specialise, adaptees au modele economique et aux juridictions cibles.

### Piege 4 -- L'absence de pacte d'associes
**Probleme :** Pas de pacte d'associes = pas de regles du jeu en cas de conflit entre fondateurs. Premier motif de mort des startups.
**Solution :** Un pacte d'associes est non-negotiable. Il doit couvrir les scenarios desagreables : depart d'un fondateur, desaccord strategique, dilution, etc.

### Piege 5 -- La sous-estimation des risques internationaux
**Probleme :** Vendre un produit dans un pays sans connaitre ses contraintes juridiques specifiques (ex: droit de la consommation allemand extremement protecteur, class actions US).
**Solution :** Pour chaque nouveau marche, faire une analyse juridique specifique AVANT de se lancer.

### Piege 6 -- La limitation de responsabilite illusoire
**Probleme :** Des clauses de limitation de responsabilite qui ne sont pas enforceables dans certaines juridictions (ex: les clauses abusives en droit de la consommation francais).
**Solution :** Verifier l'enforceabilite des clauses dans chaque juridiction cible. Adapter les contrats en consequence.

### Piege 7 -- Le non-respect du droit du travail
**Probleme :** Clauses de non-concurrence sans contrepartie financiere (nulles en droit francais), confusion salarie/freelance (risque de requalification), non-respect des conventions collectives.
**Solution :** Faire auditer les contrats de travail par un avocat en droit social. Chaque pays a ses propres regles.

---

## Criteres de qualite du document final

1. **Exhaustivite juridique** : Tous les domaines du droit pertinents sont couverts (PI, contrats, donnees, travail, reglementaire, fiscal)
2. **Precision des references** : Chaque risque est rattache a un texte de loi, une reglementation ou une jurisprudence specifique
3. **Quantification des risques** : Chaque risque est evalue en termes de probabilite et d'impact financier/reputationnel
4. **Actionnabilite** : Chaque risque a une recommandation concrete avec un responsable et une echeance
5. **Priorisation** : Les risques sont classes par criticite pour guider l'allocation des ressources
6. **Lisibilite** : Le document est comprehensible par un non-juriste tout en restant juridiquement rigoureux
7. **Evolutivite** : Le document prevoit son cycle de mise a jour et les triggers de revision
8. **Coherence** : Les recommandations sont coherentes entre elles et avec la strategie business de l'entreprise
