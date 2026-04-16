import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: `Service Areas | ${siteData.name}`,
  description: `Cities and communities served by ${siteData.name}.`,
  alternates: { canonical: `${siteData.seo.siteUrl}/areas` },
  openGraph: {
    title: `Service Areas | ${siteData.name}`,
    description: `Cities and communities served by ${siteData.name}.`,
    url: `${siteData.seo.siteUrl}/areas`,
    type: 'website',
  },
};

export default function AreasIndexPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="container mx-auto py-24 md:py-32 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">Service Areas</h1>
            <p className="mt-6 text-lg text-muted-foreground">Communities we proudly serve.</p>
            <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {siteData.areas.map((a) => (
                <Link key={a.slug} href={`/areas/${a.slug}`} className="p-4 border rounded-lg bg-card hover:border-primary transition-colors text-center">
                  <span className="font-semibold">{a.city}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
