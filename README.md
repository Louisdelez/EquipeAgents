# Equipe Agents IA

Site statique presentant une equipe de 24 agents IA specialises, chacun dedie a un document de projet specifique. Les agents couvrent 4 phases : Exploration, Lancement, Croissance et Scale.

## Lancer le site

Ouvrir `index.html` dans un navigateur. Aucun build ni serveur requis.

Pour un serveur local (optionnel) :

```bash
python3 -m http.server 8000
# ou
npx serve .
```

## Structure du projet

```
EquipeAgents/
├── index.html              # Page principale
├── README.md
├── css/
│   └── styles.css          # Styles (dark/light theme)
├── js/
│   ├── agents.js           # Donnees des 24 agents et des 4 phases
│   ├── app.js              # Rendu, navigation, interactions
│   └── theme.js            # Toggle dark/light
├── assets/
│   └── images/             # 24 photos d'agents (.webp, 300x300)
├── Agents/                 # 96 fichiers .md (4 par agent)
│   ├── ETAPE 1 .../
│   ├── ETAPE 2 .../
│   ├── ETAPE 3 .../
│   └── ETAPE 4 .../
└── docs/
    ├── Phases.md            # Description des 4 phases
    └── lienGPT.md           # Liens ChatGPT de chaque agent
```

## Ajouter un agent

1. Ajouter l'objet agent dans le tableau `AGENTS` de `js/agents.js` avec un `id` unique
2. Placer la photo au format WebP 300x300 dans `assets/images/`
3. Creer le dossier de documents dans `Agents/ETAPE X .../NomDocument/` avec les 4 fichiers .md
4. Mettre a jour `docs/lienGPT.md` et `docs/Phases.md`
