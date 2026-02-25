# Decision Log -- Methodologie et Questions

## Methodologie de conversation detaillee

### Phase 1 -- Inventaire des decisions (10-15 minutes)
Commence par identifier toutes les decisions qui meritent d'etre documentees.
- Quelles decisions ont deja ete prises dans le cadre du projet ?
- Y a-t-il des decisions en attente ?
- Quelles decisions sont controversees ou ont genere des debats ?
- Demande les documents existants (Charter, PRD, Tech Spec) pour en extraire les decisions implicites.

### Phase 2 -- Approfondissement de chaque decision (20-30 minutes)
Pour chaque decision identifiee, explore en profondeur.
- Quel est le contexte exact ?
- Quelles alternatives ont ete evaluees ?
- Qui a pris la decision et sur quelle base ?
- Quelles sont les consequences (positives et negatives) ?
- Y a-t-il eu des desaccords ?

### Phase 3 -- Challenge (10-15 minutes)
Teste la solidite de chaque decision documentee.
- "Cette decision est-elle coherente avec [autre decision] ?"
- "Avez-vous considere l'option de ne rien faire ?"
- "Est-ce une decision Type 1 (irreversible) ou Type 2 (reversible) ? Si Type 2, pourquoi y consacrer autant d'analyse ?"
- "Si quelqu'un relit cette decision dans 6 mois, aura-t-il assez de contexte pour comprendre le choix ?"

### Phase 4 -- Classification et structuration (5-10 minutes)
- Classe les decisions par categorie (business, technique, organisationnelle, produit)
- Attribue des identifiants
- Verifie la coherence globale

### Phase 5 -- Redaction (10 minutes)
- Produis le Decision Log complet en format .md
- Verifie que le contexte est suffisant pour un lecteur exterieur
- Propose une relecture

---

## Questions a poser a l'utilisateur

### Section 1 -- Inventaire initial
1. **Quelles sont les decisions majeures deja prises dans le cadre de ce projet ?** (Demande une liste, meme incomplete. Challenge : "Est-ce que tu as deja un Project Charter ou un PRD ? Il y a surement des decisions dedans.")
2. **Y a-t-il des decisions en attente qui doivent encore etre prises ?** (Le Decision Log peut aussi tracker les decisions pending.)
3. **Y a-t-il des decisions qui ont genere des debats ou des desaccords dans l'equipe ?** (Ce sont souvent les plus importantes a documenter.)
4. **Y a-t-il des decisions "heritees" -- prises avant le projet mais qui le contraignent ?** (Ex: choix de cloud provider, engagement contractuel, architecture existante.)
5. **Qui sont les principaux decideurs sur ce projet ?** (Pour chaque decision, il faut identifier le decideur.)

### Section 2 -- Pour chaque decision identifiee

**Contexte :**
6. **Quel probleme ou quelle question cette decision adresse-t-elle ?** (Challenge : "Le probleme est-il clairement defini ? Si le probleme n'est pas clair, la decision ne peut pas etre bonne.")
7. **Qu'est-ce qui a declenche la necessite de prendre cette decision ? Pourquoi maintenant ?** (Timing, contrainte, opportunite.)
8. **Quelles informations ou donnees etaient disponibles au moment de la decision ?** (Donnees quantitatives, recherche utilisateur, benchmarks, avis d'experts.)
9. **Quelles contraintes ont influence cette decision ?** (Budget, temps, competences, contraintes legales, dependances techniques.)

**Alternatives :**
10. **Quelles alternatives ont ete serieusement evaluees ?** (Challenge : "Au-dela de l'option choisie et de l'option rejetee, avez-vous considere l'option de ne RIEN faire ?")
11. **Pour chaque alternative, quels etaient les avantages et inconvenients ?** (Demande un tableau comparatif.)
12. **Y a-t-il eu un scoring ou une matrice de decision formelle ?** (Si oui, demande les criteres et les scores.)
13. **Quelle est la raison principale pour laquelle l'option choisie a ete preferee ?** (Challenge : "Est-ce une raison objective (donnees, cout, performance) ou subjective (preference, habitude) ?")

**Decision et gouvernance :**
14. **Qui a pris la decision finale ?** (Challenge : "Etait-ce la bonne personne ? Avait-elle l'autorite et l'information necessaires ?")
15. **Comment la decision a-t-elle ete prise ?** (Consensus, vote, decision unilaterale, DACI ?)
16. **Y a-t-il eu des desaccords ?** (Challenge : "Qui n'etait pas d'accord ? Pourquoi ? Ont-ils accepte de 'disagree and commit' ?")
17. **La decision est-elle definitive ou peut-elle etre revisitee ?** (Type 1 vs Type 2 d'Amazon.)
18. **A quelle date la decision a-t-elle ete prise ?** (Important pour le contexte temporel.)

**Consequences :**
19. **Quelles sont les consequences positives attendues de cette decision ?** (Gains, simplification, acceleration.)
20. **Quelles sont les consequences negatives acceptees ?** (Trade-offs, limitations, dette technique.)
21. **Y a-t-il des risques associes a cette decision ?** (Et comment les mitiger.)
22. **Cette decision en impacte-t-elle d'autres ?** (Dependances entre decisions.)
23. **Quelles actions doivent etre entreprises suite a cette decision ?** (Prochaines etapes concretes.)

### Section 3 -- Governance du Decision Log
24. **Qui est responsable de maintenir le Decision Log a jour ?** (Ce doit etre une personne nommee, pas "l'equipe".)
25. **A quelle frequence le Decision Log est-il revu ?** (Recommandation : a chaque retrospective ou comite de pilotage.)
26. **Comment les nouvelles decisions sont-elles ajoutees au log ?** (Process : qui decide que ca merite un ADR ? Quel est le workflow ?)
27. **Comment les decisions obsoletes sont-elles gerees ?** (Statut "Superseded" ou "Deprecated" avec reference a la nouvelle decision.)
28. **Le Decision Log est-il accessible a toutes les parties prenantes ?** (Transparence.)

### Section 4 -- Coherence globale
29. **En relisant toutes les decisions ensemble, y a-t-il des contradictions ?** (Ex: decision de couper les couts + decision d'acheter un outil premium.)
30. **Y a-t-il des decisions manquantes -- des questions importantes qui n'ont pas encore ete tranchees ?** (Combler les trous.)
31. **Si quelqu'un de nouveau rejoint le projet demain, ces decisions lui donneraient-elles assez de contexte pour comprendre les choix faits ?**
