// === About page internationalization ===

const ABOUT_I18N = {
    fr: {
        heroTitle: 'Votre equipe de direction.<br>Propulsee par l\'IA.',
        heroSub: '24 agents specialises qui donnent a chaque porteur de projet la meme rigueur de structuration que Google, Amazon ou Spotify.',

        // Section 1
        section1Title: 'Le probleme : structurer un projet coute cher',
        section1P1: 'Quand Google lance un nouveau produit, une equipe entiere entre en action : un <strong>Chief Product Officer</strong> redige le PRD, un <strong>Staff Engineer</strong> signe la spec technique, un <strong>Head of Legal</strong> valide la conformite, un <strong>SRE Lead</strong> definit les SLA. Chez Amazon, aucune idee ne demarre sans un <strong>6-pager</strong> narratif et un <strong>PR/FAQ</strong> valide par le leadership. Chez Spotify, chaque initiative passe par le framework <strong>DIBB</strong> (Data, Insight, Belief, Bet).',
        section1P2: 'Ces methodes fonctionnent. Elles produisent des produits solides, bien penses, qui survivent au passage a l\'echelle. Le probleme ? <strong>Elles coutent une fortune.</strong>',
        callout1Title: 'Le cout d\'une equipe de direction tech',
        callout1Li1: '<strong>CTO</strong> : 310 000 $ / an en entreprise, 144 000 $ en startup (Carta, 2025)',
        callout1Li2: '<strong>CPO</strong> : 149 000 $ en seed, 250 000 $+ en Series B+ (Carta, 2025)',
        callout1Li3: '<strong>Head of Legal</strong> : 183 000 $ en moyenne en startup (Carta, 2025)',
        callout1Li4: '<strong>Security Engineer senior</strong> : 180 000 - 280 000 $ (Levels.fyi)',
        callout1Li5: '<strong>SRE Lead</strong> : 190 000 - 300 000 $ (Levels.fyi)',
        callout1P: 'Pour constituer une equipe complete capable de produire tous les documents fondateurs, il faut compter <strong>1 a 2 millions de dollars par an en salaires</strong>. Et c\'est avant le premier utilisateur.',
        section1P3: 'Resultat : les independants, les petites equipes et les startups early-stage se lancent sans cette structuration. Pas par choix — par contrainte economique.',

        // Section 2
        section2Title: 'Les consequences : 90% des startups echouent',
        section2P1: 'Les chiffres sont sans appel. Selon l\'etude de reference de <strong>CB Insights</strong> portant sur des centaines de post-mortems de startups :',
        stat1Number: '42%',
        stat1Label: 'echouent par absence de besoin reel sur le marche',
        stat2Number: '29%',
        stat2Label: 'echouent par manque de cash et de modele economique viable',
        stat3Number: '17%',
        stat3Label: 'echouent faute de business model clair',
        stat4Number: '23%',
        stat4Label: 'echouent parce qu\'elles n\'avaient pas la bonne equipe',
        section2P2: 'Chacun de ces problemes a une racine commune : <strong>un manque de structuration en amont</strong>. Pas de Vision Document ? On ne sait pas pourquoi on existe. Pas de Problem Statement ? On resout un probleme qui n\'existe pas. Pas de Business Case ? On brule du cash sans modele. Pas de PRD ? Chaque developpeur interprete les besoins a sa facon.',
        section2P3: 'Le <strong>PMI</strong> (Project Management Institute) confirme : <strong>70% des projets echouent mondialement</strong>, et les trois premieres causes sont les changements de priorites, les changements d\'objectifs et <strong>la collecte imprecise des exigences</strong>. 66% des organisations rapportent des retards frequents causes par des requirements flous.',
        section2P4: 'Ce n\'est pas un probleme de talent ou de motivation. C\'est un probleme de methode et de moyens.',

        // Section 3
        section3Title: 'La solution : une equipe de 24 experts IA',
        section3P1: 'Ce projet part d\'une idee simple : <strong>et si chaque porteur de projet pouvait avoir acces a la meme rigueur de structuration que les GAFAM, sans en payer le prix ?</strong>',
        section3P2: 'Les 24 agents IA de cette equipe reproduisent les roles et les methodes des meilleures equipes produit du monde. Chaque agent est specialise dans un document precis, forme aux frameworks de reference, et guide l\'utilisateur comme le ferait un expert senior avec 15+ ans d\'experience.',
        phase1Title: 'Etape 1 — Exploration',
        phase1Desc: 'Vision Document, Problem Statement, Business Case, Objectifs initiaux. Poser les fondations : pourquoi ce projet existe, quel probleme il resout, est-il viable, que doit accomplir la v1.',
        phase2Title: 'Etape 2 — Lancement',
        phase2Desc: 'Project Charter, PRD, Roadmap, Tech Spec, Decision Log, OKRs. Structurer et officialiser : qui fait quoi, quelles features, quelle architecture, quels objectifs mesurables.',
        phase3Title: 'Etape 3 — Croissance',
        phase3Desc: 'UX Research, API Spec, Data Spec, Security Review, Performance Plan, GTM, Risk Management. Gerer la montee en charge : utilisateurs, donnees, securite, marche.',
        phase4Title: 'Etape 4 — Scale',
        phase4Desc: 'Compliance, Legal Review, Architecture Review, Incident Report, Post-Mortem, SLA, Governance. Operations enterprise : conformite, resilience, gouvernance a grande echelle.',
        section3P3: 'Cette sequence n\'est pas arbitraire. Elle reproduit l\'ordre dans lequel les meilleures equipes produit travaillent : <strong>on clarifie avant de construire, on structure avant de scaler, on anticipe avant de reagir</strong>.',

        // Section 4
        section4Title: 'Comment ca fonctionne concretement',
        section4P1: 'Chaque agent est un <strong>GPT personnalise</strong> accessible via ChatGPT. Il ne remplit pas le document a votre place — il vous guide a travers un entretien structure, exactement comme le ferait un consultant senior.',
        step1Title: 'Choisissez votre etape',
        step1Desc: 'Identifiez ou en est votre projet. Vous demarrez ? Etape 1. Vous avez deja valide l\'idee ? Etape 2. Vous scalez ? Etapes 3-4.',
        step2Title: 'Lancez l\'agent',
        step2Desc: 'Cliquez sur "Message" pour ouvrir la conversation. L\'agent se presente, explique sa methode, et commence a poser des questions.',
        step3Title: 'Repondez aux questions',
        step3Desc: 'L\'agent procede par phases. Il vous challenge, vous fait preciser, vous pousse a aller plus loin. Si votre reponse est vague, il insiste.',
        step4Title: 'Recevez votre document',
        step4Desc: 'A la fin de l\'entretien, l\'agent genere un document structure en Markdown, pret a etre integre dans votre projet.',
        section4P2: 'La conversation dure entre <strong>15 et 45 minutes</strong> selon l\'agent et la complexite du projet. A la fin, vous avez un document de qualite professionnelle que des equipes de 10 personnes mettent normalement des semaines a produire.',

        // Section 5
        section5Title: 'Ce qui change par rapport a l\'ancienne methode',
        compareOldHeader: 'Methode traditionnelle',
        compareOldLi1: 'Recruter un CPO a 250 000 $/an pour ecrire le PRD',
        compareOldLi2: 'Engager un cabinet McKinsey/BCG a 500 000 $ pour le Business Case',
        compareOldLi3: 'Attendre 3-6 mois pour constituer l\'equipe fondatrice',
        compareOldLi4: 'Payer un avocat 400 $/h pour la Legal Review',
        compareOldLi5: 'Deleguer la roadmap au VP Engineering recrute apres 8 mois',
        compareOldLi6: 'Rassembler 8-12 personnes en salle pour un Design Sprint d\'une semaine',
        compareNewHeader: 'Avec les agents IA',
        compareNewLi1: 'Produire le PRD en 30 min avec Mathieu (agent specialise PRD)',
        compareNewLi2: 'Generer le Business Case en 20 min avec Theo (ex-Goldman/McKinsey profile)',
        compareNewLi3: 'Demarrer immediatement, seul, depuis votre navigateur',
        compareNewLi4: 'Obtenir une Legal Review structuree en 30 min avec William',
        compareNewLi5: 'Creer la roadmap en 25 min avec Sarah (methode Spotify)',
        compareNewLi6: 'Produire les 24 documents fondateurs en quelques jours, seul',
        section5P1: 'Il ne s\'agit pas de remplacer les humains. Il s\'agit de <strong>donner acces a l\'expertise des qu\'on en a besoin</strong>, sans attendre d\'avoir les moyens de recruter. McKinsey lui-meme a deploye plus de 12 000 agents IA internes, et les ex-consultants McKinsey entrainent desormais des modeles IA pour reproduire leurs methodes. La democratisation est en marche.',

        // Section 6
        section6Title: 'La vision : democratiser l\'excellence operationnelle',
        section6P1: 'Selon McKinsey, l\'IA generative pourrait generer entre <strong>2 600 et 4 400 milliards de dollars de valeur annuelle</strong> — l\'equivalent du PIB du Royaume-Uni. BCG note que pres de 80% des organisations utilisent deja l\'IA generative, mais que la plupart n\'en tirent pas encore pleinement parti.',
        section6P2: 'Ce projet incarne une conviction : <strong>la qualite de structuration d\'un projet ne devrait pas dependre de la taille du compte en banque</strong>.',
        section6P3: 'Aujourd\'hui, un independant a Bordeaux, une startup de 3 personnes a Dakar ou un etudiant entrepreneur a Montreal peuvent acceder a la meme methodologie qu\'une equipe de 50 personnes dans la Silicon Valley. La seule difference ? Au lieu de payer des millions pour reunir un CPO, un CTO, un Head of Legal, un Security Lead et un SRE, ils conversent avec des agents IA qui incarnent ces expertises.',
        callout2Title: 'L\'equation a change',
        callout2P1: 'Avant : <strong>Expertise = Argent + Temps + Reseau</strong><br>\n                Maintenant : <strong>Expertise = Methode + IA + Discipline</strong>',
        callout2P2: 'Ce n\'est plus une question de moyens. C\'est une question de volonte.',

        // Section 7
        section7Title: 'Comment travailler avec des agents IA : une nouvelle methode',
        section7P1: 'Travailler avec des agents IA, ce n\'est pas "demander a ChatGPT d\'ecrire un document". C\'est fundamentalement different. Voici les principes cles :',
        section7H3_1: '1. L\'agent mene, vous repondez',
        section7H3_1P: 'Contrairement a un chatbot classique ou vous posez les questions, ici c\'est l\'agent qui pilote l\'entretien. Il a une methodologie structuree, un ordre precis, des criteres de qualite. Votre role est de repondre avec le plus de precision et d\'honnetete possible. Si vous etes vague, il vous challengera.',
        section7H3_2: '2. Un document a la fois, dans l\'ordre',
        section7H3_2P: 'Ne sautez pas d\'etapes. Ne commencez pas par la Tech Spec si vous n\'avez pas de Vision Document. La sequence existe pour une raison : chaque document s\'appuie sur les precedents. Le Problem Statement utilise la vision. Le Business Case utilise le probleme. Le PRD utilise les objectifs. C\'est une chaine.',
        section7H3_3: '3. Donnez du contexte, pas des ordres',
        section7H3_3P: 'Les meilleurs resultats viennent quand vous decrivez votre situation reelle : votre marche, vos contraintes, vos doutes. L\'agent ne produit pas un document generique — il adapte sa methodologie a VOTRE contexte. Plus vous etes precis, plus le document sera pertinent.',
        section7H3_4: '4. Contestez, debattez, affinez',
        section7H3_4P: 'Chaque agent est concu pour etre challenge. Si vous n\'etes pas d\'accord avec une analyse, dites-le. Les meilleurs documents naissent du dialogue, pas de la soumission. L\'agent ajustera sa position si vos arguments sont solides.',
        section7H3_5: '5. Iterez entre les agents',
        section7H3_5P: 'Apres avoir produit un document, vous pouvez donner son contenu a l\'agent suivant comme contexte. "Voici ma Vision Document, maintenant travaillons le Problem Statement." Chaque agent enrichit le travail du precedent.',

        // Section 8
        section8Title: 'Pour qui est ce projet ?',
        audience1Title: 'Independants et solopreneurs',
        audience1Desc: 'Vous avez une idee mais pas d\'equipe. Les agents deviennent vos co-fondateurs virtuels qui vous aident a structurer avant de coder.',
        audience2Title: 'Startups early-stage (1-5 personnes)',
        audience2Desc: 'Vous n\'avez pas le budget pour un CPO et un CTO. Les agents compensent les expertises manquantes le temps de croitre.',
        audience3Title: 'Etudiants et porteurs de projets',
        audience3Desc: 'Vous apprenez a structurer un projet. Les agents vous enseignent les methodes des meilleures entreprises en vous les faisant pratiquer.',
        audience4Title: 'PME et equipes internes',
        audience4Desc: 'Vous lancez un nouveau produit ou projet interne. Les agents standardisent votre documentation et accelerent la phase de cadrage.',

        // Section 9
        section9Title: 'Ce que les agents ne remplacent pas',
        section9P1: 'Soyons clairs sur les limites :',
        section9Li1: '<strong>Le jugement humain.</strong> Les agents structurent, ils ne decident pas a votre place. La decision finale reste toujours la votre.',
        section9Li2: '<strong>L\'execution.</strong> Un PRD parfait ne code pas l\'application. Les agents produisent la documentation, pas le produit.',
        section9Li3: '<strong>Le reseau et les relations.</strong> Un Go-To-Market Plan ne remplace pas les vrais contacts avec vos premiers clients.',
        section9Li4: '<strong>L\'expertise juridique engageante.</strong> La Legal Review de William est un cadrage, pas un avis juridique opposable. Pour signer un contrat, consultez un vrai avocat.',
        section9P2: 'Les agents sont des <strong>accelerateurs de structuration</strong>, pas des substituts a la realite du terrain. Ils vous font gagner des semaines de reflexion, pas des annees d\'experience.',

        // Section 10
        section10Title: 'En resume',
        section10P1: 'Pendant des decennies, la qualite de structuration d\'un projet dependait directement des moyens financiers de l\'equipe. Les grandes entreprises avaient les methodes, les experts et les budgets. Les petites equipes improvisaient.',
        section10P2: '<strong>Ce temps est revolu.</strong>',
        section10P3: 'Avec 24 agents specialises, chacun maitrisant les frameworks des meilleures organisations mondiales, n\'importe qui peut produire une documentation projet de qualite enterprise. Pas en quelques mois avec une equipe de 15 personnes — en quelques jours, seul, depuis un navigateur.',
        section10P4: 'La question n\'est plus "avez-vous les moyens de bien structurer votre projet ?".<br>\n            La question est : <strong>"avez-vous la discipline de le faire ?"</strong>',

        // CTA
        ctaBtn: 'Decouvrir les 24 agents'
    },

    en: {
        heroTitle: 'Your leadership team.<br>Powered by AI.',
        heroSub: '24 specialized agents that give every project owner the same rigor of structuring as Google, Amazon or Spotify.',

        // Section 1
        section1Title: 'The problem: structuring a project is expensive',
        section1P1: 'When Google launches a new product, an entire team springs into action: a <strong>Chief Product Officer</strong> writes the PRD, a <strong>Staff Engineer</strong> signs the tech spec, a <strong>Head of Legal</strong> validates compliance, an <strong>SRE Lead</strong> defines the SLAs. At Amazon, no idea starts without a <strong>6-pager</strong> narrative and a <strong>PR/FAQ</strong> validated by leadership. At Spotify, every initiative goes through the <strong>DIBB</strong> framework (Data, Insight, Belief, Bet).',
        section1P2: 'These methods work. They produce solid, well-thought-out products that survive scaling. The problem? <strong>They cost a fortune.</strong>',
        callout1Title: 'The cost of a tech leadership team',
        callout1Li1: '<strong>CTO</strong>: $310,000/year in enterprise, $144,000 in startups (Carta, 2025)',
        callout1Li2: '<strong>CPO</strong>: $149,000 at seed, $250,000+ at Series B+ (Carta, 2025)',
        callout1Li3: '<strong>Head of Legal</strong>: $183,000 on average in startups (Carta, 2025)',
        callout1Li4: '<strong>Senior Security Engineer</strong>: $180,000 - $280,000 (Levels.fyi)',
        callout1Li5: '<strong>SRE Lead</strong>: $190,000 - $300,000 (Levels.fyi)',
        callout1P: 'To build a complete team capable of producing all founding documents, you need <strong>$1 to $2 million per year in salaries</strong>. And that\'s before the first user.',
        section1P3: 'Result: freelancers, small teams, and early-stage startups launch without this structuring. Not by choice — by economic constraint.',

        // Section 2
        section2Title: 'The consequences: 90% of startups fail',
        section2P1: 'The numbers speak for themselves. According to the landmark study by <strong>CB Insights</strong> covering hundreds of startup post-mortems:',
        stat1Number: '42%',
        stat1Label: 'fail due to no real market need',
        stat2Number: '29%',
        stat2Label: 'fail due to lack of cash and viable business model',
        stat3Number: '17%',
        stat3Label: 'fail due to lack of a clear business model',
        stat4Number: '23%',
        stat4Label: 'fail because they didn\'t have the right team',
        section2P2: 'Each of these problems has a common root: <strong>a lack of upfront structuring</strong>. No Vision Document? You don\'t know why you exist. No Problem Statement? You\'re solving a problem that doesn\'t exist. No Business Case? You\'re burning cash without a model. No PRD? Every developer interprets requirements their own way.',
        section2P3: 'The <strong>PMI</strong> (Project Management Institute) confirms: <strong>70% of projects fail globally</strong>, and the top three causes are shifting priorities, changing objectives, and <strong>inaccurate requirements gathering</strong>. 66% of organizations report frequent delays caused by unclear requirements.',
        section2P4: 'This is not a problem of talent or motivation. It\'s a problem of method and resources.',

        // Section 3
        section3Title: 'The solution: a team of 24 AI experts',
        section3P1: 'This project starts from a simple idea: <strong>what if every project owner could access the same rigor of structuring as the big tech companies, without paying the price?</strong>',
        section3P2: 'The 24 AI agents on this team replicate the roles and methods of the world\'s best product teams. Each agent specializes in a specific document, is trained in reference frameworks, and guides the user like a senior expert with 15+ years of experience would.',
        phase1Title: 'Step 1 — Exploration',
        phase1Desc: 'Vision Document, Problem Statement, Business Case, Initial Objectives. Laying the foundations: why this project exists, what problem it solves, is it viable, what must v1 accomplish.',
        phase2Title: 'Step 2 — Launch',
        phase2Desc: 'Project Charter, PRD, Roadmap, Tech Spec, Decision Log, OKRs. Structuring and formalizing: who does what, which features, what architecture, what measurable objectives.',
        phase3Title: 'Step 3 — Growth',
        phase3Desc: 'UX Research, API Spec, Data Spec, Security Review, Performance Plan, GTM, Risk Management. Managing the scaling: users, data, security, market.',
        phase4Title: 'Step 4 — Scale',
        phase4Desc: 'Compliance, Legal Review, Architecture Review, Incident Report, Post-Mortem, SLA, Governance. Enterprise operations: compliance, resilience, governance at scale.',
        section3P3: 'This sequence is not arbitrary. It replicates the order in which the best product teams work: <strong>clarify before building, structure before scaling, anticipate before reacting</strong>.',

        // Section 4
        section4Title: 'How it works in practice',
        section4P1: 'Each agent is a <strong>custom GPT</strong> accessible via ChatGPT. It doesn\'t fill in the document for you — it guides you through a structured interview, exactly like a senior consultant would.',
        step1Title: 'Choose your step',
        step1Desc: 'Identify where your project stands. Just starting? Step 1. Already validated the idea? Step 2. Scaling? Steps 3-4.',
        step2Title: 'Launch the agent',
        step2Desc: 'Click "Message" to open the conversation. The agent introduces itself, explains its method, and starts asking questions.',
        step3Title: 'Answer the questions',
        step3Desc: 'The agent proceeds in phases. It challenges you, asks you to clarify, pushes you to go further. If your answer is vague, it insists.',
        step4Title: 'Receive your document',
        step4Desc: 'At the end of the interview, the agent generates a structured Markdown document, ready to be integrated into your project.',
        section4P2: 'The conversation lasts between <strong>15 and 45 minutes</strong> depending on the agent and the project complexity. At the end, you have a professional-quality document that teams of 10 people normally take weeks to produce.',

        // Section 5
        section5Title: 'What changes compared to the old method',
        compareOldHeader: 'Traditional method',
        compareOldLi1: 'Hire a CPO at $250,000/year to write the PRD',
        compareOldLi2: 'Engage a McKinsey/BCG firm at $500,000 for the Business Case',
        compareOldLi3: 'Wait 3-6 months to build the founding team',
        compareOldLi4: 'Pay a lawyer $400/h for the Legal Review',
        compareOldLi5: 'Delegate the roadmap to the VP Engineering hired after 8 months',
        compareOldLi6: 'Gather 8-12 people in a room for a week-long Design Sprint',
        compareNewHeader: 'With AI agents',
        compareNewLi1: 'Produce the PRD in 30 min with Mathieu (specialized PRD agent)',
        compareNewLi2: 'Generate the Business Case in 20 min with Theo (ex-Goldman/McKinsey profile)',
        compareNewLi3: 'Start immediately, alone, from your browser',
        compareNewLi4: 'Get a structured Legal Review in 30 min with William',
        compareNewLi5: 'Create the roadmap in 25 min with Sarah (Spotify method)',
        compareNewLi6: 'Produce all 24 founding documents in a few days, alone',
        section5P1: 'It\'s not about replacing humans. It\'s about <strong>giving access to expertise as soon as you need it</strong>, without waiting until you can afford to hire. McKinsey itself has deployed over 12,000 internal AI agents, and former McKinsey consultants are now training AI models to replicate their methods. Democratization is underway.',

        // Section 6
        section6Title: 'The vision: democratizing operational excellence',
        section6P1: 'According to McKinsey, generative AI could generate between <strong>$2.6 and $4.4 trillion in annual value</strong> — the equivalent of the UK\'s GDP. BCG notes that nearly 80% of organizations already use generative AI, but most are not yet fully leveraging it.',
        section6P2: 'This project embodies a conviction: <strong>the quality of a project\'s structuring should not depend on the size of the bank account</strong>.',
        section6P3: 'Today, a freelancer in Bordeaux, a 3-person startup in Dakar, or a student entrepreneur in Montreal can access the same methodology as a 50-person team in Silicon Valley. The only difference? Instead of paying millions to assemble a CPO, a CTO, a Head of Legal, a Security Lead, and an SRE, they converse with AI agents that embody these expertises.',
        callout2Title: 'The equation has changed',
        callout2P1: 'Before: <strong>Expertise = Money + Time + Network</strong><br>\n                Now: <strong>Expertise = Method + AI + Discipline</strong>',
        callout2P2: 'It\'s no longer a question of resources. It\'s a question of willpower.',

        // Section 7
        section7Title: 'How to work with AI agents: a new method',
        section7P1: 'Working with AI agents is not "asking ChatGPT to write a document". It\'s fundamentally different. Here are the key principles:',
        section7H3_1: '1. The agent leads, you answer',
        section7H3_1P: 'Unlike a classic chatbot where you ask the questions, here the agent drives the interview. It has a structured methodology, a precise order, quality criteria. Your role is to answer with as much precision and honesty as possible. If you\'re vague, it will challenge you.',
        section7H3_2: '2. One document at a time, in order',
        section7H3_2P: 'Don\'t skip steps. Don\'t start with the Tech Spec if you don\'t have a Vision Document. The sequence exists for a reason: each document builds on the previous ones. The Problem Statement uses the vision. The Business Case uses the problem. The PRD uses the objectives. It\'s a chain.',
        section7H3_3: '3. Give context, not orders',
        section7H3_3P: 'The best results come when you describe your real situation: your market, your constraints, your doubts. The agent doesn\'t produce a generic document — it adapts its methodology to YOUR context. The more precise you are, the more relevant the document will be.',
        section7H3_4: '4. Challenge, debate, refine',
        section7H3_4P: 'Each agent is designed to be challenged. If you disagree with an analysis, say so. The best documents are born from dialogue, not submission. The agent will adjust its position if your arguments are solid.',
        section7H3_5: '5. Iterate between agents',
        section7H3_5P: 'After producing a document, you can give its content to the next agent as context. "Here is my Vision Document, now let\'s work on the Problem Statement." Each agent enriches the work of the previous one.',

        // Section 8
        section8Title: 'Who is this project for?',
        audience1Title: 'Freelancers and solopreneurs',
        audience1Desc: 'You have an idea but no team. The agents become your virtual co-founders who help you structure before coding.',
        audience2Title: 'Early-stage startups (1-5 people)',
        audience2Desc: 'You don\'t have the budget for a CPO and a CTO. The agents compensate for missing expertise while you grow.',
        audience3Title: 'Students and project owners',
        audience3Desc: 'You\'re learning to structure a project. The agents teach you the methods of the best companies by having you practice them.',
        audience4Title: 'SMEs and internal teams',
        audience4Desc: 'You\'re launching a new product or internal project. The agents standardize your documentation and accelerate the scoping phase.',

        // Section 9
        section9Title: 'What the agents don\'t replace',
        section9P1: 'Let\'s be clear about the limitations:',
        section9Li1: '<strong>Human judgment.</strong> The agents structure, they don\'t decide for you. The final decision is always yours.',
        section9Li2: '<strong>Execution.</strong> A perfect PRD doesn\'t code the application. The agents produce the documentation, not the product.',
        section9Li3: '<strong>Network and relationships.</strong> A Go-To-Market Plan doesn\'t replace real contacts with your first customers.',
        section9Li4: '<strong>Binding legal expertise.</strong> William\'s Legal Review is a framework, not an enforceable legal opinion. To sign a contract, consult a real lawyer.',
        section9P2: 'The agents are <strong>structuring accelerators</strong>, not substitutes for real-world experience. They save you weeks of thinking, not years of experience.',

        // Section 10
        section10Title: 'In summary',
        section10P1: 'For decades, the quality of a project\'s structuring depended directly on the team\'s financial resources. Large companies had the methods, the experts, and the budgets. Small teams improvised.',
        section10P2: '<strong>That time is over.</strong>',
        section10P3: 'With 24 specialized agents, each mastering the frameworks of the best global organizations, anyone can produce enterprise-quality project documentation. Not in a few months with a team of 15 — in a few days, alone, from a browser.',
        section10P4: 'The question is no longer "can you afford to properly structure your project?".<br>\n            The question is: <strong>"do you have the discipline to do it?"</strong>',

        // CTA
        ctaBtn: 'Discover the 24 agents'
    },

    de: {
        heroTitle: 'Ihr Fuhrungsteam.<br>Angetrieben von KI.',
        heroSub: '24 spezialisierte Agenten, die jedem Projekttrager die gleiche Strukturierungsstrenge wie Google, Amazon oder Spotify bieten.',

        // Section 1
        section1Title: 'Das Problem: ein Projekt zu strukturieren ist teuer',
        section1P1: 'Wenn Google ein neues Produkt lanciert, tritt ein ganzes Team in Aktion: ein <strong>Chief Product Officer</strong> verfasst das PRD, ein <strong>Staff Engineer</strong> unterschreibt die technische Spezifikation, ein <strong>Head of Legal</strong> validiert die Compliance, ein <strong>SRE Lead</strong> definiert die SLAs. Bei Amazon startet keine Idee ohne einen <strong>6-Pager</strong> als Narrativ und ein <strong>PR/FAQ</strong>, das vom Leadership validiert wurde. Bei Spotify durchlauft jede Initiative das <strong>DIBB</strong>-Framework (Data, Insight, Belief, Bet).',
        section1P2: 'Diese Methoden funktionieren. Sie produzieren solide, durchdachte Produkte, die die Skalierung uberstehen. Das Problem? <strong>Sie kosten ein Vermogen.</strong>',
        callout1Title: 'Die Kosten eines Tech-Fuhrungsteams',
        callout1Li1: '<strong>CTO</strong>: 310.000 $/Jahr im Unternehmen, 144.000 $ im Startup (Carta, 2025)',
        callout1Li2: '<strong>CPO</strong>: 149.000 $ in der Seed-Phase, 250.000 $+ ab Series B+ (Carta, 2025)',
        callout1Li3: '<strong>Head of Legal</strong>: 183.000 $ im Durchschnitt im Startup (Carta, 2025)',
        callout1Li4: '<strong>Senior Security Engineer</strong>: 180.000 - 280.000 $ (Levels.fyi)',
        callout1Li5: '<strong>SRE Lead</strong>: 190.000 - 300.000 $ (Levels.fyi)',
        callout1P: 'Um ein vollstandiges Team aufzubauen, das alle Grundungsdokumente erstellen kann, muss man mit <strong>1 bis 2 Millionen Dollar pro Jahr an Gehaltern</strong> rechnen. Und das vor dem ersten Nutzer.',
        section1P3: 'Ergebnis: Freiberufler, kleine Teams und Early-Stage-Startups starten ohne diese Strukturierung. Nicht aus freier Wahl — aus wirtschaftlichem Zwang.',

        // Section 2
        section2Title: 'Die Konsequenzen: 90% der Startups scheitern',
        section2P1: 'Die Zahlen sprechen fur sich. Laut der Referenzstudie von <strong>CB Insights</strong>, die Hunderte von Startup-Post-Mortems analysiert:',
        stat1Number: '42%',
        stat1Label: 'scheitern mangels echtem Marktbedarf',
        stat2Number: '29%',
        stat2Label: 'scheitern wegen fehlender Liquiditat und tragfahigem Geschaftsmodell',
        stat3Number: '17%',
        stat3Label: 'scheitern mangels klarem Geschaftsmodell',
        stat4Number: '23%',
        stat4Label: 'scheitern, weil sie nicht das richtige Team hatten',
        section2P2: 'Jedes dieser Probleme hat eine gemeinsame Wurzel: <strong>ein Mangel an vorgelagerter Strukturierung</strong>. Kein Vision Document? Man weiss nicht, warum man existiert. Kein Problem Statement? Man lost ein Problem, das nicht existiert. Kein Business Case? Man verbrennt Geld ohne Modell. Kein PRD? Jeder Entwickler interpretiert die Anforderungen auf seine Weise.',
        section2P3: 'Das <strong>PMI</strong> (Project Management Institute) bestatigt: <strong>70% der Projekte scheitern weltweit</strong>, und die drei haufigsten Ursachen sind wechselnde Prioritaten, sich andernde Ziele und <strong>ungenaue Anforderungserhebung</strong>. 66% der Organisationen berichten von haufigen Verzogerungen durch unklare Anforderungen.',
        section2P4: 'Dies ist kein Problem von Talent oder Motivation. Es ist ein Problem von Methode und Mitteln.',

        // Section 3
        section3Title: 'Die Losung: ein Team von 24 KI-Experten',
        section3P1: 'Dieses Projekt geht von einer einfachen Idee aus: <strong>Was ware, wenn jeder Projekttrager Zugang zur gleichen Strukturierungsstrenge wie die grossen Tech-Unternehmen hatte, ohne den Preis dafur zu zahlen?</strong>',
        section3P2: 'Die 24 KI-Agenten dieses Teams reproduzieren die Rollen und Methoden der besten Produktteams der Welt. Jeder Agent ist auf ein bestimmtes Dokument spezialisiert, in Referenz-Frameworks geschult und leitet den Benutzer wie ein Senior-Experte mit uber 15 Jahren Erfahrung.',
        phase1Title: 'Schritt 1 — Erkundung',
        phase1Desc: 'Vision Document, Problem Statement, Business Case, initiale Ziele. Die Grundlagen legen: warum dieses Projekt existiert, welches Problem es lost, ist es tragfahig, was muss v1 erreichen.',
        phase2Title: 'Schritt 2 — Start',
        phase2Desc: 'Project Charter, PRD, Roadmap, Tech Spec, Decision Log, OKRs. Strukturieren und formalisieren: wer macht was, welche Features, welche Architektur, welche messbaren Ziele.',
        phase3Title: 'Schritt 3 — Wachstum',
        phase3Desc: 'UX Research, API Spec, Data Spec, Security Review, Performance Plan, GTM, Risk Management. Die Skalierung bewaltigen: Nutzer, Daten, Sicherheit, Markt.',
        phase4Title: 'Schritt 4 — Skalierung',
        phase4Desc: 'Compliance, Legal Review, Architecture Review, Incident Report, Post-Mortem, SLA, Governance. Enterprise-Betrieb: Compliance, Resilienz, Governance im grossen Massstab.',
        section3P3: 'Diese Reihenfolge ist nicht willkurlich. Sie reproduziert die Reihenfolge, in der die besten Produktteams arbeiten: <strong>klaren vor dem Bauen, strukturieren vor dem Skalieren, antizipieren vor dem Reagieren</strong>.',

        // Section 4
        section4Title: 'Wie es konkret funktioniert',
        section4P1: 'Jeder Agent ist ein <strong>benutzerdefinierter GPT</strong>, zuganglich uber ChatGPT. Er fullt das Dokument nicht fur Sie aus — er fuhrt Sie durch ein strukturiertes Interview, genau wie es ein Senior-Berater tun wurde.',
        step1Title: 'Wahlen Sie Ihren Schritt',
        step1Desc: 'Identifizieren Sie, wo Ihr Projekt steht. Sie starten gerade? Schritt 1. Sie haben die Idee bereits validiert? Schritt 2. Sie skalieren? Schritte 3-4.',
        step2Title: 'Starten Sie den Agenten',
        step2Desc: 'Klicken Sie auf "Nachricht", um das Gesprach zu eroffnen. Der Agent stellt sich vor, erklart seine Methode und beginnt Fragen zu stellen.',
        step3Title: 'Beantworten Sie die Fragen',
        step3Desc: 'Der Agent geht phasenweise vor. Er fordert Sie heraus, bittet Sie um Prazisierung, drangt Sie weiterzugehen. Wenn Ihre Antwort vage ist, hakt er nach.',
        step4Title: 'Erhalten Sie Ihr Dokument',
        step4Desc: 'Am Ende des Interviews generiert der Agent ein strukturiertes Markdown-Dokument, bereit zur Integration in Ihr Projekt.',
        section4P2: 'Das Gesprach dauert zwischen <strong>15 und 45 Minuten</strong>, je nach Agent und Projektkomplexitat. Am Ende haben Sie ein professionelles Dokument, fur das Teams von 10 Personen normalerweise Wochen brauchen.',

        // Section 5
        section5Title: 'Was sich gegenuber der alten Methode andert',
        compareOldHeader: 'Traditionelle Methode',
        compareOldLi1: 'Einen CPO fur 250.000 $/Jahr einstellen, um das PRD zu schreiben',
        compareOldLi2: 'Eine McKinsey/BCG-Beratung fur 500.000 $ fur den Business Case beauftragen',
        compareOldLi3: '3-6 Monate warten, um das Grunderteam aufzubauen',
        compareOldLi4: 'Einen Anwalt mit 400 $/h fur die Legal Review bezahlen',
        compareOldLi5: 'Die Roadmap an den nach 8 Monaten eingestellten VP Engineering delegieren',
        compareOldLi6: '8-12 Personen fur einen einwochigen Design Sprint in einen Raum versammeln',
        compareNewHeader: 'Mit KI-Agenten',
        compareNewLi1: 'Das PRD in 30 Min. mit Mathieu (spezialisierter PRD-Agent) erstellen',
        compareNewLi2: 'Den Business Case in 20 Min. mit Theo (Ex-Goldman/McKinsey-Profil) generieren',
        compareNewLi3: 'Sofort starten, allein, uber Ihren Browser',
        compareNewLi4: 'Eine strukturierte Legal Review in 30 Min. mit William erhalten',
        compareNewLi5: 'Die Roadmap in 25 Min. mit Sarah (Spotify-Methode) erstellen',
        compareNewLi6: 'Alle 24 Grundungsdokumente in wenigen Tagen allein erstellen',
        section5P1: 'Es geht nicht darum, Menschen zu ersetzen. Es geht darum, <strong>Zugang zu Expertise zu geben, sobald man sie braucht</strong>, ohne warten zu mussen, bis man sich Einstellungen leisten kann. McKinsey selbst hat uber 12.000 interne KI-Agenten eingesetzt, und ehemalige McKinsey-Berater trainieren jetzt KI-Modelle, um ihre Methoden zu reproduzieren. Die Demokratisierung ist im Gange.',

        // Section 6
        section6Title: 'Die Vision: operative Exzellenz demokratisieren',
        section6P1: 'Laut McKinsey konnte generative KI zwischen <strong>2,6 und 4,4 Billionen Dollar an jahrlichem Wert</strong> generieren — das Aquivalent des BIP des Vereinigten Konigreichs. BCG stellt fest, dass fast 80% der Organisationen bereits generative KI nutzen, aber die meisten sie noch nicht vollstandig ausschopfen.',
        section6P2: 'Dieses Projekt verkorpert eine Uberzeugung: <strong>Die Qualitat der Strukturierung eines Projekts sollte nicht von der Grosse des Bankkontos abhangen</strong>.',
        section6P3: 'Heute kann ein Freiberufler in Bordeaux, ein 3-Personen-Startup in Dakar oder ein studentischer Unternehmer in Montreal auf die gleiche Methodik zugreifen wie ein 50-Personen-Team im Silicon Valley. Der einzige Unterschied? Anstatt Millionen zu zahlen, um einen CPO, einen CTO, einen Head of Legal, einen Security Lead und einen SRE zu versammeln, unterhalten sie sich mit KI-Agenten, die diese Expertisen verkorpern.',
        callout2Title: 'Die Gleichung hat sich geandert',
        callout2P1: 'Vorher: <strong>Expertise = Geld + Zeit + Netzwerk</strong><br>\n                Jetzt: <strong>Expertise = Methode + KI + Disziplin</strong>',
        callout2P2: 'Es ist keine Frage der Mittel mehr. Es ist eine Frage des Willens.',

        // Section 7
        section7Title: 'Wie man mit KI-Agenten arbeitet: eine neue Methode',
        section7P1: 'Mit KI-Agenten zu arbeiten bedeutet nicht "ChatGPT bitten, ein Dokument zu schreiben". Es ist grundlegend anders. Hier sind die Schlusselprinzipien:',
        section7H3_1: '1. Der Agent fuhrt, Sie antworten',
        section7H3_1P: 'Im Gegensatz zu einem klassischen Chatbot, bei dem Sie die Fragen stellen, steuert hier der Agent das Interview. Er hat eine strukturierte Methodik, eine prazise Reihenfolge, Qualitatskriterien. Ihre Rolle ist es, so prazise und ehrlich wie moglich zu antworten. Wenn Sie vage sind, wird er Sie herausfordern.',
        section7H3_2: '2. Ein Dokument auf einmal, in der Reihenfolge',
        section7H3_2P: 'Uberspringen Sie keine Schritte. Beginnen Sie nicht mit der Tech Spec, wenn Sie kein Vision Document haben. Die Reihenfolge existiert aus einem Grund: Jedes Dokument baut auf den vorherigen auf. Das Problem Statement nutzt die Vision. Der Business Case nutzt das Problem. Das PRD nutzt die Ziele. Es ist eine Kette.',
        section7H3_3: '3. Geben Sie Kontext, keine Befehle',
        section7H3_3P: 'Die besten Ergebnisse kommen, wenn Sie Ihre reale Situation beschreiben: Ihren Markt, Ihre Einschrankungen, Ihre Zweifel. Der Agent produziert kein generisches Dokument — er passt seine Methodik an IHREN Kontext an. Je praziser Sie sind, desto relevanter wird das Dokument.',
        section7H3_4: '4. Hinterfragen, debattieren, verfeinern',
        section7H3_4P: 'Jeder Agent ist dafur konzipiert, herausgefordert zu werden. Wenn Sie mit einer Analyse nicht einverstanden sind, sagen Sie es. Die besten Dokumente entstehen aus dem Dialog, nicht aus Unterwerfung. Der Agent wird seine Position anpassen, wenn Ihre Argumente stichhaltig sind.',
        section7H3_5: '5. Iterieren Sie zwischen den Agenten',
        section7H3_5P: 'Nachdem Sie ein Dokument erstellt haben, konnen Sie dessen Inhalt dem nachsten Agenten als Kontext geben. "Hier ist mein Vision Document, jetzt arbeiten wir am Problem Statement." Jeder Agent bereichert die Arbeit des vorherigen.',

        // Section 8
        section8Title: 'Fur wen ist dieses Projekt?',
        audience1Title: 'Freiberufler und Solopreneure',
        audience1Desc: 'Sie haben eine Idee, aber kein Team. Die Agenten werden zu Ihren virtuellen Mitgrundern, die Ihnen helfen, vor dem Programmieren zu strukturieren.',
        audience2Title: 'Early-Stage-Startups (1-5 Personen)',
        audience2Desc: 'Sie haben nicht das Budget fur einen CPO und einen CTO. Die Agenten kompensieren fehlende Expertisen, wahrend Sie wachsen.',
        audience3Title: 'Studenten und Projekttrager',
        audience3Desc: 'Sie lernen, ein Projekt zu strukturieren. Die Agenten lehren Ihnen die Methoden der besten Unternehmen, indem sie Sie diese praktizieren lassen.',
        audience4Title: 'KMU und interne Teams',
        audience4Desc: 'Sie starten ein neues Produkt oder internes Projekt. Die Agenten standardisieren Ihre Dokumentation und beschleunigen die Planungsphase.',

        // Section 9
        section9Title: 'Was die Agenten nicht ersetzen',
        section9P1: 'Seien wir klar uber die Grenzen:',
        section9Li1: '<strong>Menschliches Urteilsvermogen.</strong> Die Agenten strukturieren, sie entscheiden nicht fur Sie. Die endgultige Entscheidung liegt immer bei Ihnen.',
        section9Li2: '<strong>Die Umsetzung.</strong> Ein perfektes PRD programmiert nicht die Anwendung. Die Agenten produzieren die Dokumentation, nicht das Produkt.',
        section9Li3: '<strong>Netzwerk und Beziehungen.</strong> Ein Go-To-Market Plan ersetzt nicht echte Kontakte mit Ihren ersten Kunden.',
        section9Li4: '<strong>Verbindliche Rechtsexpertise.</strong> Williams Legal Review ist eine Rahmenbewertung, kein durchsetzbares Rechtsgutachten. Fur die Vertragsunterzeichnung konsultieren Sie einen echten Anwalt.',
        section9P2: 'Die Agenten sind <strong>Strukturierungsbeschleuniger</strong>, kein Ersatz fur die Realitat vor Ort. Sie sparen Ihnen Wochen des Nachdenkens, nicht Jahre an Erfahrung.',

        // Section 10
        section10Title: 'Zusammenfassung',
        section10P1: 'Jahrzehntelang hing die Qualitat der Projektstrukturierung direkt von den finanziellen Mitteln des Teams ab. Grosse Unternehmen hatten die Methoden, die Experten und die Budgets. Kleine Teams improvisierten.',
        section10P2: '<strong>Diese Zeit ist vorbei.</strong>',
        section10P3: 'Mit 24 spezialisierten Agenten, die jeweils die Frameworks der besten globalen Organisationen beherrschen, kann jeder eine Projektdokumentation in Enterprise-Qualitat erstellen. Nicht in einigen Monaten mit einem 15-Personen-Team — in wenigen Tagen, allein, uber einen Browser.',
        section10P4: 'Die Frage ist nicht mehr "Konnen Sie es sich leisten, Ihr Projekt richtig zu strukturieren?".<br>\n            Die Frage ist: <strong>"Haben Sie die Disziplin, es zu tun?"</strong>',

        // CTA
        ctaBtn: 'Die 24 Agenten entdecken'
    },

    it: {
        heroTitle: 'Il vostro team dirigenziale.<br>Alimentato dall\'IA.',
        heroSub: '24 agenti specializzati che danno a ogni portatore di progetto lo stesso rigore di strutturazione di Google, Amazon o Spotify.',

        // Section 1
        section1Title: 'Il problema: strutturare un progetto costa caro',
        section1P1: 'Quando Google lancia un nuovo prodotto, un intero team entra in azione: un <strong>Chief Product Officer</strong> redige il PRD, uno <strong>Staff Engineer</strong> firma la specifica tecnica, un <strong>Head of Legal</strong> valida la conformita, un <strong>SRE Lead</strong> definisce gli SLA. In Amazon, nessuna idea parte senza un <strong>6-pager</strong> narrativo e un <strong>PR/FAQ</strong> validato dalla leadership. In Spotify, ogni iniziativa passa attraverso il framework <strong>DIBB</strong> (Data, Insight, Belief, Bet).',
        section1P2: 'Questi metodi funzionano. Producono prodotti solidi, ben pensati, che sopravvivono alla scalabilita. Il problema? <strong>Costano una fortuna.</strong>',
        callout1Title: 'Il costo di un team dirigenziale tech',
        callout1Li1: '<strong>CTO</strong>: 310.000 $/anno in azienda, 144.000 $ in startup (Carta, 2025)',
        callout1Li2: '<strong>CPO</strong>: 149.000 $ in fase seed, 250.000 $+ in Series B+ (Carta, 2025)',
        callout1Li3: '<strong>Head of Legal</strong>: 183.000 $ in media nelle startup (Carta, 2025)',
        callout1Li4: '<strong>Security Engineer senior</strong>: 180.000 - 280.000 $ (Levels.fyi)',
        callout1Li5: '<strong>SRE Lead</strong>: 190.000 - 300.000 $ (Levels.fyi)',
        callout1P: 'Per costituire un team completo capace di produrre tutti i documenti fondativi, bisogna prevedere <strong>da 1 a 2 milioni di dollari all\'anno in stipendi</strong>. E questo prima del primo utente.',
        section1P3: 'Risultato: i freelance, i piccoli team e le startup early-stage si lanciano senza questa strutturazione. Non per scelta — per vincolo economico.',

        // Section 2
        section2Title: 'Le conseguenze: il 90% delle startup fallisce',
        section2P1: 'I numeri parlano chiaro. Secondo lo studio di riferimento di <strong>CB Insights</strong> che ha analizzato centinaia di post-mortem di startup:',
        stat1Number: '42%',
        stat1Label: 'fallisce per assenza di reale bisogno di mercato',
        stat2Number: '29%',
        stat2Label: 'fallisce per mancanza di liquidita e modello economico sostenibile',
        stat3Number: '17%',
        stat3Label: 'fallisce per mancanza di un business model chiaro',
        stat4Number: '23%',
        stat4Label: 'fallisce perche non aveva il team giusto',
        section2P2: 'Ciascuno di questi problemi ha una radice comune: <strong>una mancanza di strutturazione a monte</strong>. Nessun Vision Document? Non si sa perche si esiste. Nessun Problem Statement? Si risolve un problema che non esiste. Nessun Business Case? Si bruciano soldi senza modello. Nessun PRD? Ogni sviluppatore interpreta i requisiti a modo suo.',
        section2P3: 'Il <strong>PMI</strong> (Project Management Institute) conferma: <strong>il 70% dei progetti fallisce a livello mondiale</strong>, e le tre cause principali sono il cambiamento delle priorita, il cambiamento degli obiettivi e <strong>la raccolta imprecisa dei requisiti</strong>. Il 66% delle organizzazioni riporta ritardi frequenti causati da requisiti poco chiari.',
        section2P4: 'Non e un problema di talento o di motivazione. E un problema di metodo e di mezzi.',

        // Section 3
        section3Title: 'La soluzione: un team di 24 esperti IA',
        section3P1: 'Questo progetto parte da un\'idea semplice: <strong>e se ogni portatore di progetto potesse accedere allo stesso rigore di strutturazione delle grandi aziende tech, senza pagarne il prezzo?</strong>',
        section3P2: 'I 24 agenti IA di questo team riproducono i ruoli e i metodi dei migliori team prodotto del mondo. Ogni agente e specializzato in un documento specifico, formato sui framework di riferimento, e guida l\'utente come farebbe un esperto senior con oltre 15 anni di esperienza.',
        phase1Title: 'Fase 1 — Esplorazione',
        phase1Desc: 'Vision Document, Problem Statement, Business Case, Obiettivi iniziali. Porre le fondamenta: perche questo progetto esiste, quale problema risolve, e sostenibile, cosa deve realizzare la v1.',
        phase2Title: 'Fase 2 — Lancio',
        phase2Desc: 'Project Charter, PRD, Roadmap, Tech Spec, Decision Log, OKR. Strutturare e ufficializzare: chi fa cosa, quali funzionalita, quale architettura, quali obiettivi misurabili.',
        phase3Title: 'Fase 3 — Crescita',
        phase3Desc: 'UX Research, API Spec, Data Spec, Security Review, Performance Plan, GTM, Risk Management. Gestire la scalabilita: utenti, dati, sicurezza, mercato.',
        phase4Title: 'Fase 4 — Scala',
        phase4Desc: 'Compliance, Legal Review, Architecture Review, Incident Report, Post-Mortem, SLA, Governance. Operazioni enterprise: conformita, resilienza, governance su larga scala.',
        section3P3: 'Questa sequenza non e arbitraria. Riproduce l\'ordine in cui i migliori team prodotto lavorano: <strong>chiarire prima di costruire, strutturare prima di scalare, anticipare prima di reagire</strong>.',

        // Section 4
        section4Title: 'Come funziona concretamente',
        section4P1: 'Ogni agente e un <strong>GPT personalizzato</strong> accessibile tramite ChatGPT. Non compila il documento al posto vostro — vi guida attraverso un\'intervista strutturata, esattamente come farebbe un consulente senior.',
        step1Title: 'Scegliete la vostra fase',
        step1Desc: 'Identificate a che punto e il vostro progetto. State iniziando? Fase 1. Avete gia validato l\'idea? Fase 2. State scalando? Fasi 3-4.',
        step2Title: 'Avviate l\'agente',
        step2Desc: 'Cliccate su "Messaggio" per aprire la conversazione. L\'agente si presenta, spiega il suo metodo e inizia a porre domande.',
        step3Title: 'Rispondete alle domande',
        step3Desc: 'L\'agente procede per fasi. Vi sfida, vi chiede di precisare, vi spinge ad andare oltre. Se la vostra risposta e vaga, insiste.',
        step4Title: 'Ricevete il vostro documento',
        step4Desc: 'Alla fine dell\'intervista, l\'agente genera un documento strutturato in Markdown, pronto per essere integrato nel vostro progetto.',
        section4P2: 'La conversazione dura tra <strong>15 e 45 minuti</strong> a seconda dell\'agente e della complessita del progetto. Alla fine, avete un documento di qualita professionale che team di 10 persone impiegano normalmente settimane a produrre.',

        // Section 5
        section5Title: 'Cosa cambia rispetto al vecchio metodo',
        compareOldHeader: 'Metodo tradizionale',
        compareOldLi1: 'Assumere un CPO a 250.000 $/anno per scrivere il PRD',
        compareOldLi2: 'Ingaggiare una societa McKinsey/BCG a 500.000 $ per il Business Case',
        compareOldLi3: 'Aspettare 3-6 mesi per costituire il team fondatore',
        compareOldLi4: 'Pagare un avvocato 400 $/h per la Legal Review',
        compareOldLi5: 'Delegare la roadmap al VP Engineering assunto dopo 8 mesi',
        compareOldLi6: 'Riunire 8-12 persone in una sala per un Design Sprint di una settimana',
        compareNewHeader: 'Con gli agenti IA',
        compareNewLi1: 'Produrre il PRD in 30 min con Mathieu (agente specializzato PRD)',
        compareNewLi2: 'Generare il Business Case in 20 min con Theo (profilo ex-Goldman/McKinsey)',
        compareNewLi3: 'Iniziare immediatamente, da soli, dal proprio browser',
        compareNewLi4: 'Ottenere una Legal Review strutturata in 30 min con William',
        compareNewLi5: 'Creare la roadmap in 25 min con Sarah (metodo Spotify)',
        compareNewLi6: 'Produrre tutti i 24 documenti fondativi in pochi giorni, da soli',
        section5P1: 'Non si tratta di sostituire gli esseri umani. Si tratta di <strong>dare accesso all\'expertise non appena se ne ha bisogno</strong>, senza aspettare di potersi permettere di assumere. McKinsey stessa ha distribuito oltre 12.000 agenti IA interni, e gli ex-consulenti McKinsey stanno ora addestrando modelli IA per riprodurre i loro metodi. La democratizzazione e in corso.',

        // Section 6
        section6Title: 'La visione: democratizzare l\'eccellenza operativa',
        section6P1: 'Secondo McKinsey, l\'IA generativa potrebbe generare tra <strong>2.600 e 4.400 miliardi di dollari di valore annuale</strong> — l\'equivalente del PIL del Regno Unito. BCG nota che quasi l\'80% delle organizzazioni utilizza gia l\'IA generativa, ma la maggior parte non ne sfrutta ancora appieno il potenziale.',
        section6P2: 'Questo progetto incarna una convinzione: <strong>la qualita della strutturazione di un progetto non dovrebbe dipendere dalla dimensione del conto in banca</strong>.',
        section6P3: 'Oggi, un freelance a Bordeaux, una startup di 3 persone a Dakar o uno studente imprenditore a Montreal possono accedere alla stessa metodologia di un team di 50 persone nella Silicon Valley. L\'unica differenza? Invece di pagare milioni per riunire un CPO, un CTO, un Head of Legal, un Security Lead e un SRE, conversano con agenti IA che incarnano queste competenze.',
        callout2Title: 'L\'equazione e cambiata',
        callout2P1: 'Prima: <strong>Competenza = Denaro + Tempo + Rete</strong><br>\n                Ora: <strong>Competenza = Metodo + IA + Disciplina</strong>',
        callout2P2: 'Non e piu una questione di mezzi. E una questione di volonta.',

        // Section 7
        section7Title: 'Come lavorare con gli agenti IA: un nuovo metodo',
        section7P1: 'Lavorare con gli agenti IA non e "chiedere a ChatGPT di scrivere un documento". E fondamentalmente diverso. Ecco i principi chiave:',
        section7H3_1: '1. L\'agente guida, voi rispondete',
        section7H3_1P: 'A differenza di un chatbot classico dove siete voi a porre le domande, qui e l\'agente che conduce l\'intervista. Ha una metodologia strutturata, un ordine preciso, dei criteri di qualita. Il vostro ruolo e rispondere con la massima precisione e onesta possibile. Se siete vaghi, vi sfidera.',
        section7H3_2: '2. Un documento alla volta, nell\'ordine',
        section7H3_2P: 'Non saltate le fasi. Non cominciate dalla Tech Spec se non avete un Vision Document. La sequenza esiste per una ragione: ogni documento si basa sui precedenti. Il Problem Statement utilizza la visione. Il Business Case utilizza il problema. Il PRD utilizza gli obiettivi. E una catena.',
        section7H3_3: '3. Date contesto, non ordini',
        section7H3_3P: 'I migliori risultati arrivano quando descrivete la vostra situazione reale: il vostro mercato, i vostri vincoli, i vostri dubbi. L\'agente non produce un documento generico — adatta la sua metodologia al VOSTRO contesto. Piu siete precisi, piu il documento sara pertinente.',
        section7H3_4: '4. Contestate, dibattete, affinate',
        section7H3_4P: 'Ogni agente e progettato per essere messo alla prova. Se non siete d\'accordo con un\'analisi, ditelo. I migliori documenti nascono dal dialogo, non dalla sottomissione. L\'agente aggiustera la sua posizione se i vostri argomenti sono solidi.',
        section7H3_5: '5. Iterate tra gli agenti',
        section7H3_5P: 'Dopo aver prodotto un documento, potete darne il contenuto all\'agente successivo come contesto. "Ecco il mio Vision Document, ora lavoriamo sul Problem Statement." Ogni agente arricchisce il lavoro del precedente.',

        // Section 8
        section8Title: 'A chi e destinato questo progetto?',
        audience1Title: 'Freelance e solopreneur',
        audience1Desc: 'Avete un\'idea ma non un team. Gli agenti diventano i vostri co-fondatori virtuali che vi aiutano a strutturare prima di programmare.',
        audience2Title: 'Startup early-stage (1-5 persone)',
        audience2Desc: 'Non avete il budget per un CPO e un CTO. Gli agenti compensano le competenze mancanti durante la fase di crescita.',
        audience3Title: 'Studenti e portatori di progetti',
        audience3Desc: 'State imparando a strutturare un progetto. Gli agenti vi insegnano i metodi delle migliori aziende facendoveli praticare.',
        audience4Title: 'PMI e team interni',
        audience4Desc: 'State lanciando un nuovo prodotto o progetto interno. Gli agenti standardizzano la vostra documentazione e accelerano la fase di inquadramento.',

        // Section 9
        section9Title: 'Cosa gli agenti non sostituiscono',
        section9P1: 'Siamo chiari sui limiti:',
        section9Li1: '<strong>Il giudizio umano.</strong> Gli agenti strutturano, non decidono al vostro posto. La decisione finale resta sempre vostra.',
        section9Li2: '<strong>L\'esecuzione.</strong> Un PRD perfetto non programma l\'applicazione. Gli agenti producono la documentazione, non il prodotto.',
        section9Li3: '<strong>La rete e le relazioni.</strong> Un Go-To-Market Plan non sostituisce i veri contatti con i vostri primi clienti.',
        section9Li4: '<strong>L\'expertise giuridica vincolante.</strong> La Legal Review di William e un inquadramento, non un parere legale opponibile. Per firmare un contratto, consultate un vero avvocato.',
        section9P2: 'Gli agenti sono <strong>acceleratori di strutturazione</strong>, non sostituti della realta sul campo. Vi fanno risparmiare settimane di riflessione, non anni di esperienza.',

        // Section 10
        section10Title: 'In sintesi',
        section10P1: 'Per decenni, la qualita della strutturazione di un progetto dipendeva direttamente dai mezzi finanziari del team. Le grandi aziende avevano i metodi, gli esperti e i budget. I piccoli team improvvisavano.',
        section10P2: '<strong>Quel tempo e finito.</strong>',
        section10P3: 'Con 24 agenti specializzati, ciascuno padrone dei framework delle migliori organizzazioni mondiali, chiunque puo produrre una documentazione progettuale di qualita enterprise. Non in qualche mese con un team di 15 persone — in pochi giorni, da soli, da un browser.',
        section10P4: 'La domanda non e piu "potete permettervi di strutturare bene il vostro progetto?".<br>\n            La domanda e: <strong>"avete la disciplina per farlo?"</strong>',

        // CTA
        ctaBtn: 'Scopri i 24 agenti'
    },

    es: {
        heroTitle: 'Su equipo directivo.<br>Impulsado por IA.',
        heroSub: '24 agentes especializados que dan a cada titular de proyecto el mismo rigor de estructuracion que Google, Amazon o Spotify.',

        // Section 1
        section1Title: 'El problema: estructurar un proyecto es caro',
        section1P1: 'Cuando Google lanza un nuevo producto, un equipo entero entra en accion: un <strong>Chief Product Officer</strong> redacta el PRD, un <strong>Staff Engineer</strong> firma la especificacion tecnica, un <strong>Head of Legal</strong> valida el cumplimiento, un <strong>SRE Lead</strong> define los SLA. En Amazon, ninguna idea arranca sin un <strong>6-pager</strong> narrativo y un <strong>PR/FAQ</strong> validado por el liderazgo. En Spotify, cada iniciativa pasa por el framework <strong>DIBB</strong> (Data, Insight, Belief, Bet).',
        section1P2: 'Estos metodos funcionan. Producen productos solidos, bien pensados, que sobreviven al escalado. El problema? <strong>Cuestan una fortuna.</strong>',
        callout1Title: 'El coste de un equipo directivo tech',
        callout1Li1: '<strong>CTO</strong>: 310.000 $/ano en empresa, 144.000 $ en startup (Carta, 2025)',
        callout1Li2: '<strong>CPO</strong>: 149.000 $ en fase seed, 250.000 $+ en Series B+ (Carta, 2025)',
        callout1Li3: '<strong>Head of Legal</strong>: 183.000 $ de media en startups (Carta, 2025)',
        callout1Li4: '<strong>Security Engineer senior</strong>: 180.000 - 280.000 $ (Levels.fyi)',
        callout1Li5: '<strong>SRE Lead</strong>: 190.000 - 300.000 $ (Levels.fyi)',
        callout1P: 'Para constituir un equipo completo capaz de producir todos los documentos fundacionales, hay que contar con <strong>de 1 a 2 millones de dolares al ano en salarios</strong>. Y eso antes del primer usuario.',
        section1P3: 'Resultado: los freelancers, los equipos pequenos y las startups early-stage se lanzan sin esta estructuracion. No por eleccion — por restriccion economica.',

        // Section 2
        section2Title: 'Las consecuencias: el 90% de las startups fracasan',
        section2P1: 'Las cifras son contundentes. Segun el estudio de referencia de <strong>CB Insights</strong> que analizo cientos de post-mortems de startups:',
        stat1Number: '42%',
        stat1Label: 'fracasan por ausencia de necesidad real en el mercado',
        stat2Number: '29%',
        stat2Label: 'fracasan por falta de liquidez y modelo economico viable',
        stat3Number: '17%',
        stat3Label: 'fracasan por falta de un business model claro',
        stat4Number: '23%',
        stat4Label: 'fracasan porque no tenian el equipo adecuado',
        section2P2: 'Cada uno de estos problemas tiene una raiz comun: <strong>una falta de estructuracion previa</strong>. Sin Vision Document? No se sabe por que se existe. Sin Problem Statement? Se resuelve un problema que no existe. Sin Business Case? Se quema efectivo sin modelo. Sin PRD? Cada desarrollador interpreta los requisitos a su manera.',
        section2P3: 'El <strong>PMI</strong> (Project Management Institute) confirma: <strong>el 70% de los proyectos fracasan a nivel mundial</strong>, y las tres primeras causas son los cambios de prioridades, los cambios de objetivos y <strong>la recopilacion imprecisa de requisitos</strong>. El 66% de las organizaciones reportan retrasos frecuentes causados por requisitos poco claros.',
        section2P4: 'No es un problema de talento o de motivacion. Es un problema de metodo y de recursos.',

        // Section 3
        section3Title: 'La solucion: un equipo de 24 expertos IA',
        section3P1: 'Este proyecto parte de una idea simple: <strong>y si cada titular de proyecto pudiera acceder al mismo rigor de estructuracion que las grandes tecnologicas, sin pagar el precio?</strong>',
        section3P2: 'Los 24 agentes IA de este equipo reproducen los roles y metodos de los mejores equipos de producto del mundo. Cada agente esta especializado en un documento concreto, formado en los frameworks de referencia, y guia al usuario como lo haria un experto senior con mas de 15 anos de experiencia.',
        phase1Title: 'Etapa 1 — Exploracion',
        phase1Desc: 'Vision Document, Problem Statement, Business Case, Objetivos iniciales. Sentar las bases: por que existe este proyecto, que problema resuelve, es viable, que debe lograr la v1.',
        phase2Title: 'Etapa 2 — Lanzamiento',
        phase2Desc: 'Project Charter, PRD, Roadmap, Tech Spec, Decision Log, OKRs. Estructurar y oficializar: quien hace que, que funcionalidades, que arquitectura, que objetivos medibles.',
        phase3Title: 'Etapa 3 — Crecimiento',
        phase3Desc: 'UX Research, API Spec, Data Spec, Security Review, Performance Plan, GTM, Risk Management. Gestionar el escalado: usuarios, datos, seguridad, mercado.',
        phase4Title: 'Etapa 4 — Escala',
        phase4Desc: 'Compliance, Legal Review, Architecture Review, Incident Report, Post-Mortem, SLA, Governance. Operaciones enterprise: cumplimiento, resiliencia, gobernanza a gran escala.',
        section3P3: 'Esta secuencia no es arbitraria. Reproduce el orden en que los mejores equipos de producto trabajan: <strong>clarificar antes de construir, estructurar antes de escalar, anticipar antes de reaccionar</strong>.',

        // Section 4
        section4Title: 'Como funciona concretamente',
        section4P1: 'Cada agente es un <strong>GPT personalizado</strong> accesible a traves de ChatGPT. No rellena el documento por usted — le guia a traves de una entrevista estructurada, exactamente como lo haria un consultor senior.',
        step1Title: 'Elija su etapa',
        step1Desc: 'Identifique donde esta su proyecto. Esta empezando? Etapa 1. Ya valido la idea? Etapa 2. Esta escalando? Etapas 3-4.',
        step2Title: 'Lance el agente',
        step2Desc: 'Haga clic en "Mensaje" para abrir la conversacion. El agente se presenta, explica su metodo y comienza a hacer preguntas.',
        step3Title: 'Responda a las preguntas',
        step3Desc: 'El agente procede por fases. Le desafia, le pide que precise, le empuja a ir mas lejos. Si su respuesta es vaga, insiste.',
        step4Title: 'Reciba su documento',
        step4Desc: 'Al final de la entrevista, el agente genera un documento estructurado en Markdown, listo para ser integrado en su proyecto.',
        section4P2: 'La conversacion dura entre <strong>15 y 45 minutos</strong> segun el agente y la complejidad del proyecto. Al final, tiene un documento de calidad profesional que equipos de 10 personas tardan normalmente semanas en producir.',

        // Section 5
        section5Title: 'Lo que cambia respecto al metodo antiguo',
        compareOldHeader: 'Metodo tradicional',
        compareOldLi1: 'Contratar un CPO a 250.000 $/ano para escribir el PRD',
        compareOldLi2: 'Contratar una consultora McKinsey/BCG a 500.000 $ para el Business Case',
        compareOldLi3: 'Esperar 3-6 meses para constituir el equipo fundador',
        compareOldLi4: 'Pagar a un abogado 400 $/h por la Legal Review',
        compareOldLi5: 'Delegar la roadmap al VP Engineering contratado tras 8 meses',
        compareOldLi6: 'Reunir 8-12 personas en una sala para un Design Sprint de una semana',
        compareNewHeader: 'Con los agentes IA',
        compareNewLi1: 'Producir el PRD en 30 min con Mathieu (agente especializado en PRD)',
        compareNewLi2: 'Generar el Business Case en 20 min con Theo (perfil ex-Goldman/McKinsey)',
        compareNewLi3: 'Comenzar inmediatamente, solo, desde su navegador',
        compareNewLi4: 'Obtener una Legal Review estructurada en 30 min con William',
        compareNewLi5: 'Crear la roadmap en 25 min con Sarah (metodo Spotify)',
        compareNewLi6: 'Producir los 24 documentos fundacionales en pocos dias, solo',
        section5P1: 'No se trata de reemplazar a los humanos. Se trata de <strong>dar acceso a la expertise en cuanto se necesita</strong>, sin esperar a poder permitirse contratar. McKinsey mismo ha desplegado mas de 12.000 agentes IA internos, y los ex-consultores de McKinsey estan ahora entrenando modelos IA para reproducir sus metodos. La democratizacion esta en marcha.',

        // Section 6
        section6Title: 'La vision: democratizar la excelencia operativa',
        section6P1: 'Segun McKinsey, la IA generativa podria generar entre <strong>2.600 y 4.400 billones de dolares de valor anual</strong> — el equivalente del PIB del Reino Unido. BCG senala que casi el 80% de las organizaciones ya utilizan IA generativa, pero la mayoria aun no la aprovecha plenamente.',
        section6P2: 'Este proyecto encarna una conviccion: <strong>la calidad de la estructuracion de un proyecto no deberia depender del tamano de la cuenta bancaria</strong>.',
        section6P3: 'Hoy, un freelancer en Burdeos, una startup de 3 personas en Dakar o un estudiante emprendedor en Montreal pueden acceder a la misma metodologia que un equipo de 50 personas en Silicon Valley. La unica diferencia? En lugar de pagar millones para reunir un CPO, un CTO, un Head of Legal, un Security Lead y un SRE, conversan con agentes IA que encarnan estas competencias.',
        callout2Title: 'La ecuacion ha cambiado',
        callout2P1: 'Antes: <strong>Expertise = Dinero + Tiempo + Red de contactos</strong><br>\n                Ahora: <strong>Expertise = Metodo + IA + Disciplina</strong>',
        callout2P2: 'Ya no es una cuestion de recursos. Es una cuestion de voluntad.',

        // Section 7
        section7Title: 'Como trabajar con agentes IA: un nuevo metodo',
        section7P1: 'Trabajar con agentes IA no es "pedirle a ChatGPT que escriba un documento". Es fundamentalmente diferente. Estos son los principios clave:',
        section7H3_1: '1. El agente dirige, usted responde',
        section7H3_1P: 'A diferencia de un chatbot clasico donde usted hace las preguntas, aqui es el agente quien conduce la entrevista. Tiene una metodologia estructurada, un orden preciso, criterios de calidad. Su papel es responder con la mayor precision y honestidad posible. Si es vago, le desafiara.',
        section7H3_2: '2. Un documento a la vez, en orden',
        section7H3_2P: 'No salte etapas. No empiece por la Tech Spec si no tiene un Vision Document. La secuencia existe por una razon: cada documento se apoya en los anteriores. El Problem Statement usa la vision. El Business Case usa el problema. El PRD usa los objetivos. Es una cadena.',
        section7H3_3: '3. De contexto, no ordenes',
        section7H3_3P: 'Los mejores resultados llegan cuando describe su situacion real: su mercado, sus restricciones, sus dudas. El agente no produce un documento generico — adapta su metodologia a SU contexto. Cuanto mas preciso sea, mas pertinente sera el documento.',
        section7H3_4: '4. Cuestione, debata, afine',
        section7H3_4P: 'Cada agente esta disenado para ser cuestionado. Si no esta de acuerdo con un analisis, digalo. Los mejores documentos nacen del dialogo, no de la sumision. El agente ajustara su posicion si sus argumentos son solidos.',
        section7H3_5: '5. Itere entre los agentes',
        section7H3_5P: 'Despues de producir un documento, puede dar su contenido al siguiente agente como contexto. "Aqui esta mi Vision Document, ahora trabajemos el Problem Statement." Cada agente enriquece el trabajo del anterior.',

        // Section 8
        section8Title: 'Para quien es este proyecto?',
        audience1Title: 'Freelancers y solopreneurs',
        audience1Desc: 'Tiene una idea pero no un equipo. Los agentes se convierten en sus cofundadores virtuales que le ayudan a estructurar antes de programar.',
        audience2Title: 'Startups early-stage (1-5 personas)',
        audience2Desc: 'No tiene presupuesto para un CPO y un CTO. Los agentes compensan las competencias faltantes mientras crece.',
        audience3Title: 'Estudiantes y titulares de proyectos',
        audience3Desc: 'Esta aprendiendo a estructurar un proyecto. Los agentes le ensenan los metodos de las mejores empresas haciendoselos practicar.',
        audience4Title: 'Pymes y equipos internos',
        audience4Desc: 'Esta lanzando un nuevo producto o proyecto interno. Los agentes estandarizan su documentacion y aceleran la fase de definicion.',

        // Section 9
        section9Title: 'Lo que los agentes no reemplazan',
        section9P1: 'Seamos claros sobre los limites:',
        section9Li1: '<strong>El juicio humano.</strong> Los agentes estructuran, no deciden por usted. La decision final siempre es suya.',
        section9Li2: '<strong>La ejecucion.</strong> Un PRD perfecto no programa la aplicacion. Los agentes producen la documentacion, no el producto.',
        section9Li3: '<strong>La red y las relaciones.</strong> Un Go-To-Market Plan no reemplaza los contactos reales con sus primeros clientes.',
        section9Li4: '<strong>La expertise juridica vinculante.</strong> La Legal Review de William es un marco, no un dictamen juridico oponible. Para firmar un contrato, consulte a un abogado real.',
        section9P2: 'Los agentes son <strong>aceleradores de estructuracion</strong>, no sustitutos de la realidad del terreno. Le ahorran semanas de reflexion, no anos de experiencia.',

        // Section 10
        section10Title: 'En resumen',
        section10P1: 'Durante decadas, la calidad de la estructuracion de un proyecto dependia directamente de los recursos financieros del equipo. Las grandes empresas tenian los metodos, los expertos y los presupuestos. Los equipos pequenos improvisaban.',
        section10P2: '<strong>Ese tiempo ha terminado.</strong>',
        section10P3: 'Con 24 agentes especializados, cada uno dominando los frameworks de las mejores organizaciones mundiales, cualquiera puede producir una documentacion de proyecto de calidad enterprise. No en unos meses con un equipo de 15 personas — en unos dias, solo, desde un navegador.',
        section10P4: 'La pregunta ya no es "puede permitirse estructurar bien su proyecto?".<br>\n            La pregunta es: <strong>"tiene la disciplina para hacerlo?"</strong>',

        // CTA
        ctaBtn: 'Descubrir los 24 agentes'
    }
};

// === Render function ===

function renderAboutContent(lang) {
    const t = ABOUT_I18N[lang] || ABOUT_I18N.fr;
    return `
        <section class="about-hero">
            <h1>${t.heroTitle}</h1>
            <p class="about-hero-sub">${t.heroSub}</p>
        </section>

        <article class="about-article">

            <h2>${t.section1Title}</h2>

            <p>${t.section1P1}</p>

            <p>${t.section1P2}</p>

            <div class="about-callout">
                <div class="about-callout-title">${t.callout1Title}</div>
                <ul>
                    <li>${t.callout1Li1}</li>
                    <li>${t.callout1Li2}</li>
                    <li>${t.callout1Li3}</li>
                    <li>${t.callout1Li4}</li>
                    <li>${t.callout1Li5}</li>
                </ul>
                <p>${t.callout1P}</p>
            </div>

            <p>${t.section1P3}</p>

            <h2>${t.section2Title}</h2>

            <p>${t.section2P1}</p>

            <div class="about-stats">
                <div class="about-stat">
                    <div class="about-stat-number">${t.stat1Number}</div>
                    <div class="about-stat-label">${t.stat1Label}</div>
                </div>
                <div class="about-stat">
                    <div class="about-stat-number">${t.stat2Number}</div>
                    <div class="about-stat-label">${t.stat2Label}</div>
                </div>
                <div class="about-stat">
                    <div class="about-stat-number">${t.stat3Number}</div>
                    <div class="about-stat-label">${t.stat3Label}</div>
                </div>
                <div class="about-stat">
                    <div class="about-stat-number">${t.stat4Number}</div>
                    <div class="about-stat-label">${t.stat4Label}</div>
                </div>
            </div>

            <p>${t.section2P2}</p>

            <p>${t.section2P3}</p>

            <p>${t.section2P4}</p>

            <h2>${t.section3Title}</h2>

            <p>${t.section3P1}</p>

            <p>${t.section3P2}</p>

            <div class="about-phases">
                <div class="about-phase">
                    <div class="about-phase-dot" style="background:#30d158"></div>
                    <div>
                        <div class="about-phase-title">${t.phase1Title}</div>
                        <div class="about-phase-desc">${t.phase1Desc}</div>
                    </div>
                </div>
                <div class="about-phase">
                    <div class="about-phase-dot" style="background:#0a84ff"></div>
                    <div>
                        <div class="about-phase-title">${t.phase2Title}</div>
                        <div class="about-phase-desc">${t.phase2Desc}</div>
                    </div>
                </div>
                <div class="about-phase">
                    <div class="about-phase-dot" style="background:#ff9f0a"></div>
                    <div>
                        <div class="about-phase-title">${t.phase3Title}</div>
                        <div class="about-phase-desc">${t.phase3Desc}</div>
                    </div>
                </div>
                <div class="about-phase">
                    <div class="about-phase-dot" style="background:#ff453a"></div>
                    <div>
                        <div class="about-phase-title">${t.phase4Title}</div>
                        <div class="about-phase-desc">${t.phase4Desc}</div>
                    </div>
                </div>
            </div>

            <p>${t.section3P3}</p>

            <h2>${t.section4Title}</h2>

            <p>${t.section4P1}</p>

            <div class="about-steps">
                <div class="about-step">
                    <div class="about-step-num">1</div>
                    <div>
                        <div class="about-step-title">${t.step1Title}</div>
                        <div class="about-step-desc">${t.step1Desc}</div>
                    </div>
                </div>
                <div class="about-step">
                    <div class="about-step-num">2</div>
                    <div>
                        <div class="about-step-title">${t.step2Title}</div>
                        <div class="about-step-desc">${t.step2Desc}</div>
                    </div>
                </div>
                <div class="about-step">
                    <div class="about-step-num">3</div>
                    <div>
                        <div class="about-step-title">${t.step3Title}</div>
                        <div class="about-step-desc">${t.step3Desc}</div>
                    </div>
                </div>
                <div class="about-step">
                    <div class="about-step-num">4</div>
                    <div>
                        <div class="about-step-title">${t.step4Title}</div>
                        <div class="about-step-desc">${t.step4Desc}</div>
                    </div>
                </div>
            </div>

            <p>${t.section4P2}</p>

            <h2>${t.section5Title}</h2>

            <div class="about-comparison">
                <div class="about-compare-col">
                    <div class="about-compare-header about-compare-old">${t.compareOldHeader}</div>
                    <ul>
                        <li>${t.compareOldLi1}</li>
                        <li>${t.compareOldLi2}</li>
                        <li>${t.compareOldLi3}</li>
                        <li>${t.compareOldLi4}</li>
                        <li>${t.compareOldLi5}</li>
                        <li>${t.compareOldLi6}</li>
                    </ul>
                </div>
                <div class="about-compare-col">
                    <div class="about-compare-header about-compare-new">${t.compareNewHeader}</div>
                    <ul>
                        <li>${t.compareNewLi1}</li>
                        <li>${t.compareNewLi2}</li>
                        <li>${t.compareNewLi3}</li>
                        <li>${t.compareNewLi4}</li>
                        <li>${t.compareNewLi5}</li>
                        <li>${t.compareNewLi6}</li>
                    </ul>
                </div>
            </div>

            <p>${t.section5P1}</p>

            <h2>${t.section6Title}</h2>

            <p>${t.section6P1}</p>

            <p>${t.section6P2}</p>

            <p>${t.section6P3}</p>

            <div class="about-callout about-callout-accent">
                <div class="about-callout-title">${t.callout2Title}</div>
                <p>${t.callout2P1}</p>
                <p>${t.callout2P2}</p>
            </div>

            <h2>${t.section7Title}</h2>

            <p>${t.section7P1}</p>

            <h3>${t.section7H3_1}</h3>
            <p>${t.section7H3_1P}</p>

            <h3>${t.section7H3_2}</h3>
            <p>${t.section7H3_2P}</p>

            <h3>${t.section7H3_3}</h3>
            <p>${t.section7H3_3P}</p>

            <h3>${t.section7H3_4}</h3>
            <p>${t.section7H3_4P}</p>

            <h3>${t.section7H3_5}</h3>
            <p>${t.section7H3_5P}</p>

            <h2>${t.section8Title}</h2>

            <div class="about-audience">
                <div class="about-audience-item">
                    <div class="about-audience-icon"><i data-lucide="user"></i></div>
                    <div>
                        <div class="about-audience-title">${t.audience1Title}</div>
                        <div class="about-audience-desc">${t.audience1Desc}</div>
                    </div>
                </div>
                <div class="about-audience-item">
                    <div class="about-audience-icon"><i data-lucide="users"></i></div>
                    <div>
                        <div class="about-audience-title">${t.audience2Title}</div>
                        <div class="about-audience-desc">${t.audience2Desc}</div>
                    </div>
                </div>
                <div class="about-audience-item">
                    <div class="about-audience-icon"><i data-lucide="graduation-cap"></i></div>
                    <div>
                        <div class="about-audience-title">${t.audience3Title}</div>
                        <div class="about-audience-desc">${t.audience3Desc}</div>
                    </div>
                </div>
                <div class="about-audience-item">
                    <div class="about-audience-icon"><i data-lucide="building-2"></i></div>
                    <div>
                        <div class="about-audience-title">${t.audience4Title}</div>
                        <div class="about-audience-desc">${t.audience4Desc}</div>
                    </div>
                </div>
            </div>

            <h2>${t.section9Title}</h2>

            <p>${t.section9P1}</p>

            <ul>
                <li>${t.section9Li1}</li>
                <li>${t.section9Li2}</li>
                <li>${t.section9Li3}</li>
                <li>${t.section9Li4}</li>
            </ul>

            <p>${t.section9P2}</p>

            <h2>${t.section10Title}</h2>

            <p>${t.section10P1}</p>

            <p>${t.section10P2}</p>

            <p>${t.section10P3}</p>

            <p>${t.section10P4}</p>

        </article>

        <div class="about-cta">
            <a href="index.html" class="about-cta-btn">${t.ctaBtn}</a>
        </div>`;
}
