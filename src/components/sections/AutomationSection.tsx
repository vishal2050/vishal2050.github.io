"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { automationCapabilities } from "@/data/services";

const steps = [
  "Trigger",
  "AI understands",
  "Decision",
  "Action",
  "Verification",
  "Business outcome",
];

export function AutomationSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <section id="automation" className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="AI Business Automation"
            title="Turn repetitive work into autonomous workflows."
            description="From lead qualification to document processing and internal operations — we design systems that execute reliably without constant human chasing."
          />
        </FadeIn>

        <div ref={ref} className="mt-10 overflow-x-auto pb-2">
          <div className="flex min-w-[720px] items-stretch gap-3">
            {steps.map((step, i) => (
              <motion.div
                key={step}
                className="relative flex-1 rounded-2xl border border-white/8 bg-surface-elevated p-4"
                initial={reduce ? false : { opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p className="mt-3 text-sm font-medium text-white">{step}</p>
                {i < steps.length - 1 && (
                  <div className="absolute -right-2 top-1/2 hidden h-px w-4 bg-accent/50 sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {automationCapabilities.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/8 bg-white/[0.02] px-3 py-1.5 text-xs text-zinc-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
