import type { Metadata } from "next";
import Link from "next/link";
import {
  Pill,
  Sparkles,
  FileStack,
  Handshake,
  ShieldCheck,
  BriefcaseBusiness,
  Languages,
} from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "About Nathan Kwabi | MPharm-Qualified Trainer | Life Care Training",
  description:
    "Meet Nathan Kwabi — MPharm-qualified trainer delivering face-to-face healthcare training to care homes across London, Kent, Surrey and Essex. 4.89/5 rated, 10,000+ care staff trained.",
  openGraph: {
    title:
      "About Nathan Kwabi | MPharm-Qualified Trainer | Life Care Training",
    description:
      "Meet Nathan Kwabi — MPharm-qualified trainer delivering face-to-face healthcare training to care homes across London, Kent, Surrey and Essex. 4.89/5 rated, 10,000+ care staff trained.",
    url: "https://lifecaretraining.uk/about",
    type: "website",
  },
  alternates: {
    canonical: "https://lifecaretraining.uk/about",
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Section 1: Page Hero */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div>
              <h1>
                Meet Nathan &mdash; pharmacist, trainer, and the person
                who&#39;ll be in your training room
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-body-text">
                Life Care Training was built by someone who understands both the
                clinical detail and the reality of care work. Here&#39;s why
                that matters.
              </p>
            </div>
            <div className="flex justify-center md:justify-end">
              <div
                className="flex w-full max-w-[400px] items-center justify-center rounded-lg bg-lifecare-green text-lg font-bold text-white"
                style={{ height: "200px" }}
                role="img"
                aria-label="Photo of Nathan Kwabi — coming soon"
              >
                Photo coming soon
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Nathan's Story */}
      <section className="section-spacing bg-white">
        <div className="container-prose">
          <span className="section-label">Nathan&#39;s Story</span>
          <h2 className="mb-6">The short version</h2>
          <p className="leading-relaxed text-body-text">
            Nathan Kwabi holds a Master of Pharmacy (MPharm) degree from the
            University of Reading, a Level 3 Award in Education and Training,
            and professional certifications in manual handling, first aid, and
            competency assessment. He&#39;s delivered training to over 10,000
            care staff across care homes, domiciliary services, and healthcare
            organisations &mdash; with 5,000+ delegate feedback entries
            averaging 4.89 out of 5.
          </p>
          <p className="leading-relaxed text-body-text">
            But qualifications don&#39;t explain why delegates consistently
            describe his sessions as the best training they&#39;ve attended.
            That comes from somewhere else.
          </p>

          <h2 className="mb-6 mt-12">The longer version</h2>
          <p className="leading-relaxed text-body-text">
            Nathan&#39;s path to care training wasn&#39;t a straight line
            &mdash; and that&#39;s exactly what makes him different.
          </p>
          <p className="leading-relaxed text-body-text">
            Before anything else, he was a performer. Professional experience
            across theatre, screen, and live performance gave him something no
            qualification can teach: the ability to command a room, read an
            audience, and make people feel something. That foundation shows up
            in every training session. Delegates don&#39;t sit through his
            courses &mdash; they engage with them.
          </p>
          <p className="leading-relaxed text-body-text">
            From performance, Nathan moved into healthcare &mdash; completing
            his MPharm at the University of Reading. He gained direct clinical
            experience in medication safety, drug interactions, and patient
            care. But he knew the traditional pharmacy path wasn&#39;t where
            he&#39;d make the greatest impact. The pull towards teaching and
            helping people on a broader scale was already there.
          </p>
          <p className="leading-relaxed text-body-text">
            That instinct led him through roles in business leadership &mdash;
            three years as Chief of Staff at a fintech company, where he spent
            his time leading teams, mentoring people, and developing talent.
            Skills that would prove essential in running a training operation.
          </p>
          <p className="leading-relaxed text-body-text">
            After leaving that role, Nathan spent time working across logistics
            and manufacturing &mdash; physically demanding work in fulfilment
            centres and factories. It was humbling, but it gave him something
            invaluable: a genuine understanding of what it feels like to do
            hard work and not feel seen. That experience showed him first-hand
            that the people doing the hardest jobs are often the ones who
            receive the least investment &mdash; and it&#39;s exactly why
            he&#39;s so committed to making sure care staff feel genuinely
            cared for and empowered through their training.
          </p>
          <p className="leading-relaxed text-body-text">
            That empathy is something care staff recognise immediately when
            Nathan walks into their training room. He&#39;s not there to talk
            down to anyone. He&#39;s there because he knows what it&#39;s like
            to do hard work and not feel seen.
          </p>
          <p className="leading-relaxed text-body-text">
            Care training found Nathan through a personal connection &mdash;
            and from the very first session, everything clicked. The
            performance skills, the clinical knowledge, the leadership
            experience, the empathy forged through difficult times &mdash; it
            all came together in the training room.
          </p>
          <p className="leading-relaxed text-body-text">
            In September 2025, he founded Life Care Training to do things
            properly. Not just delivering sessions through agencies, but
            building a training company that genuinely puts quality, relevance,
            and care staff wellbeing at the centre of everything.
          </p>
        </div>
      </section>

      {/* Section 3: Why Life Care Exists */}
      <section className="section-spacing bg-pale-green">
        <div className="container-prose">
          <span className="section-label">Our Purpose</span>
          <h2 className="mb-6">Why we started this</h2>
          <p className="leading-relaxed text-body-text">
            Most mandatory training in care homes falls into one of two
            categories: eLearning modules that staff click through without
            engaging, or classroom sessions delivered by trainers who read
            slides and collect signatures.
          </p>
          <p className="leading-relaxed text-body-text">
            Both produce the same thing &mdash; a certificate that proves
            attendance but not competence. And when CQC arrives, that
            certificate is often all the manager has to show.
          </p>
          <p className="leading-relaxed text-body-text">
            Life Care exists because care staff deserve better than that. They
            deserve training that respects their intelligence, that connects to
            what they actually face on shift, and that leaves them feeling more
            confident &mdash; not more bored.
          </p>
          <p className="leading-relaxed text-body-text">
            And care home managers deserve a training partner who doesn&#39;t
            disappear after the session. Someone who provides the competency
            evidence that CQC actually looks for, so the manager isn&#39;t left
            scrambling before an inspection.
          </p>
          <p className="leading-relaxed text-body-text">
            That&#39;s what Life Care Training is: the structured training and
            evidence system that Nathan built over years of delivery, now
            available as a service to care homes across South East England.
          </p>
        </div>
      </section>

      {/* Section 4: What Makes Nathan Different */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mb-12 text-center">
            <span className="section-label">The Difference</span>
            <h2>What you get from a trainer with this background</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="card">
              <div className="mb-4">
                <Pill
                  className="text-lifecare-green"
                  size={40}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-3">
                Clinical authority most trainers can&#39;t match
              </h3>
              <p className="mb-0 leading-relaxed text-body-text">
                An MPharm degree means Nathan understands the pharmacology, drug
                interactions, and clinical reasoning behind medication and
                emergency response courses &mdash; not just the slides. When a
                delegate asks a question that goes beyond the script, Nathan can
                answer it. That clinical depth is a genuine difference in a
                sector where most trainers have a care background but not a
                clinical one.
              </p>
            </div>

            <div className="card">
              <div className="mb-4">
                <Sparkles
                  className="text-lifecare-green"
                  size={40}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-3">
                A delivery style people actually remember
              </h3>
              <p className="mb-0 leading-relaxed text-body-text">
                Professional performance experience combined with natural energy
                means Nathan&#39;s sessions are consistently described as the
                best training delegates have attended. This isn&#39;t marketing
                language &mdash; it&#39;s backed by 5,000+ feedback entries
                averaging 4.89/5 across multiple care settings.
              </p>
            </div>

            <div className="card">
              <div className="mb-4">
                <FileStack
                  className="text-lifecare-green"
                  size={40}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-3">A system, not just a session</h3>
              <p className="mb-0 leading-relaxed text-body-text">
                Life Care isn&#39;t just Nathan turning up and delivering a
                course. Every session comes with a 10-week competency follow-up
                &mdash; pre-session briefing, real-time assessment, spaced
                follow-up assessments, manager observation prompts, and a full
                engagement report. Nathan built this system because he saw the
                same problem everywhere: good training that was forgotten within
                weeks.
              </p>
            </div>

            <div className="card">
              <div className="mb-4">
                <Handshake
                  className="text-lifecare-green"
                  size={40}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </div>
              <h3 className="mb-3">He respects the people in the room</h3>
              <p className="mb-0 leading-relaxed text-body-text">
                Nathan has done physically demanding, undervalued work himself.
                He doesn&#39;t deliver training from a position of distance.
                Care staff recognise that immediately &mdash; training with
                Nathan never feels like a box-ticking exercise or a punishment.
                It feels like someone genuinely investing in you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Qualifications and Credentials */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="mb-12 text-center">
            <span className="section-label">Credentials</span>
            <h2>Qualifications and credentials</h2>
          </div>

          <div className="mx-auto max-w-[720px]">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b-2 border-lifecare-green">
                    <th className="py-3 pr-4 font-bold text-dark">
                      Qualification
                    </th>
                    <th className="py-3 font-bold text-dark">
                      Awarding body / Year
                    </th>
                  </tr>
                </thead>
                <tbody className="text-body-text">
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">MPharm (Master of Pharmacy)</td>
                    <td className="py-3">University of Reading, 2017</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">
                      Level 3 Award in Education &amp; Training
                    </td>
                    <td className="py-3">RQF</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">
                      Manual Handling Train-the-Trainer
                    </td>
                    <td className="py-3">City &amp; Guilds, 2024</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">RQF Level 3 Assessor</td>
                    <td className="py-3">2024</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="py-3 pr-4">
                      Emergency First Aid at Work (EFAW)
                    </td>
                    <td className="py-3">Qualsafe, 2025</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <ShieldCheck
                  className="text-lifecare-green"
                  size={24}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-dark">
                  Enhanced DBS Checked
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <BriefcaseBusiness
                  className="text-lifecare-green"
                  size={24}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-dark">
                  Professionally Insured
                </span>
              </div>
              <div className="flex items-center gap-2 rounded-lg border border-border bg-white px-4 py-3">
                <Languages
                  className="text-lifecare-green"
                  size={24}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-sm font-bold text-dark">
                  Languages: English (native), Twi, Spanish (basic), French
                  (basic)
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: How Nathan Teaches */}
      <section className="section-spacing bg-white">
        <div className="container-content">
          <div className="mb-12 text-center">
            <span className="section-label">Teaching Philosophy</span>
            <h2>How Nathan teaches</h2>
          </div>

          <div className="mx-auto mb-12 max-w-[720px] text-center">
            <blockquote className="relative px-8 py-6">
              <span
                className="absolute left-0 top-0 select-none text-6xl font-bold leading-none text-goldenrod"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mb-0 text-xl font-bold leading-relaxed text-dark">
                Great care starts with confident, well-trained staff. My job is
                to ensure every carer leaves training feeling empowered,
                knowledgeable, and excited to apply what they&#39;ve learned.
                Training should never be endured &mdash; it should transform how
                you work.
              </p>
              <span
                className="absolute bottom-0 right-0 select-none text-6xl font-bold leading-none text-goldenrod"
                aria-hidden="true"
              >
                &rdquo;
              </span>
            </blockquote>
          </div>

          <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <h3 className="mb-3 text-lifecare-green">
                Practical, not theoretical
              </h3>
              <p className="mb-0 leading-relaxed text-body-text">
                Real scenarios, practical skills, immediate applicability. Every
                session is designed around what care staff actually face on
                shift.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-lifecare-green">
                Tailored, not generic
              </h3>
              <p className="mb-0 leading-relaxed text-body-text">
                Training is adapted to the home&#39;s CQC situation, resident
                profile, and team experience. No two sessions are identical.
              </p>
            </div>
            <div className="text-center">
              <h3 className="mb-3 text-lifecare-green">
                Compliance is the floor, not the ceiling
              </h3>
              <p className="mb-0 leading-relaxed text-body-text">
                Meeting CQC standards is the baseline, not the goal. Nathan goes
                further &mdash; building genuine competence and confidence that
                lasts beyond the training room.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Proof Points */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            <div>
              <p className="mb-2 text-4xl font-bold text-lifecare-green md:text-5xl">
                4.89/5
              </p>
              <p className="mb-0 text-sm text-body-text">
                average delegate rating
              </p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-bold text-lifecare-green md:text-5xl">
                5,000+
              </p>
              <p className="mb-0 text-sm text-body-text">
                individual feedback entries
              </p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-bold text-lifecare-green md:text-5xl">
                10,000+
              </p>
              <p className="mb-0 text-sm text-body-text">care staff trained</p>
            </div>
            <div>
              <p className="mb-2 text-4xl font-bold text-lifecare-green md:text-5xl">
                32
              </p>
              <p className="mb-0 text-sm text-body-text">
                courses across 4 specialist tiers
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Testimonials */}
      <section className="section-spacing bg-dark">
        <div className="container-content">
          <div className="mb-12 text-center">
            <span
              className="section-label"
              style={{ color: "var(--color-soft-sage)" }}
            >
              Testimonials
            </span>
            <h2 className="text-white">
              What people say about training with Nathan
            </h2>
          </div>

          <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-8 md:grid-cols-2">
            <blockquote className="relative rounded-lg border border-white/10 p-8">
              <span
                className="select-none text-5xl font-bold leading-none text-goldenrod"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-2 leading-relaxed text-white">
                My fifth time, and I was expecting the usual two-to-three star
                experience. I was positively surprised. Nathan exceeded with the
                amount and quality of information. Some subjects he took really
                deep and made me think. I learned about myself and my profession
                &mdash; new angles to look at things. Relaxed, funny,
                approachable. Organised and timely. Despite the amount of
                information, he kept my focus and attention one hundred percent.
                He is a joy, a talent, a dedicated diamond. My only wish is to
                be able to have the same trainer next time.
              </p>
              <footer className="mt-4 text-sm" style={{ color: "#9ca3af" }}>
                &mdash; Care Professional, London
              </footer>
            </blockquote>

            <blockquote className="relative rounded-lg border border-white/10 p-8">
              <span
                className="select-none text-5xl font-bold leading-none text-goldenrod"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="mt-2 leading-relaxed text-white">
                Nathan kept us engaged. Felt at home during all discussions.
                Gave real life examples. Joy throughout the training. Information
                provided was well researched and detailed. This for me was the
                most interesting and benefiting training.
              </p>
              <footer className="mt-4 text-sm" style={{ color: "#9ca3af" }}>
                &mdash; Care Professional, London
              </footer>
            </blockquote>
          </div>

          <p
            className="mx-auto mt-8 max-w-[720px] text-center text-xs"
            style={{ color: "#6b7280" }}
          >
            Feedback from delegates trained by Nathan Kwabi across care settings
            in London and Kent, prior to establishing Life Care Training
            (2025&ndash;2026).
          </p>
        </div>
      </section>

      {/* Section 9: Final CTA */}
      <section className="section-spacing bg-lifecare-green">
        <div className="container-content text-center">
          <h2 className="mb-6 text-white">
            Want to see what Life Care training would look like for your home?
          </h2>
          <p
            className="mx-auto mb-8 max-w-[720px] leading-relaxed"
            style={{ color: "rgba(255, 255, 255, 0.9)" }}
          >
            Nathan responds to every enquiry personally. Tell us about your care
            home and he&#39;ll put together a training plan tailored to your
            team, your gaps, and your next inspection.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/enquiry"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-lifecare-green no-underline transition-colors hover:bg-pale-green"
            >
              Request Your CQC Training Plan
            </Link>
          </div>
          <p className="mt-6" style={{ color: "rgba(255, 255, 255, 0.9)" }}>
            Or call Nathan directly{" "}
            <Link
              href={SITE.phoneHref}
              className="font-bold text-white no-underline hover:underline"
            >
              {SITE.phone}
            </Link>
          </p>
          <p
            className="mb-0 mt-2 text-sm"
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
          >
            15-minute discovery call. No obligation. We respond within one
            working day.
          </p>
        </div>
      </section>

      {/* JSON-LD Person Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Nathan Kwabi",
            jobTitle: "MPharm-qualified Healthcare Trainer",
            description:
              "Founder of Life Care Training. MPharm-qualified trainer delivering on-site healthcare training to care homes across London, Kent, Surrey and Essex.",
            worksFor: {
              "@type": "EducationalOrganization",
              name: "Life Care Training",
              url: "https://lifecaretraining.uk",
            },
            alumniOf: {
              "@type": "CollegeOrUniversity",
              name: "University of Reading",
            },
            knowsAbout: [
              "Healthcare Training",
              "Care Home Training",
              "Manual Handling",
              "Medication Management",
              "First Aid",
              "CQC Compliance",
            ],
            areaServed: [
              { "@type": "City", name: "London" },
              { "@type": "AdministrativeArea", name: "Kent" },
              { "@type": "AdministrativeArea", name: "Surrey" },
              { "@type": "AdministrativeArea", name: "Essex" },
            ],
          }),
        }}
      />
    </>
  );
}
