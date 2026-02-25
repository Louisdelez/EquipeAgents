# PRD -- Methodologie et Questions

## Methodologie de conversation detaillee

### Phase 1 -- Decouverte produit (10-15 minutes)
Commence par comprendre le produit dans sa globalite.
- Demande une description du produit et du probleme qu'il resout
- Identifie le marche cible et la competition
- Comprends le "pourquoi maintenant" (timing, opportunite)
- Demande s'il y a un Project Charter existant pour s'aligner

### Phase 2 -- Exploration des utilisateurs (10-15 minutes)
Plonge en profondeur dans les personas et les besoins.
- Identifie tous les types d'utilisateurs
- Pour chaque persona, explore les jobs-to-be-done
- Challenge les assumptions sur les utilisateurs : "As-tu parle a de vrais utilisateurs ?"
- Identifie les parcours utilisateurs critiques

### Phase 3 -- Definition des fonctionnalites (15-20 minutes)
Detaille chaque fonctionnalite et la priorise.
- Liste toutes les fonctionnalites envisagees
- Pour chaque fonctionnalite, demande le "pourquoi" (quel job-to-be-done ?)
- Applique un framework de priorisation (RICE ou ICE)
- Identifie les exigences non fonctionnelles (performance, securite, accessibilite)

### Phase 4 -- Challenge produit (10-15 minutes)
C'est la phase critique ou tu remets en question les choix.
- "Que se passe-t-il si on retire cette fonctionnalite ? Le produit a-t-il encore de la valeur ?"
- "Comment un concurrent resoudrait-il ce probleme differemment ?"
- "Quel est le plus petit produit qui delivre de la valeur ?"
- "Y a-t-il des edge cases que tu n'as pas consideres ?"

### Phase 5 -- Structuration et redaction (10 minutes)
- Organise toutes les informations dans le template PRD
- Verifie la coherence entre personas, user stories et fonctionnalites
- Produis le document final

---

## Questions a poser a l'utilisateur

### Section 1 -- Resume produit
1. **Quel est le nom du produit/de la fonctionnalite ?**
2. **Decris le produit en une phrase simple qu'un enfant de 10 ans comprendrait.** (Challenge : "Si c'est trop complique a expliquer simplement, c'est peut-etre trop complique tout court.")
3. **Quel probleme specifique resout-il ?** (Challenge : "Comment les utilisateurs resolvent-ils ce probleme aujourd'hui, sans ton produit ?")
4. **Pourquoi ce produit maintenant ? Qu'est-ce qui a change dans le marche, la technologie ou les besoins utilisateurs ?**
5. **Quelle est ta proposition de valeur unique par rapport aux alternatives existantes ?**
6. **Si tu devais ecrire le communique de presse du lancement (methode Amazon), que dirait-il en 5 lignes ?**

### Section 2 -- Objectifs produit
7. **Quels sont les 3 objectifs principaux de ce produit ?** (Challenge avec SMART : chaque objectif doit etre mesurable.)
8. **Quelles metriques de succes vas-tu suivre ?** (Challenge : "Si cette metrique ne bouge pas apres le lancement, consideres-tu le produit comme un echec ?")
9. **Quels sont les anti-objectifs (non-goals) ?** (Ce que le produit ne cherche PAS a faire.)
10. **Quel est l'horizon temporel de ces objectifs ?** (Court terme vs long terme)

### Section 3 -- Personas utilisateurs
11. **Qui sont les utilisateurs principaux de ce produit ?** (Demande au minimum 2-3 personas distinctes.)
12. **Pour chaque persona, decris :** (Nom fictif, age, role, contexte, frustrations actuelles, objectifs, niveau technique, frequence d'utilisation prevue.)
13. **Quel est le persona PRIORITAIRE ?** (Challenge : "Si tu ne pouvais satisfaire qu'un seul persona, lequel choisirais-tu et pourquoi ?")
14. **As-tu parle a de vrais utilisateurs correspondant a ces personas ?** (Challenge : "Combien ? Quand ? Qu'ont-ils dit exactement ?")
15. **Y a-t-il des anti-personas ?** (Des types d'utilisateurs pour lesquels ce produit n'est PAS concu.)

### Section 4 -- User Stories
16. **Pour chaque persona, quels sont les 5-10 jobs-to-be-done principaux ?** (Format JTBD : "Quand je [situation], je veux [motivation], pour pouvoir [resultat attendu]")
17. **Quelles sont les user stories correspondantes ?** (Format : "En tant que [persona], je veux [action], afin de [benefice]")
18. **Quel est le parcours utilisateur principal (happy path) ?** (Etape par etape, du premier contact au resultat final.)
19. **Quels sont les parcours alternatifs et les edge cases ?** (Que se passe-t-il si l'utilisateur fait une erreur ? Si le reseau tombe ? Si les donnees sont manquantes ?)
20. **Quelle est la priorite de chaque user story ?** (Must/Should/Could/Won't)

### Section 5 -- Exigences fonctionnelles
21. **Liste toutes les fonctionnalites envisagees.** (Challenge : "Pour chaque fonctionnalite, quel job-to-be-done sert-elle ? Si tu ne peux pas repondre, est-elle vraiment necessaire ?")
22. **Pour chaque fonctionnalite, peux-tu decrire le comportement attendu en detail ?** (Inputs, outputs, regles de gestion, cas limites.)
23. **Quelles sont les fonctionnalites du MVP vs celles des versions suivantes ?**
24. **Appliquons un scoring de priorisation. Pour chaque fonctionnalite, estime :** (Reach, Impact, Confidence, Effort -- ou Impact, Confidence, Ease)
25. **Y a-t-il des fonctionnalites que tu hesites a inclure ?** (Discutons-en. Souvent, c'est la qu'il faut couper.)

### Section 6 -- Exigences non fonctionnelles
26. **Quelles sont les exigences de performance ?** (Temps de reponse, nombre d'utilisateurs simultanes, volume de donnees.)
27. **Quelles sont les exigences de securite ?** (Authentification, chiffrement, conformite RGPD/GDPR, donnees sensibles.)
28. **Quelles sont les exigences d'accessibilite ?** (WCAG, support lecteur d'ecran, contraste, navigation clavier.)
29. **Quelles sont les exigences de compatibilite ?** (Navigateurs, appareils, OS, resolutions d'ecran.)
30. **Quelles sont les exigences d'internationalisation ?** (Langues, fuseaux horaires, devises, formats de date.)
31. **Quelles sont les exigences de scalabilite ?** (Croissance prevue sur 6-12-24 mois.)

### Section 7 -- Wireframes et maquettes
32. **As-tu des wireframes, maquettes ou prototypes existants ?** (Si oui, partage-les. Sinon, veux-tu qu'on definisse les ecrans principaux ensemble ?)
33. **Quels sont les ecrans/pages principaux du produit ?**
34. **Y a-t-il une charte graphique ou un design system existant a respecter ?**

### Section 8 -- Dependances et hors perimetre
35. **De quelles equipes, systemes ou services externes ce produit depend-il ?**
36. **Y a-t-il des APIs tierces a integrer ?** (Stabilite, cout, limites.)
37. **Qu'est-ce qui est explicitement hors perimetre pour cette version ?** (Et pourquoi.)
38. **Y a-t-il des contraintes techniques, legales ou organisationnelles a prendre en compte ?**
