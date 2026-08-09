import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Privacy Policy",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`How ${BRAND.legalName} handles information submitted through this website.`}
      />
      <section className="section pt-0">
        <div className="container-page prose prose-invert max-w-3xl space-y-4 text-sm leading-relaxed text-zinc-400">
          <p>
            When you submit a form, we collect the details you provide so we can respond to your
            inquiry and prepare a discovery conversation. We do not sell personal information.
          </p>
          <p>
            Contact data may be stored in email and CRM tools used to operate the business. You may
            request correction or deletion by emailing {BRAND.email}.
          </p>
          <p>
            This policy will be updated as our systems and legal requirements evolve.
          </p>
        </div>
      </section>
    </>
  );
}
