import { expertise } from "@/data/site";
import { ArrowUpRight, Database, Wrench } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { LucideIcon } from "lucide-react";
import { BrainCircuit, Code2, Server, TerminalSquare } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Server,
  Database,
  TerminalSquare,
  BrainCircuit,
  Wrench,
};

export function Expertise() {
  return (
    <section id="expertise" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="How I think"
          title="Engineering for the full experience."
          description="I build across the full product lifecycle with an emphasis on clean interfaces, dependable backend logic, and practical AI-enabled features."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {expertise.map(({ title, technologies, icon }, index) => {
            const Icon = iconMap[icon] ?? Code2;

            return (
              <Reveal key={title} delay={index * 0.08}>
                <div className="expertise-panel group h-full p-6 transition-colors duration-300">
                  <div className="mb-5 flex items-center justify-between">
                    <div className="inline-flex border border-white/25 bg-white/[0.03] p-3 text-zinc-300">
                      <Icon size={22} />
                    </div>
                    <ArrowUpRight className="text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" size={18} />
                  </div>

                  <h3 className="text-xl font-semibold text-white">{title}</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {technologies.map((tech) => (
                      <span
                        key={tech}
                        className="expertise-tag"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
