import Nav from "@/components/sections/Nav";
import StoreInfo from "@/components/sections/StoreInfo";
import Footer from "@/components/sections/Footer";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: `Contact | ${siteData.name}`,
  description: `Get in touch with ${siteData.name} — call, email, or send us a message.`,
  alternates: { canonical: `${siteData.seo.siteUrl}/contact` },
  openGraph: {
    title: `Contact | ${siteData.name}`,
    description: `Get in touch with ${siteData.name}.`,
    url: `${siteData.seo.siteUrl}/contact`,
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="container mx-auto py-24 md:py-32 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight">Contact Us</h1>
            <p className="mt-6 text-lg text-muted-foreground">We'd love to hear from you.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              {siteData.phone && (
                <a href={`tel:${siteData.phone}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold">Call {siteData.phoneDisplay}</a>
              )}
              {siteData.email && (
                <a href={`mailto:${siteData.email}`} className="inline-flex items-center justify-center gap-2 px-6 py-3 border rounded-md font-semibold">Email Us</a>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
