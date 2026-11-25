import { gmailComposeUrl, projects, profile } from "@/data/site";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#050505] text-zinc-100">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 border-b border-white/20 pb-2 text-sm text-zinc-300 transition-colors hover:border-white hover:text-white"
        >
          <ArrowLeft size={16} /> Back to projects
        </Link>

        <header className="mt-12 border-y border-white/10 py-10 sm:py-16">
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.17em] text-zinc-500">
            <span>{project.category}</span><span aria-hidden="true">/</span><span>{project.timeline}</span>
          </div>
          <p className="mt-8 text-sm text-zinc-300">{project.role}</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-medium tracking-[-0.07em] text-white sm:text-6xl">{project.title}</h1>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span key={tech} className="border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-300">
                {tech}
              </span>
            ))}
          </div>
        </header>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <h2 className="text-2xl font-medium tracking-[-0.04em] text-white">Project overview</h2>
            <p className="mt-4 text-base leading-8 text-zinc-300">{project.description}</p>

            <h3 className="mt-10 text-xl font-medium text-white">Key features</h3>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-zinc-300">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="h-fit border border-white/10 bg-[#111] p-5">
            <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">Contribution</p>
            <p className="mt-3 text-base leading-7 text-zinc-200">{project.role}</p>
            <p className="mt-6 border-t border-white/10 pt-5 text-xs uppercase tracking-[0.2em] text-zinc-500">Category</p>
            <p className="mt-3 text-sm leading-6 text-zinc-300">{project.category}</p>
            <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-5">
              {project.github ? (
                <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white">
                  <FaGithub size={16} /> GitHub <ArrowUpRight size={14} />
                </a>
              ) : null}
              {project.live ? (
                <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-200 hover:text-white">
                  <Globe size={16} /> Live project <ArrowUpRight size={14} />
                </a>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8">
          <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">Contact</p>
          <p className="mt-3 text-lg leading-8 text-zinc-200">
            Want to collaborate or discuss a product idea? Reach out at{" "}
            <a className="text-zinc-300 underline underline-offset-4 hover:text-white" href={gmailComposeUrl} target="_blank" rel="noreferrer">{profile.email}</a>.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 text-sm text-zinc-300">
            <ArrowUpRight size={16} />
            <Link href="/#contact">Start a conversation</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
