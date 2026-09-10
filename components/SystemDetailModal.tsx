"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, MessageSquare, Terminal, Cpu, ShieldCheck, Zap } from "lucide-react";
import { SystemItem, WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface SystemDetailModalProps {
  system: SystemItem | null;
  onClose: () => void;
  onQuoteClick: (system: SystemItem) => void;
}

export default function SystemDetailModal({
  system,
  onClose,
  onQuoteClick,
}: SystemDetailModalProps) {
  if (!system) return null;

  const whatsappHref = buildWhatsAppLink(WHATSAPP_NUMBER, system.whatsappMessage);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto backdrop-blur-md bg-black/80">
        {/* Backdrop click */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl border border-accent-green/40 bg-bg-secondary shadow-[0_0_60px_rgba(0,255,136,0.25)]"
        >
          {/* Terminal Titlebar */}
          <div className="flex items-center justify-between border-b border-accent-green/20 bg-bg-primary px-4 py-3 sm:px-6">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#ff5f56]" />
              <span className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
              <span className="h-3 w-3 rounded-full bg-[#27c93f]" />
              <span className="ml-2 font-mono-tech text-xs text-accent-green">
                sys_inspect --id={system.id}.exe
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded-lg p-1 text-text-muted transition-colors hover:bg-accent-green/10 hover:text-accent-green"
              aria-label="Cerrar modal"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Modal Content */}
          <div className="max-h-[80vh] overflow-y-auto p-6 sm:p-8 space-y-6">
            {/* Header section */}
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-accent-green/40 bg-accent-green/10 px-3 py-1 font-mono-tech text-xs text-accent-green">
                  {system.category}
                </span>
                <span className="rounded-full border border-accent-cyan/40 bg-accent-cyan/10 px-3 py-1 font-mono-tech text-xs text-accent-cyan flex items-center gap-1">
                  <Zap className="h-3.5 w-3.5" />
                  {system.metrics}
                </span>
              </div>

              <h2 className="font-heading text-2xl font-bold text-text-light sm:text-3xl">
                {system.title}
              </h2>

              <p className="text-base text-text-muted leading-relaxed">
                {system.fullDescription}
              </p>
            </div>

            {/* Interactive Mockup Preview Card */}
            <div className="relative overflow-hidden rounded-xl border border-accent-green/30 bg-bg-primary p-4 sm:p-6 shadow-inner">
              <div className="flex items-center justify-between border-b border-accent-green/15 pb-3 mb-4">
                <div className="flex items-center gap-2 font-mono-tech text-xs text-accent-cyan">
                  <Terminal className="h-4 w-4" />
                  <span>PREVIEW_MOCKUP_V2.1</span>
                </div>
                <span className="font-mono-tech text-[10px] text-accent-green bg-accent-green/10 px-2 py-0.5 rounded border border-accent-green/30">
                  SYSTEM READY
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="rounded-lg border border-white/10 bg-bg-secondary p-3 text-center">
                  <Cpu className="h-5 w-5 mx-auto text-accent-green mb-1" />
                  <span className="font-mono-tech text-[11px] text-text-muted block">ARQUITECTURA</span>
                  <span className="font-heading text-xs font-semibold text-text-light">Modular & Escalable</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-bg-secondary p-3 text-center">
                  <ShieldCheck className="h-5 w-5 mx-auto text-accent-cyan mb-1" />
                  <span className="font-mono-tech text-[11px] text-text-muted block">SEGURIDAD</span>
                  <span className="font-heading text-xs font-semibold text-text-light">Encriptada / Roles</span>
                </div>
                <div className="rounded-lg border border-white/10 bg-bg-secondary p-3 text-center">
                  <Zap className="h-5 w-5 mx-auto text-accent-green mb-1" />
                  <span className="font-mono-tech text-[11px] text-text-muted block">VELOCIDAD</span>
                  <span className="font-heading text-xs font-semibold text-text-light">&lt; 0.8s Respuesta</span>
                </div>
              </div>
            </div>

            {/* Key Features list */}
            <div>
              <h3 className="font-heading text-lg font-semibold text-text-light mb-3 flex items-center gap-2">
                <span className="text-accent-green">//</span> Funcionalidades Clave Incluidas:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {system.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 rounded-lg border border-accent-green/15 bg-accent-green/5 p-3 text-sm text-text-light"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-green mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div>
              <h3 className="font-heading text-sm font-semibold text-text-muted mb-2">
                TECNOLOGÍAS UTILIZADAS:
              </h3>
              <div className="flex flex-wrap gap-2">
                {system.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/10 bg-bg-primary px-3 py-1 font-mono-tech text-xs text-accent-cyan"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-accent-green/20">
              <button
                onClick={() => {
                  onClose();
                  onQuoteClick(system);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-accent-cyan/50 bg-accent-cyan/15 px-6 py-3 font-heading font-medium text-accent-cyan hover:bg-accent-cyan hover:text-bg-primary transition-all"
              >
                <Terminal className="h-4 w-4" />
                Cotizar con Chatbot
              </button>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl bg-accent-green px-6 py-3 font-heading font-semibold text-bg-primary shadow-[0_0_24px_rgba(0,255,136,0.35)] hover:scale-[1.02] transition-transform"
              >
                <MessageSquare className="h-4 w-4" />
                Cotizar por WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
