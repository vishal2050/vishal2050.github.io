"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

const pipeline = [
  "DRAWINGS",
  "BOQ",
  "MATERIAL",
  "FABRICATION",
  "DELIVERY",
  "SITE",
  "BILLING",
];

const alerts = [
  "⚠ Scope change detected",
  "⚠ Material variance",
  "⚠ Potential unbilled work",
  "⚠ Drawing revision mismatch",
];

export function ConstructionSection() {
  const reduce = useReducedMotion();

  return (
    <section className="section relative overflow-hidden">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Construction Intelligence"
            title="AI for the people building the world."
            description="Connect drawings, materials, site progress, and billing so leakage and mismatches surface before they become lost revenue."
          />
        </FadeIn>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <FadeIn>
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10">
              <Image
                src="/visuals/construction-ai.png"
                alt="Construction project intelligence platform visualization"
                width={1400}
                height={788}
                className="h-auto w-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="rounded-[1.5rem] border border-white/8 bg-[#0a0d14] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                Project Flow
              </p>
              <div className="mt-5 space-y-3">
                {pipeline.map((step, i) => (
                  <motion.div
                    key={step}
                    className="flex items-center gap-3"
                    initial={reduce ? false : { opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07 }}
                  >
                    <div className="w-28 rounded-lg border border-accent/25 bg-accent/10 px-3 py-2 text-center text-xs font-semibold tracking-wide text-accent">
                      {step}
                    </div>
                    {i < pipeline.length - 1 && (
                      <div className="h-8 w-px bg-gradient-to-b from-accent/50 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 grid gap-2">
                {alerts.map((alert, i) => (
                  <motion.div
                    key={alert}
                    className="rounded-xl border border-warning/30 bg-warning/5 px-4 py-2.5 text-sm text-amber-200"
                    initial={reduce ? false : { opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                  >
                    {alert}
                  </motion.div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn className="mt-8">
          <Button href="/services/construction" showArrow>
            Explore Construction Solutions
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
