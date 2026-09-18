"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ExternalLink, ArrowRight, CheckCircle, Layers, Sparkles } from "lucide-react";
import Reveal from "@/components/Reveal";
import { PORTFOLIO_SYSTEMS, SystemItem } from "@/lib/constants";
import SystemDetailModal from "@/components/SystemDetailModal";

interface SystemsPortfolioProps {
  onOpenQuoteWithSystem?: (system: SystemItem) => void;
}

export default function SystemsPortfolio({ onOpenQuoteWithSystem }: SystemsPortfolioProps) {
  const [activeCategory, setActiveCategory] = useState<string>("Todos");
  const [inspectedSystem, setInspectedSystem] = useState<SystemItem | null>(null);

  const categories = ["Todos", "Sistema Web", "App Móvil", "Facturación", "E-commerce"];

  const filteredSystems =
    activeCategory === "Todos"
      ? PORTFOLIO_SYSTEMS
      : PORTFOLIO_SYSTEMS.filter((s) => s.category === activeCategory);

  return (
    <section
      id="sistemas"
      aria-labelledby="sistemas-title"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
    >
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute left-1/3 top-1/2 -z-10 h-96 w-96 -translate-y-1/2 rounded-full bg-accent-green/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="absolute right-10 top-1/4 -z-10 h-72 w-72 rounded-full bg-accent-cyan/10 blur-[100px]"
      />

      {/* Section Header */}
      <div className="text-center">
        <Reveal>
          <p className="font-mono-tech text-sm text-accent-cyan">// mis proyectos</p>
          <h2
            id="sistemas-title"
            className="mt-2 font-heading text-3xl font-bold text-text-light sm:text-4xl md:text-5xl"
          >
            Sistemas Realizados
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-text-muted sm:text-lg">
            Explora algunos de los sistemas desarrollados a medida para clientes. Haz clic en cualquiera para ver detalles completos y cotizar una versión personalizada.
          </p>
        </Reveal>

        {/* Featured Live System Banner */}
        <Reveal delay={0.12}>
          <div className="mt-10 overflow-hidden rounded-2xl border border-accent-cyan/40 bg-gradient-to-r from-sky-950/40 via-bg-secondary to-accent-green/10 p-6 sm:p-8 backdrop-blur-md shadow-[0_0_40px_rgba(0,229,255,0.15)] text-left relative">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-cyan/40 bg-accent-cyan/15 px-3 py-1 font-mono-tech text-xs text-accent-cyan animate-pulse">
                    <Sparkles className="h-3.5 w-3.5" />
                    DEMO EN VIVO DISPONIBLE
                  </span>
                  <span className="font-mono-tech text-xs text-accent-green">
                    Three.js + React 19 + Next.js
                  </span>
                </div>
                <h3 className="font-heading text-2xl sm:text-3xl font-bold text-text-light">
                  DentalCare Pro — Clínica Dental 3D
                </h3>
                <p className="text-sm sm:text-base text-text-muted leading-relaxed">
                  Sistema web odontológico completo con visualizador 3D interactivo en WebGL, catálogo de especialidades con tarifas en Bolivianos, reservas y chatbot de atención online.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0 w-full lg:w-auto">
                <a
                  href="https://dentista-ruddy.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-accent-cyan px-6 py-3.5 font-heading text-sm font-bold text-bg-primary shadow-[0_0_30px_rgba(0,229,255,0.4)] transition-all hover:scale-105 hover:bg-white"
                >
                  <span>Probar Sistema en Vivo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>

                <button
                  onClick={() => {
                    const dental = PORTFOLIO_SYSTEMS.find((s) => s.id === "dentalcare-pro");
                    if (dental) setInspectedSystem(dental);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-bg-secondary/80 px-5 py-3.5 font-heading text-sm font-semibold text-text-light hover:border-accent-cyan/60 hover:text-accent-cyan transition-all"
                >
                  <span>Ver Ficha Técnica</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Category Filters */}
        <Reveal delay={0.15}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-4 py-2 font-mono-tech text-xs font-medium transition-all ${
                    isActive
                      ? "border border-accent-green bg-accent-green text-bg-primary shadow-[0_0_20px_rgba(0,255,136,0.35)]"
                      : "border border-white/10 bg-bg-secondary/60 text-text-muted hover:border-accent-green/40 hover:text-accent-green"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </Reveal>
      </div>

      {/* Systems Grid */}
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSystems.map((system, idx) => (
          <Reveal key={system.id} delay={0.08 * (idx + 1)}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-accent-green/20 bg-bg-secondary/70 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-accent-green/60 hover:shadow-[0_0_35px_rgba(0,255,136,0.2)]">
              {/* Corner Tech Decorator */}
              <div className="absolute right-3 top-3 h-2 w-2 rounded-full bg-accent-green/40 opacity-0 transition-opacity group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(0,255,136,0.8)]" />

              {/* Category & Badge */}
              <div className="flex items-center justify-between">
                <span className="rounded-md border border-accent-cyan/30 bg-accent-cyan/10 px-2.5 py-1 font-mono-tech text-[11px] text-accent-cyan">
                  {system.category}
                </span>
                <span className="font-mono-tech text-[10px] text-accent-green">
                  {system.metrics}
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-4 font-heading text-xl font-bold text-text-light transition-colors group-hover:text-accent-green">
                {system.title}
              </h3>

              {/* Description */}
              <p className="mt-2.5 flex-1 text-sm leading-relaxed text-text-muted">
                {system.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                {system.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="rounded border border-white/10 bg-bg-primary/80 px-2 py-0.5 font-mono-tech text-[10px] text-text-muted"
                  >
                    {tech}
                  </span>
                ))}
                {system.techStack.length > 4 && (
                  <span className="rounded border border-accent-green/20 bg-accent-green/5 px-1.5 py-0.5 font-mono-tech text-[10px] text-accent-green">
                    +{system.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Actions Buttons */}
              <div className="mt-6 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={() => setInspectedSystem(system)}
                    className="inline-flex items-center gap-1 font-mono-tech text-xs font-semibold text-accent-green transition-colors hover:text-white"
                  >
                    <span>Detalles</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>

                  {system.demoUrl && (
                    <a
                      href={system.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-mono-tech text-xs font-semibold text-accent-cyan hover:text-white transition-colors underline decoration-accent-cyan/40 underline-offset-4"
                      title="Probar demo en vivo"
                    >
                      <span>Ver Demo</span>
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>

                <button
                  onClick={() => {
                    if (onOpenQuoteWithSystem) {
                      onOpenQuoteWithSystem(system);
                    } else {
                      setInspectedSystem(system);
                    }
                  }}
                  className="rounded-lg border border-accent-green/40 bg-accent-green/10 px-3 py-1.5 font-heading text-xs font-medium text-accent-green transition-all hover:bg-accent-green hover:text-bg-primary"
                >
                  Cotizar este
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      {/* System Inspection Modal */}
      <SystemDetailModal
        system={inspectedSystem}
        onClose={() => setInspectedSystem(null)}
        onQuoteClick={(sys) => {
          if (onOpenQuoteWithSystem) {
            onOpenQuoteWithSystem(sys);
          }
        }}
      />
    </section>
  );
}
