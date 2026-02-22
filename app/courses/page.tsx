import type { Metadata } from "next";
import Link from "next/link";
import { Star, FileText, GraduationCap } from "lucide-react";
import { getCoursesGroupedByTier, TIERS } from "@/lib/courses";
import { TierSection } from "@/components/courses/TierSection";

export const metadata: Metadata = {
  title:
    "CQC Training Courses for Care Homes | 32 Courses | Life Care Training",
  description:
    "32 on-site training courses for care homes across 4 specialist tiers. Every course mapped to CQC Quality Statements with 10 weeks of competency follow-up. View courses and pricing.",
};

export default function CoursesPage() {
  const groupedCourses = getCoursesGroupedByTier();

  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content text-center">
          <h1 className="mx-auto max-w-[720px]">
            32 courses across 4 specialist tiers &mdash; all delivered on-site
            at your care home
          </h1>
          <p className="mx-auto mt-6 max-w-[720px] text-body-text">
            Every course is mapped to CQC Quality Statements, includes real-time
            competency assessment, and comes with 10 weeks of structured
            follow-up. Flat session fee for up to 15 delegates &mdash; no
            per-head pricing.
          </p>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="border-b border-border bg-white py-6">
        <div className="container-content">
          <div className="flex flex-col items-center justify-center gap-6 sm:flex-row sm:gap-12">
            <div className="flex items-center gap-2 text-sm font-bold text-dark">
              <Star className="h-5 w-5 text-goldenrod" aria-hidden="true" />
              <span>4.89/5 rated</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-dark">
              <FileText
                className="h-5 w-5 text-lifecare-green"
                aria-hidden="true"
              />
              <span>CQC Quality Statements mapped</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-bold text-dark">
              <GraduationCap
                className="h-5 w-5 text-lifecare-green"
                aria-hidden="true"
              />
              <span>MPharm-qualified trainer</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Overview */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <span className="section-label">Pricing</span>
          <h2 className="mt-2">Transparent, flat-rate pricing</h2>
          <p className="mt-4 max-w-[720px] text-body-text">
            Every course is priced as a flat session fee for up to 15 delegates.
            No per-head charges, no hidden extras. You know exactly what you are
            paying before you book.
          </p>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-dark">
                  <th className="py-3 pr-4 font-bold text-dark">Tier</th>
                  <th className="py-3 pr-4 font-bold text-dark">
                    Half Day (approx. 3&ndash;4 hrs)
                  </th>
                  <th className="py-3 font-bold text-dark">
                    Full Day (approx. 6 hrs)
                  </th>
                </tr>
              </thead>
              <tbody>
                {([4, 3, 2, 1] as const).map((tier) => (
                  <tr key={tier} className="border-b border-border">
                    <td className="py-3 pr-4">
                      <span className="font-bold text-dark">Tier {tier}</span>
                      <span className="ml-2 text-body-text">
                        &mdash; {TIERS[tier].label}
                      </span>
                    </td>
                    <td className="py-3 pr-4 font-bold text-dark">
                      &pound;{TIERS[tier].halfDayPrice}
                    </td>
                    <td className="py-3 font-bold text-dark">
                      &pound;{TIERS[tier].fullDayPrice}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="mt-10">Multi-course discounts</h3>
          <p className="mt-2 max-w-[720px] text-body-text">
            Book multiple courses together and save. The more courses you book,
            the bigger the discount.
          </p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full max-w-[480px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b-2 border-dark">
                  <th className="py-3 pr-4 font-bold text-dark">
                    Courses booked
                  </th>
                  <th className="py-3 font-bold text-dark">Discount</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-body-text">
                    3&ndash;4 courses
                  </td>
                  <td className="py-3 font-bold text-lifecare-green">10%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-body-text">
                    5&ndash;7 courses
                  </td>
                  <td className="py-3 font-bold text-lifecare-green">15%</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-3 pr-4 text-body-text">8+ courses</td>
                  <td className="py-3 font-bold text-lifecare-green">20%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="mt-4 text-xs text-body-text">
            All prices are per session for up to 15 delegates. Prices exclude
            VAT.
          </p>
        </div>
      </section>

      {/* Course Tiers */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <span className="section-label">Our Courses</span>
          <h2 className="mt-2">Browse by tier</h2>
          <p className="mb-10 mt-4 max-w-[720px] text-body-text">
            Our courses are organised into four tiers based on complexity and
            trainer qualification. Browse below or get in touch and we will
            recommend only the courses that match your gaps.
          </p>
          <div className="space-y-12">
            {([4, 3, 2, 1] as const).map((tier) => (
              <TierSection
                key={tier}
                tier={tier}
                courses={groupedCourses[tier]}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-spacing bg-lifecare-green">
        <div className="container-content text-center">
          <h2 className="text-white">
            Not sure which courses your home needs?
          </h2>
          <p className="mx-auto mt-4 max-w-[720px] text-white">
            Tell us about your care home and Nathan will recommend only the
            courses that match your gaps, your staff, and your CQC situation.
          </p>
          <div className="mt-8">
            <Link
              href="/enquiry"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-lifecare-green no-underline transition-colors hover:bg-pale-green"
              style={{ minHeight: "44px" }}
            >
              Get a CQC-Ready Training Quote
            </Link>
          </div>
          <p className="mt-4 text-sm text-white opacity-90">
            Nathan responds personally within one working day.
          </p>
        </div>
      </section>
    </>
  );
}
