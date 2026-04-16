"use client";

import Link from "next/link";
import Image from "next/image";
import { MapPin, Clock, Star, ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/site-data";

interface HeroProps {
  heading?: string;
  subheading?: string;
  paragraph?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  trustBadge?: string;
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero({
  heading = "Fresh From Farm\nTo Your Table",
  subheading = "Naperville's Neighborhood Market",
  paragraph = "Discover the finest seasonal produce, artisan breads, local dairy, and specialty goods — all curated with care for your family's table. Open daily in the heart of Naperville.",
  ctaPrimary = "See This Week's Deals",
  ctaSecondary = "Get Directions",
}: HeroProps) {

  return (
    <section
      className="relative min-h-[92vh] flex items-center overflow-hidden bg-background"
    >
      {/* Parallax Hero Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 scale-110">
          <Image
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1800&q=80&auto=format&fit=crop"
            alt="Colorful fresh produce at Naperville Fresh Market"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </div>
        <div
          style={{ opacity: 0.35 }}
          className="absolute inset-0 bg-foreground"
          aria-hidden="true"
        />
        {/* Gradient fade to bottom */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80"
          aria-hidden="true"
        />
      </div>

      {/* Decorative accent circle */}
      <div
        className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -left-16 w-72 h-72 rounded-full bg-accent/20 blur-2xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Main Copy */}
          <div
            className="lg:col-span-7 xl:col-span-6"
          >
            {/* Eyebrow */}
            <div>
              <Badge
                variant="outline"
                className="mb-5 gap-2 border-primary/50 bg-primary/10 text-primary-foreground backdrop-blur-sm px-3 py-1.5 text-sm font-medium tracking-widest uppercase"
              >
                <Sparkles className="w-3.5 h-3.5 text-primary" />
                {subheading}
              </Badge>
            </div>

            {/* H1 Headline */}
            <h1
              className="font-heading font-bold tracking-tight text-balance text-white"
              style={{ fontSize: "clamp(2.5rem, 5.5vw, 4.5rem)", lineHeight: 1.1 }}
            >
              {heading.split("\n").map((line, i) => (
                <span key={i} className={i === 1 ? "text-primary block" : "block"}>
                  {line}
                </span>
              ))}
            </h1>

            {/* Paragraph */}
            <p
              className="mt-6 text-white/80 text-base md:text-lg leading-relaxed text-pretty max-w-xl"
            >
              {paragraph}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                size="lg"
                className="gap-2 font-semibold text-base shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow"
                asChild
              >
                <Link href="#weekly-ad">
                  <ShoppingBag className="w-4 h-4" />
                  {ctaPrimary}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 font-semibold text-base border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 hover:border-white/60"
                asChild
              >
                <Link href="#store-info">
                  <MapPin className="w-4 h-4" />
                  {ctaSecondary}
                </Link>
              </Button>
            </div>

            {/* Trust Bar */}
            <div
              className="mt-10 flex flex-wrap items-center gap-5"
            >
              {/* Rating */}
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[0.75rem] px-4 py-2.5">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-white font-semibold text-sm">{siteData.rating} Stars</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 text-white/75 text-sm">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span>{siteData.address}</span>
              </div>

              {/* Open Today */}
              <div className="flex items-center gap-2 text-white/75 text-sm">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>
                  Open Today <strong className="text-white">7am – 9pm</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right — Floating Image Cards */}
          <div
            className="hidden lg:flex lg:col-span-5 xl:col-span-6 relative h-[480px] items-center justify-end"
          >
            {/* Card 1 — Large produce */}
            <div

              className="absolute top-0 right-0 w-60 h-64 rounded-[0.75rem] overflow-hidden shadow-2xl border-2 border-white/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=480&q=80&auto=format&fit=crop"
                alt="Fresh colorful vegetables"
                fill
                className="object-cover"
                sizes="240px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-sm font-semibold font-heading">Fresh Produce</span>
              </div>
            </div>

            {/* Card 2 — Bakery */}
            <div

              className="absolute bottom-0 right-10 w-52 h-56 rounded-[0.75rem] overflow-hidden shadow-2xl border-2 border-white/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?w=420&q=80&auto=format&fit=crop"
                alt="Freshly baked breads and pastries"
                fill
                className="object-cover"
                sizes="208px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-sm font-semibold font-heading">Artisan Bakery</span>
              </div>
            </div>

            {/* Card 3 — Market stall */}
            <div

              className="absolute top-16 right-52 w-44 h-48 rounded-[0.75rem] overflow-hidden shadow-xl border-2 border-white/20"
            >
              <Image
                src="https://loremflickr.com/352/384/market,fresh"
                alt="Market stall with seasonal goods"
                fill
                className="object-cover"
                sizes="176px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" aria-hidden="true" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-sm font-semibold font-heading">Seasonal Picks</span>
              </div>
            </div>

            {/* Floating stat chip */}
            <div
              className="absolute top-4 left-0 bg-card/90 backdrop-blur-sm border border-border rounded-[0.75rem] px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center shrink-0">
                <ArrowRight className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground leading-none mb-0.5">Weekly Deals</p>
                <p className="text-sm font-bold text-foreground font-heading">New Every Monday</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll nudge */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"

      >
        <div className="flex flex-col items-center gap-1.5">
          <span className="text-white/50 text-xs tracking-widest uppercase">Explore</span>
          <div

            className="w-5 h-5 text-white/40"
          >
            <svg viewBox="0 0 20 20" fill="none" className="w-full h-full" aria-hidden="true">
              <path d="M5 7.5l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}