"use client";

import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { customSoftwareItems } from "@/data/services";

export function CustomSoftwareSection() {
  return (
    <section id="custom-saas" className="section">
      <div className="container-page rounded-[2rem] border border-white/8 bg-gradient-to-br from-[#0d111a] via-[#0b0b0d] to-[#120f1c] p-8 sm:p-12">
        <FadeIn>
          <SectionHeading
            eyebrow="Custom AI Software"
            title="When off-the-shelf software doesn't fit, we build the system that does."
            description="Custom engineering for workflows that are too specific, too valuable, or too interconnected for generic tools."
          />
        </FadeIn>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {customSoftwareItems.map((item, i) => (
            <FadeIn key={item} delay={i * 0.04}>
              <div className="rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-zinc-200">
                {item}
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mt-8">
          <Button href="/contact" showArrow>
            Discuss a Custom Build
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
