# Frameworks et pieges -- Compliance Documentation

## Frameworks reglementaires principaux

### 1. RGPD / GDPR (Reglement General sur la Protection des Donnees)
Regulation europeenne sur la protection des donnees personnelles. Principes cles : minimisation des donnees, consentement, droit a l'oubli, portabilite, notification de violation sous 72h.

### 2. SOC2 Type II (Service Organization Control)
Framework de l'AICPA base sur 5 Trust Service Criteria : securite, disponibilite, integrite du traitement, confidentialite, vie privee. L'audit Type II evalue l'efficacite operationnelle sur une periode (generalement 6-12 mois).

### 3. ISO 27001
Norme internationale pour les systemes de management de la securite de l'information (SMSI). Approche basee sur les risques avec 114 controles dans l'Annexe A.

### 4. PCI-DSS (Payment Card Industry Data Security Standard)
12 exigences pour securiser les donnees de cartes de paiement. Obligatoire si vous traitez, stockez ou transmettez des donnees de carte.

### 5. HIPAA (Health Insurance Portability and Accountability Act)
Reglementation americaine pour la protection des donnees de sante (PHI). Applicable si vous operez dans le secteur sante aux USA.

### 6. CCPA / CPRA (California Consumer Privacy Act)
Reglementation californienne sur la vie privee des consommateurs. Droits similaires au RGPD adaptes au contexte americain.

## Best practices des grandes entreprises

### Amazon -- Compliance as Code
Automatiser les controles de conformite via AWS Config Rules, CloudTrail, et des politiques declaratives. La conformite n'est pas un audit ponctuel mais un etat continu.

### Google -- Compliance Automation
Utilisation de BeyondCorp pour le Zero Trust, automatisation des audits via des pipelines CI/CD integrant des checks de conformite, documentation vivante.

### Continuous Compliance Monitoring
Approche ou la conformite est verifiee en continu (pas seulement lors des audits) via des outils comme Vanta, Drata, Secureframe, ou des solutions maison.

### Shift-Left Compliance
Integrer les exigences de conformite des la phase de design et de developpement, pas en fin de projet.

---

## Pieges courants et comment les eviter

### Piege 1 -- La conformite "checkbox"
**Probleme :** Traiter la conformite comme une liste de cases a cocher sans comprendre l'esprit des reglementations.
**Solution :** Insiste sur la comprehension du POURQUOI de chaque exigence. Un controle coche mais mal implemente est pire qu'un controle non coche (faux sentiment de securite).

### Piege 2 -- Ignorer le perimetre reel
**Probleme :** Sous-estimer le perimetre des donnees traitees ou des systemes concernes.
**Solution :** Fais un mapping exhaustif des flux de donnees. Chaque API, chaque integration, chaque sous-traitant peut elargir le perimetre.

### Piege 3 -- La confusion roles RGPD
**Probleme :** Confondre responsable de traitement, sous-traitant et responsable conjoint.
**Solution :** Pour chaque traitement, clarifie : qui determine les finalites et les moyens ? Cela determine les obligations respectives.

### Piege 4 -- Oublier les transferts internationaux
**Probleme :** Utiliser des services cloud US sans mecanisme de transfert adequat post-Schrems II.
**Solution :** Audite chaque sous-traitant, verifie la localisation des donnees, mets en place des CCT et des mesures supplementaires si necessaire.

### Piege 5 -- La documentation statique
**Probleme :** Creer un document de conformite une fois et ne jamais le mettre a jour.
**Solution :** Definis un cycle de revue (trimestriel minimum), des triggers de mise a jour (nouveau traitement, nouveau sous-traitant, incident), et un responsable de la documentation.

### Piege 6 -- Negliger la formation
**Probleme :** Avoir des politiques parfaites que personne ne connait ni n'applique.
**Solution :** Integre un plan de formation dans la documentation. La conformite est l'affaire de tous, pas seulement du DPO.

### Piege 7 -- Sous-estimer les delais de certification
**Probleme :** Promettre SOC2 Type II a un client pour dans 3 mois alors que le processus prend 6-12 mois.
**Solution :** Sois realiste sur les timelines. Un SOC2 Type I peut etre un jalon intermediaire.

---

## Criteres de qualite du document final

1. **Exhaustivite** : Toutes les reglementations applicables sont identifiees et couvertes
2. **Precision** : Chaque exigence est rattachee a un article ou une clause specifique de la reglementation
3. **Actionnabilite** : Chaque point de non-conformite a un responsable, une action corrective et une echeance
4. **Auditabilite** : Le document fournit suffisamment d'elements pour qu'un auditeur externe puisse evaluer la conformite
5. **Maintenabilite** : Le document prevoit son propre cycle de mise a jour et ses triggers de revision
6. **Priorisation** : Les risques sont classes par severite et les actions par priorite
7. **Tracabilite** : Chaque decision de conformite est justifiee et documentee
8. **Lisibilite** : Le document est comprehensible par un public non-juriste (equipes tech, management)
