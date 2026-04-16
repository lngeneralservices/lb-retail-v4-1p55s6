"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Star, Leaf, ShoppingBag } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/lib/site-data";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const hasAreas = siteData.areas && siteData.areas.length > 0;

  return (
    <footer className="bg-foreground text-background">
      {/* Green accent bar */}
      <div className="h-1.5 w-full bg-primary" />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-[0.75rem] bg-primary flex items-center justify-center flex-shrink-0">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <span
                className="font-heading font-bold text-xl leading-tight text-background"
                style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
              >
                {siteData.name}
              </span>
            </div>
            <p className="text-background/65 text-sm leading-relaxed max-w-[240px]">
              Fresh from the farm to your table — your neighborhood market elevated to a premium experience in Naperville.
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
              <span className="text-background/60 text-xs ml-1">{siteData.socialProof}</span>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3
              className="font-heading font-bold text-background text-base tracking-wide"
              style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
            >
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/65 text-sm hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Service Areas Column */}
          {hasAreas && (
            <motion.div variants={fadeUp} className="flex flex-col gap-4">
              <h3
                className="font-heading font-bold text-background text-base tracking-wide"
                style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
              >
                <Link href="/areas" className="hover:text-primary transition-colors duration-200">
                  Service Areas
                </Link>
              </h3>
              <ul className="flex flex-col gap-2.5">
                {siteData.areas.slice(0, 6).map((area) => (
                  <li key={area.slug}>
                    <Link
                      href={`/areas/${area.slug}`}
                      className="text-background/65 text-sm hover:text-primary transition-colors duration-200 hover:underline underline-offset-4"
                    >
                      {area.city}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Contact Column */}
          <motion.div variants={fadeUp} className="flex flex-col gap-4">
            <h3
              className="font-heading font-bold text-background text-base tracking-wide"
              style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
            >
              Visit Us
            </h3>
            <ul className="flex flex-col gap-3.5">
              <li>
                <a
                  href={`tel:${siteData.phone}`}
                  className="flex items-center gap-2.5 text-background/65 text-sm hover:text-primary transition-colors duration-200 group"
                >
                  <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{siteData.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-center gap-2.5 text-background/65 text-sm hover:text-primary transition-colors duration-200 group"
                >
                  <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="break-all">{siteData.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-background/65 text-sm">
                <MapPin className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>{siteData.address}</span>
              </li>
              <li className="flex items-start gap-2.5 text-background/65 text-sm">
                <ShoppingBag className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Mon–Sat: 7am–9pm · Sun: 8am–7pm</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        <Separator className="my-10 bg-background/10" />

        {/* Bottom Row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-background/45 text-xs text-center sm:text-left">
            © {currentYear} {siteData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5 text-background/45 text-xs border border-background/15 rounded-full px-3 py-1">
              <Star className="w-3 h-3 fill-primary text-primary" />
              {siteData.rating}★ Rated
            </span>
            <span className="inline-flex items-center gap-1.5 text-background/45 text-xs border border-background/15 rounded-full px-3 py-1">
              <Leaf className="w-3 h-3 text-primary" />
              Locally Owned
            </span>
            <span className="inline-flex items-center gap-1.5 text-background/45 text-xs border border-background/15 rounded-full px-3 py-1">
              <ShoppingBag className="w-3 h-3 text-primary" />
              Fresh Daily
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}