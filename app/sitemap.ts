import type { MetadataRoute } from "next";
import { projects } from "@/data/portfolio";
import { absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl() },
    ...projects.map(project => ({ url: absoluteUrl(`/work/${project.slug}`) })),
  ];
}
