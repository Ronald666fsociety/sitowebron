import {
  ClipboardList,
  MessageSquare,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import Reveal from "@/components/Reveal";
import type { Step } from "@/lib/constants";
import { HOW_IT_WORKS_SECTION, STEPS } from "@/lib/constants";

const stepIcons: Record<Step["iconName"], LucideIcon> = {
  MessageSquare,
  ClipboardList,
  Rocket,
};

export default function HowItWorks() {
  return (
    <section
      id="como-trabajo"
      aria-labelledby="como-trabajo-title"
      className="relative mx-auto max-w-6xl scroll-mt-20 px-4 py-24 sm:px-6"
    >
      <Reveal>
        <p className="font-mono-tech text-sm text-accent-cyan">
          {HOW_IT_WORKS_SECTION.label}
        </p>
        <h2
          id="como-trabajo-title"
          className="mt-2 font-heading text-3xl font-bold text-text-light sm:text-4xl"
        >
          <span className="gradient-text">{HOW_IT_WORKS_SECTION.title}</span>
        </h2>
      </Reveal>

      <ol className="relative mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[16.5%] right-[16.5%] top-10 hidden h-px bg-gradient-to-r from-accent-green/10 via-accent-green/50 to-accent-cyan/40 md:block"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-6 left-8 top-6 w-px bg-gradient-to-b from-accent-green/40 via-accent-cyan/30 to-accent-green/10 md:hidden"
        />

        {STEPS.map((step, index) => {
          const Icon = stepIcons[step.iconName];
          return (
            <li key={step.number} className="relative h-full pl-10 md:pl-0">
              <Reveal delay={0.14 * index} className="h-full" y={32}>
                <div className="glass-panel relative flex h-full flex-col rounded-xl p-6 neon-border">
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-4 font-mono-tech text-4xl font-bold text-accent-green/15"
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>

                  <div className="absolute -left-[1.65rem] top-8 flex h-7 w-7 items-center justify-center rounded-full border border-accent-green/50 bg-bg-primary font-mono-tech text-xs font-bold text-accent-green shadow-[0_0_16px_rgba(0,255,136,0.35)] md:static md:mb-4 md:h-12 md:w-12 md:rounded-lg md:border-accent-cyan/30 md:text-accent-cyan md:shadow-[0_0_20px_rgba(0,229,255,0.15)]">
                    <span className="md:hidden">{step.number}</span>
                    <Icon className="hidden h-6 w-6 md:block" aria-hidden="true" />
                  </div>

                  <h3 className="mt-1 font-heading text-xl font-semibold text-text-light md:mt-0">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
