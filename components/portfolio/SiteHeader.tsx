"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Section = "home" | "projects" | "experience" | "contact";

export function SiteHeader({ page }: { page: "home" | "work" }) {
  const [section, setSection] = useState<Section>("home");

  useEffect(() => {
    if (page !== "home") return;
    let frame = 0;
    function update() {
      frame = 0;
      const header = document.querySelector(".site-header");
      const offset = (header?.getBoundingClientRect().height ?? 72) + 80;
      let current: Section = "home";
      for (const id of ["home", "projects", "experience", "contact"] as const) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= offset) current = id;
      }
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) current = "contact";
      setSection(current);
    }
    function schedule() { if (!frame) frame = requestAnimationFrame(update); }
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [page]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link className="site-brand" href="/#home" aria-label="Ismail Raqi, home">ismail<span>.raqi</span></Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#home" aria-current={page === "home" && section === "home" ? "location" : undefined} onClick={() => setSection("home")}><span className="nav-link-label">Home</span></Link>
          <Link href="/#projects" aria-current={page === "work" ? "page" : page === "home" && section === "projects" ? "location" : undefined} onClick={() => setSection("projects")}><span className="nav-link-label">Work</span></Link>
          <Link href="/#experience" aria-current={page === "home" && section === "experience" ? "location" : undefined} onClick={() => setSection("experience")}><span className="nav-link-label">Experience</span></Link>
          <Link href="/#contact" aria-current={page === "home" && section === "contact" ? "location" : undefined} onClick={() => setSection("contact")}><span className="nav-link-label">Contact</span></Link>
        </nav>
      </div>
    </header>
  );
}
