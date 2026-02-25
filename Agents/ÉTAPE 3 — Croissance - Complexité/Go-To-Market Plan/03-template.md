# Template — Go-To-Market Plan

## Instructions de rendu

1. **Format :** Le document final doit etre genere en Markdown (.md) propre et structure.
2. **Chiffres :** Chaque metrique et chaque budget doit avoir une valeur concrete, meme estimee.
3. **Coherence :** Le positionnement, le pricing, les canaux et le messaging doivent raconter la meme histoire.
4. **Executabilite :** Le plan doit etre suffisamment detaille pour que l'equipe puisse commencer a executer des lundi.
5. **Livrables :** A la fin de la conversation, genere le document .md complet en un seul bloc de code copiable.
6. **Verification :** Avant de generer le document final, fais un recapitulatif de la strategie et demande validation a l'utilisateur.
7. **Pragmatisme :** Adapte le plan aux ressources reelles de l'utilisateur. Un plan pour une startup de 3 personnes n'est pas un plan pour une equipe GTM de 50.

---

## Template du document final

```markdown
# Go-To-Market Plan — [Nom du produit]

**Date :** [JJ/MM/AAAA]
**Auteur(s) :** [Noms]
**Statut :** [Brouillon / En revue / Valide]
**Version :** [1.0]

---

## 1. Resume executif

[2-3 paragraphes : le produit, le marche, la strategie en un coup d'oeil. Un lecteur presse doit comprendre l'essentiel en 60 secondes.]

---

## 2. Public cible

### 2.1 Segmentation du marche
| Segment | Description | Taille estimee | Priorite | Justification |
|---------|------------|---------------|----------|---------------|
| [Segment A — Beachhead] | [Description precise] | [X entreprises / Y utilisateurs] | P0 | [Pourquoi en premier] |
| [Segment B] | [Description precise] | [X entreprises / Y utilisateurs] | P1 | [Pourquoi ensuite] |
| [Segment C] | [Description precise] | [X entreprises / Y utilisateurs] | P2 | [Potentiel futur] |

### 2.2 Persona principal — [Nom du persona]
- **Role :** [Titre, responsabilites]
- **Entreprise type :** [Taille, secteur, stade]
- **Probleme quotidien :** [Description du pain point principal]
- **Solution actuelle :** [Comment il/elle resout le probleme aujourd'hui]
- **Criteres de decision :** [Ce qui compte pour choisir une solution]
- **Objections probables :** [Pourquoi il/elle hesiterait]
- **Ou le/la trouver :** [Canaux, communautes, evenements]

### 2.3 Buyer vs User vs Decision-Maker
| Role | Profil | Motivation | Message cle |
|------|--------|-----------|-------------|
| [Utilisateur] | [Profil] | [Ce qu'il/elle veut] | [Message adapte] |
| [Acheteur] | [Profil] | [Ce qu'il/elle veut] | [Message adapte] |
| [Decision-maker] | [Profil] | [Ce qu'il/elle veut] | [Message adapte] |

---

## 3. Proposition de valeur

### 3.1 Enonce de positionnement
> Pour **[segment cible]**, qui **[probleme/besoin]**,
> **[nom du produit]** est **[categorie]**
> qui **[benefice principal]**.
> Contrairement a **[alternative/concurrent]**,
> notre produit **[differenciation cle]**.

### 3.2 Benefices cles
| # | Benefice | Preuve | Resonance segment |
|---|---------|--------|------------------|
| 1 | [Benefice principal] | [Metrique, temoignage, demo] | [Quel segment] |
| 2 | [Benefice secondaire] | [Preuve] | [Quel segment] |
| 3 | [Benefice tertiaire] | [Preuve] | [Quel segment] |

### 3.3 Strategy Canvas (Blue Ocean)
| Facteur concurrentiel | Concurrent A | Concurrent B | Notre produit |
|----------------------|-------------|-------------|--------------|
| [Prix] | [Eleve] | [Moyen] | [Bas] |
| [Facilite d'utilisation] | [Faible] | [Moyen] | [Eleve] |
| [Fonctionnalites] | [Tres eleve] | [Eleve] | [Moyen — focus] |
| [Support] | [Faible] | [Moyen] | [Eleve] |
| [Integration] | [Eleve] | [Faible] | [Eleve] |

---

## 4. Positionnement concurrentiel

### 4.1 Paysage concurrentiel
| Concurrent | Forces | Faiblesses | Part de marche estimee | Notre avantage |
|-----------|--------|-----------|----------------------|---------------|
| [Concurrent A] | [Forces] | [Faiblesses] | [X%] | [Notre avantage specifique] |
| [Concurrent B] | [Forces] | [Faiblesses] | [X%] | [Notre avantage specifique] |
| [Statu quo / Excel] | [Gratuit, connu] | [Manuel, erreurs] | [Y%] | [Automatisation, fiabilite] |

### 4.2 Moat (avantage defensif)
[Quel est l'avantage concurrentiel durable ? Network effects, data moat, switching costs, brand, technology...]

---

## 5. Canaux de distribution et acquisition

### 5.1 Strategie de croissance
[PLG / Sales-Led / Community-Led / Hybrid — justification du choix]

### 5.2 Canaux d'acquisition
| Canal | Type | Phase | Budget | Metrique cible | Priorite |
|-------|------|-------|--------|---------------|----------|
| [Content marketing / SEO] | Organic | Toutes | [$X/mois] | [Y visiteurs/mois] | P0 |
| [Product Hunt launch] | One-shot | Lancement | [$0] | [Z sign-ups] | P0 |
| [LinkedIn Ads] | Paid | Post-lancement | [$X/mois] | [CAC < $Y] | P1 |
| [Partnerships] | Partner | Croissance | [$X/mois] | [Z leads/mois] | P1 |
| [Referral program] | Viral | Croissance | [$X/referral] | [K-factor > 0.5] | P2 |

### 5.3 Funnel d'acquisition (AARRR)
| Etape | Action utilisateur | Metrique | Cible | Outil de mesure |
|-------|-------------------|---------|-------|----------------|
| **Acquisition** | [Visite le site] | [Visiteurs uniques/mois] | [X] | [Google Analytics] |
| **Activation** | [Cree un compte + complete onboarding] | [% visiteurs -> activated] | [X%] | [Mixpanel] |
| **Retention** | [Revient et utilise la feature cle] | [Retention J7, J30] | [X%] | [Amplitude] |
| **Revenue** | [Upgrade vers plan payant] | [Taux de conversion free->paid] | [X%] | [Stripe] |
| **Referral** | [Invite un collegue] | [K-factor, NPS] | [>0.5, >40] | [Custom + Delighted] |

---

## 6. Pricing

### 6.1 Modele de prix
| Plan | Prix | Cible | Fonctionnalites cles | Limite |
|------|-----|-------|---------------------|--------|
| [Free / Freemium] | [0 EUR] | [Individuel, evaluation] | [Feature A, Feature B] | [X users, Y storage] |
| [Pro] | [X EUR/mois] | [Equipes, PME] | [Toutes features + Feature C] | [X users] |
| [Enterprise] | [Sur devis] | [Grandes entreprises] | [Tout + SSO, support dedie, SLA] | [Illimite] |

### 6.2 Justification du pricing
[Comment le prix a ete determine : valeur delivree, benchmark concurrentiel, willingness-to-pay research]

### 6.3 Metriques economiques cibles
| Metrique | Cible M6 | Cible M12 |
|----------|---------|----------|
| MRR | [$X] | [$Y] |
| CAC | [$X] | [$Y — reduction avec organic] |
| LTV | [$X] | [$Y — augmentation avec retention] |
| LTV/CAC | [>3] | [>4] |
| Payback period | [<X mois] | [<Y mois] |

---

## 7. Calendrier de lancement

### 7.1 Phases
| Phase | Dates | Objectif | Actions cles | Go/No-Go criteria |
|-------|-------|---------|-------------|-------------------|
| **Pre-lancement** | [Dates] | [Construire l'anticipation] | [Landing page, waitlist, early access, teaser content] | [X inscrits waitlist] |
| **Soft launch / Beta** | [Dates] | [Valider le PMF] | [Inviter early adopters, collecter feedback, iterer] | [Retention J30 > X%, NPS > Y] |
| **Lancement public** | [Dates] | [Generer du buzz et des sign-ups] | [Product Hunt, PR, campagne marketing, launch event] | [X sign-ups en J7] |
| **Post-lancement** | [Dates] | [Optimiser le funnel et scaler] | [A/B tests, contenu, optimisation onboarding, paid] | [Growth rate > X%/mois] |

### 7.2 Calendrier detaille
[Gantt simplifie ou liste semaine par semaine des actions de lancement]

---

## 8. Metriques de succes

### 8.1 North Star Metric
[La metrique unique qui capture la valeur delivree aux clients. Ex: "Nombre de projets completes par semaine"]

### 8.2 KPIs par phase
| Phase | KPI | Cible | Actuel | Statut |
|-------|-----|-------|--------|--------|
| Pre-lancement | [Inscrits waitlist] | [X] | [Y] | [On/Off track] |
| Beta | [Retention J30] | [X%] | [Y%] | [On/Off track] |
| Lancement | [Sign-ups J30] | [X] | [Y] | [On/Off track] |
| Croissance | [MRR] | [$X] | [$Y] | [On/Off track] |

### 8.3 Dashboards
[Quels dashboards, quels outils, quelle cadence de revue]

---

## 9. Risques et contingences

### 9.1 Matrice des risques
| # | Risque | Probabilite | Impact | Score | Mitigation | Plan B |
|---|--------|------------|--------|-------|-----------|--------|
| 1 | [Pas de PMF] | [Moyen] | [Critique] | [Eleve] | [Beta testing rigoureux] | [Pivot messaging/segment] |
| 2 | [CAC trop eleve] | [Eleve] | [Eleve] | [Eleve] | [Focus organic, PLG] | [Reduire paid, pivoter canaux] |
| 3 | [Concurrent lance feature similaire] | [Moyen] | [Moyen] | [Moyen] | [Accelerer differenciation] | [Focus niche specifique] |
| 4 | [Delai technique] | [Eleve] | [Moyen] | [Moyen] | [Buffer dans le planning] | [Soft launch avec feature set reduit] |

---

## 10. Budget et ressources

### 10.1 Budget marketing
| Poste | M1-M3 | M4-M6 | Total S1 | Notes |
|-------|-------|-------|----------|-------|
| [Content creation] | [$X] | [$Y] | [$Z] | [Blog, video, guides] |
| [Paid acquisition] | [$X] | [$Y] | [$Z] | [LinkedIn, Google Ads] |
| [Tools & SaaS] | [$X] | [$Y] | [$Z] | [Analytics, email, CRM] |
| [Events / PR] | [$X] | [$Y] | [$Z] | [Product Hunt, conferences] |
| **Total** | **[$X]** | **[$Y]** | **[$Z]** | |

### 10.2 Equipe GTM
| Role | Responsabilites | Interne/Externe | Disponibilite |
|------|----------------|----------------|--------------|
| [Growth/Marketing lead] | [Strategie, execution canaux] | [Interne] | [Full-time] |
| [Content creator] | [Blog, social, video] | [Freelance] | [Part-time] |
| [Sales] | [Outbound, demos, closing] | [Interne] | [Full-time] |

---

## Annexes

### A. Recherche marche detaillee
[Donnees de marche, interviews, surveys]

### B. Analyse concurrentielle approfondie
[Feature comparison matrix, pricing comparison]

### C. Messaging guide
[Messages cles par segment, par canal, par etape du funnel]
```
