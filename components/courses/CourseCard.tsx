import Link from "next/link";
import type { Course, CQCMapping } from "@/lib/courses";
import { TIERS } from "@/lib/courses";
import { CQCBadge } from "@/components/courses/CQCBadge";

interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  const tierColour = TIERS[course.tier].colour;
  const price = course.priceHalfDay ?? course.priceFullDay;
  const primaryMapping: CQCMapping | undefined = course.cqcMappings.find(
    (m) => m.isPrimary,
  );

  const snippet =
    course.description.length > 140
      ? course.description.slice(0, 140).trimEnd() + "\u2026"
      : course.description;

  return (
    <div
      className="card flex flex-col"
      style={{ borderTop: `4px solid ${tierColour}` }}
    >
      <h3 className="text-lg font-bold leading-snug text-dark">
        {course.name}
      </h3>

      <div className="mt-2 flex flex-wrap items-center gap-3">
        <span className="text-sm text-body-text">{course.durationLabel}</span>
        <span className="text-sm font-bold text-dark">
          &pound;{price} per session
        </span>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-body-text">{snippet}</p>

      {primaryMapping && (
        <div className="mt-3">
          <CQCBadge mapping={primaryMapping} variant="compact" />
        </div>
      )}

      <div className="mt-auto pt-4">
        <Link
          href={`/courses/${course.slug}`}
          className="inline-flex items-center text-sm font-bold text-lifecare-green no-underline hover:underline"
        >
          View Details &rarr;
        </Link>
      </div>
    </div>
  );
}
