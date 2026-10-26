import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { projects } from "@/data/portfolio";

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

  return (
    <SiteShell active="work">
      <article className="case-study page-container" aria-labelledby="case-title">
        <Link className="text-link case-back" href="/#projects"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link>
        <header className="case-intro">
          <p className="terminal-eyebrow">{project.label}</p>
          <h1 id="case-title">{project.name}</h1>
          <p className="case-description">{project.description}</p>
          <ul className="simple-tags" aria-label="Project technologies">{project.technologies.map(tech => <li key={tech}>{tech}</li>)}</ul>
        </header>
        <div className="case-content">
          <aside className="case-ownership"><h2>My contribution</h2><p>{project.role}</p></aside>
          <div className="case-sections">
            {project.details.map((detail, index) => (
              <section key={detail.label} aria-labelledby={`case-detail-${index}`}>
                <h2 id={`case-detail-${index}`}>{detail.label}</h2>
                <p>{detail.description}</p>
              </section>
            ))}
          </div>
        </div>
        <div className="case-next"><Link className="text-link" href="/#projects"><ArrowLeft size={15} aria-hidden="true" /> All projects</Link><Link className="text-link" href="/#contact">Discuss a project <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      </article>
    </SiteShell>
  );
}
