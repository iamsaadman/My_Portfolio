"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { IconType } from "react-icons";
import { FaJava } from "react-icons/fa";
import {
  SiCplusplus,
  SiDjango,
  SiFlutter,
  SiGit,
  SiGithub,
  SiJavascript,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { technologySlider } from "@/data/site";

const technologyIcons: Record<string, IconType> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  Flutter: SiFlutter,
  Django: SiDjango,
  PostgreSQL: SiPostgresql,
  SQLite: SiSqlite,
  "Tailwind CSS": SiTailwindcss,
  Git: SiGit,
  GitHub: SiGithub,
  "C++": SiCplusplus,
  Java: FaJava,
};

const technologyColors: Record<string, string> = {
  Python: "#3776ab",
  JavaScript: "#c5a900",
  TypeScript: "#3178c6",
  React: "#149eca",
  Flutter: "#02569b",
  Django: "#092e20",
  PostgreSQL: "#4169e1",
  SQLite: "#003b57",
  "Tailwind CSS": "#0891b2",
  Git: "#f05032",
  GitHub: "#24292f",
  "C++": "#00599c",
  Java: "#e76f00",
};

type BrandStyle = CSSProperties & { "--brand-color": string };

export function TechSlider() {
  const [activeTechnology, setActiveTechnology] = useState<string | null>(null);

  return (
    <section className="tech-cloud-section" aria-labelledby="tech-cloud-title">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="tech-cloud-heading">
          <p className="section-heading-eyebrow">Tools of the trade</p>
          <h2 id="tech-cloud-title">A working vocabulary.</h2>
          <p>Monochrome by default. Tap a mark to bring its color forward.</p>
        </div>

        <div className="tech-cloud">
          {technologySlider.map(({ name }, index) => {
            const Icon = technologyIcons[name];
            const isActive = activeTechnology === name;

            return (
              <button
                key={name}
                type="button"
                className={`tech-cloud-item ${isActive ? "is-active" : ""}`}
                style={{ "--brand-color": technologyColors[name] } as BrandStyle}
                aria-label={`${isActive ? "Turn off" : "Show"} ${name} logo color`}
                aria-pressed={isActive}
                onClick={() => setActiveTechnology(isActive ? null : name)}
              >
                <Icon size={34} aria-hidden="true" />
                <span>{name}</span>
                <span className="tech-cloud-index" aria-hidden="true">0{index + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
