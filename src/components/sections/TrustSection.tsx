"use client";

import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { techStack } from "@/data/services";

export function TrustSection() {
  return (
    <section className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Engineering"
            title="Built for real business workflows."
            description="Practical systems using proven engineering stacks and modern AI — chosen for reliability, not buzzwords."
            align="center"
          />
        </FadeIn>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {techStack.map((tech, i) => (
            <FadeIn key={tech} delay={i * 0.03}>
              <div className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-zinc-300">
                {tech}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
