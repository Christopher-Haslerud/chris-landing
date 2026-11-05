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
      'hero.role': 'Jeg gjør kompleks endring enklere å navigere.',
      'hero.copy': 'Jeg er en Product Owner som jobber på tvers av finans, digitale produkter og internasjonale transformasjoner. Jeg knytter sammen forretnings- og teknologi-team for å gjøre komplekse behov om til praktiske løsninger.',
      'hero.button': 'Lær meg å kjenne',
      'about.heading': 'Om meg',
      'about.p1': 'Hei! Jeg er Christopher, en Product Owner basert i Moss, Norge. Etter flere år i utlandet er jeg tilbake i Norge og bygger en langsiktig karriere her.',
      'about.p2': 'Hos Euronext Securities er jeg en del av et transformasjonsprogram som harmoniserer forretningsprosesser og digitale tjenester på tvers av fem europeiske markeder. Jeg fokuserer på klientmasterdata og verdipapirkontoadminstrasjon, og oversetter forretnings-, bruker- og regulatoriske behov til klare krav og funksjonelle løsninger.',
      'about.p3': 'Tidligere har jeg hatt produktansvar for MyVPS-webapplikasjonen, som brukes av banker og finansinstitusjoner i Norden og Europa. Jeg har også jobbet med klientforvaltning, finansielle operasjoner og fullført Le Wagons deltidkurs i webutvikling for å dykke dypere inn i programvare, databaser og API-er.',
      'about.p4': 'Jeg trives der hvor <strong>forretningsforståelse, teknologi og samarbeid</strong> møtes – og der jeg kan hjelpe team å gjøre en felles retning om til pålitelig levering.',
      'about.skillsHeader': 'NOE JEG BRINGER',
      'skill.1': 'Produktansvar',
      'skill.2': 'Forretningsanalyse',
      'skill.3': 'Krav og prosesskartlegging',
      'skill.4': 'Prioritering av backlog',
      'skill.5': 'Samarbeid med interessenter',
      'skill.6': 'Finansielle tjenester',
      'skill.7': 'Smidig levering',
      'skill.8': 'Jira & Confluence',
      'location.label': 'Basert i Moss',
      'location.meta': 'Norge · Åpen for meningsfullt arbeid',
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
