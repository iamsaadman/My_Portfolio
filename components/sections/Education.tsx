import { education } from "@/data/site";
import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <section id="education" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic background."
        />

        <div className="timeline relative mt-12 space-y-8 before:absolute before:left-[18px] before:top-0 before:h-full before:w-px before:bg-white/25">
          {education.map((item, index) => (
            <Reveal key={`${item.institution}-${item.period}`} delay={index * 0.08}>
              <div className="relative pl-12">
                <div className="timeline-marker absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#050505] text-zinc-300">
                  <GraduationCap size={16} />
                </div>
                <div className="timeline-card border border-white/10 p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                      <p className="mt-1 text-base text-zinc-300">{item.degree}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-zinc-300">
                      {item.period}
                    </span>
                  </div>

                  {item.details ? <p className="mt-4 text-sm leading-7 text-zinc-300">{item.details}</p> : null}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
