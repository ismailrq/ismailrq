import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import { absoluteUrl, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Ismail Raqi — Software Engineer",
  description: profile.about,
  applicationName: "Ismail Raqi Portfolio",
  authors: [{ name: "Ismail Raqi" }],
  keywords: [
    "software engineer",
    "product engineering",
    "application architecture",
    "systems integration",
    "technical leadership",
  ],
  openGraph: {
    title: "Ismail Raqi — Software Engineer",
    description: profile.about,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Ismail Raqi — Software Engineer",
    description: profile.about,
  },
};

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#292C32",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="describedby" href={absoluteUrl("/llms.txt")} type="text/plain" />
      </head>
      <body>{children}</body>
    </html>
  );
}
