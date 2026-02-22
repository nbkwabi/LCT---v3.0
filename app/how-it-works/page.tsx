import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  Users,
  Mail,
  Brain,
  Eye,
  BarChart3,
  Check,
  X,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "How It Works | 10-Week CQC Training Lifecycle | Life Care Training",
  description:
    "Life Care\u2019s 10-week training lifecycle gives care homes spaced assessments, observation prompts, and CQC-ready engagement reports \u2014 not just a certificate.",
};

const bookingSteps = [
  {
    number: 1,
    title: "You get in touch",
    body: "Fill in the enquiry form or call Nathan directly. You\u2019ll hear back within one working day.",
  },
  {
    number: 2,
    title: "A 15-minute discovery call",
    body: "We\u2019ll ask about your CQC situation, what training you already have, and where the gaps are. No obligation.",
  },
  {
    number: 3,
    title: "A tailored proposal",
    body: "Within 48 hours, you\u2019ll receive a personalised proposal with only the courses your home actually needs.",
  },
  {
    number: 4,
    title: "Training and follow-up",
    body: "Nathan delivers on-site. After the session, the training lifecycle begins \u2014 10 weeks of structured competency evidence.",
  },
];

const lifecyclePhases = [
  {
    phase: 1,
    timing: "3\u20135 days before",
    icon: ClipboardList,
    heading: "Your staff receive preparation materials",
    body: "Delegates receive a pre-session briefing pack \u2014 distributed by you to your team \u2014 so the face-to-face session can focus on practical skills and competency, not background reading.",
    deliverables: [
      "Pre-Training Needs Assessment",
      "Pre-Session Briefing Sheet",
    ],
  },
  {
    phase: 2,
    timing: "On the day",
    icon: Users,
    heading: "Interactive on-site session with real-time assessment",
    body: "Nathan delivers at your care home. Sessions are interactive \u2014 group discussion, practical exercises, medical role-play, and scenario-based learning. During the session, delegates aren\u2019t just attending \u2014 they\u2019re being assessed.",
    deliverables: [
      "Attendance Register",
      "Competency Assessment Record",
      "Pre/Post Confidence Rating",
      "Personal Action Plan",
      "Delegate Feedback Form",
      "Certificate of Completion",
      "Course Toolkit",
    ],
  },
  {
    phase: 3,
    timing: "Within 48 hours",
    icon: Mail,
    heading: "Certificates, reports, and training records",
    body: "Within 48 hours, you receive certificates for every delegate, a post-session training report, and a training matrix contribution.",
    deliverables: [
      "Certificates of Completion",
      "Post-Session Training Report",
      "Training Matrix Contribution",
      "CPD Record Entry",
    ],
  },
  {
    phase: 4,
    timing: "Weeks 2\u20138",
    icon: Brain,
    heading: "Follow-up assessments that prove learning has stuck",
    body: "Two weeks after the session, delegates receive their first follow-up assessment \u2014 a spaced retrieval assessment designed to check whether learning has been retained and applied in practice. A second assessment follows at weeks 6\u20138.",
    deliverables: [
      "Follow-Up Assessment 1 (weeks 2\u20133)",
      "Follow-Up Assessment 2 (weeks 6\u20138)",
    ],
    footnote:
      "Based on peer-reviewed studies in health professional education, including Kerfoot et al. (Medical Education) and a 2024 systematic review of spaced digital education for health professionals (JMIR).",
  },
  {
    phase: 5,
    timing: "Weeks 4\u20136",
    icon: Eye,
    heading: "A structured prompt to observe staff in practice",
    body: "CQC inspectors want to see that managers observe their staff applying what they\u2019ve learned. We provide a structured observation prompt tailored to the course content and mapped to CQC Quality Statements.",
    deliverables: ["Manager Observation Prompt"],
  },
  {
    phase: 6,
    timing: "Weeks 8\u201310",
    icon: BarChart3,
    heading: "A full picture of every delegate\u2019s competence",
    body: "A Delegate Engagement Report profiles every staff member: Engaged Learner, Competent Retainer, At Risk, or Non-Responder. This tells you exactly who is confident and who needs support.",
    deliverables: ["Delegate Engagement Report", "CQC Evidence Pack Cover"],
  },
];

const withoutLifecycle = [
  "Attendance certificates showing dates and names",
  "eLearning completion percentages",
  "No evidence of post-training competence",
  "Manager asked \u201Chow do you know your staff are competent?\u201D \u2014 no documented answer",
];

const withLifecycle = [
  "Competency assessment records from the session itself",
  "Two follow-up assessments showing retained knowledge",
  "Manager observation evidence from structured prompts",
  "Delegate engagement profiles showing who is competent and who needs support",
  "A CQC Evidence Pack mapped to Quality Statements",
];

const stats = [
  { value: "10 weeks", label: "of structured follow-up" },
  { value: "7+", label: "documents per booking" },
  { value: "4", label: "engagement profiles" },
  { value: "3 months", label: "advance refresher notice" },
];

function PhaseCard({
  phase,
}: {
  phase: (typeof lifecyclePhases)[number];
}) {
  const Icon = phase.icon;
  return (
    <div className="rounded-lg border border-border bg-white p-6">
      <div className="flex items-center gap-2">
        <Icon className="h-5 w-5 text-lifecare-green" aria-hidden="true" />
        <span className="text-xs font-bold uppercase tracking-widest text-lifecare-green">
          {phase.timing}
        </span>
      </div>
      <h3 className="mt-2 text-xl font-bold text-dark">{phase.heading}</h3>
      <p className="mt-2 text-body-text">{phase.body}</p>
      <div className="mt-4 rounded-lg bg-pale-green p-4">
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-dark">
          What you receive:
        </p>
        <ul className="list-none space-y-1 pl-0">
          {phase.deliverables.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-sm text-body-text"
            >
              <Check
                className="h-4 w-4 shrink-0 text-lifecare-green"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
      {phase.footnote && (
        <p className="mt-3 text-xs text-body-text/70">{phase.footnote}</p>
      )}
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <>
      {/* Section 1: Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content text-center">
          <h1 className="mx-auto max-w-4xl">
            Our training lifecycle &mdash; from one session to 10 weeks of CQC
            evidence
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-body-text">
            Most training providers deliver a session, hand over a certificate,
            and disappear. We stay with you for 10 weeks &mdash; providing the
            competency evidence that CQC actually looks for.
          </p>
        </div>
      </section>

      {/* Section 2: The Problem */}
      <section className="section-spacing bg-white">
        <div className="container-prose">
          <p className="text-body-text">
            Under the Single Assessment Framework, CQC inspectors don&rsquo;t
            just ask whether your staff attended training. They ask whether your
            staff can demonstrate competence in practice. They look for evidence
            of observation, follow-up, and ongoing learning &mdash; not just a
            certificate on a wall.
          </p>
          <p className="text-body-text">
            Safeguarding Adult Board reviews and sector-wide analysis have
            identified over-reliance on eLearning as a barrier to effective
            practice &mdash; noting that digital modules alone often fail to
            provide the deep understanding needed to keep residents safe. CQC has
            raised concerns about assessing competence through online training
            alone.
          </p>
          <p className="text-body-text">
            That&rsquo;s the gap Life Care fills. Every course includes
            structured follow-up over 10 weeks, so when CQC arrives, you have
            exactly the evidence they&rsquo;re looking for.
          </p>
        </div>
      </section>

      {/* Section 3: Booking Journey */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <h2 className="text-center">Getting started is straightforward</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
            {bookingSteps.map((step) => (
              <div key={step.number} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-lifecare-green text-lg font-bold text-white">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-dark">{step.title}</h3>
                  <p className="mt-1 text-body-text">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/enquiry" className="btn-primary">
              Request Your CQC Training Plan
            </Link>
            <p className="mt-3 text-sm text-body-text">
              We respond within one working day.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Training Lifecycle */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="mx-auto max-w-3xl text-center">
            <span className="section-label">The Evidence Lifecycle</span>
            <h2>What happens before, during, and after every session</h2>
            <p className="mt-4 text-body-text">
              This is what you get from every Life Care course. Not just a
              training day &mdash; a complete evidence cycle that runs for 10
              weeks and produces exactly the documentation CQC inspectors look
              for. We handle the evidence. You receive it.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-5xl">
            {/* Phase number circles + cards */}
            <div className="space-y-8">
              {lifecyclePhases.map((phase) => (
                <div key={phase.phase} className="flex gap-4 md:gap-6">
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-pale-green bg-lifecare-green text-sm font-bold text-white">
                      {phase.phase}
                    </div>
                    {phase.phase < lifecyclePhases.length && (
                      <div
                        className="mt-2 w-0.5 grow bg-lifecare-green/30"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <PhaseCard phase={phase} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Ongoing Support */}
      <section className="section-spacing bg-white">
        <div className="container-prose">
          <h2>We don&rsquo;t disappear after week 10</h2>
          <p className="mt-4 text-body-text">
            Three months before any certificate expires, we send you a refresher
            reminder &mdash; so you never get caught out at inspection with
            lapsed training records.
          </p>
          <p className="text-body-text">
            If you book multiple courses, we consolidate everything into a
            single CQC Evidence Pack so your training documentation is
            organised, current, and inspection-ready at all times.
          </p>
          <p className="text-body-text">
            This isn&rsquo;t a one-off transaction. Most of our care homes come
            back year after year because the relationship works &mdash; reliable
            training, reliable evidence, and a trainer who already knows your
            team.
          </p>
        </div>
      </section>

      {/* Section 6: CQC Comparison */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <h2 className="text-center">The difference at inspection</h2>
          <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-white p-6 md:p-8">
              <h3 className="mb-6 text-xl font-bold text-dark">
                Without a training lifecycle
              </h3>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-body-text">
                Standard Training
              </p>
              <ul className="list-none space-y-4 pl-0">
                {withoutLifecycle.map((item) => (
                  <li key={item} className="flex gap-3 text-body-text">
                    <X
                      className="mt-0.5 h-5 w-5 shrink-0 text-error"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border-2 border-lifecare-green bg-white p-6 md:p-8">
              <h3 className="mb-6 text-xl font-bold text-dark">
                With Life Care&rsquo;s Evidence Lifecycle
              </h3>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-lifecare-green">
                Life Care Training
              </p>
              <ul className="list-none space-y-4 pl-0">
                {withLifecycle.map((item) => (
                  <li key={item} className="flex gap-3 text-body-text">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-lifecare-green"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Quick Stats */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl font-bold text-lifecare-green">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-body-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Final CTA */}
      <section className="section-spacing bg-lifecare-green">
        <div className="container-content text-center">
          <h2 className="text-white">
            Ready to see what this looks like for your care home?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">
            Tell us about your training needs and we&rsquo;ll put together a
            plan that gives you real CQC evidence &mdash; not just another
            certificate.
          </p>
          <div className="mt-8">
            <Link
              href="/enquiry"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-lifecare-green no-underline transition-colors hover:bg-pale-green"
            >
              Request Your CQC Training Plan
            </Link>
          </div>
          <p className="mt-4 text-sm text-white/80">
            Nathan responds personally within one working day. 15-minute
            discovery call, no obligation.
          </p>
        </div>
      </section>
    </>
  );
}
