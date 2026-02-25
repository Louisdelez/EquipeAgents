# Technical Specification -- Methodologie et Questions

## Methodologie de conversation detaillee

### Phase 1 -- Comprehension du contexte (10 minutes)
Avant de parler d'architecture, comprends le probleme.
- Quel probleme resout-on ? (Reference au PRD)
- Quelles sont les contraintes (equipe, budget, timeline, existant) ?
- Quel est le niveau de maturite technique de l'equipe ?

### Phase 2 -- Exploration de l'architecture (15-20 minutes)
Plonge dans les decisions techniques.
- Architecture globale (monolithe, microservices, serverless ?)
- Stack technique couche par couche
- Modele de donnees
- APIs et interfaces
- Infrastructure et deployment

### Phase 3 -- Exigences transverses (10-15 minutes)
Les sujets que les gens oublient toujours.
- Securite
- Performance et scalabilite
- Observabilite (monitoring, logging, alerting)
- Disaster recovery et backup
- Migration (si applicable)

### Phase 4 -- Challenge technique (15-20 minutes)
C'est la phase cruciale. Tu dois :
- Questionner chaque choix : "Pourquoi X et pas Y ?"
- Tester les scenarios de charge : "Que se passe-t-il avec 10x le trafic prevu ?"
- Identifier les single points of failure : "Si ce composant tombe, que se passe-t-il ?"
- Evaluer la complexite operationnelle : "Qui va maintenir ca en production ? Comment debug-on un probleme a 3h du matin ?"
- Verifier l'alignement avec le PRD : "Cette architecture permet-elle de livrer TOUTES les exigences du PRD ?"

### Phase 5 -- Structuration et redaction (10 minutes)
- Organise les informations dans le template
- Verifie la completude
- Produis le document final

---

## Questions a poser a l'utilisateur

### Section 1 -- Contexte et contraintes
1. **Quel est le contexte business de ce projet ?** (Reference au PRD/Charter si disponible.)
2. **Y a-t-il un systeme existant que cette architecture remplace ou etend ?** (Si oui, decris-le : technos, limitations, dette technique.)
3. **Quelles sont les contraintes techniques incontournables ?** (Langages imposes, infrastructure existante, outils imposes, normes de securite.)
4. **Quelle est la taille et le niveau de l'equipe technique ?** (Challenge : "L'equipe est-elle a l'aise avec les technologies envisagees ou faut-il de la formation ?")
5. **Quel est le budget infrastructure ?** (Cloud, serveurs, licences.)
6. **Quel est le timeline technique ?** (Date de livraison, phases de developpement.)

### Section 2 -- Architecture globale
7. **Quel type d'architecture envisages-tu ?** (Monolithe, microservices, serverless, hybride ? Challenge : "Pourquoi ce choix ? Quels sont les trade-offs ?")
8. **Peux-tu decrire l'architecture en 3-4 blocs principaux ?** (Vue C1/C2 du modele C4.)
9. **Comment les differents composants communiquent-ils entre eux ?** (REST, gRPC, events/messaging, GraphQL ? Synchrone vs asynchrone ?)
10. **Ou l'application sera-t-elle deployee ?** (Cloud provider, on-premise, hybride ? Region(s) ?)
11. **Comment l'application sera-t-elle deployee ?** (CI/CD, containers, Kubernetes, serverless ?)

### Section 3 -- Stack technique
12. **Quel langage/framework pour le backend ?** (Challenge : "Pourquoi celui-ci ? L'equipe a-t-elle de l'experience avec ? Y a-t-il des alternatives que tu as evaluees ?")
13. **Quel langage/framework pour le frontend ?** (Memes challenges.)
14. **Quelle base de donnees ?** (Relationnelle, NoSQL, les deux ? Challenge : "Le modele de donnees est-il plutot relationnel ou oriente document ? Quels sont les patterns d'acces aux donnees ?")
15. **Quels services tiers ou APIs externes ?** (Paiement, email, analytics, auth... Challenge : "Que se passe-t-il si ce service tiers tombe ?")
16. **Quels outils de monitoring et d'observabilite ?** (Logs, metriques, traces, alertes.)

### Section 4 -- Modele de donnees
17. **Quelles sont les entites principales du modele de donnees ?** (Demande un schema ou une description des tables/collections principales.)
18. **Quelles sont les relations entre les entites ?** (1-1, 1-N, N-N.)
19. **Quels sont les volumes de donnees attendus ?** (Nombre d'enregistrements, taille, croissance prevue.)
20. **Y a-t-il des donnees sensibles (PII, donnees financieres, donnees de sante) ?** (Challenge : "Comment sont-elles protegees ? Chiffrement at rest et in transit ?")
21. **Quelle est la strategie de migration de donnees ?** (Si applicable : migration depuis un systeme existant.)

### Section 5 -- APIs et interfaces
22. **Quelles APIs le systeme expose-t-il ?** (Liste les endpoints principaux, methodes, payloads.)
23. **Quel standard d'API ?** (REST, GraphQL, gRPC ? Versioning ?)
24. **Comment l'authentification et l'autorisation sont-elles gerees ?** (OAuth, JWT, API keys, RBAC ?)
25. **Y a-t-il un rate limiting ?** (Challenge : "Que se passe-t-il si un client envoie 10 000 requetes par seconde ?")
26. **Comment les erreurs sont-elles gerees et communiquees ?** (Codes d'erreur, format, retry policy.)

### Section 6 -- Securite
27. **Quelles sont les exigences de securite specifiques ?** (Normes, certifications, contraintes reglementaires : RGPD, SOC 2, PCI-DSS...)
28. **Comment les secrets (cles API, mots de passe, certificats) sont-ils geres ?** (Vault, KMS, variables d'environnement ?)
29. **Y a-t-il eu une analyse de menaces (threat model) ?** (Challenge : "Quels sont les vecteurs d'attaque les plus probables ?")
30. **Quelle est la politique de gestion des vulnerabilites ?** (Scan des dependances, mises a jour, patch policy.)

### Section 7 -- Scalabilite et performance
31. **Quels sont les SLA/SLO vises ?** (Disponibilite, latence, throughput.)
32. **Quels sont les scenarios de charge ?** (Normal, pic, stress. Challenge : "Que se passe-t-il avec 10x le trafic prevu ?")
33. **Comment le systeme scale-t-il ?** (Horizontal, vertical, auto-scaling ? Quels composants sont les bottlenecks ?)
34. **Y a-t-il une strategie de caching ?** (Ou, quoi, combien de temps, invalidation ?)
35. **Quelle est la strategie de disaster recovery ?** (RPO, RTO, backup, failover.)

### Section 8 -- Alternatives considerees
36. **Pour chaque choix technique majeur, quelles alternatives as-tu evaluees ?** (Challenge : "Pour chaque alternative rejetee, quelle etait la raison principale ?")
37. **Y a-t-il des choix que tu regrettes deja ou dont tu n'es pas sur ?** (Honnetete > perfection. Mieux vaut documenter les doutes.)
38. **Si tu devais refaire ce projet dans 2 ans, que ferais-tu differemment ?**
