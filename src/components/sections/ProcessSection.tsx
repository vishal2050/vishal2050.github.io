"use client";

import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { processSteps } from "@/data/industries";

const flow = ["Business", "Discovery", "Intelligence", "Automation", "Results"];

export function ProcessSection() {
  return (
    <section className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="How It Works"
            title="From messy operations to measurable systems."
            description="A clear path from understanding your workflows to shipping automation that changes outcomes."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {processSteps.map((step, i) => (
            <FadeIn key={step.number} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/8 bg-surface-elevated p-6">
                <p className="text-sm font-semibold text-accent">{step.number}</p>
                <h3 className="mt-3 text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {step.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8">
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.02] p-4">
            {flow.map((item, i) => (
              <div key={item} className="flex items-center gap-2">
                <span className="rounded-full border border-white/10 px-3 py-1.5 text-xs font-medium text-zinc-200">
                  {item}
                </span>
                {i < flow.length - 1 && (
                  <span className="text-accent/70">↓</span>
                )}
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
