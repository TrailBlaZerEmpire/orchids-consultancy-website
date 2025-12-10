import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ValueProposition } from "@/components/ValueProposition";
import { FrameworkSection } from "@/components/FrameworkSection";
import { CaseStudySlider } from "@/components/CaseStudySlider";
import { MacroInsightsTicker } from "@/components/MacroInsightsTicker";
import { ContactCTA } from "@/components/ContactCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <div id="services">
        <ValueProposition />
      </div>
      <div id="framework">
        <FrameworkSection />
      </div>
      <div id="cases">
        <CaseStudySlider />
      </div>
      <div id="insights">
        <MacroInsightsTicker />
      </div>
      <ContactCTA />
      <Footer />
    </main>
  );
}
