"use client";

import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { problemScenarios } from "@/data/industries";

export function ProblemSection() {
  return (
    <section className="section relative">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="The Problem"
            title="Your business is leaking money. You just can't see where."
            description="Most businesses don't have one giant problem. They have hundreds of small inefficiencies hiding across spreadsheets, WhatsApp messages, PDFs, invoices, emails, drawings, and disconnected systems."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {problemScenarios.map((item, i) => (
            <FadeIn key={item.label} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-white/8 bg-surface-elevated p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
                  {item.hint}
                </p>
                <p className="mt-4 text-3xl font-semibold text-accent">
                  {item.unit}
                </p>
                <p className="mt-2 text-sm font-medium text-white">{item.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-8">
          <Button href="/contact" variant="secondary" showArrow>
            Show Me Where to Look
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
