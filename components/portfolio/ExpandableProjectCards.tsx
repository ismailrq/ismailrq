"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Tags } from "./Panel";
import type { Project } from "@/data/portfolio";

const proofFields = [
  ["role", "My role"],
  ["constraint", "System constraint"],
  ["decision", "Engineering decision"],
  ["outcome", "Outcome"],
] as const satisfies ReadonlyArray<readonly [keyof Project, string]>;

export function ExpandableProjectCards({ projects }: { projects: Project[] }) {
  const [expandedSlugs, setExpandedSlugs] = useState<Set<string>>(
    () => new Set(projects[0] ? [projects[0].slug] : []),
  );

  function toggleProject(slug: string) {
    setExpandedSlugs((current) => {
      const next = new Set(current);

      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }

      return next;
    });
  }

  return (
    <div className="project-grid">
      {projects.map((project) => {
        const isExpanded = expandedSlugs.has(project.slug);
        const proofId = `${project.slug}-engineering-proof`;

        return (
          <article
            className={`project-card ${isExpanded ? "is-expanded" : ""}`}
            key={project.slug}
          >
            <div className="project-card-head">
              <span
                className="project-language-dot"
                style={{ backgroundColor: project.accent }}
                aria-hidden="true"
              />
              <p>{project.slug}</p>
              <span>WORK</span>
            </div>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <Tags items={project.technologies} />
            <div className="project-meta">
              <span>
                <span
                  className="project-language-dot"
                  style={{ backgroundColor: project.accent }}
                  aria-hidden="true"
                />
                {project.language}
              </span>
              {project.url ? (
                <a href={project.url}>
                  View project
                  <ArrowRight size={13} aria-hidden="true" />
                </a>
              ) : (
                <span className="project-status">{project.status}</span>
              )}
            </div>

            <button
              className="project-expand"
              type="button"
              aria-expanded={isExpanded}
              aria-controls={proofId}
              aria-label={`${isExpanded ? "Hide" : "Show"} project details for ${project.name}`}
              onClick={() => toggleProject(project.slug)}
            >
              <span>
                <i aria-hidden="true" />
                Project details
              </span>
              <ChevronDown size={15} aria-hidden="true" />
            </button>

            <div
              className="project-proof"
              id={proofId}
              aria-hidden={!isExpanded}
            >
              <div className="project-proof-inner">
                <dl>
                  {proofFields.map(([field, label]) => (
                    <div key={field}>
                      <dt>{label}</dt>
                      <dd>{project[field]}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
