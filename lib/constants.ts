// Life Care Training — Site-wide Constants

export const SITE = {
  name: "Life Care Training",
  domain: "lifecaretraining.uk",
  phone: "07951 559857",
  phoneHref: "tel:+447951559857",
  email: "nathan@lifecaretraining.uk",
  emailHref: "mailto:nathan@lifecaretraining.uk",
  whatsappHref:
    "https://wa.me/447951559857?text=Hi%20Nathan%2C%20I%27d%20like%20to%20enquire%20about%20training.",
} as const;

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
] as const;

export const CTA = {
  primary: {
    text: "Get a CQC-Ready Training Quote",
    href: "/enquiry",
  },
  secondary: {
    text: "View Our Courses",
    href: "/courses",
  },
} as const;

export const FOOTER_LINKS = {
  services: [
    { label: "Courses", href: "/courses" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Enquire", href: "/enquiry" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "FAQ", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
    { label: "Accessibility", href: "/accessibility" },
    { label: "Analytics Settings", href: "#analytics-settings" },
  ],
  areas: [
    { label: "London", href: "/areas/london" },
    { label: "Kent", href: "/areas/kent" },
    { label: "Surrey", href: "/areas/surrey" },
    { label: "Essex", href: "/areas/essex" },
  ],
} as const;

export const ENQUIRY_WEBHOOK_URL =
  "https://hooks.lifecare.click/webhook/enquiry";

export const SOCIAL_PROOF = {
  rating: "4.89/5",
  ratingNumber: 4.89,
  evidenceWeeks: 10,
  qualification: "MPharm-qualified",
  courseCount: 32,
  counties: 4,
  coverageText: "London, Kent, Surrey & Essex",
} as const;
