import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";
import IndustryFeatures from "../components/IndustryFeatures";
import IntegrationsSection from "../components/IntegrationsSection";
import Testimonials from "../components/Testimonials";
import SecuritySection from "../components/SecuritySection";
import FAQ from "../components/FAQ";
import ContactSection from "../components/ContactSection";

export default function Home() {
  return (
    <main style={{ position: "relative" }}>
      <div id="hero"><Hero /></div>
      <StatsSection />
      <AboutSection />
      <TeamSection />
      <IndustryFeatures />
      <IntegrationsSection />
      <SecuritySection />
      <Testimonials />
      <FAQ />
      <ContactSection />
    </main>
  );
}
