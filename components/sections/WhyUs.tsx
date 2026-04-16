"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Leaf, Heart, Award, ShieldCheck, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface WhyUsProps {
  heading?: string;
  paragraph?: string;
}

const benefits = [
  {
    icon: Leaf,
    title: "Farm-Fresh Daily",
    description:
      "Every morning we receive deliveries straight from local farms and trusted growers, ensuring your produce is as fresh as it gets — never sitting on a shelf overnight.",
    accent: "bg-emerald-50 text-emerald-700 border-emerald-200",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: Heart,
    title: "Family-Owned & Operated",
    description:
      "Three generations of the same family have poured love into this market since 1987. When you shop here, you're supporting a local family — not a corporate chain.",
    accent: "bg-rose-50 text-rose-700 border-rose-200",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Award,
    title: "Premium Quality Standards",
    description:
      "We hand-select every product on our shelves. If it doesn't meet our standards, it simply doesn't make it in. Quality isn't a buzzword here — it's a promise.",
    accent: "bg-amber-50 text-amber-700 border-amber-200",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    icon: ShieldCheck,
    title: "Halal & Organic Certified",
    description:
      "Our full butcher counter is Halal certified, and we carry an extensive selection of USDA Organic items across every department — clearly labeled for your peace of mind.",
    accent: "bg-sky-50 text-sky-700 border-sky-200",
    iconBg: "bg-sky-100",
    iconColor: "text-sky-600",
  },
  {
    icon: Users,
    title: "Community Rooted",
    description:
      "We partner with Naperville schools, local charities, and neighborhood events year-round. Shopping here keeps your dollars circulating right here in our community.",
    accent: "bg-violet-50 text-violet-700 border-violet-200",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-600",
  },
  {
    icon: Clock,
    title: "Open 7 Days a Week",
    description:
      "From early morning to late evening, we're here for you every day of the week — because fresh groceries shouldn't wait for convenient business hours.",
    accent: "bg-orange-50 text-orange-700 border-orange-200",
    iconBg: "bg-orange-100",
    iconColor: "text-orange-600",
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

export default function WhyUs({
  heading = "Why Naperville Shops With Us",
  paragraph = "We believe a great neighborhood market is more than a place to buy groceries — it's a gathering point for the community, a showcase for local growers, and a daily ritual that should feel like a joy, not a chore.",
}: WhyUsProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true, amount: 0.4 });

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-32 bg-background relative overflow-hidden"
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-primary/5 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-16 w-[400px] h-[400px] rounded-full bg-accent/10 blur-3xl"
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        {/* Section heading */}
        <div ref={headingRef} className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              variant="outline"
              className="mb-4 gap-1.5 border-primary/30 bg-primary/5 text-primary font-body text-sm px-3 py-1"
            >
              <Leaf className="w-3.5 h-3.5" />
              The Fresh Market Difference
            </Badge>
          </motion.div>

          <motion.h2
            className="font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
          >
            {heading}
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty"
            initial={{ opacity: 0, y: 18 }}
            animate={isHeadingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
          >
            {paragraph}
          </motion.p>
        </div>

        {/* Benefits grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div key={benefit.title} variants={itemVariants}>
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="h-full"
                >
                  <Card className="h-full border border-border/60 bg-card shadow-sm hover:shadow-md transition-shadow duration-300 rounded-[0.75rem] overflow-hidden group">
                    <CardContent className="p-6 flex flex-col gap-4">
                      {/* Icon */}
                      <div
                        className={cn(
                          "w-12 h-12 rounded-[0.75rem] flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110",
                          benefit.iconBg
                        )}
                      >
                        <Icon
                          className={cn("w-6 h-6", benefit.iconColor)}
                          aria-hidden="true"
                        />
                      </div>

                      {/* Text */}
                      <div className="flex flex-col gap-2">
                        <h3 className="font-heading font-bold text-lg text-foreground tracking-tight">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                          {benefit.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          className="mt-16 pt-10 border-t border-border/50 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {[
            { value: "35+", label: "Years Serving Naperville" },
            { value: siteData.socialProof, label: "From Happy Shoppers" },
            { value: "200+", label: "Local & Organic Products" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1">
              <span className="font-heading font-bold text-2xl md:text-3xl text-primary">
                {stat.value}
              </span>
              <span className="text-muted-foreground text-sm font-body">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}