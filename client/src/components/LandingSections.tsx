import { useState, type FormEvent, type ReactNode } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown, Menu, X } from "lucide-react";
import { z } from "zod";
import { site, whatsappUrl } from "@/content/site";
import { GraduationIcon, LocationIcon, dentalIcons } from "@/components/DentalIcons";

const sectionClass = "section-space";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <a className="brand" href="#top" aria-label={site.name}><img src={site.logoImage} alt={site.name} /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {site.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          <a className="button button-small" href="#agendar">{site.ctas.schedule}</a>
        </nav>
        <button className="menu-button" type="button" aria-label="Abrir menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
      {open && (
        <nav className="mobile-nav" aria-label="Navegação principal">
          {site.nav.map((item) => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}
          <a href="#agendar" onClick={() => setOpen(false)}>{site.ctas.schedule}</a>
        </nav>
      )}
    </header>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(20,58,92,.88), rgba(20,58,92,.72)), url(${site.hero.image})` }}>
      <div className="site-container hero-grid">
        <div className="hero-content">
          <p className="hero-name">{site.name}<span className="hero-cro">{site.cro}</span></p>
          <h1>{site.hero.title}</h1>
          {site.hero.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <div className="button-row">
            <a className="button button-accent" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.ctas.schedule}</a>
            <a className="button button-outline-light" href="#sobre">{site.ctas.knowDoctor}</a>
          </div>
        </div>
        <div className="hero-portrait">
          <img src={site.hero.portrait} alt={site.hero.portraitAlt} width={720} height={1020} fetchPriority="high" />
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section id="sobre" className={sectionClass}>
      <div className="site-container about-grid">
        <div className="portrait-wrap">
          <img src={site.about.image} alt={site.about.imageAlt} width={602} height={797} loading="lazy" />
        </div>
        <div>
          <h2>{site.about.title}</h2>
          {site.about.paragraphs.map((p) => <p key={p}>{p}</p>)}
          <span className="badge">{site.cro}</span>
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className={`${sectionClass} offwhite`} aria-labelledby="formacao-title">
      <div className="site-container">
        <div className="section-heading"><h2 id="formacao-title">{site.education.title}</h2></div>
        <div className="education-grid">
          {site.education.items.map((item) => (
            <article className="education-card" key={item.title}>
              <GraduationIcon />
              <h3>{item.title}</h3>
              <p>{item.school}</p>
            </article>
          ))}
        </div>
        <span className="badge">{site.cro}</span>
      </div>
    </section>
  );
}

export function TreatmentsSection() {
  return (
    <section id="tratamentos" className={sectionClass}>
      <div className="site-container">
        <div className="section-heading">
          <h2>{site.treatments.title}</h2>
          <p className="section-subtitle">{site.treatments.subtitle}</p>
          <p>{site.treatments.intro}</p>
        </div>
        <div className="treatment-grid">
          {site.treatments.items.map((item) => {
            const Icon = dentalIcons[item.icon];
            return (
              <article className={`treatment-card ${"urgency" in item ? "treatment-urgent" : ""}`} key={item.title}>
                <Icon />
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function MidCtaSection() {
  return (
    <section className="urgency-block">
      <div className="site-container urgency-inner">
        <div><h2>{site.midCta.title}</h2><p>{site.midCta.text}</p></div>
        <a className="button button-accent" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.ctas.schedule}</a>
      </div>
    </section>
  );
}

export function BenefitsSection() {
  return (
    <section className={`${sectionClass} offwhite`}>
      <div className="site-container">
        <div className="section-heading"><h2>{site.benefits.title}</h2></div>
        <div className="benefit-grid">
          {site.benefits.items.map((item) => {
            const Icon = dentalIcons[item.icon];
            return (
              <article key={item.title}>
                <Icon />
                <div><h3>{item.title}</h3><p>{item.text}</p></div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function TeamSection() {
  return (
    <section id="corpo-clinico" className={sectionClass}>
      <div className="site-container team-wrap">
        <div className="team-intro">
          <h2>{site.team.title}</h2>
          <div>{site.team.paragraphs.map((p) => <p key={p}>{p}</p>)}</div>
        </div>
        {site.showTeamCards && site.team.members.length > 0 && (
          <div className="team-grid">
            {site.team.members.map((member) => (
              <article className="team-card" key={member.name}>
                {member.image && <img src={member.image} alt={member.name} loading="lazy" />}
                <strong>{member.name}</strong>
                <p>{member.role}</p>
                <small>{member.cro}</small>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function DifferentialsSection() {
  return (
    <section className={`${sectionClass} offwhite`} aria-labelledby="diferenciais-title">
      <div className="site-container">
        <div className="section-heading"><h2 id="diferenciais-title">{site.differentials.title}</h2></div>
        <div className="value-grid">
          {site.differentials.items.map((item) => {
            const Icon = dentalIcons[item.icon];
            return (
              <article className="value" key={item.title}>
                <Icon />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function StructureSection() {
  return (
    <section id="estrutura" className={sectionClass}>
      <div className="site-container">
        <div className="section-heading">
          <h2>{site.structure.title}</h2>
          {site.structure.paragraphs.map((p) => <p key={p}>{p}</p>)}
        </div>
        <div className="structure-info">
          <div className="clinic-detail">
            <LocationIcon />
            <div>
              <strong>{site.structure.locationLabel}</strong>
              <p><b>{site.clinicName}</b><br />{site.neighborhood}<br />{site.transit}</p>
              <a className="maps-link" href={site.mapsUrl} target="_blank" rel="noreferrer">{site.ctas.maps}</a>
            </div>
          </div>
          <dl className="clinic-facts">
            <dt>{site.structure.infoLabel}</dt>
            <dd />
            <dt>{site.structure.addressLabel}</dt>
            <dd>{site.address}</dd>
            <dt>{site.structure.whatsappLabel}</dt>
            <dd><a href={whatsappUrl()} target="_blank" rel="noreferrer">(11) 91277-3933</a></dd>
            <dt>{site.structure.hoursLabel}</dt>
            <dd>{site.hours}</dd>
          </dl>
        </div>
        <h3 className="gallery-title">{site.structure.galleryLabel}</h3>
        <div className="gallery">
          {site.structure.images.map((image) => <img key={image.src} src={image.src} alt={image.alt} loading="lazy" />)}
        </div>
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className={`${sectionClass} offwhite`}>
      <div className="site-container section-heading">
        <h2>{site.testimonials.title}</h2>
        <p>{site.testimonials.intro}</p>
        <div className="testimonial-placeholder"><p>{site.testimonials.empty}</p></div>
      </div>
    </section>
  );
}

export function FinalCtaSection() {
  return (
    <section className="final-cta">
      <div className="site-container">
        <span className="cta-icon" aria-hidden="true"><img src={site.iconImage} alt="" /></span>
        <h2>{site.finalCta.title}</h2>
        <p>{site.finalCta.text}</p>
        <a className="button button-accent" href={whatsappUrl()} target="_blank" rel="noreferrer">{site.ctas.schedule}</a>
      </div>
    </section>
  );
}

export function FaqSection() {
  return (
    <section id="faq" className={sectionClass}>
      <div className="site-container faq-wrap">
        <div className="section-heading"><h2>{site.faq.title}</h2></div>
        <Accordion.Root className="accordion" type="single" collapsible>
          {site.faq.items.map((item) => (
            <Accordion.Item className="accordion-item" value={item.question} key={item.question}>
              <Accordion.Header>
                <Accordion.Trigger className="accordion-trigger">{item.question}<ChevronDown aria-hidden="true" /></Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="accordion-content">
                <p>{item.answer}</p>
                {"link" in item && <p><a className="maps-link" href={item.link.href} target="_blank" rel="noreferrer">{item.link.label}</a></p>}
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </section>
  );
}

const formSchema = z.object({
  name: z.string().trim().min(1, "Informe seu nome."),
  whatsapp: z.string().trim().min(1, "Informe seu WhatsApp."),
  email: z.string().trim().email("Informe um e-mail válido."),
  message: z.string().trim().min(1, "Conte brevemente como podemos ajudar."),
});
type FormData = z.infer<typeof formSchema>;
const emptyForm = { name: "", whatsapp: "", email: "", message: "" };

export function ContactFormSection() {
  const [values, setValues] = useState(emptyForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const update = (field: keyof typeof values, value: string) => setValues((current) => ({ ...current, [field]: value }));

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const parsed = formSchema.safeParse(values);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => { next[String(issue.path[0])] = issue.message; });
      setErrors(next);
      return;
    }
    setErrors({});
    const data: FormData = parsed.data;
    const message = `Olá! Vim pelo site do Dr. Germano e gostaria de agendar uma avaliação. Nome: ${data.name}. WhatsApp: ${data.whatsapp}. E-mail: ${data.email}. Como podemos ajudar: ${data.message}`;
    window.location.href = whatsappUrl(message);
  };

  return (
    <section id="agendar" className={`${sectionClass} offwhite`}>
      <div className="site-container form-wrap">
        <div className="section-heading"><h2>{site.form.title}</h2><p>{site.form.intro}</p></div>
        <form onSubmit={submit} noValidate>
          <div className="form-grid">
            {(["name", "whatsapp", "email"] as const).map((field) => (
              <FormField key={field} label={site.form.fields[field]} error={errors[field]}>
                <input
                  type={field === "email" ? "email" : field === "name" ? "text" : "tel"}
                  value={values[field]}
                  onChange={(e) => update(field, e.target.value)}
                  aria-invalid={!!errors[field]}
                />
              </FormField>
            ))}
          </div>
          <FormField label={site.form.fields.message} error={errors.message}>
            <textarea rows={4} value={values.message} onChange={(e) => update("message", e.target.value)} aria-invalid={!!errors.message} />
          </FormField>
          <button className="button" type="submit">{site.form.submit}</button>
          <small className="form-consent">{site.form.consent}</small>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return <label className="field"><span>{label}</span>{children}{error && <small role="alert">{error}</small>}</label>;
}

export function Footer() {
  return (
    <footer>
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <img src={site.footer.logo} alt={site.name} />
          <p>{site.specialty}</p>
          <p>{site.cro}</p>
        </div>
        <div className="footer-address">
          <strong>{site.footer.institute}</strong>
          <p>{site.neighborhood}</p>
          <p>{site.transit}</p>
          <a className="maps-link" href={site.mapsUrl} target="_blank" rel="noreferrer">{site.ctas.maps}</a>
        </div>
        <div className="footer-links">
          <nav aria-label="Navegação do rodapé">
            {site.footer.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="button button-small" href="#agendar">{site.ctas.schedule}</a>
        </div>
      </div>
      <div className="site-container footer-legal">
        <p>© {new Date().getFullYear()} {site.name}. {site.footer.rights}</p>
      </div>
    </footer>
  );
}
