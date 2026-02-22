import type { Metadata } from "next";
import Link from "next/link";
import { getAllSlugs } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Course Details",
  description:
    "Detailed information about this CQC-aligned training course for care homes.",
};

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <section className="section-spacing">
      <div className="container-content">
        <span className="section-label">Course</span>
        <h1>Course Details</h1>
        <p className="mt-4 max-w-[720px] text-body-text">
          Content for this course page is coming in the next build layer. You
          are viewing the page for: <strong>{slug}</strong>
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
