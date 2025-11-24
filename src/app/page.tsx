import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { CoverageSection } from "@/components/CoverageSection";
import { PricingSection } from "@/components/PricingSection";
import { Steps } from "@/components/Steps";
import { EntertainmentMarquee } from "@/components/EntertainmentMarquee";
import { StressFreeSection } from "@/components/StressFreeSection";
import { BlogSection } from "@/components/BlogSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HowItWorks />
      <CoverageSection />
      <PricingSection />
      <Steps />
      <EntertainmentMarquee />
      <StressFreeSection />
      <BlogSection />
      <ContactSection />
    </div>
  );
}
