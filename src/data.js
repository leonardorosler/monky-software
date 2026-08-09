export const siteConfig = {
  name: 'Monky Software',
  location: 'Pelotas - RS',
  email: '',
  whatsapp: '5553999882722',
  socialLinks: {
    instagram: '',
    github: '',
    linkedin: '',
  },
}

export const projectMockupGuidelines = {
  canvas: {
    width: 1920,
    height: 1280,
    ratio: '3:2',
  },
  safeArea: {
    x: 120,
    y: 96,
    width: 1680,
    height: 1088,
  },
  note:
    'Use sempre o mesmo quadro 1920x1280 no Canva, com laptop e celular juntos dentro da área segura. Exporte em PNG ou WebP.',
}

export const heroSlides = [
  {
    image: '/mockups/barbearia-king/king-mob-desk.png',
    title: 'Monky Barber',
    label: 'Agenda e equipe',
  },
  {
    image: '/mockups/rd-veiculos/rd-mob-desk.png',
    title: 'RD Veículos',
    label: 'Catálogo comercial',
  },
  {
    image: '/mockup-veiculos.png',
    title: 'Monky Veículos',
    label: 'Gestão comercial',
  },
]

export const projects = [
  {
    id: 'monky-barber',
    title: 'Operação mais organizada',
    category: 'Monky Barber',
    description:
      'Agenda, equipe e clientes em um fluxo mais simples para reduzir controle manual.',
    challenge:
      'Reduzir agenda manual, conflito de horário, falhas no controle de profissionais e perda de visão sobre a rotina da barbearia.',
    focus:
      'Transformar agendamento, equipe e recorrência em uma operação simples para o dono acompanhar.',
    result:
      'Mais previsibilidade no atendimento e menos tempo perdido com controles espalhados.',
    valuePoints: ['Agenda previsível', 'Equipe organizada', 'Menos retrabalho'],
    visualTagline: 'Rotina mais clara para dono, equipe e cliente.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: '/mockups/barbearia-king/king-mob-desk.png',
    screens: [
      {
        image: '/mockups/barbearia-king/king-mob-desk.png',
        label: 'Operação',
        description: 'Agenda, próximos horários e rotina da barbearia em uma visão clara.',
      },
      {
        image: '/mockups/barbearia-king/king-mob.png',
        label: 'Mobile',
        description: 'Fluxo pensado para cliente e barbeiro usarem sem fricção.',
      },
      {
        image: '/mockup-king.png',
        label: 'Gestão',
        description: 'Controle de profissionais, serviços e disponibilidade.',
      },
    ],
    projectUrl: '',
    repositoryUrl: '',
    status: 'Em evolução',
  },
  {
    id: 'rd-veiculos',
    title: 'Venda com apresentação melhor',
    category: 'Monky Veiculos',
    description:
      'Uma vitrine clara para apresentar produtos, receber interessados e facilitar o atendimento.',
    challenge:
      'Tirar o estoque do improviso e reduzir o caminho entre interesse do comprador e atendimento comercial.',
    focus:
      'Apresentar veículos com clareza, acelerar consultas e facilitar contato via canais comerciais.',
    result:
      'Mais clareza para quem vende e um caminho mais simples para quem quer comprar.',
    valuePoints: ['Produtos claros', 'Busca fácil', 'Contato rápido'],
    visualTagline: 'Uma apresentação comercial pronta para vender melhor.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
    image: '/mockups/rd-veiculos/rd-mob-desk.png',
    screens: [
      {
        image: '/mockups/rd-veiculos/rd-mob-desk.png',
        label: 'Vitrine',
        description: 'Apresentação clara dos veículos com foco em gerar contato.',
      },
      {
        image: '/mockups/rd-veiculos/rd-mob-01.png',
        label: 'Filtros',
        description: 'Busca por tipo, modelo e características do estoque.',
      },
      {
        image: '/mockup-rd.png',
        label: 'Contato',
        description: 'Caminho curto entre interesse e atendimento comercial.',
      },
    ],
    projectUrl: '',
    repositoryUrl: '',
    status: 'Projeto desenvolvido',
  },
  {
    id: 'monky-veiculos',
    title: 'Controle comercial com autonomia',
    category: 'Monky Veículos',
    description:
      'Uma ferramenta para manter produtos, contatos e oportunidades comerciais em ordem.',
    challenge:
      'Dar autonomia para lojistas publicarem estoque, receberem contatos e manterem presença digital atualizada.',
    focus:
      'Transformar catálogo de veículos em um produto escalável para diferentes negócios.',
    result:
      'Mais controle comercial, contatos centralizados e menos dependência para atualizar informações.',
    valuePoints: ['Controle comercial', 'Atualização simples', 'Contatos centralizados'],
    visualTagline: 'Mais autonomia para vender e acompanhar oportunidades.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    image: '/mockup-veiculos.png',
    screens: [
      {
        image: '/mockup-veiculos.png',
        label: 'Catálogo',
        description: 'Estrutura pronta para diferentes lojas publicarem seus veículos.',
      },
      {
        image: '/mockup-veiculos.png',
        label: 'Estoque',
        description: 'Cadastro, destaque e atualização dos veículos com autonomia.',
      },
      {
        image: '/mockup-veiculos.png',
        label: 'Leads',
        description: 'Contatos centralizados para acompanhar oportunidades comerciais.',
      },
    ],
    projectUrl: '',
    repositoryUrl: '',
    status: 'Em desenvolvimento',
  },
]

export const services = [
  {
    number: '01',
    title: 'Sites e landing pages',
    description:
      'Páginas profissionais para apresentar sua empresa, explicar sua oferta e gerar contatos.',
    items: ['Site', 'Oferta', 'WhatsApp'],
    outcome:
      'Transforma interesse em conversa.',
    metric: 'Vender',
    marker: 'Presença',
  },
  {
    number: '02',
    title: 'Sistemas para empresas',
    description:
      'Soluções para organizar agenda, equipe, clientes, estoque, pedidos ou processos internos.',
    items: ['Gestão', 'Atendimento', 'Controle'],
    outcome:
      'Reduz trabalho manual e melhora a rotina.',
    metric: 'Organizar',
    marker: 'Operação',
  },
  {
    number: '03',
    title: 'Ferramentas digitais',
    description:
      'Produtos, painéis e plataformas para transformar uma ideia em algo usável e escalável.',
    items: ['Painel', 'Produto', 'Evolução'],
    outcome:
      'Cria uma base para crescer com mais controle.',
    metric: 'Crescer',
    marker: 'Produto',
  },
]

export const principles = [
  {
    number: '01',
    title: 'Não sei exatamente o que preciso.',
    description:
      'Tudo bem. O diagnóstico serve para organizar a ideia antes de construir.',
  },
  {
    number: '02',
    title: 'Consigo começar pequeno?',
    description:
      'Sim. A primeira versão foca no que gera valor rápido e pode evoluir depois.',
  },
  {
    number: '03',
    title: 'É só uma tela bonita?',
    description:
      'Não. Design entra para deixar a operação mais simples, clara e vendável.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Entendemos gargalos, rotina e o que precisa ficar mais simples.',
  },
  {
    number: '02',
    title: 'Plano claro',
    description:
      'Definimos prioridade, fluxo principal e primeira versão.',
  },
  {
    number: '03',
    title: 'Construção',
    description:
      'Criamos a experiência e colocamos a solução para funcionar no uso real.',
  },
  {
    number: '04',
    title: 'Evolução',
    description:
      'Lançamos, ajustamos e planejamos os próximos ganhos.',
  },
]
