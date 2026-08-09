import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Terms",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Use"
        description={`Terms governing use of the ${BRAND.legalName} website.`}
      />
      <section className="section pt-0">
        <div className="container-page max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-400">
          <p>
            Website content is provided for general information. ROI estimates and example outcomes
            are illustrative and not guarantees of results.
          </p>
          <p>
            Engagements for software, automation, or consulting services are governed by separate
            agreements. Do not rely on website materials as contractual commitments.
          </p>
          <p>
            For questions, contact {BRAND.email}.
          </p>
        </div>
      </section>
    </>
  );
}
