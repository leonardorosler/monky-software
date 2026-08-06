export const siteConfig = {
  name: 'Monky Software',
  location: 'Pelotas - RS',
  email: '',
  whatsapp: 'a',
  socialLinks: {
    instagram: 'a',
    github: ' ',
    linkedin: 'a',
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

export const projects = [
  {
    id: 'monky-barber',
    title: 'Monky Barber',
    category: 'Sistema para barbearias',
    description:
      'Plataforma para gerenciamento de barbearias, com agendamentos, profissionais, serviços, disponibilidade e painel administrativo.',
    challenge: 'Evitar agenda manual, conflitos de horário e perda de controle sobre profissionais e serviços.',
    focus: 'Organizar agenda, equipe e serviços em uma rotina única.',
    result: 'Menos conflito de horários e mais controle para o dono da barbearia.',
    valuePoints: ['Agenda mais previsível', 'Equipe organizada', 'Painel para o dono'],
    visualTagline: 'Agenda, equipe e operação em um só lugar.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Prisma'],
    image: '/mockups/barbearia-kibg/king-mob-desk.png',
    screens: [
      {
        image: '/mockups/barbearia-king/king-mob-desk.png',
        label: 'Visão geral',
        description: 'Resumo da agenda, próximos horários e rotina da barbearia.',
      },
      {
        image: '/mockups/barbearia-king/king-mob.png',
        label: 'Agendamentos',
        description: 'Fluxo para marcar, acompanhar e evitar conflito de horários.',
      },
      {
        image: 'mockup-king.png',
        label: 'Painel do dono',
        description: 'Controle de profissionais, serviços e disponibilidade.',
      },
    ],
    projectUrl: '',
    repositoryUrl: '',
    status: 'Em desenvolvimento',
  },
  {
    id: 'rd-veiculos',
    title: 'RD Veículos',
    category: 'Catálogo digital de veículos',
    description:
      'Catálogo de veículos com filtros, destaques, favoritos, contato de interessados e painel administrativo para gerenciamento do estoque.',
    challenge: 'Apresentar veículos com clareza e reduzir atrito entre interesse do cliente e contato comercial.',
    focus: 'Apresentar estoque, acelerar consultas e facilitar contato comercial.',
    result: 'Uma vitrine digital mais clara para quem vende e para quem compra.',
    valuePoints: ['Estoque fácil de explorar', 'Busca com filtros', 'Contato mais rápido'],
    visualTagline: 'Uma vitrine digital pronta para vender melhor.',
    technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Supabase'],
    image: '/mockups/rd-veiculos/rd-mob-desk.png',
    screens: [
      {
        image: '/mockups/rd-veiculos/rd-mob-desk.png',
        label: 'Vitrine',
        description: 'Apresentação clara dos veículos com foco em conversão.',
      },
      {
        image: '/mockups/rd-veiculos/rd-mob-01.png',
        label: 'Filtros',
        description: 'Busca por tipo, modelo e características do estoque.',
      },
      {
        image: 'mockup-rd.png',
        label: 'Contato',
        description: 'Caminho mais curto entre interesse e atendimento comercial.',
      },
    ],
    projectUrl: '',
    repositoryUrl: '',
    status: 'Projeto desenvolvido',
  },
  {
    id: 'monky-veiculos',
    title: 'Monky Veículos',
    category: 'SaaS para lojas de veículos',
    description:
      'Plataforma para lojas e garagens criarem catálogos digitais, gerenciarem veículos, destaques, leads e páginas públicas em uma estrutura única.',
    challenge: 'Dar autonomia para lojas publicarem estoque, receberem contatos e manterem presença digital atualizada.',
    focus: 'Transformar o catálogo de veículos em um produto recorrente, pronto para diferentes lojistas.',
    result: 'Mais autonomia para publicar estoque, receber contatos e manter uma presença comercial sempre atualizada.',
    valuePoints: ['Produto recorrente', 'Publicação autônoma', 'Leads centralizados'],
    visualTagline: 'Catálogos digitais escaláveis para lojas e garagens.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    image: 'mockup-veiculos.png',
    screens: [
      {
        image: 'mockup-veiculos.png',
        label: 'Catálogo SaaS',
        description: 'Estrutura pronta para diferentes lojas publicarem seus veículos.',
      },
      {
        image: 'mockup-veiculos.png',
        label: 'Gestão de estoque',
        description: 'Cadastro, destaque e atualização dos veículos com autonomia.',
      },
      {
        image: 'mockup-veiculos.png',
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
      'Páginas com narrativa objetiva, visual forte e caminho claro para transformar interesse em conversa.',
    items: ['Copy orientada a conversão', 'SEO técnico essencial', 'CTA sem fricção'],
    outcome: 'Ideal para validar oferta, apresentar serviços e gerar contatos qualificados.',
    metric: 'Oferta clara',
    marker: 'Atrair',
  },
  {
    number: '02',
    title: 'Lojas virtuais e catálogos',
    description:
      'Vitrines digitais organizadas para explorar produtos, destacar oportunidades e reduzir dúvidas antes do contato.',
    items: ['Produtos escaneáveis', 'Filtros inteligentes', 'WhatsApp no fluxo'],
    outcome: 'Perfeito para quem precisa vender melhor sem depender de apresentações manuais.',
    metric: 'Compra simples',
    marker: 'Vender',
  },
  {
    number: '03',
    title: 'Sistemas personalizados',
    description:
      'Produtos sob medida para organizar operações, automatizar rotinas e dar mais controle para a equipe.',
    items: ['Painel operacional', 'Fluxos sob medida', 'Base escalável'],
    outcome: 'Indicado para negócios que já sentiram o limite da planilha e do improviso.',
    metric: 'Operação fluida',
    marker: 'Escalar',
  },
]

export const principles = [
  {
    number: '01',
    title: 'Feito para o processo real',
    description:
      'A solução deve se adaptar ao funcionamento do negócio, não o contrário.',
  },
  {
    number: '02',
    title: 'Simples para quem utiliza',
    description:
      'Interfaces claras reduzem dificuldades e tornam o trabalho mais eficiente.',
  },
  {
    number: '03',
    title: 'Preparado para evoluir',
    description:
      'Uma boa base permite acompanhar novas necessidades e oportunidades.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Entendimento',
    description:
      'Conhecemos o negócio, seus processos e o problema que precisa ser resolvido.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description:
      'Definimos estrutura, prioridades, funcionalidades e experiência.',
  },
  {
    number: '03',
    title: 'Desenvolvimento',
    description:
      'Transformamos o planejamento em uma solução funcional e bem construída.',
  },
  {
    number: '04',
    title: 'Entrega e evolução',
    description:
      'Publicamos, acompanhamos e identificamos os próximos passos.',
  },
]
