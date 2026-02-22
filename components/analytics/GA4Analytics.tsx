"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { ANALYTICS_CONFIG } from "@/lib/analytics-config";
import { hasOptedOut } from "@/lib/analytics-utils";

export function GA4Analytics() {
  const [optedOut, setOptedOut] = useState(true); // Default to true (don't load) until checked

  useEffect(() => {
    setOptedOut(hasOptedOut());
  }, []);

  // If opted out, don't render the GA4 script at all
  if (optedOut) return null;

  return (
    <>
      {/* GA4 consent defaults — set before gtag.js loads */}
      <Script
        id="ga4-consent-defaults"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'granted'
            });
          `,
        }}
      />

      {/* GA4 gtag.js */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4Id}`}
        strategy="afterInteractive"
      />

      {/* GA4 configuration */}
      <Script
        id="ga4-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${ANALYTICS_CONFIG.ga4Id}', {
              send_page_view: true
            });
          `,
        }}
      />
    </>
  );
}
