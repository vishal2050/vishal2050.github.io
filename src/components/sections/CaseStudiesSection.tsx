"use client";

import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "@/components/animations/Motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowCard } from "@/components/ui/GlowCard";
import { projects } from "@/data/projects";

export function CaseStudiesSection() {
  return (
    <section className="section">
      <div className="container-page">
        <FadeIn>
          <SectionHeading
            eyebrow="Client Work"
            title="Projects delivered for real operating businesses."
            description="Selected work across construction detailing, environmental services, and engineering workflow automation."
          />
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.06}>
              <GlowCard className="h-full">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
                    {project.category}
                  </p>
                  <p className="text-xs text-zinc-500">{project.industry}</p>
                </div>

                <h3 className="mt-4 text-xl font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-medium text-zinc-300">
                  {project.client}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                  {project.summary}
                </p>

                <ul className="mt-5 space-y-2">
                  {project.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="flex gap-2 text-sm text-zinc-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {outcome}
                    </li>
                  ))}
                </ul>

                {project.href ? (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
                  >
                    View live site <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  <p className="mt-6 text-xs text-zinc-500">
                    Private delivery — available for walkthrough on request.
                  </p>
                )}
              </GlowCard>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
