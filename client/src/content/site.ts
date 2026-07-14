import consultorioPrincipal from "@/assets/images/consultorio-principal.jpg";
import consultorioCadeira from "@/assets/images/consultorio-cadeira.jpg";
import consultorioRaiox from "@/assets/images/consultorio-raiox.jpg";
import recepcao from "@/assets/images/recepcao.jpg";
import copaCafe from "@/assets/images/copa-cafe.jpg";
import germanoAvatar from "@/assets/images/dr-germano-avatar.jpg";
import logoDrGermano from "@/assets/images/logo-drgermano.png";
import iconeDrGermano from "@/assets/images/icone-drgermano.png";

export const site = {
  name: "Dr. Germano Vainer Viegas",
  specialty: "Reabilitação Oral · Implantes · Próteses",
  cro: "CRO-SP 128024",
  logoImage: logoDrGermano,
  iconImage: iconeDrGermano,
  whatsapp: "5511912773933",
  whatsappMessage: "Olá! Vim pelo site do Dr. Germano.",
  urgencyMessage: "Olá! Vim pelo site do Dr. Germano e preciso de atendimento de urgência.",
  address: "Rua Dr. Albuquerque Lins, 537 — Conjunto 84 — Santa Cecília — São Paulo/SP",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Rua%20Dr.%20Albuquerque%20Lins%2C%20537%20Conjunto%2084%20S%C3%A3o%20Paulo",
  hours: "Geralmente das 9h às 17h30, com possibilidade de atendimento estendido até as 19h mediante combinação.",
  // TODO: confirmar e-mail do consultório antes de exibir.
  email: null,
  // TODO: confirmar endereço da unidade Alto Boa Vista antes de exibir.
  altoBoaVistaAddress: null,
  showTestimonials: false,
  nav: [
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas", href: "#areas" },
    { label: "Clínica", href: "#clinica" },
    { label: "FAQ", href: "#faq" },
  ],
  ctas: {
    schedule: "Agendar avaliação",
    knowDoctor: "Conheça o Dr. Germano",
    urgency: "Quero atendimento de urgência",
    whatsapp: "Agendar pelo WhatsApp",
  },
  hero: {
    title: "Seu sorriso de volta, com responsabilidade do início ao fim.",
    paragraphs: [
      "Especialista em Prótese e Implantes, o Dr. Germano conduz cada caso de reabilitação oral com transparência total no orçamento e acompanhamento até o resultado final.",
      "Implantes, próteses, estética em cerâmica e ortodontia, feitos por quem não abre mão da ética e do compromisso com o paciente.",
    ],
    image: consultorioPrincipal,
  },
  about: {
    title: "Responsabilidade que vai até o fim do tratamento.",
    paragraphs: [
      "Especialista em Prótese e em Implantes pelo São Leopoldo Mandic (SP), mestre em Prótese pela UNICAMP (Piracicaba) e bacharel em Odontologia pela UFPE (Recife).",
      "Minha atuação é focada em reabilitação oral — do implante à prótese, da estética em cerâmica à ortodontia. Meu compromisso é simples: assumo cada caso com responsabilidade até o resultado final, e cobro exatamente o valor justo do tratamento — nem mais, nem menos.",
      "Acredito que confiança se constrói com transparência: no diagnóstico, no orçamento e no acompanhamento.",
    ],
    credentialsTitle: "Credenciais",
    credentials: [
      "Especialista em Prótese — São Leopoldo Mandic (SP)",
      "Especialista em Implantes — São Leopoldo Mandic (SP)",
      "Mestre em Prótese — UNICAMP, Piracicaba",
      "Bacharel em Odontologia — UFPE, Recife",
    ],
    image: germanoAvatar,
  },
  differentials: [
    "Responsabilidade — o caso é acompanhado até o fim",
    "Ética e transparência total no orçamento",
    "Alto nível técnico — especialista e mestre em Prótese",
    "Atendimento humanizado",
  ],
  areas: {
    title: "Reabilitação oral completa",
    intro: "Do implante à estética, cada tratamento pensado para devolver função e qualidade de vida.",
    items: [
      { title: "Implantes e Prótese Protocolo", text: "Reabilitação com implantes e prótese de carga imediata — o paciente sai com os dentes fixos no mesmo dia.", icon: "implant" },
      { title: "Próteses Dentárias", text: "Próteses parciais e totais, planejadas para função e conforto.", icon: "tooth" },
      { title: "Estética em Cerâmica", text: "Facetas e lentes de contato dental em cerâmica, para quem busca recuperar o sorriso com naturalidade.", icon: "smile" },
      { title: "Ortodontia", text: "Acompanhamento ortodôntico para alinhamento e função.", icon: "braces" },
      { title: "Atendimento de Urgência", text: "Dor de dente, dente quebrado ou coroa/faceta que caiu — atendimento rápido, com valor transparente definido antes do agendamento.", icon: "clock", urgency: true },
    ],
  },
  urgency: {
    title: "Dor de dente, dente quebrado ou algo caiu?",
    text: "Atendimento de urgência com valor fixo e transparente, sem letra miúda. Fale agora e já saia com o horário marcado.",
  },
  benefits: {
    title: "Por que pacientes escolhem o Dr. Germano",
    items: [
      { title: "Transparência no Orçamento", text: "Valor justo, sem cobrar mais nem menos do que o tratamento exige.", icon: "shield" },
      { title: "Responsabilidade até o Fim", text: "O caso é acompanhado do início ao resultado final, mesmo quando é mais trabalhoso.", icon: "tooth" },
      { title: "Alto Nível Técnico", text: "Especialista e mestre em Prótese, com formação em implantes.", icon: "graduation" },
      { title: "Atendimento Humanizado", text: "Escuta real do que o paciente quer e do que pode ou não atrapalhar o caso.", icon: "care" },
      { title: "Agilidade em Urgências", text: "Atendimento rápido para dor, dente quebrado ou próteses que soltaram.", icon: "clock" },
      { title: "Flexibilidade de Horário", text: "Atendimento estendido mediante combinação prévia.", icon: "clock" },
    ],
  },
  clinic: {
    title: "Conheça o consultório",
    text: "Consultório localizado em Santa Cecília, região central de São Paulo, a poucos passos do metrô Marechal Deodoro.",
    addressLabel: "Endereço:",
    hoursLabel: "Horário:",
    mapsLabel: "Ver no Google Maps",
    images: [
      { src: consultorioPrincipal, alt: "Consultório odontológico" },
      { src: consultorioCadeira, alt: "Cadeira do consultório odontológico" },
      { src: consultorioRaiox, alt: "Sala de raio-x do consultório" },
      { src: copaCafe, alt: "Copa e café do consultório" },
      { src: recepcao, alt: "Recepção do consultório" },
    ],
  },
  testimonials: {
    title: "O que dizem os pacientes",
    intro: "Histórias de confiança, responsabilidade e resultado.",
    empty: "Seção reservada. Adicionar depoimentos e casos antes/depois autorizados assim que disponíveis.",
  },
  finalCta: {
    title: "Seu sorriso merece o cuidado de quem leva o caso até o fim.",
    text: "Agende uma avaliação com o Dr. Germano e receba um plano de tratamento transparente, sem letra miúda.",
    note: "Atendimento particular. Orçamento transparente, sem compromisso.",
  },
  faq: [
    { question: "O que é o protocolo de implante com carga imediata?", answer: "É a técnica em que o paciente recebe os implantes e já sai com a prótese fixa no mesmo dia, sem precisar esperar meses." },
    { question: "Vocês atendem convênio?", answer: "Hoje o atendimento é exclusivamente particular." },
    { question: "Quanto custa um implante ou prótese?", answer: "O valor depende do caso, número de dentes, tipo de prótese, entre outros fatores. É apresentado com transparência na consulta de avaliação." },
    { question: "E se for uma urgência (dor, dente quebrado, coroa caída)?", answer: "O atendimento de urgência tem valor fixo, entre R$ 1.200 e R$ 1.300, e pode ser agendado rapidamente." },
    { question: "Atendem crianças?", answer: "Sim, com um dos profissionais parceiros do consultório." },
    { question: "Atendem pacientes de fora de São Paulo ou do exterior?", answer: "Sim,  o consultório já recebeu pacientes vindos de outras cidades e do exterior para tratamento." },
  ],
  form: {
    title: "Agende sua avaliação",
    fields: { name: "Nome", phone: "Telefone", whatsapp: "WhatsApp", email: "E-mail", region: "Bairro/região", path: "O que você está buscando", message: "Mensagem" },
    options: ["Urgência", "Implante ou prótese", "Estética", "Ortodontia"],
    submit: "Agendar pelo WhatsApp",
  },
  footer: {
    institute: "Instituto Implante Seu Sorriso",
    rights: "Todos os direitos reservados.",
    logo: logoDrGermano,
  },
} as const;

export const whatsappUrl = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
