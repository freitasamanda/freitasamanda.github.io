export type ProjectCategory = 'all' | 'machine-learning' | 'academia';

export interface ProjectHighlight {
  label: string;
  detail: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  shortTitle: string;
  category: Exclude<ProjectCategory, 'all'>;
  categoryLabel: string;
  year: string;
  summary: string;
  description: string[];
  highlights?: ProjectHighlight[];
  tags: string[];
  image: string;
  imageAlt: string;
  href?: string;
  actionLabel: string;
  isPublicationsCard?: boolean;
}

export interface CapabilityItem {
  index: string;
  title: string;
  description: string;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface ExperienceLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  role: string;
  period: string;
  company?: string;
  companyHref?: string;
  description?: string;
  extraLinks?: ExperienceLink[];
  certificateLinks?: ExperienceLink[];
}

export type PublicationType = 'all' | 'artigo' | 'congresso' | 'ensaio';

export interface PublicationItem {
  id: string;
  year: string;
  venue: string;
  type: Exclude<PublicationType, 'all'>;
  citation: string;
  details: string;
  externalUrl?: string;
  pdfUrl?: string;
}

export const SITE_BASE_URL = 'https://freitasamanda.github.io';

export const HERO_HIGHLIGHTS = [
  {
    value: 'Quaest',
    label: 'Analista Pleno de Inteligência de Mercado',
  },
  {
    value: '6M+',
    label: 'Tweets coletados e analisados no Mestrado (USP)',
  },
  {
    value: 'Google AI',
    label: 'Certified — Generative AI Leader (2026)',
  },
  {
    value: 'ABCP',
    label: 'Prêmio Mário Fuks — Comportamento Político',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'rendimento-academico',
    title: 'Rendimento Acadêmico e Inclusão',
    shortTitle: 'Rendimento Acadêmico',
    category: 'machine-learning',
    categoryLabel: 'Machine Learning · Políticas Públicas',
    year: '2025',
    summary:
      'Random Forest e clusterização aplicados a Políticas Públicas de Educação para identificar perfis prioritários de permanência estudantil.',
    description: [
      'Random Forest e Clusterização aplicada a Políticas Públicas de Educação. Este estudo identifica quais segmentos de alunos devem ser endereçados com políticas de permanência para aumentar o rendimento acadêmico, a partir do dataset Student Final Grade Prediction (SES Data) do Kaggle, analisado em Python.',
      'Os resultados são apresentados em um relatório executivo para gestores públicos e em um relatório técnico com discussões de Machine Learning.',
    ],
    highlights: [
      {
        label: 'Modelagem Preditiva',
        detail: 'Classificação e importância de variáveis com Random Forest em Python.',
      },
      {
        label: 'Segmentação Socioeconômica',
        detail: 'Clusterização para priorização de políticas públicas de permanência escolar.',
      },
      {
        label: 'Comunicação Executiva',
        detail: 'Entregável duplo: sumário executivo para tomadores de decisão e relatório técnico.',
      },
    ],
    tags: ['Python', 'Machine Learning', 'Random Forest', 'Políticas Públicas'],
    image: '/assets/portfolio/school_project.jpg',
    imageAlt: 'Visualização de dados de rendimento acadêmico de alunos',
    href: 'https://freitasamanda.github.io/students_grades_random_forest_project/',
    actionLabel: 'Abrir projeto',
  },
  {
    id: 'lol-tilt-detector',
    title: 'Lol Tilt Detector',
    shortTitle: 'Lol Tilt Detector',
    category: 'machine-learning',
    categoryLabel: 'Data Science · Produto Interativo',
    year: '2025',
    summary:
      'Arquitetura de Data Science de ponta a ponta com Riot API e LightGBM que prevê a probabilidade de tilt e sugere pausas em interface 8-bit.',
    description: [
      "Este projeto prevê a probabilidade de o jogador de League of Legends estar 'tiltado', isto é, extremamente frustrado e irritado após uma sequência de jogos ruins, sugerindo uma pausa com uma interface agradável e calma.",
      'Resolve esse problema e ajuda o jogador a relaxar com uma arquitetura de Data Science de ponta a ponta:',
    ],
    highlights: [
      {
        label: 'Engenharia de Dados & Coleta em Grafo (BFS)',
        detail:
          'Extrai telemetria detalhada via Riot API (Account-v1, League-v4 e Match-v5) com controle resiliente de Rate Limit (HTTP 429).',
      },
      {
        label: 'Atributos Temporais sem Data Leakage',
        detail:
          'Segmenta o histórico em sessões contínuas (Δt ≤ 15 min), calcula baselines individuais expansivas e sintetiza janelas móveis (t−3, t−2, t−1 → t).',
      },
      {
        label: 'Modelagem & Validação Agrupada (GroupKFold)',
        detail:
          'Treina um classificador LightGBM regularizado garantindo que partidas de um mesmo invocador nunca vazem entre treino e validação.',
      },
      {
        label: 'Produto Interativo em Estética 8-Bit',
        detail:
          "Quando o risco de tilt ultrapassa o limiar configurado, o webapp transita automaticamente de Summoner's Rift para uma floresta relaxante em pixel art com áudio ambiente.",
      },
    ],
    tags: ['Python', 'Machine Learning', 'LightGBM', 'Riot API', 'Streamlit'],
    image: '/assets/portfolio/lol_tilt_detector.png',
    imageAlt: 'Interface em estética 8-bit do Lol Tilt Detector',
    href: 'https://github.com/freitasamanda/lol-tilt-detector',
    actionLabel: 'Ver no GitHub',
  },
  {
    id: 'producao-intelectual',
    title: 'Produção Intelectual e Acadêmica',
    shortTitle: 'Produção Acadêmica',
    category: 'academia',
    categoryLabel: 'Ciência Política · Publicações',
    year: '2020 – 2024',
    summary:
      'Artigos em periódicos científicos, apresentações na ANPOCS e conferências internacionais sobre desinformação, bots e comportamento político.',
    description: [
      'Artigos em revistas científicas, apresentações em congressos nacionais e internacionais e trabalhos acadêmicos nas áreas de Ciência Política, Ciências Sociais Computacionais, desinformação e comportamento político.',
      'Publicações em veículos como Compolítica, Perspectivas Sociais e Confluências, além de apresentações na ANPOCS e conferências internacionais.',
    ],
    highlights: [
      {
        label: 'Periódicos Científicos',
        detail: 'Artigos publicados na Revista Perspectivas Sociais, Compolítica e Confluências.',
      },
      {
        label: 'Congressos & Conferências',
        detail: 'ANPOCS (Ciências Sociais Computacionais), SMUS / RC33 e Congresso Acadêmico UNIFESP.',
      },
      {
        label: 'Agenda de Pesquisa',
        detail: 'Bots em redes sociais, populismo, desinformação eleitoral e análise de redes.',
      },
    ],
    tags: ['Ciência Política', 'Desinformação', 'Redes Sociais', 'Publicações'],
    image: '/assets/portfolio/producao_intelectual_cover.jpg',
    imageAlt: 'Pessoa digitando num notebook, representando produção acadêmica',
    href: 'https://freitasamanda.github.io/producao-intelectual.html',
    actionLabel: 'Explorar publicações',
    isPublicationsCard: true,
  },
];

export const CAPABILITIES: CapabilityItem[] = [
  {
    index: '01',
    title: 'Inteligência de Mercado',
    description:
      'Analiso dados para reconhecer o contexto da marca e traçar recomendações estratégicas de posicionamento, Brand Safety, Reputação e Comunicação.',
  },
  {
    index: '02',
    title: 'Análise de Dados & BI',
    description:
      'Manipulação, limpeza e visualização de dados para relatórios estratégicos utilizando R, Python, SQL e Excel Avançados.',
  },
  {
    index: '03',
    title: 'Social Listening & Monitoramento',
    description:
      'Extração de insights a partir de ferramentas de monitoramento digital como Netbase, Stilingue, Brandwatch, Fanpage e similares.',
  },
  {
    index: '04',
    title: 'Cloud & Inteligência Artificial',
    description:
      'Google Certified como Generative AI Leader, articulo a adoção estratégica de tecnologias de Cloud e GenAI em organizações.',
  },
  {
    index: '05',
    title: 'Gestão de Projetos',
    description:
      'Organização de fluxos de trabalho, acompanhamento de entregas e coordenação de squads com metodologias ágeis.',
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Dados & Programação',
    items: ['Python', 'R', 'SQL', 'Excel Avançado', 'Machine Learning', 'BI & Dashboards'],
  },
  {
    category: 'Social Listening & Reputação',
    items: ['Social Listening', 'Brandwatch', 'Netbase / Stilingue', 'Brand Safety'],
  },
  {
    category: 'Redes, Coleta & Infraestrutura',
    items: ['Análise de Redes', 'Gephi', 'Web Scraping', 'ElasticSearch'],
  },
  {
    category: 'Cloud, IA & Gestão',
    items: ['Google Cloud', 'Generative AI', 'Metodologias Ágeis'],
  },
];

export const WORK_EXPERIENCE: ExperienceItem[] = [
  {
    role: 'Analista de Inteligência de Mercado Pleno',
    period: '2025 – Presente',
    company: 'Quaest Consultoria & Pesquisa',
    companyHref: 'https://quaest.com.br',
    description:
      'Lidero o monitoramento de grandes marcas por meio de métodos quantitativos, qualitativos e análise de dados digitais, tecendo insights acionáveis para orientar estratégias de marca, comunicação e gerenciamento de riscos. Apoio no desenvolvimento técnico de estagiários e colaboro com a equipe de Ciência de Dados por metodologias ágeis.',
  },
  {
    role: 'Analista de Inteligência de Mercado Jr.',
    period: '2024 – 2025',
    company: 'Quaest Consultoria & Pesquisa',
    companyHref: 'https://quaest.com.br',
  },
  {
    role: 'Analista de Inteligência e Digital Insights',
    period: '2024',
    company: 'Quaest Consultoria & Pesquisa',
    companyHref: 'https://quaest.com.br',
    description:
      'Conduzi análises com dados de redes sociais e dados do ambiente digital, quantitativos e qualitativos para marcas e atores políticos durante campanhas eleitorais; construí relatórios e dashboards para monitoramento contínuo em episódios de crises reputacionais.',
  },
  {
    role: 'Pesquisadora em nível de Mestrado',
    period: '2022 – 2024',
    company: 'Universidade de São Paulo (USP)',
    companyHref: 'https://dcp.fflch.usp.br',
    description:
      'Coletei e analisei mais de 6 milhões de tweets em R e Python durante as eleições presidenciais de 2022, aplicando análise de redes sociais com Gephi e ElasticSearch, detecção de bots com Botometer e análise automatizada de conteúdo.',
  },
  {
    role: 'Estagiária de Professora Assistente — Sistemas Eleitorais e Partidários',
    period: '2023',
    company: 'Universidade de São Paulo (USP)',
    companyHref: 'https://dcp.fflch.usp.br',
    description:
      'Auxiliei no planejamento de aulas e avaliações com bolsa do Programa de Aperfeiçoamento de Ensino (PAE-USP).',
    extraLinks: [
      {
        label: 'PAE-USP',
        href: 'https://prpg.usp.br/pt-br/pae/o-que-pae',
      },
    ],
  },
  {
    role: 'Professora particular de Inglês e Português',
    period: '2016 – 2019',
    company: 'Freelancer',
    description:
      'Preparatório para vestibular, reforço escolar, aulas de redação, gramática inglesa e portuguesa e literatura luso-brasileira.',
  },
  {
    role: 'Creator / Social Media',
    period: '2015 – 2022',
    company: 'Freelancer',
    description:
      'Hostess de podcast, colunista e criadora de conteúdo em portais sobre tecnologia e política.',
    extraLinks: [
      { label: 'Sociedade Pinguim', href: 'https://www.instagram.com/sociedadepinguim/' },
      { label: 'Clio Operária', href: 'https://www.instagram.com/cliooperaria/' },
      { label: 'Lavra Palavra', href: 'https://lavrapalavra.com' },
      { label: 'Ubuntu Diário', href: 'https://www.instagram.com/ubuntudiario/' },
      { label: 'Enciclopédia Materna', href: 'https://www.enciclopediamaterna.com.br' },
    ],
  },
];

export const EDUCATION_AND_CERTS: ExperienceItem[] = [
  {
    role: 'Google AI Certified — Generative AI Leader',
    period: '2026',
    company: 'Google Cloud',
    description: 'Credencial e badge oficial verificáveis online.',
    certificateLinks: [
      {
        label: 'Ver credencial',
        href: 'https://www.credly.com/badges/12e65c34-a6c9-4212-8b76-711de945dcc8/linked_in_profile',
      },
    ],
  },
  {
    role: 'Mestrado em Ciência Política',
    period: '2022',
    company: 'Universidade de São Paulo (USP)',
    description:
      'Dissertação: Polarização política e desinformação em períodos eleitorais: um mapeamento das eleições presidenciais de 2022 a partir do Twitter. Bolsista CNPq.',
  },
  {
    role: 'Bacharelado em Ciências Sociais',
    period: '2019',
    company: 'Universidade Federal de São Paulo (UNIFESP)',
    description:
      'Monografia: Nova Política? O impacto eleitoral das novas tecnologias de informação e comunicação. Prêmio Mário Fuks de Comportamento Político e Opinião Pública — ABCP.',
    certificateLinks: [
      {
        label: 'Certificado ABCP',
        href: `${SITE_BASE_URL}/files/certificates/Prêmio_ABCP_2021.jpg`,
      },
    ],
  },
  {
    role: 'Tecnólogo em Produção e Gestão de Mídias Sociais',
    period: '2017',
    company: 'Universidade Anhembi Morumbi',
  },
  {
    role: 'Idiomas: Inglês, Espanhol e Alemão',
    period: 'C1 / A2 / A1',
    description:
      'Cambridge Advanced English CAE — C1; Alemão A2 (Centro Britânico/Cultura Inglesa, 2015–2017); Espanhol A1.',
    certificateLinks: [
      {
        label: 'Certificado Cambridge CAE',
        href: `${SITE_BASE_URL}/files/certificates/cambridge.pdf`,
      },
    ],
  },
  {
    role: 'Outros Cursos & Certificados',
    period: '2020 – 2023',
    description:
      'Survey Methods for Social Sciences — USP Summer School (2023); Introdução à Programação e Web Development — Minas Programam; Análise de Redes com SocNetV e Gephi — CEBRAP.Lab; Ciência de Dados em R e Python — Udemy (2020, 50h); R e Ciência de Dados para Ciência Política — USP (2022, 64h); Web Scraping com Python e R — UFPA (2021).',
    certificateLinks: [
      {
        label: 'USP Summer School',
        href: `${SITE_BASE_URL}/files/certificates/summer_school_amanda.pdf`,
      },
      {
        label: 'CEBRAP.Lab',
        href: `${SITE_BASE_URL}/files/certificates/Curso_CEBRAPLAB_2021.pdf`,
      },
      {
        label: 'Minas Programam',
        href: 'https://minasprogramam.com/',
      },
    ],
  },
];

export const PUBLICATIONS: PublicationItem[] = [
  {
    id: 'pub-2024-perspectivas',
    year: '2024',
    venue: 'Revista Perspectivas Sociais',
    type: 'artigo',
    citation:
      'FREITAS, A. (2024). Bots em Redes Sociais: desafios teóricos e consequências para as ciências sociais.',
    details: 'Revista Perspectivas Sociais, v. 9, n. 02.',
    externalUrl: 'https://periodicos.ufpel.edu.br/index.php/percsoc/article/view/26611',
    pdfUrl: `${SITE_BASE_URL}/files/publications/perspectivas_sociais_Amanda_Freitas.pdf`,
  },
  {
    id: 'pub-2023-compolitica',
    year: '2023',
    venue: 'Compolítica',
    type: 'artigo',
    citation:
      'FREITAS, A., VIEIRA, B. M., RASQUEL, S. G. (2023). O populismo e a desinformação nos tweets de Bolsonaro: Uma análise interdisciplinar.',
    details: 'Compolítica, 13(1), 31–56.',
    externalUrl: 'https://doi.org/10.21878/compolitica.2023.13.1.657',
    pdfUrl: `${SITE_BASE_URL}/files/publications/compolitica_Amanda_Freitas.pdf`,
  },
  {
    id: 'pub-2022-anpocs',
    year: '2022',
    venue: 'ANPOCS',
    type: 'congresso',
    citation:
      'FREITAS, A. (2022). Análise de Redes Sociais e Ciências Sociais: Um mapeamento da produção brasileira.',
    details:
      'Encontro Anual da ANPOCS — ST Ciências Sociais Computacionais (46., 2022: Campinas, SP), p. 1–20.',
    externalUrl:
      'https://biblioteca.sophia.com.br/terminal/9666/acervo/detalhe/658?guid=1718110412350&returnUrl=%2Fterminal%2F9666%2Fresultado%2Flistar%3Fguid%3D1718110412350%26quantidadePaginas%3D1%26codigoRegistro%3D658%23658&i=1',
  },
  {
    id: 'pub-2022-smus',
    year: '2022',
    venue: 'SMUS / RC33',
    type: 'congresso',
    citation:
      'FREITAS, A. (2022). Bots on Social Media: Theoretical and Methodological Challenges for the Field of Political Behavior and Communication.',
    details:
      'In: Abstracts Booklet for 2nd SMUS Conference and 1st RC33 Regional Conference "Latin America: Brazil", São Paulo.',
    pdfUrl: `${SITE_BASE_URL}/files/publications/SMUSBrazil_AbstractsBooklet.pdf`,
  },
  {
    id: 'pub-2021-confluencias',
    year: '2021',
    venue: 'Confluências',
    type: 'artigo',
    citation:
      'SCHLEGEL, R.; FREITAS, A. (2021). Fake News e suas abordagens no Brasil: Balanço de uma agenda de pesquisa em formação.',
    details: 'Confluências Revista Interdisciplinar de Sociologia e Direito, 23(3), 204–228.',
    externalUrl: 'https://doi.org/10.22409/conflu.v23i3.44497',
    pdfUrl: `${SITE_BASE_URL}/files/publications/confluencias.pdf`,
  },
  {
    id: 'pub-2021-simposio',
    year: '2021',
    venue: 'Simpósio de Educação Sexual',
    type: 'congresso',
    citation:
      'RODRIGUES, M.; FREITAS, A.; CORREIA, K. (2021). Direitos Reprodutivos e sexuais das mulheres: o estatuto do nascituro e o controle sobre os corpos femininos.',
    details: 'In: Anais do VII Simpósio de Educação Sexual, Maringá.',
    pdfUrl: `${SITE_BASE_URL}/files/publications/2021_direitos_reprodutivos.pdf`,
  },
  {
    id: 'pub-2020-tcc',
    year: '2020',
    venue: 'UNIFESP (TCC)',
    type: 'congresso',
    citation:
      'FREITAS, A. (2020). Nova Política? O impacto eleitoral das novas tecnologias de informação e comunicação (TICs).',
    details: 'Trabalho de Conclusão de Curso. Repositório UNIFESP.',
    externalUrl: 'https://repositorio.unifesp.br/handle/11600/61826',
    pdfUrl: `${SITE_BASE_URL}/files/publications/TCC_Amanda_Freitas.pdf`,
  },
  {
    id: 'pub-2020-congresso-unifesp',
    year: '2020',
    venue: 'Congresso Acadêmico UNIFESP',
    type: 'congresso',
    citation:
      'FREITAS, A. (2020). Nova Política? O impacto eleitoral das novas tecnologias de informação e comunicação.',
    details: 'In: Anais do VI Congresso Acadêmico Unifesp, São Paulo, p. 1150–1151.',
    externalUrl: 'https://repositorio.unifesp.br/handle/11600/58731',
  },
  {
    id: 'pub-2020-lavra-capital',
    year: '2020',
    venue: 'Portal Lavra Palavra',
    type: 'ensaio',
    citation:
      'FREITAS, A. (2020). Reestruturação produtiva do capital: formas contemporâneas de exploração da classe trabalhadora.',
    details: 'Portal Lavra Palavra.',
    externalUrl:
      'https://lavrapalavra.com/2020/02/28/reestruturacao-produtiva-do-capital-formas-contemporaneas-de-exploracao-da-classe-trabalhadora/',
    pdfUrl: `${SITE_BASE_URL}/files/publications/amanda_freitas_Reestruturacao_produtiva.pdf`,
  },
  {
    id: 'pub-2020-lavra-weber',
    year: '2020',
    venue: 'Portal Lavra Palavra',
    type: 'ensaio',
    citation: 'FREITAS, A. (2020). Weber: A ética protestante e o espírito do capitalismo.',
    details: 'Portal Lavra Palavra.',
    pdfUrl: `${SITE_BASE_URL}/files/publications/amanda_freitas_weber.pdf`,
  },
];

export const CONTACT_LINKS = {
  email: 'freitas.com6@gmail.com.br',
  linkedin: 'https://www.linkedin.com/in/freitas-amanda/',
  github: 'https://github.com/freitasamanda',
  lattes: 'http://lattes.cnpq.br/1148124654034566',
  website: 'https://freitasamanda.github.io',
};
