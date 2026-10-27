import { profile, projects, socials } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const content = [
    `# ${profile.name}`,
    "",
    `> ${profile.about}`,
    "",
    "## Portfolio",
    "",
    `- [${profile.name}](${absoluteUrl()}): ${profile.role}. ${profile.location}.`,
    "",
    "## Projects",
    "",
    ...projects.map(project =>
      `- [${project.name}](${absoluteUrl(`/work/${project.slug}`)}): ${project.summary}`,
    ),
    "",
    "## Profiles",
    "",
    ...socials.flatMap(social => social.url ? [`- [${social.label}](${social.url})`] : []),
    "",
    "## Optional",
    "",
    `- [CV (English PDF)](${absoluteUrl("/cv/Ismail-Raqi-CV.pdf")})`,
    "",
  ].join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
