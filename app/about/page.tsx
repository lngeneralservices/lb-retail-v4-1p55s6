import Nav from "@/components/sections/Nav";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: `About | ${siteData.name}`,
  description: `Learn more about ${siteData.name} — our story, values, and team.`,
  alternates: { canonical: `${siteData.seo.siteUrl}/about` },
  openGraph: {
    title: `About | ${siteData.name}`,
    description: `Learn more about ${siteData.name}.`,
    url: `${siteData.seo.siteUrl}/about`,
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="container mx-auto py-24 md:py-32 px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-balance">About {siteData.name}</h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {siteData.name} is proud to serve our community with quality and care.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
