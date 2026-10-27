import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio/sections";
import { SiteShell } from "@/components/portfolio/SiteShell";
import { JsonLd } from "@/components/seo/JsonLd";
import { profile } from "@/data/portfolio";
import { pageMetadata } from "@/lib/site";
import { profileStructuredData } from "@/lib/structured-data";

export const metadata = pageMetadata({
  title: `${profile.name} — ${profile.role}`,
  description: profile.about,
  pathname: "/",
});

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={profileStructuredData} />
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </SiteShell>
  );
}
