import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Process",
  description:
    "How Sutrava discovers bottlenecks, detects leakage, automates workflows, and improves results.",
  alternates: { canonical: "/process" },
};

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="Process"
        title="Discover. Detect. Automate. Improve."
        description={`A practical delivery path from operational discovery to systems that produce ${BRAND.shortTagline.toLowerCase()} outcomes.`}
        primaryCta={{ label: BRAND.cta.discovery, href: "/contact" }}
      />
      <ProcessSection />
      <BeforeAfterSection />
      <RoiCalculator />
      <LeadMagnet />
    </>
  );
}
