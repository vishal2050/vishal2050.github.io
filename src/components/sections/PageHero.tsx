import { Button } from "@/components/ui/Button";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: {
  eyebrow?: string;
  title: ReactNode;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
}) {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 sm:pt-32">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-50" />
      <div className="glow-orb left-[-8%] top-16 h-64 w-64 bg-accent/15" />
      <div className="container-page relative max-w-4xl">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-zinc-400 sm:text-lg">
          {description}
        </p>
        {(primaryCta || secondaryCta) && (
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {primaryCta && (
              <Button href={primaryCta.href} showArrow>
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button href={secondaryCta.href} variant="secondary">
                {secondaryCta.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
