
import { Opportunity, Guide, EarnNowTip, JobLinkCategory } from '../types';

export const mockOpportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Cliente Oculto em Restaurantes',
    category: 'Apps',
    potential: 'R$ 50-150 / tarefa',
    description: 'Seja pago para avaliar o atendimento e a comida em restaurantes locais.',
    details: 'Use aplicativos como PiniOn e Foxtrot. Cadastre-se, encontre missões perto de você e siga as instruções. O pagamento é feito via app após a aprovação da sua avaliação.',
    unlocked: false,
  },
  {
    id: 2,
    title: 'Revenda de Produtos Importados',
    category: 'Marketplace',
    potential: 'R$ 1.000-5.000 / mês',
    description: 'Compre produtos em sites internacionais e revenda com lucro no Brasil.',
    details: 'Sites como AliExpress e Shein são ótimos para começar. Foque em nichos específicos como eletrônicos, acessórios de celular ou moda. Venda em plataformas como Mercado Livre e OLX.',
    unlocked: false,
  },
  {
    id: 3,
    title: 'Freelancer de Edição de Vídeo Curto',
    category: 'Freelas',
    potential: 'R$ 80-300 / vídeo',
    description: 'Edite vídeos para TikTok e Reels para criadores de conteúdo e empresas.',
    details: 'Plataformas como Workana e 99Freelas têm alta demanda. Use ferramentas como CapCut (grátis) ou Adobe Premiere (pago). Monte um portfólio com alguns exemplos e comece a se candidatar.',
    unlocked: false,
  },
  {
    id: 4,
    title: 'Microtarefas em Plataformas Online',
    category: 'Microtarefas',
    potential: 'R$ 5-20 / hora',
    description: 'Realize pequenas tarefas online como categorizar imagens ou transcrever áudios.',
    details: 'Amazon Mechanical Turk (MTurk) e Clickworker são as maiores plataformas. O trabalho é repetitivo, mas pode ser feito a qualquer hora e de qualquer lugar. Pagamentos em dólar.',
    unlocked: false,
  },
  {
    id: 5,
    title: 'Gestão de Tráfego para Negócios Locais',
    category: 'Freelas',
    potential: 'R$ 500-1.500 / cliente',
    description: 'Crie e gerencie anúncios no Facebook e Instagram para pequenas empresas.',
    details: 'O conhecimento em Facebook Ads é essencial. Ofereça seus serviços para padarias, salões de beleza e restaurantes da sua cidade. Foque em gerar resultados rápidos para o cliente.',
    unlocked: false,
  },
];


export const mockGuides: Guide[] = [
    {
      id: 1,
      title: 'Como ganhar R$ 100/dia revendendo produtos',
      type: 'E-book',
      description: 'Um guia passo a passo para encontrar produtos baratos e vendê-los com alta margem de lucro online.',
      content: 'Conteúdo exclusivo do e-book sobre revenda.',
      unlocked: false,
    },
    {
      id: 2,
      title: 'Como lucrar no OLX flipando itens',
      type: 'Vídeo',
      description: 'Tutorial em vídeo mostrando as melhores categorias e técnicas de negociação para flipping na OLX.',
      content: 'Link ou embed do vídeo exclusivo sobre flipping.',
      unlocked: false,
    },
    {
      id: 3,
      title: 'Como trabalhar com microtarefas',
      type: 'Tutorial',
      description: 'Aprenda a se cadastrar nas melhores plataformas e otimizar seus ganhos com microtarefas.',
      content: 'Conteúdo exclusivo do tutorial de microtarefas.',
      unlocked: false,
    },
];

export const earnNowTips: EarnNowTip[] = [
  {
    id: 1,
    title: 'Como flipar produto da Shopee no OLX',
    steps: [
      '1. Procure por produtos com alta demanda e preço baixo na Shopee (ex: fones bluetooth, ring lights).',
      '2. Compre algumas unidades para testar. Foque em produtos abaixo de R$ 50.',
      '3. Tire fotos boas e anuncie na OLX e Facebook Marketplace por um preço 50-100% maior.',
      '4. Destaque a "pronta entrega" como vantagem. Entregue em locais movimentados ou via Uber Flash.',
      '5. Reinvista o lucro para comprar mais estoque e diversificar os produtos.'
    ],
  },
  {
    id: 2,
    title: 'Como ganhar R$ 100/dia varrendo quintal',
    steps: [
      '1. Crie um panfleto simples no Canva: "Limpeza de Quintal e Calçada - Deixo tudo brilhando! Preços a partir de R$ 50". Coloque seu WhatsApp.',
      '2. Imprima 100 cópias e distribua em casas com quintais grandes ou de aparência suja no seu bairro.',
      '3. Quando te chamarem, seja educado e negocie o valor na hora. Leve sua própria vassoura e pá.',
      '4. Faça um trabalho impecável. Peça para o cliente te indicar para vizinhos.',
      '5. Dois ou três serviços por dia e você bate a meta de R$ 100.'
    ]
  },
  {
    id: 3,
    title: 'Como vender arte com Canva (sem saber desenhar)',
    steps: [
      '1. Abra o Canva e procure por templates de "posts para Instagram" ou "stories".',
      '2. Crie "pacotes de arte" para nichos específicos: dentistas, advogados, hamburguerias, etc.',
      '3. Crie 5 modelos de posts para cada nicho e salve como um portfólio.',
      '4. Entre em grupos de empreendedores no Facebook e anuncie: "Crio 5 artes profissionais para seu Instagram por R$ 50. Entrega em 24h".',
      '5. Receba o PIX, pegue as informações do cliente, edite os templates e envie as imagens. Simples assim.'
    ]
  },
  {
    id: 4,
    title: 'Como ganhar R$ 200 com uma geladeira velha',
    steps: [
      '1. Anuncie sua geladeira velha (mesmo que não funcione) em grupos de "venda de usados" e na OLX.',
      '2. Título: "Geladeira para retirada de peças ou conserto". Coloque um preço baixo, tipo R$ 150-250.',
      '3. Pessoas que trabalham com conserto ou reciclagem de metal compram esses itens.',
      '4. Deixe claro que a retirada é por conta do comprador.',
      '5. Você se livra de um trambolho e ainda faz uma grana rápida.'
    ],
  }
];

export const jobLinks: JobLinkCategory[] = [
    {
        category: 'Trampo Formal',
        links: [
            { name: 'Glassdoor', url: 'https://www.glassdoor.com.br/Vaga/index.htm', description: 'Vagas com salários e avaliações de empresas.' },
            { name: 'Gupy', url: '#', description: 'Plataforma usada por grandes empresas para recrutamento.' },
            { name: 'Indeed', url: '#', description: 'Agregador de vagas de diversos sites.' },
            { name: 'Infojobs', url: '#', description: 'Um dos maiores sites de emprego do Brasil.' }
        ]
    },
    {
        category: 'Freela Online',
        links: [
            { name: '99Freelas', url: 'https://www.99freelas.com.br/', description: 'Projetos para freelancers de diversas áreas.' },
            { name: 'Workana', url: '#', description: 'Conecte-se a clientes da América Latina.' },
            { name: 'Fiverr', url: '#', description: 'Plataforma global para oferecer serviços a partir de $5.' },
            { name: 'Freelancer', url: '#', description: 'Milhões de projetos em diversas categorias.' }
        ]
    },
    {
        category: 'Bico Local',
        links: [
            { name: 'GetNinjas', url: 'https://www.getninjas.com.br/', description: 'Encontre clientes para serviços locais.' },
            { name: 'AppJobs', url: '#', description: 'Descubra apps de bicos e economia compartilhada.' },
            { name: 'DogHero', url: '#', description: 'Hospede ou passeie com cachorros por dinheiro.' },
            { name: 'BeeBee', url: '#', description: 'App de mobilidade urbana para cidades menores.' }
        ]
    },
    {
        category: 'Microtarefas',
        links: [
            { name: 'Toloka', url: 'https://toloka.ai/pt/', description: 'Ganhe dinheiro completando tarefas simples online.' },
            { name: 'Remotasks', url: '#', description: 'Seja pago para treinar inteligência artificial.' }
        ]
    },
    {
        category: 'Ferramentas de Venda',
        links: [
            { name: 'OLX', url: 'https://www.olx.com.br/', description: 'Maior plataforma de compra e venda de usados do país.' },
            { name: 'Shopee', url: '#', description: 'Marketplace ideal para vender produtos novos.' },
            { name: 'Canva', url: '#', description: 'Crie designs profissionais para divulgar seus produtos.' },
            { name: 'Linktree', url: '#', description: 'Agregue todos os seus links de venda em um só lugar.' }
        ]
    }
];
