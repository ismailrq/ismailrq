import type { Metadata, Viewport } from "next";
import { profile } from "@/data/portfolio";
import "./globals.css";

export const metadata: Metadata = {
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
      <body>{children}</body>
    </html>
  );
}
