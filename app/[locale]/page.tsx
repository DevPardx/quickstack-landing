import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { SocialProof } from "@/components/social-proof";
import { ServicesSection } from "@/components/services-section";
import { TechStack } from "@/components/tech-stack";
import { PortfolioSection } from "@/components/portfolio-section";
import { ProcessSection } from "@/components/process-section";
import { FAQSection } from "@/components/faq-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <TechStack />
      <PortfolioSection />
      <ProcessSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
}
