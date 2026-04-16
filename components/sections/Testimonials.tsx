"use client";

import { useRef, useState } from "react";
import { motion, useAnimationFrame } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface TestimonialsProps {
  heading?: string;
  paragraph?: string;
}

const fallbackReviews = [
  {
    name: "Sarah M.",
    testimonial:
      "Naperville Fresh Market has completely changed how I shop for groceries. The produce is always perfectly fresh, the staff is genuinely friendly, and I love discovering new local products every week. It feels like a real neighborhood gem.",
    rating: 5,
    date: "2024-03",
  },
  {
    name: "James K.",
    testimonial:
      "I've been coming here every Saturday for two years and the quality never wavers. The seasonal selections are outstanding — their heirloom tomatoes in summer are simply the best I've ever had. Highly recommend to anyone who cares about what they eat.",
    rating: 5,
    date: "2024-02",
  },
  {
    name: "Linda T.",
    testimonial:
      "The bakery section alone is worth the trip. Fresh bread every morning, incredible pastries, and the staff always knows what just came out of the oven. This place has soul.",
    rating: 5,
    date: "2024-04",
  },
  {
    name: "David R.",
    testimonial:
      "Finding a market that balances quality and community so well is rare. The weekly specials are genuinely great deals, and I love that they source locally as much as possible. My kids even get excited to come shopping here!",
    rating: 5,
    date: "2024-01",
  },
  {
    name: "Emily S.",
    testimonial:
      "Absolutely love this market. Every section feels curated with care — from the deli counter to the organic produce aisle. The staff is knowledgeable and always happy to make recommendations. A true treasure in Naperville.",
    rating: 5,
    date: "2024-03",
  },
  {
    name: "Carlos V.",
    testimonial:
      "The freshness here is unmatched. I've tried every grocery store in the area and nothing comes close. Prices are fair for the quality, and the atmosphere makes grocery shopping actually enjoyable. Wouldn't go anywhere else.",
    rating: 5,
    date: "2024-02",
  },
  {
    name: "Patricia H.",
    testimonial:
      "Such a welcoming place! The floral department is stunning and the prepared foods section saves me on busy weeknights. I always find something new and exciting every time I visit. Five stars without hesitation.",
    rating: 5,
    date: "2024-04",
  },
  {
    name: "Michael O.",
    testimonial:
      "This market feels like a community gathering place. Ran into three neighbors last time I was there! The cheese selection is extraordinary and the staff helped me pair everything perfectly for a dinner party. Incredible experience.",
    rating: 5,
    date: "2024-01",
  },
];

function StarRating({ rating, size = "sm" }: { rating: number; size?: "sm" | "lg" }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={cn(
            "fill-current",
            size === "lg" ? "w-6 h-6" : "w-4 h-4",
            i < rating ? "text-amber-400" : "text-muted-foreground/30"
          )}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review, className }: { review: (typeof fallbackReviews)[0]; className?: string }) {
  return (
    <Card
      className={cn(
        "min-w-[300px] max-w-[340px] flex-shrink-0 border border-border/60 bg-card shadow-sm",
        className
      )}
    >
      <CardContent className="p-6 flex flex-col gap-3">
        <Quote className="w-6 h-6 text-primary/40" aria-hidden="true" />
        <p className="text-sm text-foreground/80 leading-relaxed line-clamp-5 text-pretty">
          {review.testimonial}
        </p>
        <div className="mt-auto pt-3 border-t border-border/40 flex items-center justify-between">
          <div>
            <p className="font-semibold text-sm text-foreground">{review.name}</p>
            {review.date && (
              <p className="text-xs text-muted-foreground mt-0.5">
                {new Date(review.date + "-01").toLocaleDateString("en-US", { month: "long", year: "numeric" })}
              </p>
            )}
          </div>
          <StarRating rating={review.rating} />
        </div>
      </CardContent>
    </Card>
  );
}

function MarqueeRow({
  reviews,
  direction = 1,
}: {
  reviews: (typeof fallbackReviews);
  direction?: 1 | -1;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef(0);
  const [paused, setPaused] = useState(false);
  const speed = 0.45;

  useAnimationFrame((_, delta) => {
    if (paused || !trackRef.current) return;
    positionRef.current += (delta / 16) * speed * direction;
    const totalWidth = trackRef.current.scrollWidth / 2;
    if (direction === 1 && positionRef.current >= totalWidth) {
      positionRef.current -= totalWidth;
    }
    if (direction === -1 && positionRef.current <= -totalWidth) {
      positionRef.current += totalWidth;
    }
    trackRef.current.style.transform = `translateX(${-positionRef.current}px)`;
  });

  const doubled = [...reviews, ...reviews];

  return (
    <div
      className="overflow-hidden w-full"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div ref={trackRef} className="flex gap-4 w-max will-change-transform">
        {doubled.map((review, i) => (
          <ReviewCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials({
  heading = "What Our Neighbors Are Saying",
  paragraph = "Thousands of happy shoppers call Naperville Fresh Market their favorite place to find quality produce, artisan goods, and everyday essentials.",
}: TestimonialsProps) {
  const reviews =
    siteData.reviews && siteData.reviews.length >= 4 ? siteData.reviews : fallbackReviews;

  const row1 = reviews.slice(0, Math.ceil(reviews.length / 2));
  const row2 = reviews.slice(Math.ceil(reviews.length / 2));

  const [featured, setFeatured] = useState(0);

  const handlePrev = () => setFeatured((f) => (f - 1 + reviews.length) % reviews.length);
  const handleNext = () => setFeatured((f) => (f + 1) % reviews.length);

  return (
    <section className="py-20 md:py-28 bg-muted/40 overflow-hidden">
      {/* Header */}
      <div className="container max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center gap-4"
        >
          <Badge variant="outline" className="gap-2 border-primary/30 bg-primary/5 text-primary font-medium px-4 py-1.5">
            <Star className="w-3.5 h-3.5 fill-current text-amber-400" aria-hidden="true" />
            {siteData.socialProof}
          </Badge>
          <h2 className="font-heading font-bold text-3xl md:text-4xl lg:text-5xl tracking-tight text-balance text-foreground">
            {heading}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl text-pretty">
            {paragraph}
          </p>

          {/* Overall rating display */}
          <div className="flex items-center gap-4 mt-2 bg-card border border-border/60 rounded-[0.75rem] px-6 py-4 shadow-sm">
            <div className="text-center">
              <p className="font-heading font-bold text-4xl text-primary leading-none">{siteData.rating}</p>
              <p className="text-xs text-muted-foreground mt-1">Overall Rating</p>
            </div>
            <div className="h-12 w-px bg-border/60" aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <StarRating rating={5} size="lg" />
              <p className="text-sm text-muted-foreground">
                Based on {siteData.reviewCount > 0 ? `${siteData.reviewCount}+` : "many"} reviews
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Featured Quote */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="container max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 mb-12"
      >
        <div className="relative bg-primary/5 border border-primary/20 rounded-[0.75rem] p-8 md:p-12 text-center max-w-3xl mx-auto">
          <Quote className="w-10 h-10 text-primary/30 mx-auto mb-4" aria-hidden="true" />
          <motion.p
            key={featured}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="font-heading text-xl md:text-2xl text-foreground leading-relaxed italic text-pretty"
          >
            &ldquo;{reviews[featured].testimonial}&rdquo;
          </motion.p>
          <div className="flex flex-col items-center gap-2 mt-6">
            <StarRating rating={reviews[featured].rating} />
            <p className="font-semibold text-foreground">{reviews[featured].name}</p>
          </div>
          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-6">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-muted-foreground tabular-nums">
              {featured + 1} / {reviews.length}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-9 h-9 rounded-full border border-border bg-card hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors flex items-center justify-center"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col gap-4"
      >
        <MarqueeRow reviews={row1.length >= 2 ? row1 : reviews} direction={1} />
        <MarqueeRow reviews={row2.length >= 2 ? row2 : reviews} direction={-1} />
      </motion.div>
    </section>
  );
}