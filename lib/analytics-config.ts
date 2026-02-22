// LifeCare Training — Analytics Configuration
// Source of truth for GA4 and opt-out settings.

export const ANALYTICS_CONFIG = {
  /** GA4 Measurement ID */
  ga4Id: process.env.NEXT_PUBLIC_GA4_ID || "G-N6SRNT32LX",

  /** Cookie name for storing opt-out preference */
  optOutCookieName: "lct_analytics_optout",

  /** How long the opt-out cookie persists (days) */
  cookieDurationDays: 365,

  /** GA4 cookies to clear when user opts out */
  ga4Cookies: ["_ga", "_ga_N6SRNT32LX"],
} as const;
