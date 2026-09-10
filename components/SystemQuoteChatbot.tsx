"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MessageSquare,
  X,
  Send,
  Bot,
  CheckCircle,
  Sparkles,
  ArrowRight,
  RefreshCw,
  Zap,
  PhoneCall,
  ChevronRight,
  Terminal,
} from "lucide-react";
import { BRAND, WHATSAPP_NUMBER, SystemItem } from "@/lib/constants";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export interface SystemQuoteChatbotProps {
  isOpenExternal?: boolean;
  onCloseExternal?: () => void;
  presetSystem?: SystemItem | null;
}

type StepKey = "type" | "features" | "timeline" | "budget" | "contact" | "summary";

export default function SystemQuoteChatbot({
  isOpenExternal,
  onCloseExternal,
  presetSystem,
}: SystemQuoteChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState<StepKey>("type");

  // Form selections
  const [systemType, setSystemType] = useState<string>("");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  const [timeline, setTimeline] = useState<string>("");
  const [budget, setBudget] = useState<string>("");
  const [clientName, setClientName] = useState<string>("");
  const [clientPhone, setClientPhone] = useState<string>("");

  // Control when presetSystem is passed from external button click
  useEffect(() => {
    if (presetSystem) {
      setSystemType(presetSystem.category + " (" + presetSystem.title + ")");
      setSelectedFeatures(presetSystem.features.slice(0, 3));
      setCurrentStep("timeline");
      setIsOpen(true);
    }
  }, [presetSystem]);

  useEffect(() => {
    if (isOpenExternal !== undefined) {
      setIsOpen(isOpenExternal);
    }
  }, [isOpenExternal]);

  const handleClose = () => {
    setIsOpen(false);
    if (onCloseExternal) onCloseExternal();
  };

  const systemTypeOptions = [
    { label: "Sistema Web de Gestión", icon: "💻", desc: "Inventario, reservas, facturación, admin" },
    { label: "App Móvil (Android/iOS)", icon: "📱", desc: "Catálogos, delivery, clientes" },
    { label: "Facturación & Inventario", icon: "📊", desc: "POS, comprobantes PDF, control stock" },
    { label: "E-Commerce / Tienda Virtual", icon: "🛒", desc: "Carrito, pagos QR, catálogo WhatsApp" },
    { label: "Sistema a Medida / SaaS", icon: "⚡", desc: "Desarrollo completo desde cero" },
  ];

  const featureOptions = [
    "Panel de Administración / Dashboard",
    "Gestión de Roles y Permisos de Usuarios",
    "Emisión de Reportes en PDF y Excel",
    "Notificaciones automáticas por WhatsApp",
    "Pasarela de Pagos / Código QR Simple",
    "API Rest e Integraciones Externas",
  ];

  const timelineOptions = [
    { label: "Urgente (1 a 2 semanas)", value: "Urgente (1-2 semanas)" },
    { label: "Estándar (3 a 4 semanas)", value: "Estándar (3-4 semanas)" },
    { label: "Proyecto Grande (1 a 2 meses)", value: "Proyecto Grande (1-2 meses)" },
  ];

  const budgetOptions = [
    { label: "Económico (Básico y accesible)", value: "Económico (Económico)" },
    { label: "Profesional (Recomendado)", value: "Profesional (Estándar)" },
    { label: "Empresarial (A Medida Completo)", value: "Empresarial (Completo)" },
  ];

  const toggleFeature = (feat: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(feat) ? prev.filter((f) => f !== feat) : [...prev, feat]
    );
  };

  const calculateEstimate = () => {
    let min = 750;
    let max = 1500;

    if (systemType.includes("App") || systemType.includes("Medida")) {
      min += 400;
      max += 800;
    }
    if (selectedFeatures.length > 3) {
      min += 300;
      max += 500;
    }
    if (timeline.includes("Urgente")) {
      min += 200;
      max += 400;
    }
    if (budget.includes("Económico")) {
      min = Math.max(600, min - 200);
      max = Math.max(1200, max - 300);
    }

    return { min, max };
  };

  const estimate = calculateEstimate();

  const generateWhatsAppMessage = () => {
    return `Hola Ronnie, solicito una cotización de sistema en Bolivianos:

📌 *Tipo de Sistema:* ${systemType || "No especificado"}
🛠 *Funcionalidades:* ${selectedFeatures.length > 0 ? selectedFeatures.join(", ") : "Estándar"}
⏱ *Tiempo Estimado:* ${timeline || "Flexible"}
💰 *Preferencia de Costo:* ${budget || "A definir"}
💵 *Rango Estimado:* Bs. ${estimate.min} - Bs. ${estimate.max}
👤 *Cliente:* ${clientName || "Cliente Web"} ${clientPhone ? `(${clientPhone})` : ""}

¿Podemos conversar para coordinar detalles y facilidades de pago?`;
  };

  const whatsappLink = buildWhatsAppLink(WHATSAPP_NUMBER, generateWhatsAppMessage());

  const resetForm = () => {
    setCurrentStep("type");
    setSystemType("");
    setSelectedFeatures([]);
    setTimeline("");
    setBudget("");
    setClientName("");
    setClientPhone("");
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <motion.button
          onClick={() => setIsOpen(true)}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-full border border-accent-green/60 bg-bg-secondary/95 px-4 py-3 font-mono-tech text-xs font-semibold text-accent-green shadow-[0_0_30px_rgba(0,255,136,0.4)] backdrop-blur-xl transition-all hover:bg-accent-green hover:text-bg-primary"
          aria-label="Abrir Chatbot de Cotización"
        >
          <div className="relative flex h-6 w-6 items-center justify-center rounded-full bg-accent-green/20">
            <img src={BRAND.logoPath} alt="Ronnie Bot" className="h-4 w-4 rounded-full" />
            <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-accent-green animate-ping" />
          </div>
          <span>Cotizar Sistema IA</span>
          <Sparkles className="h-3.5 w-3.5" />
        </motion.button>
      )}

      {/* Floating Chatbot Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.92 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-4 left-4 z-50 w-[calc(100vw-2rem)] max-w-md overflow-hidden rounded-2xl border border-accent-green/50 bg-bg-secondary/95 shadow-[0_12px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(0,255,136,0.25)] backdrop-blur-xl sm:bottom-6 sm:left-6"
          >
            {/* Chatbot Header */}
            <div className="flex items-center justify-between border-b border-accent-green/20 bg-bg-primary px-4 py-3">
              <div className="flex items-center gap-3">
                <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-accent-green/60 bg-bg-secondary p-0.5">
                  <img src={BRAND.logoPath} alt="Bot Avatar" className="h-full w-full rounded-full object-cover" />
                  <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-accent-green shadow-[0_0_6px_#00ff88]" />
                </div>
                <div>
                  <h3 className="font-heading text-sm font-bold text-text-light flex items-center gap-1.5">
                    Ronnie Bot v1.0
                    <span className="rounded bg-accent-green/20 px-1.5 py-0.2 font-mono-tech text-[9px] text-accent-green">
                      ONLINE
                    </span>
                  </h3>
                  <p className="font-mono-tech text-[10px] text-accent-cyan">
                    Asistente de Cotización WhatsApp 73555747
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={resetForm}
                  title="Reiniciar chat"
                  className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-accent-green/10 hover:text-accent-green"
                >
                  <RefreshCw className="h-4 w-4" />
                </button>
                <button
                  onClick={handleClose}
                  className="rounded-lg p-1.5 text-text-muted transition-colors hover:bg-accent-green/10 hover:text-accent-green"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            {/* Chatbot Progress indicator */}
            <div className="h-1 w-full bg-bg-primary">
              <div
                className="h-full bg-gradient-to-r from-accent-green to-accent-cyan transition-all duration-300"
                style={{
                  width:
                    currentStep === "type"
                      ? "20%"
                      : currentStep === "features"
                      ? "40%"
                      : currentStep === "timeline"
                      ? "60%"
                      : currentStep === "budget"
                      ? "80%"
                      : "100%",
                }}
              />
            </div>

            {/* Chat Messages Body */}
            <div className="max-h-[65vh] overflow-y-auto p-4 space-y-4 text-xs sm:text-sm">
              {/* Bot Welcome Message */}
              <div className="flex gap-2.5 items-start">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent-green/15 text-accent-green border border-accent-green/30 mt-0.5">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="rounded-2xl rounded-tl-none border border-accent-green/20 bg-bg-primary/90 p-3.5 text-text-light shadow-sm">
                  <p className="font-medium">
                    ¡Hola! Soy el asistente de Ronnie. 👋
                  </p>
                  <p className="mt-1 text-text-muted">
                    Te ayudaré a cotizar tu sistema ideal en 1 minuto. Todo se enviará directamente a WhatsApp.
                  </p>
                </div>
              </div>

              {/* Step 1: Type selection */}
              {currentStep === "type" && (
                <div className="space-y-3">
                  <p className="font-mono-tech text-xs text-accent-cyan font-medium">
                    Paso 1 de 4: ¿Qué tipo de sistema necesitas?
                  </p>
                  <div className="space-y-2">
                    {systemTypeOptions.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => {
                          setSystemType(opt.label);
                          setCurrentStep("features");
                        }}
                        className="w-full text-left rounded-xl border border-accent-green/20 bg-bg-primary/60 p-3 transition-all hover:border-accent-green hover:bg-accent-green/10 flex items-center justify-between group"
                      >
                        <div>
                          <div className="font-heading font-semibold text-text-light group-hover:text-accent-green">
                            {opt.icon} {opt.label}
                          </div>
                          <div className="font-mono-tech text-[11px] text-text-muted mt-0.5">
                            {opt.desc}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-accent-green/60 group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 2: Features multi-select */}
              {currentStep === "features" && (
                <div className="space-y-3">
                  <div className="rounded-xl bg-accent-green/10 border border-accent-green/30 p-2.5 text-xs text-accent-green font-mono-tech">
                    ✓ Sistema: {systemType}
                  </div>
                  <p className="font-mono-tech text-xs text-accent-cyan font-medium">
                    Paso 2 de 4: Selecciona las funcionalidades requeridas:
                  </p>
                  <div className="space-y-2">
                    {featureOptions.map((feat) => {
                      const selected = selectedFeatures.includes(feat);
                      return (
                        <button
                          key={feat}
                          onClick={() => toggleFeature(feat)}
                          className={`w-full text-left rounded-xl border p-2.5 text-xs transition-all flex items-center justify-between ${
                            selected
                              ? "border-accent-green bg-accent-green/15 text-accent-green"
                              : "border-white/10 bg-bg-primary/50 text-text-muted hover:border-accent-green/40"
                          }`}
                        >
                          <span>{feat}</span>
                          {selected ? (
                            <CheckCircle className="h-4 w-4 text-accent-green shrink-0" />
                          ) : (
                            <div className="h-4 w-4 rounded-full border border-white/20 shrink-0" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => setCurrentStep("timeline")}
                    className="w-full mt-3 rounded-xl bg-accent-green px-4 py-2.5 font-heading text-xs font-semibold text-bg-primary shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <span>Siguiente paso</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}

              {/* Step 3: Timeline selection */}
              {currentStep === "timeline" && (
                <div className="space-y-3">
                  <p className="font-mono-tech text-xs text-accent-cyan font-medium">
                    Paso 3 de 4: ¿En cuánto tiempo lo necesitas?
                  </p>
                  <div className="space-y-2">
                    {timelineOptions.map((t) => (
                      <button
                        key={t.value}
                        onClick={() => {
                          setTimeline(t.value);
                          setCurrentStep("budget");
                        }}
                        className="w-full text-left rounded-xl border border-accent-green/20 bg-bg-primary/60 p-3 transition-all hover:border-accent-green hover:bg-accent-green/10 font-heading font-medium text-text-light flex items-center justify-between group"
                      >
                        <span>{t.label}</span>
                        <ChevronRight className="h-4 w-4 text-accent-green group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Budget selection */}
              {currentStep === "budget" && (
                <div className="space-y-3">
                  <p className="font-mono-tech text-xs text-accent-cyan font-medium">
                    Paso 4 de 4: ¿Cuál es tu preferencia de presupuesto?
                  </p>
                  <div className="space-y-2">
                    {budgetOptions.map((b) => (
                      <button
                        key={b.value}
                        onClick={() => {
                          setBudget(b.value);
                          setCurrentStep("contact");
                        }}
                        className="w-full text-left rounded-xl border border-accent-green/20 bg-bg-primary/60 p-3 transition-all hover:border-accent-green hover:bg-accent-green/10 font-heading font-medium text-text-light flex items-center justify-between group"
                      >
                        <span>{b.label}</span>
                        <ChevronRight className="h-4 w-4 text-accent-green group-hover:translate-x-1" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Step 5: Contact details & summary */}
              {(currentStep === "contact" || currentStep === "summary") && (
                <div className="space-y-4">
                  <div className="rounded-xl border border-accent-green/40 bg-accent-green/10 p-3.5 text-xs space-y-2">
                    <div className="font-mono-tech text-accent-green font-semibold flex items-center justify-between">
                      <span>RESUMEN DE COTIZACIÓN</span>
                      <Zap className="h-3.5 w-3.5" />
                    </div>
                    <div className="text-text-light space-y-1">
                      <div><strong className="text-accent-cyan">Sistema:</strong> {systemType}</div>
                      <div><strong className="text-accent-cyan">Tiempo:</strong> {timeline}</div>
                      <div><strong className="text-accent-cyan">Presupuesto:</strong> {budget}</div>
                    </div>
                    <div className="pt-2 border-t border-accent-green/20 flex items-center justify-between text-accent-green">
                      <span className="font-mono-tech">ESTIMADO ORIENTATIVO:</span>
                      <span className="font-heading font-bold text-sm">
                        Bs. {estimate.min} - Bs. {estimate.max}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-2.5">
                    <label className="block font-mono-tech text-xs text-text-muted">
                      Tu Nombre (Opcional):
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. Carlos Mendoza"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-bg-primary px-3 py-2.5 font-sans text-xs text-text-light focus:border-accent-green focus:outline-none"
                    />

                    <label className="block font-mono-tech text-xs text-text-muted">
                      Tu WhatsApp / Teléfono (Opcional):
                    </label>
                    <input
                      type="text"
                      placeholder="Ej. 73555747"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-bg-primary px-3 py-2.5 font-sans text-xs text-text-light focus:border-accent-green focus:outline-none"
                    />
                  </div>

                  {/* Send Button to WhatsApp 73555747 */}
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full rounded-xl bg-accent-green px-4 py-3 font-heading font-bold text-xs text-bg-primary shadow-[0_0_25px_rgba(0,255,136,0.4)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="h-4 w-4" />
                    <span>ENVIAR COTIZACIÓN A WHATSAPP (73555747)</span>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
