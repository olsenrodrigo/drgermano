import { AboutSection, BenefitsSection, ContactFormSection, DifferentialsSection, EducationSection, FaqSection, FinalCtaSection, Footer, Header, HeroSection, MidCtaSection, StructureSection, TeamSection, TestimonialsSection, TreatmentsSection } from "@/components/LandingSections";
import { site } from "@/content/site";

export default function Home() {
  return <><Header /><main><HeroSection /><AboutSection /><EducationSection /><TreatmentsSection /><MidCtaSection /><BenefitsSection /><TeamSection /><DifferentialsSection /><StructureSection />{site.showTestimonials && <TestimonialsSection />}<FinalCtaSection /><FaqSection /><ContactFormSection /></main><Footer /></>;
}
