import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { projects } from "@/data/portfolio";
import { getProjectPresentation } from "@/data/project-presentation";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/site";
import { projectStructuredData } from "@/lib/structured-data";

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
  return pageMetadata({
    title: `${project.name} — Ismail Raqi`,
    description: project.summary,
    pathname: `/work/${project.slug}`,
  });
}

export default async function ProjectPage({ params }: Props) {
  const project = findProject((await params).slug);
  const presentation = getProjectPresentation(project);
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <SiteShell active="work">
      <JsonLd data={projectStructuredData(project)} />
      <article className="project-page page-container" aria-labelledby="project-title">
        <Link className="project-back text-link" href="/#projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>

        <header className="project-introduction">
          <h1 id="project-title">{project.name}</h1>
          <p className="project-description">{project.description}</p>
          <p className="project-byline">{project.role}{project.status === "Professional work" ? <span>{project.label.split(" · ")[0]}</span> : null}</p>
          {project.url ? (
            <a className="project-external-link text-link" href={project.url} target="_blank" rel="noopener noreferrer">
              {project.urlLabel ?? "View project"} <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ) : null}
        </header>

        <div className="project-details">
          {project.details.map(detail => (
            <section key={detail.label}>
              <h2>{detail.label}</h2>
              <p>{detail.description}</p>
            </section>
          ))}
        </div>

        {presentation.groups.length > 0 ? <section className="project-technologies" aria-labelledby="project-technologies-title">
          <h2 id="project-technologies-title">Technologies</h2>
          <dl>
            {presentation.groups.map(group => (
              <div key={group.label}>
                <dt>{group.label}</dt>
                <dd><ul className="project-technology-labels" aria-label={group.label}>{group.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul></dd>
              </div>
            ))}
          </dl>
        </section> : null}

        <nav className="project-navigation" aria-label="More projects">
          <Link className="text-link" href="/#projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
          <Link className="text-link" href={`/work/${nextProject.slug}`} aria-label={`Next project: ${nextProject.name}`}>Next project<ArrowRight size={16} aria-hidden="true" /></Link>
        </nav>
      </article>
    </SiteShell>
  );
}
