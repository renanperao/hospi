# ESTYA

Landing page da ESTYA, uma proposta de concierge para imoveis de temporada que combina placa fisica com QR Code, atendimento por IA com voz clonada do anfitriao e solicitacoes pagas por PIX.

O projeto foi pensado para vender uma ideia muito especifica: tirar o anfitriao da rotina de responder sempre as mesmas perguntas, sem transformar a experiencia do hospede em mais um app para baixar.

## O que esta nesta landing

- Hero com proposta de valor direta para anfitrioes de Airbnb, villas e casas de temporada.
- Simulacao visual do fluxo que o hospede encontra ao escanear a placa.
- Explicacao da jornada para hospede e anfitriao.
- Blocos de valor mostrando tempo de resposta, clonagem de voz, hardware e receita extra.
- Secao de materiais e acabamento da placa fisica.
- Pesquisa de mercado com narrativa comercial.
- Tabela de planos com setup, mensalidade e diferencas entre Essencial, Premium e Gestores.
- FAQ voltado para objecoes reais de compra.

## Stack

- Next.js 16 com App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Radix UI + shadcn/ui
- Vercel Analytics

## Estrutura

```text
app/
  layout.tsx      metadata, SEO e schema
  page.tsx        composicao da landing

components/
  hero.tsx
  how-it-works.tsx
  feature-bento.tsx
  hardware-section.tsx
  market-research.tsx
  pricing.tsx
  faq.tsx
  final-cta.tsx
```

## Como rodar

```bash
pnpm install
pnpm dev
```

Depois, abra `http://localhost:3000`.

## Scripts

```bash
pnpm dev
pnpm build
pnpm start
pnpm lint
```

## Direcao do projeto

Mais do que uma landing "bonita", aqui a ideia foi construir uma pagina com argumento comercial claro. O tom mistura luxo discreto, tecnologia e operacao pratica. A placa fisica nao aparece como detalhe cenografico; ela e parte central do produto. A IA tambem nao entra como buzzword solta: entra como ferramenta para reduzir atrito, acelerar resposta e abrir nova receita no imovel.

## Pontos de atencao

- O nome no `package.json` ainda esta como `my-project`.
- Existem alguns textos com encoding quebrado em partes da base; vale revisar se o deploy final estiver lendo tudo em UTF-8.
- As URLs de WhatsApp nos CTAs ainda usam numero placeholder.

## Proximo passo natural

Antes de publicar, faz sentido alinhar tres coisas: nome do pacote, numero real dos CTAs e imagem social de compartilhamento para fechar o pacote com cara de producao.
