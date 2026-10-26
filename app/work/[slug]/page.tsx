import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft, ArrowRight, ArrowLeftRight, ArrowUpRight, Box, ChartNoAxesCombined,
  ChevronDown, Cloud, Code2, Cpu, Database, Layers3, LocateFixed, Network,
  Radio, ShieldCheck, Smartphone, Workflow, type LucideIcon,
} from "lucide-react";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { projects } from "@/data/portfolio";
import { getProjectPresentation } from "@/data/project-presentation";

type Props = { params: Promise<{ slug: string }> };

const flowIcons = {
  code: Code2, cpu: Cpu, cloud: Cloud, database: Database, network: Network,
  chart: ChartNoAxesCombined, phone: Smartphone, box: Box, location: LocateFixed,
};

const detailIcons: Record<string, LucideIcon> = {
  Processing: Cpu,
  "Background jobs": Layers3,
  Delivery: Cloud,
  Security: ShieldCheck,
  Infrastructure: Network,
  "Data and modeling": Database,
  "Failure analysis": ShieldCheck,
  Routing: Workflow,
  Calculations: Code2,
  Results: ChartNoAxesCombined,
  Mobile: Smartphone,
  AR: Box,
  Location: LocateFixed,
  "Storage and services": Database,
  Reliability: Radio,
};

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
  const flow = presentation.flow;

  return (
    <SiteShell active="work">
      <article className="project-page page-container" aria-labelledby="project-title" style={{ "--project-accent": project.accent } as CSSProperties}>
        <Link className="project-back text-link" href="/#projects"><ArrowLeft size={16} aria-hidden="true" /> Back to projects</Link>

        <header className="project-hero">
          <div className="project-hero-copy">
            <p className="project-category"><i aria-hidden="true" />{presentation.category}</p>
            <h1 id="project-title">{project.name}</h1>
            <p className="project-description">{project.description}</p>
          </div>
          {flow ? (
            <figure className="project-flow">
              <figcaption><Workflow size={15} aria-hidden="true" />{flow.title}<span>Simplified flow</span></figcaption>
              <ol className="project-flow-stages">
                {flow.stages.map((stage, index) => {
                  const Icon = flowIcons[stage.icon];
                  const Connector = flow.bidirectional && index === 0 ? ArrowLeftRight : ArrowRight;

                  return (
                    <li key={stage.name}>
                      <span className="project-flow-icon"><Icon size={24} strokeWidth={1.5} aria-hidden="true" /></span>
                      <strong>{stage.name}</strong><span>{stage.technology}</span>
                      {index < flow.stages.length - 1 ? <Connector className="project-flow-connector" size={16} aria-hidden="true" /> : null}
                    </li>
                  );
                })}
              </ol>
              <p className="project-flow-caption"><span aria-hidden="true" />{flow.caption}</p>
            </figure>
          ) : null}
        </header>

        <div className="project-layout">
          <section className="project-work" aria-labelledby="project-work-title">
            <h2 id="project-work-title">Inside the project</h2>
            <div className="project-detail-grid">
              {project.details.map(detail => {
                const Icon = detailIcons[detail.label] ?? Code2;

                return (
                  <section className="project-detail-tile" key={detail.label}>
                    <span className="project-detail-icon"><Icon size={20} strokeWidth={1.6} aria-hidden="true" /></span>
                    <h3>{detail.label}</h3>
                    <p>{detail.description}</p>
                  </section>
                );
              })}
            </div>
          </section>

          <aside className="project-sidebar" aria-label="Project information and technologies">
            <section className="project-info" aria-labelledby="project-info-title">
              <h2 id="project-info-title">Project information</h2>
              <dl>
                <div><dt>My role</dt><dd>{role}{project.role.includes("previously") ? <span>Previously Mobile Engineer</span> : null}</dd></div>
                <div><dt>Period</dt><dd>{presentation.period}</dd></div>
                <div><dt>{project.status === "Professional work" ? "Company" : "Engagement"}</dt><dd>{project.status === "Professional work" ? project.label.split(" · ")[0] : project.status}</dd></div>
              </dl>
              <Link className="project-contact" href="/#contact">Discuss a project<ArrowUpRight size={16} aria-hidden="true" /></Link>
            </section>

            <details className="project-technologies">
              <summary><Code2 size={18} aria-hidden="true" /><span>Technology stack<small>{project.technologies.length} technologies</small></span><ChevronDown size={17} aria-hidden="true" /></summary>
              <div className="project-technology-groups">
                {presentation.groups.map(group => (
                  <div className="project-technology-group" key={group.label}>
                    <h3>{group.label}</h3>
                    <ul aria-label={group.label}>{group.technologies.map(technology => <li key={technology}>{technology}</li>)}</ul>
                  </div>
                ))}
              </div>
            </details>
          </aside>
        </div>

        <nav className="project-navigation" aria-label="More projects">
          <Link className="text-link" href="/#projects"><ArrowLeft size={16} aria-hidden="true" /> All projects</Link>
          <Link className="project-next" href={`/work/${nextProject.slug}`}><span>Up next</span><strong>{nextProject.name}</strong><ArrowUpRight size={22} aria-hidden="true" /></Link>
        </nav>
      </article>
    </SiteShell>
  );
}
