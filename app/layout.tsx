import type { Metadata } from "next";
import "./globals.css";
import { siteData } from "@/lib/site-data";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: siteData.seo.title,
  description: siteData.seo.description,
  metadataBase: new URL(siteData.seo.siteUrl),
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    url: siteData.seo.siteUrl,
    siteName: siteData.name,
    images: [{ url: siteData.seo.ogImage, width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
    images: [siteData.seo.ogImage],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts are injected dynamically based on brief */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {siteData.fonts && (
          <link
            rel="stylesheet"
            href={`https://fonts.googleapis.com/css2?${siteData.fonts.googleFontsParam}&display=swap`}
          />
        )}
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-heading: '${siteData.fonts.heading}', serif;
            --font-body: '${siteData.fonts.body}', sans-serif;
          }
        ` }} />
        <StructuredData />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
