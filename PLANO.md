# PLANO — Site Dr. Germano Vainer Viegas (Reabilitação Oral, Implantes e Próteses)

Landing page institucional de marca pessoal. Copy vigente (v02) em
`../insumos/novacopy/SITE — DR. GERMANO VAINER VIEGAS v02.md` (usar VERBATIM — não parafrasear).
Lista de alterações pedidas pelo Dr. Germano em
`../insumos/novacopy/Solicitacoes_Alteracao_Site_Dr_Germano_com_Imagens.docx.pdf`.
Copy v01 (histórica) em `../insumos/COPY DA LANDING PAGE Dr. Germano — ....md`.
Pesquisa complementar em `../insumos/PESQUISA-REDES-SOCIAIS.md`.

## Regras de linguagem (pedido explícito do Dr. Germano)
- **NÃO usar a palavra "orçamento"** em lugar nenhum — ele considera que transmite percepção de
  venda de produto. O conceito virou "Diagnóstico preciso e conduta transparente".
- **NÃO usar "Especialidades"** como nome de seção/menu. O nome é **Tratamentos**.
- **NÃO usar "Clínica" nem "Instalações"** como nome de seção. O nome é **Estrutura**.
- Nada de preço/valor fixo publicado (a FAQ v01 citava faixa de urgência; foi removida na v02).

## Rotas
- `/` — landing única com todas as seções na ordem da copy v02.
  Âncoras: `#sobre`, `#tratamentos`, `#corpo-clinico`, `#estrutura`, `#faq`, `#agendar`.
- Sem outras rotas além do 404 existente. Cuidado clássico do wouter: TODO filho de `<Switch>`
  precisa de `path` (filho sem path vira curinga e mata as rotas).

## Onde mexer
- `client/src/content/site.ts` — TODO o conteúdo (textos, links, imagens, flags). Editar copy aqui.
- `client/src/components/LandingSections.tsx` — todas as seções da landing.
- `client/src/components/DentalIcons.tsx` — SVGs inline (sem biblioteca de ícones, sem emoji).
- `client/src/index.css` — CSS único do site (não há CSS-in-JS nem classes utilitárias no markup).
- `client/src/pages/Home.tsx` — ordem das seções.
Os componentes soltos do template base (About.tsx, Services.tsx, Navbar.tsx, …) foram removidos:
eram órfãos, nada os importava.

## Identidade visual — odontologia, derivada do logo "Implante seu Sorriso"
Estética: consultório odontológico premium — limpa, muito branco, azul profundo de confiança e
toques turquesa. Nada de roxo/gradientes vistosos de IA.

Paleta (CSS variables em `:root`):
- `--navy: #1E4E79` (títulos, header, CTA principal)
- `--navy-deep: #143A5C` (CTA intermediário e fundos escuros)
- `--turquoise: #5BC8BE` (acentos, ícones, detalhes)
- `--turquoise-soft: #D9F2EF` (fundos suaves de cards/badges)
- `--royal: #2E5FA3` (hover/links)
- `--offwhite: #F7FAFB` (fundos de seção alternados), branco puro nas demais
- `--ink: #16283A` (texto), `--ink-soft: #4A6076` (texto secundário)

Tipografia (Google Fonts): **Source Serif 4** (títulos, 600/700) + **Figtree** (corpo, 400/500/600).

## Imagens (todas REAIS, em `client/src/assets/images/`)
- `consultorio-principal.jpg` — fundo do HERO (overlay navy) e galeria da Estrutura
- `consultorio-cadeira.jpg`, `consultorio-raiox.jpg`, `recepcao.jpg`, `copa-cafe.jpg` — galeria
- `dr-germano-hero.jpg` — retrato do Dr. no hero (segurando modelo de prótese)
- `dr-germano-sobre.jpg` — retrato novo enviado com a copy v02, usado na seção Sobre
- `logo-drgermano.png` / `icone-drgermano.png` — logo do header/rodapé e ícone do CTA final
- `dr-germano-clinica.jpg`, `dr-germano-avatar.jpg` — não usados hoje (histórico)

## Seções (ordem e conteúdo EXATOS da copy v02)
1. **HERO (#top)** — "Resgatando o seu sorriso com ética e responsabilidade." + 2 parágrafos;
   CTA "Agendar Avaliação" (wa.me) + "Conheça o Dr. Germano" → `#sobre`.
2. **SOBRE (#sobre)** — "Conheça o Dr. Germano", 4 parágrafos, foto nova, badge CRO.
3. **FORMAÇÃO** — 4 cards (Especialista em Prótese/SLM, Especialista em Implantodontia/SLM,
   Mestre em Prótese/UNICAMP, Graduação em Odontologia/UFPE). Fundo offwhite.
4. **TRATAMENTOS (#tratamentos)** — grid de 10 cards. Urgência ocupa a linha inteira (destaque
   turquesa). Ícones: implant, tooth, smile, veneer, braces, canal, sleep, whitening, child, clock.
5. **CTA INTERMEDIÁRIO** — bloco `--navy-deep`, "Quer entender qual tratamento é indicado para você?".
6. **POR QUE ESCOLHER** — 6 itens, começando por "Diagnóstico preciso e conduta transparente".
7. **CORPO CLÍNICO (#corpo-clinico)** — título à esquerda + 3 parágrafos à direita. Os cards dos
   profissionais estão prontos mas OCULTOS por `showTeamCards: false` (faltam nome, área e CRO reais).
8. **DIFERENCIAIS** — 3 cards: Ética, Planejamento individualizado, Clareza.
9. **ESTRUTURA (#estrutura)** — Localização (Implante Seu Sorriso, Higienópolis, metrô Marechal
   Deodoro, link do Google Maps enviado), Informações (endereço, WhatsApp, horário) e galeria.
10. **DEPOIMENTOS** — estrutura pronta porém OCULTA por `showTestimonials: false` (só depoimentos
    reais e autorizados).
11. **CTA FINAL** — fundo `--navy`, "O primeiro passo para recuperar seu sorriso…".
12. **FAQ (#faq)** — accordion (Radix), 10 perguntas verbatim.
13. **FORMULÁRIO (#agendar)** — Nome, WhatsApp, E-mail, "Como podemos ajudar?" + nota de consentimento.
Rodapé: logo, especialidade, CRO, bloco Implante Seu Sorriso com Maps, menu e CTA.

## Formulário → WhatsApp
- Campos (copy v02): Nome, WhatsApp, E-mail, "Como podemos ajudar?" (todos obrigatórios).
- Zod valida no cliente; submit monta `https://wa.me/5511912773933?text=...` (NÚMERO REAL, verificado).
- O endpoint `POST /api/contact` existe no servidor mas a landing não o usa — o fluxo é WhatsApp.

## Pendências de conteúdo (o cliente ainda precisa enviar)
- Corpo clínico: nome, área de atuação, CRO e foto de cada profissional → preencher `team.members`
  e ligar `showTeamCards`.
- Depoimentos reais e autorizados → ligar `showTestimonials`.
- Confirmar telefone fixo, e-mail, estacionamento e acessibilidade (campos `null` em `site.ts`).
- Fotos novas da estrutura (recepção, consultório, equipamentos), se houver.

## Checklist anti-cara-de-IA
- Zero emoji; sem "Descubra", "Transforme", "Eleve", "jornada".
- Copy 100% verbatim do documento (só adaptar maiúsculas/pontuação onde o layout exigir).
- Animações sutis apenas. Sem parallax, glassmorphism, gradiente roxo ou sombras enormes.
- Espaçamento generoso, alinhamento consistente, hierarquia tipográfica clara.

## SEO/meta
- `<title>`: "Dr. Germano Vainer Viegas — Implantes, Próteses e Reabilitação Oral em São Paulo"
- Meta description a partir do subtítulo do hero (sem a palavra "orçamento"), citando Higienópolis.
- OG image: `https://drgermano.com.br/opengraph.jpg`. `lang="pt-BR"`; um h1 só, no hero.

## Critérios de aceite
- `npm run check` limpo; `npm run build` gera `dist/`; `npm run dev` sobe e `/` responde 200.
- Todas as seções na ordem da copy v02; depoimentos e cards do corpo clínico ocultos.
- Menu = Sobre | Tratamentos | Corpo Clínico | Estrutura | FAQ | Agendar Avaliação, com âncoras vivas.
- Nenhuma ocorrência de "orçamento", "Áreas", "Especialidades" ou "Clínica" como rótulo de seção.
- Form abre wa.me com número real e mensagem correta; responsivo 360px→1440px.
