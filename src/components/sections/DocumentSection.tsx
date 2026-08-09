"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { documentTypes } from "@/data/services";
import { withBasePath } from "@/lib/paths";

const flow = ["PDF", "AI extraction", "Validation", "Structured data", "Business system"];

export function DocumentSection() {
  const reduce = useReducedMotion();

  return (
    <section id="document-intelligence" className="section">
      <div className="container-page grid gap-10 lg:grid-cols-2 lg:items-center">
        <FadeIn>
          <SectionHeading
            eyebrow="AI Document Intelligence"
            title="Your PDFs are full of data. We make it usable."
            description="Invoices, contracts, drawings, challans, and statements become structured fields your systems can act on — with validation in the loop."
          />
          <div className="mt-6 flex flex-wrap gap-2">
            {documentTypes.map((t) => (
              <span
                key={t}
                className="rounded-lg border border-white/8 px-3 py-1.5 text-xs text-zinc-300"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="mt-8 space-y-3">
            {flow.map((step, i) => (
              <motion.div
                key={step}
                className="flex items-center gap-3"
                initial={reduce ? false : { opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/30 bg-accent/10 text-xs font-semibold text-accent">
                  {i + 1}
                </div>
                <div className="flex-1 rounded-xl border border-white/8 bg-surface-elevated px-4 py-3 text-sm text-white">
                  {step}
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10">
            <Image
              src={withBasePath("/visuals/document-ai.png")}
              alt="Document intelligence transforming PDFs into structured data"
              width={1400}
              height={788}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
