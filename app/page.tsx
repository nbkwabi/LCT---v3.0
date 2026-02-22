import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Face-to-face CQC-aligned healthcare training for care homes across London, Kent, Surrey and Essex.",
};

export default function HomePage() {
  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">Welcome</span>
        <h1>Life Care Training</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          Content for this page is coming in the next build layer. Life Care
          Training delivers face-to-face, CQC-aligned healthcare training for
          care homes across London, Kent, Surrey and Essex.
        </p>
        <div className="mt-8 flex flex-col items-start gap-4">
          <Link href="/enquiry" className="btn-primary">
            Get a CQC-Ready Training Quote
          </Link>
          <Link
            href="/courses"
            className="text-lifecare-green underline underline-offset-2 hover:text-dark"
          >
            View Our Courses
          </Link>
        </div>
      </div>
    </section>
  );
}
