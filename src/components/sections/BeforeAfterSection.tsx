"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { beforeItems, afterItems } from "@/data/industries";

export function BeforeAfterSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const shift = useTransform(scrollYProgress, [0.2, 0.7], [0, 1]);

  return (
    <section className="section" ref={ref}>
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Transformation"
            title="From fragmented work to connected operations."
            description="The shift isn't cosmetic. It's the difference between chasing information and acting on it."
            align="center"
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <FadeIn>
            <div className="h-full rounded-2xl border border-white/8 bg-[#120808] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-red-300">
                Before
              </p>
              <ul className="mt-5 space-y-3">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-white/6 bg-black/20 px-4 py-3 text-sm text-zinc-300"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <motion.div
              className="h-full rounded-2xl border border-accent/25 bg-[#061218] p-6"
              style={reduce ? undefined : { opacity: shift }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                After
              </p>
              <ul className="mt-5 space-y-3">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="rounded-xl border border-accent/15 bg-accent/5 px-4 py-3 text-sm text-zinc-100"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
