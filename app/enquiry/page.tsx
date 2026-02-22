import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { EnquiryForm } from "@/components/forms/EnquiryForm";

export const metadata: Metadata = {
  title: "Get a CQC-Ready Training Quote | Life Care Training",
  description:
    "Request a tailored training quote for your care home. Nathan responds personally within one working day. No sales team, no call centre.",
};

export default function EnquiryPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content text-center">
          <h1 className="mx-auto max-w-[720px]">
            Get a CQC-Ready Training Quote
          </h1>
          <p className="mx-auto mt-6 max-w-[720px] text-body-text">
            Tell us about your care home and Nathan will put together a training
            plan tailored to your team, your gaps, and your next inspection. We
            respond within one working day.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[1fr_320px]">
            {/* Form */}
            <div className="relative">
              <EnquiryForm />
            </div>

            {/* Contact Sidebar */}
            <div className="space-y-6">
              <div className="rounded-lg border border-border bg-pale-green p-6">
                <h3 className="mb-4 text-lg font-bold text-dark">
                  Prefer to talk?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone
                      className="h-5 w-5 shrink-0 text-lifecare-green"
                      aria-hidden="true"
                    />
                    <Link
                      href={SITE.phoneHref}
                      className="font-bold text-dark no-underline hover:text-lifecare-green"
                    >
                      {SITE.phone}
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail
                      className="h-5 w-5 shrink-0 text-lifecare-green"
                      aria-hidden="true"
                    />
                    <Link
                      href={SITE.emailHref}
                      className="text-dark no-underline hover:text-lifecare-green"
                    >
                      {SITE.email}
                    </Link>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageCircle
                      className="h-5 w-5 shrink-0 text-lifecare-green"
                      aria-hidden="true"
                    />
                    <Link
                      href={SITE.whatsappHref}
                      className="text-dark no-underline hover:text-lifecare-green"
                    >
                      WhatsApp
                    </Link>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-border bg-white p-6">
                <h3 className="mb-4 text-lg font-bold text-dark">
                  What happens next?
                </h3>
                <ol className="list-none space-y-3 pl-0 text-sm text-body-text">
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lifecare-green text-xs font-bold text-white">
                      1
                    </span>
                    <span>Nathan reviews your enquiry personally</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lifecare-green text-xs font-bold text-white">
                      2
                    </span>
                    <span>15-minute discovery call (no obligation)</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lifecare-green text-xs font-bold text-white">
                      3
                    </span>
                    <span>Tailored proposal within 48 hours</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
