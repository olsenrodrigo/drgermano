# PLANO — Site Dr. Germano Vainer Viegas (Reabilitação Oral, Implantes e Próteses)

Landing page institucional de marca pessoal. Copy final em
`../insumos/COPY DA LANDING PAGE Dr. Germano — Reabilitação Oral, Implantes e Próteses.md`
(usar VERBATIM — não parafrasear). Pesquisa complementar em `../insumos/PESQUISA-REDES-SOCIAIS.md`.

## Rotas
- `/` — landing única com todas as seções na ordem da copy. Âncoras: `#sobre`, `#areas`, `#clinica`, `#faq`, `#agendar`.
- Sem outras rotas além do 404 existente. Cuidado clássico do wouter: TODO filho de `<Switch>` precisa de `path` (filho sem path vira curinga e mata as rotas).

## Identidade visual — odontologia, derivada do logo "Implante seu Sorriso"
Estética: consultório odontológico premium — limpa, muito branco, azul profundo de confiança e
toques turquesa. Nada de roxo/gradientes vistosos de IA.

Paleta (CSS variables em `:root`):
- `--navy: #1E4E79` (azul-marinho do logo — títulos, header, CTA principal)
- `--navy-deep: #143A5C` (bloco de urgência e CTA final, fundos escuros)
- `--turquoise: #5BC8BE` (turquesa do "seu" no logo — acentos, ícones, detalhes)
- `--turquoise-soft: #D9F2EF` (fundos suaves de cards/badges)
- `--royal: #2E5FA3` (azul dos armários da clínica — hover/detalhes secundários)
- `--offwhite: #F7FAFB` (fundos de seção alternados), branco puro nas demais
- `--ink: #16283A` (texto), `--ink-soft: #4A6076` (texto secundário)
- Urgência: usar `--turquoise` como cor de contraste do CTA sobre `--navy-deep` (sem vermelho alarmista)

Tipografia (Google Fonts, como no projeto DRAPATRICIADORIA): **Source Serif 4** (títulos, 600/700)
+ **Figtree** (corpo, 400/500/600). NÃO usar Fraunces.

Ícones odontológicos: criar componente `DentalIcons.tsx` com SVGs inline minimalistas (stroke 1.5,
line-style, cor herdada): dente, implante (dente + parafuso, eco do logo), sorriso/swoosh, faceta/
lâmina de cerâmica, aparelho ortodôntico, relógio (urgência), capelo de formatura (credenciais),
escudo (transparência), aperto de mão/coração (humanizado), localização. Usar o swoosh de sorriso
do logo como micro-divisor decorativo de seções (SVG, sutil). Não usar emoji em lugar nenhum.

## Imagens (todas REAIS, já em `client/src/assets/images/`)
- `consultorio-principal.jpg` — fundo do HERO (overlay navy 60-75% para legibilidade) e galeria
- `consultorio-cadeira.jpg`, `consultorio-raiox.jpg`, `recepcao.jpg`, `copa-cafe.jpg` — galeria da seção Clínica (carrossel no mobile, grid no desktop)
- `dr-germano-avatar.jpg` — retrato do Dr. Germano na seção SOBRE, máscara circular, tamanho contido (~180-220px; o recorte é de foto de grupo, os cantos têm outras pessoas — SEMPRE circular). Alternativa maior: `dr-germano-retrato.jpg` (mesma regra não se aplica: é retangular mas tem intrusos nas bordas; preferir o avatar circular)
- `bannerslogan.jpeg` — logo da clínica (fundo branco): usar APENAS sobre fundo branco (footer e/ou seção clínica). Nunca sobre fundo escuro.
- DELETAR/não usar as imagens stock da base: `clinic-modern.jpg`, `doctor-portrait.jpg`, `foot-specialist.jpg`
- Não existe foto profissional do médico em atendimento (produção prevista). O HERO é foto da clínica + tipografia forte, não retrato.

## Marca no header
Header fixo claro: "Dr. Germano Vainer Viegas" (Source Serif 4) + subtítulo pequeno "Reabilitação
Oral · Implantes · Próteses". Nav: Sobre, Áreas, Clínica, FAQ + CTA "Agendar avaliação". O logo
Implante Seu Sorriso só no footer, pequeno, com "Instituto Implante Seu Sorriso".

## Seções (ordem e conteúdo EXATOS da copy)
1. **HERO** — tela quase cheia (min-h ~92vh mobile), foto consultorio-principal com overlay navy;
   headline "Seu sorriso de volta, com responsabilidade do início ao fim." + 2 parágrafos da copy;
   CTA primário "Agendar avaliação" (wa.me) full-width no mobile; CTA secundário "Conheça o Dr. Germano" → `#sobre`.
2. **SOBRE (#sobre)** — fundo claro, avatar circular + texto verbatim; credenciais em lista com ícone
   de capelo; badge "CRO-SP 128024".
3. **DIFERENCIAIS** — barra com os 4 valores (ícones minimalistas acima), fundo `--offwhite`.
4. **ÁREAS DE ATUAÇÃO (#areas)** — intro + grid de 5 cards (1 col mobile / 2-3 desktop), ícone à
   esquerda: implante, dente, sorriso, aparelho, relógio. Card de urgência com tratamento levemente
   diferenciado (borda/label turquesa), sem alarmismo.
5. **CTA INTERMEDIÁRIO — URGÊNCIA** — bloco `--navy-deep`, texto claro, botão "Quero atendimento
   de urgência" (wa.me com mensagem própria).
6. **BENEFÍCIOS** — "Por que pacientes escolhem o Dr. Germano", grid 6 itens (2 col desktop), ícone leve por item.
7. **CLÍNICA (#clinica)** — texto verbatim (Santa Cecília, metrô Marechal Deodoro), endereço,
   horário; galeria com as 4-5 fotos reais; link "Ver no Google Maps" (busca pelo endereço).
   E-mail/telefone fixo: NÃO exibir (a confirmar) — só WhatsApp.
8. **DEPOIMENTOS** — estrutura pronta porém OCULTA por flag `showTestimonials: false` em `content/site.ts`.
9. **CTA FINAL** — fundo `--navy`, headline centralizada branca, botão "Agendar pelo WhatsApp",
   microtexto "Atendimento particular. Orçamento transparente, sem compromisso."
10. **FAQ (#faq)** — accordion (Radix), 6 perguntas/respostas verbatim.
11. **FORMULÁRIO (#agendar)** — ver abaixo. Footer com logo, nome do instituto, endereço, CRO e nota de direitos.

## Formulário → WhatsApp
- Campos: Nome, Telefone, WhatsApp, E-mail, Bairro/região, "O que você está buscando" (select:
  Urgência / Implante ou prótese / Estética / Ortodontia), Mensagem.
- Zod: select com placeholder disabled DEVE ser required (lição DRAPATRICIADORIA — senão "undefined"
  vaza na mensagem); e-mail com validação; mensagem opcional.
- Submit monta `https://wa.me/5511912773933?text=...` (NÚMERO REAL, verificado) identificando a
  trilha, ex.: "Olá! Vim pelo site do Dr. Germano. Busco: {opção}. Nome: {nome}...". CTAs de
  urgência usam texto "Olá! Vim pelo site do Dr. Germano e preciso de atendimento de urgência."
- Centralizar dados editáveis em `client/src/content/site.ts` (whatsapp, endereço, horário, flag
  depoimentos, textos dos CTAs) com comentários TODO onde faltar dado (e-mail, unidade Alto Boa Vista).

## Checklist anti-cara-de-IA
- Zero emoji; sem "Descubra", "Transforme", "Eleve", "jornada".
- Copy 100% verbatim do documento (só adaptar maiúsculas/pontuação onde o layout exigir).
- Animações sutis apenas (fade/slide-in-on-scroll discretos, hover suave). Sem parallax exagerado,
  sem glassmorphism, sem gradiente roxo, sem sombras enormes.
- Espaçamento generoso, alinhamento consistente, hierarquia tipográfica clara.

## SEO/meta
- `<title>`: "Dr. Germano Vainer Viegas — Implantes, Próteses e Reabilitação Oral em São Paulo"
- Meta description a partir do subtítulo do hero. OG image: `consultorio-principal.jpg`.
- `lang="pt-BR"`; headings semânticos (um h1 só, no hero).

## Critérios de aceite
- `npm run check` limpo; `npm run dev` sobe e `/` responde 200.
- Todas as seções presentes na ordem da copy; depoimentos ocultos; form abre wa.me com número real
  e mensagem correta para cada trilha; ícones SVG próprios (sem emoji); imagens stock da base removidas;
  responsivo 360px→1440px; âncoras do menu funcionam.
