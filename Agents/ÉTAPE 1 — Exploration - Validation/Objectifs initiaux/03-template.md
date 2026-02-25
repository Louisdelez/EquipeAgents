# Objectifs initiaux — Template et Instructions de rendu

## Template du document final

```markdown
# Objectifs initiaux

> Determine ce que doit accomplir la premiere version pour etre consideree comme reussie.

---

## Objectif principal

_Quel est l'objectif n°1 de la premiere version (MVP) ?_

[Objectif principal formule en SMART : Specifique, Mesurable, Atteignable, Pertinent, Borne dans le temps]

**Hypothese testee :** [L'hypothese la plus risquee que cet objectif cherche a valider]

## Objectifs secondaires

- [Objectif secondaire 1 — SMART]
- [Objectif secondaire 2 — SMART]
- [Objectif secondaire 3 — SMART]

## Perimetre du MVP

### Inclus dans la v1

**Must Have (indispensable) :**
- [Fonctionnalite/element 1 — justification]
- [Fonctionnalite/element 2 — justification]
- [Fonctionnalite/element 3 — justification]

**Should Have (important si possible) :**
- [Fonctionnalite/element 1]
- [Fonctionnalite/element 2]

**Could Have (bonus) :**
- [Fonctionnalite/element 1]

### Exclus de la v1 (reporte)

- [Element exclu 1 — raison du report — horizon envisage]
- [Element exclu 2 — raison du report — horizon envisage]
- [Element exclu 3 — raison du report — horizon envisage]

## Criteres de succes

| Critere | Metrique | Cible | Methode de mesure |
|---------|----------|-------|-------------------|
| [Objectif principal] | [Metrique] | [Cible chiffree] | [Outil/methode] |
| [Objectif secondaire 1] | [Metrique] | [Cible chiffree] | [Outil/methode] |
| [Objectif secondaire 2] | [Metrique] | [Cible chiffree] | [Outil/methode] |

**Seuil d'echec (pivot trigger) :** [Quel resultat declencherait un pivot ou un arret ?]

## Contraintes

_Quelles sont les contraintes de temps, budget ou ressources ?_

- **Timeline :** [Date de lancement cible]
- **Budget :** [Budget total disponible]
- **Equipe :** [Taille et competences de l'equipe]
- **Contraintes techniques :** [Stack, infra, securite, conformite...]
- **Contraintes externes :** [Reglementation, partenariats, dependances...]

## Hypotheses a valider

_Quelles hypotheses cles doivent etre confirmees par cette premiere version ?_

| Hypothese | Signal de validation | Signal d'invalidation | Plan B |
|-----------|---------------------|-----------------------|--------|
| [Hypothese 1] | [Signal positif] | [Signal negatif] | [Alternative] |
| [Hypothese 2] | [Signal positif] | [Signal negatif] | [Alternative] |
| [Hypothese 3] | [Signal positif] | [Signal negatif] | [Alternative] |

---

*Derniere mise a jour :*
*Auteur :*
```

---

## Instructions de rendu

1. **Ne produis le document final que lorsque le scope est VRAIMENT minimum.** Si la v1 est trop grosse, challenge l'utilisateur jusqu'a ce qu'il coupe. Un bon MVP tient dans un sprint ou deux, pas dans 6 mois.

2. **Le document final doit etre en format Markdown (.md)**, avec des tableaux proprement formates.

3. **Chaque objectif doit etre SMART** — pas d'exception. Si un objectif n'est pas mesurable, ne le mets pas dans le document.

4. **La classification MoSCoW doit etre explicite** dans la section Perimetre.

5. **Les exclusions doivent etre detaillees** : pas juste listees, mais justifiees (pourquoi c'est exclu) avec un horizon (quand on le fera).

6. **Les criteres de succes doivent inclure la methode de mesure** et le seuil d'echec.

7. **Les hypotheses doivent inclure le plan B** — ce qu'on fait si elles sont invalidees.

8. **A la fin**, felicite l'utilisateur : il a complete l'Etape 1 — Exploration & Validation ! Tous les fondamentaux sont en place. Propose de faire une revue globale des 4 documents de l'Etape 1 pour verifier la coherence, avant de passer a l'Etape 2 — Lancement structure.