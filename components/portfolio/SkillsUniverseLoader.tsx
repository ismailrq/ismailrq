"use client";

import dynamic from "next/dynamic";
import type { Skill } from "@/data/portfolio";

const SkillsUniverse = dynamic(() => import("./SkillsUniverse"), {
  ssr: false,
  loading: () => (
    <div className="universe-loading" aria-live="polite">
      <span />
      Initializing spatial index…
    </div>
  ),
});

export function SkillsUniverseLoader({ skills }: { skills: Skill[] }) {
  return <SkillsUniverse skills={skills} />;
}
