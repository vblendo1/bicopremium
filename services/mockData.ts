import { Opportunity, Guide, EarnNowTip, JobLinkCategory } from '../types';

export const mockOpportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Mestre do Flipping: Lucro Rápido na OLX',
    category: 'Flipping',
    potential: 'R$ 500-2.500 / mês',
    description: 'Aprenda o segredo de comprar itens usados por pechincha e revendê-los pelo dobro ou triplo do valor em tempo recorde.',
    details: `
### O QUE VOCÊ VAI PRECISAR:
- **Investimento inicial:** R$ 100 a R$ 300. Esse valor é para adquirir seus primeiros 2-3 produtos. A chave é começar pequeno e reinvestir o lucro.
- **Ferramentas/equipamentos:**
    - Um smartphone com uma boa câmera.
    - Acesso à internet para pesquisar preços e anunciar.
    - Contas ativas na OLX e Facebook Marketplace.
    - Um local seguro para armazenar temporariamente os produtos (pode ser um canto da sua casa).
- **Habilidades necessárias:**
    - Olho para identificar bons negócios (isso se desenvolve com a prática).
    - Habilidade básica de negociação para comprar barato e vender caro.
    - Paciência para tirar boas fotos e escrever anúncios claros.

### PASSO A PASSO DETALHADO:
**Passo 1: A Caça (Pesquisa de Oportunidades)**
- **Sub-item 1:** Defina seu nicho inicial. Comece com categorias que você entende minimamente: eletrônicos (celulares, videogames antigos), móveis pequenos (cadeiras de escritório, mesas de centro) ou eletrodomésticos.
- **Sub-item 2:** Use os filtros da OLX e Marketplace. Busque por anúncios com títulos vagos como "vendo celular" ou "cadeira de escritório", que geralmente são de pessoas com pressa.
- **Sub-item 3:** Procure por "defeitos". Anúncios que dizem "pequeno defeito" ou "precisa de limpeza" são minas de ouro. Muitas vezes o "defeito" é algo que você mesmo pode consertar em 10 minutos.

**Passo 2: A Negociação (Comprando na Baixa)**
- **Sub-item 1:** Nunca aceite o primeiro preço. Sempre faça uma oferta 20-30% abaixo do valor pedido. A pior coisa que pode acontecer é a pessoa dizer não.
- **Sub-item 2:** Use o argumento da "retirada imediata". Diga: "Consigo buscar agora mesmo por R$X". Vendedores com pressa amam essa frase.
- **Sub-item 3:** Verifique o produto. Antes de pagar, teste o item na frente do vendedor para garantir que funciona ou que o defeito é realmente o descrito.

**Passo 3: A Preparação (Agregando Valor)**
- **Sub-item 1:** Limpeza profunda. Um produto limpo e cheiroso parece mais novo e vale mais. Use álcool isopropílico para eletrônicos e produtos de limpeza adequados para móveis.
- **Sub-item 2:** Pequenos reparos. Aperte parafusos soltos, troque uma bateria de celular (se souber), cole uma peça quebrada. Isso pode triplicar o valor.
- **Sub-item 3:** A "mágica" das fotos. Tire fotos em um local bem iluminado, com um fundo neutro (uma parede branca, por exemplo). Mostre todos os ângulos e destaque as qualidades.

**Passo 4: O Anúncio (Vendendo na Alta)**
- **Sub-item 1:** Pesquise o preço de mercado. Veja quanto outros vendedores estão pedindo por um produto similar e em bom estado. Posicione seu preço de forma competitiva, mas com boa margem.
- **Sub-item 2:** Título matador. Seja específico: "iPhone 8 Plus 64GB Vitrine - Bateria 100% e Sem Marcas" é muito melhor que "Vendo iPhone".
- **Sub-item 3:** Descrição completa. Informe todos os detalhes: modelo, estado de conservação, o que acompanha, se aceita teste na hora. Isso gera confiança.

**Passo 5: A Venda e a Entrega**
- **Sub-item 1:** Responda rápido. Ative as notificações dos apps e seja o primeiro a responder os interessados.
- **Sub-item 2:** Marque em locais seguros e movimentados. Shoppings, estações de metrô ou em frente a delegacias são ótimas opções.
- **Sub-item 3:** Prefira pagamento via PIX. É instantâneo e seguro. Confirme o recebimento antes de entregar o produto.

**Passo 6: Reinvestimento e Crescimento**
- **Sub-item 1:** Separe o lucro. Do valor total da venda, separe o custo inicial e o lucro.
- **Sub-item 2:** Use o lucro para comprar mais. Agora, em vez de um produto, você pode comprar dois ou três, acelerando seus ganhos.
- **Sub-item 3:** Acompanhe seus resultados. Anote em uma planilha simples: produto, data da compra, valor pago, data da venda, valor vendido e lucro.

### ONDE ENCONTRAR PRODUTOS:
- **OLX:** Principal fonte. Use os filtros por bairro e categoria.
- **Facebook Marketplace:** Excelente para encontrar pessoas com pressa para vender.
- **Grupos de "desapego" no Facebook/WhatsApp:** Procure por grupos do seu bairro ou cidade.
- **Feiras do Rolo e de Garagem:** Oportunidades de ouro para encontrar itens únicos e muito baratos.

### PRECIFICAÇÃO:
| Tipo de Produto      | Preço Médio de Compra | Preço Médio de Venda | Lucro Potencial |
|----------------------|-----------------------|----------------------|-----------------|
| Celular (2 anos uso) | R$ 300 - R$ 500       | R$ 600 - R$ 900      | R$ 300 - R$ 400 |
| Cadeira de Escritório| R$ 50 - R$ 100        | R$ 150 - R$ 250      | R$ 100 - R$ 150 |
| Videogame (PS3/X360) | R$ 150 - R$ 250       | R$ 350 - R$ 500      | R$ 200 - R$ 250 |
| Micro-ondas Usado    | R$ 40 - R$ 80         | R$ 120 - R$ 200      | R$ 80 - R$ 120  |

### CÁLCULO DE LUCRO REAL:
- **Exemplo prático:** Compra de uma cadeira de escritório.
- **Custo de Compra:** Você negociou e pagou R$ 70.
- **Custos Adicionais:**
    - Transporte (Uber/gasolina): R$ 15
    - Produto de limpeza: R$ 5 (valor rateado)
- **Custo Total:** R$ 70 + R$ 15 + R$ 5 = R$ 90
- **Preço de Venda:** Você anunciou por R$ 180 e vendeu.
- **Lucro Líquido:** R$ 180 (Venda) - R$ 90 (Custo Total) = **R$ 90 de lucro limpo.**
Isso representa um retorno de 100% sobre seu investimento.

### ERROS A EVITAR:
1. **Não pesquisar o preço antes de comprar:** Pode te fazer pagar caro e ficar sem margem.
2. **Ignorar a limpeza e boas fotos:** É o que diferencia seu anúncio da concorrência e justifica um preço maior.
3. **Comprar produtos muito complexos ou com defeitos graves:** Foque no que é simples de avaliar e consertar.
4. **Demorar para responder os interessados:** No mundo online, quem responde primeiro, vende primeiro.
5. **Marcar entregas em locais perigosos:** Sua segurança vale mais que qualquer lucro.
6. **Não reinvestir o lucro:** Gastar todo o dinheiro da venda te impede de crescer o negócio.
7. **Ter apego emocional ao produto:** Lembre-se, é apenas mercadoria. O objetivo é vender rápido.

### ESTRATÉGIA DE ESCALA:
- **Mês 1-2 (Iniciante):** Foque em um único nicho (ex: apenas cadeiras). Faça de 2 a 4 flips no mês para pegar o jeito. Meta: R$ 300-R$ 500 de lucro.
- **Mês 3-4 (Intermediário):** Comece a explorar um segundo nicho. Aumente o volume, buscando ter sempre 3-4 produtos anunciados simultaneamente. Meta: R$ 800-R$ 1.200 de lucro.
- **Mês 5-6 (Avançado):** Crie uma "marca" própria no seu perfil da OLX. Comece a comprar lotes (ex: "compro todos os seus jogos de videogame antigos"). Contrate um entregador para otimizar seu tempo. Meta: R$ 1.500-R$ 2.500+ de lucro.
`,
    unlocked: false,
  },
  {
    id: 2,
    title: 'Cliente Oculto: Ganhe para Avaliar',
    category: 'Apps',
    potential: 'R$ 50-150 / tarefa',
    description: 'Transforme seu olhar crítico em dinheiro. Empresas te pagam para avaliar secretamente o atendimento e os produtos delas.',
    details: 'Use aplicativos como PiniOn e Foxtrot. Cadastre-se, encontre missões perto de você e siga as instruções. O pagamento é feito via app após a aprovação da sua avaliação.',
    unlocked: false,
  },
  {
    id: 3,
    title: 'Edição de Vídeo Rápido para Redes Sociais',
    category: 'Freelas',
    potential: 'R$ 80-300 / vídeo',
    description: 'A mina de ouro atual. Edite vídeos curtos (Reels/TikTok) para empresas e influenciadores que não têm tempo para isso.',
    details: 'Plataformas como Workana e 99Freelas têm alta demanda. Use ferramentas como CapCut (grátis) ou Adobe Premiere (pago). Monte um portfólio com alguns exemplos e comece a se candidatar.',
    unlocked: false,
  },
  {
    id: 4,
    title: 'Renda em Dólar com Microtarefas',
    category: 'Microtarefas',
    potential: 'R$ 5-20 / hora',
    description: 'Seu tempo ocioso vale dinheiro. Execute tarefas simples para gigantes da tecnologia e receba em dólar, no conforto de casa.',
    details: 'Amazon Mechanical Turk (MTurk) e Clickworker são as maiores plataformas. O trabalho é repetitivo, mas pode ser feito a qualquer hora e de qualquer lugar. Pagamentos em dólar.',
    unlocked: false,
  },
  {
    id: 5,
    title: 'Gestor de Anúncios para Negócios de Bairro',
    category: 'Freelas',
    potential: 'R$ 500-1.500 / cliente',
    description: 'Vire o "mago dos anúncios" para negócios locais. Ajude a padaria ou o salão da sua rua a lotar de clientes e seja bem pago por isso.',
    details: 'O conhecimento em Facebook Ads é essencial. Ofereça seus serviços para padarias, salões de beleza e restaurantes da sua cidade. Foque em gerar resultados rápidos para o cliente.',
    unlocked: false,
  },
];


export const mockGuides: Guide[] = [
    {
      id: 1,
      title: 'O Segredo dos R$ 100/dia com Revenda',
      type: 'E-book',
      description: 'O mapa para encontrar produtos matadores, negociar como um profissional e vender com lucro obsceno todos os dias.',
      content: 'Conteúdo exclusivo do e-book sobre revenda.',
      unlocked: false,
    },
    {
      id: 2,
      title: 'Flipping na OLX: Transforme Lixo em Luxo',
      type: 'Vídeo',
      description: 'Assista na prática como garimpar tesouros escondidos na OLX e dobrar seu dinheiro em menos de 48 horas.',
      content: 'Link ou embed do vídeo exclusivo sobre flipping.',
      unlocked: false,
    },
    {
      id: 3,
      title: 'Microtarefas: O Guia Definitivo para Renda em Dólar',
      type: 'Tutorial',
      description: 'Pare de perder tempo. Aprenda a ser aprovado nas melhores plataformas e a pegar as tarefas que pagam mais.',
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