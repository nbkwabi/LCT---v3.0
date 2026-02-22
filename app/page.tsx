import type { Metadata } from "next";
import Link from "next/link";
import {
  Star,
  FileText,
  GraduationCap,
  MapPin,
  Users,
  Shield,
  Check,
  X,
  ClipboardList,
  Eye,
  BarChart3,
} from "lucide-react";
import { COURSES, TIERS } from "@/lib/courses";
import {
  JsonLd,
  generateOrganizationSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title:
    "CQC-Aligned Care Home Training | 10-Week Evidence Lifecycle | Life Care Training",
  description:
    "On-site training plus a 10-week competency follow-up that gives care homes concrete CQC evidence. 4.89/5 rated. MPharm-qualified trainer. London, Kent, Surrey & Essex.",
  openGraph: {
    title:
      "CQC-Aligned Care Home Training | 10-Week Evidence Lifecycle | Life Care Training",
    description:
      "On-site training plus a 10-week competency follow-up that gives care homes concrete CQC evidence.",
    url: "https://lifecaretraining.uk",
    type: "website",
  },
  alternates: {
    canonical: "https://lifecaretraining.uk",
  },
};

const COMPARISON_ROWS = [
  {
    feature: "Face-to-face, on-site delivery",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "Interactive, practical sessions",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "Post-session competency assessments",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "Spaced observation prompts (Weeks 2\u201310)",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "Inspection-ready engagement report",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "Mapped to CQC Quality Statements",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "MPharm-qualified trainer",
    standard: false,
    lifecycle: true,
  },
  {
    feature: "Certificate of attendance",
    standard: true,
    lifecycle: true,
  },
];

const TESTIMONIALS = [
  {
    quote:
      "The training was very good and well organised. The trainer explained everything clearly and the practical part was really helpful. I feel more confident and prepared to apply what I learned in practice.",
    attribution: "Care Professional, London",
  },
  {
    quote:
      "Nathan was the best interactive trainer ever. He got everyone involved and kept us awake. He was very knowledgeable.",
    attribution: "Care Professional, London",
  },
  {
    quote:
      "This was an amazing training which will impact positively within my profession.",
    attribution: "Care Professional, London",
  },
];

const OBJECTIONS = [
  {
    objection: "We\u2019ve already got a training provider",
    response:
      "Most of our clients thought the same \u2014 until they realised their current provider just delivered sessions without evidence. We provide 10 weeks of competency follow-up that gives you concrete CQC evidence.",
  },
  {
    objection: "Face-to-face training is too expensive",
    response:
      "Our flat session fee (from \u00a3650) covers up to 15 delegates. Compare that to per-head pricing or the cost of sending staff off-site.",
  },
  {
    objection: "We don\u2019t have time for a full training day",
    response:
      "Most of our courses are half-day (approx. 3\u20134 hrs). One shift window, not the whole day.",
  },
  {
    objection: "Our staff find training boring",
    response:
      "That\u2019s exactly why delegates rate Nathan 4.89/5. Professional performance background means sessions are engaging, not endured.",
  },
  {
    objection: "We just need certificates for CQC",
    response:
      "Certificates alone aren\u2019t enough. CQC looks for competency evidence. We provide 10 weeks of it.",
  },
];

const TIMELINE_STEPS = [
  {
    label: "Week 0",
    heading: "Prepare",
    description:
      "Pre-session needs analysis and delegate list confirmation.",
    Icon: ClipboardList,
  },
  {
    label: "Day 1",
    heading: "Train",
    description: "Interactive, face-to-face session at your care home.",
    Icon: Users,
  },
  {
    label: "Week 1",
    heading: "Assess",
    description:
      "Post-session competency assessments for every delegate.",
    Icon: Check,
  },
  {
    label: "Weeks 2\u201310",
    heading: "Observe",
    description:
      "Spaced observation prompts to embed learning on the floor.",
    Icon: Eye,
  },
  {
    label: "Week 10",
    heading: "Report",
    description:
      "Inspection-ready engagement report with full evidence trail.",
    Icon: BarChart3,
  },
];

const CARE_SETTINGS = [
  "Care Homes",
  "Nursing Homes",
  "Supported Living",
  "Domiciliary Care",
];

const TRAINER_BADGES = [
  "MPharm",
  "L3 AET",
  "City & Guilds MH TTT",
  "RQF L3 Assessor",
  "EFAW",
];

const SHOWCASE_SLUGS = [
  "medication-administration-foundation",
  "safeguarding-adults-level-3",
  "aed-basic-life-support",
  "fire-safety-emergency-evacuation",
  "infection-prevention-control-cstf",
  "dementia-care-level-3",
  "manual-handling-full-induction",
  "epilepsy-awareness-buccal-midazolam",
];

const showcaseCourses = SHOWCASE_SLUGS.map(
  (slug) => COURSES.find((c) => c.slug === slug)!,
).filter(Boolean);

export default function HomePage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <h1 className="mb-6 text-4xl font-bold leading-tight text-dark">
                When CQC asks if your staff are competent {"\u2014"} make sure
                you can prove it
              </h1>
              <p className="mb-8 max-w-prose text-base leading-relaxed text-body-text">
                On-site training plus a 10-week competency follow-up that gives
                you concrete evidence {"\u2014"} spaced assessments, observation
                prompts, and an inspection-ready engagement report.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/enquiry" className="btn-primary">
                  Get a CQC-Ready Training Quote
                </Link>
                <Link href="/how-it-works" className="btn-secondary">
                  See how our training lifecycle works &rarr;
                </Link>
              </div>
            </div>
            <div
              className="flex aspect-[4/3] w-full items-center justify-center rounded-lg bg-lifecare-green"
              role="img"
              aria-label="Life Care Training on-site care home training"
            >
              <span className="px-4 text-center text-lg font-bold text-white">
                Life Care Training
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Social Proof Bar */}
      <section
        className="section-spacing bg-white"
        aria-label="Social proof statistics"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
            <div className="flex flex-col items-center gap-2 text-center">
              <Star
                className="mb-2 text-goldenrod"
                size={32}
                aria-hidden="true"
              />
              <p className="text-3xl font-bold leading-tight text-lifecare-green">
                4.89/5 rated
              </p>
              <p className="text-sm text-body-text">
                From 5,000+ feedback entries
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <FileText
                className="mb-2 text-lifecare-green"
                size={32}
                aria-hidden="true"
              />
              <p className="text-3xl font-bold leading-tight text-lifecare-green">
                10-week CQC evidence
              </p>
              <p className="text-sm text-body-text">
                Built into every course
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <GraduationCap
                className="mb-2 text-lifecare-green"
                size={32}
                aria-hidden="true"
              />
              <p className="text-3xl font-bold leading-tight text-lifecare-green">
                MPharm-qualified trainer
              </p>
              <p className="text-sm text-body-text">Plus Level 3 AET</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: What We Do */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl font-bold leading-snug text-dark">
            Training that works on the floor, not just on paper
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="card text-center">
              <MapPin
                className="mx-auto mb-4 text-lifecare-green"
                size={40}
                aria-hidden="true"
              />
              <h3 className="mb-3 text-xl font-semibold leading-snug text-dark">
                On-site at your care home
              </h3>
              <p className="text-base leading-relaxed text-body-text">
                We come to you. No travel for your staff, no disruption to
                rotas, and training delivered in the environment where they
                actually work.
              </p>
            </div>
            <div className="card text-center">
              <Users
                className="mx-auto mb-4 text-lifecare-green"
                size={40}
                aria-hidden="true"
              />
              <h3 className="mb-3 text-xl font-semibold leading-snug text-dark">
                Interactive, not passive
              </h3>
              <p className="text-base leading-relaxed text-body-text">
                No death-by-PowerPoint. Every session includes practical
                exercises, group discussion, and scenario-based learning that
                delegates actually remember.
              </p>
            </div>
            <div className="card text-center">
              <Shield
                className="mx-auto mb-4 text-lifecare-green"
                size={40}
                aria-hidden="true"
              />
              <h3 className="mb-3 text-xl font-semibold leading-snug text-dark">
                We handle the evidence
              </h3>
              <p className="text-base leading-relaxed text-body-text">
                After the session, we provide competency records, observation
                prompts, and an inspection-ready engagement report. You get the
                evidence; we do the work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Why Life Care / Comparison Table */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <h2 className="mb-6 text-center text-3xl font-bold leading-snug text-dark">
            Why care homes across South East England choose Life Care
          </h2>

          <blockquote className="mx-auto my-8 max-w-3xl border-l-4 border-lifecare-green pl-6">
            <p className="text-base leading-relaxed text-body-text">
              {"\u201C"}We expect providers to be able to demonstrate that staff
              have the competence, skills and experience to deliver safe,
              high-quality care and treatment.{"\u201D"}
            </p>
            <footer className="mt-2 text-sm text-body-text">
              {"\u2014"} CQC Single Assessment Framework
            </footer>
          </blockquote>

          <div className="my-8 rounded-lg bg-white p-6 md:p-8">
            <div className="overflow-x-auto">
              <table
                className="w-full border-collapse text-left"
                role="table"
              >
                <thead>
                  <tr>
                    <th className="w-1/2 border-b border-border px-4 py-4 text-sm font-bold text-dark">
                      Feature
                    </th>
                    <th className="w-1/4 border-b border-border px-4 py-4 text-center text-sm font-bold text-dark">
                      Standard Training
                    </th>
                    <th className="w-1/4 border-b-2 border-lifecare-green px-4 py-4 text-center text-sm font-bold text-lifecare-green">
                      Life Care Evidence Lifecycle
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {COMPARISON_ROWS.map((row) => (
                    <tr key={row.feature} className="border-b border-border">
                      <td className="px-4 py-3 text-sm text-body-text">
                        {row.feature}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.standard ? (
                          <Check
                            className="inline-block text-lifecare-green"
                            size={20}
                            aria-label="Included"
                          />
                        ) : (
                          <X
                            className="inline-block text-error"
                            size={20}
                            aria-label="Not included"
                          />
                        )}
                      </td>
                      <td className="px-4 py-3 text-center">
                        {row.lifecycle ? (
                          <Check
                            className="inline-block text-lifecare-green"
                            size={20}
                            aria-label="Included"
                          />
                        ) : (
                          <X
                            className="inline-block text-error"
                            size={20}
                            aria-label="Not included"
                          />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-2xl">
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check
                  className="mt-1 shrink-0 text-lifecare-green"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-body-text">
                  Every course is mapped to specific CQC Quality Statements
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="mt-1 shrink-0 text-lifecare-green"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-body-text">
                  10 weeks of post-session competency evidence included
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="mt-1 shrink-0 text-lifecare-green"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-body-text">
                  MPharm-qualified trainer with clinical credibility
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check
                  className="mt-1 shrink-0 text-lifecare-green"
                  size={20}
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-body-text">
                  Flat session fee from &pound;650 for up to 15 delegates
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 5: Meet Your Trainer */}
      <section
        className="section-spacing bg-white"
        aria-label="Meet your trainer"
      >
        <div className="container-content">
          <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2">
            <div
              className="mx-auto flex aspect-[3/4] w-full max-w-sm items-center justify-center rounded-lg bg-lifecare-green md:mx-0"
              role="img"
              aria-label="Nathan Kwabi, Lead Trainer at Life Care Training"
            >
              <span className="px-4 text-center text-lg font-bold text-white">
                Nathan Kwabi {"\u2014"} Lead Trainer
              </span>
            </div>
            <div>
              <span className="section-label">Your Trainer</span>
              <h2 className="mb-6 text-3xl font-bold leading-snug text-dark">
                Meet Your Trainer
              </h2>
              <p className="mb-4 text-base leading-relaxed text-body-text">
                Nathan Kwabi holds a Master of Pharmacy (MPharm) degree from the
                University of Reading, giving him clinical credibility that most
                care home trainers simply don{"\u2019"}t have. When your staff
                ask questions about drug interactions, insulin delegation, or
                emergency medication protocols, Nathan can answer from a
                foundation of real pharmacological knowledge {"\u2014"} not just
                what{"\u2019"}s on the slides.
              </p>
              <p className="mb-8 text-base leading-relaxed text-body-text">
                But clinical expertise alone doesn{"\u2019"}t make a great
                trainer. Nathan{"\u2019"}s professional background in
                performance means every session is genuinely engaging. Delegates
                don{"\u2019"}t sit through his courses {"\u2014"} they
                participate, practise, and leave feeling more confident. That
                {"\u2019"}s why feedback consistently averages 4.89 out of 5
                across 5,000+ individual delegate ratings.
              </p>
              <div className="flex flex-wrap gap-3">
                {TRAINER_BADGES.map((badge) => (
                  <span
                    key={badge}
                    className="inline-block rounded-full border border-lifecare-green px-4 py-2 text-xs font-bold uppercase tracking-widest text-lifecare-green"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Real Impact Story */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mx-auto max-w-4xl rounded-r-lg border-l-4 border-lifecare-green bg-pale-green p-8 md:p-12">
            <span className="mb-4 inline-block text-xs font-bold uppercase tracking-widest text-lifecare-green">
              Real Impact
            </span>
            <h2 className="mb-4 text-2xl font-bold leading-snug text-dark">
              When first aid training saved a resident{"\u2019"}s life {"\u2014"}{" "}
              two weeks later
            </h2>
            <p className="mb-4 text-base leading-relaxed text-body-text">
              Two weeks after attending his first ever first aid session with
              Life Care, a care assistant used the choking procedure he{"\u2019"}
              d practised to save an elderly resident{"\u2019"}s life during a
              mealtime emergency. It was the first time he{"\u2019"}d ever been
              trained in first aid. The care home manager and deputy manager both
              confirmed the outcome.
            </p>
            <p className="text-xs text-body-text">
              Outcome stories are shared with permission. Individual results and
              circumstances vary.
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: Training Lifecycle Teaser */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-snug text-dark">
              Beyond the classroom
            </h2>
            <p className="mx-auto max-w-prose text-base leading-relaxed text-body-text">
              Most training providers deliver a session and disappear. We stay
              with you for 10 weeks {"\u2014"} because competence isn{"\u2019"}t
              built in an afternoon.
            </p>
          </div>
          <div className="mb-12 grid grid-cols-1 gap-6 sm:grid-cols-5">
            {TIMELINE_STEPS.map((step) => (
              <div key={step.label} className="text-center">
                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-lifecare-green text-white">
                  <step.Icon size={24} aria-hidden="true" />
                </div>
                <p className="mb-1 text-xs font-bold uppercase tracking-widest text-lifecare-green">
                  {step.label}
                </p>
                <h3 className="mb-1 text-lg font-semibold text-dark">
                  {step.heading}
                </h3>
                <p className="text-sm leading-relaxed text-body-text">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/how-it-works" className="btn-secondary">
              See the full training lifecycle &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="section-spacing bg-dark" aria-label="Testimonials">
        <div className="container-content">
          <h2 className="mb-12 text-center text-3xl font-bold leading-snug text-white">
            What delegates say
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <blockquote key={i} className="flex flex-col">
                <span
                  className="mb-2 select-none text-5xl leading-none text-goldenrod"
                  aria-hidden="true"
                >
                  {"\u201C"}
                </span>
                <p className="mb-4 flex-1 text-base leading-relaxed text-white">
                  {t.quote}
                </p>
                <footer className="text-sm text-body-text">
                  {"\u2014"} {t.attribution}
                </footer>
              </blockquote>
            ))}
          </div>
          <p className="mx-auto mt-12 max-w-prose text-center text-xs text-body-text">
            Feedback from delegates trained by Nathan Kwabi across care settings
            in London and Kent, prior to establishing Life Care Training
            (2025{"\u2013"}2026).
          </p>
        </div>
      </section>

      {/* Section 9: Care Settings */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content text-center">
          <div className="flex flex-wrap justify-center gap-4">
            {CARE_SETTINGS.map((setting) => (
              <span
                key={setting}
                className="inline-block rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-dark"
              >
                {setting}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Section 10: Course Preview */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold leading-snug text-dark">
              {COURSES.length} courses across 4 specialist tiers
            </h2>
            <p className="mx-auto max-w-prose text-base leading-relaxed text-body-text">
              From statutory mandatory training to specialist clinical courses
              {"\u2014"} all delivered face-to-face at your care home, all
              mapped to CQC Quality Statements.
            </p>
          </div>
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {showcaseCourses.slice(0, 8).map((course) => {
              const tier = TIERS[course.tier];
              return (
                <Link
                  key={course.slug}
                  href={`/courses/${course.slug}`}
                  className="card group no-underline hover:no-underline"
                >
                  <span
                    className="mb-3 inline-block rounded px-2 py-1 text-xs font-bold uppercase tracking-widest"
                    style={{
                      backgroundColor: tier.colour,
                      color: "#ffffff",
                    }}
                  >
                    {tier.label}
                  </span>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-dark transition-colors duration-200 group-hover:text-lifecare-green">
                    {course.name}
                  </h3>
                  <p className="text-sm text-body-text">
                    {course.durationLabel}
                  </p>
                </Link>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/courses" className="btn-primary">
              View All {COURSES.length} Courses
            </Link>
            <p className="mt-4 text-xs text-body-text">
              All prices are per session for up to 15 delegates.
            </p>
          </div>
        </div>
      </section>

      {/* Section 11: Objection Handling */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {OBJECTIONS.map((obj) => (
              <div key={obj.objection} className="card">
                <h3 className="mb-3 text-xl font-semibold leading-snug text-dark">
                  {"\u201C"}
                  {obj.objection}
                  {"\u201D"}
                </h3>
                <p className="text-base leading-relaxed text-body-text">
                  {obj.response}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 12: Final CTA */}
      <section className="section-spacing bg-lifecare-green">
        <div className="container-content text-center">
          <h2 className="mb-4 text-3xl font-bold leading-snug text-white">
            Ready to strengthen your CQC evidence?
          </h2>
          <p className="mx-auto mb-8 max-w-prose text-base leading-relaxed text-white">
            Tell us about your care home and we{"\u2019"}ll put together a
            training plan tailored to your team, your gaps, and your next
            inspection.
          </p>
          <Link
            href="/enquiry"
            className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 text-base font-bold text-lifecare-green no-underline transition-colors duration-200 hover:bg-pale-green"
          >
            Get a CQC-Ready Training Quote
          </Link>
          <p className="mt-4 text-sm text-white opacity-80">
            Nathan responds personally within one working day. No sales team, no
            call centre.
          </p>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <JsonLd data={generateOrganizationSchema()} />
      <JsonLd data={generateServiceSchema()} />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://lifecaretraining.uk" },
        ])}
      />
    </>
  );
}
