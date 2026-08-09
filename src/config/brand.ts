export const BRAND = {
  name: "SUTRAVA",
  legalName: "Sutrava Software Solutions",
  shortName: "Sutrava",
  tagline: "Find the leaks. Automate the work. Grow the business.",
  shortTagline: "Connect. Automate. Grow.",
  description:
    "Software intelligence for your company — to grow, save time on repetitive tasks, and manage data more effectively.",
  promise:
    "We find where businesses lose time, money, and opportunities — then build AI-powered systems to fix it.",
  positioning:
    "We are software intelligence for your company — helping you grow, save time on repetitive tasks, and manage data more effectively.",
  url: "https://sutrava.com",
  email: "hello@sutrava.com",
  phone: "+91 00000 00000",
  cta: {
    primary: "Find Your Biggest Business Leak",
    secondary: "Explore Solutions",
    audit: "Request a Business Automation Audit",
    discovery: "Book a Discovery Call",
    assessment: "Get My Free Assessment",
    roi: "Get a Custom ROI Assessment",
  },
  social: {
    linkedin: "https://linkedin.com/company/sutrava",
    twitter: "https://x.com/sutrava",
    github: "https://github.com/sutrava",
  },
} as const;

export type Brand = typeof BRAND;
