import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <section className="section-spacing">
      <div className="container-prose">
        <h1>Terms &amp; Conditions</h1>
        <p className="mt-4 text-body-text">
          Our full Terms &amp; Conditions are being finalised and will be
          published here shortly. In the meantime, if you have any questions
          about our training services, please{" "}
          <Link href="/enquiry">get in touch</Link>.
        </p>

        <p className="mt-12 text-sm text-body-text">
          Last updated: February 2026
        </p>
      </div>
    </section>
  );
}
