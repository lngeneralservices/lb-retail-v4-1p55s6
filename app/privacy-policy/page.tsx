import { siteData } from "@/lib/site-data";

export default function PrivacyPolicy() {
  return (
    <main className="container mx-auto py-24 px-4 max-w-3xl">
      <h1 className="font-heading text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground leading-relaxed">
        {siteData.name} respects your privacy. We only use information you provide through our contact form to respond to your inquiry.
      </p>
    </main>
  );
}
