import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { experience, profile, projects, skillCategories, skills, socials } from "@/data/portfolio";
import { getProjectPresentation } from "@/data/project-presentation";

export function HeroSection() {
  return (
    <section className="landing-intro page-container" id="home" aria-labelledby="intro-title">
      <div className="landing-copy">
        <h1 id="intro-title">From architecture<br /><span>to delivery.<span className="terminal-caret headline-caret" aria-hidden="true" /></span></h1>
        <p className="landing-summary">{profile.intro}</p>
        <div className="landing-actions">
          <a className="button button-primary" href="#projects">View my work <ArrowDown size={15} aria-hidden="true" /></a>
          <a className="text-link" href="/cv/index.html" target="_blank" rel="noopener noreferrer">View CV <ArrowUpRight size={15} aria-hidden="true" /></a>
          <Link className="text-link" href="/about">More about me →</Link>
        </div>
      </div>
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
          <div className="minimal-section-heading"><p className="terminal-eyebrow">02 / CONTACT</p><h2 id="contact-title">Let’s talk.</h2></div>
          <p>Looking for an engineer who can own architecture, integrations, and delivery? Let’s discuss the product and its technical challenges.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight size={18} aria-hidden="true" /></a><dl className="contact-facts"><div><dt>Based in</dt><dd>{profile.location}</dd></div><div><dt>Status</dt><dd>Open to opportunities</dd></div></dl><div className="contact-socials">{socials.map(social => social.url ? <a className="text-link" key={social.label} href={social.url}>{social.label} ↗</a> : null)}</div></div>
        <ContactForm email={profile.email} />
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section className="landing-section page-container" aria-labelledby="experience-title" id="experience">
      <div className="minimal-section-heading"><p className="terminal-eyebrow">01 / EXPERIENCE</p><h2 id="experience-title">How I got here.</h2></div>
      <div className="experience-list">{experience.map(job => <article className="experience-row" key={job.period}><p className="experience-date">{job.period}</p><div><h3>{job.role}</h3><p className="experience-company">{job.company}</p>{job.summary ? <p>{job.summary}</p> : null}<ul>{job.commits.map(item => <li key={item}>{item}</li>)}</ul><ul className="simple-tags" aria-label="Technologies">{job.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul></div></article>)}</div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section className="landing-section page-container" aria-labelledby="skills-title" id="skills">
      <div className="minimal-section-heading"><p className="terminal-eyebrow">03 / SKILLS</p><h2 id="skills-title">Technical skills.</h2></div>
      <div className="minimal-skills">{skillCategories.map(category => <div key={category}><h3>{category}</h3><ul className="simple-tags">{skills.filter(skill => skill.category === category).map(skill => <li key={skill.name}>{skill.name}</li>)}</ul></div>)}</div>
    </section>
  );
}
