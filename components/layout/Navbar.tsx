"use client";

import { cn } from "@/lib/utils";
import { profile } from "@/data/site";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const primaryNavigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Expertise", href: "#expertise" },
  { label: "Work", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const sections = primaryNavigation
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));

    let previousScrollY = window.scrollY;
    const updateScrollState = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 24);

      if (currentScrollY < 72) {
        setHidden(false);
      } else if (currentScrollY > previousScrollY + 4) {
        setHidden(true);
      } else if (currentScrollY < previousScrollY - 4) {
        setHidden(false);
      }

      previousScrollY = currentScrollY;
    };
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", updateScrollState);
    };
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);
  const isHidden = hidden && !mobileOpen;

  return (
    <header className={cn("site-header sticky top-0 z-50 px-4 pt-3 sm:px-8 lg:px-12", isHidden && "site-header--hidden")}>
      <nav
        aria-label="Main navigation"
        className={cn("site-nav flex w-full items-center justify-between gap-5 px-0 py-4 transition-all duration-300 sm:px-1", scrolled && "site-nav--scrolled")}
      >
        <Link
          href="#home"
          onClick={closeMenu}
          aria-label={`${profile.name} — home`}
          className="brand-link inline-flex shrink-0 items-center gap-2.5"
        >
          <Image src={`${basePath}/icon.svg`} alt="" width={32} height={32} className="brand-icon" />
          <span className="brand-name">Saadman Sakib</span>
        </Link>

        <div className="hidden items-center gap-0.5 lg:flex">
          {primaryNavigation.map((item) => {
            const section = item.href.slice(1);
            const isActive = activeId === section;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "location" : undefined}
                className="nav-link px-3 py-2"
              >
                {item.label}
                <span className="sr-only">{isActive ? " current section" : ""}</span>
              </a>
            );
          })}
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-zinc-100 lg:hidden"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {mobileOpen ? (
        <div
          id="mobile-navigation"
          className="mt-2 w-full border border-white/10 bg-[#111]/95 p-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
          {primaryNavigation.map((item) => {
            const section = item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={activeId === section ? "location" : undefined}
                className={cn("mobile-nav-link flex items-center justify-between border-b border-white/[0.06] px-4 py-3 text-sm uppercase tracking-[0.12em]", activeId === section ? "text-white" : "text-zinc-400")}
              >
                {item.label}
                <span className="text-zinc-600" aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
