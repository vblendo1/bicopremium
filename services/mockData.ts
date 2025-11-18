
import { Opportunity, Guide, EarnNowTip, JobLinkCategory } from '../types';

export const mockOpportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Flipping de Celulares Usados',
    category: 'Flipping',
    potential: 'R$ 400-1.500 / celular',
    description: 'Compre celulares usados com defeitos cosméticos, conserte e revenda com lucro de 80-150%.',
    details: `**O QUE VOCÊ VAI PRECISAR:**
• Capital inicial: R$ 300-500
• Conhecimento básico de smartphones
• Ferramentas de reparo (opcional, R$ 100-200)

**PASSO A PASSO:**

1. **Onde Encontrar Celulares Baratos:**
   - Facebook Marketplace: Procure por "celular tela quebrada", "celular com defeito"
   - OLX: Filtre por "urgente" ou "aceito propostas"
   - Grupos de bairro no Facebook
   - Feiras de usados e brechós

2. **O Que Comprar:**
   - iPhones 8, X, 11 com tela rachada (R$ 400-800)
   - Samsung Galaxy S10, S20 com problemas de bateria (R$ 300-600)
   - Xiaomi, Motorola com arranhões ou pequenos defeitos (R$ 200-400)
   - SEMPRE verifique se o IMEI está limpo (não bloqueado)

3. **Como Avaliar Antes de Comprar:**
   - Teste se liga e carrega
   - Verifique se a tela touch funciona (mesmo rachada)
   - Confirme que não está bloqueado por conta Google/iCloud
   - Tire foto do IMEI e consulte no site da operadora

4. **Reparos Simples (Margem Alta):**
   - Troca de tela: R$ 80-150 (serviço em assistências)
   - Troca de bateria: R$ 50-100
   - Limpeza profunda e polimento: R$ 20-30
   - Ou aprenda no YouTube e faça você mesmo

5. **Onde Revender:**
   - OLX: Melhor para vendas rápidas
   - Mercado Livre: Maior alcance, mas tem taxa de 10-15%
   - Facebook Marketplace: Sem taxas, bom para vendas locais
   - Instagram: Crie uma página de "semi-novos"

6. **Precificação Estratégica:**
   - Pesquise o preço de mercado no Mercado Livre
   - Venda 10-15% abaixo do preço médio para vender rápido
   - Destaque: "Testado", "Garantia de 7 dias", "Aceito cartão"

**CÁLCULO DE LUCRO REAL:**
Exemplo: iPhone X 64GB
- Compra com tela quebrada: R$ 600
- Troca de tela: R$ 150
- Custo total: R$ 750
- Venda: R$ 1.200-1.400
- Lucro líquido: R$ 450-650 (60-87%)

**ERROS A EVITAR:**
❌ Comprar celular bloqueado por operadora ou iCloud
❌ Pagar muito caro (deixar margem abaixo de 30%)
❌ Não testar antes de comprar
❌ Comprar modelos muito antigos (difícil de revender)
❌ Não dar garantia mínima (perde credibilidade)

**DICA PRO:** Especialize-se em uma marca (ex: só iPhone) para conhecer bem os defeitos comuns e reparos.`,
    unlocked: false,
  },
  {
    id: 2,
    title: 'Criação de Conteúdo com IA para Empresas',
    category: 'Serviços Digitais',
    potential: 'R$ 2.000-5.000 / mês',
    description: 'Use ferramentas de IA para criar textos, posts e roteiros para empresas que precisam de conteúdo constante.',
    details: `**O QUE VOCÊ VAI PRECISAR:**
• Computador com internet
• Conta no ChatGPT (versão free funciona)
• Conhecimento básico de copywriting
• Portfólio inicial (pode criar exemplos fictícios)

**FERRAMENTAS ESSENCIAIS (TODAS GRATUITAS OU BARATAS):**
• ChatGPT: Textos e roteiros
• Canva: Designs para posts
• Grammarly: Revisão de textos
• Notion: Organizar projetos de clientes

**SERVIÇOS QUE VOCÊ PODE OFERECER:**

1. **Posts para Redes Sociais (R$ 300-800/mês por cliente):**
   - 12 posts no Instagram/Facebook por mês
   - Use ChatGPT para gerar ideias e textos
   - Edite para soar natural e adicione CTAs
   - Crie as artes no Canva

2. **Artigos para Blog (R$ 100-300/artigo):**
   - Empresas precisam de conteúdo SEO
   - Use ChatGPT para estrutura e rascunho
   - Adicione dados reais e exemplos específicos
   - Revise para garantir qualidade

3. **Roteiros para Vídeos/Reels (R$ 50-150/roteiro):**
   - Criadores de conteúdo pagam por ideias
   - ChatGPT gera estrutura de roteiro
   - Você adapta para o nicho do cliente

4. **E-mails Marketing (R$ 200-500/campanha):**
   - Sequências de e-mails para lançamentos
   - Newsletters semanais
   - E-mails de vendas

**PASSO A PASSO PARA CONSEGUIR CLIENTES:**

1. **Monte um Portfólio Rápido:**
   - Crie 5 exemplos de posts para diferentes nichos
   - Escreva 2 artigos de blog sobre temas populares
   - Faça 3 roteiros de vídeo

2. **Onde Oferecer Seus Serviços:**
   - 99Freelas: Procure por "redator", "social media"
   - Workana: Filtre projetos de "conteúdo"
   - Grupos de Facebook: "Freelas de Marketing Digital"
   - LinkedIn: Envie mensagens para donos de pequenas empresas

3. **Proposta Irresistível:**
   "Olá [Nome], vi que você tem [tipo de negócio]. Posso criar 12 posts profissionais para seu Instagram por apenas R$ 400/mês. Entrego tudo pronto para você só publicar. Quer ver 3 exemplos gratuitos do seu nicho?"

4. **Processo de Trabalho:**
   - Reunião inicial: Entenda o negócio e tom de voz
   - Use ChatGPT com prompts específicos
   - Edite e personalize o conteúdo
   - Entregue no prazo combinado

**PROMPTS MATADORES PARA CHATGPT:**

Para posts de Instagram:
"Crie 5 ideias de posts para Instagram de uma [tipo de negócio] que vende [produto/serviço]. O tom deve ser [casual/profissional]. Inclua call-to-action em cada post."

Para artigos de blog:
"Escreva um artigo de 800 palavras sobre [tema] para um blog de [nicho]. Use subtítulos H2 e H3. Inclua exemplos práticos e uma conclusão com CTA."

**PRECIFICAÇÃO:**
• Iniciante: R$ 300-500/mês por cliente
• Intermediário: R$ 800-1.500/mês por cliente
• Avançado: R$ 2.000-5.000/mês (múltiplos clientes)

**META REALISTA:**
Mês 1: 2 clientes = R$ 800
Mês 3: 5 clientes = R$ 2.500
Mês 6: 8-10 clientes = R$ 5.000+

**IMPORTANTE:** SEMPRE revise e edite o conteúdo da IA. Clientes pagam pela sua curadoria e personalização, não pelo texto bruto.`,
    unlocked: false,
  },
  {
    id: 3,
    title: 'Limpeza Pós-Obra e Mudanças',
    category: 'Serviços Locais',
    potential: 'R$ 200-600 / dia',
    description: 'Ofereça serviços de limpeza pesada para obras e mudanças. Alta demanda e pagamento imediato.',
    details: `**POR QUE ESSE BICO É LUCRATIVO:**
✅ Alta demanda constante
✅ Pagamento no mesmo dia (dinheiro ou PIX)
✅ Não precisa de experiência prévia
✅ Investimento inicial baixo (R$ 100-200)
✅ Pode escalar contratando ajudantes

**O QUE VOCÊ VAI PRECISAR:**

**Equipamentos Básicos (R$ 150-250):**
• Vassoura, rodo, pá de lixo
• Balde, panos de limpeza
• Produtos: desengordurante, água sanitária, detergente
• Escada pequena (para limpar vidros altos)
• Luvas de borracha e máscara

**Equipamentos Pro (Opcional, R$ 300-800):**
• Aspirador de pó potente
• Enceradeira
• Lavadora de alta pressão (para áreas externas)

**PASSO A PASSO:**

**1. Como Conseguir Clientes:**

A) **Marketing Local:**
- Crie panfletos no Canva: "LIMPEZA PÓS-OBRA E MUDANÇAS - Deixamos seu imóvel impecável! WhatsApp: [seu número]"
- Distribua em:
  * Lojas de material de construção
  * Imobiliárias
  * Condomínios em construção
  * Grupos de bairro no Facebook

B) **Plataformas Online:**
- GetNinjas: Cadastre-se como "Diarista/Faxineiro"
- Grupos de Facebook: "Serviços [sua cidade]"
- Instagram: Crie uma página com fotos de antes/depois

C) **Parcerias Estratégicas:**
- Fale com pedreiros e pintores: ofereça 10% de comissão por indicação
- Imobiliárias: ofereça preço especial para limpezas recorrentes

**2. Como Precificar:**

**Limpeza Pós-Obra:**
• Apartamento 1 quarto: R$ 250-350
• Apartamento 2 quartos: R$ 350-500
• Casa 3 quartos: R$ 500-800
• Tempo estimado: 4-8 horas

**Limpeza Pós-Mudança:**
• Apartamento pequeno: R$ 200-300
• Casa média: R$ 300-500
• Tempo estimado: 3-6 horas

**Limpeza Profunda (Residencial):**
• Por cômodo: R$ 80-120
• Casa completa: R$ 400-700

**Dica:** Cobre por m² para imóveis grandes (R$ 8-15/m²)

**3. Processo de Trabalho:**

**Antes de Aceitar o Serviço:**
- Peça fotos ou faça uma visita rápida
- Avalie o nível de sujeira
- Dê um orçamento honesto
- Combine forma de pagamento (50% antes, 50% depois)

**Durante o Serviço:**
- Chegue no horário combinado
- Comece pelos cômodos mais sujos
- Tire fotos do "antes" (para seu portfólio)
- Seja detalhista: cantos, rodapés, interruptores

**Depois:**
- Tire fotos do "depois"
- Peça um depoimento ou avaliação
- Deixe seu cartão/panfleto
- Pergunte se conhece alguém que precisa

**4. Diferenciais que Fazem Você Cobrar Mais:**

✨ **Produtos Ecológicos:** "Uso apenas produtos biodegradáveis"
✨ **Garantia:** "Se não ficar satisfeito, volto e refaço sem custo"
✨ **Antes/Depois:** Mostre fotos de trabalhos anteriores
✨ **Rapidez:** "Entrego em até 24h após o contato"

**5. Como Escalar:**

**Mês 1-2:** Você sozinho (2-3 serviços/semana = R$ 2.000-3.000/mês)
**Mês 3-4:** Contrate 1 ajudante (pague R$ 80-100/dia)
**Mês 6+:** Monte uma equipe de 2-3 pessoas e foque em conseguir clientes

**CÁLCULO REAL:**
• 3 limpezas/semana × R$ 400 média = R$ 1.200/semana
• 4 semanas = R$ 4.800/mês
• Custos (produtos, transporte): -R$ 500
• **Lucro líquido: R$ 4.300/mês**

**ERROS A EVITAR:**
❌ Cobrar muito barato (desvaloriza seu trabalho)
❌ Não fazer orçamento presencial (surpresas ruins)
❌ Aceitar pagamento só no final (risco de calote)
❌ Não tirar fotos antes/depois (perde prova social)

**DICA DE OURO:** Especialize-se em pós-obra. Paga melhor e tem menos concorrência que limpeza residencial comum.`,
    unlocked: false,
  },
  {
    id: 4,
    title: 'Testes de Usabilidade Remotos',
    category: 'Microtarefas',
    potential: 'R$ 50-200 / hora',
    description: 'Seja pago para testar sites e aplicativos e dar feedback sobre a experiência do usuário.',
    details: `**O QUE SÃO TESTES DE USABILIDADE:**
Empresas pagam para você navegar em seus sites/apps e gravar sua tela enquanto fala em voz alta sobre sua experiência. É como ser pago para dar sua opinião!

**POR QUE PAGA BEM:**
• Empresas precisam de feedback real de usuários
• Cada teste ajuda a melhorar produtos
• Demanda alta, especialmente de empresas internacionais
• Pagamento em dólar (convertido para real)

**PRINCIPAIS PLATAFORMAS:**

**1. UserTesting (Melhor Pagamento)**
• Pagamento: $10-60 por teste (R$ 50-300)
• Duração: 10-60 minutos
• Pagamento: Via PayPal, 7 dias após o teste
• Site: usertesting.com

**2. TryMyUI**
• Pagamento: $10 por teste (R$ 50)
• Duração: 15-20 minutos
• Pagamento: Via PayPal, sextas-feiras
• Site: trymyui.com

**3. Userlytics**
• Pagamento: $5-90 por teste (R$ 25-450)
• Duração: 5-60 minutos
• Testes em português disponíveis!
• Site: userlytics.com

**4. TestingTime**
• Pagamento: €50-100 por hora (R$ 250-500)
• Testes ao vivo com moderador
• Menos frequentes, mas pagam MUITO bem
• Site: testingtime.com

**PASSO A PASSO COMPLETO:**

**1. Requisitos Técnicos:**
• Computador com Windows/Mac (não funciona bem em Linux)
• Microfone funcional (headset é melhor)
• Webcam (algumas plataformas exigem)
• Internet estável (mínimo 5 Mbps)
• PayPal para receber pagamentos

**2. Como Se Cadastrar:**

A) **Crie um Perfil Completo:**
- Use seu nome real
- Preencha TODOS os campos demográficos
- Seja honesto sobre suas características
- Quanto mais completo, mais testes você recebe

B) **Faça o Teste de Qualificação:**
- Todas as plataformas têm um teste inicial
- Fale MUITO durante o teste (pensamento em voz alta)
- Seja específico: "Esse botão está muito pequeno, não consigo clicar facilmente"
- Não apenas diga "legal" ou "ruim", explique o PORQUÊ

C) **Dicas para Ser Aprovado:**
- Fale de forma clara e pausada
- Descreva o que você vê e o que está pensando
- Complete todas as tarefas solicitadas
- Não tenha medo de criticar (eles querem feedback honesto!)

**3. Como Maximizar Seus Ganhos:**

**Estratégia 1: Cadastre-se em TODAS as Plataformas**
- Cada uma tem clientes diferentes
- Mais plataformas = mais oportunidades
- Meta: 5-10 plataformas ativas

**Estratégia 2: Fique de Olho nos E-mails**
- Testes são oferecidos por ordem de chegada
- Ative notificações push
- Responda em até 5 minutos quando receber convite

**Estratégia 3: Seja Consistente**
- Faça pelo menos 1 teste por semana
- Plataformas priorizam testadores ativos
- Mantenha sua taxa de aprovação acima de 90%

**Estratégia 4: Aprimore Seu Feedback**
- Seja detalhista: "O menu está escondido, levei 30 segundos para encontrar"
- Use termos técnicos quando souber: "O contraste do texto está baixo"
- Dê sugestões: "Seria melhor se o botão ficasse no canto superior direito"

**4. O Que Falar Durante os Testes:**

✅ **BOM:**
- "Estou procurando o botão de compra... não estou vendo... ah, está aqui embaixo, mas é muito pequeno"
- "Essa cor de fundo está dificultando a leitura do texto"
- "Gostei dessa animação, deixa o site mais moderno"

❌ **RUIM:**
- "Tá bom" (muito vago)
- Silêncio por mais de 10 segundos
- "Não sei o que dizer" (sempre há algo para comentar)

**5. Quanto Você Pode Ganhar:**

**Cenário Conservador:**
• 4 testes/semana × R$ 50 = R$ 200/semana
• **R$ 800/mês** (trabalho part-time)

**Cenário Realista:**
• 10 testes/semana × R$ 70 média = R$ 700/semana
• **R$ 2.800/mês** (dedicação regular)

**Cenário Otimista:**
• 15 testes/semana × R$ 100 média = R$ 1.500/semana
• **R$ 6.000/mês** (full-time, múltiplas plataformas)

**6. Como Receber os Pagamentos:**

**PayPal (Mais Comum):**
- Crie uma conta PayPal verificada
- Vincule ao seu CPF e conta bancária
- Transfira para sua conta: taxa de 4,99% + R$ 1,00

**Payoneer (Alternativa):**
- Algumas plataformas oferecem
- Taxas menores para saques
- Cartão de débito internacional

**7. Declaração de Imposto de Renda:**
- Rendimentos acima de R$ 28.559/ano devem ser declarados
- Categoria: "Rendimentos de trabalho sem vínculo empregatício"
- Guarde comprovantes dos pagamentos

**ERROS A EVITAR:**
❌ Fazer testes com pressa (qualidade baixa = reprovação)
❌ Não falar durante o teste (silêncio = teste inválido)
❌ Mentir no perfil demográfico (você não receberá testes adequados)
❌ Usar VPN (pode ser banido por fraude)
❌ Fazer testes em ambiente barulhento

**DICA PRO:** Combine testes de usabilidade com outras microtarefas (Toloka, Clickworker) para ter renda constante enquanto espera novos testes.`,
    unlocked: false,
  },
  {
    id: 5,
    title: 'Arbitragem de Produtos na Amazon',
    category: 'Marketplace',
    potential: 'R$ 1.500-8.000 / mês',
    description: 'Compre produtos em liquidação e revenda na Amazon com margem de 40-100%. Método escalável.',
    details: `**O QUE É ARBITRAGEM NA AMAZON:**
Comprar produtos em lojas físicas ou online com desconto e revender na Amazon por preço normal, embolsando a diferença. É 100% legal e milhares de pessoas vivem disso.

**POR QUE FUNCIONA:**
• Amazon tem 100+ milhões de clientes no Brasil
• Pessoas confiam na Amazon e pagam mais pela conveniência
• Você não precisa fabricar nada, só encontrar boas ofertas
• Escalável: quanto mais você investe, mais lucra

**FERRAMENTAS ESSENCIAIS:**

**1. Keepa (Obrigatória)**
• Site: keepa.com
• O que faz: Mostra histórico de preços na Amazon
• Custo: €19/mês (~R$ 100) - VALE CADA CENTAVO
• Como usar: Instale a extensão no Chrome, veja gráficos de preço ao navegar na Amazon

**2. App da Amazon Seller**
• Gratuito
• Escaneie códigos de barras em lojas físicas
• Veja na hora se o produto é lucrativo

**3. Calculadora de Lucro da Amazon**
• Gratuita no site da Amazon
• Calcula taxas, frete e lucro líquido

**PASSO A PASSO COMPLETO:**

**FASE 1: PREPARAÇÃO**

**1. Crie Sua Conta de Vendedor:**
• Acesse: sellercentral.amazon.com.br
• Escolha "Plano Profissional" (R$ 19/mês)
• Você precisa: CPF, conta bancária, cartão de crédito

**2. Entenda as Taxas da Amazon:**
• Taxa de referência: 8-15% (depende da categoria)
• Taxa de envio (se usar FBA): R$ 5-15 por item
• Armazenamento: R$ 0,50-2,00 por mês por item

**3. Escolha Seu Método:**

**A) FBA (Fulfillment by Amazon) - RECOMENDADO**
• Você envia produtos para o centro de distribuição da Amazon
• Amazon cuida de estoque, envio e atendimento
• Seus produtos têm o selo "Prime"
• Mais vendas, mas taxas maiores

**B) FBM (Fulfillment by Merchant)**
• Você mesmo envia os produtos
• Menos taxas, mas mais trabalho
• Não tem selo "Prime" (vende menos)

**FASE 2: ENCONTRANDO PRODUTOS LUCRATIVOS**

**Onde Procurar:**

**1. Lojas Físicas (Arbitragem de Varejo):**
• Americanas, Magazine Luiza, Casas Bahia
• Seções de liquidação e clearance
• Fim de temporada (roupas, decoração)
• Black Friday e Cyber Monday

**2. Lojas Online (Arbitragem Online):**
• Americanas.com (seção "Outlet")
• Magalu.com (ofertas do dia)
• Shoptime, Submarino
• Sites de atacado (Martins, Assaí)

**3. O Que Procurar:**

✅ **Produtos Ideais:**
• Pequenos e leves (frete barato)
• Não perecíveis
• Marca conhecida
• Alta demanda na Amazon (BSR < 50.000)
• Margem mínima de 40% após todas as taxas

✅ **Categorias Lucrativas:**
• Brinquedos (especialmente perto do Natal)
• Eletrônicos (fones, cabos, acessórios)
• Livros (edições especiais)
• Produtos de beleza
• Artigos esportivos

❌ **Evite:**
• Produtos muito pesados (frete alto)
• Itens frágeis (risco de quebra)
• Marcas restritas na Amazon (Nike, Apple, etc.)
• Produtos com muitas variações (roupas com tamanhos)

**FASE 3: ANÁLISE DE LUCRATIVIDADE**

**Exemplo Real:**

**Produto:** Fone de Ouvido Bluetooth JBL Tune 510BT

**1. Preço de Compra:**
• Encontrado na Americanas em promoção: R$ 150

**2. Preço na Amazon:**
• Preço médio de venda: R$ 280
• Verifique no Keepa se o preço é estável

**3. Cálculo de Custos:**
• Custo do produto: R$ 150
• Taxa da Amazon (15%): R$ 42
• Taxa FBA (envio): R$ 8
• Custo total: R$ 200

**4. Lucro:**
• Venda: R$ 280
• Custo: R$ 200
• **Lucro líquido: R$ 80 (40% de margem)**

**Regra de Ouro:** Só compre se a margem for acima de 30% após TODAS as taxas.

**FASE 4: COMPRANDO E ENVIANDO**

**1. Compre em Quantidade:**
• Comece com 5-10 unidades para testar
• Se vender bem, recompre 20-50 unidades
• Negocie desconto por volume com fornecedores

**2. Prepare os Produtos:**
• Remova etiquetas de preço da loja
• Embale individualmente (se necessário)
• Imprima etiquetas da Amazon (fornecidas no Seller Central)

**3. Envie para a Amazon:**
• Crie um envio no Seller Central
• Imprima as etiquetas e cole nos produtos
• Leve nos Correios ou agende coleta
• Frete: R$ 30-100 (depende do peso total)

**4. Acompanhe as Vendas:**
• Amazon geralmente recebe em 3-5 dias
• Produtos ficam disponíveis em 1-2 dias após recebimento
• Monitore o estoque e reponha quando necessário

**FASE 5: ESCALANDO O NEGÓCIO**

**Mês 1-2: Teste e Aprenda**
• Invista R$ 500-1.000
• Teste 5-10 produtos diferentes
• Aprenda quais categorias vendem melhor
• Meta: R$ 500-1.000 de lucro

**Mês 3-4: Escale o Que Funciona**
• Reinvista todo o lucro
• Foque nos produtos que vendem rápido
• Aumente quantidade de compra
• Meta: R$ 2.000-3.000 de lucro

**Mês 5-6: Automatize**
• Contrate um assistente virtual (R$ 500-800/mês)
• Use software de repricing (ajusta preços automaticamente)
• Negocie com atacadistas para preços melhores
• Meta: R$ 5.000-8.000 de lucro

**ESTRATÉGIAS AVANÇADAS:**

**1. Repricing Automático:**
• Use ferramentas como RepricerExpress
• Ajusta seus preços para sempre ganhar a Buy Box
• Aumenta vendas em 30-50%

**2. Compra em Atacado:**
• Depois de validar um produto, compre direto do atacado
• Margem aumenta de 40% para 60-80%
• Exemplos: Martins Atacado, Assaí, Makro

**3. Arbitragem Internacional:**
• Compre em sites dos EUA (Amazon.com, Walmart.com)
• Revenda na Amazon Brasil
• Use redirecionadores de encomenda (Shipito, MyUS)

**ERROS FATAIS A EVITAR:**

❌ **Não usar Keepa:** Você pode comprar um produto que está em queda de preço
❌ **Ignorar o BSR:** Produtos com BSR > 100.000 vendem muito devagar
❌ **Comprar produtos restritos:** Amazon pode bloquear sua conta
❌ **Não calcular TODAS as taxas:** Você acha que lucrou, mas na verdade perdeu
❌ **Investir todo seu dinheiro de uma vez:** Sempre deixe capital de giro

**DICA DE OURO:** Foque em produtos com alta rotatividade (vendem em 7-14 dias). Dinheiro parado em estoque não gera lucro!

**RECURSOS EXTRAS:**
• Grupo no Facebook: "Arbitragem Amazon Brasil"
• YouTube: Procure por "Amazon FBA Brasil"
• Curso gratuito: Amazon Seller University (no Seller Central)`,
    unlocked: false,
  },
];


export const mockGuides: Guide[] = [
    {
      id: 1,
      title: 'Guia Completo: Flipping de Móveis Lucrativos',
      type: 'E-book',
      description: 'Aprenda a comprar móveis usados por R$ 50-200 e revender por R$ 500-3.000. Técnicas de restauração, onde encontrar, como fotografar e vender rápido.',
      content: `# GUIA COMPLETO: FLIPPING DE MÓVEIS LUCRATIVOS

## INTRODUÇÃO

Flipping de móveis é uma das formas mais lucrativas de ganhar dinheiro com pouco investimento inicial. Você pode começar com R$ 200 e transformar em R$ 2.000-5.000 no primeiro mês.

**Por que móveis?**
✅ Margem de lucro alta (100-500%)
✅ Demanda constante
✅ Baixa concorrência (maioria desiste pelo trabalho físico)
✅ Não precisa de habilidades avançadas
✅ Pode fazer em casa

---

## CAPÍTULO 1: ONDE ENCONTRAR MÓVEIS BARATOS

### 1.1 Facebook Marketplace (Melhor Fonte)

**Como buscar:**
- Palavras-chave: "móvel antigo", "doando móvel", "mudança urgente"
- Filtre por "Listados recentemente"
- Configure alertas para notificações instantâneas

**O que procurar:**
- Anúncios com fotos ruins (oportunidade!)
- Descrições como "preciso vender hoje", "aceito qualquer oferta"
- Móveis de madeira maciça (não MDF ou aglomerado)

**Dica:** Ofereça 40-60% do preço pedido. Muita gente aceita para se livrar rápido.

### 1.2 Grupos de Facebook

**Grupos lucrativos:**
- "Vendo tudo - Mudança [sua cidade]"
- "Desapego [sua cidade]"
- "Móveis usados [sua cidade]"

**Estratégia:** Seja o primeiro a comentar "Tenho interesse, mando mensagem"

### 1.3 OLX

**Filtros úteis:**
- Ordenar por "Mais recentes"
- Palavras-chave: "urgente", "doando", "retirar hoje"

### 1.4 Calçadas e Lixões

**Sim, sério!**
- Bairros nobres descartam móveis de qualidade
- Dias de coleta de entulho são minas de ouro
- Sempre pergunte ao morador antes de pegar

### 1.5 Brechós e Bazares

- Negocie preços (sempre tem margem)
- Compre no final do dia (querem esvaziar o estoque)

---

## CAPÍTULO 2: O QUE COMPRAR (E O QUE EVITAR)

### ✅ MÓVEIS LUCRATIVOS

**1. Cômodas e Gaveteiros**
- Compra: R$ 50-150
- Venda: R$ 300-800
- Tempo de restauração: 4-8 horas

**2. Mesas de Centro**
- Compra: R$ 30-100
- Venda: R$ 200-500
- Tempo: 2-4 horas

**3. Cadeiras Antigas**
- Compra: R$ 20-50 (cada)
- Venda: R$ 150-400 (cada)
- Tempo: 2-3 horas

**4. Aparadores e Buffets**
- Compra: R$ 100-300
- Venda: R$ 600-2.000
- Tempo: 6-10 horas

**5. Estantes de Madeira**
- Compra: R$ 80-200
- Venda: R$ 400-1.200
- Tempo: 4-6 horas

### ❌ EVITE

- Móveis de MDF/aglomerado (não duram, difícil restaurar)
- Sofás e colchões (higiene é complicada)
- Móveis muito grandes (difícil transportar e armazenar)
- Peças com cupim ativo (não vale o trabalho)

---

## CAPÍTULO 3: TÉCNICAS DE RESTAURAÇÃO SIMPLES

### 3.1 Ferramentas Básicas (Investimento: R$ 200-300)

**Essenciais:**
- Lixa (grãos 80, 120, 220)
- Pincel e rolo de espuma
- Tinta (esmalte sintético ou chalk paint)
- Verniz ou cera
- Chave de fenda, martelo
- Panos, álcool, desengraxante

**Opcional:**
- Lixadeira elétrica (economiza tempo)
- Pistola de pintura (acabamento profissional)

### 3.2 Processo Passo a Passo

**PASSO 1: Limpeza Profunda**
- Remova gavetas, prateleiras, ferragens
- Lave com água e sabão neutro
- Use desengraxante em manchas difíceis
- Deixe secar completamente (24h)

**PASSO 2: Reparos**
- Cole partes soltas com cola para madeira
- Preencha buracos com massa para madeira
- Aperte parafusos frouxos
- Substitua ferragens quebradas

**PASSO 3: Lixamento**
- Lixe TODA a superfície (lixa 80 para remover tinta antiga)
- Lixe novamente com lixa 120 (acabamento intermediário)
- Finalize com lixa 220 (superfície lisa)
- Limpe o pó com pano úmido

**PASSO 4: Pintura**
- Aplique primer (fundo preparador) - opcional mas recomendado
- Primeira demão de tinta (camada fina)
- Aguarde 4-6 horas
- Segunda demão (cobertura total)
- Terceira demão se necessário

**PASSO 5: Acabamento**
- Aplique verniz ou cera (proteção)
- Instale ferragens novas (puxadores modernos)
- Limpe e fotografe

**TEMPO TOTAL:** 2-3 dias (incluindo secagem)

### 3.3 Estilos que Vendem Mais

**1. Shabby Chic**
- Cores: branco, creme, cinza claro
- Acabamento: levemente envelhecido
- Público: mulheres 25-45 anos

**2. Industrial**
- Cores: preto, cinza chumbo, madeira natural
- Ferragens: metal escovado
- Público: homens 25-40 anos

**3. Escandinavo**
- Cores: branco, bege, cinza claro
- Madeira clara natural
- Público: casais jovens

**4. Rústico/Farmhouse**
- Cores: branco, azul marinho, verde musgo
- Madeira com textura aparente
- Público: famílias, casas de campo

---

## CAPÍTULO 4: FOTOGRAFIA QUE VENDE

### 4.1 Regras de Ouro

1. **Luz Natural é Tudo**
   - Fotografe perto de janelas
   - Horário ideal: 10h-15h
   - Evite flash direto

2. **Fundo Limpo**
   - Parede branca ou neutra
   - Sem objetos no fundo
   - Chão limpo e organizado

3. **Múltiplos Ângulos**
   - Foto frontal
   - Laterais (esquerda e direita)
   - Detalhes (ferragens, textura da madeira)
   - Foto com medidas (use fita métrica na imagem)

4. **Staging (Decoração)**
   - Coloque um vaso com flores
   - Livros decorativos
   - Almofadas (para cadeiras)
   - Cria conexão emocional

### 4.2 Edição Rápida

**Apps Gratuitos:**
- Snapseed: Ajuste brilho e contraste
- VSCO: Filtros profissionais
- Canva: Adicione texto com medidas

**Ajustes básicos:**
- Aumente brilho (+10 a +20)
- Aumente contraste (+10)
- Saturação leve (+5)

---

## CAPÍTULO 5: ONDE E COMO VENDER

### 5.1 Melhores Plataformas

**1. Facebook Marketplace (70% das minhas vendas)**
- Alcance local
- Sem taxas
- Comunicação rápida via Messenger

**2. OLX (20% das vendas)**
- Público diferente do Facebook
- Bom para móveis de maior valor

**3. Instagram (10% das vendas)**
- Crie uma página "@moveis.restaurados.[sua cidade]"
- Poste fotos antes/depois
- Use hashtags locais

### 5.2 Título Matador

**Fórmula:**
[Tipo do Móvel] + [Estilo] + [Diferencial] + [Localização]

**Exemplos:**
✅ "Cômoda Vintage Restaurada - Madeira Maciça - Entrego - Pinheiros/SP"
✅ "Mesa de Centro Industrial - Acabamento Profissional - Pronta Entrega"

**Evite:**
❌ "Móvel bonito"
❌ "Cômoda usada"

### 5.3 Descrição que Converte

**Estrutura:**

1. **Gancho Emocional:**
"Transforme sua sala com essa cômoda única, restaurada à mão com muito carinho."

2. **Especificações:**
- Tipo de madeira
- Medidas (altura x largura x profundidade)
- Número de gavetas/portas
- Acabamento (tinta, verniz, cera)

3. **Diferenciais:**
- "Madeira maciça de lei"
- "Ferragens novas importadas"
- "Acabamento profissional"
- "Peça única"

4. **Call to Action:**
"Chama no WhatsApp para combinar a retirada ou entrega!"

### 5.4 Precificação Estratégica

**Fórmula:**
Custo Total × 3 = Preço de Venda

**Exemplo:**
- Móvel: R$ 100
- Materiais: R$ 80
- Transporte: R$ 20
- **Custo Total: R$ 200**
- **Preço de Venda: R$ 600**

**Dica:** Coloque o preço 20% acima do que quer receber (margem para negociação)

---

## CAPÍTULO 6: NEGOCIAÇÃO E FECHAMENTO

### 6.1 Lidando com Objeções

**"Está caro"**
Resposta: "Entendo! Esse é um móvel de madeira maciça, restaurado profissionalmente. Móveis similares novos custam R$ [valor 3x maior]. Posso fazer por R$ [10% de desconto] se você retirar hoje."

**"Tem algum defeito?"**
Resposta: "É um móvel antigo restaurado, então tem a personalidade da madeira natural. Mas está estruturalmente perfeito e com acabamento novo."

**"Você entrega?"**
Resposta: "Sim! Cobro R$ [30-50] para entrega na sua região. Ou você pode retirar sem custo."

### 6.2 Fechando a Venda

1. **Crie Urgência:**
"Tenho mais 2 pessoas interessadas, quem confirmar primeiro leva"

2. **Facilite o Pagamento:**
- PIX (preferencial)
- Dinheiro
- Cartão (use maquininha)

3. **Combine Detalhes:**
- Horário de retirada/entrega
- Endereço exato
- Confirme 1 dia antes

---

## CAPÍTULO 7: LOGÍSTICA E TRANSPORTE

### 7.1 Retirada

**Opções:**
- Carro próprio (ideal)
- Carro emprestado de amigo/familiar
- Aluguel de van (R$ 80-150/dia)
- Uber/99 com porta-malas grande

**Dica:** Sempre leve:
- Corda ou cinta para amarrar
- Cobertores velhos (proteger o móvel)
- Ajudante (móveis pesados)

### 7.2 Entrega

**Precificação:**
- Até 5 km: R$ 30
- 5-10 km: R$ 50
- 10-20 km: R$ 80

**Opções:**
- Você mesmo (mais lucro)
- Frete por app (Fretebras, 99Frete)
- Parceria com fretista local

---

## CAPÍTULO 8: ESCALANDO O NEGÓCIO

### Mês 1: Aprendizado
- Compre 2-3 móveis pequenos
- Teste técnicas de restauração
- Aprenda a fotografar e vender
- **Meta: R$ 500-1.000 de lucro**

### Mês 2-3: Consistência
- Compre 5-7 móveis por mês
- Melhore velocidade de restauração
- Construa reputação online
- **Meta: R$ 2.000-3.000 de lucro**

### Mês 4-6: Escala
- Compre 10-15 móveis por mês
- Contrate ajudante para lixar/pintar (R$ 80-100/dia)
- Alugue um espaço pequeno (garagem, galpão)
- **Meta: R$ 5.000-8.000 de lucro**

### Mês 7+: Negócio Estabelecido
- Equipe de 2-3 pessoas
- Estoque rotativo de 20-30 móveis
- Loja física ou showroom
- **Meta: R$ 10.000-20.000 de lucro**

---

## CAPÍTULO 9: ERROS FATAIS A EVITAR

❌ **Comprar móveis de MDF:** Não dá para restaurar direito
❌ **Não testar estrutura:** Móvel quebrado = prejuízo
❌ **Pular o lixamento:** Pintura descasca em semanas
❌ **Fotos ruins:** Ninguém compra o que não vê bem
❌ **Preço muito baixo:** Desvaloriza seu trabalho
❌ **Não dar garantia:** Clientes ficam inseguros
❌ **Estocar demais:** Dinheiro parado não rende

---

## CAPÍTULO 10: RECURSOS E INSPIRAÇÃO

### Canais do YouTube (em português):
- "Restaurando Móveis" - Técnicas detalhadas
- "Faça Você Mesmo" - DIY de móveis

### Instagram para Inspiração:
- @moveis.vintage.sp
- @restauracao.moveis
- @flippingmoveis

### Fornecedores de Material:
- Leroy Merlin: Tintas e ferramentas
- Telhanorte: Materiais de construção
- Mercado Livre: Ferragens decorativas

---

## CONCLUSÃO

Flipping de móveis não é um "get rich quick". É trabalho físico, sujo e cansativo. MAS é extremamente lucrativo e gratificante.

**Você vai precisar de:**
- Disposição para trabalhar com as mãos
- Paciência (secagem de tinta leva tempo)
- Olho para design
- Habilidade de negociação

**Você vai ganhar:**
- Renda extra sólida (R$ 2.000-10.000/mês)
- Flexibilidade de horários
- Satisfação de transformar o velho em novo
- Possibilidade de escalar para um negócio real

**Meu conselho final:**
Comece HOJE. Pegue R$ 200, encontre um móvel no Facebook Marketplace, restaure neste fim de semana e venda na próxima semana. Você vai aprender mais fazendo do que lendo.

Boa sorte e boas vendas! 🛠️💰`,
      unlocked: false,
    },
    {
      id: 2,
      title: 'Vídeo-Aula: Automação de Processos com IA',
      type: 'Vídeo',
      description: 'Aprenda a criar automações usando Zapier e Make (Integromat) para vender serviços por R$ 1.000-3.000 por projeto. Inclui 10 templates prontos.',
      content: `# VÍDEO-AULA: AUTOMAÇÃO DE PROCESSOS COM IA

## MÓDULO 1: INTRODUÇÃO À AUTOMAÇÃO (15 min)

### O Que Você Vai Aprender:
- O que é automação de processos
- Por que empresas pagam bem por isso
- Ferramentas que vamos usar (todas com versão gratuita)
- Quanto você pode ganhar

### Por Que Automação é Lucrativa:
- Empresas gastam 20-40h/semana em tarefas repetitivas
- Você cobra R$ 1.500-3.000 por automação
- Leva 2-4 horas para criar
- Cliente economiza centenas de horas por ano

---

## MÓDULO 2: FERRAMENTAS ESSENCIAIS (20 min)

### 2.1 Zapier
**O que é:** Conecta aplicativos e automatiza fluxos de trabalho
**Versão gratuita:** 100 tarefas/mês (suficiente para começar)
**Site:** zapier.com

**Exemplo simples:**
"Quando receber e-mail no Gmail → Salvar anexo no Google Drive → Enviar notificação no Slack"

### 2.2 Make (Integromat)
**O que é:** Similar ao Zapier, mas mais poderoso e visual
**Versão gratuita:** 1.000 operações/mês
**Site:** make.com

**Vantagem:** Interface visual (você vê o fluxo)

### 2.3 ChatGPT (via API)
**O que é:** Integra IA nas automações
**Custo:** ~$0,002 por requisição (muito barato)
**Uso:** Gerar textos, resumir e-mails, responder perguntas

---

## MÓDULO 3: 10 AUTOMAÇÕES QUE EMPRESAS PAGAM BEM (60 min)

### AUTOMAÇÃO #1: Geração Automática de Propostas Comerciais
**Problema do cliente:** Vendedores gastam 2h criando cada proposta
**Solução:** Formulário → ChatGPT gera proposta → Envia por e-mail
**Valor de venda:** R$ 1.500
**Tempo para criar:** 3 horas

**Passo a Passo:**
1. Crie formulário no Google Forms (dados do cliente)
2. Conecte ao Zapier
3. Use ChatGPT para gerar texto da proposta
4. Insira dados em template de Google Docs
5. Converta para PDF
6. Envie por e-mail automaticamente

**Prompt para ChatGPT:**
"Crie uma proposta comercial profissional para [nome da empresa] que precisa de [serviço]. Inclua: introdução, escopo do projeto, investimento de [valor], prazo de [dias] e call-to-action."

---

### AUTOMAÇÃO #2: Atendimento Automático via WhatsApp
**Problema:** Empresa recebe 50+ mensagens/dia com perguntas repetitivas
**Solução:** Bot responde automaticamente perguntas comuns
**Valor de venda:** R$ 2.000
**Tempo para criar:** 4 horas

**Ferramentas:**
- Make.com
- WhatsApp Business API (ou Evolution API - gratuita)
- ChatGPT

**Como funciona:**
1. Cliente envia mensagem no WhatsApp
2. Make captura a mensagem
3. ChatGPT analisa e gera resposta
4. Resposta é enviada automaticamente
5. Se não souber responder, encaminha para humano

---

### AUTOMAÇÃO #3: Extração de Dados de E-mails
**Problema:** Empresa recebe pedidos por e-mail e precisa copiar dados manualmente para planilha
**Solução:** E-mail → IA extrai dados → Salva em Google Sheets
**Valor de venda:** R$ 1.200
**Tempo para criar:** 2 horas

**Exemplo:**
Cliente recebe e-mails com pedidos:
"Olá, gostaria de 10 unidades do produto X, entregar no endereço Y"

Automação extrai:
- Quantidade: 10
- Produto: X
- Endereço: Y
- Salva tudo em planilha

---

### AUTOMAÇÃO #4: Postagem Automática em Redes Sociais
**Problema:** Empresa precisa postar todo dia no Instagram, Facebook, LinkedIn
**Solução:** Escreve uma vez → Posta em todas as redes automaticamente
**Valor de venda:** R$ 800/mês (recorrente!)
**Tempo para criar:** 3 horas

**Como funciona:**
1. Cliente escreve post em Google Sheets
2. Zapier agenda publicação
3. Posta simultaneamente em todas as redes
4. Adiciona hashtags automaticamente

---

### AUTOMAÇÃO #5: Backup Automático de Conversas
**Problema:** Empresa perde conversas importantes do WhatsApp/E-mail
**Solução:** Salva todas as conversas em Google Drive organizadas por data
**Valor de venda:** R$ 1.000
**Tempo para criar:** 2 horas

---

### AUTOMAÇÃO #6: Notificações de Vendas em Tempo Real
**Problema:** Dono da empresa quer saber na hora quando vende
**Solução:** Venda no site → Notificação no WhatsApp/Telegram
**Valor de venda:** R$ 600
**Tempo para criar:** 1 hora

---

### AUTOMAÇÃO #7: Geração de Relatórios Semanais
**Problema:** Gerente gasta 3h toda segunda fazendo relatório
**Solução:** Automação coleta dados e gera relatório automaticamente
**Valor de venda:** R$ 2.500
**Tempo para criar:** 5 horas

**Dados que pode incluir:**
- Vendas da semana
- Novos clientes
- Ticket médio
- Produtos mais vendidos
- Envia por e-mail toda segunda 8h

---

### AUTOMAÇÃO #8: Qualificação de Leads
**Problema:** Vendedor perde tempo com leads ruins
**Solução:** IA analisa lead e dá nota de 0-10
**Valor de venda:** R$ 1.800
**Tempo para criar:** 3 horas

**Como funciona:**
1. Lead preenche formulário
2. ChatGPT analisa respostas
3. Dá nota baseada em critérios
4. Leads com nota 8+ vão direto para vendedor
5. Leads baixos vão para nutrição automática

---

### AUTOMAÇÃO #9: Transcrição de Reuniões
**Problema:** Ninguém quer fazer ata de reunião
**Solução:** Grava áudio → Transcreve → Gera resumo → Envia por e-mail
**Valor de venda:** R$ 1.500
**Tempo para criar:** 3 horas

**Ferramentas:**
- Whisper (OpenAI) para transcrição
- ChatGPT para resumo
- Make.com para orquestrar

---

### AUTOMAÇÃO #10: Monitoramento de Concorrência
**Problema:** Empresa quer saber quando concorrente muda preço
**Solução:** Monitora site do concorrente → Envia alerta se mudar
**Valor de venda:** R$ 2.000
**Tempo para criar:** 4 horas

---

## MÓDULO 4: COMO VENDER AUTOMAÇÕES (30 min)

### 4.1 Encontrando Clientes

**Onde procurar:**
- LinkedIn: Procure por "gerente de operações", "dono de empresa"
- Grupos de Facebook de empreendedores
- 99Freelas e Workana
- Indicações de clientes satisfeitos

**Mensagem de prospecção:**
"Olá [Nome], vi que você é [cargo] na [empresa]. Vocês têm algum processo repetitivo que toma muito tempo da equipe? Eu automatizo processos usando IA, economizando 10-20h/semana. Posso mostrar 3 exemplos rápidos?"

### 4.2 Apresentando a Solução

**Estrutura da reunião:**
1. Entenda o problema (10 min)
2. Mostre exemplo similar (5 min)
3. Explique como funciona (5 min)
4. Apresente o investimento (2 min)

**Precificação:**
- Automação simples (1-2 horas): R$ 800-1.200
- Automação média (3-4 horas): R$ 1.500-2.500
- Automação complexa (5+ horas): R$ 3.000-5.000

**Dica:** Sempre ofereça manutenção mensal (R$ 200-500/mês)

### 4.3 Garantindo Resultados

**Promessa:**
"Se a automação não economizar pelo menos 5 horas/semana, eu refaço sem custo adicional"

**Suporte:**
- 30 dias de ajustes gratuitos
- Treinamento da equipe (1h)
- Documentação completa

---

## MÓDULO 5: TEMPLATES PRONTOS (45 min)

### Template #1: Formulário → E-mail
**Quando usar:** Cliente quer receber notificação quando alguém preenche formulário

**Configuração no Zapier:**
1. Trigger: "New Response in Google Forms"
2. Action: "Send Email in Gmail"
3. Personalize o e-mail com dados do formulário

**Tempo de configuração:** 10 minutos

---

### Template #2: E-mail → Google Sheets
**Quando usar:** Salvar dados de e-mails em planilha

**Configuração:**
1. Trigger: "New Email in Gmail" (com filtro)
2. Action: "Create Spreadsheet Row in Google Sheets"
3. Mapear campos do e-mail para colunas

---

### Template #3: Agendamento de Posts
**Quando usar:** Cliente quer agendar posts em múltiplas redes

**Ferramentas:** Buffer ou Hootsuite + Zapier

---

### Template #4: Chatbot Simples
**Quando usar:** Responder perguntas frequentes automaticamente

**Ferramentas:** Make + ChatGPT + WhatsApp API

---

### Template #5: Gerador de Contratos
**Quando usar:** Empresa fecha muitos contratos similares

**Fluxo:**
1. Formulário com dados do cliente
2. ChatGPT preenche template de contrato
3. Gera PDF
4. Envia para assinatura (DocuSign ou similar)

---

## MÓDULO 6: CASOS DE SUCESSO REAIS (20 min)

### Caso 1: Agência de Marketing
**Problema:** 15 horas/semana criando relatórios para clientes
**Solução:** Automação coleta dados e gera relatórios
**Resultado:** Economizaram R$ 3.000/mês em horas de trabalho
**Valor cobrado:** R$ 2.500 (setup) + R$ 300/mês (manutenção)

### Caso 2: E-commerce de Roupas
**Problema:** Atendimento no WhatsApp tomava 6h/dia
**Solução:** Bot responde 80% das perguntas automaticamente
**Resultado:** Reduziu atendimento para 1h/dia
**Valor cobrado:** R$ 1.800

### Caso 3: Escritório de Advocacia
**Problema:** Transcrever audiências manualmente
**Solução:** Automação transcreve e gera resumo
**Resultado:** Economizam 10h/semana
**Valor cobrado:** R$ 2.000 + R$ 400/mês

---

## MÓDULO 7: ERROS A EVITAR (15 min)

❌ **Prometer o que não pode entregar**
→ Sempre faça um teste antes de vender

❌ **Não documentar o processo**
→ Cliente precisa entender como funciona

❌ **Cobrar muito barato**
→ Seu trabalho economiza HORAS do cliente

❌ **Não oferecer suporte**
→ Automações quebram, você precisa consertar

❌ **Criar automações muito complexas**
→ Quanto mais simples, menos problemas

---

## MÓDULO 8: PRÓXIMOS PASSOS (10 min)

### Semana 1: Aprendizado
- Crie conta no Zapier e Make
- Faça 3 automações para você mesmo
- Teste os templates deste curso

### Semana 2: Portfólio
- Crie 5 exemplos de automações
- Grave vídeos curtos mostrando cada uma
- Monte uma página simples (Notion ou Google Sites)

### Semana 3: Prospecção
- Entre em 10 grupos de empreendedores
- Envie 20 mensagens de prospecção no LinkedIn
- Ofereça 1 automação gratuita para conseguir depoimento

### Semana 4: Primeiros Clientes
- Meta: Fechar 2 projetos
- Valor mínimo: R$ 800 cada
- Peça indicações após entregar

---

## RECURSOS EXTRAS

### Comunidades:
- Grupo no Facebook: "Automação de Processos Brasil"
- Discord: "No-Code Makers"

### Cursos Gratuitos:
- Zapier University (zapier.com/learn)
- Make Academy (make.com/academy)

### Ferramentas Úteis:
- Loom: Gravar vídeos de demonstração
- Notion: Documentar automações
- Figma: Criar fluxogramas visuais

---

## CONCLUSÃO

Automação de processos é uma das habilidades mais valiosas do mercado atual. Empresas estão DESESPERADAS para economizar tempo e dinheiro.

**Você não precisa:**
- Saber programar
- Ter diploma
- Investir muito dinheiro

**Você precisa:**
- Entender o problema do cliente
- Conhecer as ferramentas (Zapier, Make)
- Ser criativo para conectar as peças

**Minha garantia:**
Se você aplicar tudo deste curso e não conseguir seu primeiro cliente em 30 dias, me mande mensagem que eu te ajudo pessoalmente.

Agora é com você. Comece HOJE! 🚀`,
      unlocked: false,
    },
    {
      id: 3,
      title: 'Tutorial Completo: Microtarefas Internacionais em Dólar',
      type: 'Tutorial',
      description: 'Guia definitivo para ganhar R$ 800-2.500/mês com microtarefas em plataformas que pagam em dólar. Inclui estratégias de otimização e declaração de IR.',
      content: `# TUTORIAL COMPLETO: MICROTAREFAS INTERNACIONAIS EM DÓLAR

## ÍNDICE
1. Introdução
2. Melhores Plataformas
3. Como Se Cadastrar e Ser Aprovado
4. Estratégias de Otimização
5. Como Receber os Pagamentos
6. Declaração de Imposto de Renda
7. Cronograma Semanal
8. Perguntas Frequentes

---

## 1. INTRODUÇÃO

### O Que São Microtarefas?

Microtarefas são pequenos trabalhos online que podem ser feitos de qualquer lugar, a qualquer hora. Exemplos:
- Categorizar imagens
- Transcrever áudios curtos
- Validar dados
- Moderar conteúdo
- Pesquisar informações

### Por Que Fazer Microtarefas?

✅ **Flexibilidade Total:** Trabalhe quando quiser
✅ **Sem Experiência Necessária:** Qualquer um pode começar
✅ **Pagamento em Dólar:** Ganhos em moeda forte
✅ **Renda Extra Confiável:** R$ 800-2.500/mês realista
✅ **Sem Investimento:** Só precisa de computador e internet

### Quanto Dá Para Ganhar?

**Realista (2h/dia):** R$ 800-1.200/mês
**Dedicado (4h/dia):** R$ 1.500-2.500/mês
**Full-time (8h/dia):** R$ 3.000-5.000/mês

*Valores considerando dólar a R$ 5,00*

---

## 2. MELHORES PLATAFORMAS

### Plataforma #1: Amazon Mechanical Turk (MTurk)
**Pagamento:** $0,01 - $5,00 por tarefa
**Média:** $5-10/hora
**Pagamento:** PayPal ou Amazon Gift Card

**Prós:**
✅ Maior plataforma do mundo
✅ Milhares de tarefas disponíveis
✅ Pagamento semanal

**Contras:**
❌ Difícil aprovação para brasileiros
❌ Precisa de conta bancária dos EUA (ou usar Payoneer)

**Como se cadastrar:**
1. Acesse mturk.com
2. Clique em "Get Started with Amazon Mechanical Turk"
3. Faça login com sua conta Amazon
4. Preencha o formulário (use seus dados reais)
5. Aguarde aprovação (pode levar 1-7 dias)

**Dica:** Se for rejeitado, tente novamente após 6 meses.

---

### Plataforma #2: Clickworker
**Pagamento:** €0,01 - €10,00 por tarefa
**Média:** €8-12/hora
**Pagamento:** PayPal ou Payoneer

**Prós:**
✅ Aceita brasileiros facilmente
✅ Tarefas em português disponíveis
✅ Pagamento semanal

**Contras:**
❌ Menos tarefas que MTurk
❌ Precisa passar em testes de qualificação

**Como se cadastrar:**
1. Acesse clickworker.com
2. Clique em "Register now"
3. Preencha seus dados
4. Confirme e-mail
5. Faça os testes de qualificação (IMPORTANTE!)

**Testes de Qualificação:**
- Teste de Português (se quiser tarefas em PT)
- Teste de Inglês (abre mais oportunidades)
- Testes específicos por tipo de tarefa

---

### Plataforma #3: Appen
**Pagamento:** $10-20/hora
**Média:** $12-15/hora
**Pagamento:** PayPal ou Payoneer

**Prós:**
✅ Pagamento alto
✅ Projetos de longo prazo (estabilidade)
✅ Aceita brasileiros

**Contras:**
❌ Processo de aprovação longo
❌ Menos tarefas disponíveis
❌ Precisa de qualificações específicas

**Como se cadastrar:**
1. Acesse appen.com
2. Clique em "Join Our Crowd"
3. Crie conta e preencha perfil detalhado
4. Faça testes de qualificação
5. Candidate-se a projetos disponíveis

**Dica:** Appen é melhor para quem quer projetos longos (3-6 meses) e não tarefas rápidas.

---

### Plataforma #4: Toloka (Yandex)
**Pagamento:** $0,01 - $1,00 por tarefa
**Média:** $3-6/hora
**Pagamento:** PayPal, Payoneer, Skrill

**Prós:**
✅ Fácil aprovação
✅ App mobile (faça tarefas no celular)
✅ Tarefas simples

**Contras:**
❌ Pagamento menor que outras plataformas
❌ Tarefas podem acabar rápido

**Como se cadastrar:**
1. Baixe o app Toloka (iOS/Android) ou acesse toloka.ai
2. Crie conta com e-mail
3. Preencha perfil
4. Comece a fazer tarefas imediatamente

**Dica:** Toloka é ótima para complementar outras plataformas.

---

### Plataforma #5: Remotasks
**Pagamento:** $0,10 - $10,00 por tarefa
**Média:** $5-10/hora
**Pagamento:** PayPal

**Prós:**
✅ Treinamento gratuito
✅ Tarefas de IA (categorização, anotação)
✅ Comunidade ativa

**Contras:**
❌ Tarefas podem ser complexas
❌ Precisa passar em treinamentos

**Como se cadastrar:**
1. Acesse remotasks.com
2. Clique em "Sign Up"
3. Crie conta
4. Complete os cursos de treinamento
5. Comece a fazer tarefas

---

## 3. COMO SE CADASTRAR E SER APROVADO

### 3.1 Documentos Necessários

**Essenciais:**
- CPF
- E-mail válido
- Conta PayPal ou Payoneer
- Comprovante de residência (algumas plataformas)

**Dica:** Use um e-mail profissional (evite @hotmail, prefira @gmail)

### 3.2 Preenchendo o Perfil

**Informações que aumentam aprovação:**
- Formação acadêmica (mesmo que incompleta)
- Idiomas que fala (inglês é essencial)
- Habilidades técnicas
- Experiência profissional

**Seja honesto!** Mentir pode resultar em banimento.

### 3.3 Testes de Qualificação

**Como passar:**
1. **Leia as instruções com atenção** (maioria reprova por não ler)
2. **Faça devagar** (qualidade > velocidade)
3. **Use exemplos** (plataformas sempre dão exemplos)
4. **Revise antes de enviar**

**Se reprovar:**
- Não desanime! Você pode refazer após 7-30 dias
- Estude os exemplos novamente
- Peça feedback na comunidade da plataforma

---

## 4. ESTRATÉGIAS DE OTIMIZAÇÃO

### 4.1 Escolha as Tarefas Certas

**Calcule o valor por hora:**
Tarefa paga $0,50 e leva 5 minutos = $6/hora ✅
Tarefa paga $1,00 e leva 15 minutos = $4/hora ❌

**Regra de ouro:** Só faça tarefas que pagam acima de $5/hora

### 4.2 Use Atalhos de Teclado

**Economize 30-40% do tempo:**
- Tab: Avançar para próximo campo
- Enter: Confirmar
- Ctrl+C / Ctrl+V: Copiar e colar
- Ctrl+Z: Desfazer

### 4.3 Trabalhe em Lotes

**Em vez de:**
Fazer 1 tarefa de cada tipo

**Faça:**
10 tarefas do mesmo tipo seguidas

**Por quê?**
Você fica mais rápido com a prática e não perde tempo mudando de contexto.

### 4.4 Horários Estratégicos

**Melhores horários (horário de Brasília):**
- 6h-9h (empresas dos EUA postam tarefas)
- 14h-17h (Europa posta tarefas)
- 22h-1h (Ásia posta tarefas)

**Dica:** Configure notificações para saber quando há tarefas novas.

### 4.5 Múltiplas Plataformas

**Não dependa de uma só!**

**Estratégia:**
- 3 plataformas principais (MTurk, Clickworker, Appen)
- 2 plataformas secundárias (Toloka, Remotasks)

**Rotina:**
1. Abra todas as plataformas
2. Veja qual tem mais tarefas
3. Foque naquela por 1-2 horas
4. Alterne se acabarem as tarefas

---

## 5. COMO RECEBER OS PAGAMENTOS

### 5.1 PayPal (Mais Comum)

**Vantagens:**
✅ Aceito em quase todas as plataformas
✅ Transferência rápida (1-2 dias)

**Desvantagens:**
❌ Taxa de conversão ruim (4-5% abaixo do dólar comercial)
❌ Taxa de saque: 4,99% + R$ 1,00

**Como criar:**
1. Acesse paypal.com.br
2. Clique em "Cadastre-se"
3. Escolha "Conta Pessoal"
4. Preencha seus dados
5. Vincule CPF e conta bancária

**Dica:** Mantenha sempre um saldo mínimo para evitar taxas de inatividade.

### 5.2 Payoneer (Melhor Opção)

**Vantagens:**
✅ Taxa de conversão melhor que PayPal
✅ Cartão de débito Mastercard
✅ Saque direto para conta brasileira

**Desvantagens:**
❌ Nem todas as plataformas aceitam
❌ Taxa de saque: $1,50 por transferência

**Como criar:**
1. Acesse payoneer.com
2. Clique em "Sign Up"
3. Preencha dados pessoais
4. Envie documentos (CPF, comprovante de residência)
5. Aguarde aprovação (2-5 dias)

**Dica:** Use o cartão Payoneer para compras internacionais (sem IOF!).

### 5.3 Wise (Antiga TransferWise)

**Vantagens:**
✅ Melhor taxa de câmbio
✅ Conta em múltiplas moedas
✅ Transparência total nas taxas

**Desvantagens:**
❌ Poucas plataformas de microtarefas aceitam
❌ Taxa de conversão: 1,1%

---

## 6. DECLARAÇÃO DE IMPOSTO DE RENDA

### 6.1 Você Precisa Declarar?

**SIM, se:**
- Ganhou mais de R$ 28.559,70 no ano (2024)
- Ou se já declara IR por outros motivos

**NÃO, se:**
- Ganhou menos que o limite
- E não tem outros rendimentos

### 6.2 Como Declarar

**Categoria:**
"Rendimentos Tributáveis Recebidos de Pessoa Física e do Exterior"

**Informações necessárias:**
- Valor total recebido no ano (em reais)
- Nome da plataforma (ex: "Amazon Mechanical Turk")
- País de origem (ex: "Estados Unidos")

**Dica:** Guarde todos os comprovantes de pagamento (extratos do PayPal/Payoneer).

### 6.3 Imposto a Pagar

**Tabela progressiva (2024):**
- Até R$ 2.112,00/mês: Isento
- R$ 2.112,01 a R$ 2.826,65: 7,5%
- R$ 2.826,66 a R$ 3.751,05: 15%
- R$ 3.751,06 a R$ 4.664,68: 22,5%
- Acima de R$ 4.664,68: 27,5%

**Exemplo:**
Ganhou R$ 30.000 no ano = R$ 2.500/mês
Imposto: ~R$ 2.400 no ano (8%)

**Dica:** Separe 10-15% dos ganhos para pagar o IR no ano seguinte.

---

## 7. CRONOGRAMA SEMANAL

### Rotina Para Ganhar R$ 1.500/mês (2h/dia)

**Segunda a Sexta:**
- 7h-9h: Microtarefas (foco em tarefas de alto valor)

**Sábado:**
- 9h-11h: Microtarefas
- 11h-12h: Fazer testes de qualificação em novas plataformas

**Domingo:**
- Descanso (ou tarefas leves no celular)

### Rotina Para Ganhar R$ 3.000/mês (4h/dia)

**Segunda a Sexta:**
- 7h-9h: Plataforma 1 (MTurk ou Clickworker)
- 14h-16h: Plataforma 2 (Appen ou Remotasks)

**Sábado:**
- 9h-13h: Microtarefas variadas

**Domingo:**
- Descanso

---

## 8. PERGUNTAS FREQUENTES

**P: Preciso saber inglês?**
R: Para ganhar bem, sim. Mas há tarefas em português em plataformas como Clickworker e Toloka.

**P: Quanto tempo leva para receber o primeiro pagamento?**
R: Varia por plataforma:
- Toloka: 1-3 dias
- Clickworker: 7 dias
- MTurk: 7-10 dias
- Appen: 30 dias

**P: Posso fazer microtarefas no celular?**
R: Algumas plataformas têm app (Toloka, Clickworker). Mas computador é mais produtivo.

**P: Vou ser banido se usar VPN?**
R: SIM! Nunca use VPN. Plataformas detectam e banem permanentemente.

**P: Posso fazer microtarefas enquanto trabalho?**
R: Tecnicamente sim, mas não é recomendado. Você precisa de foco para ser produtivo.

**P: Vale a pena fazer microtarefas como renda principal?**
R: Para renda extra, sim. Como renda principal, só se combinar com outras fontes (freelancing, etc).

---

## CONCLUSÃO

Microtarefas não vão te deixar rico, mas são uma forma confiável de ganhar R$ 800-2.500/mês com flexibilidade total.

**Meus 3 conselhos finais:**

1. **Seja consistente:** 2h/dia todo dia > 10h um dia só
2. **Diversifique:** Não dependa de uma plataforma só
3. **Otimize sempre:** Calcule valor/hora e foque no que paga melhor

**Próximos passos:**
1. Cadastre-se em 3 plataformas HOJE
2. Faça os testes de qualificação
3. Comece com 1h/dia e aumente gradualmente

Boa sorte e bons ganhos! 💰`,
      unlocked: false,
    },
];

export const earnNowTips: EarnNowTip[] = [
  {
    id: 1,
    title: 'Como Flipar Celulares: Lucro de R$ 400-1.500 por Aparelho',
    steps: [
      '1. ONDE ENCONTRAR: Facebook Marketplace e OLX. Procure por "celular tela quebrada", "celular com defeito", "aceito propostas". Filtre por "listados recentemente" para pegar as melhores ofertas.',
      '2. O QUE COMPRAR: iPhones 8/X/11 com tela rachada (R$ 400-800), Samsung Galaxy S10/S20 com problemas de bateria (R$ 300-600), Xiaomi/Motorola com arranhões (R$ 200-400). SEMPRE verifique se o IMEI está limpo (não bloqueado).',
      '3. TESTE ANTES DE COMPRAR: Confirme que liga, carrega, touch funciona (mesmo com tela rachada), e não está bloqueado por Google/iCloud. Tire foto do IMEI e consulte no site da operadora.',
      '4. REPAROS SIMPLES: Troca de tela custa R$ 80-150 em assistências, bateria R$ 50-100, limpeza e polimento R$ 20-30. Ou aprenda no YouTube e faça você mesmo (margem maior).',
      '5. ONDE REVENDER: OLX (vendas rápidas), Mercado Livre (maior alcance, taxa 10-15%), Facebook Marketplace (sem taxas), Instagram (crie página de semi-novos). Destaque: "Testado", "Garantia 7 dias", "Aceito cartão".',
      '6. PRECIFICAÇÃO: Pesquise preço médio no Mercado Livre e venda 10-15% abaixo para girar rápido. Exemplo: iPhone X 64GB - Compra R$ 600 + Tela R$ 150 = R$ 750. Venda R$ 1.200-1.400. Lucro: R$ 450-650 (60-87%).'
    ],
  },
  {
    id: 2,
    title: 'Limpeza Pós-Obra: R$ 200-600 por Dia',
    steps: [
      '1. INVESTIMENTO INICIAL (R$ 150-250): Vassoura, rodo, pá, balde, panos, desengordurante, água sanitária, detergente, escada pequena, luvas e máscara. Opcional: aspirador potente, enceradeira, lavadora de alta pressão.',
      '2. MARKETING LOCAL: Crie panfletos no Canva: "LIMPEZA PÓS-OBRA E MUDANÇAS - Deixamos seu imóvel impecável! WhatsApp: [seu número]". Distribua em lojas de construção, imobiliárias, condomínios em construção e grupos de bairro no Facebook.',
      '3. PRECIFICAÇÃO: Pós-obra: Apto 1 quarto R$ 250-350, 2 quartos R$ 350-500, Casa 3 quartos R$ 500-800. Pós-mudança: Apto pequeno R$ 200-300, Casa média R$ 300-500. Limpeza profunda: R$ 80-120 por cômodo.',
      '4. PROCESSO: Peça fotos antes ou faça visita, avalie nível de sujeira, dê orçamento honesto, combine 50% antes e 50% depois. Durante: chegue no horário, tire fotos "antes", comece pelos cômodos mais sujos, seja detalhista.',
      '5. DIFERENCIAIS: Use produtos ecológicos, ofereça garantia ("se não ficar satisfeito, volto e refaço"), mostre fotos antes/depois, prometa entrega em 24h. Isso permite cobrar 20-30% a mais.',
      '6. ESCALAR: Mês 1-2: Você sozinho (2-3 serviços/semana = R$ 2.000-3.000/mês). Mês 3-4: Contrate ajudante (R$ 80-100/dia). Mês 6+: Equipe de 2-3 pessoas, foque em conseguir clientes. Cálculo: 3 limpezas/semana × R$ 400 = R$ 4.800/mês - R$ 500 custos = R$ 4.300 líquido.'
    ]
  },
  {
    id: 3,
    title: 'Criação de Conteúdo com IA: R$ 2.000-5.000/mês',
    steps: [
      '1. FERRAMENTAS GRATUITAS: ChatGPT (textos e roteiros), Canva (designs), Grammarly (revisão), Notion (organizar projetos). Você NÃO precisa da versão paga para começar.',
      '2. SERVIÇOS QUE VOCÊ PODE OFERECER: Posts para redes sociais (R$ 300-800/mês por cliente, 12 posts), Artigos para blog (R$ 100-300/artigo), Roteiros para vídeos/Reels (R$ 50-150/roteiro), E-mails marketing (R$ 200-500/campanha).',
      '3. MONTE PORTFÓLIO RÁPIDO: Crie 5 exemplos de posts para diferentes nichos, escreva 2 artigos sobre temas populares, faça 3 roteiros de vídeo. Use ChatGPT para gerar, mas SEMPRE edite e personalize.',
      '4. ONDE OFERECER: 99Freelas (procure "redator", "social media"), Workana (filtre "conteúdo"), Grupos de Facebook ("Freelas de Marketing Digital"), LinkedIn (mensagens para donos de pequenas empresas).',
      '5. PROPOSTA IRRESISTÍVEL: "Olá [Nome], vi que você tem [tipo de negócio]. Posso criar 12 posts profissionais para seu Instagram por apenas R$ 400/mês. Entrego tudo pronto para você só publicar. Quer ver 3 exemplos gratuitos do seu nicho?"',
      '6. PROMPTS MATADORES: Para posts: "Crie 5 ideias de posts para Instagram de uma [negócio] que vende [produto]. Tom [casual/profissional]. Inclua call-to-action." Para artigos: "Escreva 800 palavras sobre [tema] para blog de [nicho]. Use H2 e H3. Inclua exemplos práticos e CTA." IMPORTANTE: SEMPRE revise e edite o conteúdo da IA!'
    ]
  },
  {
    id: 4,
    title: 'Testes de Usabilidade: R$ 50-200 por Hora',
    steps: [
      '1. O QUE É: Empresas pagam para você navegar em sites/apps e gravar sua tela enquanto fala sobre sua experiência. É literalmente ser pago para dar sua opinião!',
      '2. MELHORES PLATAFORMAS: UserTesting ($10-60 por teste, 10-60 min), TryMyUI ($10 por teste, 15-20 min), Userlytics ($5-90 por teste, tem tarefas em português!), TestingTime (€50-100/hora, testes ao vivo).',
      '3. REQUISITOS: Computador, microfone funcional (headset é melhor), webcam (algumas exigem), internet estável (mín 5 Mbps), PayPal ou Payoneer para receber.',
      '4. COMO SER APROVADO: Fale MUITO durante o teste (pensamento em voz alta), seja específico ("Esse botão está muito pequeno, não consigo clicar facilmente"), não apenas diga "legal" ou "ruim", explique o PORQUÊ.',
      '5. MAXIMIZAR GANHOS: Cadastre-se em TODAS as plataformas (5-10), fique de olho nos e-mails (testes são por ordem de chegada, responda em 5 min), seja consistente (1 teste/semana mínimo), aprimore feedback (seja detalhista, use termos técnicos).',
      '6. QUANTO GANHAR: Conservador: 4 testes/semana × R$ 50 = R$ 800/mês. Realista: 10 testes/semana × R$ 70 = R$ 2.800/mês. Otimista: 15 testes/semana × R$ 100 = R$ 6.000/mês. DICA: Combine com outras microtarefas (Toloka, Clickworker) para renda constante.'
    ],
  },
  {
    id: 5,
    title: 'Arbitragem na Amazon: R$ 1.500-8.000/mês',
    steps: [
      '1. O QUE É: Comprar produtos em liquidação (lojas físicas ou online) e revender na Amazon por preço normal. 100% legal, milhares vivem disso. Amazon tem 100+ milhões de clientes que pagam mais pela conveniência.',
      '2. FERRAMENTAS ESSENCIAIS: Keepa (€19/mês, ~R$ 100 - OBRIGATÓRIA! Mostra histórico de preços), App Amazon Seller (gratuito, escaneia códigos de barras), Calculadora de Lucro da Amazon (gratuita, calcula taxas e lucro).',
      '3. ONDE PROCURAR: Lojas físicas (Americanas, Magalu, Casas Bahia - seções de liquidação), Lojas online (outlets, ofertas do dia), Black Friday. Foque em: pequenos e leves, marca conhecida, alta demanda (BSR < 50.000), margem mín 40%.',
      '4. ANÁLISE DE LUCRO: Exemplo - Fone JBL Tune 510BT: Compra R$ 150 (promoção Americanas), Vende R$ 280 (Amazon), Taxa Amazon 15% = R$ 42, Taxa FBA R$ 8, Custo total R$ 200, LUCRO R$ 80 (40%). Regra: Só compre se margem > 30% após TODAS as taxas.',
      '5. PROCESSO: Crie conta Seller (sellercentral.amazon.com.br, Plano Profissional R$ 19/mês), Compre 5-10 unidades para testar, Prepare produtos (remova etiquetas, embale, imprima etiquetas Amazon), Envie para centro de distribuição (Correios, R$ 30-100).',
      '6. ESCALAR: Mês 1-2: Invista R$ 500-1.000, teste 5-10 produtos, meta R$ 500-1.000 lucro. Mês 3-4: Reinvista tudo, foque no que vende rápido, meta R$ 2.000-3.000. Mês 5-6: Contrate assistente virtual (R$ 500-800/mês), use repricing automático, negocie atacado, meta R$ 5.000-8.000.'
    ],
  },
  {
    id: 6,
    title: 'Montagem de Móveis: R$ 100-300 por Serviço',
    steps: [
      '1. INVESTIMENTO INICIAL: Kit básico de ferramentas (R$ 200-500): chaves de fenda e Phillips variadas, chave allen (jogo completo), alicate, martelo, furadeira/parafusadeira, trena, nível, esquadro. Isso é TUDO que você precisa.',
      '2. ONDE CONSEGUIR CLIENTES: GetNinjas (cadastre-se como "Montador de Móveis"), Grupos de Facebook ("Serviços [sua cidade]", "Mudanças [sua cidade]"), Parcerias com lojas de móveis (ofereça 10% de comissão por indicação), Instagram (poste fotos de antes/depois).',
      '3. PRECIFICAÇÃO: Guarda-roupa 2 portas: R$ 100-150, Guarda-roupa 3+ portas: R$ 150-250, Rack/Painel TV: R$ 80-120, Cama box/bicama: R$ 80-150, Escrivaninha/Mesa: R$ 60-100, Estante: R$ 80-150. Cobre 50% a mais se for urgente (mesmo dia).',
      '4. PROCESSO PROFISSIONAL: Confirme endereço e horário 1 dia antes, chegue no horário (pontualidade é TUDO), tire foto da caixa lacrada (prova que móvel chegou inteiro), monte com calma e atenção, teste gavetas, portas, estabilidade, limpe a bagunça, tire foto do móvel montado.',
      '5. DIFERENCIAIS: Ofereça garantia de 30 dias na montagem, leve aspirador para limpar após montar, deixe cartão de visita grudado no móvel (discretamente), peça para cliente te avaliar no Google/GetNinjas.',
      '6. ESCALAR: Mês 1: Você sozinho, 2-3 montagens/dia nos fins de semana = R$ 1.500-2.500/mês. Mês 3: Trabalhe também durante a semana (noites), 4-5 montagens/dia = R$ 3.000-5.000/mês. Mês 6: Contrate ajudante, monte equipe, foque em conseguir clientes = R$ 8.000-15.000/mês.'
    ]
  },
  {
    id: 7,
    title: 'Venda de Artes Digitais com IA: R$ 800-3.000/mês',
    steps: [
      '1. FERRAMENTAS: Canva (gratuito, templates prontos), MidJourney ou DALL-E (geração de imagens com IA, $10-30/mês), Figma (gratuito, para edição avançada). Você NÃO precisa saber desenhar!',
      '2. O QUE VENDER: Pacotes de posts para Instagram (5-10 artes por nicho), Logos e identidade visual, Capas para e-books/cursos, Banners para YouTube, Artes para impressão (quadros, pôsteres), Templates de stories/reels.',
      '3. NICHOS LUCRATIVOS: Profissionais liberais (dentistas, advogados, psicólogos), Coaches e infoprodutores, Restaurantes e food trucks, Lojas de roupas locais, Personal trainers. Esses nichos PRECISAM de conteúdo visual constante.',
      '4. PRECIFICAÇÃO: Pacote 5 posts Instagram: R$ 50-100, Logo simples: R$ 150-300, Identidade visual completa: R$ 500-1.200, Capa e-book: R$ 80-150, Banner YouTube: R$ 50-100. Ofereça pacotes mensais (R$ 300-800/mês) para recorrência.',
      '5. ONDE VENDER: 99Freelas e Workana (procure "designer", "artes"), Grupos de Facebook de empreendedores locais, Instagram (crie página @artes.digitais.[sua cidade], poste exemplos), LinkedIn (mensagens diretas para donos de negócios).',
      '6. PROCESSO: Use IA para gerar base da arte (MidJourney: "logo minimalista para dentista, cores azul e branco"), Edite no Canva ou Figma (adicione texto, ajuste cores, personalize), Entregue em alta resolução (PNG/JPG), Ofereça 1 rodada de ajustes gratuita. META: 10 clientes × R$ 300/mês = R$ 3.000 recorrente!'
    ]
  },
  {
    id: 8,
    title: 'Revenda de Produtos da Shopee: R$ 500-2.000/mês',
    steps: [
      '1. O QUE COMPRAR: Fones bluetooth (R$ 15-30, vende R$ 50-80), Ring lights pequenas (R$ 20-35, vende R$ 60-100), Capinhas de celular (R$ 3-8, vende R$ 20-35), Carregadores portáteis (R$ 25-40, vende R$ 70-120), Suportes de celular (R$ 10-20, vende R$ 35-60).',
      '2. ESTRATÉGIA DE COMPRA: Espere cupons de frete grátis (Shopee sempre tem), Compre em quantidade (10-20 unidades por produto), Escolha vendedores com muitas avaliações positivas, Prefira produtos com "entrega rápida" (chegam em 7-15 dias).',
      '3. ONDE REVENDER: OLX (sem taxas, bom para vendas locais), Facebook Marketplace (alcance grande, sem taxas), Mercado Livre (mais vendas, mas taxa de 10-15%), Instagram (crie página de "produtos importados"), Grupos de WhatsApp do bairro.',
      '4. FOTOGRAFIAS QUE VENDEM: Tire fotos com luz natural, Fundo branco ou neutro, Mostre o produto de vários ângulos, Inclua foto da embalagem (passa credibilidade), Se possível, mostre o produto em uso. NÃO use fotos da Shopee (cliente vai pesquisar e achar mais barato).',
      '5. DESCRIÇÃO MATADORA: Título: "[Produto] Original - Pronta Entrega - Garantia 7 Dias". Destaque: "Produto importado de alta qualidade", "Entrego hoje mesmo" (se for local), "Aceito PIX, dinheiro, cartão", "Garantia de 7 dias". Crie URGÊNCIA: "Últimas unidades!", "Promoção até amanhã!".',
      '6. CÁLCULO DE LUCRO: Exemplo - Fone Bluetooth: Compra R$ 25 (Shopee com frete grátis), Venda R$ 70 (OLX/Marketplace), Lucro R$ 45 por unidade (180%!). Se vender 20 unidades/mês = R$ 900 de lucro. Com 3-4 produtos diferentes = R$ 2.000-3.000/mês. Reinvista o lucro para escalar!'
    ]
  }
];

export const jobLinks: JobLinkCategory[] = [
    {
        category: 'Trampo Formal',
        links: [
            { name: 'Glassdoor', url: 'https://www.glassdoor.com.br/Vaga/index.htm', description: 'Vagas com salários e avaliações de empresas.' },
            { name: 'Gupy', url: 'https://www.gupy.io/', description: 'Plataforma usada por grandes empresas para recrutamento.' },
            { name: 'Indeed', url: 'https://br.indeed.com/', description: 'Agregador de vagas de diversos sites.' },
            { name: 'Infojobs', url: 'https://www.infojobs.com.br/', description: 'Um dos maiores sites de emprego do Brasil.' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/jobs/', description: 'Rede profissional com milhares de vagas.' },
            { name: 'Catho', url: 'https://www.catho.com.br/', description: 'Portal de empregos tradicional no Brasil.' }
        ]
    },
    {
        category: 'Freela Online',
        links: [
            { name: '99Freelas', url: 'https://www.99freelas.com.br/', description: 'Projetos para freelancers de diversas áreas.' },
            { name: 'Workana', url: 'https://www.workana.com/pt', description: 'Conecte-se a clientes da América Latina.' },
            { name: 'Fiverr', url: 'https://www.fiverr.com/', description: 'Plataforma global para oferecer serviços a partir de $5.' },
            { name: 'Freelancer', url: 'https://www.freelancer.com/', description: 'Milhões de projetos em diversas categorias.' },
            { name: 'Upwork', url: 'https://www.upwork.com/', description: 'Maior plataforma de freelancing do mundo.' }
        ]
    },
    {
        category: 'Bico Local',
        links: [
            { name: 'GetNinjas', url: 'https://www.getninjas.com.br/', description: 'Encontre clientes para serviços locais.' },
            { name: 'AppJobs', url: 'https://appjobs.com/br', description: 'Descubra apps de bicos e economia compartilhada.' },
            { name: 'DogHero', url: 'https://www.doghero.com.br/', description: 'Hospede ou passeie com cachorros por dinheiro.' },
            { name: 'Uber', url: 'https://www.uber.com/br/pt-br/drive/', description: 'Dirija e ganhe dinheiro com flexibilidade.' },
            { name: 'iFood', url: 'https://entregador.ifood.com.br/', description: 'Faça entregas de comida e ganhe por corrida.' },
            { name: 'Rappi', url: 'https://www.rappi.com.br/entregadores', description: 'Entregue de tudo: comida, mercado, farmácia.' }
        ]
    },
    {
        category: 'Microtarefas',
        links: [
            { name: 'Toloka', url: 'https://toloka.ai/pt/', description: 'Ganhe dinheiro completando tarefas simples online.' },
            { name: 'Remotasks', url: 'https://www.remotasks.com/', description: 'Seja pago para treinar inteligência artificial.' },
            { name: 'Clickworker', url: 'https://www.clickworker.com/', description: 'Microtarefas em português e inglês.' },
            { name: 'Appen', url: 'https://appen.com/', description: 'Projetos de IA com pagamento em dólar.' },
            { name: 'UserTesting', url: 'https://www.usertesting.com/', description: 'Teste sites e apps, ganhe $10-60 por teste.' }
        ]
    },
    {
        category: 'Ferramentas de Venda',
        links: [
            { name: 'OLX', url: 'https://www.olx.com.br/', description: 'Maior plataforma de compra e venda de usados do país.' },
            { name: 'Shopee', url: 'https://shopee.com.br/', description: 'Marketplace ideal para vender produtos novos.' },
            { name: 'Mercado Livre', url: 'https://www.mercadolivre.com.br/', description: 'Maior e-commerce da América Latina.' },
            { name: 'Canva', url: 'https://www.canva.com/', description: 'Crie designs profissionais para divulgar seus produtos.' },
            { name: 'Linktree', url: 'https://linktr.ee/', description: 'Agregue todos os seus links de venda em um só lugar.' },
            { name: 'Instagram Shop', url: 'https://business.instagram.com/shopping', description: 'Venda diretamente pelo Instagram.' }
        ]
    },
    {
        category: 'Aprendizado e IA',
        links: [
            { name: 'ChatGPT', url: 'https://chat.openai.com/', description: 'Use IA para criar conteúdo, automatizar tarefas.' },
            { name: 'Udemy', url: 'https://www.udemy.com/', description: 'Aprenda novas habilidades ou crie e venda cursos.' },
            { name: 'Hotmart', url: 'https://www.hotmart.com/', description: 'Venda ou promova infoprodutos como afiliado.' },
            { name: 'YouTube', url: 'https://www.youtube.com/', description: 'Aprenda qualquer habilidade gratuitamente.' },
            { name: 'Coursera', url: 'https://www.coursera.org/', description: 'Cursos gratuitos de universidades renomadas.' }
        ]
    }
];
