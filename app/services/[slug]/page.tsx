import { siteData } from "@/lib/site-data";
import Nav from "@/components/sections/Nav";
import Footer from "@/components/sections/Footer";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return siteData.services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = siteData.services.find((s) => s.slug === slug);
  if (!service) return {};
  const base = siteData.seo.siteUrl;
  const url = `${base}/services/${slug}`;
  return {
    title: `${service.title} | ${siteData.name}`,
    description: service.desc || `${service.title} from ${siteData.name}.`,
    alternates: { canonical: url },
    openGraph: {
      title: `${service.title} | ${siteData.name}`,
      description: service.desc || `${service.title} from ${siteData.name}.`,
      url,
      type: 'website',
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = siteData.services.find((s) => s.slug === slug);
  if (!service) return notFound();

  return (
    <>
      <Nav />
      <main className="container mx-auto py-24 md:py-32 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance">{service.title}</h1>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">{service.desc}</p>
          <div className="mt-10 p-8 border rounded-lg bg-card">
            <p className="text-sm text-muted-foreground mb-3">Get a free quote</p>
            <h2 className="font-heading text-2xl font-semibold mb-4">Ready to start?</h2>
            <a href={`tel:${siteData.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-colors">
              Call {siteData.phoneDisplay}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
