# Project Charter -- Frameworks et Pieges

## Ressources et frameworks de reference

### 1. RACI Matrix
La matrice RACI (Responsible, Accountable, Consulted, Informed) clarifie les roles de chaque partie prenante :
- **Responsible** : Qui fait le travail ?
- **Accountable** : Qui a le pouvoir de decision et rend des comptes ? (une seule personne par livrable)
- **Consulted** : Qui doit etre consulte avant une decision ?
- **Informed** : Qui doit etre tenu informe apres une decision ?

Applique ce framework pour chaque livrable ou decision majeure du projet.

### 2. Amazon Working Backwards / PR-FAQ
Amazon commence chaque projet par ecrire le communique de presse du produit fini. Cela force a :
- Definir clairement le probleme client resolu
- Articuler la proposition de valeur en termes simples
- Identifier les metriques de succes des le depart

Utilise cette approche pour challenger les objectifs : "Si tu devais ecrire le communique de presse de ce projet une fois termine, que dirait-il ?"

### 3. SMART Goals (Google)
Chaque objectif du charter doit etre :
- **Specific** : Precis et sans ambiguite
- **Measurable** : Quantifiable avec des metriques concretes
- **Achievable** : Realisable avec les ressources disponibles
- **Relevant** : Aligne avec la strategie globale
- **Time-bound** : Associe a une echeance

### 4. MoSCoW Prioritization
Pour definir le perimetre, utilise MoSCoW :
- **Must have** : Indispensable, le projet echoue sans
- **Should have** : Important mais pas critique pour le lancement
- **Could have** : Souhaitable si le temps le permet
- **Won't have** : Explicitement exclu (aussi important que le reste)

### 5. Kill Criteria (Netflix)
Netflix definit des le depart les conditions d'arret d'un projet. Pose la question : "Dans quelles circonstances devrait-on arreter ce projet ?" Cela force la lucidite et evite l'effet sunk cost.

### 6. Pre-Mortem (Amazon/Google)
Avant meme de commencer, imagine que le projet a echoue. Demande : "Nous sommes dans 6 mois, le projet est un echec. Que s'est-il passe ?" Cela revele des risques que l'optimisme initial masque.

### 7. Single Threaded Leader (Amazon)
Amazon assigne un leader unique et dedie a chaque projet critique. Ce leader n'a pas d'autres responsabilites concurrentes. Challenge : "Le chef de projet est-il dedie a 100% ? Sinon, quels sont les risques de dilution ?"

### 8. Squad Health Check (Spotify)
Spotify utilise des indicateurs de sante d'equipe pour evaluer si les conditions de succes sont reunies (motivation, competences, outils, mission claire). Integre cette reflexion dans l'identification des risques.

---

## Pieges courants et comment les eviter

### Piege 1 -- Le charter trop vague
**Probleme :** Des objectifs comme "ameliorer l'experience utilisateur" sans metriques concretes.
**Solution :** Applique systematiquement le test SMART. Reformule : "Ameliorer le NPS de 35 a 50 d'ici Q3 2026."

### Piege 2 -- Le perimetre infini
**Probleme :** Tout est "dans le perimetre", rien n'est explicitement exclu.
**Solution :** Force l'utilisateur a lister au moins 5 elements hors perimetre. Utilise MoSCoW pour prioriser.

### Piege 3 -- Les risques sous-estimes
**Probleme :** Seulement 2-3 risques identifies, tous a probabilite "faible".
**Solution :** Utilise le pre-mortem pour forcer l'identification de risques realistes. Minimum 5 risques.

### Piege 4 -- Pas de kill criteria
**Probleme :** Le projet continue meme quand il n'a plus de sens, par effet sunk cost.
**Solution :** Definis des le depart les conditions d'arret. "Si le cout depasse X, si le marche change de Y, si le sponsor quitte..."

### Piege 5 -- Le RACI flou
**Probleme :** Tout le monde est "responsable" mais personne n'est "accountable".
**Solution :** Il ne doit y avoir qu'UN SEUL Accountable par livrable ou decision. Challenge : "Si cette personne est en vacances, que se passe-t-il ?"

### Piege 6 -- Le planning sans marge
**Probleme :** Le planning est un chemin critique sans aucun buffer.
**Solution :** Ajoute systematiquement 20-30% de marge. Identifie le chemin critique et ses points de fragilite.

### Piege 7 -- Le budget incomplet
**Probleme :** Le budget ne couvre que les developpements, pas la maintenance, la formation, l'infrastructure.
**Solution :** Challenge avec un TCO (Total Cost of Ownership) : "Combien va couter ce projet sur 12 mois apres le lancement ?"

### Piege 8 -- Les parties prenantes oubliees
**Probleme :** On oublie les equipes operations, support, legal, securite...
**Solution :** Passe en revue tous les departements de l'entreprise et demande : "Ce projet les impacte-t-il ?"

---

## Criteres de qualite du document final

Le Project Charter est considere comme complet et de qualite si :

- [ ] Chaque objectif est SMART (Specific, Measurable, Achievable, Relevant, Time-bound)
- [ ] Le perimetre "hors scope" est aussi detaille que le "dans le scope"
- [ ] Chaque partie prenante a un role RACI clairement defini
- [ ] Il y a au minimum 5 risques identifies avec probabilite, impact et mitigation
- [ ] Les kill criteria sont definis
- [ ] Le planning inclut des jalons intermediaires et des marges
- [ ] Le budget inclut tous les postes (RH, infra, licences, formation, maintenance)
- [ ] Les criteres d'acceptation sont mesurables et verifiables
- [ ] Le document est comprehensible par quelqu'un qui ne connait pas le projet
- [ ] Il n'y a pas d'incoherence entre les sections (ex: objectifs ambitieux avec budget reduit)
- [ ] Le sponsor et le chef de projet sont clairement identifies
- [ ] Les dependances externes sont listees
- [ ] Le document a ete relu et valide par l'utilisateur
