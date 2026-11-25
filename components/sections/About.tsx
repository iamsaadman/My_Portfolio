import { profile } from "@/data/site";
import { BrainCircuit, Cpu, Layers3 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const highlights = [
  {
    title: "Full-Stack Development",
    description: "Building responsive, efficient, and user-first applications across frontend and backend layers.",
    icon: Layers3,
  },
  {
    title: "Software Engineering",
    description: "Designing clean systems, practical architecture, and scalable implementations with problem-solving discipline.",
    icon: Cpu,
  },
  {
    title: "AI/ML Exploration",
    description: "Exploring intelligent systems, automation workflows, and data-driven opportunities to create smarter experiences.",
    icon: BrainCircuit,
  },
];

export function About() {
  return (
    <section id="about" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="Beyond the code."
          description="A practical, curious approach to building software and collaborating with people."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <div className="h-full border-t border-white/20 py-6 sm:py-8">
              <p className="text-lg leading-8 text-zinc-200">
                I&apos;m a final-trimester Computer Science and Engineering student at United
                International University, preparing for the next stage of my professional journey.
                I&apos;m looking for opportunities to collaborate with thoughtful teams, contribute
                to meaningful work, and grow as an engineer.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                My experience spans full-stack development, mobile applications, database systems,
                automation, and AI/ML exploration. I enjoy turning complex requirements into
                practical, reliable, user-focused software.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-300">
                Through projects, leadership, and creative work, I&apos;ve built a collaborative
                mindset and a habit of learning continuously. I&apos;m excited to bring my technical
                skills to a professional team and keep building from there.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="border-l border-white/60 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">Academic background</p>
                  <p className="mt-3 font-semibold text-white">{profile.university}</p>
                  <p className="mt-1 text-sm text-zinc-300">{profile.degree}</p>
                </div>
                <div className="border-l border-white/30 bg-white/[0.03] p-4">
                  <p className="text-[11px] uppercase tracking-[0.22em] text-zinc-400">How I work</p>
                  <p className="mt-3 font-semibold text-white">Curious by default</p>
                  <p className="mt-1 text-sm text-zinc-300">Learn, collaborate, build, improve.</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="about-point-card relative flex h-full min-h-72 flex-col justify-between overflow-hidden p-6 sm:p-8">
              <span className="about-point-watermark" aria-hidden="true">S</span>
              <p className="eyebrow-label relative">My point of view</p>
              <div className="relative">
                <h3 className="max-w-sm text-3xl font-medium leading-tight tracking-[-0.05em] text-white">
                  Thoughtful software is built around people.
                </h3>
                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                  I bring engineering, creative media, and organizational experience together to
                  make useful ideas feel clear and considered.
                </p>
              </div>
              <span className="relative mt-8 text-xs uppercase tracking-[0.2em] text-zinc-400">
                Full-stack · Software · AI/ML
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {highlights.map(({ title, description, icon: Icon }, index) => (
            <Reveal key={title} delay={index * 0.08}>
              <article className={`about-highlight-card about-highlight-card--${index + 1} h-full p-6`}>
                <div className="about-highlight-icon mb-5 inline-flex items-center justify-center">
                  <Icon size={22} />
                </div>
                <h3 className="text-xl font-semibold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-300">{description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
