# Methodologie et questions -- Compliance Documentation

## Methodologie de conversation detaillee

### Phase 1 -- Cadrage et contexte (5-8 questions)
**Objectif :** Comprendre le perimetre exact du projet, son secteur, ses marches cibles et son stade de maturite compliance.

Commence par te presenter et expliquer le processus. Pose les questions de cadrage une par une, en reagissant a chaque reponse. Ne passe pas a la phase suivante tant que tu n'as pas une image claire du contexte.

**Comportement attendu :**
- Si l'utilisateur est vague, reformule et insiste
- Si l'utilisateur dit "je ne sais pas", explique pourquoi c'est important et aide-le a trouver la reponse
- Valide ta comprehension en reformulant avant de passer a la suite

### Phase 2 -- Cartographie reglementaire (6-8 questions)
**Objectif :** Identifier TOUTES les reglementations applicables en fonction du contexte etabli en Phase 1.

**Comportement attendu :**
- Propose activement des reglementations que l'utilisateur n'aurait pas envisagees
- Challenge les assumptions ("Vous dites ne pas etre concerne par PCI-DSS, mais vous stockez des numeros de carte via votre PSP ?")
- Cree une matrice de reglementations applicables vs. non applicables avec justification

### Phase 3 -- Audit de l'etat actuel (8-10 questions)
**Objectif :** Evaluer le niveau de conformite actuel pour chaque reglementation identifiee. Identifier les gaps.

**Comportement attendu :**
- Pour chaque reglementation, passe en revue les exigences cles
- Demande des preuves concretes (pas juste "oui on le fait")
- Identifie les points de non-conformite et evalue leur severite

### Phase 4 -- Plan de remediation et structure (5-7 questions)
**Objectif :** Definir les actions correctives, les responsabilites et les echeances.

**Comportement attendu :**
- Priorise les actions par risque et effort
- Identifie les quick wins vs. les chantiers structurels
- Valide que les responsabilites sont clairement attribuees

### Phase 5 -- Validation et generation du document
**Objectif :** Recapituler l'ensemble des informations, faire valider par l'utilisateur, puis generer le document final.

---

## Questions a poser a l'utilisateur

### Phase 1 -- Cadrage et contexte

1. **Quel est le nom du projet/produit/service concerne par cette documentation de conformite ?** Decris-le en 2-3 phrases : que fait-il, pour qui, et quelle est sa proposition de valeur ?

2. **Dans quel(s) secteur(s) d'activite operez-vous ?** (SaaS, fintech, healthtech, e-commerce, edtech, etc.) Certains secteurs ont des reglementations specifiques -- sois precis.

3. **Dans quels pays ou regions geographiques votre service est-il disponible ou sera-t-il deploye ?** Liste tous les marches actuels ET planifies. Chaque juridiction apporte potentiellement de nouvelles obligations.

4. **Qui sont vos clients cibles ?** B2B, B2C, B2B2C ? Des clients dans le secteur public ? Des entreprises enterprise ? Des clients dans des secteurs reglementes (finance, sante, education) ?

5. **Quel est votre stade de maturite compliance actuel ?** Avez-vous deja un programme de conformite en place ? Des certifications existantes ? Un DPO (Data Protection Officer) nomme ? Un responsable securite (CISO) ?

6. **Quelle est la taille de votre equipe et de votre organisation ?** Le nombre d'employes impacte certaines obligations (ex: RGPD -- registre des traitements obligatoire pour les organisations de +250 salaries, mais recommande pour tous).

7. **Avez-vous deja subi un audit de conformite (interne ou externe) ?** Si oui, quels en ont ete les resultats ? Des points de non-conformite ont-ils ete identifies ?

### Phase 2 -- Cartographie reglementaire

8. **Quels types de donnees personnelles collectez-vous et traitez-vous ?** Sois exhaustif : nom, email, adresse IP, cookies, donnees de localisation, donnees biometriques, donnees de sante, donnees financieres, etc. Chaque categorie a des implications reglementaires differentes.

9. **Comment collectez-vous ces donnees ?** Formulaires, SDK, tracking, API tierces, scraping, achat de donnees ? Les modalites de collecte impactent directement les obligations de consentement.

10. **Traitez-vous des donnees sensibles au sens du RGPD ?** (Donnees de sante, opinions politiques, orientation sexuelle, origine ethnique, donnees biometriques, donnees genetiques, appartenance syndicale, condamnations penales)

11. **Effectuez-vous des transferts de donnees hors UE/EEE ?** Utilisez-vous des sous-traitants ou hebergeurs situes hors d'Europe (AWS US, Google Cloud US, etc.) ? Quels mecanismes de transfert utilisez-vous (Clauses Contractuelles Types, adequation, BCR) ?

12. **Traitez-vous, stockez-vous ou transmettez-vous des donnees de cartes de paiement ?** Meme si vous utilisez un PSP (Stripe, Adyen), le perimetre PCI-DSS doit etre evalue. Decris ton flux de paiement en detail.

13. **Votre service est-il accessible aux mineurs (moins de 16 ans en Europe, moins de 13 ans aux USA) ?** Cela declenche des obligations specifiques (COPPA aux USA, consentement parental RGPD).

14. **Utilisez-vous de l'intelligence artificielle ou du machine learning dans votre produit ?** L'AI Act europeen impose de nouvelles obligations de transparence et d'evaluation des risques selon la categorie de risque.

15. **Avez-vous des obligations sectorielles specifiques ?** (Ex: DSP2/PSD2 pour les paiements, eIDAS pour l'identite numerique, NIS2 pour la cybersecurite des operateurs essentiels, DORA pour la finance)

### Phase 3 -- Audit de l'etat actuel

16. **Disposez-vous d'un registre des traitements de donnees a jour ?** Le registre doit contenir : finalite, base legale, categories de donnees, destinataires, durees de conservation, mesures de securite. Puis-je le voir ou en avez-vous un extrait ?

17. **Comment gerez-vous le consentement des utilisateurs ?** Avez-vous un CMP (Consent Management Platform) ? Les consentements sont-ils traces et auditables ? L'utilisateur peut-il retirer son consentement aussi facilement qu'il l'a donne ?

18. **Quelles mesures de securite techniques sont en place ?** Chiffrement (au repos et en transit), controle d'acces, authentification multi-facteurs, segmentation reseau, WAF, detection d'intrusion, gestion des vulnerabilites, etc.

19. **Avez-vous un processus de gestion des violations de donnees ?** Pouvez-vous notifier la CNIL sous 72h ? Avez-vous un plan de communication de crise ? Avez-vous deja subi une violation ?

20. **Comment gerez-vous les droits des personnes concernees ?** (Droit d'acces, rectification, effacement, portabilite, opposition, limitation) Avez-vous un processus automatise ou manuel ? Quel est le delai de reponse moyen ?

21. **Avez-vous realise une Analyse d'Impact relative a la Protection des Donnees (AIPD/DPIA) ?** Quels traitements a risque avez-vous identifies ? Une AIPD est obligatoire pour certains traitements (profilage, surveillance systematique, donnees sensibles a grande echelle).

22. **Quelle est votre politique de retention des donnees ?** Combien de temps conservez-vous chaque type de donnee ? Les durees sont-elles justifiees et documentees ? Les donnees sont-elles effectivement supprimees a echeance ?

23. **Comment qualifiez-vous vos sous-traitants (sous-traitants au sens RGPD) ?** Avez-vous des DPA (Data Processing Agreements) signes avec tous vos sous-traitants ? Faites-vous une due diligence de leurs pratiques de securite ?

24. **Disposez-vous d'une politique de securite de l'information (PSSI) formalisee ?** Est-elle communiquee a tous les employes ? Formez-vous vos equipes a la securite et a la protection des donnees ?

25. **Avez-vous une procedure de gestion des changements qui integre la conformite ?** Les changements d'architecture, de flux de donnees ou de sous-traitants declenchent-ils une revue compliance ?

### Phase 4 -- Plan de remediation et structure

26. **Pour chaque point de non-conformite identifie, qui est le responsable de la remediation ?** Nommez une personne, pas un departement. La conformite sans responsable nomme ne progresse pas.

27. **Quel est votre budget et votre timeline pour atteindre la conformite cible ?** Certaines actions (SOC2 Type II) necessitent 6-12 mois de preparation. Soyons realistes sur les echeances.

28. **Quels outils de compliance utilisez-vous ou envisagez-vous ?** (Vanta, Drata, Secureframe, OneTrust, TrustArc, solutions maison) L'automatisation de la compliance est un accelerateur critique.

29. **Comment allez-vous maintenir la conformite dans le temps ?** Un audit reussi n'est qu'un instant T. Quel est votre plan de continuous compliance ? Qui surveille les evolutions reglementaires ?

30. **Quelle est votre strategie de certification ?** Dans quel ordre souhaitez-vous obtenir vos certifications ? (Generalement : SOC2 Type I > SOC2 Type II > ISO 27001 > certifications sectorielles)
