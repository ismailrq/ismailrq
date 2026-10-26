import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ChevronDown } from "lucide-react";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { projects } from "@/data/portfolio";
import { getProjectPresentation } from "@/data/project-presentation";

type Props = { params: Promise<{ slug: string }> };

function findProject(slug: string) {
  const project = projects.find(project => project.slug === slug);
  if (!project) notFound();
  return project;
}

export function generateStaticParams() {
  return projects.map(project => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = findProject((await params).slug);
  return { title: `${project.name} — Ismail Raqi`, description: project.summary };
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  const presentation = getProjectPresentation(project);
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  const role = project.role.split(",")[0];

  return (
    <SiteShell active="work">
      <article className="case-study page-container" aria-labelledby="case-title" style={{ "--project-accent": project.accent } as CSSProperties}>
        <div className="case-topline">
          <Link className="text-link case-back" href="/#projects"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link>
          <span className="case-project-index">PROJECT {String(projects.indexOf(project) + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span>
        </div>
        <header className="case-hero">
          <div className="case-intro">
            <p className="project-category"><i aria-hidden="true" />{presentation.category}</p>
            <h1 id="case-title">{project.name}</h1>
            <p className="case-description">{project.description}</p>
          </div>
          <dl className="case-facts">
            <div><dt>My role</dt><dd>{role}{project.role.includes("previously") ? <span className="case-role-note">Previously Mobile Engineer</span> : null}</dd></div>
            <div><dt>Period</dt><dd>{presentation.period}</dd></div>
            <div><dt>Engagement</dt><dd>{project.status === "Professional work" ? project.label.split(" · ")[0] : project.status}</dd></div>
          </dl>
        </header>
        <section className="case-content" aria-labelledby="case-details-title">
          <div className="case-section-heading">
            <span className="case-section-label">01 / THE WORK</span>
            <h2 id="case-details-title">Technical details</h2>
          </div>
          <ol className="case-sections">
            {project.details.map((detail, index) => (
              <li className="case-detail" key={detail.label}>
                <span className="case-detail-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{detail.label}</h3><p>{detail.description}</p></div>
              </li>
            ))}
          </ol>
        </section>
        <details className="case-stack">
          <summary>
            <div><span className="case-section-label">02 / THE STACK</span><h2>Technology stack</h2></div>
            <span className="case-stack-toggle"><span className="stack-collapsed">View all {project.technologies.length} technologies</span><span className="stack-expanded">Hide technologies</span><ChevronDown size={18} aria-hidden="true" /></span>
          </summary>
          <div className="case-stack-groups">
            {presentation.groups.map(group => (
              <div className="case-stack-group" key={group.label}>
                <h3>{group.label}</h3>
                <ul aria-label={group.label}>{group.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
              </div>
            ))}
          </div>
        </details>
        <nav className="case-next" aria-label="More projects">
          <Link className="text-link" href="/#projects"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link>
          <Link className="case-next-project" href={`/work/${nextProject.slug}`}>
            <span>Next project</span><strong>{nextProject.name}</strong><ArrowUpRight size={24} aria-hidden="true" />
          </Link>
        </nav>
      </article>
    </SiteShell>
  );
}
