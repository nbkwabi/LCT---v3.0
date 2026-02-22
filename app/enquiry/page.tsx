import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a tailored training quote for your care home. We respond within one working day.",
};

export default function EnquiryPage() {
  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">Contact</span>
        <h1>Get a CQC-Ready Training Quote</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          The enquiry form is coming in the next build layer. In the meantime,
          you can reach Nathan directly by phone or email to discuss your
          training needs.
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
