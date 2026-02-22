import type { Metadata } from "next";
import Link from "next/link";
import {
  JsonLd,
  generateFAQSchema,
  generateBreadcrumbSchema,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Life Care Training",
  description:
    "Common questions about Life Care Training courses, pricing, booking, CQC evidence packs, and how our 10-week training lifecycle works.",
};

const FAQ_GROUPS = [
  {
    heading: "About Life Care Training",
    questions: [
      {
        q: "Who delivers the training?",
        a: "Every session is delivered by Nathan Kwabi, our MPharm-qualified lead trainer. Nathan holds a Master of Pharmacy degree from the University of Reading, a Level 3 Award in Education and Training, and specialist certifications in manual handling, first aid, and competency assessment. He has trained over 10,000 care staff with a delegate rating of 4.89 out of 5.",
      },
      {
        q: "What areas do you cover?",
        a: "We deliver on-site training to care homes across London, Kent, Surrey, and Essex. If your home is outside these areas, get in touch \u2014 we may still be able to help.",
      },
      {
        q: "Are you CQC approved?",
        a: "No training provider is \u201CCQC approved\u201D \u2014 CQC does not accredit or endorse training providers. What we do is map every course to specific CQC Quality Statements from the Single Assessment Framework, so your training records directly support the evidence CQC inspectors look for.",
      },
      {
        q: "What types of care settings do you work with?",
        a: "We work with care homes, nursing homes, supported living services, and domiciliary care providers. Our courses are adapted to the specific needs of each setting.",
      },
    ],
  },
  {
    heading: "Courses and content",
    questions: [
      {
        q: "How many courses do you offer?",
        a: "We offer 32 courses across four specialist tiers, from standard mandatory training (fire safety, manual handling, infection control) through to specialist MPharm-led clinical courses (medication management, insulin delegation, emergency pharmacology).",
      },
      {
        q: "Are courses delivered face-to-face or online?",
        a: "All our courses are delivered face-to-face, on-site at your care home. We do not offer eLearning. Face-to-face delivery with practical exercises is central to our approach \u2014 it\u2019s how we ensure genuine competency, not just attendance.",
      },
      {
        q: "How long are the sessions?",
        a: "Most courses are half-day sessions (approx. 3\u20134 hrs). Some specialist courses are full-day (approx. 6 hrs). Exact timings are shown on each course page.",
      },
      {
        q: "Can you tailor courses to our care home\u2019s needs?",
        a: "Yes. Before every session, Nathan reviews your CQC situation, resident profile, and team experience. Sessions are adapted so the content connects to what your staff actually face on shift.",
      },
    ],
  },
  {
    heading: "Pricing and booking",
    questions: [
      {
        q: "How much does training cost?",
        a: "Prices start from \u00a3650 per session for Tier 1 (Standard Mandatory) courses. Every course is priced as a flat session fee for up to 15 delegates \u2014 no per-head charges. See our full pricing table on the Courses page.",
      },
      {
        q: "Do you offer discounts for multiple courses?",
        a: "Yes. Book 3\u20134 courses and receive 10% off. Book 5\u20137 for 15% off. Book 8 or more for 20% off. Discounts are applied to the total booking.",
      },
      {
        q: "How do I book?",
        a: "Fill in the enquiry form or call Nathan directly on 07951 559857. You\u2019ll hear back within one working day. After a 15-minute discovery call, we\u2019ll send a tailored proposal within 48 hours.",
      },
      {
        q: "How far in advance do I need to book?",
        a: "We recommend booking at least 2\u20133 weeks in advance to secure your preferred date. For urgent training needs, contact us and we\u2019ll do our best to accommodate you.",
      },
    ],
  },
  {
    heading: "The training lifecycle and CQC evidence",
    questions: [
      {
        q: "What is the \u201Ctraining lifecycle\u201D?",
        a: "It\u2019s our 10-week structured follow-up that runs after every session. It includes competency assessments, spaced follow-up assessments, manager observation prompts, and a Delegate Engagement Report \u2014 giving you exactly the evidence CQC inspectors look for.",
      },
      {
        q: "What evidence do I receive after training?",
        a: "You receive certificates of completion, a post-session training report, competency assessment records, two follow-up assessments (weeks 2\u20133 and 6\u20138), a manager observation prompt, and a full Delegate Engagement Report at week 10.",
      },
      {
        q: "How does this help with CQC inspections?",
        a: "CQC inspectors don\u2019t just ask whether staff attended training. They look for evidence of competence, observation, and ongoing learning. Our training lifecycle provides all three \u2014 mapped directly to CQC Quality Statements.",
      },
      {
        q: "Do you help with refresher training reminders?",
        a: "Yes. Three months before any certificate expires, we send you a refresher reminder so you never get caught out with lapsed training records at inspection.",
      },
    ],
  },
  {
    heading: "On the day",
    questions: [
      {
        q: "How many delegates can attend each session?",
        a: "Up to 15 delegates per session. This is included in the flat session fee \u2014 no additional per-head charges.",
      },
      {
        q: "What do we need to provide?",
        a: "A suitable training room with chairs and a table. We bring all training materials, workbooks, and equipment. For manual handling courses, we\u2019ll confirm any specific equipment needed in advance.",
      },
      {
        q: "What if a staff member can\u2019t attend on the day?",
        a: "We understand that care homes have unpredictable staffing needs. Contact us and we\u2019ll discuss options for catching up the delegate at a future session.",
      },
      {
        q: "Do delegates receive certificates?",
        a: "Yes. Every delegate receives a certificate of completion within 48 hours of the session, along with all supporting documentation for your training records.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content text-center">
          <h1 className="mx-auto max-w-[720px]">
            Frequently asked questions
          </h1>
          <p className="mx-auto mt-6 max-w-[720px] text-body-text">
            Common questions about our courses, pricing, booking process, and
            CQC evidence packs. Can&#39;t find what you&#39;re looking for? Get
            in touch and Nathan will respond personally.
          </p>
        </div>
      </section>

      {/* FAQ Groups */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mx-auto max-w-[820px] space-y-12">
            {FAQ_GROUPS.map((group) => (
              <div key={group.heading}>
                <h2 className="mb-6 text-2xl">{group.heading}</h2>
                <div className="space-y-6">
                  {group.questions.map((faq) => (
                    <div
                      key={faq.q}
                      className="rounded-lg border border-border bg-white p-6"
                    >
                      <h3 className="text-lg font-bold text-dark">{faq.q}</h3>
                      <p className="mb-0 mt-3 leading-relaxed text-body-text">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-spacing bg-lifecare-green">
        <div className="container-content text-center">
          <h2 className="text-white">Still have questions?</h2>
          <p className="mx-auto mt-4 max-w-[720px] text-white">
            Nathan responds to every enquiry personally. Ask us anything about
            training, pricing, or how our evidence lifecycle works.
          </p>
          <div className="mt-8">
            <Link
              href="/enquiry"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-lifecare-green no-underline transition-colors hover:bg-pale-green"
            >
              Get in Touch
            </Link>
          </div>
          <p className="mt-4 text-sm text-white opacity-90">
            We respond within one working day.
          </p>
        </div>
      </section>

      {/* JSON-LD Schema */}
      <JsonLd
        data={generateFAQSchema(
          FAQ_GROUPS.flatMap((group) =>
            group.questions.map((faq) => ({
              question: faq.q,
              answer: faq.a,
            })),
          ),
        )}
      />
      <JsonLd
        data={generateBreadcrumbSchema([
          { name: "Home", url: "https://lifecaretraining.uk" },
          { name: "FAQ", url: "https://lifecaretraining.uk/faq" },
        ])}
      />
    </>
  );
}
