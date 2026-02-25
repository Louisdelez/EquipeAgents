# Project Charter -- Methodologie et Questions

## Methodologie de conversation detaillee

### Phase 1 -- Decouverte (5-10 minutes)
Commence par comprendre le contexte global. Ne plonge pas dans les details immediatement.
- Demande une description en 2-3 phrases du projet
- Comprends le "pourquoi" avant le "quoi"
- Identifie l'urgence et les contraintes temporelles

### Phase 2 -- Approfondissement (15-20 minutes)
Pour chaque section du charter, pose les questions detaillees (voir ci-dessous).
- Procede section par section dans l'ordre du template
- Reformule chaque reponse pour confirmer ta comprehension
- Note les incoherences pour y revenir plus tard

### Phase 3 -- Challenge (10-15 minutes)
C'est la phase la plus importante. Tu dois :
- Confronter les objectifs aux moyens disponibles : "Tu veux livrer X en 3 mois avec 2 developpeurs. Comment justifies-tu cette estimation ?"
- Questionner le perimetre : "Tu as mis Y dans le perimetre. Est-ce vraiment un Must Have pour la V1 ?"
- Tester la solidite des risques : "Tu n'as identifie que 3 risques. Faisons un pre-mortem : si le projet echoue dans 6 mois, quelles seraient les causes probables ?"
- Verifier l'alignement : "Les objectifs sont-ils alignes avec la strategie globale de l'entreprise/du produit ?"

### Phase 4 -- Structuration (5-10 minutes)
- Recapitule toutes les informations collectees
- Presente un brouillon structure section par section
- Demande validation ou ajustements

### Phase 5 -- Redaction (5 minutes)
- Produis le document final en format .md
- Propose le document complet
- Demande une derniere relecture

---

## Questions a poser a l'utilisateur

### Section 1 -- Contexte general
1. **Quel est le nom du projet ?** (Doit etre clair, memorable et descriptif. Challenge les noms de code obscurs : "Est-ce que tout le monde comprend immediatement de quoi il s'agit avec ce nom ?")
2. **Peux-tu decrire le projet en 2-3 phrases maximum ?** (Si l'utilisateur ne peut pas, c'est un signal que le projet n'est pas assez clair.)
3. **Quel probleme ce projet resout-il ?** (Challenge : "Pour qui est-ce un probleme ? Comment sais-tu que c'est un vrai probleme et pas une hypothese ?")
4. **Qu'est-ce qui a declenche ce projet ? Pourquoi maintenant ?** (Comprendre l'urgence et le timing)
5. **Ce projet remplace-t-il quelque chose d'existant ? Si oui, quoi ?**

### Section 2 -- Sponsor et gouvernance
6. **Qui est le sponsor/porteur du projet ?** (La personne qui a le pouvoir et le budget. Challenge : "Cette personne a-t-elle le pouvoir de debloquer des ressources et de prendre des decisions strategiques ?")
7. **Qui est le chef de projet ?** (Challenge : "Est-il/elle dedie(e) a ce projet ou partage-t-il/elle son temps avec d'autres projets ? Quel pourcentage de son temps est alloue ?")
8. **Quelle est la structure de gouvernance ?** (Qui decide quoi ? Qui a un droit de veto ? Quelle est la frequence des points de suivi ?)
9. **Y a-t-il un comite de pilotage ? Qui en fait partie et a quelle frequence se reunit-il ?**

### Section 3 -- Objectifs
10. **Quels sont les 3 a 5 objectifs principaux du projet ?** (Challenge chaque objectif avec SMART : "Cet objectif est-il mesurable ? Quelle est la metrique de succes ? Quelle est l'echeance ?")
11. **Comment sauras-tu que le projet est un succes ?** (Demande des metriques concretes, pas des impressions.)
12. **Quels sont les objectifs secondaires / nice-to-have ?** (Separer les objectifs critiques des souhaitables.)
13. **Y a-t-il des objectifs business chiffres associes ?** (ROI, revenus, reduction de couts, gain de temps, satisfaction utilisateur...)
14. **Si tu devais ecrire le communique de presse de ce projet termine, que dirait-il en 3 lignes ?** (Technique Amazon Working Backwards)

### Section 4 -- Perimetre (Scope)
15. **Qu'est-ce qui est DANS le perimetre du projet ? Liste les livrables concrets.** (Challenge : "Pour chaque element, est-ce un Must Have, Should Have, Could Have ou Won't Have ?")
16. **Qu'est-ce qui est EXPLICITEMENT HORS perimetre ?** (C'est souvent la question la plus importante. Challenge : "Y a-t-il des fonctionnalites que les gens vont naturellement attendre mais qui ne sont PAS prevues ? Il faut les lister ici.")
17. **Y a-t-il des zones grises, des elements dont le perimetre n'est pas encore clairement defini ?** (Si oui, comment et quand seront-ils clarifies ?)
18. **Quel est le MVP (Minimum Viable Product) de ce projet ?** (Le strict minimum qui delivre de la valeur.)

### Section 5 -- Parties prenantes
19. **Qui sont toutes les parties prenantes de ce projet ?** (Pas seulement l'equipe. Pense aux utilisateurs, aux equipes impactees, aux partenaires externes, aux equipes support/ops.)
20. **Pour chaque partie prenante, quel est son role RACI ?** (Responsible, Accountable, Consulted, Informed)
21. **Y a-t-il des parties prenantes qui pourraient bloquer le projet ?** (Resistances potentielles, conflits d'interets)
22. **Comment vas-tu communiquer avec chaque groupe de parties prenantes ?** (Frequence, canal, niveau de detail)

### Section 6 -- Planning
23. **Quels sont les jalons majeurs du projet et leurs dates cibles ?** (Challenge : "Ces dates sont-elles des engagements fermes ou des estimations ? Quel est le niveau de confiance ?")
24. **Y a-t-il des dates non negociables (evenement, contrainte reglementaire, engagement client) ?**
25. **Quelles sont les dependances externes qui pourraient impacter le planning ?**
26. **As-tu prevu des marges/buffers dans le planning ?** (Challenge : "Un planning sans marge est un planning qui va deraper.")

### Section 7 -- Budget
27. **Quel est le budget total alloue au projet ?** (Challenge : "Ce budget inclut-il les couts caches : infrastructure, licences, formation, maintenance post-lancement ?")
28. **Comment le budget est-il reparti ? (RH, infra, licences, externe...)**
29. **Qui a autorite pour engager des depenses ? Quel est le seuil de validation ?**
30. **Que se passe-t-il si le budget est depasse de 20% ? De 50% ?**

### Section 8 -- Risques
31. **Quels sont les 5 a 10 risques majeurs identifies ?** (Challenge : "Faisons un pre-mortem. Nous sommes dans 6 mois, le projet a echoue. Cite-moi 5 raisons possibles.")
32. **Pour chaque risque, quelle est la probabilite (faible/moyenne/elevee) et l'impact (faible/moyen/eleve) ?**
33. **Pour chaque risque, quelle est la strategie de mitigation ?**
34. **Quels sont les kill criteria ?** (Netflix : "Dans quelles conditions devrait-on arreter ce projet ?")
35. **Y a-t-il des risques lies aux personnes (turnover, competences manquantes, disponibilite) ?**

### Section 9 -- Criteres d'acceptation
36. **Comment le projet sera-t-il officiellement "termine" ?** (Qui signe ? Sur quels criteres ?)
37. **Quels sont les criteres de qualite minimum pour chaque livrable ?**
38. **Y a-t-il des criteres de performance mesurables (SLA, temps de reponse, taux d'erreur) ?**
