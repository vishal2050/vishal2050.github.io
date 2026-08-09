import { Hero } from "@/components/sections/Hero";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { MoneyLeakSection } from "@/components/sections/MoneyLeakSection";
import { AutomationSection } from "@/components/sections/AutomationSection";
import { DocumentSection } from "@/components/sections/DocumentSection";
import { CustomSoftwareSection } from "@/components/sections/CustomSoftwareSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { ConstructionSection } from "@/components/sections/ConstructionSection";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { AboutTeaser } from "@/components/sections/AboutTeaser";
import { LeadMagnet } from "@/components/sections/LeadMagnet";
import { BRAND } from "@/config/brand";

export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND.legalName,
    url: BRAND.url,
    description: BRAND.description,
    slogan: BRAND.tagline,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <ProblemSection />
      <MoneyLeakSection />
      <AutomationSection />
      <DocumentSection />
      <CustomSoftwareSection />
      <IndustriesSection />
      <ConstructionSection />
      <ServiceGrid />
      <ProcessSection />
      <BeforeAfterSection />
      <RoiCalculator />
      <CaseStudiesSection />
      <TrustSection />
      <AboutTeaser />
      <LeadMagnet />
    </>
  );
}
