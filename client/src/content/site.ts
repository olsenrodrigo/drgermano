import consultorioPrincipal from "@/assets/images/consultorio-principal.jpg";
import consultorioCadeira from "@/assets/images/consultorio-cadeira.jpg";
import consultorioRaiox from "@/assets/images/consultorio-raiox.jpg";
import recepcao from "@/assets/images/recepcao.jpg";
import copaCafe from "@/assets/images/copa-cafe.jpg";
import germanoHero from "@/assets/images/dr-germano-hero.jpg";
import germanoSobre from "@/assets/images/dr-germano-sobre.jpg";
import logoDrGermano from "@/assets/images/logo-drgermano.png";
import iconeDrGermano from "@/assets/images/icone-drgermano.png";

export const site = {
  name: "Dr. Germano Vainer Viegas",
  specialty: "Reabilitação Oral • Implantes • Próteses",
  cro: "CRO-SP 128024",
  logoImage: logoDrGermano,
  iconImage: iconeDrGermano,
  whatsapp: "5511912773933",
  whatsappMessage: "Olá! Vim pelo site do Dr. Germano e gostaria de agendar uma avaliação.",
  clinicName: "Implante Seu Sorriso",
  neighborhood: "Higienópolis — São Paulo/SP",
  transit: "Próximo à Estação Marechal Deodoro — Linha 3–Vermelha do Metrô",
  address: "Rua Dr. Albuquerque Lins, 537 — Conjunto 84 — Higienópolis — São Paulo/SP",
  mapsUrl: "https://share.google/fS0FqK2aHzrjBpgBQ",
  hours: "Geralmente das 9h às 17h30, com possibilidade de atendimento estendido até as 19h mediante agendamento prévio.",
  // TODO: confirmar e-mail do consultório antes de exibir.
  email: null,
  // TODO: confirmar telefone fixo antes de exibir (hoje só WhatsApp).
  phone: null,
  // TODO: confirmar informações de estacionamento e acessibilidade antes de exibir.
  parking: null,
  accessibility: null,
  showTestimonials: false,
  // TODO: ligar quando o corpo clínico real (nome, área de atuação e CRO) for enviado.
  showTeamCards: false,
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Tratamentos", href: "#tratamentos" },
    { label: "Corpo Clínico", href: "#corpo-clinico" },
    { label: "Estrutura", href: "#estrutura" },
    { label: "FAQ", href: "#faq" },
  ],
  ctas: {
    schedule: "Agendar Avaliação",
    knowDoctor: "Conheça o Dr. Germano",
    maps: "Ver localização no Google Maps",
  },
  hero: {
    title: "Resgatando o seu sorriso com ética e responsabilidade.",
    paragraphs: [
      "Como especialista em Prótese e Implantes, o Dr. Germano conduz cada reabilitação oral com clareza sobre o tratamento, o investimento necessário e acompanhamento próximo em todas as etapas.",
      "Recupere a segurança para sorrir e mastigar através de tratamentos com implantes, próteses, estética em cerâmica e ortodontia, sempre com planejamento individualizado e responsabilidade.",
    ],
    image: consultorioPrincipal,
    portrait: germanoHero,
    portraitAlt: "Dr. Germano Vainer Viegas segurando um modelo de prótese sobre implantes",
  },
  about: {
    title: "Conheça o Dr. Germano",
    paragraphs: [
      "A odontologia do Dr. Germano Vainer Viegas é baseada em um princípio essencial: cada paciente precisa ser tratado de forma individual, com diagnóstico cuidadoso, indicação responsável e acompanhamento próximo.",
      "Sua atuação é voltada especialmente à reabilitação oral, com tratamentos em próteses, implantes e estética em cerâmica, buscando recuperar não apenas a aparência do sorriso, mas também a mastigação, o conforto e a qualidade de vida.",
      "O planejamento de cada caso considera as necessidades, as condições clínicas e as expectativas do paciente. Todas as possibilidades são apresentadas com clareza para que as decisões sobre o tratamento sejam tomadas com segurança.",
      "Do planejamento à conclusão, o compromisso é oferecer uma odontologia pautada em ética, responsabilidade e transparência.",
    ],
    image: germanoSobre,
    imageAlt: "Dr. Germano Vainer Viegas no consultório, com um modelo de prótese total sobre a bancada",
  },
  education: {
    title: "Formação dedicada à reabilitação do sorriso",
    items: [
      { title: "Especialista em Prótese", school: "São Leopoldo Mandic" },
      { title: "Especialista em Implantodontia", school: "São Leopoldo Mandic" },
      { title: "Mestre em Prótese", school: "UNICAMP" },
      { title: "Graduação em Odontologia", school: "UFPE" },
    ],
  },
  treatments: {
    title: "Tratamentos",
    subtitle: "Cuidado completo para diferentes necessidades do seu sorriso.",
    intro:
      "Da prevenção às reabilitações mais complexas, cada tratamento começa com uma avaliação individualizada para definir a conduta mais adequada para cada paciente.",
    items: [
      {
        title: "Implantes e Prótese Protocolo",
        text: "Reabilitação de dentes perdidos por meio de implantes e próteses fixas, incluindo casos com indicação para carga imediata.",
        icon: "implant",
      },
      {
        title: "Próteses Dentárias",
        text: "Próteses parciais e totais planejadas para recuperar mastigação, conforto, função e segurança ao sorrir.",
        icon: "tooth",
      },
      {
        title: "Reabilitação Oral",
        text: "Planejamento integrado para pacientes que precisam recuperar diferentes aspectos da saúde, função e estética do sorriso.",
        icon: "smile",
      },
      {
        title: "Estética em Cerâmica",
        text: "Facetas e outros tratamentos em cerâmica planejados para recuperar forma, harmonia e naturalidade do sorriso.",
        icon: "veneer",
      },
      {
        title: "Ortodontia e Ortopedia Funcional dos Maxilares",
        text: "Tratamentos direcionados ao alinhamento dos dentes, equilíbrio da mordida e desenvolvimento funcional dos maxilares.",
        icon: "braces",
      },
      {
        title: "Tratamento de Canal",
        text: "Tratamento indicado para preservar dentes comprometidos, controlar sintomas e recuperar a saúde do elemento dental.",
        icon: "canal",
      },
      {
        title: "Bruxismo e Apneia",
        text: "Avaliação odontológica e tratamentos indicados para casos de bruxismo e distúrbios respiratórios do sono, de acordo com as necessidades de cada paciente.",
        icon: "sleep",
      },
      {
        title: "Clareamento Dental",
        text: "Clareamento realizado com planejamento e acompanhamento profissional para melhorar a aparência do sorriso com segurança.",
        icon: "whitening",
      },
      {
        title: "Odontopediatria",
        text: "Acompanhamento odontológico infantil com atenção à prevenção, desenvolvimento e construção de bons hábitos de saúde bucal desde os primeiros anos.",
        icon: "child",
      },
      {
        title: "Atendimento de Urgência",
        text: "Atendimento para situações como dor de dente, dentes quebrados e intercorrências com próteses, coroas ou facetas.",
        icon: "clock",
        urgency: true,
      },
    ],
  },
  midCta: {
    title: "Quer entender qual tratamento é indicado para você?",
    text: "O primeiro passo é uma avaliação cuidadosa para compreender suas necessidades e conhecer as possibilidades de tratamento para o seu caso.",
  },
  benefits: {
    title: "Cuidado que começa no diagnóstico e continua durante todo o tratamento.",
    items: [
      {
        title: "Diagnóstico preciso e conduta transparente",
        text: "Cada caso é avaliado individualmente, com clareza sobre o diagnóstico, as possibilidades de tratamento e a conduta mais indicada.",
        icon: "shield",
      },
      {
        title: "Responsabilidade até o fim",
        text: "Acompanhamento próximo em todas as etapas, do planejamento à conclusão do tratamento.",
        icon: "tooth",
      },
      {
        title: "Formação e experiência",
        text: "Formação direcionada à Prótese, Implantodontia e Reabilitação Oral, aliada à experiência clínica.",
        icon: "graduation",
      },
      {
        title: "Atendimento humanizado",
        text: "Escuta, acolhimento e planejamento individualizado de acordo com as necessidades e expectativas de cada paciente.",
        icon: "care",
      },
      {
        title: "Agilidade em urgências",
        text: "Atendimento para situações de dor, dentes quebrados e intercorrências com próteses, coroas ou facetas.",
        icon: "clock",
      },
      {
        title: "Flexibilidade de horário",
        text: "Possibilidade de horários estendidos mediante disponibilidade e agendamento prévio.",
        icon: "clock",
      },
    ],
  },
  team: {
    title: "Um cuidado completo exige profissionais preparados.",
    paragraphs: [
      "O atendimento conta com profissionais dedicados a diferentes áreas da odontologia, permitindo que cada paciente receba o cuidado necessário de acordo com seu diagnóstico e planejamento.",
      "O Dr. Germano está à frente dos tratamentos de reabilitação oral, próteses e implantes e, quando o caso exige a participação de outras áreas, atua em conjunto com profissionais do corpo clínico.",
      "Essa integração permite oferecer uma jornada de cuidado mais completa, mantendo o planejamento e o acompanhamento de cada paciente.",
    ],
    // TODO: preencher com os profissionais reais (nome, área de atuação, CRO e foto)
    // e ligar `showTeamCards` quando as informações do corpo clínico forem enviadas.
    members: [] as { name: string; role: string; cro: string; image?: string }[],
  },
  differentials: {
    title: "Mais do que realizar um procedimento, cuidar de cada caso com responsabilidade.",
    items: [
      {
        title: "Ética",
        text: "Indicações baseadas nas necessidades clínicas de cada paciente, respeitando suas condições, expectativas e objetivos.",
        icon: "shield",
      },
      {
        title: "Planejamento individualizado",
        text: "Não existem dois sorrisos iguais. Cada tratamento é planejado de acordo com o diagnóstico e as particularidades de cada paciente.",
        icon: "plan",
      },
      {
        title: "Clareza",
        text: "O paciente recebe informações sobre seu diagnóstico, as possibilidades de tratamento e as etapas envolvidas para participar das decisões com mais segurança.",
        icon: "clarity",
      },
    ],
  },
  structure: {
    title: "Estrutura pensada para cuidar de você em cada etapa.",
    paragraphs: [
      "Um ambiente preparado para proporcionar conforto, segurança e tranquilidade durante todo o atendimento.",
      "A Implante Seu Sorriso está localizada na região de Higienópolis, em São Paulo, próxima à Estação Marechal Deodoro, facilitando o acesso de pacientes de diferentes regiões da cidade.",
    ],
    locationLabel: "Localização",
    infoLabel: "Informações",
    addressLabel: "Endereço",
    hoursLabel: "Horário de atendimento",
    whatsappLabel: "WhatsApp",
    galleryLabel: "Galeria da estrutura",
    images: [
      { src: consultorioPrincipal, alt: "Consultório odontológico" },
      { src: consultorioCadeira, alt: "Cadeira do consultório odontológico" },
      { src: consultorioRaiox, alt: "Sala de raio-x do consultório" },
      { src: copaCafe, alt: "Copa e café do consultório" },
      { src: recepcao, alt: "Recepção do consultório" },
    ],
  },
  testimonials: {
    title: "Experiências de quem confiou seu sorriso aos nossos cuidados.",
    intro:
      "Cada tratamento representa uma história, uma necessidade e uma jornada diferente. Conheça a experiência de pacientes que passaram por tratamentos odontológicos com o Dr. Germano e sua equipe.",
    empty: "Seção reservada. Inserir somente depoimentos reais e autorizados.",
  },
  finalCta: {
    title: "O primeiro passo para recuperar seu sorriso é entender o seu caso.",
    text: "Agende uma avaliação para conhecer seu diagnóstico e as possibilidades de tratamento indicadas para você.",
  },
  faq: {
    title: "Dúvidas frequentes",
    items: [
      {
        question: "Quais tratamentos são realizados?",
        answer:
          "A clínica oferece tratamentos em implantes, próteses, reabilitação oral, estética em cerâmica, ortodontia e ortopedia funcional dos maxilares, tratamento de canal, bruxismo e apneia, clareamento dental, odontopediatria e atendimento de urgência.",
      },
      {
        question: "É possível colocar dentes fixos no mesmo dia?",
        answer:
          "Em determinados casos, é possível realizar a instalação dos implantes associada à carga imediata. A indicação depende das condições clínicas de cada paciente e precisa ser definida após avaliação e planejamento.",
      },
      {
        question: "Quem usa dentadura pode fazer implantes?",
        answer:
          "Em muitos casos, sim. Pacientes que utilizam próteses removíveis podem ter indicação para tratamentos com implantes e próteses fixas. É necessário avaliar individualmente as condições bucais e ósseas.",
      },
      {
        question: "Existe idade máxima para colocar implantes?",
        answer:
          "A idade, isoladamente, não determina a indicação. É necessário avaliar as condições de saúde geral, saúde bucal e características clínicas de cada paciente.",
      },
      {
        question: "A avaliação é personalizada?",
        answer:
          "Sim. Cada paciente é avaliado individualmente para que o diagnóstico e as possibilidades de tratamento sejam definidos de acordo com suas necessidades.",
      },
      {
        question: "Quanto tempo dura o tratamento?",
        answer:
          "O período varia de acordo com o diagnóstico, o procedimento indicado e as condições de cada paciente. O planejamento e as diferentes etapas são apresentados durante a avaliação.",
      },
      {
        question: "Onde fica a clínica?",
        answer:
          "A Implante Seu Sorriso está localizada na região de Higienópolis, em São Paulo, próxima à Estação Marechal Deodoro, da Linha 3–Vermelha do Metrô.",
        link: { label: "Ver no Google Maps", href: "https://share.google/fS0FqK2aHzrjBpgBQ" },
      },
      {
        question: "Vocês atendem urgências odontológicas?",
        answer:
          "Sim, mediante disponibilidade. Situações como dor, dentes quebrados e intercorrências com próteses, coroas ou facetas podem ser avaliadas pela equipe.",
      },
      {
        question: "A clínica também atende crianças?",
        answer:
          "Sim. A clínica conta com atendimento em odontopediatria, voltado à prevenção, acompanhamento e saúde bucal infantil.",
      },
      {
        question: "Vocês realizam tratamento para bruxismo?",
        answer:
          "Sim. O paciente passa por uma avaliação para identificar suas necessidades e definir a abordagem odontológica mais adequada para o caso.",
      },
    ],
  },
  form: {
    title: "Agende sua avaliação",
    intro:
      "Conte brevemente o que está acontecendo com o seu sorriso. Nossa equipe entrará em contato para orientar você sobre o agendamento.",
    fields: { name: "Nome", whatsapp: "WhatsApp", email: "E-mail", message: "Como podemos ajudar?" },
    submit: "Solicitar Agendamento",
    consent:
      "Ao enviar seus dados, você concorda com o contato da nossa equipe para dar continuidade à sua solicitação.",
  },
  footer: {
    institute: "Implante Seu Sorriso",
    rights: "Todos os direitos reservados.",
    logo: logoDrGermano,
    nav: [
      { label: "Sobre", href: "#sobre" },
      { label: "Tratamentos", href: "#tratamentos" },
      { label: "Corpo Clínico", href: "#corpo-clinico" },
      { label: "Estrutura", href: "#estrutura" },
      { label: "FAQ", href: "#faq" },
      { label: "Contato", href: "#agendar" },
    ],
  },
} as const;

export const whatsappUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
