import type { Project } from "./portfolio";

type ProjectPresentation = {
  category: string;
  highlights: string[];
  period: string;
  groups: { label: string; technologies: string[] }[];
};

const presentations: Record<string, ProjectPresentation> = {
  mediahunter: {
    category: "Backend & cloud",
    highlights: ["FastAPI", "Celery", "AWS"],
    period: "Jan – Sep 2025",
    groups: [
      { label: "Application", technologies: ["Python", "FastAPI", "Pydantic", "Gunicorn", "Uvicorn"] },
      { label: "Media processing", technologies: ["yt-dlp", "FFmpeg", "Celery"] },
      { label: "Data & delivery", technologies: ["Redis", "WebSockets", "Amazon S3", "aiobotocore", "ElastiCache"] },
      { label: "Security", technologies: ["HMAC", "TOTP/PyOTP", "AWS Secrets Manager"] },
      { label: "Infrastructure", technologies: ["Docker", "Docker Compose", "AWS EC2", "AWS Load Balancing", "AWS Auto Scaling", "Nginx", "GitHub Container Registry"] },
      { label: "Monitoring & development", technologies: ["Prometheus", "Flower", "LocalStack"] },
    ],
  },
  "nt-zen": {
    category: "Network analysis",
    highlights: ["Python", "NetworkX", "SQLite"],
    period: "Sep 2025 – Jan 2026",
    groups: [
      { label: "Language & data", technologies: ["Python", "SQL", "SQLite", "JSON"] },
      { label: "Analysis & visualization", technologies: ["NetworkX", "Matplotlib"] },
      { label: "Verification", technologies: ["unittest"] },
    ],
  },
  "location-based-ar": {
    category: "Mobile & augmented reality",
    highlights: ["Flutter", "Unity", "ARCore"],
    period: "Sep 2022 – Aug 2026",
    groups: [
      { label: "Mobile", technologies: ["Dart", "Flutter 3.x", "BLoC"] },
      { label: "AR & location", technologies: ["Unity", "C#", "ARCore", "ARCore Extensions", "Geospatial API", "Geolocation", "Google Maps API"] },
      { label: "Storage & services", technologies: ["Hive", "Firebase Remote Config", "Firebase Cloud Messaging"] },
      { label: "Monitoring", technologies: ["Sentry"] },
    ],
  },
  "homear-backend": {
    category: "Backend systems",
    highlights: ["Node.js", "PostgreSQL", "Redis"],
    period: "Aug 2023 – Jan 2024",
    groups: [
      { label: "Application", technologies: ["TypeScript", "Node.js", "Express", "REST APIs"] },
      { label: "Data", technologies: ["PostgreSQL", "SQL views and triggers", "JSON/JSONB"] },
      { label: "Messaging", technologies: ["Redis", "Socket.IO"] },
      { label: "Location", technologies: ["GeoJSON", "Google Places API", "Distance Matrix API"] },
      { label: "Authentication & email", technologies: ["JWT", "Nodemailer", "SMTP"] },
      { label: "Deployment & tooling", technologies: ["Docker", "Docker Compose", "Postman"] },
    ],
  },
};

export function getProjectPresentation(project: Project) {
  const presentation = presentations[project.slug] ?? {
    category: project.language,
    highlights: project.technologies.slice(0, 3),
    period: project.label,
    groups: [],
  };
  const groups = presentation.groups
    .map(group => ({
      ...group,
      technologies: group.technologies.filter(technology => project.technologies.includes(technology)),
    }))
    .filter(group => group.technologies.length > 0);
  const grouped = new Set(groups.flatMap(group => group.technologies));
  const remaining = project.technologies.filter(technology => !grouped.has(technology));

  if (remaining.length > 0) groups.push({ label: "Other technologies", technologies: remaining });

  return { ...presentation, groups };
}
