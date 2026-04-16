"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Sparkles, CheckCircle2, ArrowRight, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

interface NewsletterSignupProps {
  heading?: string;
  paragraph?: string;
}

export default function NewsletterSignup({
  heading = "Get 10% Off Your First Visit",
  paragraph = "Subscribe for weekly deals, seasonal produce highlights, and exclusive member-only specials delivered fresh to your inbox.",
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setError("");
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="py-16 md:py-20 bg-muted/50 overflow-hidden relative">
      {/* Decorative background elements */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 relative">
        <div className="max-w-2xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Badge
              variant="outline"
              className="gap-1.5 border-primary/30 bg-primary/5 text-primary mb-5 px-3 py-1 text-sm"
            >
              <Leaf className="w-3.5 h-3.5" />
              Fresh Market Newsletter
            </Badge>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="font-heading font-bold tracking-tight text-foreground text-balance text-3xl md:text-4xl lg:text-5xl mb-4"
          >
            {heading}
          </motion.h2>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.14 }}
            className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty mb-8"
          >
            {paragraph}
          </motion.p>

          {/* Form / Success */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.92 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col items-center gap-4 bg-card border border-border rounded-xl px-8 py-10 shadow-sm"
                >
                  <motion.div
                    initial={{ scale: 0, rotate: -20 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 18,
                      delay: 0.1,
                    }}
                    className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
                  >
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </motion.div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground text-xl mb-1">
                      You&apos;re on the list!
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Welcome to the {siteData.name} family. Check your inbox
                      for your 10% off coupon and weekly fresh picks.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Sparkles className="w-3.5 h-3.5 text-primary" />
                    <span>Exclusive deals every Wednesday</span>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  noValidate
                  className="flex flex-col sm:flex-row gap-3 items-stretch"
                >
                  <div className="relative flex-1">
                    <Mail
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none"
                      aria-hidden="true"
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (error) setError("");
                      }}
                      placeholder="Enter your email address"
                      required
                      aria-label="Email address"
                      className={cn(
                        "w-full h-12 pl-11 pr-4 rounded-[0.75rem] border bg-background text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all duration-200",
                        error ? "border-destructive focus:ring-destructive/30" : "border-border"
                      )}
                    />
                    {error && (
                      <p className="absolute -bottom-5 left-0 text-xs text-destructive text-left">
                        {error}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={loading}
                    className="h-12 px-7 rounded-[0.75rem] font-semibold shrink-0 gap-2 sm:w-auto w-full"
                  >
                    {loading ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                        Subscribing…
                      </>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Trust line */}
          {!submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-xs text-muted-foreground mt-6"
            >
              No spam, ever. Unsubscribe anytime. Join{" "}
              <span className="text-foreground font-medium">2,400+</span> Naperville neighbors already subscribed.
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}