# Decision Log -- Template du document final

## Template

```markdown
# Decision Log -- [Nom du projet]

> Archive les decisions importantes prises et les raisons derriere ces choix.

---

## Registre des decisions

| ID | Date | Decision | Categorie | Type | Statut | Decideur |
|----|------|----------|-----------|------|--------|----------|
| D-001 | [Date] | [Resume en une phrase] | [Business/Tech/Produit/Orga] | [Type 1/Type 2] | [Accepted] | [Nom] |
| D-002 | [Date] | [Resume en une phrase] | [Business/Tech/Produit/Orga] | [Type 1/Type 2] | [Accepted] | [Nom] |
| D-003 | [Date] | [Resume en une phrase] | [Business/Tech/Produit/Orga] | [Type 1/Type 2] | [Proposed] | [Nom] |

---

## Detail des decisions

### D-001 -- [Titre descriptif de la decision]

**Date :** [Date de la decision]
**Decideur (Approver) :** [Nom et role]
**Driver :** [Personne qui a pilote le processus]
**Contributors :** [Personnes consultees]
**Statut :** Accepted / Proposed / Deprecated / Superseded by D-XXX
**Type :** Type 1 (irreversible) / Type 2 (reversible)
**Categorie :** Business / Technique / Produit / Organisationnel

**Contexte :**
[Description detaillee du probleme ou de la question qui necessitait une decision. Quelles forces etaient en presence ? Quelles contraintes ? Pourquoi maintenant ?]

**Decision :**
[Formulation claire et active : "Nous allons [action] parce que [raison principale]."]

**Alternatives considerees :**

| Alternative | Avantages | Inconvenients |
|-------------|-----------|---------------|
| Option A (choisie) | [Avantages] | [Inconvenients] |
| Option B | [Avantages] | [Inconvenients] |
| Option C (ne rien faire) | [Avantages] | [Inconvenients] |

**Raison du choix :** [Pourquoi l'option A a ete preferee aux autres]

**Desaccords :** [S'il y a eu des desaccords, les documenter avec respect : "Alice preferait l'option B parce que [raison]. La decision finale est l'option A parce que [raison]."]

**Consequences :**
- **Positives :** [Gains attendus]
- **Negatives :** [Trade-offs acceptes, limitations]
- **Risques :** [Risques associes et mitigation]

**Actions suivantes :**
- [ ] [Action 1] -- [Responsable] -- [Echeance]
- [ ] [Action 2] -- [Responsable] -- [Echeance]

---

### D-002 -- [Titre descriptif de la decision]

**Date :** [Date]
**Decideur (Approver) :** [Nom]
**Driver :** [Nom]
**Contributors :** [Noms]
**Statut :** [Statut]
**Type :** [Type 1/Type 2]
**Categorie :** [Categorie]

**Contexte :**
[Description]

**Decision :**
[Formulation]

**Alternatives considerees :**

| Alternative | Avantages | Inconvenients |
|-------------|-----------|---------------|
| [Option] | [Avantages] | [Inconvenients] |
| [Option] | [Avantages] | [Inconvenients] |

**Raison du choix :** [Justification]

**Consequences :**
- **Positives :** [Gains]
- **Negatives :** [Trade-offs]

---

### D-003 -- [Titre descriptif de la decision]

[Meme structure pour chaque decision supplementaire]

---

## Decisions en attente

| ID | Question | Options identifiees | Deadline | Driver | Bloquant pour |
|----|----------|-------------------|----------|--------|--------------|
| P-001 | [Question a trancher] | [Options] | [Date limite] | [Nom] | [Ce que ca bloque] |

---

## Governance du Decision Log

| Parametre | Valeur |
|-----------|--------|
| Responsable du log | [Nom] |
| Frequence de revue | [Ex: chaque sprint review] |
| Critere pour creer un ADR | [Ex: decision difficilement reversible OU qui sera questionnee dans 6 mois] |
| Outil de stockage | [Ex: repo Git, Confluence, Notion] |
| Acces | [Qui peut lire / Qui peut ecrire] |

---

*Derniere mise a jour : [Date]*
*Auteur : [Nom]*
*Version : 1.0*
*Nombre de decisions : [Total]*
```

---

## Instructions de rendu

1. **Ne produis JAMAIS le Decision Log sans avoir explore en profondeur CHAQUE decision.** Un ADR avec juste "on a choisi X" est inutile.
2. **Challenge les alternatives.** Pour chaque decision, demande au minimum 2 alternatives, y compris l'option "ne rien faire". Si l'utilisateur dit "il n'y avait pas d'alternative", challenge : "Vraiment ? Meme ne rien faire n'etait pas une option ?"
3. **Insiste sur le contexte.** Le test : "Est-ce qu'un nouveau venu comprendra POURQUOI cette decision a ete prise ?" Si non, le contexte est insuffisant.
4. **Documente les desaccords.** Les desaccords ne sont pas un probleme, ce sont des informations precieuses. Documentez-les avec respect mais precision.
5. **Verifie la coherence.** Les decisions doivent etre coherentes entre elles. Si D-001 dit "reduire les couts" et D-003 dit "acheter un outil premium", il y a une tension a expliciter.
6. **Classifie correctement.** Chaque decision doit avoir un type (reversible/irreversible) et une categorie. Cela aide a calibrer le niveau de documentation necessaire.
7. **Produis le document final en un seul bloc Markdown.** L'utilisateur doit pouvoir copier-coller directement.
8. **Propose une checklist de validation** basee sur les criteres de qualite.
9. **Demande explicitement : "Y a-t-il d'autres decisions que nous n'avons pas encore documentees ?"**
