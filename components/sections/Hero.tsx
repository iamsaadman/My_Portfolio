"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight, Download } from "lucide-react";
import { gmailComposeUrl, profile } from "@/data/site";
import { useEffect, useRef, useState } from "react";

const nameLines = ["MUHAMMAD", "SAADMAN", "SAKIB HOSSAIN"];
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const heroSlogans = [
  "Building useful ideas into thoughtful digital experiences.",
  "Code with purpose. Products designed around people.",
  "Collaborate, create, learn, and keep growing.",
  "Full-stack engineering, automation, and AI/ML exploration.",
];

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const [sloganIndex, setSloganIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 28]);

  useEffect(() => {
    if (reduceMotion) return;

    const intervalId = window.setInterval(() => {
      setSloganIndex((current) => (current + 1) % heroSlogans.length);
    }, 3600);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion]);

  const enter = (delay: number) => ({
    initial: reduceMotion ? false : { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay: reduceMotion ? 0 : delay },
  });

  return (
    <section id="home" ref={heroRef} className="hero-section relative px-4 sm:px-6 lg:px-8">
      <div className="hero-frame mx-auto max-w-7xl">
        <div className="hero-copy">
          <motion.p {...enter(0.06)} className="hero-kicker">
            Independent mind · Dhaka, Bangladesh
          </motion.p>

          <h1 className="hero-title" aria-label={profile.name}>
            {nameLines.map((line, index) => (
              <motion.span
                key={line}
                className="hero-name-line"
                aria-hidden="true"
                initial={reduceMotion ? false : { opacity: 0, y: "110%", filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: reduceMotion ? 0 : 0.8,
                  delay: reduceMotion ? 0 : 0.15 + index * 0.14,
                  ease: "easeOut",
                }}
              >
                {line}
              </motion.span>
            ))}
          </h1>

          <div className="hero-slogan-stage" aria-label="Rotating portfolio slogans">
            <AnimatePresence mode="wait" initial={false}>
              <motion.p
                key={heroSlogans[sloganIndex]}
                className="hero-slogan"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -14 }}
                transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
              >
                {heroSlogans[sloganIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <motion.p {...enter(0.22)} className="hero-role">
            UIU CSE student <span aria-hidden="true">/</span> Full-stack developer <span aria-hidden="true">/</span> AI/ML enthusiast
          </motion.p>

          <motion.p {...enter(0.3)} className="hero-description">
            I create purposeful digital products by combining software engineering with clear,
            considered experiences.
          </motion.p>

          <motion.div {...enter(0.38)} className="hero-actions">
            <a href="#projects" className="button-primary">
              Explore work <ArrowRight size={14} aria-hidden="true" />
            </a>
            <a
              href={`${basePath}/resume.pdf`}
              download="Muhammad_Saadman_Sakib_Hossain_Resume.pdf"
              className="button-secondary"
            >
              <Download size={14} aria-hidden="true" /> Download résumé
            </a>
          </motion.div>

          <motion.div {...enter(0.46)} className="hero-socials" aria-label="Social profiles">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a href={gmailComposeUrl} target="_blank" rel="noreferrer">Email ↗</a>
          </motion.div>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: reduceMotion ? 0 : 0.2, ease: "easeOut" }}
          style={{ y: reduceMotion ? 0 : portraitY }}
          className="hero-portrait-wrap"
        >
          <Image
            src={`${basePath}/saadman-portrait.png`}
            alt={`Portrait of ${profile.name}`}
            width={900}
            height={1140}
            sizes="(max-width: 767px) 78vw, (max-width: 1200px) 42vw, 520px"
            className="hero-portrait"
            fetchPriority="high"
          />
          <div className="hero-portrait-caption">
            <span>Based in</span>
            Dhaka, Bangladesh
          </div>
        </motion.div>

        <div className="hero-bottomline" aria-hidden="true">
          <span>Portfolio · 2026</span>
          <span className="inline-flex items-center gap-2">Scroll to explore <ArrowDown size={12} /></span>
        </div>
      </div>
    </section>
  );
}
