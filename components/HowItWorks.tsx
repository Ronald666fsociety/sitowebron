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
          {HOW_IT_WORKS_SECTION.title}
        </h2>
      </Reveal>

      <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((step, index) => {
          const Icon = stepIcons[step.iconName];
          return (
            <li key={step.number} className="h-full">
              <Reveal delay={0.12 * index} className="h-full">
                <div className="relative flex h-full flex-col rounded-xl border border-accent-green/10 bg-bg-secondary/60 p-6">
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-4 font-mono-tech text-4xl font-bold text-accent-green/15"
                  >
                    {String(step.number).padStart(2, "0")}
                  </span>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-accent-cyan/25 bg-bg-primary text-accent-cyan">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-semibold text-text-light">
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
