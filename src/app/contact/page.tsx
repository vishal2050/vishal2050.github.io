import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/forms/ContactForm";
import { BRAND } from "@/config/brand";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us where your business is leaking. Request a business automation audit or free leak assessment.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Tell us where your business is leaking."
        description="Share your operational context. We'll identify high-leverage automation and intelligence opportunities."
      />

      <section className="section pt-0">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/8 bg-surface-elevated p-6">
              <h2 className="text-lg font-semibold text-white">What happens next</h2>
              <ol className="mt-4 space-y-3 text-sm text-zinc-400">
                <li>1. We review your workflows and current tools.</li>
                <li>2. We identify likely leakage and automation opportunities.</li>
                <li>3. We propose a practical discovery path and next steps.</li>
              </ol>
            </div>
            <div id="assessment" className="rounded-2xl border border-accent/25 bg-[#07151c] p-6">
              <h2 className="text-lg font-semibold text-white">Free Business Leak Assessment</h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                Use the form to request your assessment. No invented case studies — just a clear
                look at where systems could save time or recover revenue.
              </p>
            </div>
            <div className="text-sm text-zinc-500">
              <p>Email: {BRAND.email}</p>
              <p className="mt-1">{BRAND.tagline}</p>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/8 bg-surface-elevated p-6 sm:p-8">
            <ContactForm assessment />
          </div>
        </div>
      </section>
    </>
  );
}
