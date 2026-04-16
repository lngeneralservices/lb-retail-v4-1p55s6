"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Tag, ArrowRight, Clock, BadgePercent } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface Deal {
  name: string;
  category: string;
  originalPrice: string;
  salePrice: string;
  savingsPercent: number;
  dateRange: string;
  imageUrl: string;
  tag?: string;
}

const deals: Deal[] = [
  {
    name: "Organic Strawberries",
    category: "Fresh Produce",
    originalPrice: "$5.99",
    salePrice: "$3.49",
    savingsPercent: 42,
    dateRange: "Valid Jul 14 – Jul 20",
    imageUrl: "https://loremflickr.com/480/360/strawberry,fresh",
    tag: "Staff Pick",
  },
  {
    name: "Artisan Sourdough Loaf",
    category: "Bakery",
    originalPrice: "$7.49",
    salePrice: "$4.99",
    savingsPercent: 33,
    dateRange: "Valid Jul 14 – Jul 20",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=480&q=80&auto=format&fit=crop",
    tag: "Fan Favorite",
  },
  {
    name: "Heirloom Tomatoes",
    category: "Fresh Produce",
    originalPrice: "$4.99",
    salePrice: "$2.99",
    savingsPercent: 40,
    dateRange: "Valid Jul 14 – Jul 20",
    imageUrl: "https://loremflickr.com/480/360/tomatoes,fresh",
  },
  {
    name: "Free-Range Chicken",
    category: "Butcher Shop",
    originalPrice: "$12.99",
    salePrice: "$8.99",
    savingsPercent: 31,
    dateRange: "Valid Jul 14 – Jul 20",
    imageUrl: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=480&q=80&auto=format&fit=crop",
    tag: "Limited Stock",
  },
  {
    name: "Local Honey (16oz)",
    category: "Specialty Goods",
    originalPrice: "$9.99",
    salePrice: "$6.49",
    savingsPercent: 35,
    dateRange: "Valid Jul 14 – Jul 20",
    imageUrl: "https://loremflickr.com/480/360/honey,jar",
  },
  {
    name: "Seasonal Berry Mix",
    category: "Fresh Produce",
    originalPrice: "$8.49",
    salePrice: "$5.49",
    savingsPercent: 35,
    dateRange: "Valid Jul 14 – Jul 20",
    imageUrl: "https://loremflickr.com/480/360/berries,market",
    tag: "New Arrival",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function WeeklyAd() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 bg-muted/40 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
        >
          <div className="space-y-3 max-w-xl">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-primary/10 text-primary font-body text-sm font-semibold px-3 py-1 rounded-full">
                <BadgePercent className="w-4 h-4" />
                Weekly Specials
              </span>
            </div>
            <h2 className="font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-foreground text-balance">
              This Week's Best Deals
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
              Fresh savings every week at {siteData.name}. Stock up on seasonal favorites before they're gone.
            </p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground shrink-0">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-body font-medium">Valid Jul 14 – Jul 20, 2025</span>
          </div>
        </motion.div>

        {/* Deal Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6"
        >
          {deals.map((deal, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.025, y: -4 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
              className="group bg-card rounded-[0.75rem] overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-48 overflow-hidden bg-muted">
                <img
                  src={deal.imageUrl}
                  alt={deal.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Savings Badge */}
                <div className="absolute top-3 left-3">
                  <span className="inline-flex items-center gap-1 bg-primary text-primary-foreground text-xs font-body font-bold px-2.5 py-1 rounded-full shadow">
                    <Tag className="w-3 h-3" />
                    Save {deal.savingsPercent}%
                  </span>
                </div>
                {/* Optional Tag */}
                {deal.tag && (
                  <div className="absolute top-3 right-3">
                    <Badge variant="secondary" className="text-xs font-semibold shadow">
                      {deal.tag}
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5 space-y-3">
                <div>
                  <p className="text-xs font-body font-semibold uppercase tracking-widest text-primary/80 mb-1">
                    {deal.category}
                  </p>
                  <h3 className="font-heading font-bold text-lg text-foreground leading-snug">
                    {deal.name}
                  </h3>
                </div>

                {/* Pricing */}
                <div className="flex items-baseline gap-3">
                  <span className="font-heading font-bold text-2xl text-primary">
                    {deal.salePrice}
                  </span>
                  <span className="text-muted-foreground text-sm line-through font-body">
                    {deal.originalPrice}
                  </span>
                </div>

                {/* Date Range */}
                <div className="flex items-center gap-1.5 text-muted-foreground/80">
                  <Clock className="w-3.5 h-3.5 shrink-0" />
                  <span className="text-xs font-body">{deal.dateRange}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="gap-2 rounded-[0.75rem] font-body font-semibold px-8"
          >
            View All Deals
            <ArrowRight className="w-4 h-4" />
          </Button>
          <p className="text-muted-foreground text-sm font-body">
            New specials added every Monday — visit us in{" "}
            <span className="font-semibold text-foreground">{siteData.address}</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}