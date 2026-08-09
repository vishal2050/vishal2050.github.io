"use client";

import { FadeIn } from "@/components/animations/Motion";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/config/brand";

export function LeadMagnet() {
  return (
    <section className="section pt-0">
      <div className="container-page">
        <FadeIn className="relative overflow-hidden rounded-[2rem] border border-accent/25 bg-gradient-to-r from-[#07151c] via-[#0b0b0d] to-[#141022] p-8 sm:p-12">
          <div className="glow-orb -right-10 -top-10 h-56 w-56 bg-accent/20" />
          <p className="eyebrow">Lead Magnet</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Free Business Leak Assessment
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-400">
            Tell us how your business currently works. We&apos;ll identify potential areas where
            automation could save time, reduce errors, or recover lost revenue.
          </p>
          <div className="mt-8">
            <Button href="/contact#assessment" showArrow>
              {BRAND.cta.assessment}
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
