"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Car, Accessibility, ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { siteData } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const HOURS = [
  { day: "Monday", open: "7:00 AM", close: "9:00 PM" },
  { day: "Tuesday", open: "7:00 AM", close: "9:00 PM" },
  { day: "Wednesday", open: "7:00 AM", close: "9:00 PM" },
  { day: "Thursday", open: "7:00 AM", close: "9:00 PM" },
  { day: "Friday", open: "7:00 AM", close: "10:00 PM" },
  { day: "Saturday", open: "6:00 AM", close: "10:00 PM" },
  { day: "Sunday", open: "7:00 AM", close: "8:00 PM" },
];

const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getCurrentDayStatus(): { dayName: string; isOpen: boolean; closingTime: string } {
  const now = new Date();
  const dayName = DAYS[now.getDay()];
  const hour = now.getHours();
  const minute = now.getMinutes();
  const currentMinutes = hour * 60 + minute;

  const todayHours = HOURS.find((h) => h.day === dayName);
  if (!todayHours) return { dayName, isOpen: false, closingTime: "" };

  const parseTime = (t: string) => {
    const [time, period] = t.split(" ");
    const [h, m] = time.split(":").map(Number);
    let hours = h;
    if (period === "PM" && h !== 12) hours += 12;
    if (period === "AM" && h === 12) hours = 0;
    return hours * 60 + m;
  };

  const openMin = parseTime(todayHours.open);
  const closeMin = parseTime(todayHours.close);
  const isOpen = currentMinutes >= openMin && currentMinutes < closeMin;

  return { dayName, isOpen, closingTime: todayHours.close };
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

export default function StoreInfo() {
  const [dayStatus, setDayStatus] = useState<{ dayName: string; isOpen: boolean; closingTime: string } | null>(null);

  useEffect(() => {
    setDayStatus(getCurrentDayStatus());
  }, []);

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteData.name + " " + siteData.address)}`;

  return (
    <section className="py-20 md:py-28 bg-background overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Badge variant="outline" className="gap-1.5 border-primary/30 bg-primary/5 text-primary px-4 py-1.5 text-sm font-medium">
              <MapPin className="w-4 h-4" />
              Find Us
            </Badge>
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="font-heading font-bold tracking-tight text-3xl md:text-4xl lg:text-5xl text-foreground text-balance mb-4"
          >
            Visit Naperville Fresh Market
          </motion.h2>
          <motion.p variants={fadeUp} className="text-muted-foreground text-base md:text-lg leading-relaxed text-pretty max-w-2xl mx-auto">
            We're right in the heart of Naperville — come browse our aisles, meet our team, and taste the freshest local produce around.
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Hours */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="bg-card border border-border rounded-[0.75rem] p-6 md:p-8 shadow-sm"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 rounded-[0.75rem] p-2.5">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-foreground">Store Hours</h3>
                {dayStatus && (
                  <span className={cn("text-sm font-medium", dayStatus.isOpen ? "text-green-600" : "text-destructive")}>
                    {dayStatus.isOpen ? `Open Now · Closes ${dayStatus.closingTime}` : "Currently Closed"}
                  </span>
                )}
              </div>
            </motion.div>

            <motion.div variants={stagger} className="space-y-1">
              {HOURS.map((item) => {
                const isToday = dayStatus?.dayName === item.day;
                return (
                  <motion.div
                    key={item.day}
                    variants={fadeUp}
                    className={cn(
                      "flex items-center justify-between py-2.5 px-3 rounded-[0.5rem] transition-colors",
                      isToday ? "bg-primary/8 border border-primary/20" : "hover:bg-muted/50"
                    )}
                  >
                    <span className={cn("font-medium text-sm md:text-base", isToday ? "text-primary font-semibold" : "text-foreground/80")}>
                      {item.day}
                      {isToday && (
                        <Badge variant="secondary" className="ml-2 text-xs py-0 px-1.5 bg-primary/15 text-primary border-0">
                          Today
                        </Badge>
                      )}
                    </span>
                    <span className={cn("text-sm md:text-base", isToday ? "text-primary font-semibold" : "text-muted-foreground")}>
                      {item.open} – {item.close}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>

            <Separator className="my-6" />

            {/* Parking & Accessibility */}
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <motion.div variants={fadeUp} className="flex items-start gap-2.5 bg-muted/40 rounded-[0.75rem] p-3">
                <Car className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Free Parking</p>
                  <p className="text-xs text-muted-foreground">Ample lot available</p>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} className="flex items-start gap-2.5 bg-muted/40 rounded-[0.75rem] p-3">
                <Accessibility className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-foreground">Accessible</p>
                  <p className="text-xs text-muted-foreground">ADA compliant entry</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right: Address + Map */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="flex flex-col gap-6"
          >
            {/* Contact Card */}
            <motion.div variants={fadeUp} className="bg-card border border-border rounded-[0.75rem] p-6 md:p-8 shadow-sm">
              <h3 className="font-heading font-bold text-xl text-foreground mb-5">Contact & Location</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-[0.5rem] p-2 shrink-0">
                    <MapPin className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">Address</p>
                    <p className="text-foreground font-medium">{siteData.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-[0.5rem] p-2 shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">Phone</p>
                    <a href={`tel:${siteData.phone}`} className="text-foreground font-medium hover:text-primary transition-colors">
                      {siteData.phoneDisplay}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 rounded-[0.5rem] p-2 shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-0.5">Email</p>
                    <a href={`mailto:${siteData.email}`} className="text-foreground font-medium hover:text-primary transition-colors break-all">
                      {siteData.email}
                    </a>
                  </div>
                </div>
              </div>

              <Separator className="my-5" />

              <Button size="lg" className="w-full gap-2 rounded-[0.75rem]" asChild>
                <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4" />
                  Get Directions
                  <ExternalLink className="w-4 h-4 ml-auto" />
                </a>
              </Button>
            </motion.div>

            {/* Map Embed / Placeholder */}
            <motion.div
              variants={fadeUp}
              className="relative rounded-[0.75rem] overflow-hidden border border-border shadow-sm bg-muted"
              style={{ minHeight: 220 }}
            >
              {siteData.mapEmbed ? (
                <div
                  className="w-full h-full [&_iframe]:w-full [&_iframe]:h-full [&_iframe]:min-h-[220px] [&_iframe]:border-0"
                  dangerouslySetInnerHTML={{ __html: siteData.mapEmbed }}
                />
              ) : (
                <div className="relative w-full h-[220px] overflow-hidden rounded-[0.75rem]">
                  <img
                    src="https://images.unsplash.com/photo-1506617420156-8e4536971650?w=800&q=80&auto=format&fit=crop"
                    alt="Market location area"
                    className="w-full h-full object-cover opacity-60"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-foreground/10">
                    <div className="bg-primary rounded-full p-3 shadow-lg">
                      <MapPin className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <p className="font-heading font-semibold text-foreground text-lg drop-shadow">{siteData.address}</p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm text-primary font-semibold hover:underline bg-background/80 px-3 py-1.5 rounded-full"
                    >
                      View on Google Maps <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}