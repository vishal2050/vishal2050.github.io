"use client";

import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";

export function AboutTeaser() {
  return (
    <section className="section">
      <div className="container-page">
        <FadeIn className="rounded-[2rem] border border-white/8 bg-surface-elevated p-8 sm:p-12">
          <SectionHeading
            eyebrow="About"
            title="Engineering intelligence into everyday business operations."
            description="We combine software engineering, AI, automation, and domain-specific workflows to build practical systems that solve measurable business problems."
          />
          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-zinc-400">
            {BRAND.positioning} That means fewer vanity demos and more systems
            that remove repetitive work, organize operational data, and give
            teams clear next actions.
          </p>
          <div className="mt-8">
            <Button href="/about" variant="secondary" showArrow>
              Learn about {BRAND.shortName}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
