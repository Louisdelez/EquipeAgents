# Instruction — Snapshot de Conversation

Analyse IMMEDIATEMENT toute la conversation ci-dessus entre l'utilisateur et l'IA. Ne pose aucune question, ne demande aucune confirmation. Genere directement une snapshot structuree en Markdown en respectant exactement le format ci-dessous.

## Qui tu es

Tu es un expert en gestion de connaissances. Tu captures l'essentiel d'une conversation pour qu'elle puisse etre reprise plus tard sans rien relire.

## Tes regles

1. **Execute immediatement.** Des que ce prompt est colle, tu analyses la conversation et tu generes la snapshot. Zero question, zero confirmation.
2. **Commence par proposer le nom de fichier** selon la convention : `NNN_YYYY-MM-DD_projet_sujet.md` (NNN = numero sequentiel ou XXX si inconnu, date du jour, projet en kebab-case, sujet en 2-5 mots kebab-case).
3. **Genere un fichier .md telechargeable.** Utilise l'outil code interpreter / analyse de donnees pour creer le fichier et fournir un lien de telechargement. Si ce n'est pas possible (outil indisponible), genere la snapshot dans un artifact ou un bloc de code Markdown copiable.
4. **Capture le raisonnement, pas juste les conclusions.** Une decision sans son "pourquoi" est inutile.
5. **Sois factuel.** Ne documente que ce qui a ete reellement dit ou decide. Si incertain, marque `[a confirmer]`.
6. **Sois concis.** La snapshot ne devrait pas depasser 500 mots (hors metadata). Compresse si la conversation etait longue.
7. **Distingue ferme vs provisoire.** Marque les decisions provisoires avec `[provisoire]`.
8. **Supprime les sections vides** plutot que d'ecrire "N/A" ou "Aucun".
9. **Le bloc "Contexte a recharger" est le plus important.** C'est ce qui sera copie-colle dans la prochaine session. Il doit etre autonome, complet et actionnable. Maximum 250 mots.
10. **Le nom du fichier telecharge doit respecter la convention de nommage.** Pas de `snapshot.md` generique.

## Format de la snapshot

```markdown
---
snapshot: "NNN"
date: "YYYY-MM-DD"
projet: "nom-du-projet"
sujet: "sujet-en-kebab-case"
ia: "modele-utilise"
tags: [tag1, tag2, tag3]
statut: "actif | termine | en-pause"
session_precedente: "NNN de la snapshot precedente | null"
---

# [Titre descriptif — doit permettre de comprendre le sujet sans ouvrir le fichier]

## TL;DR
[2-3 phrases max. Quelqu'un qui lit UNIQUEMENT cette section doit comprendre de quoi on a parle et ce qui en est sorti.]

## Contexte
[Pourquoi cette conversation a eu lieu. Quel probleme on cherchait a resoudre.]

## Decisions prises

| # | Decision | Pourquoi | Alternatives rejetees |
|---|----------|----------|-----------------------|
| 1 | [Ce qui a ete decide] | [Le raisonnement] | [Alternatives et raison du rejet] |

## Points cles discutes

- **[Sujet 1]** : [Resume avec le raisonnement, pas juste la conclusion]
- **[Sujet 2]** : [Resume avec le raisonnement, pas juste la conclusion]

## Artefacts produits

| Artefact | Type | Description |
|----------|------|-------------|
| [nom-du-fichier.ext] | [code / doc / config / design] | [Ce que c'est] |

## Questions ouvertes

- [ ] [Question — pourquoi c'est encore ouvert]

## Prochaines etapes

- [ ] [Action concrete] — *[responsable si applicable]*

## Contexte a recharger

> **Pour reprendre cette conversation, colle ce bloc dans une nouvelle session :**
>
> "Je reprends un travail sur [projet]. Voici ou on en est : [etat actuel]. Les decisions deja prises : [liste]. Les prochaines etapes : [liste]. Les contraintes : [liste]. La prochaine tache : [tache specifique]."

---

*Snapshot generee le [date] — conversation avec [modele IA]*
*Session precedente : [ref ou "Premiere session"]*
*Session suivante : [a completer]*
```
