export const siteData = {
  name: "Naperville Fresh Market",
  phone: "+16305551234",
  phoneDisplay: "+16305551234",
  email: "info@napervillefreshmarket.com",
  address: "Naperville, IL",
  fonts: {
    heading: "Playfair Display",
    body: "DM Sans",
    googleFontsParam: "family=Playfair+Display:wght@600;700;800&family=DM+Sans:wght@400;500;600",
  },
  seo: {
    title: "Naperville Fresh Market | Naperville Fresh Market",
    description: "Quality services from Naperville Fresh Market",
    siteUrl: "https://napervillefreshmarket.com",
    ogImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200&q=80&auto=format&fit=crop&h=630",
  },
  services: [
  {
    "title": "General services",
    "desc": "Naperville Fresh Market provides reliable, community-focused general services tailored to meet the everyday needs of Naperville residents.",
    "slug": "general-services"
  }
],
  areas: [
  {
    "city": "Aurora",
    "slug": "aurora"
  },
  {
    "city": "Bolingbrook",
    "slug": "bolingbrook"
  },
  {
    "city": "Lisle",
    "slug": "lisle"
  },
  {
    "city": "Wheaton",
    "slug": "wheaton"
  },
  {
    "city": "Plainfield",
    "slug": "plainfield"
  }
],
  reviews: [],
  rating: "5.0",
  reviewCount: 0,
  socialProof: "5.0★ Google Rated",
  heroBackgroundUrl: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=1600&q=80&auto=format&fit=crop&h=900",
  mapEmbed: "",
  ghlFormEmbed: "",
  ghlReviewEmbed: "",
};

export type SiteData = typeof siteData;
