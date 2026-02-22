"use client";

import Link from "next/link";
import { SITE } from "@/lib/constants";

export function MobileStickyBar() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-between gap-2 border-t border-border bg-white px-4 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden"
      role="navigation"
      aria-label="Quick actions"
    >
      {/* Call — outlined */}
      <a
        href={SITE.phoneHref}
        className="flex min-h-[44px] flex-1 items-center justify-center rounded-lg border-2 border-lifecare-green bg-transparent text-sm font-bold text-lifecare-green no-underline transition-colors duration-200 hover:bg-lifecare-green hover:text-white"
      >
        Call
      </a>

      {/* WhatsApp — filled #25D366 */}
      <a
        href={SITE.whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        className="flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-[#25D366] text-sm font-bold text-white no-underline transition-opacity duration-200 hover:opacity-90"
      >
        WhatsApp
      </a>

      {/* Enquire — filled brand green */}
      <Link
        href="/enquiry"
        className="flex min-h-[44px] flex-1 items-center justify-center rounded-lg bg-lifecare-green text-sm font-bold text-white no-underline transition-colors duration-200 hover:bg-[#1e5a1a]"
      >
        Enquire
      </Link>
    </div>
  );
}
