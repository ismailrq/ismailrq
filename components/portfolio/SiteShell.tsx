import { SiteHeader } from "./SiteHeader";
import { BackgroundField } from "./BackgroundField";
import type { ReactNode } from "react";
import { profile } from "@/data/portfolio";

export function SiteShell({ children, active = "home" }: { children: ReactNode; active?: "home" | "work" }) {
  return (
    <>
      {active === "work" ? null : <BackgroundField />}
      <a className="skip-link" href="#main-content">Skip to main content</a>
      <SiteHeader page={active} />
      <main id="main-content" className="site-main">{children}</main>
      <footer className="minimal-footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <div><a href="https://github.com/ismailrq">GitHub ↗</a><a href="https://www.linkedin.com/in/raqi/">LinkedIn ↗</a><a href="/cv/index.html" target="_blank" rel="noopener noreferrer">CV ↗</a></div>
      </footer>
    </>
  );
}
