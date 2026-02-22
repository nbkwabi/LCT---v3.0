import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Courses",
  description:
    "Browse 32 CQC-aligned training courses for care homes, from mandatory fire safety to specialist MPharm-led clinical courses.",
};

export default function CoursesPage() {
  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">Training</span>
        <h1>Our Training Courses</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          Content for this page is coming in the next build layer. Browse our
          full catalogue of 32 CQC-aligned training courses across four tiers,
          from standard mandatory to specialist MPharm-led clinical sessions.
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
