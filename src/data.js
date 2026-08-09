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
    label: 'Produto SaaS',
  },
]

export const projects = [
  {
    id: 'monky-barber',
    title: 'Monky Barber',
    category: 'Sistema para barbearias',
    description:
      'Plataforma para barbearias controlarem agenda, barbeiros, serviços, disponibilidade, assinaturas e painel administrativo em um único fluxo.',
    challenge:
      'Reduzir agenda manual, conflito de horário, falhas no controle de profissionais e perda de visão sobre a rotina da barbearia.',
    focus:
      'Transformar agendamento, equipe e recorrência em uma operação simples para o dono acompanhar.',
    result:
      'Mais previsibilidade na agenda, menos trabalho manual e uma base pronta para evoluir com a barbearia.',
    valuePoints: ['Agenda previsível', 'Equipe organizada', 'Assinaturas no fluxo'],
    visualTagline: 'Agenda, equipe e recorrência em um só lugar.',
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
    status: 'Produto em evolução',
  },
  {
    id: 'rd-veiculos',
    title: 'RD Veículos',
    category: 'Catálogo digital de veículos',
    description:
      'Catálogo com filtros, destaques, favoritos, contato de interessados e painel administrativo para manter o estoque sempre apresentável.',
    challenge:
      'Tirar o estoque do improviso e reduzir o caminho entre interesse do comprador e atendimento comercial.',
    focus:
      'Apresentar veículos com clareza, acelerar consultas e facilitar contato via canais comerciais.',
    result:
      'Uma vitrine digital mais clara para quem vende e mais simples para quem compra.',
    valuePoints: ['Estoque escaneável', 'Busca com filtros', 'Contato mais rápido'],
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
    title: 'Monky Veículos',
    category: 'SaaS para lojas de veículos',
    description:
      'Produto recorrente para lojas e garagens criarem catálogos digitais, gerenciarem estoque, leads e páginas públicas com autonomia.',
    challenge:
      'Dar autonomia para lojistas publicarem estoque, receberem contatos e manterem presença digital atualizada.',
    focus:
      'Transformar catálogo de veículos em um produto escalável para diferentes negócios.',
    result:
      'Mais controle comercial, leads centralizados e publicação de estoque sem depender de terceiros.',
    valuePoints: ['Produto recorrente', 'Publicação autônoma', 'Leads centralizados'],
    visualTagline: 'Catálogos digitais escaláveis para lojas e garagens.',
    technologies: ['React', 'Node.js', 'TypeScript', 'PostgreSQL'],
    image: '/mockup-veiculos.png',
    screens: [
      {
        image: '/mockup-veiculos.png',
        label: 'Catálogo SaaS',
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
    status: 'Produto em desenvolvimento',
  },
]

export const services = [
  {
    number: '01',
    title: 'Sistemas sob medida',
    description:
      'Para negócios que já sentiram o limite da planilha, do WhatsApp solto e dos controles espalhados.',
    items: ['Painel operacional', 'Fluxos do seu processo', 'Permissões e relatórios'],
    outcome:
      'Ideal para organizar agenda, equipe, assinaturas, estoque, leads ou qualquer rotina que hoje depende de trabalho manual.',
    metric: 'Organizar',
    marker: 'Operação',
  },
  {
    number: '02',
    title: 'Landing pages que vendem',
    description:
      'Páginas com promessa clara, prova visual, narrativa de dor e CTA direto para transformar visita em conversa.',
    items: ['Copy de conversão', 'Hero forte', 'Formulário ou WhatsApp'],
    outcome:
      'Perfeito para validar oferta, vender serviços, captar leads e apresentar um produto com mais autoridade.',
    metric: 'Converter',
    marker: 'Aquisição',
  },
  {
    number: '03',
    title: 'Produtos SaaS',
    description:
      'Transformamos uma solução repetível em produto com painel, clientes, regras, páginas públicas e base para recorrência.',
    items: ['Produto escalável', 'Área administrativa', 'Base para assinatura'],
    outcome:
      'Indicado quando a ideia não é apenas um projeto único, mas uma plataforma que pode atender vários clientes.',
    metric: 'Escalar',
    marker: 'Recorrência',
  },
]

export const principles = [
  {
    number: '01',
    title: 'Chega de controle espalhado',
    description:
      'Agenda, clientes, pagamentos, equipe e leads precisam conversar entre si para a operação ficar previsível.',
  },
  {
    number: '02',
    title: 'O usuário precisa entender rápido',
    description:
      'Interface boa reduz treinamento, evita erro e faz a equipe usar o sistema no dia a dia.',
  },
  {
    number: '03',
    title: 'Primeira versão com objetivo claro',
    description:
      'Construímos o necessário para gerar valor primeiro e deixamos a base pronta para evoluir com segurança.',
  },
]

export const processSteps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description:
      'Mapeamos a rotina atual, gargalos, controles manuais, canais de venda e o que precisa ficar mais simples.',
  },
  {
    number: '02',
    title: 'Desenho da solução',
    description:
      'Definimos páginas, fluxos, funcionalidades, prioridade e experiência antes de entrar em desenvolvimento.',
  },
  {
    number: '03',
    title: 'Protótipo e construção',
    description:
      'Criamos a interface, validamos a jornada principal e desenvolvemos a base técnica do produto.',
  },
  {
    number: '04',
    title: 'Lançamento e evolução',
    description:
      'Entregamos a primeira versão funcionando, acompanhamos ajustes e planejamos os próximos ganhos.',
  },
]
