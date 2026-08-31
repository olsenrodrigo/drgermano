// Registro de SEO/GEO: origem canônica, entrada por rota e o texto do llms.txt.
// Fonte única lida pelo pré-render (`entry-ssr.tsx`).
//
// Duas correções que este arquivo consolida:
//   - O og:image apontava para drgermano.com.br/opengraph.jpg, que responde 404.
//     Todo compartilhamento no WhatsApp saía sem imagem. Agora sai da origem real.
//   - O schema é `Dentist`, não `Physician`: o registro é CRO, não CRM.

import { site } from "./site";

/** Sem barra final. Produção responde em www (o ápice redireciona 301). */
export const ORIGIN = "https://www.germanovainer.com.br";

export const urlDaRota = (path: string) =>
  path === "/" ? `${ORIGIN}/` : `${ORIGIN}${path}`;

export type Rota = { path: string; title: string; description: string; keywords: string[] };

export const rotas: Rota[] = [
  {
    path: "/",
    title:
      "Implantes, Próteses e Reabilitação Oral em Higienópolis | Dr. Germano Vainer Viegas",
    description:
      `Dr. Germano Vainer Viegas (${site.cro}), especialista em Prótese e Implantodontia e ` +
      "mestre em Prótese pela UNICAMP. Implantes, prótese protocolo, reabilitação oral e " +
      "estética em cerâmica na clínica Implante Seu Sorriso, em Higienópolis, São Paulo.",
    keywords: [
      "implante dentário em São Paulo",
      "implante dentário Higienópolis",
      "prótese protocolo São Paulo",
      "dentes fixos no mesmo dia",
      "carga imediata implante",
      "reabilitação oral São Paulo",
      "prótese dentária Higienópolis",
      "lente de contato dental cerâmica",
      "implantodontista Higienópolis",
      "dentista Higienópolis São Paulo",
      "Dr. Germano Vainer Viegas",
    ],
  },
];

export function grafoJsonLd() {
  const dentist = {
    "@type": "Dentist",
    "@id": `${ORIGIN}/#dentist`,
    name: site.name,
    description: site.specialty,
    url: `${ORIGIN}/`,
    image: `${ORIGIN}/opengraph.jpg`,
    identifier: site.cro,
    telephone: `+${site.whatsapp}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua Dr. Albuquerque Lins, 537 — Conjunto 84",
      addressLocality: "Higienópolis, São Paulo",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    areaServed: { "@type": "City", name: "São Paulo" },
    openingHours: "Mo-Fr 09:00-17:30",
    availableService: site.treatments.items.map((t) => ({
      "@type": "MedicalProcedure",
      name: t.title,
      description: t.text,
    })),
    parentOrganization: { "@type": "Dentist", name: site.clinicName },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${ORIGIN}/#faq`,
    inLanguage: "pt-BR",
    mainEntity: site.faq.items.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const website = {
    "@type": "WebSite",
    "@id": `${ORIGIN}/#website`,
    url: `${ORIGIN}/`,
    name: site.name,
    inLanguage: "pt-BR",
    publisher: { "@id": `${ORIGIN}/#dentist` },
  };

  return { "@context": "https://schema.org", "@graph": [dentist, website, faqPage] };
}

export function llmsTxt() {
  return [
    `# ${site.name}`,
    "",
    `> ${site.specialty}. Clínica ${site.clinicName}, em ${site.neighborhood}.`,
    `> Registro: ${site.cro}.`,
    "",
    "## Ficha",
    "",
    `- Profissional: ${site.name}`,
    `- Registro: ${site.cro}`,
    `- Clínica: ${site.clinicName}`,
    `- Endereço: ${site.address}`,
    `- Como chegar: ${site.transit}`,
    `- Horário: ${site.hours}`,
    `- WhatsApp: https://wa.me/${site.whatsapp}`,
    `- Site: ${ORIGIN}/`,
    "",
    "## Formação",
    "",
    ...site.education.items.map((e) => `- ${e.title} — ${e.school}`),
    "",
    "## Tratamentos",
    "",
    ...site.treatments.items.map((t) => `- ${t.title}: ${t.text}`),
    "",
    "## Perguntas frequentes",
    "",
    ...site.faq.items.flatMap((f) => [`### ${f.question}`, "", f.answer, ""]),
    "## Observações",
    "",
    "- O agendamento é feito pelo WhatsApp.",
    "- Este site é informativo e não substitui avaliação odontológica presencial.",
    `- Fonte: ${ORIGIN}/`,
  ].join("\n");
}
