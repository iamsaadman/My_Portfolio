import { certifications } from "@/data/site";
import { Award } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Certifications() {
  return (
    <section id="certifications" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Continuous learning."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certifications.map((certification, index) => (
            <Reveal key={`${certification.title}-${certification.provider}`} delay={index * 0.05}>
              <div className="expertise-panel h-full p-5 transition-all duration-300 hover:-translate-y-1">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/20 bg-white/[0.03] text-zinc-300">
                    <Award size={18} />
                  </div>
                  <span className="text-[11px] uppercase tracking-[0.18em] text-zinc-400">{certification.issued}</span>
                </div>
                <h3 className="text-lg font-semibold text-white">{certification.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{certification.provider}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
