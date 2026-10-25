import { ContactSection, HeroSection, ProjectsSection } from "@/components/portfolio/sections";
import { SiteShell } from "@/components/portfolio/SiteShell";

export default function Home() {
  return <SiteShell><HeroSection /><ProjectsSection /><ContactSection /></SiteShell>;
}
