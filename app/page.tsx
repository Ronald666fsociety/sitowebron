import { Terminal } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ParticlesBackground from "@/components/ParticlesBackground";
import ServicesGrid from "@/components/ServicesGrid";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

// Thin gradient line with a small tech glyph, used between sections.
function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-green/30 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-green/20 bg-bg-primary p-2 text-accent-green/60">
        <Terminal className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Header />
      <main className="relative flex-1">
        <Hero />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <ServicesGrid />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}
