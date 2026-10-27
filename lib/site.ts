import type { Metadata } from "next";

export const siteUrl = "https://ismailrq.is-a.dev";
export const siteName = "Ismail Raqi Portfolio";

export function absoluteUrl(pathname = "/") {
  return new URL(pathname, siteUrl).toString();
}

export function pageMetadata({
  title,
  description,
  pathname,
}: {
  title: string;
  description: string;
  pathname: string;
}): Metadata {
  const url = absoluteUrl(pathname);

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url, siteName, type: "website" },
    twitter: { card: "summary", title, description },
  };
}
