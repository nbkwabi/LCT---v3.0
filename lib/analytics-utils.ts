// LifeCare Training — Analytics Utility Functions
// Cookie-based opt-out for GA4 under DUAA statistical exception.

import { ANALYTICS_CONFIG } from "./analytics-config";

/**
 * Checks whether the user has opted out of analytics.
 * Returns `true` if opted out, `false` otherwise.
 */
export function hasOptedOut(): boolean {
  if (typeof document === "undefined") return false;
  return document.cookie
    .split("; ")
    .some((c) => c.startsWith(`${ANALYTICS_CONFIG.optOutCookieName}=true`));
}

/**
 * Sets or removes the opt-out cookie.
 * @param optOut `true` to opt out, `false` to opt back in.
 */
export function setOptOut(optOut: boolean): void {
  if (typeof document === "undefined") return;

  if (optOut) {
    const expires = new Date();
    expires.setDate(expires.getDate() + ANALYTICS_CONFIG.cookieDurationDays);
    document.cookie = `${ANALYTICS_CONFIG.optOutCookieName}=true; path=/; expires=${expires.toUTCString()}; SameSite=Lax`;
    clearGA4Cookies();
  } else {
    // Remove the opt-out cookie
    document.cookie = `${ANALYTICS_CONFIG.optOutCookieName}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Lax`;
  }
}

/**
 * Removes all GA4 cookies from the browser.
 */
export function clearGA4Cookies(): void {
  if (typeof document === "undefined") return;

  for (const name of ANALYTICS_CONFIG.ga4Cookies) {
    // Clear on current domain and all parent domains
    const hostname = window.location.hostname;
    const domains = [hostname, `.${hostname}`];

    // Also try parent domain (e.g. .lifecaretraining.uk)
    const parts = hostname.split(".");
    if (parts.length > 2) {
      domains.push(`.${parts.slice(-2).join(".")}`);
    }

    for (const domain of domains) {
      document.cookie = `${name}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    }

    // Also clear without domain attribute
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  }
}
