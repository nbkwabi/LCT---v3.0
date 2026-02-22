import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Discover our 5-phase training lifecycle: from booking to CQC-ready evidence packs delivered to your care home.",
};

export default function HowItWorksPage() {
  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">Process</span>
        <h1>How Our Training Works</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          Content for this page is coming in the next build layer. Discover how
          Life Care Training delivers face-to-face sessions at your care home
          and provides CQC-ready evidence packs within 10 weeks.
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
