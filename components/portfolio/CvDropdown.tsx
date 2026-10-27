import { existsSync } from "node:fs";
import path from "node:path";
import { CvMenu } from "./CvMenu";

const versions = [
  { language: "en", label: "English", file: "Ismail-Raqi-CV.pdf" },
  { language: "fr", label: "Français", file: "Ismail-Raqi-CV-fr.pdf" },
];

export function CvDropdown({ placement = "down" }: { placement?: "down" | "up" }) {
  const options = versions.map(version => ({
    language: version.language,
    label: version.label,
    href: existsSync(path.join(process.cwd(), "public", "cv", version.file))
      ? `/cv/${version.file}`
      : null,
  }));

  return <CvMenu options={options} placement={placement} />;
}
