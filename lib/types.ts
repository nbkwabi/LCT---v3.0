// Life Care Training — Shared TypeScript Types

export interface NavItem {
  label: string;
  href: string;
}

export interface FooterLinkGroup {
  label: string;
  href: string;
}

export interface EnquiryFormData {
  /** Care home or organisation name */
  careHomeName: string;
  /** Contact person's name */
  contactName: string;
  /** Email address */
  email: string;
  /** UK phone number */
  phone: string;
  /** Approximate number of staff (optional) */
  staffNumbers?: string;
  /** Free-text message (optional) */
  message?: string;
  /** GDPR consent checkbox */
  gdprConsent: boolean;
  /** Honeypot field — must be empty. Hidden via CSS (not display:none). */
  company_website: string;
}

export interface SocialProofItem {
  value: string;
  label: string;
}

export interface CTAConfig {
  text: string;
  href: string;
}
