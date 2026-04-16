"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Apple, Beef, Wine, Cookie, Croissant, ShoppingBag, Leaf, Package } from "lucide-react";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface CategoryGridProps {
  heading?: string;
  paragraph?: string;
}

const categories = [
  {
    name: "Fresh Produce",
    description: "Seasonal fruits & vegetables",
    icon: Apple,
    image: "https://loremflickr.com/600/400/produce,fresh",
    color: "from-green-600/70 to-green-900/80",
  },
  {
    name: "Bakery",
    description: "Freshly baked breads & pastries",
    icon: Croissant,
    image: "https://loremflickr.com/600/400/bakery,bread",
    color: "from-amber-600/70 to-amber-900/80",
  },
  {
    name: "Butcher & Deli",
    description: "Premium meats & charcuterie",
    icon: Beef,
    image: "https://loremflickr.com/600/400/butcher,meat",
    color: "from-red-700/70 to-red-900/80",
  },
  {
    name: "Organic & Natural",
    description: "Clean ingredients, better living",
    icon: Leaf,
    image: "https://loremflickr.com/600/400/organic,natural",
    color: "from-emerald-600/70 to-emerald-900/80",
  },
  {
    name: "Wine & Spirits",
    description: "Curated bottles for every occasion",
    icon: Wine,
    image: "https://loremflickr.com/600/400/wine,spirits",
    color: "from-purple-700/70 to-purple-900/80",
  },
  {
    name: "Snacks & Pantry",
    description: "Global flavors, everyday staples",
    icon: Cookie,
    image: "https://loremflickr.com/600/400/snacks,grocery",
    color: "from-orange-600/70 to-orange-900/80",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function CategoryGrid({
  heading = "Shop by Department",
  paragraph = `Everything you need under one roof — from farm-fresh produce and artisan breads to premium meats and curated wines. Explore every corner of ${siteData.name}.`,
}: CategoryGridProps) {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.3 });

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14 md:mb-18"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-4 border border-primary/20">
            <ShoppingBag className="w-4 h-4" aria-hidden="true" />
            Browse Our Departments
          </div>
          <h2
            className="font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mb-4"
            style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
          >
            {heading}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
            {paragraph}
          </p>
        </motion.div>

        {/* Category Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.name} variants={itemVariants}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="group relative rounded-[0.75rem] overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-shadow duration-300 h-60 md:h-64"
                >
                  {/* Background Image */}
                  <img
                    src={cat.image}
                    alt={`${cat.name} department at ${siteData.name}`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-t",
                      cat.color,
                      "transition-opacity duration-300 group-hover:opacity-95"
                    )}
                    aria-hidden="true"
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Icon Badge */}
                    <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-sm border border-white/30 rounded-[0.75rem] p-2.5 group-hover:bg-white/30 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-white" aria-hidden="true" />
                    </div>

                    {/* Text */}
                    <div>
                      <h3
                        className="font-heading font-bold text-white text-xl md:text-2xl tracking-tight mb-1 text-balance"
                        style={{ fontFamily: "var(--font-heading, 'Playfair Display', serif)" }}
                      >
                        {cat.name}
                      </h3>
                      <p className="text-white/80 text-sm leading-snug mb-3">
                        {cat.description}
                      </p>

                      {/* CTA Row */}
                      <div className="flex items-center gap-1.5 text-white font-medium text-sm group/link">
                        <span className="border-b border-white/50 group-hover/link:border-white transition-colors duration-200">
                          Shop {cat.name}
                        </span>
                        <motion.span
                          initial={{ x: 0 }}
                          whileHover={{ x: 4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 20 }}
                          aria-hidden="true"
                        >
                          →
                        </motion.span>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 60%)",
                    }}
                    aria-hidden="true"
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-center mt-12 md:mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-muted rounded-[0.75rem] px-6 py-4 border border-border">
            <Package className="w-5 h-5 text-primary flex-shrink-0" aria-hidden="true" />
            <p className="text-sm md:text-base text-foreground">
              <span className="font-semibold">New arrivals weekly.</span>{" "}
              <span className="text-muted-foreground">
                Visit us at {siteData.address} to see what&apos;s fresh today.
              </span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}