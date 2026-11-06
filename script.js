(() => {
  const body = document.body;
  body.classList.add('js-ready');

  const translations = {
    nb: {
      'nav.about': 'Om meg',
      'nav.experience': 'Erfaring',
      'nav.featured': 'Utvalgt',
      'nav.projects': 'Prosjekter',
      'nav.contact': 'Kontakt',
      'nav.button': 'Erfaring',
      'hero.eyebrow': 'Hei, jeg heter',
      'hero.role': 'Building products. Driving change. Connecting ideas.',
      'hero.copy': 'Jeg brenner for produktutvikling, teknologi og nye måter å løse utfordringer på. Med internasjonal erfaring trives jeg med å samle perspektiver og gjøre komplekse ideer til konkrete løsninger.',
      'hero.button': 'Bli bedre kjent',
      'about.heading': 'Om meg',
      'about.p1': 'Hei! Jeg er Christopher, en produkteier basert i Moss, med bakgrunn fra finans, teknologi og digital produktutvikling. Etter flere år i utlandet er jeg tilbake i Norge, med internasjonal arbeidserfaring fra flere europeiske markeder og kulturer – og arbeid på tvers av landegrenser er noe som heller motiverer enn skremmer meg.',
      'about.p2': 'Jeg jobber i dag hos Euronext Securities og er en del av et europeisk transformasjonsprogram som harmoniserer forretningsprosesser og digitale tjenester på tvers av fem markeder. I en stadig mer sammenkoblet verden er moderne og velfungerende europeisk markedsinfrastruktur viktig for å styrke konkurransekraften, effektiviteten og Europas evne til å stå på egne ben. Som produkteier jobber jeg her i skjæringspunktet mellom forretning og teknologi, der jeg samler behov, setter retning og sørger for at komplekse krav blir omsatt til konkrete løsninger.',
      'about.p3': 'Jeg er også opptatt av å utforske produktutvikling i praksis. Gjennom blant annet Le Wagons kurs i webutvikling har jeg fått verktøy til å eksperimentere med og utvikle egne nettsider og applikasjoner.',
      'about.p4': 'Utenfor jobb er jeg nysgjerrig på språk og lingvistikk, og fascinert av hvordan språk former måten vi tenker og oppfatter verden på. Jeg er også glad i å lese, enten det er historie, økonomi, samfunn og teknologi eller en god roman (med en kopp varm kaffe, såklart).',
      'about.skillsHeader': 'VERKTØYKASSEN MIN',
      'skill.1': 'Produktansvar',
      'skill.2': 'Forretningsanalyse',
      'skill.3': 'Krav og prosesskartlegging',
      'skill.4': 'Prioritering av backlog',
      'skill.5': 'Samarbeid med interessenter',
      'skill.6': 'Finansielle tjenester',
      'skill.7': 'Smidig levering',
      'skill.8': 'Digital kompetanse',
      'experience.heading': 'Hvor har jeg jobbet',
      'experience.tab.euronext-po': 'Euronext · Produkteier',
      'experience.tab.client-manager': 'Euronext · Kundeansvarlig',
      'experience.tab.myvps': 'Euronext · Produkteier',
      'experience.tab.finance': 'Finans og operasjon',
      'experience.euronext.date': '2024 — Nå',
      'experience.euronext.location': 'Paris, Frankrike / Oslo, Norge',
      'experience.euronext.role': 'Produkteier',
      'experience.euronext.summary': 'Ansvarlig som produkteier for sentrale deler av et omfattende europeisk transformasjonsprogram, hvor forretningsprosesser og digitale tjenester harmoniseres på tvers av fem europeiske kapitalmarkeder i en felles IT-plattform.',
      'experience.euronext.li1': 'Koordinerer leveranser og fremdrift på tvers av team i Norge, Danmark, Portugal, Italia og Hellas.',
      'experience.euronext.li2': 'Omsetter forretnings-, bruker- og regulatoriske behov til funksjonelle løsninger innen klientmasterdata og verdipapirkontoadministrasjon.',
      'experience.euronext.li3': 'Utarbeider krav, spesifikasjoner og beslutningsgrunnlag i tett samarbeid med utviklere, arkitekter, forretningsmiljøer og ledelse.',
      'experience.euronext.tag1': 'Transformasjonsprosjekt',
      'experience.euronext.tag2': 'Kravspesifikasjon',
      'experience.euronext.tag3': 'Internasjonalt samarbeid',
      'experience.client.date': '2022 — 2024',
      'experience.client.location': 'Porto, Portugal / Oslo, Norge',
      'experience.client.role': 'Kundeansvarlig',
      'experience.client.summary': 'Hovedansvar for oppfølgingen av selskapets største kunde, med koordinering mellom kunde, forretning og teknologimiljøer for å sikre gode leveranser og langsiktige relasjoner.',
      'experience.client.li1': 'Ledet implementeringen av et nytt CRM-system i Oslo.',
      'experience.client.li2': 'Utviklet KPI-dashboards og rapporteringsløsninger for bedre beslutningsstøtte og operasjonell effektivitet.',
      'experience.client.li3': 'Drev prosessforbedringer og koordinerte samarbeid på tvers av fagområder.',
      'experience.client.tag1': 'Kundeledelse',
      'experience.client.tag2': 'CRM analyse',
      'experience.client.tag3': 'KPI-rapportering',
      'experience.myvps.date': '2021 — 2022',
      'experience.myvps.location': 'Oslo, Norge',
      'experience.myvps.role': 'Produkteier',
      'experience.myvps.summary': 'Produktansvar for videreutviklingen av en sentral digital plattform i bruk hos banker og finansinstitusjoner på tvers av Norden og Europa.',
      'experience.myvps.li1': 'Koordinerte et internasjonalt utviklingsteam i Polen og prioriterte produktutvikling i samarbeid med tekniske og forretningsmessige interessenter.',
      'experience.myvps.li2': 'Involverte brukere i testing, lansering og opplæring for å sikre gode brukeropplevelser og vellykket implementering.',
      'experience.myvps.li3': 'Samarbeidet med Compliance om utviklingen av et digitalt opplærings- og sertifiseringsprogram.',
      'experience.myvps.li4': 'Fullførte et seks måneders deltidskurs i webutvikling hos Le Wagon.',
      'experience.myvps.tag1': 'Produktutvikling',
      'experience.myvps.tag2': 'Agilt samarbeid',
      'experience.myvps.tag3': 'Webutvikling',
      'experience.finance.date': '2017 — 2020',
      'experience.finance.location': 'Oslo, Hamburg & Vilnius',
      'experience.finance.role': 'Finans- og operasjonsroller',
      'experience.finance.summary': 'Bygget et solid fundament innen finansielle markeder, verdipapiroperasjoner og prosesshåndtering gjennom roller i internasjonale selskaper og regulerte virksomheter.',
      'experience.finance.li1': 'Investor Services, dokumentkontroll, fondsordre og prosessforbedring.',
      'experience.finance.li2': 'Nordisk operasjonell drift og partneroppfølging innen API-basert finansiering.',
      'experience.finance.li3': 'Håndtering, prising og kontroll av rentederivater og kontraktsoverføringer.',
      'experience.finance.li4': 'Likviditetsstyring, betalinger, avstemminger og oppgjør.',
      'experience.finance.tag1': 'Finansielle operasjoner',
      'experience.finance.tag2': 'Kapitalmarkeder',
      'experience.finance.tag3': 'Operasjonell drift',
      'featured.heading': 'Utvalgte prosjekter',
      'featured.eyebrow': 'EURONEXT SECURITIES · INTERNASJONAL TRANSFORMASJON',
      'featured.title': 'Én plattform. Fem europeiske kapitalmarkeder.',
      'featured.summary': 'Et omfattende transformasjonsprogram for å samle og harmonisere forretningsprosesser og digitale tjenester på tvers av fem europeiske markeder. Jeg jobber med klientmasterdata og verdipapirkontoadministrasjon, og bidrar til å omsette komplekse forretningsbehov til felles digitale løsninger.',
      'featured.fact.role.label': 'ROLLE',
      'featured.fact.role.value': 'Produkteier',
      'featured.fact.collaboration.label': 'SAMARBEID',
      'featured.fact.collaboration.value': 'Fem europeiske markeder',
      'featured.fact.focus.label': 'FOCUS',
      'featured.fact.focus.value': 'Fra behov og krav til leveranse',
      'featured.link': 'Les mer om initiativet',
      'featured.visual': 'PLATFORM',
      'projects.heading': 'Noen ting jeg har jobbet med',
      'projects.card1.eyebrow': 'DIGITALT PRODUKT',
      'projects.card1.title': 'MyVPS',
      'projects.card1.summary': 'En sentral digital tjeneste brukt av banker og finansinstitusjoner i Norden og Europa. Produktansvar gjennom kontinuerlig utvikling, testing, lansering og brukerdidaktikk.',
      'projects.card1.tag1': 'Produktansvar',
      'projects.card1.tag2': 'Finansielle tjenester',
      'projects.card1.tag3': 'Opplæring',
      'projects.card2.eyebrow': 'KUNDEOPERASJONER',
      'projects.card2.title': 'CRM & KPI-rapportering',
      'projects.card2.summary': 'CRM-implementering og rapporteringsarbeid som ga mer struktur til oppfølging av kunder og et tydeligere bilde av operasjonell ytelse.',
      'projects.card2.tag1': 'CRM',
      'projects.card2.tag2': 'Dashboards',
      'projects.card2.tag3': 'Prosessforbedring',
      'projects.card3.eyebrow': 'TEKNISK GRUNNLEGGENDE',
      'projects.card3.title': 'Le Wagon',
      'projects.card3.summary': 'Et seksmåneders deltidskurs i webutvikling som dekker programmering, databaser og API-er — og bygger flyt mellom produkt og utvikling.',
      'projects.card3.tag1': 'Webutvikling',
      'projects.card3.tag2': 'Databaser',
      'projects.card3.tag3': 'API-er',
      'location.label': 'Basert i Moss',
      'location.meta': 'Norge',
      'footer.before': 'Designet med inspirasjon fra',
      'footer.after': '; ytterligere tilpasset av Christopher.',
      'footer.top': 'Tilbake til toppen ↑'
    },
    en: {
      'nav.about': 'About',
      'nav.experience': 'Experience',
      'nav.featured': 'Featured',
      'nav.projects': 'Projects',
      'nav.contact': 'Contact',
      'nav.button': 'Experience',
      'hero.eyebrow': 'Hi, my name is',
      'hero.role': 'I make complex change easier to navigate.',
      'hero.copy': 'I’m a Product Owner working across financial services, digital products, and international transformation. I bring business and technology teams together to turn complex needs into practical solutions.',
      'hero.button': 'Get to know me',
      'about.heading': 'About',
      'about.p1': 'Hello! I’m Christopher, a Product Owner based in Moss, Norway. After several years abroad, I’ve returned to Norway and am building a long-term career here.',
      'about.p2': 'At Euronext Securities, I’m part of a transformation programme harmonising business processes and digital services across five European markets. I focus on client master data and securities account administration, translating business, user, and regulatory needs into clear requirements and functional solutions.',
      'about.p3': 'Previously, I’ve had product owner responsibilities for the MyVPS web application, used by banks and financial institutions across the Nordics and Europe. I’ve also worked in client management and financial operations, and completed Le Wagon’s part-time web development course to deepen my understanding of software, databases, and APIs.',
      'about.p4': 'I enjoy the space where <strong>business understanding, technology, and collaboration</strong> meet—and helping teams turn a shared direction into dependable delivery.',
      'about.skillsHeader': 'A FEW THINGS I BRING',
      'skill.1': 'Product ownership',
      'skill.2': 'Business analysis',
      'skill.3': 'Requirements & process mapping',
      'skill.4': 'Backlog prioritisation',
      'skill.5': 'Stakeholder alignment',
      'skill.6': 'Financial services',
      'skill.7': 'Agile delivery',
      'skill.8': 'Jira & Confluence',
      'experience.heading': 'Where I’ve worked',
      'experience.tab.euronext-po': 'Euronext · Product Owner',
      'experience.tab.client-manager': 'Euronext · Client Manager',
      'experience.tab.myvps': 'Euronext · Product Owner',
      'experience.tab.finance': 'Finance & operations',
      'experience.euronext.date': '2024 — Present',
      'experience.euronext.location': 'Paris, France / Oslo, Norway',
      'experience.euronext.role': 'Product Owner',
      'experience.euronext.summary': 'Delivering key work in the company’s largest international transformation programme, harmonising business processes and digital services across five European capital markets on a shared IT platform.',
      'experience.euronext.li1': 'Coordinate deliverables and progress across teams in Norway, Denmark, Portugal, Italy, and Greece.',
      'experience.euronext.li2': 'Translate business, user, and regulatory needs into functional solutions for client master data and securities account administration.',
      'experience.euronext.li3': 'Prepare specifications, documentation, and decision materials with development teams, architects, business stakeholders, and senior management.',
      'experience.euronext.tag1': 'Transformation',
      'experience.euronext.tag2': 'Requirements',
      'experience.euronext.tag3': 'Cross-market delivery',
      'experience.client.date': '2022 — 2024',
      'experience.client.location': 'Porto, Portugal / Oslo, Norway',
      'experience.client.role': 'Client Manager',
      'experience.client.summary': 'Primary operational contact for the company’s largest client, coordinating work across client, business, and IT teams while building a strong working relationship.',
      'experience.client.li1': 'Led implementation of a new CRM system in Oslo.',
      'experience.client.li2': 'Developed KPI dashboards and reporting to improve decision-making, client management, and operational efficiency.',
      'experience.client.li3': 'Built experience in process improvement and cross-functional stakeholder coordination.',
      'experience.client.tag1': 'Client management',
      'experience.client.tag2': 'CRM',
      'experience.client.tag3': 'KPI reporting',
      'experience.myvps.date': '2021 — 2022',
      'experience.myvps.location': 'Oslo, Norway',
      'experience.myvps.role': 'Product Owner',
      'experience.myvps.summary': 'Owned ongoing development of MyVPS, a core digital application used by more than 100 banks and financial institutions across Europe.',
      'experience.myvps.li1': 'Coordinated a Poland-based development team and planned product activities with technical and business stakeholders.',
      'experience.myvps.li2': 'Worked with users on testing, rollout, and training.',
      'experience.myvps.li3': 'Partnered with Compliance to establish a digital training and certification programme.',
      'experience.myvps.li4': 'Completed Le Wagon’s six-month part-time course in web development, databases, and APIs.',
      'experience.myvps.tag1': 'MyVPS',
      'experience.myvps.tag2': 'Product development',
      'experience.myvps.tag3': 'Le Wagon',
      'experience.finance.date': '2017 — 2020',
      'experience.finance.location': 'Oslo, Hamburg & Vilnius',
      'experience.finance.role': 'Finance and operations roles',
      'experience.finance.summary': 'Built a practical foundation in financial markets, client operations, and dependable processes across regulated and international environments.',
      'experience.finance.tag1': 'Financial operations',
      'experience.finance.tag2': 'Capital markets',
      'experience.finance.tag3': 'Controls',
      'featured.heading': 'Featured work',
      'featured.eyebrow': 'EURONEXT SECURITIES · INTERNATIONAL TRANSFORMATION',
      'featured.title': 'One platform.<br>Five capital markets.',
      'featured.summary': 'A multi-market programme to harmonise business processes and digital services through a shared IT platform. My area covers client master data and securities account administration.',
      'featured.fact.role.label': 'ROLE',
      'featured.fact.role.value': 'Product Owner',
      'featured.fact.collaboration.label': 'COLLABORATION',
      'featured.fact.collaboration.value': 'Five European markets',
      'featured.fact.focus.label': 'FOCUS',
      'featured.fact.focus.value': 'From requirements to delivery',
      'featured.link': 'Learn more about the initiative',
      'featured.visual': 'ONE<br>PLATFORM',
      'projects.heading': 'A few things I’ve worked on',
      'projects.card1.eyebrow': 'DIGITAL PRODUCT',
      'projects.card1.title': 'MyVPS',
      'projects.card1.summary': 'A core digital service for more than 100 banks and financial institutions. Product ownership across ongoing development, testing, rollout, and user training.',
      'projects.card1.tag1': 'Product ownership',
      'projects.card1.tag2': 'Financial services',
      'projects.card1.tag3': 'Enablement',
      'projects.card2.eyebrow': 'CLIENT OPERATIONS',
      'projects.card2.title': 'CRM & KPI reporting',
      'projects.card2.summary': 'CRM implementation and reporting work that brought more structure to client follow-up and a clearer view of operational performance.',
      'projects.card2.tag1': 'CRM',
      'projects.card2.tag2': 'Dashboards',
      'projects.card2.tag3': 'Process improvement',
      'projects.card3.eyebrow': 'TECHNICAL FOUNDATION',
      'projects.card3.title': 'Le Wagon',
      'projects.card3.summary': 'A six-month part-time web development course covering programming, databases, and APIs—building fluency between product and engineering.',
      'projects.card3.tag1': 'Web development',
      'projects.card3.tag2': 'Databases',
      'projects.card3.tag3': 'APIs',
      'location.label': 'Based in Moss',
      'location.meta': 'Norway · Open to meaningful work',
      'footer.before': 'Designed with inspiration from',
      'footer.after': '; further tailored by Christopher.',
      'footer.top': 'Back to top ↑'
    },
    fr: {
      'nav.about': 'À propos',
      'nav.experience': 'Expérience',
      'nav.featured': 'À l’honneur',
      'nav.projects': 'Projets',
      'nav.contact': 'Contact',
      'nav.button': 'Expérience',
      'hero.eyebrow': 'Bonjour, je m’appelle',
      'hero.role': 'Je rends les changements complexes plus faciles à intégrer.',
      'hero.copy': 'Je suis Product Owner et travaille à l’intersection des services financiers, des produits numériques et de la transformation internationale. J’aide les équipes business et tech à transformer des besoins complexes en solutions concrètes.',
      'hero.button': 'En savoir plus',
      'about.heading': 'À propos',
      'about.p1': 'Bonjour ! Je suis Christopher, Product Owner basé à Moss, en Norvège. Après plusieurs années à l’étranger, je suis revenu en Norvège et je construis une carrière durable ici.',
      'about.p2': 'Chez Euronext Securities, je participe à un programme de transformation qui harmonise les processus métier et les services numériques sur cinq marchés européens. Je me concentre sur les données clients et l’administration des comptes de titres, et je transforme les besoins métier, utilisateurs et réglementaires en exigences claires et solutions fonctionnelles.',
      'about.p3': 'J’ai également été responsable produit pour l’application web MyVPS, utilisée par des banques et institutions financières à travers le Nord et l’Europe. J’ai aussi travaillé en gestion client et opérations financières, et j’ai suivi le cours à temps partiel de Le Wagon pour approfondir ma compréhension des logiciels, bases de données et API.',
      'about.p4': 'J’aime l’espace où <strong>la compréhension du business, la technologie et la collaboration</strong> se rejoignent — et aider les équipes à transformer une direction commune en livraison fiable.',
      'about.skillsHeader': 'CE QUE J’APPORTE',
      'skill.1': 'Pilotage produit',
      'skill.2': 'Analyse métier',
      'skill.3': 'Cartographie des besoins et processus',
      'skill.4': 'Priorisation du backlog',
      'skill.5': 'Alignement des parties prenantes',
      'skill.6': 'Services financiers',
      'skill.7': 'Livraison agile',
      'skill.8': 'Jira & Confluence',
      'experience.heading': 'Où j’ai travaillé',
      'experience.tab.euronext-po': 'Euronext · Product Owner',
      'experience.tab.client-manager': 'Euronext · Gestionnaire client',
      'experience.tab.myvps': 'Euronext · Product Owner',
      'experience.tab.finance': 'Finance et opérations',
      'experience.euronext.date': '2024 — Aujourd’hui',
      'experience.euronext.location': 'Paris, France / Oslo, Norvège',
      'experience.euronext.role': 'Product Owner',
      'experience.euronext.summary': 'Je prends en charge des éléments clés du plus grand programme de transformation internationale de l’entreprise, en harmonisant les processus métier et les services numériques sur cinq marchés européens avec une plateforme IT commune.',
      'experience.euronext.li1': 'Coordonne les livrables et les avancées avec des équipes en Norvège, Danemark, Portugal, Italie et Grèce.',
      'experience.euronext.li2': 'Traduit les besoins métier, utilisateurs et réglementaires en solutions fonctionnelles pour les données clients et la gestion des comptes titres.',
      'experience.euronext.li3': 'Prépare spécifications, documentation et supports de décision avec les équipes de développement, architectes, parties prenantes métier et direction.',
      'experience.euronext.tag1': 'Transformation',
      'experience.euronext.tag2': 'Exigences',
      'experience.euronext.tag3': 'Livraison multi-pays',
      'experience.client.date': '2022 — 2024',
      'experience.client.location': 'Porto, Portugal / Oslo, Norvège',
      'experience.client.role': 'Gestionnaire client',
      'experience.client.summary': 'Contact opérationnel principal pour le plus grand client de l’entreprise, en coordonnant les équipes client, métier et IT tout en établissant une relation de travail solide.',
      'experience.client.li1': 'A piloté la mise en place d’un nouveau système CRM à Oslo.',
      'experience.client.li2': 'A développé des tableaux de bord KPI pour améliorer la prise de décision, la gestion client et l’efficacité opérationnelle.',
      'experience.client.li3': 'A consolidé son expérience en amélioration des processus et en coordination interfonctionnelle.',
      'experience.client.tag1': 'Gestion client',
      'experience.client.tag2': 'CRM',
      'experience.client.tag3': 'Reporting KPI',
      'experience.myvps.date': '2021 — 2022',
      'experience.myvps.location': 'Oslo, Norvège',
      'experience.myvps.role': 'Product Owner',
      'experience.myvps.summary': 'A piloté le développement continu de MyVPS, une application numérique clé utilisée par plus de 100 banques et institutions financières en Europe.',
      'experience.myvps.li1': 'A coordonné une équipe de développement basée en Pologne et planifié les activités produit avec les parties prenantes techniques et métier.',
      'experience.myvps.li2': 'A travaillé avec les utilisateurs sur les tests, le déploiement et la formation.',
      'experience.myvps.li3': 'A collaboré avec la conformité pour mettre en place un programme de formation et certification numérique.',
      'experience.myvps.li4': 'A terminé le cours à temps partiel de Le Wagon sur le développement web, les bases de données et les API.',
      'experience.myvps.tag1': 'MyVPS',
      'experience.myvps.tag2': 'Développement produit',
      'experience.myvps.tag3': 'Le Wagon',
      'experience.finance.date': '2017 — 2020',
      'experience.finance.location': 'Oslo, Hambourg & Vilnius',
      'experience.finance.role': 'Rôles en finance et opérations',
      'experience.finance.summary': 'A construit une base solide dans les marchés financiers, les opérations client et les processus fiables dans des environnements réglementés et internationaux.',
      'experience.finance.tag1': 'Opérations financières',
      'experience.finance.tag2': 'Marchés de capitaux',
      'experience.finance.tag3': 'Contrôles',
      'featured.heading': 'Travail en vedette',
      'featured.eyebrow': 'EURONEXT SECURITIES · TRANSFORMATION INTERNATIONALE',
      'featured.title': 'Une plateforme.<br>Cinq marchés de capitaux.',
      'featured.summary': 'Un programme multi-marchés pour harmoniser les processus métier et les services numériques au travers d’une plateforme IT commune. Mon domaine couvre les données clients et la gestion des comptes titres.',
      'featured.fact.role.label': 'RÔLE',
      'featured.fact.role.value': 'Product Owner',
      'featured.fact.collaboration.label': 'COLLABORATION',
      'featured.fact.collaboration.value': 'Cinq marchés européens',
      'featured.fact.focus.label': 'FOCUS',
      'featured.fact.focus.value': 'Des besoins à la livraison',
      'featured.link': 'En savoir plus sur l’initiative',
      'featured.visual': 'UNE<br>PLATEFORME',
      'projects.heading': 'Quelques projets sur lesquels j’ai travaillé',
      'projects.card1.eyebrow': 'PRODUIT NUMÉRIQUE',
      'projects.card1.title': 'MyVPS',
      'projects.card1.summary': 'Un service numérique central pour plus de 100 banques et institutions financières. Pilotage produit sur le développement, les tests, le déploiement et la formation utilisateur.',
      'projects.card1.tag1': 'Pilotage produit',
      'projects.card1.tag2': 'Services financiers',
      'projects.card1.tag3': 'Sensibilisation',
      'projects.card2.eyebrow': 'OPÉRATIONS CLIENT',
      'projects.card2.title': 'CRM & reporting KPI',
      'projects.card2.summary': 'Mise en place de CRM et travail de reporting qui ont apporté plus de structure au suivi client et une meilleure visibilité sur la performance opérationnelle.',
      'projects.card2.tag1': 'CRM',
      'projects.card2.tag2': 'Tableaux de bord',
      'projects.card2.tag3': 'Amélioration des processus',
      'projects.card3.eyebrow': 'FONDATION TECHNIQUE',
      'projects.card3.title': 'Le Wagon',
      'projects.card3.summary': 'Un cours à temps partiel de six mois sur le développement web, les bases de données et les API — afin de renforcer la compréhension entre produit et engineering.',
      'projects.card3.tag1': 'Développement web',
      'projects.card3.tag2': 'Bases de données',
      'projects.card3.tag3': 'API',
      'location.label': 'Basé à Moss',
      'location.meta': 'Norvège · Ouvert à des missions utiles',
      'footer.before': 'Conçu avec inspiration de',
      'footer.after': ' ; adapté en outre par Christopher.',
      'footer.top': 'Retour en haut ↑'
    },
    'pt-pt': {
      'nav.about': 'Sobre',
      'nav.experience': 'Experiência',
      'nav.featured': 'Destaque',
      'nav.projects': 'Projetos',
      'nav.contact': 'Contacto',
      'nav.button': 'Experiência',
      'hero.eyebrow': 'Olá, o meu nome é',
      'hero.role': 'Faço com que a mudança complexa seja mais fácil de navegar.',
      'hero.copy': 'Sou Product Owner e trabalho entre serviços financeiros, produtos digitais e transformação internacional. Reúno equipas de negócio e tecnologia para transformar necessidades complexas em soluções práticas.',
      'hero.button': 'Conheça-me',
      'about.heading': 'Sobre',
      'about.p1': 'Olá! Sou o Christopher, Product Owner com base em Moss, Noruega. Depois de vários anos no estrangeiro, regressei à Noruega e estou a construir uma carreira de longo prazo aqui.',
      'about.p2': 'Na Euronext Securities, faço parte de um programa de transformação que harmoniza processos de negócio e serviços digitais em cinco mercados europeus. Foco-me nos dados de clientes e na administração de contas de valores mobiliários, convertendo necessidades de negócio, utilizadores e regulamentação em requisitos claros e soluções funcionais.',
      'about.p3': 'Anteriormente, tive responsabilidades de Product Owner na aplicação web MyVPS, utilizada por bancos e instituições financeiras em toda a Europa e nos países nórdicos. Também trabalhei em gestão de clientes e operações financeiras, e completei o curso a tempo parcial da Le Wagon para aprofundar a minha compreensão de software, bases de dados e APIs.',
      'about.p4': 'Gosto do espaço onde <strong>a compreensão do negócio, a tecnologia e a colaboração</strong> se encontram — e de ajudar equipas a transformar uma direção partilhada numa entrega confiável.',
      'about.skillsHeader': 'ALGUMAS COISAS QUE TRAGO',
      'skill.1': 'Responsabilidade de produto',
      'skill.2': 'Análise de negócio',
      'skill.3': 'Mapeamento de requisitos e processos',
      'skill.4': 'Priorização do backlog',
      'skill.5': 'Alinhamento de stakeholders',
      'skill.6': 'Serviços financeiros',
      'skill.7': 'Entrega ágil',
      'skill.8': 'Jira & Confluence',
      'experience.heading': 'Onde trabalhei',
      'experience.tab.euronext-po': 'Euronext · Product Owner',
      'experience.tab.client-manager': 'Euronext · Gestor de clientes',
      'experience.tab.myvps': 'Euronext · Product Owner',
      'experience.tab.finance': 'Finanças e operações',
      'experience.euronext.date': '2024 — Presente',
      'experience.euronext.location': 'Paris, França / Oslo, Noruega',
      'experience.euronext.role': 'Product Owner',
      'experience.euronext.summary': 'Estou a liderar trabalho essencial no maior programa de transformação internacional da empresa, harmonizando processos de negócio e serviços digitais em cinco mercados europeus através de uma plataforma tecnológica partilhada.',
      'experience.euronext.li1': 'Coordeno entregas e progresso entre equipas na Noruega, Dinamarca, Portugal, Itália e Grécia.',
      'experience.euronext.li2': 'Traduzo necessidades de negócio, utilizadores e regulamentação em soluções funcionais para dados de clientes e administração de contas de valores mobiliários.',
      'experience.euronext.li3': 'Preparo especificações, documentação e materiais de decisão com equipas de desenvolvimento, arquitetos, stakeholders de negócio e gestão.',
      'experience.euronext.tag1': 'Transformação',
      'experience.euronext.tag2': 'Requisitos',
      'experience.euronext.tag3': 'Entrega multi-mercado',
      'experience.client.date': '2022 — 2024',
      'experience.client.location': 'Porto, Portugal / Oslo, Noruega',
      'experience.client.role': 'Gestor de clientes',
      'experience.client.summary': 'Contacto operacional principal para o maior cliente da empresa, coordenando trabalho entre equipas de cliente, negócio e IT enquanto construía uma relação forte de trabalho.',
      'experience.client.li1': 'Liderei a implementação de um novo sistema CRM em Oslo.',
      'experience.client.li2': 'Desenvolvi dashboards de KPI e reporting para melhorar a tomada de decisão, a gestão de clientes e a eficiência operacional.',
      'experience.client.li3': 'Construí experiência em melhoria de processos e coordenação transversal com stakeholders.',
      'experience.client.tag1': 'Gestão de clientes',
      'experience.client.tag2': 'CRM',
      'experience.client.tag3': 'Reporting KPI',
      'experience.myvps.date': '2021 — 2022',
      'experience.myvps.location': 'Oslo, Noruega',
      'experience.myvps.role': 'Product Owner',
      'experience.myvps.summary': 'Foi responsável pelo desenvolvimento contínuo do MyVPS, uma aplicação digital essencial utilizada por mais de 100 bancos e instituições financeiras em toda a Europa.',
      'experience.myvps.li1': 'Coordenei uma equipa de desenvolvimento na Polónia e planeei atividades de produto com stakeholders técnicos e de negócio.',
      'experience.myvps.li2': 'Trabalhei com utilizadores em testes, rollout e formação.',
      'experience.myvps.li3': 'Colaborei com a Compliance para estabelecer um programa digital de formação e certificação.',
      'experience.myvps.li4': 'Completei o curso a tempo parcial da Le Wagon em desenvolvimento web, bases de dados e APIs.',
      'experience.myvps.tag1': 'MyVPS',
      'experience.myvps.tag2': 'Desenvolvimento de produto',
      'experience.myvps.tag3': 'Le Wagon',
      'experience.finance.date': '2017 — 2020',
      'experience.finance.location': 'Oslo, Hamburgo & Vilnius',
      'experience.finance.role': 'Funções de finanças e operações',
      'experience.finance.summary': 'Construi uma base prática em mercados financeiros, operações com clientes e processos fiáveis em ambientes regulados e internacionais.',
      'experience.finance.tag1': 'Operações financeiras',
      'experience.finance.tag2': 'Mercados de capitais',
      'experience.finance.tag3': 'Controlo',
      'featured.heading': 'Trabalho em destaque',
      'featured.eyebrow': 'EURONEXT SECURITIES · TRANSFORMAÇÃO INTERNACIONAL',
      'featured.title': 'Uma plataforma.<br>Cinco mercados de capitais.',
      'featured.summary': 'Um programa multi-mercado para harmonizar processos de negócio e serviços digitais numa plataforma IT partilhada. A minha área cobre dados de clientes e administração de contas de valores mobiliários.',
      'featured.fact.role.label': 'FUNÇÃO',
      'featured.fact.role.value': 'Product Owner',
      'featured.fact.collaboration.label': 'COLABORAÇÃO',
      'featured.fact.collaboration.value': 'Cinco mercados europeus',
      'featured.fact.focus.label': 'FOCO',
      'featured.fact.focus.value': 'Dos requisitos à entrega',
      'featured.link': 'Saiba mais sobre a iniciativa',
      'featured.visual': 'UMA<br>PLATAFORMA',
      'projects.heading': 'Algumas coisas em que trabalhei',
      'projects.card1.eyebrow': 'PRODUTO DIGITAL',
      'projects.card1.title': 'MyVPS',
      'projects.card1.summary': 'Um serviço digital central para mais de 100 bancos e instituições financeiras. Responsabilidade de produto ao longo do desenvolvimento, testes, rollout e formação dos utilizadores.',
      'projects.card1.tag1': 'Responsabilidade de produto',
      'projects.card1.tag2': 'Serviços financeiros',
      'projects.card1.tag3': 'Capacitação',
      'projects.card2.eyebrow': 'OPERAÇÕES CLIENTE',
      'projects.card2.title': 'CRM & reporting KPI',
      'projects.card2.summary': 'Implementação de CRM e trabalho de reporting que trouxe mais estrutura ao acompanhamento de clientes e uma visão mais clara do desempenho operacional.',
      'projects.card2.tag1': 'CRM',
      'projects.card2.tag2': 'Dashboards',
      'projects.card2.tag3': 'Melhoria de processos',
      'projects.card3.eyebrow': 'FUNDAÇÃO TÉCNICA',
      'projects.card3.title': 'Le Wagon',
      'projects.card3.summary': 'Um curso a tempo parcial de seis meses em desenvolvimento web, cobrindo programação, bases de dados e APIs — construindo fluidez entre produto e engenharia.',
      'projects.card3.tag1': 'Desenvolvimento web',
      'projects.card3.tag2': 'Bases de dados',
      'projects.card3.tag3': 'APIs',
      'location.label': 'Baseado em Moss',
      'location.meta': 'Noruega · Aberto a trabalho com sentido',
      'footer.before': 'Desenhado com inspiração em',
      'footer.after': '; adaptado adicionalmente por Christopher.',
      'footer.top': 'Voltar ao topo ↑'
    }
  };

  const languageSwitchers = [...document.querySelectorAll('.language-switcher')];

  const detectLanguage = () => {
    const browserLanguage = navigator.language || navigator.languages?.[0] || 'nb';
    if (browserLanguage.toLowerCase().startsWith('fr')) return 'fr';
    if (browserLanguage.toLowerCase().startsWith('pt')) return 'pt-pt';
    if (browserLanguage.toLowerCase().startsWith('en')) return 'en';
    return 'nb';
  };

  const getStoredLanguage = () => {
    const saved = window.localStorage.getItem('preferred-language');
    if (saved && translations[saved]) return saved;
    return detectLanguage();
  };

  let currentLanguage = getStoredLanguage();

  const updateLanguageButton = () => {
    const shortLabel = currentLanguage === 'nb' ? 'NO' : currentLanguage === 'en' ? 'EN' : currentLanguage === 'fr' ? 'FR' : 'PT';
    languageSwitchers.forEach((switcher) => {
      const current = switcher.querySelector('.language-current');
      if (current) current.textContent = shortLabel;
    });
    document.documentElement.lang = currentLanguage === 'pt-pt' ? 'pt-PT' : currentLanguage;
  };

  const applyTranslations = () => {
    const locale = translations[currentLanguage] || translations.nb;

    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      const translation = locale[key];
      if (!translation) return;

      if (element.dataset.i18nHtml === 'true') {
        element.innerHTML = translation;
      } else {
        element.textContent = translation;
      }
    });

    languageSwitchers.forEach((switcher) => {
      const options = [...switcher.querySelectorAll('.language-option')];
      options.forEach((option) => {
        const active = option.dataset.lang === currentLanguage;
        option.classList.toggle('active', active);
        option.setAttribute('aria-checked', String(active));
      });
    });

    updateLanguageButton();
  };

  const closeLanguageMenu = (switcher) => {
    switcher?.classList.remove('open');
    const button = switcher?.querySelector('.language-button');
    button?.setAttribute('aria-expanded', 'false');
  };

  languageSwitchers.forEach((switcher) => {
    const button = switcher.querySelector('.language-button');
    const options = [...switcher.querySelectorAll('.language-option')];

    button?.addEventListener('click', (event) => {
      event.stopPropagation();
      const open = !switcher.classList.contains('open');
      languageSwitchers.forEach((item) => closeLanguageMenu(item));
      switcher.classList.toggle('open', open);
      button.setAttribute('aria-expanded', String(open));
    });

    options.forEach((option) => {
      option.addEventListener('click', () => {
        currentLanguage = option.dataset.lang;
        window.localStorage.setItem('preferred-language', currentLanguage);
        applyTranslations();
        languageSwitchers.forEach((item) => closeLanguageMenu(item));
      });
    });

    document.addEventListener('click', (event) => {
      if (!switcher.contains(event.target)) closeLanguageMenu(switcher);
    });
  });

  const header = document.querySelector('.site-header');
  const menuButton = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('.site-nav');

  const setMenuOpen = (open) => {
    menuButton?.setAttribute('aria-expanded', String(open));
    menuButton?.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    navigation?.classList.toggle('open', open);
    body.classList.toggle('menu-open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  };

  menuButton?.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });
  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setMenuOpen(false));
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      closeLanguageMenu();
    }
  });

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const tabs = [...document.querySelectorAll('.experience-tab')];
  const activateTab = (tab, focus = false) => {
    tabs.forEach((item) => {
      const selected = item === tab;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-selected', String(selected));
      item.tabIndex = selected ? 0 : -1;
      const panel = document.getElementById(item.getAttribute('aria-controls'));
      if (panel) {
        panel.hidden = !selected;
        panel.classList.toggle('active', selected);
      }
    });
    if (focus) tab.focus();
  };

  tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => activateTab(tab));
    tab.addEventListener('keydown', (event) => {
      let nextIndex = index;
      if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (index + 1) % tabs.length;
      else if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (index - 1 + tabs.length) % tabs.length;
      else if (event.key === 'Home') nextIndex = 0;
      else if (event.key === 'End') nextIndex = tabs.length - 1;
      else return;
      event.preventDefault();
      activateTab(tabs[nextIndex], true);
    });
  });

  applyTranslations();

  const revealItems = document.querySelectorAll('.reveal, .section-heading, .about-grid, .experience-layout, .featured-card, .project-card');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          currentObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' });
    revealItems.forEach((item) => {
      item.classList.add('reveal-on-scroll');
      observer.observe(item);
    });
  } else {
    revealItems.forEach((item) => item.classList.add('visible'));
  }
})();
