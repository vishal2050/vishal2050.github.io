"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { industries } from "@/data/industries";
import { cn } from "@/lib/utils";

export function IndustriesSection() {
  const [active, setActive] = useState(industries[0].id);
  const current = industries.find((i) => i.id === active) ?? industries[0];

  return (
    <section id="industries" className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Industry Solutions"
            title="Built for the way your industry actually operates."
            description="Decision makers don't buy abstract AI. They buy systems that understand their workflows, documents, and money pathways."
          />
        </FadeIn>

        <div className="mt-10 grid gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
            {industries.map((industry) => (
              <button
                key={industry.id}
                type="button"
                onClick={() => setActive(industry.id)}
                className={cn(
                  "focus-ring whitespace-nowrap rounded-xl border px-4 py-3 text-left text-sm transition-colors",
                  active === industry.id
                    ? "border-accent/40 bg-accent/10 text-white"
                    : "border-white/8 bg-white/[0.02] text-zinc-400 hover:text-white",
                )}
              >
                {industry.name}
              </button>
            ))}
          </div>

          <FadeIn key={current.id} className="rounded-[1.5rem] border border-white/8 bg-surface-elevated p-6 sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">{current.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-400">
                  {current.summary}
                </p>
              </div>
              <Link
                href={current.href}
                className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
              >
                Explore <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.solutions.map((s) => (
                <div
                  key={s}
                  className="rounded-xl border border-white/6 bg-black/20 px-4 py-3 text-sm text-zinc-200"
                >
                  {s}
                </div>
              ))}
            </div>
            <p className="mt-6 border-t border-white/8 pt-5 text-sm text-zinc-300">
              <span className="text-accent">Example outcome:</span> {current.outcome}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
