import { profile, projects, skills, socials, type Project } from "@/data/portfolio";
import { absoluteUrl, siteName } from "./site";

const personId = absoluteUrl("/#person");
const websiteId = absoluteUrl("/#website");
const [city, country] = profile.location.split(",").map(part => part.trim());

const person = {
  "@type": "Person",
  "@id": personId,
  name: profile.name,
  url: absoluteUrl(),
  jobTitle: profile.role,
  description: profile.about,
  image: absoluteUrl("/images/ismail-raqi-deep-blue.png"),
  email: profile.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: city,
    addressCountry: country,
  },
  knowsAbout: skills.map(skill => skill.name),
  sameAs: socials.flatMap(social => social.url ? [social.url] : []),
};

const website = {
  "@type": "WebSite",
  "@id": websiteId,
  url: absoluteUrl(),
  name: siteName,
  inLanguage: "en",
  author: { "@id": personId },
};

export const profileStructuredData = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    website,
    {
      "@type": "ProfilePage",
      "@id": absoluteUrl("/#profile"),
      url: absoluteUrl(),
      name: `${profile.name} — ${profile.role}`,
      description: profile.about,
      inLanguage: "en",
      isPartOf: { "@id": websiteId },
      mainEntity: { "@id": personId },
      hasPart: projects.map(project => ({
        "@type": "WebPage",
        "@id": absoluteUrl(`/work/${project.slug}#webpage`),
        url: absoluteUrl(`/work/${project.slug}`),
        name: project.name,
      })),
    },
  ],
};

export function projectStructuredData(project: Project) {
  const url = absoluteUrl(`/work/${project.slug}`);

  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      website,
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        url,
        name: `${project.name} — ${profile.name}`,
        description: project.summary,
        inLanguage: "en",
        isPartOf: { "@id": websiteId },
        author: { "@id": personId },
        mainEntity: { "@id": `${url}#project` },
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#project`,
        name: project.name,
        description: project.description,
        keywords: project.technologies,
        contributor: { "@id": personId },
        ...(project.url ? { sameAs: project.url } : {}),
      },
    ],
  };
}
