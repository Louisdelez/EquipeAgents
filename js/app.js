// --- Derived constants from PHASES (agents.js) ---

const PHASE_COLORS = Object.fromEntries(PHASES.map(p => [p.num, p.color]));

function getPhaseLabel(phase) {
    const labels = I18N.t('phaseLabels');
    return labels[phase] || `${I18N.t('step')} ${phase}`;
}

// --- i18n helpers ---

function at(agent, field) {
    return I18N.agentField(agent, field);
}

function am(agent) {
    return I18N.agentMethodology(agent);
}

// --- Apply UI translations ---

function applyUITranslations() {
    document.documentElement.lang = I18N.current;
    document.title = I18N.t('siteTitle');
    document.getElementById('pageTitle').textContent = I18N.t('pageTitle');
    document.getElementById('searchInput').placeholder = I18N.t('searchPlaceholder');
    document.getElementById('searchLabel').textContent = I18N.t('searchLabel');
    document.getElementById('noResults').textContent = I18N.t('noResults');
    document.getElementById('detailBackText').textContent = I18N.t('back');

    // Render header actions with lang selector
    const headerActions = document.getElementById('headerActions');
    headerActions.innerHTML = `
        <button class="snapshot-btn" id="snapshotBtn" aria-label="${I18N.t('snapshot')}">
            <i data-lucide="camera"></i>
            <span>${I18N.t('snapshot')}</span>
        </button>
        ${renderLangSelector()}
        <a href="about.html" class="header-link" aria-label="${I18N.t('aboutLink')}">
            <i data-lucide="info"></i>
        </a>
        <button class="theme-toggle" id="themeToggle" aria-label="${I18N.t('themeToggle')}">
            <i data-lucide="sun"></i>
        </button>
    `;
    lucide.createIcons();
    initLangSelector();
    initSnapshotBtn();
}

// --- Rendering ---

function renderContacts(filter = '') {
    const container = document.getElementById('contactsContainer');
    const noResults = document.getElementById('noResults');
    container.innerHTML = '';
    let totalVisible = 0;

    PHASES.forEach(phase => {
        const phaseAgents = AGENTS.filter(a => a.phase === phase.num);
        const filtered = filter
            ? phaseAgents.filter(a =>
                `${a.firstName} ${a.lastName}`.toLowerCase().includes(filter) ||
                at(a, 'agentName').toLowerCase().includes(filter) ||
                at(a, 'document').toLowerCase().includes(filter) ||
                at(a, 'shortDesc').toLowerCase().includes(filter))
            : phaseAgents;

        if (!filtered.length) return;
        totalVisible += filtered.length;

        const section = document.createElement('div');
        section.className = 'phase-section';
        section.innerHTML = `
            <div class="phase-header">
                <div class="phase-indicator" style="background:${phase.color}"></div>
                <div class="phase-label">${I18N.t('step')} ${phase.num} <span class="phase-title-sep">—</span> ${I18N.phaseLabel(phase)}</div>
            </div>
            <div class="contacts-list">
                ${filtered.map(a => `
                    <div class="contact-card" onclick="openDetail(${a.id})">
                        <div class="contact-avatar-wrapper">
                            <img class="contact-avatar" src="${a.photo}" alt="${a.firstName} ${a.lastName}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
                            <div class="contact-avatar-placeholder" style="display:none;background:${a.color}">${a.firstName[0]}${a.lastName[0]}</div>
                        </div>
                        <div class="contact-info">
                            <div class="contact-name">
                                <span class="first-name">${a.firstName}</span> <span class="last-name">${a.lastName}</span>
                            </div>
                            <div class="contact-role">${at(a, 'document')}</div>
                        </div>
                        <span class="contact-chevron"><i data-lucide="chevron-right"></i></span>
                    </div>
                `).join('')}
            </div>`;
        container.appendChild(section);
    });

    noResults.style.display = totalVisible === 0 ? 'block' : 'none';
    lucide.createIcons();
}

// --- Detail view ---

function openDetail(agentId) {
    const a = AGENTS.find(ag => ag.id === agentId);
    if (!a) return;

    const overlay = document.getElementById('detailOverlay');
    const content = document.getElementById('detailContent');
    const c = PHASE_COLORS[a.phase];
    const methodology = am(a);

    content.innerHTML = `
        <div class="detail-hero">
            <img class="detail-avatar" src="${a.photo}" alt="${a.firstName} ${a.lastName}" onerror="this.style.display='none';this.nextElementSibling.style.display='flex';">
            <div class="detail-avatar-placeholder" style="display:none;background:${a.color}">${a.firstName[0]}${a.lastName[0]}</div>
            <div class="detail-name">${a.firstName} ${a.lastName}</div>
            <div class="detail-agent-name">${at(a, 'agentName')}</div>
            <div class="detail-document">${at(a, 'document')}</div>
            <span class="detail-phase-badge" style="background:${c}22;color:${c}">${getPhaseLabel(a.phase)}</span>
        </div>

        <div class="detail-actions">
            <a class="action-btn call" href="${a.gptLink}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
                <span class="action-btn-icon"><i data-lucide="message-circle"></i></span>
                <span class="action-btn-label">${I18N.t('message')}</span>
            </a>
        </div>

        <div class="detail-section">
            <div class="detail-description"><p>${at(a, 'shortDesc')}</p></div>
        </div>

        <details class="detail-accordion">
            <summary class="detail-accordion-header">
                <span>${I18N.t('whatFor')}</span>
                <span class="detail-accordion-icon"><i data-lucide="chevron-down"></i></span>
            </summary>
            <div class="detail-accordion-body">
                <div class="detail-description"><p>${at(a, 'whatFor')}</p></div>
            </div>
        </details>

        <details class="detail-accordion">
            <summary class="detail-accordion-header">
                <span>${I18N.t('whyUse')}</span>
                <span class="detail-accordion-icon"><i data-lucide="chevron-down"></i></span>
            </summary>
            <div class="detail-accordion-body">
                <div class="detail-description"><p>${at(a, 'whyUse')}</p></div>
            </div>
        </details>

        <details class="detail-accordion">
            <summary class="detail-accordion-header">
                <span>${I18N.t('howToUse')}</span>
                <span class="detail-accordion-icon"><i data-lucide="chevron-down"></i></span>
            </summary>
            <div class="detail-accordion-body">
                <div class="detail-description"><p>${at(a, 'howToUse')}</p></div>
            </div>
        </details>

        <details class="detail-accordion">
            <summary class="detail-accordion-header">
                <span>${I18N.t('methodology')}</span>
                <span class="detail-accordion-icon"><i data-lucide="chevron-down"></i></span>
            </summary>
            <div class="detail-accordion-body">
                ${methodology.map((step, i) => `
                    <div class="method-step">
                        <div class="method-step-number" style="background:${a.color}">${i + 1}</div>
                        <div class="method-step-content">
                            <div class="method-step-title">${step.title}</div>
                            <div class="method-step-desc">${step.desc} - ${step.time}</div>
                        </div>
                    </div>`).join('')}
            </div>
        </details>

        <div class="detail-section-header">${I18N.t('resources')}</div>
        <div class="detail-section">
            <div class="download-files">
                ${renderDownloadRow(a.folder + '/instructions.md', 'clipboard-list', I18N.t('promptSystem'), I18N.t('promptSystemDesc'))}
                ${renderDownloadRow(a.folder + '/01-methodologie-et-questions.md', 'file-search', I18N.t('methodologyFile'), I18N.t('methodologyFileDesc'))}
                ${renderDownloadRow(a.folder + '/02-frameworks-et-pieges.md', 'triangle-alert', I18N.t('frameworks'), I18N.t('frameworksDesc'))}
                ${renderDownloadRow(a.folder + '/03-template.md', 'file-text', I18N.t('template'), I18N.t('templateDesc'))}
                ${renderDownloadRow(a.photo, 'camera', I18N.t('photo'), I18N.t('photoDesc'))}
            </div>
        </div>
        <div style="height:40px"></div>`;

    overlay.classList.add('active');
    overlay.scrollTop = 0;
    history.pushState({ agentId }, '', `#agent-${agentId}`);
    if (window.innerWidth < 1024) {
        document.body.style.overflow = 'hidden';
    }
    lucide.createIcons();
}

function renderDownloadRow(href, icon, name, desc) {
    return `<a class="download-file-row" href="${href}" download>
        <span class="download-file-icon"><i data-lucide="${icon}"></i></span>
        <div class="download-file-info">
            <div class="download-file-name">${name}</div>
            <div class="download-file-desc">${desc}</div>
        </div>
        <span class="download-file-arrow"><i data-lucide="download"></i></span>
    </a>`;
}

// --- Snapshot ---

const SNAPSHOT_CONTENT = `# Instruction \u2014 Snapshot de Conversation

Analyse IMMEDIATEMENT toute la conversation ci-dessus entre l'utilisateur et l'IA. Ne pose aucune question, ne demande aucune confirmation. Genere directement une snapshot structuree en Markdown en respectant exactement le format ci-dessous.

## Qui tu es

Tu es un expert en gestion de connaissances. Tu captures l'essentiel d'une conversation pour qu'elle puisse etre reprise plus tard sans rien relire.

## Tes regles

1. **Execute immediatement.** Des que ce prompt est colle, tu analyses la conversation et tu generes la snapshot. Zero question, zero confirmation.
2. **Commence par proposer le nom de fichier** selon la convention : \`NNN_YYYY-MM-DD_projet_sujet.md\` (NNN = numero sequentiel ou XXX si inconnu, date du jour, projet en kebab-case, sujet en 2-5 mots kebab-case).
3. **Genere un fichier .md telechargeable.** Utilise l'outil code interpreter / analyse de donnees pour creer le fichier et fournir un lien de telechargement. Si ce n'est pas possible (outil indisponible), genere la snapshot dans un artifact ou un bloc de code Markdown copiable.
4. **Capture le raisonnement, pas juste les conclusions.** Une decision sans son "pourquoi" est inutile.
5. **Sois factuel.** Ne documente que ce qui a ete reellement dit ou decide. Si incertain, marque \`[a confirmer]\`.
6. **Sois concis.** La snapshot ne devrait pas depasser 500 mots (hors metadata). Compresse si la conversation etait longue.
7. **Distingue ferme vs provisoire.** Marque les decisions provisoires avec \`[provisoire]\`.
8. **Supprime les sections vides** plutot que d'ecrire "N/A" ou "Aucun".
9. **Le bloc "Contexte a recharger" est le plus important.** C'est ce qui sera copie-colle dans la prochaine session. Il doit etre autonome, complet et actionnable. Maximum 250 mots.
10. **Le nom du fichier telecharge doit respecter la convention de nommage.** Pas de \`snapshot.md\` generique.

## Format de la snapshot

\`\`\`markdown
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

# [Titre descriptif \u2014 doit permettre de comprendre le sujet sans ouvrir le fichier]

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

- [ ] [Question \u2014 pourquoi c'est encore ouvert]

## Prochaines etapes

- [ ] [Action concrete] \u2014 *[responsable si applicable]*

## Contexte a recharger

> **Pour reprendre cette conversation, colle ce bloc dans une nouvelle session :**
>
> "Je reprends un travail sur [projet]. Voici ou on en est : [etat actuel]. Les decisions deja prises : [liste]. Les prochaines etapes : [liste]. Les contraintes : [liste]. La prochaine tache : [tache specifique]."

---

*Snapshot generee le [date] \u2014 conversation avec [modele IA]*
*Session precedente : [ref ou "Premiere session"]*
*Session suivante : [a completer]*
\`\`\`
`;

function initSnapshotBtn() {
    const btn = document.getElementById('snapshotBtn');
    if (!btn) return;
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(SNAPSHOT_CONTENT);
            showSnapshotToast(I18N.t('snapshotCopied'));
        } catch (e) {
            console.error('Snapshot copy failed:', e);
        }
    });
}

function showSnapshotToast(msg) {
    const existing = document.querySelector('.snapshot-toast');
    if (existing) existing.remove();
    const toast = document.createElement('div');
    toast.className = 'snapshot-toast';
    toast.textContent = msg;
    document.body.appendChild(toast);
    requestAnimationFrame(() => toast.classList.add('visible'));
    setTimeout(() => {
        toast.classList.remove('visible');
        setTimeout(() => toast.remove(), 300);
    }, 1500);
}

// --- Interactions ---

function closeDetail() {
    const overlay = document.getElementById('detailOverlay');
    if (!overlay.classList.contains('active')) return;
    overlay.style.animation = 'slideOut 0.3s ease forwards';
    setTimeout(() => {
        overlay.classList.remove('active');
        overlay.style.animation = '';
        document.body.style.overflow = '';
    }, 280);
}

// --- Events ---

document.getElementById('searchInput').addEventListener('input', e => {
    renderContacts(e.target.value.toLowerCase().trim());
});

document.getElementById('detailBackBtn').addEventListener('click', () => {
    history.back();
});

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeDetail();
});

window.addEventListener('popstate', () => {
    const overlay = document.getElementById('detailOverlay');
    if (overlay.classList.contains('active')) closeDetail();
});

// --- Init ---
applyUITranslations();
renderContacts();
