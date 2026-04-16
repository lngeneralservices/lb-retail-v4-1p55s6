import { siteData } from "@/lib/site-data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteData.areas.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = siteData.areas.find((a) => a.slug === slug);
  if (!area) return {};
  const base = siteData.seo.siteUrl;
  const url = `${base}/areas/${slug}`;
  return {
    title: `${siteData.name} in ${area.city}`,
    description: `${siteData.name} proudly serves ${area.city}.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${siteData.name} in ${area.city}`,
      description: `${siteData.name} proudly serves ${area.city}.`,
      url,
      type: 'website',
    },
  };
}

export default async function AreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const area = siteData.areas.find((a) => a.slug === slug);
  if (!area) return notFound();

  return (
    <>
      <Nav />
      <main className="container mx-auto py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">Serving {area.city}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            {siteData.name} proudly serves {area.city} with quality.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
