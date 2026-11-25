"use client";

import { useEffect, useState } from "react";

export function CinematicIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(false), 1580);
    return () => window.clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="cinematic-intro">
      <div className="intro-content" aria-hidden="true">
        <svg className="intro-line" viewBox="0 0 1000 1" preserveAspectRatio="none">
          <path className="intro-line-path" d="M0 0.5H1000" />
        </svg>
        <p className="intro-name">
          <span>MUHAMMAD SAADMAN</span>
          <span>SAKIB HOSSAIN</span>
        </p>
        <p className="intro-roles">
          <span>Full-stack developer</span>
          <span>Software engineer</span>
          <span>AI/ML enthusiast</span>
        </p>
      </div>
      <button
        type="button"
        className="intro-skip"
        onClick={() => setVisible(false)}
        aria-label="Skip introduction"
      >
        Skip intro <span aria-hidden="true">↗</span>
      </button>
    </div>
  );
}
