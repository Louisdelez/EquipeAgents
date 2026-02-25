const AGENTS_I18N = {
    en: {
        1: {
            agentName: "Strategic Vision Architect",
            document: "Vision Document",
            shortDesc: "Defines why the project exists and what long-term ambition it pursues.",
            whatFor: "The Vision Document is the foundation of your entire project. It is the FIRST document to produce. It defines the 3-5 year ambition, the fundamental \"why\" of the project, and serves as a compass for all future strategic decisions. Without this document, your team has no shared direction.",
            whyUse: "Because a project without a clear vision is a ship without a rudder. Gabriel combines the experience of a Chief Product Officer and a Chief Strategy Officer. He will challenge you like a strategic sparring partner: he does not fill in the document for you, he helps you discover and articulate YOUR own vision.",
            howToUse: "Start a conversation with Gabriel by clicking the green button. He will guide you through a structured interview in 6 phases: first the framing of your project, then exploring the \"Why\" (why this project exists), defining your ambitious vision, identifying your target audience, guiding principles, and finally the final summary as a .md document. Answer each question with as much detail as possible. If your answer is vague, he will challenge you.",
            methodology: [
                { title: "Welcome and framing", desc: "Understand the project context", time: "1-2 exchanges" },
                { title: "Exploring the \"Why\"", desc: "Dig into the fundamental why", time: "2-3 exchanges" },
                { title: "Defining the vision", desc: "Articulate the long-term ambition", time: "2-3 exchanges" },
                { title: "Target audience and value proposition", desc: "Identify users and unique value", time: "2-3 exchanges" },
                { title: "Guiding principles and success criteria", desc: "Define rules and measures of success", time: "2-3 exchanges" },
                { title: "Summary and production", desc: "Generate the final document in .md", time: "1-2 exchanges" }
            ]
        },
        2: {
            agentName: "Problem Detective",
            document: "Problem Statement",
            shortDesc: "Precisely clarifies the real problem the project is trying to solve.",
            whatFor: "The Problem Statement is the second document of Step 1. It answers the fundamental question: what REAL problem are you solving? It distinguishes symptoms from root causes. A poorly defined problem inevitably leads to a bad solution.",
            whyUse: "42% of startups fail because they solve a problem that does not exist (CB Insights). Esteban possesses the analytical rigor of an MIT researcher, the empathy of an IDEO designer, and the discipline of a McKinsey consultant. He is skeptical by nature and never takes a problem at face value.",
            howToUse: "Start the conversation with Esteban and describe your project. Warning: if you start by talking about your SOLUTION, he will politely stop you to refocus on the PROBLEM. He methodically investigates in 7 phases: identification of the real problem (vs. symptoms), understanding the people affected, measuring the impact, collecting evidence, and defining the expected outcome.",
            methodology: [
                { title: "Welcome and framing", desc: "Understand the initial context", time: "1-2 exchanges" },
                { title: "Identifying the real problem", desc: "Distinguish symptoms from root causes", time: "3-4 exchanges" },
                { title: "Understanding the people affected", desc: "Identify who suffers and how", time: "2-3 exchanges" },
                { title: "Measuring the impact", desc: "Quantify the problem in numbers", time: "2-3 exchanges" },
                { title: "Collecting evidence", desc: "Gather data and observations", time: "1-2 exchanges" },
                { title: "Defining the expected outcome", desc: "What happens if the problem is solved?", time: "1-2 exchanges" },
                { title: "Summary and production", desc: "Generate the final document in .md", time: "1-2 exchanges" }
            ]
        },
        3: {
            agentName: "Business Strategist",
            document: "Business Case",
            shortDesc: "Explains why the project can be economically or strategically viable.",
            whatFor: "The Business Case is the third document of Step 1. It answers the question: can this project be economically viable? Even a brilliant vision and a real problem are not enough without a solid business model.",
            whyUse: "29% of startups fail due to lack of cash (CB Insights). Theo combines the rigor of a Goldman Sachs analyst, the vision of a McKinsey partner, and the mindset of a Y Combinator founder. He demands numbers: \"The market is big\" is NOT acceptable, \"The SAM is estimated at 500M EUR\" is.",
            howToUse: "Start the conversation with Theo and present your project. He will evaluate your economic viability like a benevolent investor analyzing a pitch. He explores in 7 phases: market opportunity (TAM/SAM/SOM), your business model, cost estimation, competitive analysis, risks, and produces a Go/No-Go/Pivot recommendation.",
            methodology: [
                { title: "Welcome and framing", desc: "Understand the project context", time: "1-2 exchanges" },
                { title: "Market opportunity", desc: "Analyze TAM, SAM, SOM", time: "2-3 exchanges" },
                { title: "Business model", desc: "Define how to make money", time: "3-4 exchanges" },
                { title: "Cost estimation", desc: "Calculate burn rate and investments", time: "2-3 exchanges" },
                { title: "Competitive analysis", desc: "Identify and analyze competitors", time: "2-3 exchanges" },
                { title: "Risks and recommendation", desc: "Assess risks and give a Go/No-Go verdict", time: "2-3 exchanges" },
                { title: "Summary and production", desc: "Generate the final Business Case", time: "1-2 exchanges" }
            ]
        },
        4: {
            agentName: "MVP Strategist & Scope Master",
            document: "Initial Objectives",
            shortDesc: "Determines what the first version must accomplish to be considered successful.",
            whatFor: "The Initial Objectives are the last document of Step 1. It is the bridge between strategic thinking and concrete execution (Step 2). It defines THE minimum that proves the project has value and transforms vague ideas into measurable SMART objectives.",
            whyUse: "Without clear objectives, scope explodes and the project never finishes. Nathan combines the prioritization discipline of a Spotify PM, the method of a Google director, and the Lean Startup mindset. His mantra: \"Less but better.\" If everything is a priority, nothing is.",
            howToUse: "Start the conversation with Nathan and explain your project. He acts as a scope guardian: his mission is to prevent you from wanting to do everything in v1. He guides you through 7 phases to define the main objective, secondary objectives, MVP scope, measurable success criteria, and constraints. Warning: if your scope is too large, he will REFUSE to produce the document.",
            methodology: [
                { title: "Welcome and framing", desc: "Understand the project context", time: "1-2 exchanges" },
                { title: "Main objective", desc: "Define THE main goal of the MVP", time: "2-3 exchanges" },
                { title: "Secondary objectives", desc: "Identify complementary objectives", time: "1-2 exchanges" },
                { title: "MVP scope", desc: "Delimit what is IN and OUT", time: "3-4 exchanges" },
                { title: "Success criteria", desc: "Define how to measure success", time: "2-3 exchanges" },
                { title: "Constraints and assumptions", desc: "Identify limitations and assumptions", time: "2-3 exchanges" },
                { title: "Summary and production", desc: "Generate the final document", time: "1-2 exchanges" }
            ]
        },
        5: {
            agentName: "CharterBot",
            document: "Project Charter",
            shortDesc: "Formalizes the project by defining its framework, scope, responsibilities, and objectives.",
            whatFor: "The Project Charter is the founding document of your project. It formalizes its existence, defines its framework, scope, responsibilities, and objectives. It protects the team against scope creep.",
            whyUse: "Without a charter, the project has no official mandate. Roles are unclear, scope changes constantly. Lea has more than 15 years of experience at Google, Amazon, Netflix, and Spotify.",
            howToUse: "Start the conversation with Lea and describe your project. She proceeds through structured phases: discovery, deep dive, challenge, structuring, then writing. She NEVER generates the final document without having asked ALL necessary questions.",
            methodology: [
                { title: "Discovery", desc: "Understand the project and its context", time: "5-10 min" },
                { title: "Deep dive", desc: "Explore each dimension in detail", time: "15-20 min" },
                { title: "Challenge", desc: "Identify inconsistencies and weaknesses", time: "10-15 min" },
                { title: "Structuring", desc: "Organize the information", time: "5-10 min" },
                { title: "Writing", desc: "Produce the final document", time: "5 min" }
            ]
        },
        6: {
            agentName: "PRDBot",
            document: "PRD",
            shortDesc: "Details exactly what the product must contain and how it should work.",
            whatFor: "The PRD details each feature, each user story, each acceptance criterion. Without a PRD, each developer interprets requirements in their own way.",
            whyUse: "Mathieu is obsessed with clarity: a poorly written user story physically hurts him. He verifies that each feature addresses a documented need. Experience at Google, Amazon, Spotify, and Stripe.",
            howToUse: "Start the conversation with Mathieu and describe your product. He uses the RICE, ICE, and Kano frameworks to prioritize features. He distinguishes what the user ASKS for from what they actually NEED.",
            methodology: [
                { title: "Product discovery", desc: "Understand the product and its context", time: "10-15 min" },
                { title: "User exploration", desc: "Understand personas and journeys", time: "10-15 min" },
                { title: "Feature definition", desc: "List and detail each feature", time: "15-20 min" },
                { title: "Product challenge", desc: "Question and prioritize", time: "10-15 min" },
                { title: "Structuring and writing", desc: "Produce the final PRD", time: "10 min" }
            ]
        },
        7: {
            agentName: "RoadmapBot",
            document: "Roadmap",
            shortDesc: "Organizes the major development phases over time.",
            whatFor: "The Roadmap organizes the major phases, defines key milestones, and communicates the direction to all stakeholders.",
            whyUse: "Sarah thinks in outcomes, not outputs. She distinguishes commitment from aspiration and integrates decision points. Experience at Spotify, Google, and Basecamp.",
            howToUse: "Start the conversation with Sarah. She will guide you to create an outcome-driven roadmap. She hates roadmaps with precise dates for each feature: \"A roadmap is not a Gantt chart.\"",
            methodology: [
                { title: "Vision and strategy", desc: "Clarify the direction and objectives", time: "10-15 min" },
                { title: "Themes and initiatives", desc: "Identify the major workstreams", time: "15-20 min" },
                { title: "Prioritization and sequencing", desc: "Order by impact and feasibility", time: "10-15 min" },
                { title: "Challenge and stress test", desc: "Test the robustness of the plan", time: "10-15 min" },
                { title: "Structuring and writing", desc: "Produce the final roadmap", time: "10 min" }
            ]
        },
        8: {
            agentName: "TechSpecBot",
            document: "Technical Specification",
            shortDesc: "Describes the technical architecture and implementation choices.",
            whatFor: "The Tech Spec describes the system architecture and technology choices. Without this document, each developer makes local technical decisions without a global vision.",
            whyUse: "A technical choice without justification makes Gaetan nervous. He insists on trade-offs. Experience at Google, Stripe, Netflix, and Amazon.",
            howToUse: "Start the conversation with Gaetan. He requires that each technical choice be justified with pros, cons, and alternatives. He always thinks about scalability, maintainability, and security.",
            methodology: [
                { title: "Understanding the context", desc: "Understand the business and constraints", time: "10 min" },
                { title: "Architecture exploration", desc: "Define components and flows", time: "15-20 min" },
                { title: "Cross-cutting requirements", desc: "Security, performance, maintainability", time: "10-15 min" },
                { title: "Technical challenge", desc: "Question each choice", time: "15-20 min" },
                { title: "Structuring and writing", desc: "Produce the technical spec", time: "10 min" }
            ]
        },
        9: {
            agentName: "DecisionBot",
            document: "Decision Log",
            shortDesc: "Archives important decisions made and the reasons behind those choices.",
            whatFor: "The Decision Log is the memory of your project. Without this document, decisions are constantly re-debated and new members do not understand the \"why\" behind choices.",
            whyUse: "For Karim, an undocumented decision is a decision that does not exist. A strong advocate of Amazon's \"disagree and commit\". Experience at Amazon, Atlassian, Netflix, and Google.",
            howToUse: "Start the conversation with Karim and tell him about the decisions made in your project. He anticipates the questions someone will ask in 6 months when reviewing the log.",
            methodology: [
                { title: "Decision inventory", desc: "Identify the decisions to document", time: "10-15 min" },
                { title: "Deep dive", desc: "Explore context, alternatives, consequences", time: "20-30 min" },
                { title: "Challenge", desc: "Verify overall consistency", time: "10-15 min" },
                { title: "Classification and structuring", desc: "Organize by category and priority", time: "5-10 min" },
                { title: "Writing", desc: "Produce the final Decision Log", time: "10 min" }
            ]
        },
        10: {
            agentName: "MetricsBot",
            document: "OKRs / Metrics Document",
            shortDesc: "Defines measurable objectives to evaluate the project's performance.",
            whatFor: "The OKRs / Metrics document defines how to measure whether your project succeeds or fails. Without metrics, you are navigating blind.",
            whyUse: "Fanny challenges vanity metrics: \"Page views increased by 30%. So what?\" She distinguishes input metrics from output metrics. OKR experience at Google, Spotify, and Amazon.",
            howToUse: "Start the conversation with Fanny. She begins with the North Star Metric, then defines Objectives, measurable Key Results with baselines and targets. She verifies that your OKRs are not disguised tasks.",
            methodology: [
                { title: "North Star and vision", desc: "Define THE ultimate success metric", time: "10 min" },
                { title: "Defining Objectives", desc: "Formulate qualitative objectives", time: "10-15 min" },
                { title: "Defining Key Results", desc: "Create measurable results", time: "15-20 min" },
                { title: "Challenge", desc: "Test the robustness of the OKRs", time: "10-15 min" },
                { title: "Dashboard and cadence", desc: "Define tracking and reviews", time: "10 min" },
                { title: "Structuring and writing", desc: "Produce the final document", time: "10 min" }
            ]
        },
        11: {
            agentName: "Lead UX Researcher",
            document: "UX Research Document",
            shortDesc: "Documents user research and insights that guide the product experience.",
            whatFor: "The UX Research Document captures the learnings from user research. It is the source of truth for understanding the real problems of users.",
            whyUse: "Adrien has more than 15 years of experience at Google, Spotify, Airbnb, and Amazon. He ensures that your product decisions are based on evidence, not assumptions.",
            howToUse: "Start the conversation with Adrien. He is allergic to confirmation bias and systematically roots it out. If a hypothesis is weak, he will tell you clearly.",
            methodology: [
                { title: "Context", desc: "Understand the product and its challenges", time: "5-8 min" },
                { title: "Research objectives", desc: "Define what we are trying to learn", time: "5-8 min" },
                { title: "Methodology", desc: "Choose the research methods", time: "5-8 min" },
                { title: "Participants", desc: "Define the research panel", time: "3-5 min" },
                { title: "Results", desc: "Analyze and synthesize insights", time: "10-15 min" },
                { title: "Review and finalization", desc: "Produce the final document", time: "5 min" }
            ]
        },
        12: {
            agentName: "Staff API Architect",
            document: "API Specification",
            shortDesc: "Precisely defines how systems and services communicate with each other.",
            whatFor: "The API Specification is the contract that defines how your systems communicate. It directly impacts the developer experience (DX) and maintainability.",
            whyUse: "Pauline has designed APIs for millions of developers at Stripe, Google, Twilio, and Zalando. Perfectionist but pragmatic.",
            howToUse: "Start the conversation with Pauline. She always thinks about edge cases and error scenarios BEFORE nominal cases. A poorly named endpoint physically hurts her.",
            methodology: [
                { title: "System context", desc: "Understand the overall architecture", time: "5-8 min" },
                { title: "Resources and model", desc: "Define entities and relationships", time: "8-10 min" },
                { title: "Endpoint design", desc: "Design each endpoint", time: "10-15 min" },
                { title: "Security and authentication", desc: "Define access mechanisms", time: "5-8 min" },
                { title: "Operability and evolution", desc: "Versioning, deprecation, monitoring", time: "5-8 min" },
                { title: "Review and finalization", desc: "Produce the final API spec", time: "5 min" }
            ]
        },
        13: {
            agentName: "Principal Data Architect",
            document: "Data Specification",
            shortDesc: "Structures data models and their logical organization.",
            whatFor: "The Data Specification is the master plan for organizing your data. It is the shared reference between dev, data, and compliance teams.",
            whyUse: "Julien has designed data models supporting billions of transactions at Amazon, Spotify, Netflix, and Airbnb. He always thinks about evolution.",
            howToUse: "Start the conversation with Julien and describe your business domain. He makes a clear distinction between logical and physical models. Vigilant on GDPR matters.",
            methodology: [
                { title: "Business domain", desc: "Understand the domain and bounded contexts", time: "8-10 min" },
                { title: "Entities and bounded contexts", desc: "Identify the main entities", time: "8-10 min" },
                { title: "Attributes and relationships", desc: "Detail each entity and its links", time: "10-15 min" },
                { title: "Technical strategy", desc: "Indexing, partitioning, caching", time: "5-8 min" },
                { title: "Compliance and governance", desc: "GDPR, classification, retention", time: "5-8 min" },
                { title: "Migration and evolution", desc: "Plan schema evolution", time: "5 min" }
            ]
        },
        14: {
            agentName: "Principal Security Engineer",
            document: "Security Review Document",
            shortDesc: "Analyzes security risks and the protective measures to implement.",
            whatFor: "The Security Review Document analyzes the security posture of your system: assets to protect, threats, protective measures, incident response procedures.",
            whyUse: "Yassine practices \"assume breach\" at all times. Pragmatic: perfect security does not exist, but intelligent risk management does. Experience at Google, Netflix, Microsoft, and Stripe.",
            howToUse: "Start the conversation with Yassine. \"We'll deal with it later\" is his number one enemy phrase. He thinks like an attacker to better defend.",
            methodology: [
                { title: "Map the system", desc: "Identify all components and flows", time: "8-10 min" },
                { title: "Classify data", desc: "Assess the sensitivity of each type", time: "5-8 min" },
                { title: "Model threats", desc: "Apply STRIDE/OWASP", time: "10-15 min" },
                { title: "Evaluate controls", desc: "Analyze existing defenses", time: "5-8 min" },
                { title: "Define recommendations", desc: "Prioritize security actions", time: "8-10 min" },
                { title: "Compliance and validation", desc: "Verify applicable standards", time: "5 min" }
            ]
        },
        15: {
            agentName: "Staff SRE",
            document: "Performance Plan",
            shortDesc: "Defines how the product must handle load, scalability, and optimization.",
            whatFor: "The Performance Plan anticipates load challenges and plans scalability with measurable objectives.",
            whyUse: "Thomas is obsessed with numbers. He always distinguishes latency, throughput, and capacity. He has managed systems serving billions of requests at Google, Netflix, Amazon, and Cloudflare.",
            howToUse: "Start the conversation with Thomas. No \"it should be fine\": he wants benchmarks, P99s, and SLOs.",
            methodology: [
                { title: "System and challenges", desc: "Understand the architecture and risks", time: "5-8 min" },
                { title: "Performance objectives", desc: "Define SLOs, SLIs, SLAs", time: "8-10 min" },
                { title: "Current capacity", desc: "Identify bottlenecks", time: "8-10 min" },
                { title: "Load projections", desc: "Anticipate growth", time: "5-8 min" },
                { title: "Scalability strategy", desc: "Horizontal, vertical, cache, CDN", time: "8-10 min" },
                { title: "Tests and monitoring", desc: "Define load tests and alerts", time: "5-8 min" }
            ]
        },
        16: {
            agentName: "VP of Growth / Head of GTM",
            document: "Go-To-Market Plan",
            shortDesc: "Describes the launch and go-to-market strategy.",
            whatFor: "The GTM Plan defines who your customers are, how to reach them, at what price, through which channels, and on what timeline.",
            whyUse: "Jade thinks in systems: every channel, message, and metric is interconnected. Experience at Spotify, HubSpot, Slack, Notion, and Amazon.",
            howToUse: "Start the conversation with Jade. She is allergic to \"spray and pray\": distributing everywhere without strategy. She insists on the \"who\" before the \"what\".",
            methodology: [
                { title: "Product and market", desc: "Understand the context and market", time: "8-10 min" },
                { title: "Target audience and segments", desc: "Identify priority customers", time: "8-10 min" },
                { title: "Value proposition", desc: "Articulate the differentiation", time: "5-8 min" },
                { title: "Acquisition strategy", desc: "Choose channels and tactics", time: "8-10 min" },
                { title: "Pricing and model", desc: "Define price positioning", time: "5-8 min" },
                { title: "Timeline and metrics", desc: "Plan the launch and measure", time: "5-8 min" }
            ]
        },
        17: {
            agentName: "Chief Risk Officer",
            document: "Risk Management Document",
            shortDesc: "Identifies major risks and strategies to mitigate them.",
            whatFor: "The Risk Management Document transforms uncertainty into actionable information. It creates a culture of proactive risk management.",
            whyUse: "Hana is the \"professional pessimist\" who helps optimists succeed. She thinks in probabilities and impacts, never in certainties. Experience at Amazon, Google, McKinsey.",
            howToUse: "Start the conversation with Hana. She explores in 5 phases: context, systematic risk identification, assessment, treatment strategies, and monitoring.",
            methodology: [
                { title: "Context and challenges", desc: "Understand the project and its challenges", time: "5-8 min" },
                { title: "Identify risks", desc: "Map all risks", time: "10-15 min" },
                { title: "Assess risks", desc: "Probability x Impact for each", time: "8-10 min" },
                { title: "Treatment strategies", desc: "Define how to treat each risk", time: "8-10 min" },
                { title: "Structure the monitoring", desc: "Review cadence and responsible parties", time: "5 min" }
            ]
        },
        18: {
            agentName: "Senior Compliance Expert",
            document: "Compliance Documentation",
            shortDesc: "Ensures the project complies with legal and regulatory obligations.",
            whatFor: "The Compliance Documentation ensures that your project respects ALL legal and regulatory obligations (GDPR, SOC2, ISO 27001...).",
            whyUse: "Xavier identifies non-compliance risks BEFORE they become problems. More than 15 years of experience in SaaS, fintech, and healthtech compliance auditing.",
            howToUse: "Start the conversation with Xavier. No regulatory blind spot should escape him. He thinks in \"compliance as code\".",
            methodology: [
                { title: "Framing and context", desc: "Understand the sector and markets", time: "5-8 questions" },
                { title: "Regulatory mapping", desc: "Identify all regulations", time: "6-8 questions" },
                { title: "Current state audit", desc: "Assess existing compliance", time: "8-10 questions" },
                { title: "Remediation plan", desc: "Prioritize corrective actions", time: "5-7 questions" },
                { title: "Validation and generation", desc: "Produce the final document", time: "Summary" }
            ]
        },
        19: {
            agentName: "Tech Legal Review Expert",
            document: "Legal Review Document",
            shortDesc: "Analyzes the legal implications related to the product or service.",
            whatFor: "The Legal Review Document analyzes all legal implications: intellectual property, contracts, compliance, risks.",
            whyUse: "William seeks the optimal balance between protection and business agility. Every legal gray area must be identified and addressed.",
            howToUse: "Start the conversation with William. He asks the uncomfortable questions no one wants to hear and quantifies the impact of each legal risk.",
            methodology: [
                { title: "Framing and legal structure", desc: "Understand the entity and its obligations", time: "5-7 questions" },
                { title: "Intellectual property", desc: "Patents, trademarks, code, data", time: "5-7 questions" },
                { title: "Contracts and agreements", desc: "Analyze all contracts", time: "5-7 questions" },
                { title: "Risks and compliance", desc: "Identify legal risks", time: "5-7 questions" },
                { title: "Summary and recommendations", desc: "Prioritize legal actions", time: "Summary" }
            ]
        },
        20: {
            agentName: "Senior Principal Architect",
            document: "Architecture Review Board Document",
            shortDesc: "Validates and oversees architecture choices at scale.",
            whatFor: "The ARB document validates or rejects a major architectural proposal. A bad choice can cost millions in refactoring.",
            whyUse: "Nadia is obsessed with the \"-ilities\": scalability, reliability, maintainability. More than 20 years of experience at Google, Amazon, Netflix, and Spotify.",
            howToUse: "Start the conversation with Nadia. She uses the ATAM method. She NEVER validates without having deeply questioned.",
            methodology: [
                { title: "Context and business drivers", desc: "Understand the motivations for change", time: "4-6 questions" },
                { title: "Current architecture", desc: "Analyze the existing system and its limitations", time: "4-6 questions" },
                { title: "Proposed architecture", desc: "Examine the solution in detail", time: "6-8 questions" },
                { title: "Impact analysis and risks", desc: "Evaluate consequences and risks", time: "4-6 questions" },
                { title: "Decision and migration plan", desc: "Approve/reject + action plan", time: "4-6 questions" }
            ]
        },
        21: {
            agentName: "SRE Lead - Incident Management",
            document: "Incident Report",
            shortDesc: "Documents major incidents and their impacts.",
            whatFor: "The Incident Report documents a major incident: detection, timeline, impact, resolution, and lessons learned.",
            whyUse: "Valerie is calm and methodical under pressure. She champions the \"blameless\" culture. More than 15 years of experience at Google, Amazon, PagerDuty, and Datadog.",
            howToUse: "Start the conversation with Valerie after an incident. Every minute of the timeline must be accurate, every impact quantified.",
            methodology: [
                { title: "Identification and framing", desc: "Classify the incident and its severity", time: "4-5 questions" },
                { title: "Timeline reconstruction", desc: "Minute by minute, what happened?", time: "6-8 questions" },
                { title: "Impact analysis", desc: "Quantify the impact on all fronts", time: "4-6 questions" },
                { title: "Root cause and factors", desc: "Identify the deep root cause", time: "5-7 questions" },
                { title: "Corrective actions", desc: "Define actions to prevent recurrence", time: "3-5 questions" },
                { title: "Validation and generation", desc: "Produce the incident report", time: "Summary" }
            ]
        },
        22: {
            agentName: "Post-Mortem Expert",
            document: "Post-Mortem Document",
            shortDesc: "Analyzes the root causes of a failure or incident to prevent recurrence.",
            whatFor: "The Post-Mortem explores systemic causes, organizational factors, process failures, and structural improvements.",
            whyUse: "Cedric categorically refuses all individual blame. He asks \"why?\" again and again until the true root cause is found. Inspired by Google, Etsy, and Netflix.",
            howToUse: "Start the conversation with Cedric 24 to 72 hours AFTER resolution. Unlike the Incident Report, the post-mortem analyzes the \"why\" in depth (5 Whys method).",
            methodology: [
                { title: "Context and setup", desc: "Set the framework for the analysis", time: "3-4 questions" },
                { title: "Detailed reconstruction", desc: "Review the events in detail", time: "5-7 questions" },
                { title: "Root cause analysis", desc: "5 Whys method", time: "6-8 questions" },
                { title: "Learnings and resilience", desc: "What did we learn?", time: "5-6 questions" },
                { title: "Corrective actions", desc: "How to prevent in the future?", time: "4-5 questions" },
                { title: "Validation and generation", desc: "Produce the final post-mortem", time: "Summary" }
            ]
        },
        23: {
            agentName: "SRE Expert - Service Levels",
            document: "SLA Documentation",
            shortDesc: "Defines performance and availability commitments for the service.",
            whatFor: "The SLA Documentation defines your formal commitments: SLI (metric) > SLO (internal objective) > SLA (contractual commitment).",
            whyUse: "Benjamin calibrates honest and sustainable commitments, not impossible promises. Experience at Google, Amazon AWS, Stripe, and Datadog.",
            howToUse: "Start the conversation with Benjamin. He refuses unrealistic SLAs: \"99.999% uptime\" without monitoring is a no. He thinks in error budgets.",
            methodology: [
                { title: "Understanding the service", desc: "Understand the service and its clients", time: "5-6 questions" },
                { title: "Defining SLIs", desc: "Identify key metrics", time: "5-7 questions" },
                { title: "Calibrating SLOs", desc: "Set realistic internal objectives", time: "4-6 questions" },
                { title: "Defining the SLA", desc: "Contractual commitments and compensations", time: "5-7 questions" },
                { title: "Validation and generation", desc: "Produce the SLA documentation", time: "Summary" }
            ]
        },
        24: {
            agentName: "Tech Governance Expert",
            document: "Governance Documentation",
            shortDesc: "Structures the internal rules for control, validation, and project oversight.",
            whatFor: "The Governance Documentation structures the rules for control, validation, and oversight. At 50 or 200 people, without explicit governance, everything slows down.",
            whyUse: "Francois designs the minimum viable governance. He thinks in decision flows: every decision must have a clear owner. More than 20 years of experience.",
            howToUse: "Start the conversation with Francois. \"We have always done it this way\" is his maximum alert phrase. He refuses unnecessary bureaucracy.",
            methodology: [
                { title: "Organizational diagnosis", desc: "Understand how things work today", time: "5-7 questions" },
                { title: "Decision structure", desc: "Who decides what and how", time: "5-7 questions" },
                { title: "Operational processes", desc: "How work progresses", time: "5-7 questions" },
                { title: "Cadence and rituals", desc: "Define the rhythms of the organization", time: "4-5 questions" },
                { title: "Reporting and transparency", desc: "How information flows", time: "3-5 questions" },
                { title: "Validation and generation", desc: "Produce the governance document", time: "Summary" }
            ]
        }
    },
    de: {
        1: {
            agentName: "Strategic Vision Architect",
            document: "Vision Document",
            shortDesc: "Definiert, warum das Projekt existiert und welche langfristige Ambition es verfolgt.",
            whatFor: "Das Vision Document ist das Fundament Ihres gesamten Projekts. Es ist das ERSTE zu erstellende Dokument. Es definiert die 3-5-Jahres-Ambition, das grundlegende \"Warum\" des Projekts und dient als Kompass fur alle zukunftigen strategischen Entscheidungen. Ohne dieses Dokument hat Ihr Team keine gemeinsame Richtung.",
            whyUse: "Weil ein Projekt ohne klare Vision ein Schiff ohne Ruder ist. Gabriel vereint die Erfahrung eines Chief Product Officers und eines Chief Strategy Officers. Er wird Sie wie ein strategischer Sparringspartner herausfordern: Er fullt das Dokument nicht fur Sie aus, sondern hilft Ihnen, IHRE eigene Vision zu entdecken und zu artikulieren.",
            howToUse: "Starten Sie ein Gesprach mit Gabriel, indem Sie auf den grunen Button klicken. Er fuhrt Sie durch ein strukturiertes Interview in 6 Phasen: zuerst die Rahmung Ihres Projekts, dann die Erkundung des \"Warum\" (warum dieses Projekt existiert), die Definition Ihrer ambitionierten Vision, die Identifizierung Ihrer Zielgruppe, die Leitprinzipien und schliesslich die finale Zusammenfassung als .md-Dokument. Beantworten Sie jede Frage mit so vielen Details wie moglich. Wenn Ihre Antwort vage ist, wird er Sie herausfordern.",
            methodology: [
                { title: "Begruessung und Rahmung", desc: "Den Projektkontext verstehen", time: "1-2 Austausche" },
                { title: "Erkundung des \"Warum\"", desc: "Das grundlegende Warum ergründen", time: "2-3 Austausche" },
                { title: "Definition der Vision", desc: "Die langfristige Ambition artikulieren", time: "2-3 Austausche" },
                { title: "Zielgruppe und Wertversprechen", desc: "Nutzer und einzigartigen Wert identifizieren", time: "2-3 Austausche" },
                { title: "Leitprinzipien und Erfolgskriterien", desc: "Regeln und Erfolgsmasse definieren", time: "2-3 Austausche" },
                { title: "Zusammenfassung und Erstellung", desc: "Das finale Dokument als .md generieren", time: "1-2 Austausche" }
            ]
        },
        2: {
            agentName: "Problem Detective",
            document: "Problem Statement",
            shortDesc: "Klart prazise das reale Problem, das das Projekt zu losen versucht.",
            whatFor: "Das Problem Statement ist das zweite Dokument von Schritt 1. Es beantwortet die grundlegende Frage: Welches ECHTE Problem losen Sie? Es unterscheidet Symptome von Ursachen. Ein schlecht definiertes Problem fuhrt unweigerlich zu einer schlechten Losung.",
            whyUse: "42% der Startups scheitern, weil sie ein Problem losen, das nicht existiert (CB Insights). Esteban besitzt die analytische Strenge eines MIT-Forschers, die Empathie eines IDEO-Designers und die Disziplin eines McKinsey-Beraters. Er ist von Natur aus skeptisch und nimmt ein Problem nie fur bare Munze.",
            howToUse: "Starten Sie das Gesprach mit Esteban und beschreiben Sie Ihr Projekt. Achtung: Wenn Sie mit Ihrer LOSUNG beginnen, wird er Sie hoflich unterbrechen, um Sie auf das PROBLEM zuruckzufuhren. Er ermittelt methodisch in 7 Phasen: Identifizierung des realen Problems (vs. Symptome), Verstandnis der betroffenen Personen, Messung der Auswirkungen, Beweissammlung und Definition des erwarteten Ergebnisses.",
            methodology: [
                { title: "Begruessung und Rahmung", desc: "Den anfanglichen Kontext verstehen", time: "1-2 Austausche" },
                { title: "Identifizierung des realen Problems", desc: "Symptome von Ursachen unterscheiden", time: "3-4 Austausche" },
                { title: "Verstandnis der Betroffenen", desc: "Identifizieren, wer leidet und wie", time: "2-3 Austausche" },
                { title: "Messung der Auswirkungen", desc: "Das Problem in Zahlen quantifizieren", time: "2-3 Austausche" },
                { title: "Beweissammlung", desc: "Daten und Beobachtungen sammeln", time: "1-2 Austausche" },
                { title: "Definition des erwarteten Ergebnisses", desc: "Was passiert, wenn das Problem gelost ist?", time: "1-2 Austausche" },
                { title: "Zusammenfassung und Erstellung", desc: "Das finale Dokument als .md generieren", time: "1-2 Austausche" }
            ]
        },
        3: {
            agentName: "Business Strategist",
            document: "Business Case",
            shortDesc: "Erklart, warum das Projekt wirtschaftlich oder strategisch tragfahig sein kann.",
            whatFor: "Der Business Case ist das dritte Dokument von Schritt 1. Er beantwortet die Frage: Kann dieses Projekt wirtschaftlich tragfahig sein? Selbst eine brillante Vision und ein echtes Problem reichen ohne ein solides Geschaftsmodell nicht aus.",
            whyUse: "29% der Startups scheitern an Geldmangel (CB Insights). Theo vereint die Strenge eines Goldman-Sachs-Analysten, die Vision eines McKinsey-Partners und den Geist eines Y-Combinator-Grunders. Er verlangt Zahlen: \"Der Markt ist gross\" ist NICHT akzeptabel, \"Der SAM wird auf 500M EUR geschatzt\" schon.",
            howToUse: "Starten Sie das Gesprach mit Theo und prasentieren Sie Ihr Projekt. Er wird Ihre wirtschaftliche Tragfahigkeit wie ein wohlwollender Investor bewerten, der einen Pitch analysiert. Er erkundet in 7 Phasen: Marktchance (TAM/SAM/SOM), Ihr Geschaftsmodell, Kostenschatzung, Wettbewerbsanalyse, Risiken und gibt eine Go/No-Go/Pivot-Empfehlung ab.",
            methodology: [
                { title: "Begruessung und Rahmung", desc: "Den Projektkontext verstehen", time: "1-2 Austausche" },
                { title: "Marktchance", desc: "TAM, SAM, SOM analysieren", time: "2-3 Austausche" },
                { title: "Geschaftsmodell", desc: "Definieren, wie man Geld verdient", time: "3-4 Austausche" },
                { title: "Kostenschatzung", desc: "Burn Rate und Investitionen berechnen", time: "2-3 Austausche" },
                { title: "Wettbewerbsanalyse", desc: "Wettbewerber identifizieren und analysieren", time: "2-3 Austausche" },
                { title: "Risiken und Empfehlung", desc: "Risiken bewerten und Go/No-Go-Urteil abgeben", time: "2-3 Austausche" },
                { title: "Zusammenfassung und Erstellung", desc: "Den finalen Business Case generieren", time: "1-2 Austausche" }
            ]
        },
        4: {
            agentName: "MVP Strategist & Scope Master",
            document: "Anfangsziele",
            shortDesc: "Bestimmt, was die erste Version erreichen muss, um als erfolgreich zu gelten.",
            whatFor: "Die Anfangsziele sind das letzte Dokument von Schritt 1. Es ist die Brucke zwischen strategischem Denken und konkreter Umsetzung (Schritt 2). Es definiert DAS Minimum, das beweist, dass das Projekt Wert hat, und verwandelt vage Ideen in messbare SMART-Ziele.",
            whyUse: "Ohne klare Ziele explodiert der Scope und das Projekt wird nie fertig. Nathan vereint die Priorisierungsdisziplin eines Spotify-PM, die Methode eines Google-Direktors und die Lean-Startup-Denkweise. Sein Mantra: \"Weniger, aber besser.\" Wenn alles Prioritat hat, hat nichts Prioritat.",
            howToUse: "Starten Sie das Gesprach mit Nathan und erklaren Sie Ihr Projekt. Er agiert als Scope-Wachter: Seine Mission ist es, Sie davon abzuhalten, in v1 alles machen zu wollen. Er fuhrt Sie durch 7 Phasen, um das Hauptziel, sekundare Ziele, den MVP-Umfang, messbare Erfolgskriterien und Einschrankungen zu definieren. Achtung: Wenn Ihr Scope zu gross ist, wird er sich WEIGERN, das Dokument zu erstellen.",
            methodology: [
                { title: "Begruessung und Rahmung", desc: "Den Projektkontext verstehen", time: "1-2 Austausche" },
                { title: "Hauptziel", desc: "DAS Hauptziel des MVP definieren", time: "2-3 Austausche" },
                { title: "Sekundare Ziele", desc: "Erganzende Ziele identifizieren", time: "1-2 Austausche" },
                { title: "MVP-Umfang", desc: "Abgrenzen, was IN und OUT ist", time: "3-4 Austausche" },
                { title: "Erfolgskriterien", desc: "Definieren, wie Erfolg gemessen wird", time: "2-3 Austausche" },
                { title: "Einschrankungen und Annahmen", desc: "Grenzen und Annahmen identifizieren", time: "2-3 Austausche" },
                { title: "Zusammenfassung und Erstellung", desc: "Das finale Dokument generieren", time: "1-2 Austausche" }
            ]
        },
        5: {
            agentName: "CharterBot",
            document: "Project Charter",
            shortDesc: "Formalisiert das Projekt durch Definition seines Rahmens, Umfangs, der Verantwortlichkeiten und Ziele.",
            whatFor: "Der Project Charter ist das Grundungsdokument Ihres Projekts. Er formalisiert seine Existenz, definiert seinen Rahmen, Umfang, Verantwortlichkeiten und Ziele. Er schutzt das Team vor Scope Creep.",
            whyUse: "Ohne Charter hat das Projekt kein offizielles Mandat. Rollen sind unklar, der Umfang andert sich standig. Lea hat mehr als 15 Jahre Erfahrung bei Google, Amazon, Netflix und Spotify.",
            howToUse: "Starten Sie das Gesprach mit Lea und beschreiben Sie Ihr Projekt. Sie geht in strukturierten Phasen vor: Entdeckung, Vertiefung, Herausforderung, Strukturierung, dann Niederschrift. Sie generiert NIEMALS das finale Dokument, ohne ALLE notwendigen Fragen gestellt zu haben.",
            methodology: [
                { title: "Entdeckung", desc: "Das Projekt und seinen Kontext verstehen", time: "5-10 min" },
                { title: "Vertiefung", desc: "Jede Dimension im Detail erkunden", time: "15-20 min" },
                { title: "Herausforderung", desc: "Inkonsistenzen und Schwachen identifizieren", time: "10-15 min" },
                { title: "Strukturierung", desc: "Die Informationen organisieren", time: "5-10 min" },
                { title: "Niederschrift", desc: "Das finale Dokument erstellen", time: "5 min" }
            ]
        },
        6: {
            agentName: "PRDBot",
            document: "PRD",
            shortDesc: "Beschreibt genau, was das Produkt enthalten muss und wie es funktionieren soll.",
            whatFor: "Das PRD beschreibt jede Funktion, jede User Story, jedes Akzeptanzkriterium. Ohne PRD interpretiert jeder Entwickler die Anforderungen auf seine eigene Weise.",
            whyUse: "Mathieu ist besessen von Klarheit: Eine schlecht formulierte User Story verursacht ihm korperliche Schmerzen. Er uberpruft, dass jede Funktion einem dokumentierten Bedarf entspricht. Erfahrung bei Google, Amazon, Spotify und Stripe.",
            howToUse: "Starten Sie das Gesprach mit Mathieu und beschreiben Sie Ihr Produkt. Er verwendet die Frameworks RICE, ICE und Kano, um Funktionen zu priorisieren. Er unterscheidet, was der Nutzer VERLANGT, von dem, was er tatsachlich BRAUCHT.",
            methodology: [
                { title: "Produktentdeckung", desc: "Das Produkt und seinen Kontext verstehen", time: "10-15 min" },
                { title: "Nutzerexploration", desc: "Personas und Journeys verstehen", time: "10-15 min" },
                { title: "Funktionsdefinition", desc: "Jede Funktion auflisten und detaillieren", time: "15-20 min" },
                { title: "Produkt-Herausforderung", desc: "Hinterfragen und priorisieren", time: "10-15 min" },
                { title: "Strukturierung und Niederschrift", desc: "Das finale PRD erstellen", time: "10 min" }
            ]
        },
        7: {
            agentName: "RoadmapBot",
            document: "Roadmap",
            shortDesc: "Organisiert die grossen Entwicklungsphasen im Zeitverlauf.",
            whatFor: "Die Roadmap organisiert die grossen Phasen, definiert die wichtigsten Meilensteine und kommuniziert die Richtung an alle Stakeholder.",
            whyUse: "Sarah denkt in Outcomes, nicht in Outputs. Sie unterscheidet Commitment von Aspiration und integriert Entscheidungspunkte. Erfahrung bei Spotify, Google und Basecamp.",
            howToUse: "Starten Sie das Gesprach mit Sarah. Sie wird Sie anleiten, eine Outcome-getriebene Roadmap zu erstellen. Sie hasst Roadmaps mit genauen Daten fur jede Funktion: \"Eine Roadmap ist kein Gantt-Diagramm.\"",
            methodology: [
                { title: "Vision und Strategie", desc: "Die Richtung und Ziele klaren", time: "10-15 min" },
                { title: "Themen und Initiativen", desc: "Die grossen Arbeitsstrome identifizieren", time: "15-20 min" },
                { title: "Priorisierung und Reihenfolge", desc: "Nach Wirkung und Machbarkeit ordnen", time: "10-15 min" },
                { title: "Herausforderung und Stresstest", desc: "Die Robustheit des Plans testen", time: "10-15 min" },
                { title: "Strukturierung und Niederschrift", desc: "Die finale Roadmap erstellen", time: "10 min" }
            ]
        },
        8: {
            agentName: "TechSpecBot",
            document: "Technical Specification",
            shortDesc: "Beschreibt die technische Architektur und Implementierungsentscheidungen.",
            whatFor: "Die Tech Spec beschreibt die Systemarchitektur und Technologieentscheidungen. Ohne dieses Dokument trifft jeder Entwickler lokale technische Entscheidungen ohne globale Vision.",
            whyUse: "Eine technische Entscheidung ohne Begrundung macht Gaetan nervos. Er besteht auf Trade-offs. Erfahrung bei Google, Stripe, Netflix und Amazon.",
            howToUse: "Starten Sie das Gesprach mit Gaetan. Er verlangt, dass jede technische Entscheidung mit Vorteilen, Nachteilen und Alternativen begrundet wird. Er denkt immer an Skalierbarkeit, Wartbarkeit und Sicherheit.",
            methodology: [
                { title: "Kontextverstandnis", desc: "Business und Einschrankungen verstehen", time: "10 min" },
                { title: "Architektur-Erkundung", desc: "Komponenten und Ablaufe definieren", time: "15-20 min" },
                { title: "Querschnittsanforderungen", desc: "Sicherheit, Performance, Wartbarkeit", time: "10-15 min" },
                { title: "Technische Herausforderung", desc: "Jede Entscheidung hinterfragen", time: "15-20 min" },
                { title: "Strukturierung und Niederschrift", desc: "Die technische Spezifikation erstellen", time: "10 min" }
            ]
        },
        9: {
            agentName: "DecisionBot",
            document: "Decision Log",
            shortDesc: "Archiviert wichtige Entscheidungen und die Grunde dahinter.",
            whatFor: "Das Decision Log ist das Gedachtnis Ihres Projekts. Ohne dieses Dokument werden Entscheidungen standig neu diskutiert und neue Mitglieder verstehen nicht das \"Warum\" hinter den Entscheidungen.",
            whyUse: "Fur Karim ist eine nicht dokumentierte Entscheidung eine Entscheidung, die nicht existiert. Ein uberzeugter Verfechter von Amazons \"Disagree and Commit\". Erfahrung bei Amazon, Atlassian, Netflix und Google.",
            howToUse: "Starten Sie das Gesprach mit Karim und erzahlen Sie ihm von den Entscheidungen in Ihrem Projekt. Er antizipiert die Fragen, die jemand in 6 Monaten beim Durchlesen des Logs stellen wird.",
            methodology: [
                { title: "Entscheidungsinventar", desc: "Zu dokumentierende Entscheidungen identifizieren", time: "10-15 min" },
                { title: "Vertiefung", desc: "Kontext, Alternativen, Konsequenzen erkunden", time: "20-30 min" },
                { title: "Herausforderung", desc: "Gesamtkoharenz uberprufen", time: "10-15 min" },
                { title: "Klassifizierung und Strukturierung", desc: "Nach Kategorie und Prioritat organisieren", time: "5-10 min" },
                { title: "Niederschrift", desc: "Das finale Decision Log erstellen", time: "10 min" }
            ]
        },
        10: {
            agentName: "MetricsBot",
            document: "OKRs / Metrics Document",
            shortDesc: "Definiert messbare Ziele zur Bewertung der Projektleistung.",
            whatFor: "Das OKRs / Metrics-Dokument definiert, wie gemessen wird, ob Ihr Projekt erfolgreich ist oder scheitert. Ohne Metriken navigieren Sie blind.",
            whyUse: "Fanny hinterfragt Vanity-Metriken: \"Die Seitenaufrufe sind um 30% gestiegen. Und?\" Sie unterscheidet Input-Metriken von Output-Metriken. OKR-Erfahrung bei Google, Spotify und Amazon.",
            howToUse: "Starten Sie das Gesprach mit Fanny. Sie beginnt mit der North Star Metric, definiert dann Objectives, messbare Key Results mit Baselines und Zielwerten. Sie uberpruft, dass Ihre OKRs keine verkleideten Aufgaben sind.",
            methodology: [
                { title: "North Star und Vision", desc: "DIE ultimative Erfolgsmetrik definieren", time: "10 min" },
                { title: "Definition der Objectives", desc: "Qualitative Ziele formulieren", time: "10-15 min" },
                { title: "Definition der Key Results", desc: "Messbare Ergebnisse erstellen", time: "15-20 min" },
                { title: "Herausforderung", desc: "Die Robustheit der OKRs testen", time: "10-15 min" },
                { title: "Dashboard und Kadenz", desc: "Tracking und Reviews definieren", time: "10 min" },
                { title: "Strukturierung und Niederschrift", desc: "Das finale Dokument erstellen", time: "10 min" }
            ]
        },
        11: {
            agentName: "Lead UX Researcher",
            document: "UX Research Document",
            shortDesc: "Dokumentiert Nutzerforschung und Erkenntnisse, die das Produkterlebnis leiten.",
            whatFor: "Das UX Research Document erfasst die Erkenntnisse aus der Nutzerforschung. Es ist die Quelle der Wahrheit, um die echten Probleme der Nutzer zu verstehen.",
            whyUse: "Adrien hat mehr als 15 Jahre Erfahrung bei Google, Spotify, Airbnb und Amazon. Er stellt sicher, dass Ihre Produktentscheidungen auf Beweisen basieren, nicht auf Annahmen.",
            howToUse: "Starten Sie das Gesprach mit Adrien. Er ist allergisch gegen Bestatigungsfehler und spurt sie systematisch auf. Wenn eine Hypothese schwach ist, wird er es Ihnen klar sagen.",
            methodology: [
                { title: "Kontext", desc: "Das Produkt und seine Herausforderungen verstehen", time: "5-8 min" },
                { title: "Forschungsziele", desc: "Definieren, was wir lernen wollen", time: "5-8 min" },
                { title: "Methodik", desc: "Die Forschungsmethoden wahlen", time: "5-8 min" },
                { title: "Teilnehmer", desc: "Das Forschungspanel definieren", time: "3-5 min" },
                { title: "Ergebnisse", desc: "Erkenntnisse analysieren und synthetisieren", time: "10-15 min" },
                { title: "Review und Finalisierung", desc: "Das finale Dokument erstellen", time: "5 min" }
            ]
        },
        12: {
            agentName: "Staff API Architect",
            document: "API Specification",
            shortDesc: "Definiert prazise, wie Systeme und Dienste miteinander kommunizieren.",
            whatFor: "Die API Specification ist der Vertrag, der definiert, wie Ihre Systeme kommunizieren. Sie beeinflusst direkt die Developer Experience (DX) und die Wartbarkeit.",
            whyUse: "Pauline hat APIs fur Millionen von Entwicklern bei Stripe, Google, Twilio und Zalando entworfen. Perfektionistin, aber pragmatisch.",
            howToUse: "Starten Sie das Gesprach mit Pauline. Sie denkt immer an Edge Cases und Fehlerszenarien VOR den Nominalfallen. Ein schlecht benannter Endpoint verursacht ihr korperliche Schmerzen.",
            methodology: [
                { title: "Systemkontext", desc: "Die Gesamtarchitektur verstehen", time: "5-8 min" },
                { title: "Ressourcen und Modell", desc: "Entitaten und Beziehungen definieren", time: "8-10 min" },
                { title: "Endpoint-Design", desc: "Jeden Endpoint entwerfen", time: "10-15 min" },
                { title: "Sicherheit und Authentifizierung", desc: "Zugriffsmechanismen definieren", time: "5-8 min" },
                { title: "Betriebsfahigkeit und Evolution", desc: "Versionierung, Deprecation, Monitoring", time: "5-8 min" },
                { title: "Review und Finalisierung", desc: "Die finale API-Spezifikation erstellen", time: "5 min" }
            ]
        },
        13: {
            agentName: "Principal Data Architect",
            document: "Data Specification",
            shortDesc: "Strukturiert die Datenmodelle und ihre logische Organisation.",
            whatFor: "Die Data Specification ist der Masterplan fur die Organisation Ihrer Daten. Sie ist die gemeinsame Referenz zwischen den Dev-, Data- und Compliance-Teams.",
            whyUse: "Julien hat Datenmodelle entworfen, die Milliarden von Transaktionen bei Amazon, Spotify, Netflix und Airbnb unterstutzen. Er denkt immer an die Evolution.",
            howToUse: "Starten Sie das Gesprach mit Julien und beschreiben Sie Ihren Geschaftsbereich. Er unterscheidet klar zwischen logischem und physischem Modell. Wachsam bei DSGVO-Fragen.",
            methodology: [
                { title: "Geschaftsbereich", desc: "Den Bereich und die Bounded Contexts verstehen", time: "8-10 min" },
                { title: "Entitaten und Bounded Contexts", desc: "Die Hauptentitaten identifizieren", time: "8-10 min" },
                { title: "Attribute und Beziehungen", desc: "Jede Entitat und ihre Verbindungen detaillieren", time: "10-15 min" },
                { title: "Technische Strategie", desc: "Indexierung, Partitionierung, Caching", time: "5-8 min" },
                { title: "Konformitat und Governance", desc: "DSGVO, Klassifizierung, Aufbewahrung", time: "5-8 min" },
                { title: "Migration und Evolution", desc: "Die Schema-Evolution planen", time: "5 min" }
            ]
        },
        14: {
            agentName: "Principal Security Engineer",
            document: "Security Review Document",
            shortDesc: "Analysiert die Sicherheitsrisiken und die zu implementierenden Schutzmassnahmen.",
            whatFor: "Das Security Review Document analysiert die Sicherheitslage Ihres Systems: zu schutzende Assets, Bedrohungen, Schutzmassnahmen, Verfahren zur Reaktion auf Vorfalle.",
            whyUse: "Yassine praktiziert permanent das 'Assume Breach'-Prinzip. Pragmatisch: Perfekte Sicherheit gibt es nicht, aber intelligentes Risikomanagement schon. Erfahrung bei Google, Netflix, Microsoft und Stripe.",
            howToUse: "Starten Sie das Gesprach mit Yassine. 'Das sehen wir spater' ist sein Feind Nummer eins. Er denkt wie ein Angreifer, um besser zu verteidigen.",
            methodology: [
                { title: "System kartieren", desc: "Alle Komponenten und Datenflusse identifizieren", time: "8-10 min" },
                { title: "Daten klassifizieren", desc: "Die Sensibilitat jedes Typs bewerten", time: "5-8 min" },
                { title: "Bedrohungen modellieren", desc: "STRIDE/OWASP anwenden", time: "10-15 min" },
                { title: "Kontrollen bewerten", desc: "Bestehende Abwehrmechanismen analysieren", time: "5-8 min" },
                { title: "Empfehlungen definieren", desc: "Sicherheitsmassnahmen priorisieren", time: "8-10 min" },
                { title: "Konformitat und Validierung", desc: "Anwendbare Standards uberprufen", time: "5 min" }
            ]
        },
        15: {
            agentName: "Staff SRE",
            document: "Performance Plan",
            shortDesc: "Definiert, wie das Produkt Last, Skalierbarkeit und Optimierung bewaltigen soll.",
            whatFor: "Der Performance Plan antizipiert die Herausforderungen bei der Lastbewaltigung und plant die Skalierbarkeit mit messbaren Zielen.",
            whyUse: "Thomas ist von Zahlen besessen. Er unterscheidet immer zwischen Latenz, Throughput und Kapazitat. Er hat Systeme betrieben, die Milliarden von Anfragen bei Google, Netflix, Amazon und Cloudflare bedienen.",
            howToUse: "Starten Sie das Gesprach mit Thomas. Kein 'Das wird schon passen': Er will Benchmarks, P99-Werte und SLOs.",
            methodology: [
                { title: "System und Herausforderungen", desc: "Die Architektur und Risiken verstehen", time: "5-8 min" },
                { title: "Performance-Ziele", desc: "SLOs, SLIs, SLAs definieren", time: "8-10 min" },
                { title: "Aktuelle Kapazitat", desc: "Engpasse identifizieren", time: "8-10 min" },
                { title: "Lastprognosen", desc: "Das Wachstum antizipieren", time: "5-8 min" },
                { title: "Skalierbarkeitsstrategie", desc: "Horizontal, vertikal, Cache, CDN", time: "8-10 min" },
                { title: "Tests und Monitoring", desc: "Lasttests und Alarme definieren", time: "5-8 min" }
            ]
        },
        16: {
            agentName: "VP of Growth / Head of GTM",
            document: "Go-To-Market Plan",
            shortDesc: "Beschreibt die Einfuhrungs- und Markterschliessungsstrategie.",
            whatFor: "Der GTM Plan definiert, wer Ihre Kunden sind, wie Sie sie erreichen, zu welchem Preis, uber welche Kanale und mit welchem Zeitplan.",
            whyUse: "Jade denkt in Systemen: Jeder Kanal, jede Botschaft und jede Metrik ist miteinander verbunden. Erfahrung bei Spotify, HubSpot, Slack, Notion und Amazon.",
            howToUse: "Starten Sie das Gesprach mit Jade. Sie ist allergisch gegen 'Spray and Pray': uberall verteilen ohne Strategie. Sie besteht auf dem 'Wer' vor dem 'Was'.",
            methodology: [
                { title: "Produkt und Markt", desc: "Den Kontext und den Markt verstehen", time: "8-10 min" },
                { title: "Zielgruppe und Segmente", desc: "Die prioritaren Kunden identifizieren", time: "8-10 min" },
                { title: "Wertversprechen", desc: "Die Differenzierung artikulieren", time: "5-8 min" },
                { title: "Akquisitionsstrategie", desc: "Kanale und Taktiken wahlen", time: "8-10 min" },
                { title: "Preisgestaltung und Modell", desc: "Die Preispositionierung definieren", time: "5-8 min" },
                { title: "Zeitplan und Metriken", desc: "Den Launch planen und messen", time: "5-8 min" }
            ]
        },
        17: {
            agentName: "Chief Risk Officer",
            document: "Risk Management Document",
            shortDesc: "Identifiziert die wichtigsten Risiken und Strategien zu deren Reduzierung.",
            whatFor: "Das Risk Management Document verwandelt Unsicherheit in handlungsrelevante Informationen. Es schafft eine Kultur des proaktiven Risikomanagements.",
            whyUse: "Hana ist der 'professionelle Pessimist', der Optimisten zum Erfolg verhilft. Sie denkt in Wahrscheinlichkeiten und Auswirkungen, nie in Gewissheiten. Erfahrung bei Amazon, Google, McKinsey.",
            howToUse: "Starten Sie das Gesprach mit Hana. Sie erkundet in 5 Phasen: Kontext, systematische Risikoidentifikation, Bewertung, Behandlungsstrategien und Uberwachung.",
            methodology: [
                { title: "Kontext und Herausforderungen", desc: "Das Projekt und seine Herausforderungen verstehen", time: "5-8 min" },
                { title: "Risiken identifizieren", desc: "Alle Risiken kartieren", time: "10-15 min" },
                { title: "Risiken bewerten", desc: "Wahrscheinlichkeit x Auswirkung fur jedes Risiko", time: "8-10 min" },
                { title: "Behandlungsstrategien", desc: "Definieren, wie jedes Risiko behandelt wird", time: "8-10 min" },
                { title: "Uberwachung strukturieren", desc: "Review-Kadenz und Verantwortliche", time: "5 min" }
            ]
        },
        18: {
            agentName: "Senior Compliance-Experte",
            document: "Compliance Documentation",
            shortDesc: "Stellt sicher, dass das Projekt alle gesetzlichen und regulatorischen Pflichten erfullt.",
            whatFor: "Die Compliance Documentation stellt sicher, dass Ihr Projekt ALLE gesetzlichen und regulatorischen Pflichten erfullt (DSGVO, SOC2, ISO 27001...).",
            whyUse: "Xavier identifiziert Non-Compliance-Risiken BEVOR sie zu Problemen werden. Mehr als 15 Jahre Erfahrung in Compliance-Audits fur SaaS, Fintech und Healthtech.",
            howToUse: "Starten Sie das Gesprach mit Xavier. Kein regulatorischer blinder Fleck darf ihm entgehen. Er denkt in 'Compliance as Code'.",
            methodology: [
                { title: "Rahmung und Kontext", desc: "Den Sektor und die Markte verstehen", time: "5-8 Fragen" },
                { title: "Regulatorische Kartierung", desc: "Alle Regulierungen identifizieren", time: "6-8 Fragen" },
                { title: "Audit des aktuellen Stands", desc: "Die bestehende Konformitat bewerten", time: "8-10 Fragen" },
                { title: "Massnahmenplan", desc: "Korrekturmassnahmen priorisieren", time: "5-7 Fragen" },
                { title: "Validierung und Erstellung", desc: "Das finale Dokument erstellen", time: "Synthese" }
            ]
        },
        19: {
            agentName: "Experte fur Tech-Rechtsprufung",
            document: "Legal Review Document",
            shortDesc: "Analysiert die rechtlichen Auswirkungen im Zusammenhang mit dem Produkt oder der Dienstleistung.",
            whatFor: "Das Legal Review Document analysiert samtliche rechtlichen Auswirkungen: geistiges Eigentum, Vertrage, Konformitat, Risiken.",
            whyUse: "William sucht das optimale Gleichgewicht zwischen Schutz und Business-Agilitat. Jede rechtliche Grauzone muss identifiziert und behandelt werden.",
            howToUse: "Starten Sie das Gesprach mit William. Er stellt die unbequemen Fragen, die niemand horen will, und quantifiziert die Auswirkung jedes rechtlichen Risikos.",
            methodology: [
                { title: "Rahmung und Rechtsstruktur", desc: "Die Einheit und ihre Pflichten verstehen", time: "5-7 Fragen" },
                { title: "Geistiges Eigentum", desc: "Patente, Marken, Code, Daten", time: "5-7 Fragen" },
                { title: "Vertrage und Vereinbarungen", desc: "Alle Vertrage analysieren", time: "5-7 Fragen" },
                { title: "Risiken und Konformitat", desc: "Rechtliche Risiken identifizieren", time: "5-7 Fragen" },
                { title: "Synthese und Empfehlungen", desc: "Rechtliche Massnahmen priorisieren", time: "Synthese" }
            ]
        },
        20: {
            agentName: "Senior Principal Architect",
            document: "Architecture Review Board Document",
            shortDesc: "Validiert und uberwacht Architekturentscheidungen im grossen Massstab.",
            whatFor: "Das ARB-Dokument genehmigt oder lehnt einen wichtigen Architekturvorschlag ab. Eine schlechte Entscheidung kann Millionen an Refactoring-Kosten verursachen.",
            whyUse: "Nadia ist besessen von den '-ilities': Skalierbarkeit, Zuverlassigkeit, Wartbarkeit. Mehr als 20 Jahre Erfahrung bei Google, Amazon, Netflix und Spotify.",
            howToUse: "Starten Sie das Gesprach mit Nadia. Sie verwendet die ATAM-Methode. Sie validiert NIEMALS, ohne zuvor grundlich hinterfragt zu haben.",
            methodology: [
                { title: "Kontext und Business-Treiber", desc: "Die Motivationen fur die Anderung verstehen", time: "4-6 Fragen" },
                { title: "Aktuelle Architektur", desc: "Den Ist-Zustand und seine Grenzen analysieren", time: "4-6 Fragen" },
                { title: "Vorgeschlagene Architektur", desc: "Die Losung im Detail prufen", time: "6-8 Fragen" },
                { title: "Auswirkungsanalyse und Risiken", desc: "Konsequenzen und Risiken bewerten", time: "4-6 Fragen" },
                { title: "Entscheidung und Migrationsplan", desc: "Genehmigen/Ablehnen + Aktionsplan", time: "4-6 Fragen" }
            ]
        },
        21: {
            agentName: "SRE Lead - Incident Management",
            document: "Incident Report",
            shortDesc: "Dokumentiert schwerwiegende Vorfalle und deren Auswirkungen.",
            whatFor: "Der Incident Report dokumentiert einen schwerwiegenden Vorfall: Erkennung, Timeline, Auswirkungen, Behebung und gewonnene Erkenntnisse.",
            whyUse: "Valerie ist ruhig und methodisch unter Druck. Sie verteidigt die 'Blameless'-Kultur. Mehr als 15 Jahre Erfahrung bei Google, Amazon, PagerDuty und Datadog.",
            howToUse: "Starten Sie das Gesprach mit Valerie nach einem Vorfall. Jede Minute der Timeline muss exakt sein, jede Auswirkung quantifiziert.",
            methodology: [
                { title: "Identifikation und Rahmung", desc: "Den Vorfall klassifizieren und seinen Schweregrad bestimmen", time: "4-5 Fragen" },
                { title: "Rekonstruktion der Timeline", desc: "Minute fur Minute, was ist passiert?", time: "6-8 Fragen" },
                { title: "Auswirkungsanalyse", desc: "Die Auswirkungen auf allen Ebenen quantifizieren", time: "4-6 Fragen" },
                { title: "Ursache und Faktoren", desc: "Die tiefere Ursache identifizieren", time: "5-7 Fragen" },
                { title: "Korrekturmassnahmen", desc: "Massnahmen zur Pravention definieren", time: "3-5 Fragen" },
                { title: "Validierung und Erstellung", desc: "Den Incident Report erstellen", time: "Synthese" }
            ]
        },
        22: {
            agentName: "Post-Mortem-Experte",
            document: "Post-Mortem Document",
            shortDesc: "Analysiert die tieferen Ursachen eines Ausfalls oder Vorfalls, um eine Wiederholung zu vermeiden.",
            whatFor: "Das Post-Mortem untersucht systemische Ursachen, organisatorische Faktoren, Prozessfehler und strukturelle Verbesserungen.",
            whyUse: "Cedric lehnt jede individuelle Schuldzuweisung kategorisch ab. Er fragt 'Warum?' wieder und wieder, bis zur wahren Grundursache. Inspiriert von Google, Etsy und Netflix.",
            howToUse: "Starten Sie das Gesprach mit Cedric 24 bis 72 Stunden NACH der Behebung. Im Gegensatz zum Incident Report analysiert das Post-Mortem das 'Warum' in der Tiefe (Methode der 5 Warums).",
            methodology: [
                { title: "Kontext und Setup", desc: "Den Rahmen der Analyse setzen", time: "3-4 Fragen" },
                { title: "Detaillierte Rekonstruktion", desc: "Die Ereignisse im Detail nachvollziehen", time: "5-7 Fragen" },
                { title: "Analyse der Grundursachen", desc: "Methode der 5 Warums", time: "6-8 Fragen" },
                { title: "Erkenntnisse und Resilienz", desc: "Was haben wir gelernt?", time: "5-6 Fragen" },
                { title: "Korrekturmassnahmen", desc: "Wie verhindern wir es in Zukunft?", time: "4-5 Fragen" },
                { title: "Validierung und Erstellung", desc: "Das finale Post-Mortem erstellen", time: "Synthese" }
            ]
        },
        23: {
            agentName: "SRE-Experte - Service Levels",
            document: "SLA Documentation",
            shortDesc: "Definiert die Leistungs- und Verfugbarkeitszusagen des Dienstes.",
            whatFor: "Die SLA Documentation definiert Ihre formellen Zusagen: SLI (Metrik) > SLO (internes Ziel) > SLA (vertragliche Verpflichtung).",
            whyUse: "Benjamin kalibriert ehrliche und haltbare Zusagen, keine unmoglichen Versprechen. Erfahrung bei Google, Amazon AWS, Stripe und Datadog.",
            howToUse: "Starten Sie das Gesprach mit Benjamin. Er lehnt unrealistische SLAs ab: '99,999% Uptime' ohne Monitoring ist ein Nein. Er denkt in Error Budgets.",
            methodology: [
                { title: "Verstandnis des Dienstes", desc: "Den Dienst und seine Kunden verstehen", time: "5-6 Fragen" },
                { title: "Definition der SLIs", desc: "Die Schlusselmetriken identifizieren", time: "5-7 Fragen" },
                { title: "Kalibrierung der SLOs", desc: "Realistische interne Ziele festlegen", time: "4-6 Fragen" },
                { title: "Definition des SLA", desc: "Vertragliche Verpflichtungen und Kompensationen", time: "5-7 Fragen" },
                { title: "Validierung und Erstellung", desc: "Die SLA-Dokumentation erstellen", time: "Synthese" }
            ]
        },
        24: {
            agentName: "Experte fur Tech-Governance",
            document: "Governance Documentation",
            shortDesc: "Strukturiert die internen Regeln fur Kontrolle, Validierung und Projektuberwachung.",
            whatFor: "Die Governance Documentation strukturiert die Regeln fur Kontrolle, Validierung und Uberwachung. Mit 50 oder 200 Personen verlangsamt sich ohne explizite Governance alles.",
            whyUse: "Francois entwirft das Minimum Viable an Governance. Er denkt in Entscheidungsflusse: Jede Entscheidung muss einen klaren Eigentumer haben. Mehr als 20 Jahre Erfahrung.",
            howToUse: "Starten Sie das Gesprach mit Francois. 'Das haben wir schon immer so gemacht' ist sein maximales Alarmsignal. Er lehnt unnotige Burokratie ab.",
            methodology: [
                { title: "Organisationsdiagnose", desc: "Verstehen, wie es heute funktioniert", time: "5-7 Fragen" },
                { title: "Entscheidungsstruktur", desc: "Wer entscheidet was und wie", time: "5-7 Fragen" },
                { title: "Operative Prozesse", desc: "Wie die Arbeit vorankommt", time: "5-7 Fragen" },
                { title: "Kadenz und Rituale", desc: "Die Rhythmen der Organisation definieren", time: "4-5 Fragen" },
                { title: "Reporting und Transparenz", desc: "Wie Informationen fliessen", time: "3-5 Fragen" },
                { title: "Validierung und Erstellung", desc: "Das Governance-Dokument erstellen", time: "Synthese" }
            ]
        }
    },
    it: {
        1: {
            agentName: "Architetto della Visione Strategica",
            document: "Documento di Visione",
            shortDesc: "Definisce perche il progetto esiste e quale ambizione a lungo termine persegue.",
            whatFor: "Il Documento di Visione e la base dell'intero progetto. E il PRIMO documento da produrre. Definisce l'ambizione a 3-5 anni, il \"perche\" fondamentale del progetto, e funge da bussola per tutte le future decisioni strategiche. Senza questo documento, il tuo team non ha una direzione condivisa.",
            whyUse: "Perche un progetto senza una visione chiara e una nave senza timone. Gabriel combina l'esperienza di un Chief Product Officer e di un Chief Strategy Officer. Ti sfidera come un partner strategico: non compila il documento al posto tuo, ti aiuta a scoprire e articolare la TUA visione.",
            howToUse: "Avvia una conversazione con Gabriel cliccando il pulsante verde. Ti guidera attraverso un'intervista strutturata in 6 fasi: prima l'inquadramento del progetto, poi l'esplorazione del \"Perche\", la definizione della tua visione ambiziosa, l'identificazione del pubblico target, i principi guida, e infine il riepilogo finale come documento .md. Rispondi a ogni domanda con il maggior dettaglio possibile. Se la tua risposta e vaga, ti sfidera.",
            methodology: [
                { title: "Accoglienza e inquadramento", desc: "Comprendere il contesto del progetto", time: "1-2 scambi" },
                { title: "Esplorazione del \"Perche\"", desc: "Scavare nel perche fondamentale", time: "2-3 scambi" },
                { title: "Definizione della visione", desc: "Articolare l'ambizione a lungo termine", time: "2-3 scambi" },
                { title: "Pubblico target e proposta di valore", desc: "Identificare gli utenti e il valore unico", time: "2-3 scambi" },
                { title: "Principi guida e criteri di successo", desc: "Definire regole e misure di successo", time: "2-3 scambi" },
                { title: "Riepilogo e produzione", desc: "Generare il documento finale in .md", time: "1-2 scambi" }
            ]
        },
        2: {
            agentName: "Detective dei Problemi",
            document: "Definizione del Problema",
            shortDesc: "Chiarisce con precisione il vero problema che il progetto cerca di risolvere.",
            whatFor: "La Definizione del Problema e il secondo documento della Fase 1. Risponde alla domanda fondamentale: quale problema REALE stai risolvendo? Distingue i sintomi dalle cause profonde. Un problema mal definito porta inevitabilmente a una soluzione sbagliata.",
            whyUse: "Il 42% delle startup fallisce perche risolve un problema che non esiste (CB Insights). Esteban possiede il rigore analitico di un ricercatore del MIT, l'empatia di un designer IDEO e la disciplina di un consulente McKinsey. E scettico per natura.",
            howToUse: "Avvia la conversazione con Esteban e descrivi il tuo progetto. Attenzione: se inizi parlando della tua SOLUZIONE, ti fermera educatamente per riconcentrarsi sul PROBLEMA. Indaga metodicamente in 7 fasi.",
            methodology: [
                { title: "Accoglienza e inquadramento", desc: "Comprendere il contesto iniziale", time: "1-2 scambi" },
                { title: "Identificazione del vero problema", desc: "Distinguere i sintomi dalle cause profonde", time: "3-4 scambi" },
                { title: "Comprensione delle persone coinvolte", desc: "Identificare chi soffre e come", time: "2-3 scambi" },
                { title: "Misurazione dell'impatto", desc: "Quantificare il problema in numeri", time: "2-3 scambi" },
                { title: "Raccolta delle prove", desc: "Raccogliere dati e osservazioni", time: "1-2 scambi" },
                { title: "Definizione del risultato atteso", desc: "Cosa succede se il problema viene risolto?", time: "1-2 scambi" },
                { title: "Riepilogo e produzione", desc: "Generare il documento finale in .md", time: "1-2 scambi" }
            ]
        },
        3: {
            agentName: "Stratega del Business",
            document: "Business Case",
            shortDesc: "Spiega perche il progetto puo essere economicamente o strategicamente sostenibile.",
            whatFor: "Il Business Case e il terzo documento della Fase 1. Risponde alla domanda: questo progetto puo essere economicamente sostenibile?",
            whyUse: "Il 29% delle startup fallisce per mancanza di liquidita (CB Insights). Theo combina il rigore di un analista di Goldman Sachs, la visione di un partner McKinsey e la mentalita di un fondatore Y Combinator. Esige numeri.",
            howToUse: "Avvia la conversazione con Theo. Valuta la tua sostenibilita economica come un investitore benevolo che analizza un pitch. 7 fasi: opportunita di mercato (TAM/SAM/SOM), modello di business, stima dei costi, analisi competitiva, rischi, raccomandazione Go/No-Go.",
            methodology: [
                { title: "Accoglienza e inquadramento", desc: "Comprendere il contesto del progetto", time: "1-2 scambi" },
                { title: "Opportunita di mercato", desc: "Analizzare TAM, SAM, SOM", time: "2-3 scambi" },
                { title: "Modello di business", desc: "Definire come generare ricavi", time: "3-4 scambi" },
                { title: "Stima dei costi", desc: "Calcolare il burn rate e gli investimenti", time: "2-3 scambi" },
                { title: "Analisi competitiva", desc: "Identificare e analizzare i concorrenti", time: "2-3 scambi" },
                { title: "Rischi e raccomandazione", desc: "Valutare i rischi e dare un verdetto Go/No-Go", time: "2-3 scambi" },
                { title: "Riepilogo e produzione", desc: "Generare il Business Case finale", time: "1-2 scambi" }
            ]
        },
        4: {
            agentName: "Stratega MVP & Master dello Scope",
            document: "Obiettivi Iniziali",
            shortDesc: "Determina cosa deve realizzare la prima versione per essere considerata un successo.",
            whatFor: "Gli Obiettivi Iniziali collegano il pensiero strategico all'esecuzione concreta. Definiscono IL minimo che dimostra che il progetto ha valore.",
            whyUse: "Senza obiettivi chiari, lo scope esplode e il progetto non finisce mai. Nathan combina la prioritizzazione dei PM di Spotify, i metodi dei direttori di Google e la mentalita Lean Startup. Il suo mantra: 'Meno ma meglio.'",
            howToUse: "Inizia con Nathan. Agisce come guardiano dello scope. 7 fasi. Se il tuo scope e troppo ampio, RIFIUTERA.",
            methodology: [
                { title: "Accoglienza e inquadramento", desc: "Comprendere il contesto del progetto", time: "1-2 scambi" },
                { title: "Obiettivo principale", desc: "Definire L'obiettivo principale del MVP", time: "2-3 scambi" },
                { title: "Obiettivi secondari", desc: "Identificare gli obiettivi complementari", time: "1-2 scambi" },
                { title: "Scope del MVP", desc: "Delimitare cosa e DENTRO e FUORI", time: "3-4 scambi" },
                { title: "Criteri di successo", desc: "Definire come misurare il successo", time: "2-3 scambi" },
                { title: "Vincoli e ipotesi", desc: "Identificare limiti e ipotesi", time: "2-3 scambi" },
                { title: "Riepilogo e produzione", desc: "Generare il documento finale", time: "1-2 scambi" }
            ]
        },
        5: {
            agentName: "CharterBot",
            document: "Project Charter",
            shortDesc: "Formalizza il progetto definendone il quadro, lo scope, le responsabilita e gli obiettivi.",
            whatFor: "Il Project Charter e il documento fondante. Formalizza l'esistenza, definisce il quadro, lo scope, le responsabilita e gli obiettivi. Protegge dallo scope creep.",
            whyUse: "Senza un charter, nessun mandato ufficiale. I ruoli sono poco chiari, lo scope cambia costantemente. Lea ha piu di 15 anni di esperienza in Google, Amazon, Netflix e Spotify.",
            howToUse: "Inizia con Lea. Fasi strutturate: scoperta, approfondimento, sfida, strutturazione, poi scrittura. Non genera MAI senza TUTTE le domande necessarie.",
            methodology: [
                { title: "Scoperta", desc: "Comprendere il progetto e il suo contesto", time: "5-10 min" },
                { title: "Approfondimento", desc: "Esplorare ogni dimensione in dettaglio", time: "15-20 min" },
                { title: "Sfida", desc: "Identificare incoerenze e punti deboli", time: "10-15 min" },
                { title: "Strutturazione", desc: "Organizzare le informazioni", time: "5-10 min" },
                { title: "Scrittura", desc: "Produrre il documento finale", time: "5 min" }
            ]
        },
        6: {
            agentName: "PRDBot",
            document: "PRD",
            shortDesc: "Dettaglia esattamente cosa deve contenere il prodotto e come deve funzionare.",
            whatFor: "Il PRD dettaglia ogni funzionalita, user story, criteri di accettazione. Senza di esso, ogni sviluppatore interpreta i requisiti in modo diverso.",
            whyUse: "Mathieu e ossessionato dalla chiarezza. Verifica che ogni funzionalita risponda a un bisogno documentato. Esperienza in Google, Amazon, Spotify e Stripe.",
            howToUse: "Inizia con Mathieu. Utilizza i framework RICE, ICE e Kano. Distingue cio che l'utente CHIEDE da cio di cui ha BISOGNO.",
            methodology: [
                { title: "Scoperta del prodotto", desc: "Comprendere il prodotto e il contesto", time: "10-15 min" },
                { title: "Esplorazione degli utenti", desc: "Comprendere le personas e i percorsi", time: "10-15 min" },
                { title: "Definizione delle funzionalita", desc: "Elencare e dettagliare ogni funzionalita", time: "15-20 min" },
                { title: "Sfida del prodotto", desc: "Mettere in discussione e prioritizzare", time: "10-15 min" },
                { title: "Strutturazione e scrittura", desc: "Produrre il PRD finale", time: "10 min" }
            ]
        },
        7: {
            agentName: "RoadmapBot",
            document: "Roadmap",
            shortDesc: "Organizza le principali fasi di sviluppo nel tempo.",
            whatFor: "La Roadmap organizza le fasi principali, definisce le milestone chiave e comunica la direzione a tutti gli stakeholder.",
            whyUse: "Sarah ragiona in termini di risultati, non di output. Distingue l'impegno dall'aspirazione. Esperienza in Spotify, Google e Basecamp.",
            howToUse: "Inizia con Sarah. Detesta le roadmap con date precise per ogni funzionalita: 'Una roadmap non e un diagramma di Gantt.'",
            methodology: [
                { title: "Visione e strategia", desc: "Chiarire la direzione e gli obiettivi", time: "10-15 min" },
                { title: "Temi e iniziative", desc: "Identificare i principali filoni di lavoro", time: "15-20 min" },
                { title: "Prioritizzazione e sequenziamento", desc: "Ordinare per impatto e fattibilita", time: "10-15 min" },
                { title: "Sfida e stress-test", desc: "Testare la solidita del piano", time: "10-15 min" },
                { title: "Strutturazione e scrittura", desc: "Produrre la roadmap finale", time: "10 min" }
            ]
        },
        8: {
            agentName: "TechSpecBot",
            document: "Specifica Tecnica",
            shortDesc: "Descrive l'architettura tecnica e le scelte implementative.",
            whatFor: "La Specifica Tecnica descrive l'architettura del sistema e le scelte tecnologiche. Senza di essa, ogni sviluppatore prende decisioni tecniche locali senza una visione globale.",
            whyUse: "Una decisione tecnica senza giustificazione rende Gaetan nervoso. Insiste sui trade-off. Esperienza in Google, Stripe, Netflix e Amazon.",
            howToUse: "Inizia con Gaetan. Esige che ogni scelta tecnica sia giustificata con pro, contro e alternative. Pensa sempre a scalabilita, manutenibilita e sicurezza.",
            methodology: [
                { title: "Comprensione del contesto", desc: "Comprendere il business e i vincoli", time: "10 min" },
                { title: "Esplorazione dell'architettura", desc: "Definire i componenti e i flussi", time: "15-20 min" },
                { title: "Requisiti trasversali", desc: "Sicurezza, prestazioni, manutenibilita", time: "10-15 min" },
                { title: "Sfida tecnica", desc: "Mettere in discussione ogni scelta", time: "15-20 min" },
                { title: "Strutturazione e scrittura", desc: "Produrre la specifica tecnica", time: "10 min" }
            ]
        },
        9: {
            agentName: "DecisionBot",
            document: "Registro delle Decisioni",
            shortDesc: "Archivia le decisioni importanti e le ragioni che le hanno motivate.",
            whatFor: "Il Registro delle Decisioni e la memoria del tuo progetto. Senza di esso, le decisioni vengono costantemente rimesse in discussione.",
            whyUse: "Per Karim, una decisione non documentata e una decisione che non esiste. Sostenitore del principio 'disagree and commit' di Amazon. Esperienza in Amazon, Atlassian, Netflix e Google.",
            howToUse: "Inizia con Karim. Anticipa le domande che qualcuno si porra tra 6 mesi leggendo il registro.",
            methodology: [
                { title: "Inventario delle decisioni", desc: "Identificare le decisioni da documentare", time: "10-15 min" },
                { title: "Approfondimento", desc: "Esplorare contesto, alternative, conseguenze", time: "20-30 min" },
                { title: "Sfida", desc: "Verificare la coerenza complessiva", time: "10-15 min" },
                { title: "Classificazione e strutturazione", desc: "Organizzare per categoria e priorita", time: "5-10 min" },
                { title: "Scrittura", desc: "Produrre il Registro delle Decisioni finale", time: "10 min" }
            ]
        },
        10: {
            agentName: "MetricsBot",
            document: "Documento OKR / Metriche",
            shortDesc: "Definisce obiettivi misurabili per valutare le prestazioni del progetto.",
            whatFor: "Il documento OKR / Metriche definisce come misurare se il tuo progetto ha successo o fallisce. Senza metriche, navighi alla cieca.",
            whyUse: "Fanny sfida le vanity metrics: 'Le visualizzazioni di pagina sono aumentate del 30%. E allora?' Distingue le metriche di input da quelle di output. Esperienza OKR in Google, Spotify e Amazon.",
            howToUse: "Inizia con Fanny. Parte dalla North Star Metric, poi gli Obiettivi, i Key Results misurabili con baseline e target. Verifica che i tuoi OKR non siano compiti mascherati.",
            methodology: [
                { title: "North Star e visione", desc: "Definire LA metrica di successo definitiva", time: "10 min" },
                { title: "Definizione degli Obiettivi", desc: "Formulare obiettivi qualitativi", time: "10-15 min" },
                { title: "Definizione dei Key Results", desc: "Creare risultati misurabili", time: "15-20 min" },
                { title: "Sfida", desc: "Testare la solidita degli OKR", time: "10-15 min" },
                { title: "Dashboard e cadenza", desc: "Definire il monitoraggio e le revisioni", time: "10 min" },
                { title: "Strutturazione e scrittura", desc: "Produrre il documento finale", time: "10 min" }
            ]
        },
        11: {
            agentName: "Lead UX Researcher",
            document: "Documento di Ricerca UX",
            shortDesc: "Documenta la ricerca sugli utenti e gli insight che guidano l'esperienza prodotto.",
            whatFor: "Il Documento di Ricerca UX raccoglie gli apprendimenti dalla ricerca sugli utenti. E la fonte di verita per comprendere i veri problemi degli utenti.",
            whyUse: "Adrien ha piu di 15 anni di esperienza in Google, Spotify, Airbnb e Amazon. Garantisce che le decisioni sul prodotto siano basate su prove, non su supposizioni.",
            howToUse: "Inizia con Adrien. E allergico al bias di conferma e lo cerca sistematicamente. Se un'ipotesi e debole, te lo dira chiaramente.",
            methodology: [
                { title: "Contesto", desc: "Comprendere il prodotto e le sue sfide", time: "5-8 min" },
                { title: "Obiettivi di ricerca", desc: "Definire cosa vogliamo imparare", time: "5-8 min" },
                { title: "Metodologia", desc: "Scegliere i metodi di ricerca", time: "5-8 min" },
                { title: "Partecipanti", desc: "Definire il panel di ricerca", time: "3-5 min" },
                { title: "Risultati", desc: "Analizzare e sintetizzare gli insight", time: "10-15 min" },
                { title: "Revisione e finalizzazione", desc: "Produrre il documento finale", time: "5 min" }
            ]
        },
        12: {
            agentName: "Staff API Architect",
            document: "Specifica API",
            shortDesc: "Definisce con precisione come i sistemi e i servizi comunicano tra loro.",
            whatFor: "La Specifica API e il contratto che definisce come i tuoi sistemi comunicano. Ha un impatto diretto sulla developer experience (DX) e sulla manutenibilita.",
            whyUse: "Pauline ha progettato API per milioni di sviluppatori in Stripe, Google, Twilio e Zalando. Perfezionista ma pragmatica.",
            howToUse: "Inizia con Pauline. Pensa sempre ai casi limite e agli scenari di errore PRIMA dei casi nominali. Un endpoint mal nominato le causa dolore fisico.",
            methodology: [
                { title: "Contesto del sistema", desc: "Comprendere l'architettura complessiva", time: "5-8 min" },
                { title: "Risorse e modello", desc: "Definire entita e relazioni", time: "8-10 min" },
                { title: "Progettazione degli endpoint", desc: "Progettare ogni endpoint", time: "10-15 min" },
                { title: "Sicurezza e autenticazione", desc: "Definire i meccanismi di accesso", time: "5-8 min" },
                { title: "Operabilita ed evoluzione", desc: "Versionamento, deprecazione, monitoraggio", time: "5-8 min" },
                { title: "Revisione e finalizzazione", desc: "Produrre la specifica API finale", time: "5 min" }
            ]
        },
        13: {
            agentName: "Principal Data Architect",
            document: "Specifica Dati",
            shortDesc: "Struttura i modelli di dati e la loro organizzazione logica.",
            whatFor: "La Specifica Dati e il piano generale per l'organizzazione dei tuoi dati. E il riferimento comune tra i team di sviluppo, dati e conformita.",
            whyUse: "Julien ha progettato modelli di dati che supportano miliardi di transazioni in Amazon, Spotify, Netflix e Airbnb. Pensa sempre all'evoluzione.",
            howToUse: "Inizia con Julien. Fa una distinzione chiara tra modello logico e fisico. Vigile sulle questioni GDPR.",
            methodology: [
                { title: "Dominio di business", desc: "Comprendere il dominio e i bounded context", time: "8-10 min" },
                { title: "Entita e bounded context", desc: "Identificare le entita principali", time: "8-10 min" },
                { title: "Attributi e relazioni", desc: "Dettagliare ogni entita e i suoi legami", time: "10-15 min" },
                { title: "Strategia tecnica", desc: "Indicizzazione, partizionamento, caching", time: "5-8 min" },
                { title: "Conformita e governance", desc: "GDPR, classificazione, conservazione", time: "5-8 min" },
                { title: "Migrazione ed evoluzione", desc: "Pianificare l'evoluzione dello schema", time: "5 min" }
            ]
        },
        14: {
            agentName: "Principal Security Engineer",
            document: "Documento di Revisione della Sicurezza",
            shortDesc: "Analizza i rischi di sicurezza e le misure di protezione da implementare.",
            whatFor: "Il Documento di Revisione della Sicurezza analizza la postura di sicurezza del tuo sistema: risorse da proteggere, minacce, misure di protezione, procedure di risposta agli incidenti.",
            whyUse: "Yassine pratica l'\"assume breach\" in permanenza. Pragmatico: la sicurezza perfetta non esiste, ma una gestione intelligente del rischio si. Esperienza in Google, Netflix, Microsoft e Stripe.",
            howToUse: "Inizia con Yassine. 'Vedremo dopo' e la sua frase nemica numero uno. Pensa come un attaccante per difendere meglio.",
            methodology: [
                { title: "Mappatura del sistema", desc: "Identificare tutti i componenti e i flussi", time: "8-10 min" },
                { title: "Classificazione dei dati", desc: "Valutare la sensibilita di ogni tipo", time: "5-8 min" },
                { title: "Modellazione delle minacce", desc: "Applicare STRIDE/OWASP", time: "10-15 min" },
                { title: "Valutazione dei controlli", desc: "Analizzare le difese esistenti", time: "5-8 min" },
                { title: "Definizione delle raccomandazioni", desc: "Prioritizzare le azioni di sicurezza", time: "8-10 min" },
                { title: "Conformita e validazione", desc: "Verificare gli standard applicabili", time: "5 min" }
            ]
        },
        15: {
            agentName: "Staff SRE",
            document: "Piano delle Prestazioni",
            shortDesc: "Definisce come il prodotto deve gestire il carico, la scalabilita e l'ottimizzazione.",
            whatFor: "Il Piano delle Prestazioni anticipa le sfide di carico e pianifica la scalabilita con obiettivi misurabili.",
            whyUse: "Thomas e ossessionato dai numeri. Distingue sempre latenza, throughput e capacita. Ha gestito sistemi che servono miliardi di richieste in Google, Netflix, Amazon e Cloudflare.",
            howToUse: "Inizia con Thomas. Niente 'dovrebbe andare bene': vuole benchmark, P99 e SLO.",
            methodology: [
                { title: "Sistema e posta in gioco", desc: "Comprendere l'architettura e i rischi", time: "5-8 min" },
                { title: "Obiettivi di prestazione", desc: "Definire SLO, SLI, SLA", time: "8-10 min" },
                { title: "Capacita attuale", desc: "Identificare i colli di bottiglia", time: "8-10 min" },
                { title: "Proiezioni di carico", desc: "Anticipare la crescita", time: "5-8 min" },
                { title: "Strategia di scalabilita", desc: "Orizzontale, verticale, cache, CDN", time: "8-10 min" },
                { title: "Test e monitoraggio", desc: "Definire test di carico e allarmi", time: "5-8 min" }
            ]
        },
        16: {
            agentName: "VP of Growth / Head of GTM",
            document: "Piano Go-To-Market",
            shortDesc: "Descrive la strategia di lancio e di ingresso sul mercato.",
            whatFor: "Il Piano GTM definisce chi sono i tuoi clienti, come raggiungerli, a quale prezzo, attraverso quali canali e con quale calendario.",
            whyUse: "Jade ragiona in sistemi: ogni canale, messaggio e metrica e interconnesso. Esperienza in Spotify, HubSpot, Slack, Notion e Amazon.",
            howToUse: "Inizia con Jade. E allergica allo 'spray and pray'. Insiste sul 'chi' prima del 'cosa'.",
            methodology: [
                { title: "Prodotto e mercato", desc: "Comprendere il contesto e il mercato", time: "8-10 min" },
                { title: "Pubblico target e segmenti", desc: "Identificare i clienti prioritari", time: "8-10 min" },
                { title: "Proposta di valore", desc: "Articolare la differenziazione", time: "5-8 min" },
                { title: "Strategia di acquisizione", desc: "Scegliere canali e tattiche", time: "8-10 min" },
                { title: "Prezzo e modello", desc: "Definire il posizionamento di prezzo", time: "5-8 min" },
                { title: "Calendario e metriche", desc: "Pianificare il lancio e misurare", time: "5-8 min" }
            ]
        },
        17: {
            agentName: "Chief Risk Officer",
            document: "Documento di Gestione dei Rischi",
            shortDesc: "Identifica i rischi principali e le strategie per mitigarli.",
            whatFor: "Il Documento di Gestione dei Rischi trasforma l'incertezza in informazione utilizzabile. Crea una cultura proattiva di gestione del rischio.",
            whyUse: "Hana e la 'pessimista professionista' che aiuta gli ottimisti a riuscire. Ragiona in probabilita e impatti, mai in certezze. Esperienza in Amazon, Google, McKinsey.",
            howToUse: "Inizia con Hana. Esplora in 5 fasi: contesto, identificazione sistematica dei rischi, valutazione, strategie di trattamento e monitoraggio.",
            methodology: [
                { title: "Contesto e posta in gioco", desc: "Comprendere il progetto e la sua posta in gioco", time: "5-8 min" },
                { title: "Identificare i rischi", desc: "Mappare tutti i rischi", time: "10-15 min" },
                { title: "Valutare i rischi", desc: "Probabilita x Impatto per ciascuno", time: "8-10 min" },
                { title: "Strategie di trattamento", desc: "Definire come trattare ogni rischio", time: "8-10 min" },
                { title: "Strutturare il monitoraggio", desc: "Cadenza delle revisioni e responsabili", time: "5 min" }
            ]
        },
        18: {
            agentName: "Senior Compliance Expert",
            document: "Documentazione di Conformita",
            shortDesc: "Assicura che il progetto rispetti gli obblighi legali e normativi.",
            whatFor: "La Documentazione di Conformita garantisce che il tuo progetto rispetti TUTTI gli obblighi legali e normativi (GDPR, SOC2, ISO 27001...).",
            whyUse: "Xavier identifica i rischi di non conformita PRIMA che diventino problemi. Piu di 15 anni nell'audit di conformita per SaaS, fintech, healthtech.",
            howToUse: "Inizia con Xavier. Nessun punto cieco normativo deve sfuggirgli. Ragiona in 'compliance as code'.",
            methodology: [
                { title: "Inquadramento e contesto", desc: "Comprendere il settore e i mercati", time: "5-8 domande" },
                { title: "Mappatura normativa", desc: "Identificare tutte le normative", time: "6-8 domande" },
                { title: "Audit dello stato attuale", desc: "Valutare la conformita esistente", time: "8-10 domande" },
                { title: "Piano di rimedio", desc: "Prioritizzare le azioni correttive", time: "5-7 domande" },
                { title: "Validazione e generazione", desc: "Produrre il documento finale", time: "Riepilogo" }
            ]
        },
        19: {
            agentName: "Tech Legal Review Expert",
            document: "Documento di Revisione Legale",
            shortDesc: "Analizza le implicazioni legali relative al prodotto o servizio.",
            whatFor: "Il Documento di Revisione Legale analizza tutte le implicazioni legali: proprieta intellettuale, contratti, conformita, rischi.",
            whyUse: "William cerca l'equilibrio ottimale tra protezione e agilita commerciale. Ogni zona grigia legale deve essere identificata e trattata.",
            howToUse: "Inizia con William. Fa domande scomode che nessuno vuole sentire e quantifica l'impatto di ogni rischio legale.",
            methodology: [
                { title: "Inquadramento legale e struttura", desc: "Comprendere l'entita e i suoi obblighi", time: "5-7 domande" },
                { title: "Proprieta intellettuale", desc: "Brevetti, marchi, codice, dati", time: "5-7 domande" },
                { title: "Contratti e accordi", desc: "Analizzare tutti i contratti", time: "5-7 domande" },
                { title: "Rischi e conformita", desc: "Identificare i rischi legali", time: "5-7 domande" },
                { title: "Riepilogo e raccomandazioni", desc: "Prioritizzare le azioni legali", time: "Riepilogo" }
            ]
        },
        20: {
            agentName: "Senior Principal Architect",
            document: "Documento dell'Architecture Review Board",
            shortDesc: "Valida e supervisiona le scelte architetturali su larga scala.",
            whatFor: "Il documento ARB valida o respinge una proposta architetturale importante. Una scelta sbagliata puo costare milioni in refactoring.",
            whyUse: "Nadia e ossessionata dalle '-ilities': scalabilita, affidabilita, manutenibilita. Piu di 20 anni di esperienza in Google, Amazon, Netflix e Spotify.",
            howToUse: "Inizia con Nadia. Utilizza il metodo ATAM. Non valida MAI senza aver messo in discussione in profondita.",
            methodology: [
                { title: "Contesto e driver di business", desc: "Comprendere le motivazioni del cambiamento", time: "4-6 domande" },
                { title: "Architettura attuale", desc: "Analizzare il sistema esistente e i suoi limiti", time: "4-6 domande" },
                { title: "Architettura proposta", desc: "Esaminare la soluzione in dettaglio", time: "6-8 domande" },
                { title: "Analisi dell'impatto e rischi", desc: "Valutare conseguenze e rischi", time: "4-6 domande" },
                { title: "Decisione e piano di migrazione", desc: "Approvare/respingere + piano d'azione", time: "4-6 domande" }
            ]
        },
        21: {
            agentName: "SRE Lead - Gestione Incidenti",
            document: "Rapporto di Incidente",
            shortDesc: "Documenta gli incidenti gravi e i loro impatti.",
            whatFor: "Il Rapporto di Incidente documenta un incidente grave: rilevamento, cronologia, impatto, risoluzione e lezioni apprese.",
            whyUse: "Valerie e calma e metodica sotto pressione. Promuove la cultura blameless. Piu di 15 anni di esperienza in Google, Amazon, PagerDuty e Datadog.",
            howToUse: "Inizia con Valerie dopo un incidente. Ogni minuto della cronologia deve essere esatto, ogni impatto quantificato.",
            methodology: [
                { title: "Identificazione e inquadramento", desc: "Classificare l'incidente e la sua gravita", time: "4-5 domande" },
                { title: "Ricostruzione della cronologia", desc: "Minuto per minuto, cosa e successo?", time: "6-8 domande" },
                { title: "Analisi dell'impatto", desc: "Quantificare l'impatto su tutte le dimensioni", time: "4-6 domande" },
                { title: "Causa radice e fattori", desc: "Identificare la causa profonda", time: "5-7 domande" },
                { title: "Azioni correttive", desc: "Definire le azioni preventive", time: "3-5 domande" },
                { title: "Validazione e generazione", desc: "Produrre il rapporto di incidente", time: "Riepilogo" }
            ]
        },
        22: {
            agentName: "Esperto Post-Mortem",
            document: "Documento Post-Mortem",
            shortDesc: "Analizza le cause profonde di un guasto o incidente per prevenirne il ripetersi.",
            whatFor: "Il Post-Mortem esplora le cause sistemiche, i fattori organizzativi, i fallimenti di processo e i miglioramenti strutturali.",
            whyUse: "Cedric rifiuta categoricamente ogni colpa individuale. Chiede 'perche?' ancora e ancora fino alla vera causa radice. Ispirato da Google, Etsy e Netflix.",
            howToUse: "Inizia con Cedric da 24 a 72 ore DOPO la risoluzione. A differenza del Rapporto di Incidente, il post-mortem analizza il 'perche' in profondita (metodo dei 5 Perche).",
            methodology: [
                { title: "Contesto e preparazione", desc: "Stabilire il quadro di analisi", time: "3-4 domande" },
                { title: "Ricostruzione dettagliata", desc: "Ripercorrere gli eventi in dettaglio", time: "5-7 domande" },
                { title: "Analisi della causa radice", desc: "Metodo dei 5 Perche", time: "6-8 domande" },
                { title: "Apprendimenti e resilienza", desc: "Cosa abbiamo imparato?", time: "5-6 domande" },
                { title: "Azioni correttive", desc: "Come prevenire in futuro?", time: "4-5 domande" },
                { title: "Validazione e generazione", desc: "Produrre il post-mortem finale", time: "Riepilogo" }
            ]
        },
        23: {
            agentName: "Esperto SRE - Livelli di Servizio",
            document: "Documentazione SLA",
            shortDesc: "Definisce gli impegni di prestazione e disponibilita del servizio.",
            whatFor: "La Documentazione SLA definisce i tuoi impegni formali: SLI (metrica) > SLO (obiettivo interno) > SLA (impegno contrattuale).",
            whyUse: "Benjamin calibra impegni onesti e sostenibili, non promesse impossibili. Esperienza in Google, Amazon AWS, Stripe e Datadog.",
            howToUse: "Inizia con Benjamin. Rifiuta gli SLA irrealistici: '99,999% di uptime' senza monitoraggio, e un no. Ragiona in termini di error budget.",
            methodology: [
                { title: "Comprensione del servizio", desc: "Comprendere il servizio e i suoi clienti", time: "5-6 domande" },
                { title: "Definizione degli SLI", desc: "Identificare le metriche chiave", time: "5-7 domande" },
                { title: "Calibrazione degli SLO", desc: "Stabilire obiettivi interni realistici", time: "4-6 domande" },
                { title: "Definizione dello SLA", desc: "Impegni contrattuali e compensazioni", time: "5-7 domande" },
                { title: "Validazione e generazione", desc: "Produrre la documentazione SLA", time: "Riepilogo" }
            ]
        },
        24: {
            agentName: "Esperto di Governance Tecnologica",
            document: "Documentazione di Governance",
            shortDesc: "Struttura le regole interne per il controllo, la validazione e la supervisione del progetto.",
            whatFor: "La Documentazione di Governance struttura le regole per il controllo, la validazione e la supervisione. A 50 o 200 persone, senza una governance esplicita, tutto rallenta.",
            whyUse: "Francois progetta la governance minima necessaria. Ragiona in flussi decisionali: ogni decisione deve avere un responsabile chiaro. Piu di 20 anni di esperienza.",
            howToUse: "Inizia con Francois. 'Abbiamo sempre fatto cosi' e la sua frase di massima allerta. Rifiuta la burocrazia inutile.",
            methodology: [
                { title: "Diagnosi organizzativa", desc: "Comprendere come funzionano le cose oggi", time: "5-7 domande" },
                { title: "Struttura decisionale", desc: "Chi decide cosa e come", time: "5-7 domande" },
                { title: "Processi operativi", desc: "Come progredisce il lavoro", time: "5-7 domande" },
                { title: "Cadenza e rituali", desc: "Definire i ritmi organizzativi", time: "4-5 domande" },
                { title: "Reporting e trasparenza", desc: "Come circola l'informazione", time: "3-5 domande" },
                { title: "Validazione e generazione", desc: "Produrre il documento di governance", time: "Riepilogo" }
            ]
        }
    },
    es: {
        1: {
            agentName: "Arquitecto de Vision Estrategica",
            document: "Documento de Vision",
            shortDesc: "Define por que existe el proyecto y que ambicion a largo plazo persigue.",
            whatFor: "El Documento de Vision es la base de todo su proyecto. Es el PRIMER documento a producir. Define la ambicion a 3-5 anos, el \"por que\" fundamental del proyecto, y sirve como brujula para todas las decisiones estrategicas futuras. Sin este documento, su equipo no tiene una direccion compartida.",
            whyUse: "Porque un proyecto sin una vision clara es un barco sin timon. Gabriel combina la experiencia de un Chief Product Officer y un Chief Strategy Officer. Le desafiara como un sparring estrategico: no rellena el documento por usted, le ayuda a descubrir y articular SU propia vision.",
            howToUse: "Inicie la conversacion con Gabriel haciendo clic en el boton verde. Le guiara a traves de una entrevista estructurada en 6 fases: primero el encuadre de su proyecto, luego la exploracion del \"Por que\", la definicion de su vision ambiciosa, la identificacion de su publico objetivo, los principios rectores, y finalmente el resumen final como documento .md. Responda a cada pregunta con el mayor detalle posible. Si su respuesta es vaga, le desafiara.",
            methodology: [
                { title: "Bienvenida y encuadre", desc: "Comprender el contexto del proyecto", time: "1-2 intercambios" },
                { title: "Exploracion del \"Por que\"", desc: "Profundizar en el por que fundamental", time: "2-3 intercambios" },
                { title: "Definicion de la vision", desc: "Articular la ambicion a largo plazo", time: "2-3 intercambios" },
                { title: "Publico objetivo y propuesta de valor", desc: "Identificar usuarios y valor unico", time: "2-3 intercambios" },
                { title: "Principios rectores y criterios de exito", desc: "Definir reglas y medidas de exito", time: "2-3 intercambios" },
                { title: "Resumen y produccion", desc: "Generar el documento final en .md", time: "1-2 intercambios" }
            ]
        },
        2: {
            agentName: "Detective de Problemas",
            document: "Declaracion del Problema",
            shortDesc: "Clarifica con precision el problema real que el proyecto intenta resolver.",
            whatFor: "La Declaracion del Problema responde a la pregunta fundamental: que problema REAL esta resolviendo? Distingue los sintomas de las causas raiz.",
            whyUse: "El 42% de las startups fracasan porque resuelven un problema que no existe (CB Insights). Esteban tiene el rigor analitico de un investigador del MIT, la empatia de un disenador de IDEO y la disciplina de un consultor de McKinsey.",
            howToUse: "Inicie la conversacion con Esteban. Advertencia: si empieza con su SOLUCION, le detendra para reenfocarse en el PROBLEMA. Investiga en 7 fases.",
            methodology: [
                { title: "Bienvenida y encuadre", desc: "Comprender el contexto inicial", time: "1-2 intercambios" },
                { title: "Identificacion del problema real", desc: "Distinguir sintomas de causas raiz", time: "3-4 intercambios" },
                { title: "Comprension de las personas afectadas", desc: "Identificar quien sufre y como", time: "2-3 intercambios" },
                { title: "Medicion del impacto", desc: "Cuantificar el problema en cifras", time: "2-3 intercambios" },
                { title: "Recopilacion de evidencias", desc: "Reunir datos y observaciones", time: "1-2 intercambios" },
                { title: "Definicion del resultado esperado", desc: "Que ocurre si se resuelve el problema?", time: "1-2 intercambios" },
                { title: "Resumen y produccion", desc: "Generar el documento final en .md", time: "1-2 intercambios" }
            ]
        },
        3: {
            agentName: "Estratega de Negocio",
            document: "Caso de Negocio",
            shortDesc: "Explica por que el proyecto puede ser economica o estrategicamente viable.",
            whatFor: "El Caso de Negocio responde: puede este proyecto ser economicamente viable? Incluso una vision brillante y un problema real no son suficientes sin un modelo de negocio solido.",
            whyUse: "El 29% de las startups fracasan por falta de liquidez. Theo combina el rigor de un analista de Goldman Sachs, la vision de un socio de McKinsey y la mentalidad de un fundador de Y Combinator. Exige cifras.",
            howToUse: "Inicie la conversacion con Theo. Evalua la viabilidad como un inversor benevolente. 7 fases: oportunidad de mercado (TAM/SAM/SOM), modelo de negocio, estimacion de costes, analisis competitivo, riesgos, recomendacion Go/No-Go.",
            methodology: [
                { title: "Bienvenida y encuadre", desc: "Comprender el contexto del proyecto", time: "1-2 intercambios" },
                { title: "Oportunidad de mercado", desc: "Analizar TAM, SAM, SOM", time: "2-3 intercambios" },
                { title: "Modelo de negocio", desc: "Definir como generar ingresos", time: "3-4 intercambios" },
                { title: "Estimacion de costes", desc: "Calcular burn rate e inversiones", time: "2-3 intercambios" },
                { title: "Analisis competitivo", desc: "Identificar y analizar competidores", time: "2-3 intercambios" },
                { title: "Riesgos y recomendacion", desc: "Evaluar riesgos y dar un veredicto Go/No-Go", time: "2-3 intercambios" },
                { title: "Resumen y produccion", desc: "Generar el Caso de Negocio final", time: "1-2 intercambios" }
            ]
        },
        4: {
            agentName: "Estratega MVP y Maestro del Alcance",
            document: "Objetivos Iniciales",
            shortDesc: "Determina lo que la primera version debe lograr para considerarse exitosa.",
            whatFor: "Los Objetivos Iniciales son el puente entre el pensamiento estrategico y la ejecucion concreta. Define EL minimo que demuestra el valor del proyecto.",
            whyUse: "Sin objetivos claros, el alcance se desborda. Nathan combina la priorizacion de un PM de Spotify, los metodos de un director de Google y la mentalidad Lean Startup. Su mantra: 'Menos pero mejor.'",
            howToUse: "Inicie la conversacion con Nathan. Actua como guardian del alcance. 7 fases. Si su alcance es demasiado grande, RECHAZARA.",
            methodology: [
                { title: "Bienvenida y encuadre", desc: "Comprender el contexto del proyecto", time: "1-2 intercambios" },
                { title: "Objetivo principal", desc: "Definir EL objetivo principal del MVP", time: "2-3 intercambios" },
                { title: "Objetivos secundarios", desc: "Identificar objetivos complementarios", time: "1-2 intercambios" },
                { title: "Alcance del MVP", desc: "Delimitar lo que esta DENTRO y FUERA", time: "3-4 intercambios" },
                { title: "Criterios de exito", desc: "Definir como medir el exito", time: "2-3 intercambios" },
                { title: "Restricciones y supuestos", desc: "Identificar limites y supuestos", time: "2-3 intercambios" },
                { title: "Resumen y produccion", desc: "Generar el documento final", time: "1-2 intercambios" }
            ]
        },
        5: {
            agentName: "CharterBot",
            document: "Acta de Constitucion del Proyecto",
            shortDesc: "Formaliza el proyecto definiendo su marco, alcance, responsabilidades y objetivos.",
            whatFor: "El Acta de Constitucion del Proyecto formaliza su existencia, define el marco, alcance, responsabilidades y objetivos. Protege contra la expansion descontrolada del alcance.",
            whyUse: "Sin un acta de constitucion, no hay mandato oficial. Los roles son confusos, el alcance cambia constantemente. Lea tiene mas de 15 anos de experiencia en Google, Amazon, Netflix y Spotify.",
            howToUse: "Inicie la conversacion con Lea. Fases estructuradas: descubrimiento, profundizacion, desafio, estructuracion, redaccion. NUNCA genera sin TODAS las preguntas necesarias.",
            methodology: [
                { title: "Descubrimiento", desc: "Comprender el proyecto y su contexto", time: "5-10 min" },
                { title: "Profundizacion", desc: "Explorar cada dimension en detalle", time: "15-20 min" },
                { title: "Desafio", desc: "Identificar inconsistencias y debilidades", time: "10-15 min" },
                { title: "Estructuracion", desc: "Organizar la informacion", time: "5-10 min" },
                { title: "Redaccion", desc: "Producir el documento final", time: "5 min" }
            ]
        },
        6: {
            agentName: "PRDBot",
            document: "PRD",
            shortDesc: "Detalla exactamente lo que el producto debe contener y como debe funcionar.",
            whatFor: "El PRD detalla cada funcionalidad, historia de usuario y criterios de aceptacion.",
            whyUse: "Mathieu esta obsesionado con la claridad. Experiencia en Google, Amazon, Spotify y Stripe.",
            howToUse: "Inicie la conversacion con Mathieu. Utiliza los frameworks RICE, ICE y Kano.",
            methodology: [
                { title: "Descubrimiento del producto", desc: "Comprender el producto y su contexto", time: "10-15 min" },
                { title: "Exploracion de usuarios", desc: "Comprender personas y recorridos", time: "10-15 min" },
                { title: "Definicion de funcionalidades", desc: "Listar y detallar cada funcionalidad", time: "15-20 min" },
                { title: "Desafio del producto", desc: "Cuestionar y priorizar", time: "10-15 min" },
                { title: "Estructuracion y redaccion", desc: "Producir el PRD final", time: "10 min" }
            ]
        },
        7: {
            agentName: "RoadmapBot",
            document: "Hoja de Ruta",
            shortDesc: "Organiza las grandes fases de desarrollo a lo largo del tiempo.",
            whatFor: "La Hoja de Ruta organiza las grandes fases y define los hitos clave.",
            whyUse: "Sarah piensa en resultados, no en entregables. Experiencia en Spotify, Google y Basecamp.",
            howToUse: "Inicie la conversacion con Sarah. Detesta las hojas de ruta con fechas precisas: 'Una hoja de ruta no es un diagrama de Gantt.'",
            methodology: [
                { title: "Vision y estrategia", desc: "Clarificar la direccion y los objetivos", time: "10-15 min" },
                { title: "Temas e iniciativas", desc: "Identificar los grandes ejes de trabajo", time: "15-20 min" },
                { title: "Priorizacion y secuenciacion", desc: "Ordenar por impacto y viabilidad", time: "10-15 min" },
                { title: "Desafio y prueba de estres", desc: "Probar la robustez del plan", time: "10-15 min" },
                { title: "Estructuracion y redaccion", desc: "Producir la hoja de ruta final", time: "10 min" }
            ]
        },
        8: {
            agentName: "TechSpecBot",
            document: "Especificacion Tecnica",
            shortDesc: "Describe la arquitectura tecnica y las decisiones de implementacion.",
            whatFor: "La Especificacion Tecnica describe la arquitectura del sistema y las decisiones tecnologicas.",
            whyUse: "Una decision tecnica sin justificacion pone nervioso a Gaetan. Insiste en los trade-offs. Experiencia en Google, Stripe, Netflix y Amazon.",
            howToUse: "Inicie la conversacion con Gaetan. Exige que cada decision tecnica este justificada con pros, contras y alternativas.",
            methodology: [
                { title: "Comprension del contexto", desc: "Comprender el negocio y las restricciones", time: "10 min" },
                { title: "Exploracion de la arquitectura", desc: "Definir componentes y flujos", time: "15-20 min" },
                { title: "Requisitos transversales", desc: "Seguridad, rendimiento, mantenibilidad", time: "10-15 min" },
                { title: "Desafio tecnico", desc: "Cuestionar cada decision", time: "15-20 min" },
                { title: "Estructuracion y redaccion", desc: "Producir la especificacion tecnica", time: "10 min" }
            ]
        },
        9: {
            agentName: "DecisionBot",
            document: "Registro de Decisiones",
            shortDesc: "Archiva las decisiones importantes y el razonamiento detras de ellas.",
            whatFor: "El Registro de Decisiones es la memoria de su proyecto.",
            whyUse: "Para Karim, una decision no documentada no existe. Defensor del 'disagree and commit' de Amazon. Experiencia en Amazon, Atlassian, Netflix y Google.",
            howToUse: "Inicie la conversacion con Karim. Anticipa las preguntas que alguien hara dentro de 6 meses.",
            methodology: [
                { title: "Inventario de decisiones", desc: "Identificar las decisiones a documentar", time: "10-15 min" },
                { title: "Profundizacion", desc: "Explorar contexto, alternativas, consecuencias", time: "20-30 min" },
                { title: "Desafio", desc: "Verificar la coherencia general", time: "10-15 min" },
                { title: "Clasificacion y estructuracion", desc: "Organizar por categoria y prioridad", time: "5-10 min" },
                { title: "Redaccion", desc: "Producir el Registro de Decisiones final", time: "10 min" }
            ]
        },
        10: {
            agentName: "MetricsBot",
            document: "Documento de OKRs / Metricas",
            shortDesc: "Define objetivos medibles para evaluar el rendimiento del proyecto.",
            whatFor: "Define como medir si su proyecto tiene exito o fracasa.",
            whyUse: "Fanny desafia las metricas de vanidad. Distingue las metricas de entrada de las de salida. Experiencia en OKRs en Google, Spotify y Amazon.",
            howToUse: "Inicie la conversacion con Fanny. Primero la Metrica Estrella del Norte, luego los Objetivos, los Resultados Clave con lineas base y metas.",
            methodology: [
                { title: "Estrella del Norte y vision", desc: "Definir LA metrica definitiva de exito", time: "10 min" },
                { title: "Definicion de Objetivos", desc: "Formular objetivos cualitativos", time: "10-15 min" },
                { title: "Definicion de Resultados Clave", desc: "Crear resultados medibles", time: "15-20 min" },
                { title: "Desafio", desc: "Probar la robustez de los OKRs", time: "10-15 min" },
                { title: "Dashboard y cadencia", desc: "Definir seguimiento y revisiones", time: "10 min" },
                { title: "Estructuracion y redaccion", desc: "Producir el documento final", time: "10 min" }
            ]
        },
        11: {
            agentName: "Lead UX Researcher",
            document: "Documento de Investigacion UX",
            shortDesc: "Documenta la investigacion de usuarios y los insights que guian la experiencia del producto.",
            whatFor: "Captura los aprendizajes de la investigacion de usuarios. Fuente de verdad sobre los problemas reales de los usuarios.",
            whyUse: "Adrien tiene mas de 15 anos de experiencia en Google, Spotify, Airbnb y Amazon. Decisiones basadas en evidencias.",
            howToUse: "Inicie la conversacion con Adrien. Alergico al sesgo de confirmacion. Si una hipotesis es debil, se lo dira.",
            methodology: [
                { title: "Contexto", desc: "Comprender el producto y sus desafios", time: "5-8 min" },
                { title: "Objetivos de investigacion", desc: "Definir que queremos aprender", time: "5-8 min" },
                { title: "Metodologia", desc: "Elegir los metodos de investigacion", time: "5-8 min" },
                { title: "Participantes", desc: "Definir el panel de investigacion", time: "3-5 min" },
                { title: "Resultados", desc: "Analizar y sintetizar los insights", time: "10-15 min" },
                { title: "Revision y finalizacion", desc: "Producir el documento final", time: "5 min" }
            ]
        },
        12: {
            agentName: "Staff API Architect",
            document: "Especificacion de API",
            shortDesc: "Define con precision como se comunican los sistemas y servicios.",
            whatFor: "La Especificacion de API es el contrato que define como se comunican sus sistemas. Impacta la experiencia del desarrollador y la mantenibilidad.",
            whyUse: "Pauline ha disenado APIs para millones de desarrolladores en Stripe, Google, Twilio y Zalando. Perfeccionista pero pragmatica.",
            howToUse: "Inicie la conversacion con Pauline. Piensa en los casos limite ANTES que en los casos nominales. Un endpoint mal nombrado le causa dolor fisico.",
            methodology: [
                { title: "Contexto del sistema", desc: "Comprender la arquitectura general", time: "5-8 min" },
                { title: "Recursos y modelo", desc: "Definir entidades y relaciones", time: "8-10 min" },
                { title: "Diseno de endpoints", desc: "Disenar cada endpoint", time: "10-15 min" },
                { title: "Seguridad y autenticacion", desc: "Definir los mecanismos de acceso", time: "5-8 min" },
                { title: "Operabilidad y evolucion", desc: "Versionado, deprecacion, monitoreo", time: "5-8 min" },
                { title: "Revision y finalizacion", desc: "Producir la especificacion de API final", time: "5 min" }
            ]
        },
        13: {
            agentName: "Principal Data Architect",
            document: "Especificacion de Datos",
            shortDesc: "Estructura los modelos de datos y su organizacion logica.",
            whatFor: "Plan maestro para la organizacion de datos. Referencia comun entre los equipos de desarrollo, datos y cumplimiento.",
            whyUse: "Julien ha disenado modelos de datos que soportan miles de millones de transacciones en Amazon, Spotify, Netflix y Airbnb.",
            howToUse: "Inicie la conversacion con Julien. Clara distincion entre modelos logicos y fisicos. Vigilante con el RGPD.",
            methodology: [
                { title: "Dominio de negocio", desc: "Comprender el dominio y los contextos delimitados", time: "8-10 min" },
                { title: "Entidades y contextos delimitados", desc: "Identificar las entidades principales", time: "8-10 min" },
                { title: "Atributos y relaciones", desc: "Detallar cada entidad y sus vinculos", time: "10-15 min" },
                { title: "Estrategia tecnica", desc: "Indexacion, particionamiento, cache", time: "5-8 min" },
                { title: "Cumplimiento y gobernanza", desc: "RGPD, clasificacion, retencion", time: "5-8 min" },
                { title: "Migracion y evolucion", desc: "Planificar la evolucion del esquema", time: "5 min" }
            ]
        },
        14: {
            agentName: "Principal Security Engineer",
            document: "Documento de Revision de Seguridad",
            shortDesc: "Analiza los riesgos de seguridad y las medidas de proteccion a implementar.",
            whatFor: "Analiza la postura de seguridad: activos, amenazas, medidas de proteccion, respuesta a incidentes.",
            whyUse: "Yassine practica el 'assume breach'. Pragmatico: la seguridad perfecta no existe, pero la gestion inteligente de riesgos si. Google, Netflix, Microsoft, Stripe.",
            howToUse: "Inicie la conversacion con Yassine. 'Ya lo veremos despues' es su frase enemiga. Piensa como un atacante.",
            methodology: [
                { title: "Mapear el sistema", desc: "Identificar todos los componentes y flujos", time: "8-10 min" },
                { title: "Clasificar los datos", desc: "Evaluar la sensibilidad de cada tipo", time: "5-8 min" },
                { title: "Modelar amenazas", desc: "Aplicar STRIDE/OWASP", time: "10-15 min" },
                { title: "Evaluar controles", desc: "Analizar las defensas existentes", time: "5-8 min" },
                { title: "Definir recomendaciones", desc: "Priorizar las acciones de seguridad", time: "8-10 min" },
                { title: "Cumplimiento y validacion", desc: "Verificar los estandares aplicables", time: "5 min" }
            ]
        },
        15: {
            agentName: "Staff SRE",
            document: "Plan de Rendimiento",
            shortDesc: "Define como el producto debe gestionar la carga, la escalabilidad y la optimizacion.",
            whatFor: "Anticipa los desafios de carga y planifica la escalabilidad con objetivos medibles.",
            whyUse: "Thomas esta obsesionado con los numeros. Distingue latencia, throughput y capacidad. Miles de millones de peticiones en Google, Netflix, Amazon, Cloudflare.",
            howToUse: "Inicie la conversacion con Thomas. Nada de 'deberia ir bien': quiere benchmarks, P99s y SLOs.",
            methodology: [
                { title: "Sistema y stakes", desc: "Comprender la arquitectura y los riesgos", time: "5-8 min" },
                { title: "Objetivos de rendimiento", desc: "Definir SLOs, SLIs, SLAs", time: "8-10 min" },
                { title: "Capacidad actual", desc: "Identificar cuellos de botella", time: "8-10 min" },
                { title: "Proyecciones de carga", desc: "Anticipar el crecimiento", time: "5-8 min" },
                { title: "Estrategia de escalabilidad", desc: "Horizontal, vertical, cache, CDN", time: "8-10 min" },
                { title: "Pruebas y monitoreo", desc: "Definir pruebas de carga y alertas", time: "5-8 min" }
            ]
        },
        16: {
            agentName: "VP of Growth / Head of GTM",
            document: "Plan Go-To-Market",
            shortDesc: "Describe la estrategia de lanzamiento y salida al mercado.",
            whatFor: "Define quienes son sus clientes, como alcanzarlos, a que precio y a traves de que canales.",
            whyUse: "Jade piensa en sistemas. Experiencia en Spotify, HubSpot, Slack, Notion y Amazon.",
            howToUse: "Inicie la conversacion con Jade. Alergica al 'spray and pray'. 'Quien' antes que 'que'.",
            methodology: [
                { title: "Producto y mercado", desc: "Comprender el contexto y el mercado", time: "8-10 min" },
                { title: "Publico objetivo y segmentos", desc: "Identificar los clientes prioritarios", time: "8-10 min" },
                { title: "Propuesta de valor", desc: "Articular la diferenciacion", time: "5-8 min" },
                { title: "Estrategia de adquisicion", desc: "Elegir canales y tacticas", time: "8-10 min" },
                { title: "Precio y modelo", desc: "Definir el posicionamiento de precio", time: "5-8 min" },
                { title: "Calendario y metricas", desc: "Planificar el lanzamiento y medir", time: "5-8 min" }
            ]
        },
        17: {
            agentName: "Chief Risk Officer",
            document: "Documento de Gestion de Riesgos",
            shortDesc: "Identifica los riesgos principales y las estrategias para mitigarlos.",
            whatFor: "Transforma la incertidumbre en informacion accionable. Crea una cultura proactiva de gestion de riesgos.",
            whyUse: "Hana es la 'pesimista profesional'. Piensa en probabilidades e impactos. Amazon, Google, McKinsey.",
            howToUse: "Inicie la conversacion con Hana. 5 fases: contexto, identificacion de riesgos, evaluacion, tratamiento, monitoreo.",
            methodology: [
                { title: "Contexto y stakes", desc: "Comprender el proyecto y sus stakes", time: "5-8 min" },
                { title: "Identificar riesgos", desc: "Mapear todos los riesgos", time: "10-15 min" },
                { title: "Evaluar riesgos", desc: "Probabilidad x Impacto para cada uno", time: "8-10 min" },
                { title: "Estrategias de tratamiento", desc: "Definir como tratar cada riesgo", time: "8-10 min" },
                { title: "Estructurar el monitoreo", desc: "Cadencia de revision y responsables", time: "5 min" }
            ]
        },
        18: {
            agentName: "Senior Compliance Expert",
            document: "Documentacion de Cumplimiento",
            shortDesc: "Asegura que el proyecto respete las obligaciones legales y regulatorias.",
            whatFor: "Garantiza TODAS las obligaciones legales y regulatorias (RGPD, SOC2, ISO 27001...).",
            whyUse: "Xavier identifica los riesgos de incumplimiento ANTES de que se conviertan en problemas. Mas de 15 anos en auditoria de cumplimiento.",
            howToUse: "Inicie la conversacion con Xavier. Ningun punto ciego regulatorio debe escaparsele. 'Compliance as code'.",
            methodology: [
                { title: "Encuadre y contexto", desc: "Comprender el sector y los mercados", time: "5-8 preguntas" },
                { title: "Mapeo regulatorio", desc: "Identificar todas las regulaciones", time: "6-8 preguntas" },
                { title: "Auditoria del estado actual", desc: "Evaluar el cumplimiento existente", time: "8-10 preguntas" },
                { title: "Plan de remediacion", desc: "Priorizar las acciones correctivas", time: "5-7 preguntas" },
                { title: "Validacion y generacion", desc: "Producir el documento final", time: "Resumen" }
            ]
        },
        19: {
            agentName: "Tech Legal Review Expert",
            document: "Documento de Revision Legal",
            shortDesc: "Analiza las implicaciones legales relacionadas con el producto o servicio.",
            whatFor: "Analiza todas las implicaciones legales: propiedad intelectual, contratos, cumplimiento, riesgos.",
            whyUse: "William busca el equilibrio optimo entre proteccion y agilidad empresarial.",
            howToUse: "Inicie la conversacion con William. Hace preguntas incomodas y cuantifica cada riesgo legal.",
            methodology: [
                { title: "Encuadre y estructura legal", desc: "Comprender la entidad y sus obligaciones", time: "5-7 preguntas" },
                { title: "Propiedad intelectual", desc: "Patentes, marcas, codigo, datos", time: "5-7 preguntas" },
                { title: "Contratos y acuerdos", desc: "Analizar todos los contratos", time: "5-7 preguntas" },
                { title: "Riesgos y cumplimiento", desc: "Identificar los riesgos legales", time: "5-7 preguntas" },
                { title: "Resumen y recomendaciones", desc: "Priorizar las acciones legales", time: "Resumen" }
            ]
        },
        20: {
            agentName: "Senior Principal Architect",
            document: "Documento del Comite de Revision de Arquitectura",
            shortDesc: "Valida y supervisa las decisiones de arquitectura a escala.",
            whatFor: "Valida o rechaza las propuestas arquitectonicas importantes. Una mala decision puede costar millones.",
            whyUse: "Nadia esta obsesionada con las '-ilidades': escalabilidad, fiabilidad, mantenibilidad. Mas de 20 anos en Google, Amazon, Netflix, Spotify.",
            howToUse: "Inicie la conversacion con Nadia. Utiliza el metodo ATAM. NUNCA valida sin un cuestionamiento profundo.",
            methodology: [
                { title: "Contexto y drivers de negocio", desc: "Comprender las motivaciones del cambio", time: "4-6 preguntas" },
                { title: "Arquitectura actual", desc: "Analizar el sistema existente y sus limites", time: "4-6 preguntas" },
                { title: "Arquitectura propuesta", desc: "Examinar la solucion en detalle", time: "6-8 preguntas" },
                { title: "Analisis de impacto y riesgos", desc: "Evaluar consecuencias y riesgos", time: "4-6 preguntas" },
                { title: "Decision y plan de migracion", desc: "Aprobar/rechazar + plan de accion", time: "4-6 preguntas" }
            ]
        },
        21: {
            agentName: "SRE Lead - Gestion de Incidentes",
            document: "Informe de Incidente",
            shortDesc: "Documenta los incidentes graves y sus impactos.",
            whatFor: "Documenta un incidente grave: deteccion, cronologia, impacto, resolucion, lecciones aprendidas.",
            whyUse: "Valerie es calmada y metodica bajo presion. Cultura blameless. Mas de 15 anos en Google, Amazon, PagerDuty, Datadog.",
            howToUse: "Inicie la conversacion con Valerie despues de un incidente. Cada minuto debe ser exacto, cada impacto cuantificado.",
            methodology: [
                { title: "Identificacion y encuadre", desc: "Clasificar el incidente y su severidad", time: "4-5 preguntas" },
                { title: "Reconstruccion de la cronologia", desc: "Minuto a minuto, que ocurrio?", time: "6-8 preguntas" },
                { title: "Analisis de impacto", desc: "Cuantificar el impacto en todas las dimensiones", time: "4-6 preguntas" },
                { title: "Causa raiz y factores", desc: "Identificar la causa profunda", time: "5-7 preguntas" },
                { title: "Acciones correctivas", desc: "Definir acciones preventivas", time: "3-5 preguntas" },
                { title: "Validacion y generacion", desc: "Producir el informe de incidente", time: "Resumen" }
            ]
        },
        22: {
            agentName: "Experto en Post-Mortem",
            document: "Documento Post-Mortem",
            shortDesc: "Analiza las causas raiz de un fallo o incidente para prevenir su recurrencia.",
            whatFor: "Explora las causas sistemicas, los factores organizacionales, los fallos de procesos y las mejoras estructurales.",
            whyUse: "Cedric rechaza toda culpa individual. Pregunta 'por que?' hasta encontrar la verdadera causa raiz. Google, Etsy, Netflix.",
            howToUse: "Inicie la conversacion con Cedric entre 24 y 72 horas DESPUES de la resolucion. Analiza el 'por que' en profundidad (metodo de los 5 Por Ques).",
            methodology: [
                { title: "Contexto y configuracion", desc: "Establecer el marco de analisis", time: "3-4 preguntas" },
                { title: "Reconstruccion detallada", desc: "Recorrer los eventos en detalle", time: "5-7 preguntas" },
                { title: "Analisis de causa raiz", desc: "Metodo de los 5 Por Ques", time: "6-8 preguntas" },
                { title: "Aprendizajes y resiliencia", desc: "Que aprendimos?", time: "5-6 preguntas" },
                { title: "Acciones correctivas", desc: "Como prevenirlo en el futuro?", time: "4-5 preguntas" },
                { title: "Validacion y generacion", desc: "Producir el post-mortem final", time: "Resumen" }
            ]
        },
        23: {
            agentName: "Experto SRE - Niveles de Servicio",
            document: "Documentacion SLA",
            shortDesc: "Define los compromisos de rendimiento y disponibilidad.",
            whatFor: "Define los compromisos formales: SLI (metrica) > SLO (objetivo interno) > SLA (compromiso contractual).",
            whyUse: "Benjamin calibra compromisos honestos y sostenibles. Google, Amazon AWS, Stripe, Datadog.",
            howToUse: "Inicie la conversacion con Benjamin. Rechaza los SLAs poco realistas. Piensa en presupuestos de error.",
            methodology: [
                { title: "Comprension del servicio", desc: "Comprender el servicio y sus clientes", time: "5-6 preguntas" },
                { title: "Definicion de SLIs", desc: "Identificar las metricas clave", time: "5-7 preguntas" },
                { title: "Calibracion de SLOs", desc: "Establecer objetivos internos realistas", time: "4-6 preguntas" },
                { title: "Definicion del SLA", desc: "Compromisos contractuales y compensaciones", time: "5-7 preguntas" },
                { title: "Validacion y generacion", desc: "Producir la documentacion SLA", time: "Resumen" }
            ]
        },
        24: {
            agentName: "Experto en Gobernanza Tecnologica",
            document: "Documentacion de Gobernanza",
            shortDesc: "Estructura las reglas internas de control, validacion y supervision.",
            whatFor: "Estructura las reglas de control, validacion y supervision. Sin una gobernanza explicita, todo se ralentiza.",
            whyUse: "Francois disena la gobernanza minima viable. Piensa en flujos de decision. Mas de 20 anos de experiencia.",
            howToUse: "Inicie la conversacion con Francois. 'Siempre lo hemos hecho asi' es su frase de alerta maxima. Rechaza la burocracia innecesaria.",
            methodology: [
                { title: "Diagnostico organizacional", desc: "Comprender como funcionan las cosas hoy", time: "5-7 preguntas" },
                { title: "Estructura de decisiones", desc: "Quien decide que y como", time: "5-7 preguntas" },
                { title: "Procesos operativos", desc: "Como avanza el trabajo", time: "5-7 preguntas" },
                { title: "Cadencia y rituales", desc: "Definir los ritmos organizacionales", time: "4-5 preguntas" },
                { title: "Reporting y transparencia", desc: "Como fluye la informacion", time: "3-5 preguntas" },
                { title: "Validacion y generacion", desc: "Producir el documento de gobernanza", time: "Resumen" }
            ]
        }
    }
};
