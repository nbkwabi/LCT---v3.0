// LifeCare Training — Analytics Event Tracking
// Wraps gtag calls with opt-out checks.

import { hasOptedOut } from "./analytics-utils";

// Extend Window for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Fires a GA4 event. No-ops if user has opted out or gtag is unavailable.
 */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  if (typeof window === "undefined") return;
  if (hasOptedOut()) return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", eventName, params);
}

// ---- Convenience helpers for named conversion events ----

export function trackEnquirySubmit(sourceUrl: string): void {
  trackEvent("enquiry_form_submit", { source_url: sourceUrl });
}

export function trackCoursePageView(courseName: string): void {
  trackEvent("course_page_view", { course_name: courseName });
}

export function trackCtaClick(ctaText: string, ctaLocation: string): void {
  trackEvent("cta_click", { cta_text: ctaText, cta_location: ctaLocation });
}

export function trackPhoneTap(location: string): void {
  trackEvent("phone_tap", { location });
}
