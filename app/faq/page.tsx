import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Common questions about Life Care Training courses, pricing, booking, and CQC evidence packs.",
};

export default function FaqPage() {
  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">Support</span>
        <h1>Frequently Asked Questions</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          Content for this page is coming in the next build layer. Common
          questions about our courses, pricing, booking process, and CQC
          evidence packs will be answered here.
        </p>
        <div className="mt-8">
          <Link href="/enquiry" className="btn-primary">
            Get a CQC-Ready Training Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
