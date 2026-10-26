import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowUpRight, Mail } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { experience, profile, projects, skillCategories, skills, socials } from "@/data/portfolio";
import { getProjectPresentation } from "@/data/project-presentation";

export function HeroSection() {
  return (
    <section className="landing-intro page-container" id="home" aria-labelledby="intro-title">
      <aside className="profile-card" aria-label="Profile summary">
        <div className="profile-portrait-stage">
          <Image
            className="profile-portrait"
            src="/images/ismail-raqi-deep-blue.png"
            alt="Portrait of Ismail Raqi"
            fill
            sizes="(max-width: 760px) calc(100vw - 40px), (max-width: 1000px) 280px, 320px"
            preload
          />
        </div>
        <div className="profile-card-body">
          <h2>{profile.name}</h2>
          <p className="profile-card-role">{profile.role}</p>
          <p className="profile-card-location">{profile.location}</p>
        </div>
      </aside>
      <div className="landing-copy" id="about">
        <h1 id="intro-title">From architecture<br /><span>to delivery.<span className="terminal-caret headline-caret" aria-hidden="true" /></span></h1>
        <p className="landing-summary">I’m a software engineer focused on application architecture, technical leadership, and product delivery. I keep solutions clear, communication straightforward, and software built to last.</p>
        <nav className="hero-socials" aria-label="Connect with Ismail">
          {socials.filter(social => social.url && (social.label === "GitHub" || social.label === "LinkedIn")).map(social => (
            <a
              className={`hero-social-link hero-social-${social.label.toLowerCase()}`}
              key={social.label}
              href={social.url}
              aria-label={`${social.label} profile`}
              title={social.label}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.label === "GitHub" ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M9 19c-4.3 1.3-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.6c3-.3 6.2-1.5 6.2-6.8a5.3 5.3 0 0 0-1.5-3.7A4.9 4.9 0 0 0 18.7 1S17.5.7 15 2.5a12.8 12.8 0 0 0-6 0C6.5.7 5.3 1 5.3 1a4.9 4.9 0 0 0-.1 4A5.3 5.3 0 0 0 3.7 8.7c0 5.3 3.2 6.5 6.2 6.8a3.4 3.4 0 0 0-.9 2.6V22" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V9h4v2a6 6 0 0 1 2-3Z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              )}
            </a>
          ))}
          <a className="hero-social-link hero-social-email" href={`mailto:${profile.email}`} aria-label="Email Ismail" title="Email">
            <Mail size={22} strokeWidth={1.7} aria-hidden="true" />
          </a>
        </nav>
      </div>
    </section>
  );
}

export function ProjectsSection() {
  return (
    <section className="landing-section page-container" id="projects" aria-labelledby="projects-title">
      <div className="minimal-section-heading"><p className="terminal-eyebrow">01 / SELECTED WORK</p><h2 id="projects-title">Architecture in practice.</h2></div>
      <div className="projects-grid">
        {projects.map((project, index) => {
          const presentation = getProjectPresentation(project);

          return (
            <article className="project-card" key={project.slug} style={{ "--project-accent": project.accent } as CSSProperties}>
              <div className="project-card-top">
                <span className="project-category"><i aria-hidden="true" />{presentation.role}</span>
                <span className="project-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.summary}</p>
              <ul className="project-highlights" aria-label={`${project.name} highlights`}>
                {presentation.highlights.map(technology => <li key={technology}>{technology}</li>)}
              </ul>
              <Link className="project-case-link" href={`/work/${project.slug}`} aria-label={`Explore ${project.name}`}>Explore project <ArrowUpRight size={18} aria-hidden="true" /></Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="landing-section page-container" id="contact" aria-labelledby="contact-title">
      <div className="minimal-contact-grid">
        <div className="contact-copy">
          <div className="minimal-section-heading"><p className="terminal-eyebrow">05 / CONTACT</p><h2 id="contact-title">Let’s talk.</h2></div>
          <p>Looking for an engineer who can own architecture, integrations, and delivery? Let’s discuss the product and its technical challenges.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={18} aria-hidden="true" /></a><dl className="contact-facts"><div><dt>Based in</dt><dd>{profile.location}</dd></div><div><dt>Status</dt><dd>Open to opportunities</dd></div></dl><div className="contact-socials">{socials.map(social => social.url ? <a className="text-link" key={social.label} href={social.url}>{social.label} ↗</a> : null)}</div></div>
        <ContactForm email={profile.email} />
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="landing-section page-container" aria-labelledby="experience-title" id="experience">
      <div className="minimal-section-heading"><p className="terminal-eyebrow">02 / EXPERIENCE</p><h2 id="experience-title">How I got here.</h2></div>
      <div className="experience-list">{experience.map(job => <article className="experience-row" key={job.period}><p className="experience-date">{job.period}</p><div><h3>{job.role}</h3><p className="experience-company">{job.company}</p>{job.summary ? <p>{job.summary}</p> : null}<ul>{job.commits.map(item => <li key={item}>{item}</li>)}</ul><ul className="simple-tags" aria-label="Technologies">{job.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div></article>)}</div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="landing-section page-container" aria-labelledby="skills-title" id="skills">
      <div className="minimal-section-heading"><p className="terminal-eyebrow">04 / SKILLS</p><h2 id="skills-title">Technical skills.</h2></div>
      <div className="minimal-skills">{skillCategories.map(category => <div key={category}><h3>{category}</h3><ul className="simple-tags">{skills.filter(skill => skill.category === category).map(skill => <li key={skill.name}>{skill.name}</li>)}</ul></div>)}</div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section className="landing-section page-container" id="education" aria-labelledby="education-title">
      <div className="minimal-section-heading"><p className="terminal-eyebrow">03 / EDUCATION</p><h2 id="education-title">The foundations.</h2></div>
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
  );
}
