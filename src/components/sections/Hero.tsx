"use client";

import { BRAND } from "@/config/brand";
import { Button } from "@/components/ui/Button";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-32 lg:pb-24">
      <div className="glow-orb left-[-10%] top-10 h-72 w-72 bg-accent/20" />
      <div className="glow-orb right-[-5%] top-40 h-80 w-80 bg-accent-secondary/20" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8">
        <div>
          <p className="mb-4 text-2xl font-bold tracking-[0.28em] text-white sm:text-3xl">
            {BRAND.name}
          </p>
          <p className="eyebrow mb-5">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            AI Business Automation & Intelligence
          </p>
          <h1 className="max-w-2xl text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
            {BRAND.tagline}
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
            {BRAND.positioning} We build systems that uncover hidden operational
            costs, automate repetitive workflows, and turn disconnected business
            data into measurable results.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="/contact" showArrow>
              {BRAND.cta.primary}
            </Button>
            <Button href="/solutions" variant="secondary">
              {BRAND.cta.secondary}
            </Button>
          </div>
          <p className="mt-8 max-w-lg text-sm text-zinc-500">
            {BRAND.promise}
          </p>
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}
