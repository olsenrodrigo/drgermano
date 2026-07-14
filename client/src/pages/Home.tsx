import { AboutSection, AreasSection, BenefitsSection, ClinicSection, ContactFormSection, DifferentialsSection, FaqSection, FinalCtaSection, Footer, Header, HeroSection, TestimonialsSection, UrgencySection } from "@/components/LandingSections";
import { site } from "@/content/site";

export default function Home() {
  return <><Header /><main><HeroSection /><AboutSection /><DifferentialsSection /><AreasSection /><UrgencySection /><BenefitsSection /><ClinicSection />{site.showTestimonials && <TestimonialsSection />}<FinalCtaSection /><FaqSection /><ContactFormSection /></main><Footer /></>;
}
