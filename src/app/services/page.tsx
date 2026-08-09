import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { MoneyLeakSection } from "@/components/sections/MoneyLeakSection";
import { AutomationSection } from "@/components/sections/AutomationSection";
import { DocumentSection } from "@/components/sections/DocumentSection";
import { CustomSoftwareSection } from "@/components/sections/CustomSoftwareSection";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI business automation, money leak detection, document intelligence, and custom software from Sutrava.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="AI systems that solve expensive business problems."
        description={`${BRAND.shortName} builds systems that detect leakage, automate repetitive work, and connect disconnected operations into measurable outcomes.`}
        primaryCta={{ label: BRAND.cta.primary, href: "/contact" }}
        secondaryCta={{ label: "See industries", href: "/solutions" }}
      />
      <ServiceGrid />
      <MoneyLeakSection />
      <AutomationSection />
      <DocumentSection />
      <CustomSoftwareSection />
      <LeadMagnet />
    </>
  );
}
