import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/PageHero";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { GlowCard } from "@/components/ui/GlowCard";
import { Button } from "@/components/ui/Button";
import { industries } from "@/data/industries";
import { BRAND } from "@/config/brand";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return industries
    .filter((i) => i.href.startsWith("/services/"))
    .map((i) => ({ slug: i.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  if (!industry) return {};
  return {
    title: `${industry.name} AI Solutions`,
    description: industry.summary,
    alternates: { canonical: industry.href },
  };
}

export default async function IndustryServicePage({ params }: Props) {
  const { slug } = await params;
  const industry = industries.find((i) => i.id === slug);
  if (!industry || !industry.href.startsWith("/services/")) notFound();

  return (
    <>
      <PageHero
        eyebrow={`${industry.name} Solutions`}
        title={`${industry.name} systems that find leakage and automate the work.`}
        description={industry.summary}
        primaryCta={{ label: BRAND.cta.primary, href: "/contact" }}
        secondaryCta={{ label: "All industries", href: "/solutions" }}
      />

      <section className="section pt-0">
        <div className="container-page">
          <h2 className="text-2xl font-semibold text-white">What we build</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {industry.solutions.map((solution) => (
              <GlowCard key={solution}>
                <h3 className="font-medium text-white">{solution}</h3>
                <p className="mt-2 text-sm text-zinc-400">
                  Designed around real {industry.name.toLowerCase()} workflows and decision points.
                </p>
              </GlowCard>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-white/8 bg-surface-elevated p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
              Example outcome
            </p>
            <p className="mt-3 text-xl font-medium text-white">{industry.outcome}</p>
            <p className="mt-3 text-sm text-zinc-500">
              Placeholder outcome pattern — not a fabricated customer claim.
            </p>
            {industry.id === "healthcare" && (
              <p className="mt-4 rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm text-zinc-400">
                Focus is administrative and operational workflows only. We do not provide medical
                diagnosis or clinical decision systems.
              </p>
            )}
            <div className="mt-6">
              <Button href="/contact" showArrow>
                {BRAND.cta.assessment}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <LeadMagnet />
    </>
  );
}
