import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getCourseBySlug, TIERS } from "@/lib/courses";
import { CQCBadge } from "@/components/courses/CQCBadge";
import {
  BookOpen,
  ClipboardCheck,
  FileText,
  CalendarCheck,
  Award,
} from "lucide-react";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const course = getCourseBySlug(slug);
  if (!course) return { title: "Course Not Found" };
  return {
    title: `${course.name} | Life Care Training`,
    description: course.description.slice(0, 155),
  };
}

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function CourseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = getCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  const tierMeta = TIERS[course.tier];
  const price = course.priceHalfDay ?? course.priceFullDay;
  const primaryMappings = course.cqcMappings.filter((m) => m.isPrimary);
  const secondaryMappings = course.cqcMappings.filter((m) => !m.isPrimary);

  const includedItems = [
    { icon: BookOpen, text: "Delegate workbook" },
    { icon: ClipboardCheck, text: "Competency assessment" },
    { icon: FileText, text: "Engagement report" },
    { icon: CalendarCheck, text: "10-week follow-up" },
    { icon: Award, text: "Certificate of completion" },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="border-b border-border bg-white py-3"
      >
        <div className="container-content">
          <ol className="flex list-none flex-wrap items-center gap-1.5 p-0 text-sm text-body-text">
            <li>
              <Link href="/" className="text-lifecare-green hover:text-dark">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-body-text">
              &gt;
            </li>
            <li>
              <Link
                href="/courses"
                className="text-lifecare-green hover:text-dark"
              >
                Courses
              </Link>
            </li>
            <li aria-hidden="true" className="text-body-text">
              &gt;
            </li>
            <li aria-current="page" className="font-bold text-dark">
              {course.name}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="flex flex-wrap items-center gap-3">
            <span
              className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold text-white"
              style={{ backgroundColor: tierMeta.colour }}
            >
              Tier {course.tier} &mdash; {tierMeta.label}
            </span>
            {course.level && (
              <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs font-bold text-dark">
                {course.level}
              </span>
            )}
          </div>
          <h1 className="mt-4">{course.name}</h1>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <span className="text-body-text">{course.durationLabel}</span>
            <span className="text-2xl font-bold text-dark">
              &pound;{price} per session
            </span>
          </div>
        </div>
      </section>

      {/* Course Description */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="max-w-[720px]">
            <span className="section-label">About This Course</span>
            <h2 className="mt-2">Course description</h2>
            <p className="mt-4 leading-relaxed text-body-text">
              {course.description}
            </p>
          </div>
        </div>
      </section>

      {/* CQC Quality Statement Mapping */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="max-w-[720px]">
            <span className="section-label">CQC Alignment</span>
            <h2 className="mt-2">CQC Quality Statement mappings</h2>
            <p className="mt-4 text-body-text">
              This course is mapped to the following CQC Quality Statements from
              the Single Assessment Framework.
            </p>

            {primaryMappings.length > 0 && (
              <div className="mt-6">
                <h3 className="mb-4 text-lg">Primary mappings</h3>
                <div className="space-y-4">
                  {primaryMappings.map((mapping) => (
                    <CQCBadge
                      key={mapping.code}
                      mapping={mapping}
                      variant="full"
                    />
                  ))}
                </div>
              </div>
            )}

            {secondaryMappings.length > 0 && (
              <div className="mt-8">
                <h3 className="mb-4 text-lg">Secondary mappings</h3>
                <div className="space-y-4">
                  {secondaryMappings.map((mapping) => (
                    <CQCBadge
                      key={mapping.code}
                      mapping={mapping}
                      variant="full"
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CQC Copy Snippet */}
      <section className="bg-white py-8">
        <div className="container-content">
          <div
            className="max-w-[720px] rounded-lg bg-pale-green p-6"
            style={{ borderLeft: "4px solid #2b7925" }}
          >
            <p className="mb-0 font-bold leading-relaxed text-dark">
              {course.cqcCopySnippet}
            </p>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="max-w-[720px]">
            <span className="section-label">Included</span>
            <h2 className="mt-2">What&apos;s included</h2>
            <ul className="mt-6 list-none space-y-4 p-0">
              {includedItems.map((item) => (
                <li key={item.text} className="flex items-center gap-3">
                  <item.icon
                    className="h-5 w-5 shrink-0 text-lifecare-green"
                    aria-hidden="true"
                  />
                  <span className="text-body-text">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-spacing bg-lifecare-green">
        <div className="container-content text-center">
          <h2 className="text-white">Book {course.name}</h2>
          <p className="mx-auto mt-4 max-w-[720px] text-white">
            Tell us about your care home and we will arrange this course at a
            time that works for your team. Up to 15 delegates per session.
          </p>
          <div className="mt-8">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-lifecare-green no-underline transition-colors hover:bg-pale-green"
              style={{ minHeight: "44px" }}
            >
              Book This Course
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
