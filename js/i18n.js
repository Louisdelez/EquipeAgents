// === Internationalization core ===

const I18N = {
    current: localStorage.getItem('lang') || 'fr',
    available: [
        { code: 'fr', label: 'Francais' },
        { code: 'en', label: 'English' },
        { code: 'de', label: 'Deutsch' },
        { code: 'it', label: 'Italiano' },
        { code: 'es', label: 'Espanol' }
    ],

    set(lang) {
        this.current = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
    },

    t(key) {
        return UI_STRINGS[this.current]?.[key] || UI_STRINGS.fr[key] || key;
    },

    agentField(agent, field) {
        if (this.current === 'fr') return agent[field];
        return AGENTS_I18N?.[this.current]?.[agent.id]?.[field] || agent[field];
    },

    agentMethodology(agent) {
        if (this.current === 'fr') return agent.methodology;
        return AGENTS_I18N?.[this.current]?.[agent.id]?.methodology || agent.methodology;
    },

    phaseLabel(phase) {
        if (this.current === 'fr') return phase.label;
        return PHASES_I18N?.[this.current]?.[phase.num]?.label || phase.label;
    },

    phaseSubtitle(phase) {
        if (this.current === 'fr') return phase.subtitle;
        return PHASES_I18N?.[this.current]?.[phase.num]?.subtitle || phase.subtitle;
    }
};

// === UI String translations ===

const UI_STRINGS = {
    fr: {
        pageTitle: 'Agents',
        searchPlaceholder: 'Rechercher',
        searchLabel: 'Rechercher un agent',
        noResults: 'Aucun agent trouve.',
        back: 'Agents',
        step: 'Etape',
        message: 'Message',
        whatFor: 'A quoi sert cet agent ?',
        whyUse: 'Pourquoi l\'utiliser ?',
        howToUse: 'Comment l\'utiliser ?',
        methodology: 'Methodologie de conversation',
        resources: 'Ressources',
        promptSystem: 'Prompt systeme',
        promptSystemDesc: 'Instructions completes de l\'agent',
        methodologyFile: 'Methodologie',
        methodologyFileDesc: 'Questions et demarche detaillees',
        frameworks: 'Frameworks',
        frameworksDesc: 'References et pieges a eviter',
        template: 'Template',
        templateDesc: 'Modele du document a produire',
        photo: 'Photo',
        photoDesc: 'Photo de profil de l\'agent',
        aboutLink: 'A propos',
        themeToggle: 'Changer de theme',
        snapshot: 'Creer une snapshot',
        snapshotCopied: 'Copie !',
        siteTitle: 'Equipe Agents IA',
        aboutPageTitle: 'A propos — Equipe Agents IA',
        phaseLabels: {
            1: 'Etape 1 - Exploration',
            2: 'Etape 2 - Lancement',
            3: 'Etape 3 - Croissance',
            4: 'Etape 4 - Scale'
        }
    },
    en: {
        pageTitle: 'Agents',
        searchPlaceholder: 'Search',
        searchLabel: 'Search for an agent',
        noResults: 'No agents found.',
        back: 'Agents',
        step: 'Step',
        message: 'Message',
        whatFor: 'What is this agent for?',
        whyUse: 'Why use it?',
        howToUse: 'How to use it?',
        methodology: 'Conversation methodology',
        resources: 'Resources',
        promptSystem: 'System prompt',
        promptSystemDesc: 'Complete agent instructions',
        methodologyFile: 'Methodology',
        methodologyFileDesc: 'Detailed questions and approach',
        frameworks: 'Frameworks',
        frameworksDesc: 'References and pitfalls to avoid',
        template: 'Template',
        templateDesc: 'Document template to produce',
        photo: 'Photo',
        photoDesc: 'Agent profile photo',
        aboutLink: 'About',
        themeToggle: 'Toggle theme',
        snapshot: 'Create a snapshot',
        snapshotCopied: 'Copied!',
        siteTitle: 'AI Agents Team',
        aboutPageTitle: 'About — AI Agents Team',
        phaseLabels: {
            1: 'Step 1 - Exploration',
            2: 'Step 2 - Launch',
            3: 'Step 3 - Growth',
            4: 'Step 4 - Scale'
        }
    },
    de: {
        pageTitle: 'Agenten',
        searchPlaceholder: 'Suchen',
        searchLabel: 'Nach einem Agenten suchen',
        noResults: 'Keine Agenten gefunden.',
        back: 'Agenten',
        step: 'Schritt',
        message: 'Nachricht',
        whatFor: 'Wozu dient dieser Agent?',
        whyUse: 'Warum ihn verwenden?',
        howToUse: 'Wie wird er verwendet?',
        methodology: 'Gesprachsmethodik',
        resources: 'Ressourcen',
        promptSystem: 'System-Prompt',
        promptSystemDesc: 'Vollstandige Anweisungen des Agenten',
        methodologyFile: 'Methodik',
        methodologyFileDesc: 'Detaillierte Fragen und Vorgehensweise',
        frameworks: 'Frameworks',
        frameworksDesc: 'Referenzen und zu vermeidende Fehler',
        template: 'Vorlage',
        templateDesc: 'Dokumentvorlage zur Erstellung',
        photo: 'Foto',
        photoDesc: 'Profilbild des Agenten',
        aboutLink: 'Uber uns',
        themeToggle: 'Thema wechseln',
        snapshot: 'Snapshot erstellen',
        snapshotCopied: 'Kopiert!',
        siteTitle: 'KI-Agenten Team',
        aboutPageTitle: 'Uber uns — KI-Agenten Team',
        phaseLabels: {
            1: 'Schritt 1 - Erkundung',
            2: 'Schritt 2 - Start',
            3: 'Schritt 3 - Wachstum',
            4: 'Schritt 4 - Skalierung'
        }
    },
    it: {
        pageTitle: 'Agenti',
        searchPlaceholder: 'Cerca',
        searchLabel: 'Cerca un agente',
        noResults: 'Nessun agente trovato.',
        back: 'Agenti',
        step: 'Fase',
        message: 'Messaggio',
        whatFor: 'A cosa serve questo agente?',
        whyUse: 'Perche usarlo?',
        howToUse: 'Come si usa?',
        methodology: 'Metodologia di conversazione',
        resources: 'Risorse',
        promptSystem: 'Prompt di sistema',
        promptSystemDesc: 'Istruzioni complete dell\'agente',
        methodologyFile: 'Metodologia',
        methodologyFileDesc: 'Domande e approccio dettagliati',
        frameworks: 'Framework',
        frameworksDesc: 'Riferimenti e trappole da evitare',
        template: 'Modello',
        templateDesc: 'Modello del documento da produrre',
        photo: 'Foto',
        photoDesc: 'Foto profilo dell\'agente',
        aboutLink: 'Chi siamo',
        themeToggle: 'Cambia tema',
        snapshot: 'Crea snapshot',
        snapshotCopied: 'Copiato!',
        siteTitle: 'Team Agenti IA',
        aboutPageTitle: 'Chi siamo — Team Agenti IA',
        phaseLabels: {
            1: 'Fase 1 - Esplorazione',
            2: 'Fase 2 - Lancio',
            3: 'Fase 3 - Crescita',
            4: 'Fase 4 - Scala'
        }
    },
    es: {
        pageTitle: 'Agentes',
        searchPlaceholder: 'Buscar',
        searchLabel: 'Buscar un agente',
        noResults: 'Ningun agente encontrado.',
        back: 'Agentes',
        step: 'Etapa',
        message: 'Mensaje',
        whatFor: 'Para que sirve este agente?',
        whyUse: 'Por que usarlo?',
        howToUse: 'Como usarlo?',
        methodology: 'Metodologia de conversacion',
        resources: 'Recursos',
        promptSystem: 'Prompt del sistema',
        promptSystemDesc: 'Instrucciones completas del agente',
        methodologyFile: 'Metodologia',
        methodologyFileDesc: 'Preguntas y enfoque detallados',
        frameworks: 'Frameworks',
        frameworksDesc: 'Referencias y trampas a evitar',
        template: 'Plantilla',
        templateDesc: 'Plantilla del documento a producir',
        photo: 'Foto',
        photoDesc: 'Foto de perfil del agente',
        aboutLink: 'Acerca de',
        themeToggle: 'Cambiar tema',
        snapshot: 'Crear snapshot',
        snapshotCopied: 'Copiado!',
        siteTitle: 'Equipo Agentes IA',
        aboutPageTitle: 'Acerca de — Equipo Agentes IA',
        phaseLabels: {
            1: 'Etapa 1 - Exploracion',
            2: 'Etapa 2 - Lanzamiento',
            3: 'Etapa 3 - Crecimiento',
            4: 'Etapa 4 - Escala'
        }
    }
};

// === Phase translations ===

const PHASES_I18N = {
    en: {
        1: { label: "Exploration / Validation", subtitle: "3-5 documents  --  Laying the project foundations" },
        2: { label: "Structured Launch", subtitle: "6-10 documents  --  Structuring and formalizing the project" },
        3: { label: "Growth / Complexity", subtitle: "12-18 documents  --  Managing the scaling" },
        4: { label: "Scale / Enterprise", subtitle: "18-25+ documents  --  Large-scale operations" }
    },
    de: {
        1: { label: "Erkundung / Validierung", subtitle: "3-5 Dokumente  --  Die Grundlagen des Projekts legen" },
        2: { label: "Strukturierter Start", subtitle: "6-10 Dokumente  --  Das Projekt strukturieren und formalisieren" },
        3: { label: "Wachstum / Komplexitat", subtitle: "12-18 Dokumente  --  Den Ausbau bewaltigen" },
        4: { label: "Skalierung / Enterprise", subtitle: "18-25+ Dokumente  --  Betrieb im grossen Massstab" }
    },
    it: {
        1: { label: "Esplorazione / Validazione", subtitle: "3-5 documenti  --  Porre le basi del progetto" },
        2: { label: "Lancio strutturato", subtitle: "6-10 documenti  --  Strutturare e ufficializzare il progetto" },
        3: { label: "Crescita / Complessita", subtitle: "12-18 documenti  --  Gestire la crescita" },
        4: { label: "Scala / Enterprise", subtitle: "18-25+ documenti  --  Operazioni su larga scala" }
    },
    es: {
        1: { label: "Exploracion / Validacion", subtitle: "3-5 documentos  --  Sentar las bases del proyecto" },
        2: { label: "Lanzamiento estructurado", subtitle: "6-10 documentos  --  Estructurar y formalizar el proyecto" },
        3: { label: "Crecimiento / Complejidad", subtitle: "12-18 documentos  --  Gestionar el crecimiento" },
        4: { label: "Escala / Enterprise", subtitle: "18-25+ documentos  --  Operaciones a gran escala" }
    }
};

// === Language selector ===

function renderLangSelector() {
    const current = I18N.current.toUpperCase();
    return `
        <div class="lang-selector" id="langSelector">
            <button class="lang-btn" id="langBtn" aria-label="Language">
                <i data-lucide="globe"></i>
                <span class="lang-code">${current}</span>
            </button>
            <div class="lang-dropdown" id="langDropdown">
                ${I18N.available.map(l => `
                    <button class="lang-option ${l.code === I18N.current ? 'active' : ''}" data-lang="${l.code}">
                        ${l.label}
                    </button>
                `).join('')}
            </div>
        </div>`;
}

function initLangSelector() {
    const btn = document.getElementById('langBtn');
    const dropdown = document.getElementById('langDropdown');
    if (!btn || !dropdown) return;

    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdown.classList.toggle('open');
    });

    dropdown.querySelectorAll('.lang-option').forEach(opt => {
        opt.addEventListener('click', () => {
            const lang = opt.dataset.lang;
            I18N.set(lang);
            location.reload();
        });
    });

    document.addEventListener('click', () => {
        dropdown.classList.remove('open');
    });
}
