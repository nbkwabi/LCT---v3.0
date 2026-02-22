"use client";

import { useEffect, useState } from "react";
import { hasOptedOut, setOptOut } from "@/lib/analytics-utils";

export function AnalyticsOptOut() {
  const [enabled, setEnabled] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setEnabled(!hasOptedOut());
    setMounted(true);
  }, []);

  function handleToggle() {
    const newEnabled = !enabled;
    setEnabled(newEnabled);
    setOptOut(!newEnabled);
  }

  // Avoid hydration mismatch — show a placeholder until mounted
  if (!mounted) {
    return (
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-bold text-dark mb-1">Analytics Tracking</p>
          <p className="text-sm text-body-text mb-0">Loading preference...</p>
        </div>
        <div
          className="h-7 w-12 rounded-full bg-border"
          aria-hidden="true"
        />
      </div>
    );
  }

  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <p className="font-bold text-dark mb-1">Analytics Tracking</p>
        <p className="text-sm text-body-text mb-0">
          Analytics are currently{" "}
          <strong>{enabled ? "enabled" : "disabled"}</strong>.
          {enabled
            ? " We use analytics to improve our website. No advertising data is collected."
            : " Google Analytics will not load on your next page visit."}
        </p>
      </div>
      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label="Analytics tracking"
        onClick={handleToggle}
        className="relative inline-flex h-7 w-12 shrink-0 cursor-pointer items-center rounded-full transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lifecare-green"
        style={{
          backgroundColor: enabled ? "#2b7925" : "#9ca3af",
        }}
      >
        <span
          className="inline-block h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-200"
          style={{
            transform: enabled ? "translateX(24px)" : "translateX(4px)",
          }}
        />
      </button>
    </div>
  );
}
