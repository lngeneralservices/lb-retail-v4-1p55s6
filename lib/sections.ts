/**
 * Section props registry — populated by the assembler.
 * Each section's AI-filled content lives here.
 * This file is OVERWRITTEN during the generation pipeline.
 */
export const sectionProps = {
  hero: {
    heading: "",
    subheading: "",
    paragraph: "",
    ctaPrimary: "",
    ctaSecondary: "",
  },
  services: {
    heading: "",
    paragraph: "",
  },
  about: {
    heading: "",
    paragraph: "",
  },
  features: {
    heading: "",
    paragraph: "",
    items: [] as Array<{ title: string; desc: string; icon?: string }>,
  },
  testimonials: {
    heading: "",
    paragraph: "",
  },
  cta: {
    heading: "",
    paragraph: "",
    buttonLabel: "",
  },
  faq: {
    heading: "",
    paragraph: "",
    items: [] as Array<{ q: string; a: string }>,
  },
  contact: {
    heading: "",
    paragraph: "",
  },
  process: {
    heading: "",
    paragraph: "",
    steps: [] as Array<{ title: string; desc: string; step: number }>,
  },
};

export type SectionProps = typeof sectionProps;
