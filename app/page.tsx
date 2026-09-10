"use client";

import { useState } from "react";
import { Terminal } from "lucide-react";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import ParticlesBackground from "@/components/ParticlesBackground";
import ServicesGrid from "@/components/ServicesGrid";
import SystemsPortfolio from "@/components/SystemsPortfolio";
import SystemQuoteChatbot from "@/components/SystemQuoteChatbot";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import { SystemItem } from "@/lib/constants";

function SectionDivider() {
  return (
    <div aria-hidden="true" className="relative mx-auto max-w-6xl px-4 sm:px-6">
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent-green/40 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent-green/30 bg-bg-primary p-2 text-accent-green/70 shadow-[0_0_20px_rgba(0,255,136,0.2)]">
        <Terminal className="h-4 w-4" />
      </div>
    </div>
  );
}

export default function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [presetSystem, setPresetSystem] = useState<SystemItem | null>(null);

  const handleOpenQuoteWithSystem = (system: SystemItem) => {
    setPresetSystem(system);
    setIsChatbotOpen(true);
  };

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
        <SystemsPortfolio onOpenQuoteWithSystem={handleOpenQuoteWithSystem} />
        <SectionDivider />
        <HowItWorks />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
      <SystemQuoteChatbot
        isOpenExternal={isChatbotOpen}
        onCloseExternal={() => setIsChatbotOpen(false)}
        presetSystem={presetSystem}
      />
    </>
  );
}
