import {
  ContactSection,
  EducationSection,
  ExperienceSection,
  HeroSection,
  ProjectsSection,
  SkillsSection,
} from "@/components/portfolio/sections";
import { SiteShell } from "@/components/portfolio/SiteShell";

export default function Home() {
  return (
    <SiteShell>
      <HeroSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <SkillsSection />
      <ContactSection />
    </SiteShell>
  );
}
