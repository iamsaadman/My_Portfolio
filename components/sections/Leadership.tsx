import { leadership } from "@/data/site";
import { Users } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Leadership() {
  return (
    <section id="leadership" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Beyond development"
          title="Leadership & collaboration."
        />

        <div className="timeline relative mt-12 space-y-8 before:absolute before:left-[18px] before:top-0 before:h-full before:w-px before:bg-white/25">
          {leadership.map((item, index) => (
            <Reveal key={`${item.organization}-${item.position}`} delay={index * 0.08}>
              <div className="relative pl-12">
                <div className="timeline-marker absolute left-0 top-2 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-[#050505] text-zinc-300">
                  <Users size={16} />
                </div>
                <div className="timeline-card border border-white/10 p-6 sm:p-8">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.position}</h3>
                      <p className="mt-1 text-base text-zinc-300">{item.organization}</p>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.15em] text-zinc-300">
                      {item.period}
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2 text-sm leading-7 text-zinc-300">
                    {item.responsibilities.map((itemText) => (
                      <li key={itemText} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                        <span>{itemText}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
