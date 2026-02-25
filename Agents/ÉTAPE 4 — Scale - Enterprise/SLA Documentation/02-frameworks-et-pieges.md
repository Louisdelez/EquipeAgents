# Frameworks et pieges -- SLA Documentation

## Frameworks et concepts cles

### 1. Google SRE's SLO/SLI/SLA Framework
Decrit dans "Site Reliability Engineering" et "The Site Reliability Workbook". Approche scientifique de la fiabilite basee sur des metriques objectives. Concept d'error budget : la quantite d'indisponibilite "autorisee" par le SLO.

### 2. Error Budgets (Google)
L'error budget = 1 - SLO. Si le SLO est 99.9%, l'error budget est 0.1% (environ 43 minutes par mois). Quand l'error budget est consomme, on arrete les deploiements de features et on investit en fiabilite.

### 3. Amazon AWS SLA Structure
Reference industrielle pour la structure des SLA cloud. Credits progressifs (10% a 25% a 100%) en fonction du niveau de degradation. Definition tres precise des termes (Monthly Uptime Percentage, Downtime, Service Credit).

### 4. Uptime Institute Tier Classification
Classification des datacenters en 4 tiers : Tier I (99.671%), Tier II (99.749%), Tier III (99.982%), Tier IV (99.995%). Utile comme reference pour comprendre ce que signifie chaque niveau de disponibilite.

### 5. ITIL Service Level Management
Processus ITSM pour la gestion des niveaux de service : definition, negociation, monitoring, reporting, revue. Adapte aux contextes enterprise traditionnels.

### 6. Stripe's Reliability Commitments
Exemple de SLA de reference dans la fintech : transparence extreme, status page publique, post-mortems publics, metriques de fiabilite publiees.

## Table de reference : les "9s" de disponibilite

| Disponibilite | Indisponibilite/an | Indisponibilite/mois | Indisponibilite/semaine |
|--------------|--------------------|-----------------------|------------------------|
| 99% (deux 9s) | 3.65 jours | 7.31 heures | 1.68 heures |
| 99.5% | 1.83 jours | 3.65 heures | 50.4 minutes |
| 99.9% (trois 9s) | 8.77 heures | 43.83 minutes | 10.08 minutes |
| 99.95% | 4.38 heures | 21.92 minutes | 5.04 minutes |
| 99.99% (quatre 9s) | 52.60 minutes | 4.38 minutes | 1.01 minutes |
| 99.999% (cinq 9s) | 5.26 minutes | 26.30 secondes | 6.05 secondes |

---

## Pieges courants et comment les eviter

### Piege 1 -- Le SLA irrealiste
**Probleme :** Promettre 99.99% d'uptime quand l'equipe n'a pas de systeme de failover, pas de monitoring avance, et pas d'astreinte 24/7.
**Solution :** Base le SLA sur les donnees historiques. Si votre uptime reel est de 99.7% sur les 12 derniers mois, un SLA a 99.5% est deja ambitieux. Monter a 99.9% necessite des investissements significatifs.

### Piege 2 -- La definition floue de "disponible"
**Probleme :** "Le service est disponible" sans definir ce que ca signifie. Un service qui repond en 30 secondes est-il disponible ? Avec 10% d'erreurs ?
**Solution :** Definissez "disponible" avec precision : "Une requete est consideree reussie si elle retourne un code HTTP 2xx en moins de 500ms". Point.

### Piege 3 -- Les exclusions abusives
**Probleme :** Tellement d'exclusions que le SLA ne couvre jamais rien en pratique. "Maintenance planifiee, pic de charge, probleme reseau, mise a jour, migration..." -- il ne reste plus rien.
**Solution :** Les exclusions doivent etre limitees et raisonnables. Chaque exclusion doit etre justifiee et ne doit pas vider le SLA de sa substance. Le client doit sentir que le SLA le protege reellement.

### Piege 4 -- L'absence de monitoring
**Probleme :** Un SLA sans monitoring = un engagement aveugle. Vous ne savez meme pas si vous le respectez.
**Solution :** Avant de signer un SLA, verifiez que vous pouvez mesurer chaque SLI en temps reel. Si vous ne pouvez pas le mesurer, vous ne pouvez pas vous y engager.

### Piege 5 -- Le SLA identique au SLO
**Probleme :** Aucune marge de securite entre l'objectif interne (SLO) et l'engagement contractuel (SLA). Au moindre incident, le SLA est breache.
**Solution :** SLA = SLO - marge de securite. Si SLO = 99.9%, SLA = 99.5% minimum. La marge est votre error budget pour les incidents imprevus.

### Piege 6 -- Ignorer les dependances
**Probleme :** Promettre 99.99% de disponibilite quand votre provider cloud garantit 99.9%. Votre disponibilite ne peut pas etre superieure a celle de votre dependance la moins fiable.
**Solution :** Calculez la disponibilite composite : si vous dependez de 3 services a 99.9%, votre disponibilite theorique maximale est 99.7% (0.999^3). Tenez-en compte dans vos engagements.

### Piege 7 -- Le SLA sans consequence
**Probleme :** Un SLA sans mecanisme de compensation significatif n'est pas un engagement, c'est une declaration d'intention.
**Solution :** Les compensations doivent etre automatiques (pas seulement sur reclamation) et significatives. Un credit de 10% pour un SLA breache est le minimum. Les clients enterprise attendent des compensations progressives.

---

## Criteres de qualite du document final

1. **Mesurabilite** : Chaque engagement est adosse a un SLI mesurable en temps reel
2. **Realisme** : Les engagements sont bases sur des donnees historiques et sont atteignables
3. **Clarte** : Les definitions sont precises et sans ambiguite (definition d'uptime, de degradation, de maintenance)
4. **Equilibre** : Les exclusions sont raisonnables et ne vident pas le SLA de sa substance
5. **Enforceabilite** : Les mecanismes de compensation sont clairs, quantifies et applicables
6. **Hierarchie SLI/SLO/SLA** : La distinction est claire et la marge entre SLO et SLA est suffisante
7. **Transparence** : Le client peut verifier independamment le respect du SLA
8. **Evolutivite** : Le document prevoit un cycle de revue et des mecanismes de mise a jour
