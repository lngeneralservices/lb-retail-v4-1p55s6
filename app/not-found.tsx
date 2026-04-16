import Link from "next/link";
import { siteData } from "@/lib/site-data";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="font-heading text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg text-muted-foreground">This page doesn't exist.</p>
      <Link href="/" className="mt-8 text-primary underline">Return to {siteData.name}</Link>
    </main>
  );
}
