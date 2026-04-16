"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ShoppingCart, Tag, Sparkles, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface FeaturedProductsProps {
  heading?: string;
  paragraph?: string;
}

const products = [
  {
    id: 1,
    name: "Organic Heirloom Tomatoes",
    description: "Sun-ripened, bursting with flavor. Locally sourced from Illinois farms.",
    price: "$4.99",
    unit: "/ lb",
    badge: "Popular",
    badgeVariant: "default" as const,
    image: "https://images.unsplash.com/photo-1488459716781-31db52582fe9?w=500&q=80&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Artisan Sourdough Loaf",
    description: "Stone-baked daily in our in-house bakery. Crispy crust, pillowy interior.",
    price: "$7.49",
    unit: "/ loaf",
    badge: "New",
    badgeVariant: "secondary" as const,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=500&q=80&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Grass-Fed Ground Beef",
    description: "Premium 85/15 blend. Humanely raised, no hormones or antibiotics.",
    price: "$8.99",
    unit: "/ lb",
    badge: "Sale",
    badgeVariant: "destructive" as const,
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=500&q=80&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Mixed Berry Medley",
    description: "Vibrant blend of strawberries, blueberries & raspberries. Antioxidant-rich.",
    price: "$5.99",
    unit: "/ pint",
    badge: "Popular",
    badgeVariant: "default" as const,
    image: "https://loremflickr.com/500/500/berries,fresh",
  },
  {
    id: 5,
    name: "Cold-Pressed Juice Trio",
    description: "Three daily-pressed blends: Green Glow, Citrus Surge & Beet Boost.",
    price: "$12.99",
    unit: "/ set",
    badge: "New",
    badgeVariant: "secondary" as const,
    image: "https://loremflickr.com/500/500/juice,fresh",
  },
  {
    id: 6,
    name: "Farm Fresh Egg Dozen",
    description: "Free-range, pasture-raised eggs from local Naperville co-op farms.",
    price: "$6.49",
    unit: "/ dozen",
    badge: "Sale",
    badgeVariant: "destructive" as const,
    image: "https://loremflickr.com/500/500/eggs,farm",
  },
];

const badgeStyles: Record<string, string> = {
  Popular: "bg-primary text-primary-foreground",
  New: "bg-accent text-accent-foreground",
  Sale: "bg-destructive text-destructive-foreground",
};

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

export default function FeaturedProducts({
  heading = "Market Favorites",
  paragraph = "Hand-picked by our team each week — the freshest finds, bestsellers, and new arrivals your family will love.",
}: FeaturedProductsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 bg-background overflow-hidden"
      aria-labelledby="featured-products-heading"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headingRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary font-body text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            This Week&apos;s Picks
          </div>
          <h2
            id="featured-products-heading"
            className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance mb-4"
          >
            {heading}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty">
            {paragraph}
          </p>
        </motion.div>

        {/* Mobile: Horizontal Scroll Carousel */}
        <div className="md:hidden -mx-4 px-4">
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
            {products.map((product) => (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[260px]"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Animated Grid */}
        <motion.div
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {products.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Row */}
        <motion.div
          className="mt-12 md:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground text-sm font-body">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span>New arrivals every Tuesday & Friday</span>
          </div>
          <Button
            size="lg"
            className="gap-2 font-body font-semibold rounded-[0.75rem]"
          >
            <ShoppingCart className="w-4 h-4" />
            Shop All Products
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: (typeof products)[0] }) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      className="h-full"
    >
      <Card className="h-full overflow-hidden border border-border/60 shadow-sm hover:shadow-lg transition-shadow duration-300 rounded-[0.75rem] bg-card group cursor-pointer">
        {/* Image */}
        <div className="relative overflow-hidden aspect-[4/3]">
          <motion.img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.07 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            loading="lazy"
          />
          {/* Badge overlay */}
          <div className="absolute top-3 left-3">
            <span
              className={cn(
                "inline-flex items-center gap-1 text-xs font-body font-bold px-2.5 py-1 rounded-full shadow-sm",
                badgeStyles[product.badge]
              )}
            >
              <Tag className="w-3 h-3" aria-hidden="true" />
              {product.badge}
            </span>
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-4 pb-2">
          <h3 className="font-heading font-bold text-base md:text-lg text-foreground leading-snug mb-1 text-balance">
            {product.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed text-pretty line-clamp-2">
            {product.description}
          </p>
        </CardContent>

        {/* Footer */}
        <CardFooter className="px-4 pb-4 pt-2 flex items-center justify-between">
          <div className="flex items-baseline gap-0.5">
            <span className="font-heading font-bold text-xl text-primary">
              {product.price}
            </span>
            <span className="text-muted-foreground text-xs font-body ml-0.5">
              {product.unit}
            </span>
          </div>
          <Button
            size="sm"
            variant="outline"
            className="gap-1.5 rounded-[0.75rem] border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors font-body font-semibold"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            Add
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}