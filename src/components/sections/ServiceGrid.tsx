"use client";

import {
  Bot,
  Building2,
  ChartColumnIncreasing,
  Compass,
  FileText,
  GitBranch,
  Layers3,
  LayoutDashboard,
  MessageSquare,
  Plug,
  Radar,
  Workflow,
  ArrowRight,
} from "lucide-react";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { services } from "@/data/services";

const icons = {
  workflow: Workflow,
  radar: Radar,
  file: FileText,
  message: MessageSquare,
  bot: Bot,
  layers: Layers3,
  git: GitBranch,
  chart: ChartColumnIncreasing,
  layout: LayoutDashboard,
  plug: Plug,
  building: Building2,
  compass: Compass,
} as const;

export function ServiceGrid() {
  return (
    <section className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Services"
            title="Practical capabilities. Measurable outcomes."
            description="Every engagement starts with an expensive business problem — not a technology preference."
            align="center"
            className="mx-auto"
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = icons[service.icon as keyof typeof icons] ?? Workflow;
            return (
              <FadeIn key={service.id} delay={i * 0.03}>
                <GlowCard href={service.href} className="h-full">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 text-accent">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                    {service.summary}
                  </p>
                  <p className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent">
                    Explore <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </GlowCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
