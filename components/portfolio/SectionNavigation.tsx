"use client";

import {
  BriefcaseBusiness,
  CodeXml,
  FolderGit2,
  House,
  Orbit,
} from "lucide-react";
import { useEffect, useState } from "react";
import type { NavigationItem, SectionId } from "@/data/portfolio";

const iconMap = {
  home: House,
  skills: Orbit,
  experience: BriefcaseBusiness,
  projects: FolderGit2,
  contact: CodeXml,
} satisfies Record<SectionId, typeof House>;

export function SectionNavigation({ items }: { items: NavigationItem[] }) {
  const [activeId, setActiveId] = useState<SectionId>("home");

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]) {
          setActiveId(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: "-22% 0px -58% 0px",
        threshold: [0, 0.2, 0.5, 0.8],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);

  function navigateTo(event: React.MouseEvent<HTMLAnchorElement>, id: SectionId) {
    event.preventDefault();
    const section = document.getElementById(id);
    if (!section) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    section.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  function renderItems(compact = false) {
    return items.map((item) => {
      const Icon = iconMap[item.id];
      const isActive = activeId === item.id;

      return (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={isActive ? "is-active" : undefined}
            aria-current={isActive ? "location" : undefined}
            aria-label={`Go to ${item.label}`}
            onClick={(event) => navigateTo(event, item.id)}
          >
            <Icon size={compact ? 19 : 18} strokeWidth={1.7} aria-hidden="true" />
            <span className={compact ? "dock-label" : "rail-label"}>
              {item.label}
            </span>
            {compact ? null : (
              <span className="rail-index" aria-hidden="true">
                {item.index}
              </span>
            )}
          </a>
        </li>
      );
    });
  }

  return (
    <>
      <nav className="desktop-rail" aria-label="Section navigation">
        <a
          className="rail-monogram"
          href="#home"
          aria-label="Ismail Raqi, back to home"
          onClick={(event) => navigateTo(event, "home")}
        >
          IR
        </a>
        <ul>{renderItems()}</ul>
        <span className="rail-status" aria-label="Currently available">
          <span />
          OPEN
        </span>
      </nav>

      <nav className="mobile-dock" aria-label="Section navigation">
        <ul>{renderItems(true)}</ul>
      </nav>
    </>
  );
}

