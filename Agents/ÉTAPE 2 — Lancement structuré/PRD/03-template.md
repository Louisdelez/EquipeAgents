# PRD -- Template du document final

## Template

```markdown
# PRD (Product Requirements Document) -- [Nom du produit]

> Detaille exactement ce que le produit doit contenir et comment il doit fonctionner.

---

## Resume du produit

**Probleme :** [Description du probleme que le produit resout]

**Solution :** [Description de la solution proposee en 2-3 phrases]

**Proposition de valeur unique :** [Ce qui differencie cette solution des alternatives]

**Communique de presse (methode Amazon) :**
> [3-5 phrases decrivant le lancement du produit comme si c'etait un communique de presse]

## Objectifs produit

| # | Objectif | Metrique de succes | Cible | Echeance |
|---|----------|--------------------|-------|----------|
| O1 | [Objectif SMART] | [Metrique] | [Valeur cible] | [Date] |
| O2 | [Objectif SMART] | [Metrique] | [Valeur cible] | [Date] |
| O3 | [Objectif SMART] | [Metrique] | [Valeur cible] | [Date] |

### Non-goals (anti-objectifs)
- [Ce que le produit ne cherche PAS a faire]
- [Ce que le produit ne cherche PAS a faire]

## Personas utilisateurs

### Persona 1 -- [Nom fictif]
| Attribut | Detail |
|----------|--------|
| Age | [Age] |
| Role | [Role professionnel ou contexte] |
| Contexte | [Situation dans laquelle il/elle utilise le produit] |
| Frustrations actuelles | [Ce qui ne va pas aujourd'hui] |
| Objectifs | [Ce qu'il/elle cherche a accomplir] |
| Niveau technique | [Debutant / Intermediaire / Avance] |
| Frequence d'utilisation | [Quotidien / Hebdomadaire / Occasionnel] |

**Jobs-to-be-Done :**
- Quand je [situation], je veux [motivation], pour pouvoir [resultat]
- Quand je [situation], je veux [motivation], pour pouvoir [resultat]

### Persona 2 -- [Nom fictif]
[Meme structure]

### Anti-personas
- [Type d'utilisateur pour lequel ce produit n'est PAS concu et pourquoi]

## User Stories

| ID | En tant que... | Je veux... | Afin de... | Priorite | Criteres d'acceptation |
|----|---------------|------------|------------|----------|----------------------|
| US-001 | [Persona] | [Action] | [Benefice] | Must | [Criteres verifiables] |
| US-002 | [Persona] | [Action] | [Benefice] | Should | [Criteres verifiables] |
| US-003 | [Persona] | [Action] | [Benefice] | Could | [Criteres verifiables] |

### Parcours utilisateur principal (Happy Path)
1. [Etape 1]
2. [Etape 2]
3. [Etape 3]

### Cas d'erreur et edge cases
| Scenario | Comportement attendu |
|----------|---------------------|
| [Cas d'erreur] | [Ce qui doit se passer] |
| [Edge case] | [Ce qui doit se passer] |

## Exigences fonctionnelles

| ID | Fonctionnalite | Description | Persona | User Story | Priorite | Score RICE/ICE |
|----|---------------|-------------|---------|------------|----------|---------------|
| F-001 | [Nom] | [Description detaillee] | [Persona] | [US-XXX] | Must | [Score] |
| F-002 | [Nom] | [Description detaillee] | [Persona] | [US-XXX] | Should | [Score] |

### MVP (Version minimale)
- [F-001] [Nom de la fonctionnalite]
- [F-002] [Nom de la fonctionnalite]

### V2 (Fonctionnalites futures)
- [F-XXX] [Nom de la fonctionnalite]

## Exigences non fonctionnelles

### Performance
| Metrique | Exigence |
|----------|----------|
| Temps de chargement | [Ex: < 2 secondes] |
| Utilisateurs simultanes | [Ex: 1000 minimum] |
| Disponibilite | [Ex: 99.9% uptime] |

### Securite
- [Exigence de securite 1]
- [Exigence de securite 2]

### Accessibilite
- [Niveau WCAG vise]
- [Exigences specifiques]

### Compatibilite
| Plateforme | Versions supportees |
|------------|-------------------|
| [Navigateur/OS/Device] | [Versions] |

### Internationalisation
- [Langues supportees]
- [Formats de date/nombre/devise]

## Wireframes / Maquettes

[Liens vers les wireframes ou description des ecrans principaux]

### Ecran 1 -- [Nom]
[Description de l'ecran, elements principaux, interactions]

### Ecran 2 -- [Nom]
[Description de l'ecran, elements principaux, interactions]

## Dependances

| Dependance | Type | Equipe/Service | Statut | Risque |
|------------|------|---------------|--------|--------|
| [Dependance] | Technique/Organisationnelle | [Equipe] | [Confirme/En attente] | [Faible/Moyen/Eleve] |

## Hors perimetre

| Element exclu | Raison | Version future envisagee |
|---------------|--------|------------------------|
| [Element] | [Pourquoi c'est exclu] | [V2 / V3 / Jamais] |

---

*Derniere mise a jour : [Date]*
*Auteur : [Nom]*
*Version : 1.0*
*Statut : Brouillon / En revue / Valide*
```

---

## Instructions de rendu

1. **Ne produis JAMAIS le document final avant d'avoir explore en profondeur les personas et les user stories.** Un PRD sans personas solides est un PRD bancal.
2. **Challenge chaque fonctionnalite.** Demande "pourquoi" au moins 3 fois (technique des 5 pourquoi). Si l'utilisateur ne peut pas justifier une fonctionnalite par un besoin utilisateur, elle ne devrait pas etre dans le PRD.
3. **Applique un framework de priorisation.** Ne laisse pas l'utilisateur dire "tout est prioritaire". Force le classement.
4. **Verifie la coherence persona/story/feature.** Chaque fonctionnalite doit pouvoir etre tracee jusqu'a un persona et un job-to-be-done.
5. **Insiste sur les non-goals et le hors perimetre.** C'est ce qui sauvera le projet du scope creep.
6. **Produis le document final en un seul bloc Markdown.** L'utilisateur doit pouvoir copier-coller directement.
7. **A la fin, propose une checklist de validation** basee sur les criteres de qualite.
8. **Demande explicitement : "Souhaites-tu que je modifie quelque chose avant de finaliser ?"**
