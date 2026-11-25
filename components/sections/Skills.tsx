"use client";

import { skillGroups } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useState } from "react";

export function Skills() {
  const [openSkillGroup, setOpenSkillGroup] = useState<number | null>(0);

  return (
    <section id="skills" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Expertise"
          title="Tools of creation."
          description="An evolving set of languages, frameworks, platforms, and problem-solving methods. No invented rankings—just the tools I use to make things."
        />

        <div className="mt-12 grid items-start gap-3 md:grid-cols-2">
          {skillGroups.map(({ title, items }, index) => (
            <div className={`skill-panel ${openSkillGroup === index ? "is-open" : ""}`} key={title}>
              <button
                type="button"
                className="skill-panel-trigger"
                aria-expanded={openSkillGroup === index}
                aria-controls={`skill-group-${index}`}
                onClick={() => setOpenSkillGroup((current) => current === index ? null : index)}
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[0.62rem] tracking-[0.12em] text-zinc-600">
                    0{index + 1}
                  </span>
                  <span className="text-sm font-medium uppercase tracking-[0.11em]">{title}</span>
                </span>
                <span className="sr-only">Toggle {title} skills</span>
              </button>
              <div
                id={`skill-group-${index}`}
                className="skill-panel-content"
                hidden={openSkillGroup !== index}
              >
                {items.map((item) => <span key={item}>{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
