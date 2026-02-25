# Frameworks et pieges — Security Review Document

## Frameworks de reference

### OWASP Top 10
1. **Broken Access Control** : Contournement des controles d'acces
2. **Cryptographic Failures** : Failles dans le chiffrement
3. **Injection** : SQL, NoSQL, OS, LDAP injection
4. **Insecure Design** : Failles de conception (pas de code)
5. **Security Misconfiguration** : Configurations par defaut, headers manquants
6. **Vulnerable and Outdated Components** : Dependances non patchees
7. **Identification and Authentication Failures** : Sessions, MFA, brute force
8. **Software and Data Integrity Failures** : CI/CD, deserialization
9. **Security Logging and Monitoring Failures** : Logs insuffisants
10. **Server-Side Request Forgery (SSRF)** : Requetes forgees cote serveur

### STRIDE Threat Modeling (Microsoft)
- **Spoofing** : Usurpation d'identite
- **Tampering** : Modification non autorisee de donnees
- **Repudiation** : Deni d'actions effectuees
- **Information Disclosure** : Fuite d'informations
- **Denial of Service** : Indisponibilite du service
- **Elevation of Privilege** : Escalade de privileges

### NIST Cybersecurity Framework
- **Identify** : Gestion des actifs, evaluation des risques
- **Protect** : Controles d'acces, sensibilisation, protection des donnees
- **Detect** : Surveillance continue, detection d'anomalies
- **Respond** : Planification de la reponse, communication
- **Recover** : Planification de la reprise, ameliorations

### Zero Trust Architecture (Google BeyondCorp)
- Ne jamais faire confiance, toujours verifier
- Verifier explicitement chaque requete
- Accorder le moindre privilege necessaire
- Assumer la compromission (assume breach)
- Micro-segmentation du reseau
- Surveillance continue et adaptive

### SOC 2 Compliance
- **Security** : Protection contre les acces non autorises
- **Availability** : Disponibilite du systeme selon les SLA
- **Processing Integrity** : Traitement complet et precis
- **Confidentiality** : Protection des informations confidentielles
- **Privacy** : Collecte, utilisation et retention des donnees personnelles

### ISO 27001
- Systeme de management de la securite de l'information (SMSI)
- Evaluation et traitement des risques
- Controles de l'Annexe A (114 controles)
- Amelioration continue (PDCA)

### RGPD — Exigences de securite
- Privacy by design et privacy by default
- Analyse d'impact (DPIA) pour les traitements a risque
- Notification de violation dans les 72 heures
- Mesures techniques et organisationnelles appropriees

### Netflix — Security at Scale
- Chaos Security Engineering : simuler des incidents de securite
- Automated security testing dans le CI/CD
- Security self-service tools pour les equipes de dev
- Paved roads : parcours securises par defaut

---

## Pieges courants et comment les eviter

### Piege 1 — Security by obscurity
**Probleme :** Croire que cacher le code, les URLs ou les noms de services suffit a proteger le systeme.
**Solution :** La securite doit reposer sur des mecanismes cryptographiques et des controles d'acces, pas sur le secret de l'implementation.

### Piege 2 — Le "on ajoutera la securite plus tard"
**Probleme :** Reporter les mesures de securite a "apres le MVP".
**Solution :** Integrer la securite des le design (Shift Left Security). Les mesures de base (auth, chiffrement, input validation) ne sont pas optionnelles.

### Piege 3 — Focus uniquement sur le perimetre
**Probleme :** Proteger le perimetre externe mais pas les communications internes.
**Solution :** Appliquer le modele Zero Trust : chaque service authentifie et autorise chaque requete, meme en interne.

### Piege 4 — Logger tout sans rien analyser
**Probleme :** Des teraoctets de logs que personne ne regarde.
**Solution :** Definir des alertes specifiques sur les evenements critiques. Reviser les alertes regulierement. Automatiser la detection d'anomalies.

### Piege 5 — La liste de controles sans contexte
**Probleme :** Cocher des cases de compliance sans comprendre les risques reels.
**Solution :** Commencer par le threat modeling. Les controles decoulent des menaces, pas l'inverse.

### Piege 6 — Les secrets en dur dans le code
**Probleme :** API keys, mots de passe, certificats commites dans le repository.
**Solution :** Utiliser un vault (HashiCorp Vault, AWS Secrets Manager). Scanner les repos avec des outils comme GitGuardian ou truffleHog. Mettre des pre-commit hooks.

### Piege 7 — Sous-estimer le facteur humain
**Probleme :** Tous les controles techniques du monde ne protegent pas contre le phishing ou l'ingenierie sociale.
**Solution :** Former regulierement les equipes. Simuler des attaques de phishing. Implementer le MFA partout.

### Piege 8 — L'absence de plan de reponse aux incidents
**Probleme :** Decouvrir qu'on n'a pas de plan le jour ou un incident se produit.
**Solution :** Documenter le plan, assigner les roles, tester regulierement avec des exercices de table-top.

---

## Criteres de qualite du document final

1. **Exhaustivite** : Toutes les surfaces d'attaque sont identifiees et evaluees.
2. **Priorisation** : Les risques sont classes par severite et vraisemblance.
3. **Actionnabilite** : Chaque risque a des mesures de mitigation concretes avec responsable et echeance.
4. **Conformite** : Le document demontre la couverture des exigences reglementaires applicables.
5. **Clarte** : Les risques sont exprimes en termes comprehensibles par les non-specialistes securite.
6. **Tracabilite** : Chaque recommandation est liee a une menace identifiee.
7. **Realisme** : Les recommandations sont proportionnees aux risques et faisables dans le contexte de l'equipe.
8. **Evolutivite** : Le document definit une cadence de revue et de mise a jour.
9. **Mesurabilite** : Des metriques de securite sont definies pour suivre l'amelioration.
10. **Coherence** : Les mesures de securite forment un systeme coherent, pas une collection de controles isoles.
