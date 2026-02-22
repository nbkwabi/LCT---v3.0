import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Nathan Kwabi, MPharm-qualified trainer delivering face-to-face healthcare training across South East England.",
};

export default function AboutPage() {
  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">About Us</span>
        <h1>About Life Care Training</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          Content for this page is coming in the next build layer. Learn about
          Nathan Kwabi, our MPharm-qualified trainer, and why care homes across
          South East England choose Life Care Training.
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
