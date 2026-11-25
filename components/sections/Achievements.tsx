import { achievements } from "@/data/site";
import { Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Achievements() {
  return (
    <section id="recognition" className="section-wrap">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Recognition"
          title="A moment worth remembering."
        />

        <div className="mt-12">
          {achievements.map((achievement, index) => (
            <Reveal key={`${achievement.title}-${achievement.project}`} delay={index * 0.08}>
              <div className="recognition-card border border-white/10 p-6 sm:p-9">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-white/25 bg-white/[0.04] text-zinc-200">
                    <Trophy size={20} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <h3 className="text-2xl font-semibold text-white">{achievement.title}</h3>
                        <p className="mt-1 text-base text-zinc-300">{achievement.project}</p>
                      </div>
                      <span className="text-sm font-medium text-zinc-300">Role: {achievement.role}</span>
                    </div>

                    <p className="mt-4 text-base leading-7 text-zinc-300">{achievement.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {achievement.tech.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-zinc-200"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
