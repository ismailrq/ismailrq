import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { ExperienceSection, SkillsSection } from "@/components/portfolio/sections";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = { title: "About — Ismail Raqi", description: profile.about };

export default function AboutPage() {
  return (
    <SiteShell active="about">
      <section className="about-intro page-container" aria-labelledby="about-title">
        <Link className="text-link" href="/">← Home</Link>
        <div className="about-intro-grid">
          <div>
            <div className="about-page-heading"><p className="terminal-eyebrow">ABOUT ME</p><h1 id="about-title">Ismail Raqi.</h1><p className="landing-role">{profile.role} · {profile.location}</p></div>
            <div className="about-prose"><p>{profile.about}</p><h2>How I work</h2><p>{profile.philosophy}</p></div>
          </div>
          <div className="about-portrait">
            <Image
              src="/images/ismail-raqi-about.png"
              alt="Ismail Raqi seated at a desk"
              fill
              sizes="(max-width: 760px) calc(100vw - 40px), 280px"
              preload
            />
          </div>
        </div>
      </section>
      <ExperienceSection />
      <section className="landing-section page-container" id="education" aria-labelledby="education-title">
        <div className="minimal-section-heading"><p className="terminal-eyebrow">02 / EDUCATION</p><h2 id="education-title">The foundations.</h2></div>
        <div className="education-rows">
          <article>
            <span>Nov 2021 – Sep 2022</span>
            <div>
              <h3>1337 Coding School (42 Network)</h3>
              <p>Software Engineering Program · Khouribga, Morocco</p>
              <div className="education-details">
                <p>Part of the international 42 Network, 1337 is a coding school built around practical projects and learning with other students.</p>
                <ul className="education-highlights">
                  <li><strong>Independent learning:</strong> research, experiment, and solve problems without traditional lectures.</li>
                  <li><strong>Peer assessment:</strong> review other students’ projects, explain design choices, and respond to feedback.</li>
                  <li><strong>Broad foundations:</strong> the curriculum covers programming, algorithms, systems, networks, and data.</li>
                </ul>
                <div className="education-links"><a className="text-link" href="https://1337.ma/fr/concept/" target="_blank" rel="noopener noreferrer">About 1337 ↗</a><a className="text-link" href="https://1337.ma/fr/the-curriculum/" target="_blank" rel="noopener noreferrer">Explore the curriculum ↗</a></div>
              </div>
            </div>
          </article>
        </div>
      </section>
      <SkillsSection />
      <section className="about-next page-container"><h2>Want to discuss an opportunity?</h2><Link className="button button-primary" href="/#contact">Get in touch →</Link><a className="text-link" href="/cv/index.html" target="_blank" rel="noopener noreferrer">View CV ↗</a></section>
    </SiteShell>
  );
}
