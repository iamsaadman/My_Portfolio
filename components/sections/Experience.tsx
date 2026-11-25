import { experience } from "@/data/site";
import { BriefcaseBusiness } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="section-wrap experience-section scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & contributions."
        />

        <div className="experience-timeline mt-16">
          {experience.map((item, index) => (
            <Reveal key={`${item.title}-${item.company}`} delay={index * 0.08}>
              <article className="experience-row">
                <div className="experience-index">
                  <span>0{index + 1}</span>
                  <BriefcaseBusiness size={16} />
                </div>
                <div className="experience-main">
                  <div className="experience-heading">
                    <h3>{item.title}</h3>
                    <p>{item.company}</p>
                  </div>
                  <p className="experience-period">{item.period}</p>
                  <ul className="experience-responsibilities">
                    {item.responsibilities.map((responsibility) => (
                      <li key={responsibility}>
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
