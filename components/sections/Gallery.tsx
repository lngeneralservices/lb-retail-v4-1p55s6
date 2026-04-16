"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Camera, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface GalleryProps {
  heading?: string;
  paragraph?: string;
}

const galleryImages = [
  {
    src: "https://loremflickr.com/600/700/produce,fresh",
    alt: "Fresh produce display",
    caption: "Farm-Fresh Produce",
    span: "row-span-2",
  },
  {
    src: "https://loremflickr.com/600/400/grocery,market",
    alt: "Market interior",
    caption: "Our Market Floor",
    span: "",
  },
  {
    src: "https://loremflickr.com/600/400/bakery,bread",
    alt: "Artisan baked goods",
    caption: "Artisan Bakery",
    span: "",
  },
  {
    src: "https://loremflickr.com/600/700/fruit,fresh",
    alt: "Colorful fresh fruits",
    caption: "Seasonal Fruits",
    span: "row-span-2",
  },
  {
    src: "https://loremflickr.com/600/400/vegetables,market",
    alt: "Colorful vegetables",
    caption: "Local Vegetables",
    span: "",
  },
  {
    src: "https://loremflickr.com/600/400/cheese,deli",
    alt: "Deli and cheese selection",
    caption: "Specialty Deli",
    span: "",
  },
  {
    src: "https://loremflickr.com/600/400/flowers,market",
    alt: "Fresh flowers",
    caption: "Fresh Florals",
    span: "",
  },
  {
    src: "https://loremflickr.com/600/700/organic,grocery",
    alt: "Organic grocery section",
    caption: "Organic Selection",
    span: "row-span-2",
  },
  {
    src: "https://loremflickr.com/600/400/herbs,fresh",
    alt: "Fresh herbs",
    caption: "Herbs & Spices",
    span: "",
  },
  {
    src: "https://loremflickr.com/600/400/seafood,market",
    alt: "Fresh seafood counter",
    caption: "Fresh Seafood",
    span: "",
  },
];

export default function GallerySection({ heading, paragraph }: GalleryProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.07 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 bg-muted/30 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14 md:mb-20 max-w-2xl mx-auto"
        >
          <Badge
            variant="outline"
            className="gap-1.5 border-primary/30 bg-primary/5 text-primary mb-4 px-3 py-1"
          >
            <Camera className="w-3.5 h-3.5" />
            Inside Our Market
          </Badge>
          <h2 className="font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mb-4">
            {heading || "A Feast for the Eyes"}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
            {paragraph ||
              `Step inside ${siteData.name} and discover a world of color, flavor, and freshness. Every corner is curated with care — from sun-ripened produce to artisan delights.`}
          </p>
        </motion.div>

        {/* Masonry-style asymmetric grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[200px] md:auto-rows-[220px] gap-3 md:gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={cn(
                "relative overflow-hidden rounded-[0.75rem] group cursor-pointer",
                image.span,
                index === 0 && "col-span-1 md:col-span-1",
                index === 3 && "col-span-1 md:col-span-1",
                index === 7 && "col-span-1 md:col-span-1",
                index === 1 && "col-span-1",
                index === 6 && "col-span-2 md:col-span-1"
              )}
            >
              {/* Image */}
              <motion.img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.07 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-colors duration-400 flex items-end p-4"
                aria-hidden="true"
              >
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  className="opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <span className="font-heading font-semibold text-white text-sm md:text-base tracking-wide drop-shadow-md flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-primary-foreground/80" />
                    {image.caption}
                  </span>
                </motion.div>
              </motion.div>

              {/* Subtle border */}
              <div
                className="absolute inset-0 rounded-[0.75rem] ring-1 ring-border/40 pointer-events-none"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-muted-foreground text-sm mt-10 md:mt-14"
        >
          Visit us at{" "}
          <span className="font-semibold text-foreground">{siteData.address}</span>{" "}
          and experience the difference fresh makes.
        </motion.p>
      </div>
    </section>
  );
}