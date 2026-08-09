import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ConstructionSection } from "@/components/sections/ConstructionSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Industry AI solutions for construction, manufacturing, logistics, real estate, healthcare, education, restaurants, and SMEs.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Industry-specific systems for measurable operations."
        description={`From construction billing leakage to logistics empty loads — ${BRAND.shortName} designs automation around the workflows that actually move money.`}
        primaryCta={{ label: BRAND.cta.assessment, href: "/contact#assessment" }}
      />
      <IndustriesSection />
      <ConstructionSection />
      <CaseStudiesSection />
      <LeadMagnet />
    </>
  );
}
