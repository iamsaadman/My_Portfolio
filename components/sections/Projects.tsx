"use client";

import { projects, additionalProjects } from "@/data/site";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useReducedMotion } from "framer-motion";
import { useRef, useState } from "react";

function ProjectArtwork({ title, index }: { title: string; index: number }) {
  return (
    <div className={`project-art project-art--${index + 1}`} aria-hidden="true">
      <span className="project-art-number">Project / 0{index + 1}</span>
      <div className="project-visual">
        <div className="project-visual-topline"><i /><i /><i /></div>
        <div className="project-visual-content">
          <div className="project-visual-symbol" />
          <div className="project-visual-lines"><i /><i /><i /></div>
        </div>
        <span className="project-visual-index">0{index + 1}</span>
      </div>
      <span className="project-art-title">{title}</span>
      <span className="project-art-index">Selected works · 2026</span>
    </div>
  );
}

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();

  const goToProject = (index: number) => {
    const track = trackRef.current;
    if (!track) return;

    const target = track.children.item(index);
    target?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(index);
  };

  const updateActiveProject = () => {
    const track = trackRef.current;
    if (!track) return;

    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    Array.from(track.children).forEach((slide, index) => {
      const rect = slide.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    setActiveIndex((current) => current === nearestIndex ? current : nearestIndex);
  };

  const previousProject = () => {
    goToProject((activeIndex + projects.length - 1) % projects.length);
  };

  const nextProject = () => {
    goToProject((activeIndex + 1) % projects.length);
  };

  return (
    <section id="projects" className="section-wrap scroll-mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={`Portfolio / 01—0${projects.length}`}
          title="Selected works."
          description="Selected work across healthcare websites, farm-management systems, voice tools, automotive products, and ongoing computer-vision research."
        />

        <div className="project-carousel-wrap mt-12">
          <div className="project-carousel-toolbar">
            <p>Swipe or step through the work</p>
            <div className="project-carousel-navigation">
              <span className="project-carousel-count" aria-live="polite">
                0{activeIndex + 1}<span> / </span>0{projects.length}
              </span>
              <button type="button" onClick={previousProject} aria-label="Previous project">
                <ChevronLeft size={18} aria-hidden="true" />
              </button>
              <button type="button" onClick={nextProject} aria-label="Next project">
                <ChevronRight size={18} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={trackRef}
            className="project-carousel-track"
            role="region"
            aria-label="Featured project slides"
            aria-roledescription="carousel"
            onScroll={updateActiveProject}
          >
          {projects.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 0.04}
              className={`project-carousel-slide ${activeIndex === index ? "is-active" : ""}`}
            >
              <article className={`project-showcase ${index % 2 ? "project-showcase--reverse" : ""}`}>
                <ProjectArtwork title={project.title} index={index} />

                <div className="project-showcase-copy">
                  <div className="project-card-meta">
                    <span>{project.category}</span>
                    <span>{project.timeline}</span>
                  </div>
                  <h3 className="project-card-title">{project.title}</h3>
                  <p className="project-card-role">{project.role}</p>
                  <p className="project-card-description">{project.description}</p>

                  <div className="project-card-footer">
                    <div className="project-tech-list" aria-label="Technologies used">
                      {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                    </div>
                    <div className="flex flex-wrap gap-5">
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="project-detail-link"
                        >
                          <FaGithub size={14} /> GitHub <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                      {project.live ? (
                        <a href={project.live} target="_blank" rel="noreferrer" className="project-detail-link">
                          Live project <ArrowUpRight size={14} />
                        </a>
                      ) : null}
                      <Link href={`/projects/${project.slug}`} className="project-detail-link">
                        Project details <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
          </div>

          <div className="project-carousel-pagination" role="group" aria-label="Choose a project">
            {projects.map((project, index) => (
              <button
                key={project.slug}
                type="button"
                aria-label={`Go to project ${index + 1}: ${project.title}`}
                aria-pressed={activeIndex === index}
                className={activeIndex === index ? "is-active" : ""}
                onClick={() => goToProject(index)}
              />
            ))}
          </div>
        </div>

        <details className="group mt-12 border-y border-[#292929] py-5">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm uppercase tracking-[0.12em] text-zinc-300 marker:hidden">
            <span>More work &amp; experiments <span className="ml-2 text-zinc-600">({additionalProjects.length})</span></span>
            <span className="text-xl text-zinc-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
          </summary>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {additionalProjects.map((project, index) => (
              <li key={project} className="flex gap-3 border-t border-[#292929] pt-3 text-sm text-zinc-400">
                <span className="font-mono text-xs text-zinc-600">0{index + 1}</span>
                {project}
              </li>
            ))}
            <li className="flex gap-3 border-t border-[#292929] pt-3 text-sm leading-6 text-zinc-400 sm:col-span-2 lg:col-span-4">
              <span className="font-mono text-xs text-zinc-600">+</span>
              Algorithm implementations: Dijkstra, Bellman–Ford, Prim, Kruskal, Disjoint Set, 0/1 Knapsack, A*, and Simulated Annealing.
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
}
