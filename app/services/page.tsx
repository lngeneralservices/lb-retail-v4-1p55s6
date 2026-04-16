import Nav from "@/components/sections/Nav";
import CategoryGrid from "@/components/sections/CategoryGrid";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: `Services | ${siteData.name}`,
  description: `All services offered by ${siteData.name}.`,
  alternates: { canonical: `${siteData.seo.siteUrl}/services` },
  openGraph: {
    title: `Services | ${siteData.name}`,
    description: `All services offered by ${siteData.name}.`,
    url: `${siteData.seo.siteUrl}/services`,
    type: 'website',
  },
};

export default function ServicesIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <CategoryGrid />
      </main>
      <Footer />
    </>
  );
}
