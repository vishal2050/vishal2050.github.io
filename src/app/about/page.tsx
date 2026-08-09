import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { TrustSection } from "@/components/sections/TrustSection";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { FadeIn } from "@/components/animations/Motion";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "About",
  description: BRAND.description,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Engineering intelligence into everyday business operations."
        description={BRAND.positioning}
        primaryCta={{ label: "Work with us", href: "/contact" }}
      />

      <section className="section pt-0">
        <div className="container-page grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Outcome-first",
              body: "We start with leakage, bottlenecks, and wasted hours — then design the system that removes them.",
            },
            {
              title: "Domain-aware",
              body: "Construction, manufacturing, logistics, and service operations each need different signals and workflows.",
            },
            {
              title: "Engineering-led",
              body: "Custom software, integrations, and AI agents — built to fit your process, not the other way around.",
            },
          ].map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-white/8 bg-surface-elevated p-6">
                <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="section pt-0">
        <div className="container-page max-w-3xl">
          <FadeIn>
            <p className="text-lg leading-relaxed text-zinc-300">
              {BRAND.promise}
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              {BRAND.name} comes from “Sūtra” — a thread, framework, or principle that connects
              things. That is the work: connecting business problems with intelligent software
              solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-400">
              Delivered work already includes portfolio platforms for construction and
              environmental companies, plus custom operations tooling such as rebar detailing
              server launchers and AutoCAD VBA automation.
            </p>
          </FadeIn>
        </div>
      </section>

      <TrustSection />
      <LeadMagnet />
    </>
  );
}
