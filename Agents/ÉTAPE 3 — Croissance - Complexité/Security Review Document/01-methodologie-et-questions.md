# Methodologie et questions — Security Review Document

## Methodologie de conversation detaillee

### Etape 1 — Cartographier le systeme (8-10 minutes)
Impossible de securiser ce qu'on ne connait pas. Commence par dresser une carte complete du systeme.

**Actions :**
- Comprendre l'architecture globale (composants, flux de donnees, integrations)
- Identifier les points d'entree et les surfaces d'attaque
- Lister les actifs critiques (donnees, services, credentials)
- Comprendre l'environnement de deploiement

### Etape 2 — Classifier les donnees et actifs (5-8 minutes)
Toutes les donnees n'ont pas la meme valeur. La classification guide la proportionnalite des mesures.

**Actions :**
- Classifier chaque type de donnee (publique, interne, confidentielle, restreinte)
- Identifier les donnees reglementees (RGPD, PCI-DSS, HIPAA)
- Evaluer l'impact d'une compromission pour chaque categorie
- Documenter les flux de donnees sensibles

### Etape 3 — Modeliser les menaces (10-15 minutes)
C'est le coeur de la revue. Utiliser STRIDE pour identifier systematiquement les menaces.

**Actions :**
- Appliquer STRIDE a chaque composant et flux de donnees
- Evaluer la vraisemblance et l'impact de chaque menace
- Croiser avec l'OWASP Top 10
- Prioriser les menaces par niveau de risque

### Etape 4 — Evaluer les controles existants (5-8 minutes)
Quelles protections sont deja en place ? Sont-elles suffisantes ?

**Actions :**
- Inventorier les mesures de securite existantes
- Evaluer leur efficacite face aux menaces identifiees
- Identifier les gaps entre menaces et controles
- Verifier la configuration des controles existants

### Etape 5 — Definir les recommandations (8-10 minutes)
Pour chaque gap identifie, proposer des mesures concretes et priorisees.

**Actions :**
- Proposer des controles pour chaque risque non couvert
- Prioriser par criticite et faisabilite
- Definir les mecanismes de reponse aux incidents
- Planifier la surveillance et la detection

### Etape 6 — Conformite et validation (5 minutes)
S'assurer que le tout repond aux exigences reglementaires et standards.

**Actions :**
- Verifier la couverture des exigences reglementaires
- Valider la coherence globale du document
- Identifier les points de revue periodique
- Definir les metriques de suivi de la securite

---

## Questions a poser a l'utilisateur

### Bloc 1 — Architecture et perimetre
1. Decris l'architecture de ton systeme : quels sont les principaux composants (frontend, backend, base de donnees, services tiers) et comment communiquent-ils entre eux ?
2. Ou est deploye ton systeme ? (Cloud public AWS/GCP/Azure, cloud prive, on-premise, hybride) Quels services manages utilises-tu ?
3. Quels sont les points d'entree du systeme ? (API publique, interface web, app mobile, webhooks, file upload, CLI...)
4. Quelles integrations tierces existent ? (Payment providers, auth providers, CDN, email, analytics...) Quelles donnees leur partages-tu ?
5. Quel est le diagramme de flux de donnees ? Ou les donnees sont-elles creees, traitees, stockees et transmises ?

### Bloc 2 — Classification des donnees
6. Quels types de donnees manipule ton systeme ? Classe-les par sensibilite : publiques, internes, confidentielles, restreintes.
7. Manipules-tu des donnees personnelles au sens du RGPD ? Lesquelles ? As-tu un registre des traitements ?
8. Manipules-tu des donnees de paiement ? (Numeros de carte, IBAN...) Es-tu soumis au PCI-DSS ?
9. Ou sont stockees les donnees sensibles ? (Base de donnees, fichiers, cache, logs...) Sont-elles chiffrees au repos ?
10. Les donnees sont-elles transmises chiffrees en transit ? (TLS 1.2+ partout, y compris entre services internes ?)

### Bloc 3 — Authentification et autorisation
11. Comment les utilisateurs s'authentifient-ils ? (Email/mot de passe, OAuth2, SSO, MFA...) Decris le flux complet.
12. Quelle est ta politique de mots de passe ? (Longueur minimale, complexite, rotation, hash algorithm) Utilises-tu bcrypt/argon2 ?
13. As-tu du multi-factor authentication (MFA) ? Pour quels utilisateurs et quels scenarios ?
14. Comment geres-tu les sessions ? (JWT, cookies, tokens opaques) Quelle est la duree de vie des tokens ?
15. Comment geres-tu les permissions et les roles ? (RBAC, ABAC, ACL) Decris les differents niveaux d'acces.

### Bloc 4 — Menaces et vulnerabilites
16. As-tu deja subi un incident de securite ou un test d'intrusion ? Quels en etaient les resultats ?
17. Comment geres-tu les dependances de ton application ? As-tu un processus de scan de vulnerabilites (Snyk, Dependabot, etc.) ?
18. Tes endpoints sont-ils proteges contre les injections ? (SQL injection, XSS, CSRF) Quelles protections sont en place ?
19. Comment geres-tu les fichiers uploades ? (Validation du type, scan antivirus, stockage isole, limites de taille)
20. As-tu des mecanismes de rate limiting et de protection contre les DDoS ? Quels sont les seuils ?

### Bloc 5 — Logging, monitoring et reponse
21. Quels evenements de securite traces-tu dans les logs ? (Connexions, echecs d'auth, changements de permissions, acces aux donnees sensibles)
22. Combien de temps conserves-tu les logs de securite ? Sont-ils proteges contre la modification ?
23. As-tu un systeme d'alerte pour les comportements anormaux ? (Brute force, acces inhabituels, volumes anormaux)
24. As-tu un plan de reponse aux incidents documente ? Qui est notifie et dans quel delai en cas de breche ?
25. Fais-tu des backups reguliers ? Sont-ils chiffres ? Testes-tu regulierement la restauration ?

### Bloc 6 — Conformite et gouvernance
26. A quelles reglementations es-tu soumis ? (RGPD, PCI-DSS, HIPAA, SOC2, ISO 27001...) As-tu des audits reguliers ?
27. As-tu une politique de gestion des secrets ? (API keys, mots de passe de BDD, certificats) Utilises-tu un vault ?
28. Comment geres-tu les acces des employes ? (Onboarding/offboarding, revue periodique des acces, principe du moindre privilege)
29. As-tu un processus de revue de code du point de vue securite ? (SAST, DAST, peer review securite)
30. Quelle est ta politique de patching ? Quel est le delai maximum entre la publication d'un CVE critique et son application ?
