import type { Course } from "@/lib/courses";
import { TIERS } from "@/lib/courses";
import { CourseCard } from "@/components/courses/CourseCard";

interface TierSectionProps {
  tier: 1 | 2 | 3 | 4;
  courses: Course[];
}

export function TierSection({ tier, courses }: TierSectionProps) {
  const tierMeta = TIERS[tier];
  const badge = "badge" in tierMeta ? tierMeta.badge : undefined;

  return (
    <div>
      <div
        className="relative rounded-t-lg px-6 py-4"
        style={{ backgroundColor: tierMeta.colour }}
      >
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-3">
            <h3 className="mb-0 text-lg font-bold text-white">
              Tier {tier} &mdash; {tierMeta.label}
            </h3>
            {badge && (
              <span
                className="rounded-full px-3 py-1 text-xs font-bold text-white"
                style={{ backgroundColor: "#D97706" }}
              >
                {badge}
              </span>
            )}
          </div>
          <div className="text-sm font-bold text-white">
            From &pound;{tierMeta.halfDayPrice} per session
          </div>
        </div>
      </div>

      <div className="rounded-b-lg border border-t-0 border-border bg-white px-6 py-4">
        <p className="mb-0 max-w-[720px] text-sm text-body-text">
          {tierMeta.description}
        </p>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <CourseCard key={course.slug} course={course} />
        ))}
      </div>
    </div>
  );
}
