export const locales = ["fr", "en"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "fr";

export const pageLabels: Record<Locale, Record<string, string>> = {
  fr: {
    home: "Accueil",
    about: "À propos",
    services: "Services et secteurs",
    "services-industries": "Services et secteurs",
    projects: "Projets",
    insights: "Analyses",
    actuality: "Actualités",
    sustainability: "Durabilité",
    experts: "Experts",
    careers: "Carrières",
    contact: "Contact",
  },
  en: {
    home: "Home",
    about: "About us",
    services: "Services & Industries",
    "services-industries": "Services & Industries",
    projects: "Projects",
    insights: "Insights",
    actuality: "Actuality",
    sustainability: "Sustainability",
    experts: "Experts",
    careers: "Careers",
    contact: "Contact",
  },
};

export const pageDescriptions: Record<Locale, Record<string, string>> = {
  fr: {
    home: "Africa Power Advisory Holding accompagne les décideurs publics, industriels et financiers dans les choix énergétiques, les infrastructures et la transition durable.",
    about: "Une équipe de conseil multidisciplinaire spécialisée dans l’énergie, la réglementation, l’infrastructure et la gouvernance en Afrique.",
    services: "Conseil stratégique, systèmes électriques, projets d’énergie, efficacité énergétique, transition et réglementation.",
    projects: "Portfolio de projets, études et missions d’assistance sur les marchés électriques africains.",
    insights: "Analyses, rapports et publications sur les marchés énergétiques, les infrastructures et les politiques publiques.",
    actuality: "Actualités, annonces et évolutions autour des missions et projets d’Africa Power Advisory Holding.",
    sustainability: "Transition énergétique, décarbonation, gestion durable des actifs et optimisation des infrastructures.",
    experts: "Leadership et experts d’Africa Power Advisory Holding, spécialisés dans l’énergie et les infrastructures.",
    careers: "Découvrez les opportunités de carrière et les modalités de candidature spontanée.",
    contact: "Contactez notre équipe pour discuter d’un projet, d’une étude ou d’un besoin de conseil.",
  },
  en: {
    home: "Africa Power Advisory Holding supports public, industrial and financial stakeholders in energy decisions, infrastructure planning and sustainable transition.",
    about: "A multidisciplinary advisory team working across energy, infrastructure, regulation and governance across Africa.",
    services: "Strategic advisory, power systems, energy projects, efficiency, transition and regulatory support.",
    projects: "A portfolio of energy, infrastructure and advisory work across African markets.",
    insights: "Research, analysis and publications on energy markets, infrastructure and policy.",
    actuality: "Company news, announcements and developments from Africa Power Advisory Holding.",
    sustainability: "Energy transition, decarbonization, sustainable asset management and infrastructure optimization.",
    experts: "Leadership and specialist profiles at Africa Power Advisory Holding.",
    careers: "Explore current opportunities and the spontaneous application process.",
    contact: "Get in touch to discuss a project, a study or an advisory mandate.",
  },
};

export const navItems = [
  "home",
  "about",
  "services-industries",
  "projects",
  "insights",
  "actuality",
  "sustainability",
  "experts",
  "careers",
  "contact",
] as const;

export const dictionaries = {
  fr: {
    siteName: "Africa Power Advisory Holding",
    tagline: "Conseil stratégique et solutions énergétiques pour l’Afrique",
    heroTitle: "Des décisions énergétiques plus fortes pour un continent en mutation",
    heroSubtitle: "Nous accompagnons les gouvernements, opérateurs, industriels et investisseurs dans la stratégie énergétique, les infrastructures électriques et la transition durable.",
    ctaPrimary: "Discuter d’un projet",
    ctaSecondary: "Demander un conseil",
    ctaTertiary: "Parler à un expert",
    subscribeNewsletter: "S’abonner à la newsletter",
    languageLabel: "FR | EN",
    aboutTitle: "À propos",
    servicesTitle: "Services et secteurs",
    projectsTitle: "Projets",
    insightsTitle: "Analyses",
    actualityTitle: "Actualités",
    sustainabilityTitle: "Durabilité",
    expertsTitle: "Nos experts",
    careersTitle: "Carrières",
    contactTitle: "Contact",
    footerLegal: "Africa Power Advisory Holding",
    footerCopyright: "Tous droits réservés.",
    readBio: "Lire la bio",
    talkTogether: "Parlons ensemble",
    menu: "Menu",
    meetExperts: "Rencontrez nos experts de l’énergie et des infrastructures",
    leadText: "Notre équipe associe gouvernance, modélisation économique, ingénierie, données et analyse de marché pour aider les acteurs à prendre des décisions robustes.",
    hiddenContactNote: "Les coordonnées officielles de l’entreprise seront publiées après validation interne et approbation de la société.",
    navButton: "Demander un conseil",
    darkMode: "Mode sombre",
    lightMode: "Mode clair",
  },
  en: {
    siteName: "Africa Power Advisory Holding",
    tagline: "Strategic energy advisory and power solutions for Africa",
    heroTitle: "Stronger energy decisions for a rapidly changing continent",
    heroSubtitle: "We support governments, utilities, industrial groups and investors in energy strategy, power infrastructure and sustainable transition planning.",
    ctaPrimary: "Discuss a Project",
    ctaSecondary: "Request Advisory",
    ctaTertiary: "Speak With an Energy Expert",
    subscribeNewsletter: "Subscribe to Newsletter",
    languageLabel: "FR | EN",
    aboutTitle: "About us",
    servicesTitle: "Services & Industries",
    projectsTitle: "Projects",
    insightsTitle: "Insights",
    actualityTitle: "Actuality",
    sustainabilityTitle: "Sustainability",
    expertsTitle: "Our experts",
    careersTitle: "Careers",
    contactTitle: "Contact",
    footerLegal: "Africa Power Advisory Holding",
    footerCopyright: "All rights reserved.",
    readBio: "Read bio",
    talkTogether: "Let’s Talk Together",
    menu: "Menu",
    meetExperts: "Meet our energy and infrastructure experts",
    leadText: "Our team combines governance, economic modelling, engineering, data and market analysis to help stakeholders make sound decisions in fast-moving conditions.",
    hiddenContactNote: "The company’s official contact details will be published after internal verification and formal approval.",
    navButton: "Request Advice",
    darkMode: "Dark mode",
    lightMode: "Light mode",
  },
} as const;

export const serviceLines = {
  fr: [
    { title: "Conseil en énergie", description: "Analyse de marché, scénarios, études de faisabilité et stratégie d’investissement pour les acteurs du secteur électrique." },
    { title: "Systèmes électriques et infrastructure", description: "Planification des réseaux, optimisation de la performance, modernisation des actifs et appui technique sur les infrastructures." },
    { title: "Projets énergétiques", description: "Appui au développement, à la préparation et au pilotage de projets hydroélectriques, solaires, éoliens et de réseaux." },
    { title: "Achats d’énergie et PPA", description: "Structuration des achats, négociation, revue contractuelle et stratégie d’approvisionnement énergétique." },
    { title: "Efficacité énergétique", description: "Audit énergétique, optimisation des coûts, amélioration de l’efficacité industrielle et gestion de la demande." },
    { title: "Transition et durabilité", description: "Décarbonation industrielle, gestion du carbone, intégration des énergies renouvelables et stratégie de transition." },
  ],
  en: [
    { title: "Energy Advisory", description: "Market analysis, scenario planning, feasibility studies and strategic investment support for energy stakeholders." },
    { title: "Power Systems & Infrastructure", description: "Network planning, asset performance improvement, grid modernization and technical infrastructure support." },
    { title: "Energy Projects", description: "Support for project preparation, development and delivery across hydro, solar, wind and grid infrastructure." },
    { title: "Power Procurement", description: "Procurement structuring, PPA advisory, contract review and supply strategy design." },
    { title: "Energy Efficiency", description: "Energy audits, cost optimization, industrial efficiency and demand-side performance improvement." },
    { title: "Transition & Sustainability", description: "Industrial decarbonization, carbon strategy, renewable integration and transition planning." },
  ],
};

export const industries = {
  fr: [
    "Utilities",
    "Minier",
    "Gouvernement",
    "Industrie",
    "Commerce",
    "Investisseurs",
    "Développeurs énergétiques",
    "Partenaires de développement",
  ],
  en: [
    "Utilities",
    "Mining",
    "Government",
    "Industrial",
    "Commercial",
    "Investors",
    "Energy Developers",
    "Development Partners",
  ],
};

export const projectShowcase = [
  {
    name: { fr: "Étude de planification de réseau", en: "Grid planning study" },
    location: "DRC",
    summary: {
      fr: "Analyse de la capacité, des goulots d’étranglement et des priorités d’investissement pour la mobilité électrique et le développement industriel.",
      en: "Assessment of capacity constraints, bottlenecks and investment priorities for industrial and electrification growth.",
    },
  },
  {
    name: { fr: "Appui à la stratégie énergétique régionale", en: "Regional energy strategy support" },
    location: "Afrique centrale",
    summary: {
      fr: "Modélisation des besoins, analyse de l’offre et cadrage des politiques de transition pour une vision cohérente et réaliste.",
      en: "Demand and supply analysis, policy framing and transition planning for regional power development.",
    },
  },
  {
    name: { fr: "Optimisation du portefeuille d’actifs", en: "Asset portfolio optimization" },
    location: "Zambie",
    summary: {
      fr: "Diagnostic des actifs, amélioration de la performance et plan de modernisation des infrastructures électriques.",
      en: "Asset diagnostics, performance improvement and modernization roadmap for a utility portfolio.",
    },
  },
];

export const insightArticles = {
  fr: [
    { title: "Ce que signifie la compétitivité énergétique pour les marchés africains", category: "Analyse de marché" },
    { title: "Le rôle des réglementations dans la finance des infrastructures électriques", category: "Régulation" },
    { title: "Du pilotage de la demande à la planification du réseau", category: "Infrastructure" },
  ],
  en: [
    { title: "What energy competitiveness means for African markets", category: "Market analysis" },
    { title: "How regulation shapes infrastructure financing in power systems", category: "Regulation" },
    { title: "From demand management to network planning", category: "Infrastructure" },
  ],
};

export const newsItems = {
  fr: [
    { title: "Réseaux et transition : les bons leviers pour des investissements mieux cadrés", date: "12 juillet 2026" },
    { title: "Appui technique sur la planification des infrastructures électriques en Afrique centrale", date: "18 juin 2026" },
    { title: "Comment les données et les scénarios améliorent les décisions d’investissement", date: "3 mai 2026" },
  ],
  en: [
    { title: "Grid planning and transition: the right levers for better investment decisions", date: "12 July 2026" },
    { title: "Technical support for power infrastructure planning in Central Africa", date: "18 June 2026" },
    { title: "How data and scenario analysis improve energy investment decisions", date: "3 May 2026" },
  ],
};

export const jobPosts = {
  fr: [
    { title: "Senior Energy Analyst", department: "Conseil", location: "Kinshasa / hybride", type: "CDI" },
    { title: "Power Systems Engineer", department: "Infrastructure", location: "Lusaka / hybride", type: "Contrat" },
  ],
  en: [
    { title: "Senior Energy Analyst", department: "Advisory", location: "Kinshasa / hybrid", type: "Permanent" },
    { title: "Power Systems Engineer", department: "Infrastructure", location: "Lusaka / hybrid", type: "Contract" },
  ],
};

export const expertProfiles = [
  {
    name: "Oguzu Lee Denis",
    title: {
      fr: "Membre du Parlement d’Ouganda et innovateur en technologie",
      en: "Member of Parliament, Uganda; technology innovator and governance reform advocate",
    },
    bio: {
      fr: "Membre du Parlement ougandais pour Maracha County, innovateur technologique et fervent défenseur de la réforme de la gouvernance. Reconnu par l’Organisation mondiale de la santé pour la conception d’un cadre national de service d’ambulance d’urgence, il mobilise son expertise en TIC pour accélérer le développement des infrastructures numériques, réduire les flux financiers illicites et renforcer un développement plus transparent et inclusif pour les jeunes.",
      en: "A Ugandan Member of Parliament for Maracha County, technology innovator, and champion for governance reform. Recognized by the World Health Organization for designing a national emergency ambulance service framework, he leverages his ICT background to expand digital infrastructure, curb illicit financial flows and strengthen transparent, youth-inclusive development.",
    },
    image: "/assets/team/OGUZU LEE DENIS pics.jpg",
    specialization: {
      fr: "Gouvernance numérique et infrastructures critiques",
      en: "Digital governance and critical infrastructure",
    },
  },
  {
    name: "Christian Bakole Mukulu",
    title: {
      fr: "Économiste de l’énergie et conseiller principal en régulation",
      en: "Energy economist and senior regulatory adviser",
    },
    bio: {
      fr: "Économiste de l’énergie congolais et directeur adjoint des affaires économiques et tarifaires à l’Autorité de régulation de l’électricité de la République démocratique du Congo (ARE). Ancien boursier Hubert H. Humphrey et Mandela Washington à l’UC Davis, il détient une maîtrise en science et politique de l’énergie et s’est formé auprès de l’Agence coréenne de l’énergie. Soutenu par la Banque mondiale comme expert senior sur l’analyse des tarifs et la régulation du marché, il contribue activement à la promotion de l’efficacité énergétique au niveau des ménages et des stratégies de transition durable en RDC.",
      en: "A Congolese energy economist and Deputy Director of Economic and Pricing Affairs at the Democratic Republic of the Congo’s Electricity Regulatory Authority (ARE). A former Hubert H. Humphrey and Mandela Washington Fellow at UC Davis, he holds a Master’s degree in Energy Science and Policy and completed specialized training with the Korea Energy Agency. Supported by World Bank funding as a senior expert on electricity tariff analysis and market regulation, he actively promotes household-level energy efficiency and sustainable transition strategies across the DRC.",
    },
    image: "/assets/team/Christian Bakole Mukulu pics.jpg",
    specialization: {
      fr: "Tarification électrique et régulation",
      en: "Electricity pricing and regulation",
    },
  },
  {
    name: "Dr. Geoffrey Aori Mabea",
    title: {
      fr: "Économiste de l’énergie et directeur exécutif",
      en: "Energy economist, author and executive leader",
    },
    bio: {
      fr: "Économiste de l’énergie kényan, auteur et dirigeant, il est CEO de l’Association régionale des régulateurs de l’énergie pour l’Afrique orientale et australe (RAERESA/COMESA). Titulaire d’un doctorat en économie de l’énergie de l’Université de Dundee, il apporte une expérience solide du secteur géothermique du Kenya, de PwC et de l’EREA, où il a piloté l’Union de l’énergie de la Communauté est-africaine et fondé le Centre d’excellence en régulation de l’énergie pour renforcer l’intégration régionale, la réforme tarifaire et l’harmonisation des politiques énergétiques.",
      en: "A Kenyan energy economist, author and executive serving as CEO of the Regional Association of Energy Regulators for Eastern and Southern Africa (RAERESA/COMESA). Holding a PhD in Energy Economics from the University of Dundee, he brings extensive leadership experience from Kenya’s geothermal sector, PwC and EREA, where he spearheaded the East African Community Energy Union and founded the Energy Regulation Centre of Excellence to drive cross-border power market integration, tariff reform and sustainable policy harmonization.",
    },
    image: "/assets/team/Dr. Geoffrey Aori Mabea pics.jpg",
    specialization: {
      fr: "Régulation régionale et marchés énergétiques",
      en: "Regional regulation and energy markets",
    },
  },
  {
    name: "Matthieu Abena Gongo",
    title: {
      fr: "Expert énergie et conseiller en politique publique",
      en: "Energy expert and public policy advisor",
    },
    bio: {
      fr: "Expert congolais en énergie et conseiller en politique publique, il anime la planification, l’analyse économique et la validation des projets énergétiques nationaux au sein de l’Unité de soutien technique et économique (CATE). Son parcours au ministère de l’Énergie et des Ressources hydrauliques, ainsi que sa présidence du comité de pilotage du projet hydroélectrique de Busanga, nourrit une vision solide des défis techniques, réglementaires et institutionnels du secteur électrique en RDC.",
      en: "A Congolese energy expert and public policy advisor with extensive technical and strategic leadership in the DRC power sector. As coordinator of the Technical and Economic Support Unit (CATE), he leads planning, economic analysis and validation of national energy projects. His prior experience as Chief of Staff at the Ministry of Energy and Hydraulic Resources and chair of the Busanga Hydroelectric Power Station steering committee gives him a grounded understanding of the practical and institutional challenges of the sector.",
    },
    image: "/assets/team/placeholder-portrait.svg",
    initials: "MAG",
    specialization: {
      fr: "Planification énergétique et projets d’infrastructure",
      en: "Energy planning and infrastructure projects",
    },
  },
];

export const sectionContent: Record<Locale, Record<string, { title: string; intro: string }>> = {
  fr: {
    home: { title: "Accueil", intro: "Nous accompagnons les décideurs dans les investissements, la performance des réseaux et la transition énergétique.", },
    about: { title: "À propos", intro: "Une équipe multidisciplinaire qui relie stratégie, technique, données et réglementation pour les marchés africains.", },
    "services-industries": { title: "Services et secteurs", intro: "Conseil stratégique, infrastructures électriques, transition, efficacité et accompagnement réglementaire.", },
    projects: { title: "Projets", intro: "Des missions et études conçues pour des enjeux de puissance, d’efficacité et de croissance durable.", },
    insights: { title: "Analyses", intro: "Des contenus utiles pour comprendre la dynamique des marchés énergétiques et les leviers de décision.", },
    actuality: { title: "Actualités", intro: "Les dernières annonces, évolutions et projets d’Africa Power Advisory Holding.", },
    sustainability: { title: "Durabilité", intro: "Des solutions pensées pour l’efficacité, la résilience et la transition énergétique.", },
    experts: { title: "Experts", intro: "Des profils de leadership et de spécialisation alignés sur les défis énergétiques du continent.", },
    careers: { title: "Carrières", intro: "Rejoignez une équipe qui aide les pays africains à faire des choix énergétiques plus sûrs et plus durables.", },
    contact: { title: "Contact", intro: "Discutons de votre besoin, de votre projet ou du cadre de votre stratégie énergétique.", },
  },
  en: {
    home: { title: "Home", intro: "We help leaders make stronger decisions across investment, grid performance and energy transition.", },
    about: { title: "About us", intro: "A multidisciplinary team linking strategy, technical depth, data and policy for African energy markets.", },
    "services-industries": { title: "Services & Industries", intro: "Strategic advice, power infrastructure, transition planning, efficiency and regulatory support.", },
    projects: { title: "Projects", intro: "Assignments and studies built around growth, resilience and sustainable energy performance.", },
    insights: { title: "Insights", intro: "Practical content to help understand market dynamics and decision levers in power and infrastructure.", },
    actuality: { title: "Actuality", intro: "The latest company announcements, developments and project updates from Africa Power Advisory Holding.", },
    sustainability: { title: "Sustainability", intro: "Solutions designed for efficiency, resilience and long-term energy transition.", },
    experts: { title: "Experts", intro: "Leadership and specialist profiles aligned with the energy challenges facing the continent.", },
    careers: { title: "Careers", intro: "Join a team building safer and more sustainable energy decisions across Africa.", },
    contact: { title: "Contact", intro: "Let’s talk about your needs, your project or the strategic context behind your energy decisions.", },
  },
};

export const contactDetails = {
  fr: {
    office: "13A, avenue Lufungulo, Ngaliema, Kinshasa, République démocratique du Congo",
    office2: "Makeni 55, Kafue Road, Lusaka, Zambie",
    description: "Nous travaillons avec des institutions publiques, des opérateurs électriques, des industriels et des investisseurs à travers l’Afrique.",
  },
  en: {
    office: "13A, avenue Lufungulo, Ngaliema, Kinshasa, Democratic Republic of the Congo",
    office2: "Makeni 55, Kafue Road, Lusaka, Zambia",
    description: "We work with public institutions, utilities, industrial operators and investors across Africa.",
  },
};
