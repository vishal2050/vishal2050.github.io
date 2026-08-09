"use client";

import { motion, useReducedMotion } from "framer-motion";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { leakDetectionItems } from "@/data/services";

export function MoneyLeakSection() {
  const reduce = useReducedMotion();

  return (
    <section id="leak-detection" className="section relative overflow-hidden">
      <div className="glow-orb right-0 top-20 h-72 w-72 bg-accent/10" />
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <FadeIn>
            <SectionHeading
              eyebrow="Core Capability"
              title="Find the money your business is already losing."
              description="We build systems that detect leakage across billing, materials, payments, operations, and customer journeys — before those losses become permanent."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {leakDetectionItems.map((item) => (
                <GlowCard key={item.title} className="p-4">
                  <h3 className="text-sm font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-400">
                    {item.description}
                  </p>
                </GlowCard>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <MoneyLeakRadar reduce={!!reduce} />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function MoneyLeakRadar({ reduce }: { reduce: boolean }) {
  const blips = [
    { label: "Unbilled work", x: 68, y: 28 },
    { label: "Payment mismatch", x: 30, y: 62 },
    { label: "Material variance", x: 72, y: 70 },
    { label: "Cold lead", x: 24, y: 30 },
  ];

  return (
    <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080b12] p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.12),transparent_55%)]" />
      {[1, 2, 3, 4].map((ring) => (
        <div
          key={ring}
          className="absolute left-1/2 top-1/2 rounded-full border border-accent/15"
          style={{
            width: `${ring * 22}%`,
            height: `${ring * 22}%`,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}
      {!reduce && (
        <motion.div
          className="absolute left-1/2 top-1/2 h-[70%] w-[70%] origin-bottom-left rounded-full"
          style={{
            background:
              "conic-gradient(from 0deg, transparent 0deg, rgba(0,212,255,0.28) 50deg, transparent 80deg)",
            transform: "translate(-50%, -50%)",
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
      )}
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_#00d4ff]" />
      {blips.map((b, i) => (
        <motion.div
          key={b.label}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${b.x}%`, top: `${b.y}%` }}
          animate={
            reduce
              ? undefined
              : { opacity: [0.4, 1, 0.4], scale: [0.95, 1.05, 0.95] }
          }
          transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity }}
        >
          <div className="rounded-full border border-accent/40 bg-black/70 px-2.5 py-1 text-[10px] text-accent">
            {b.label}
          </div>
        </motion.div>
      ))}
      <p className="absolute bottom-5 left-5 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
        Money Leak Radar
      </p>
    </div>
  );
}
