import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { BRAND } from "@/config/brand";
import { industries } from "@/data/industries";
import { services } from "@/data/services";

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Process", href: "/process" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/8 bg-[#070709]">
      <div className="container-page section">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-zinc-400">
              {BRAND.tagline}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-500">
              {BRAND.description}
            </p>
          </div>

          <FooterCol title="Company" links={companyLinks} />
          <FooterCol
            title="Solutions"
            links={[
              { label: "All Solutions", href: "/solutions" },
              { label: "Money Leak Detection", href: "/services#leak-detection" },
              { label: "Automation", href: "/services#automation" },
              { label: "Document Intelligence", href: "/services#document-intelligence" },
            ]}
          />
          <FooterCol
            title="Industries"
            links={industries.slice(0, 6).map((i) => ({
              label: i.name,
              href: i.href,
            }))}
          />
        </div>

        <div className="mt-12 grid gap-6 border-t border-white/8 pt-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <p className="text-sm font-medium text-white">{BRAND.tagline}</p>
            <p className="mt-2 text-xs text-zinc-500">
              © {new Date().getFullYear()} {BRAND.legalName}. All rights reserved.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 text-sm text-zinc-400">
            <a href={BRAND.social.linkedin} className="hover:text-accent" rel="noreferrer" target="_blank">
              LinkedIn
            </a>
            <a href={BRAND.social.twitter} className="hover:text-accent" rel="noreferrer" target="_blank">
              X
            </a>
            <Link href="/services" className="hover:text-accent">
              Services
            </Link>
            <Link href="/contact" className="hover:text-accent">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {services.slice(0, 6).map((s) => (
            <Link
              key={s.id}
              href={s.href}
              className="rounded-full border border-white/6 px-3 py-1 text-xs text-zinc-500 hover:border-accent/30 hover:text-zinc-300"
            >
              {s.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-white">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((link) => (
          <li key={link.href + link.label}>
            <Link
              href={link.href}
              className="text-sm text-zinc-400 transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
