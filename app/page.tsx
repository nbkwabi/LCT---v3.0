export default function DesignSystemTest() {
  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <span className="section-label">Design System</span>
          <h1>Life Care Training — Design System Test</h1>
          <p className="mt-4 max-w-[720px]">
            Layer 1 verification page. Every element below uses brand tokens
            from the Brand Bible v3.0. If anything looks wrong here, it will
            be wrong everywhere.
          </p>
        </div>
      </section>

      {/* Typography Scale */}
      <section className="section-spacing">
        <div className="container-content">
          <span className="section-label">Typography</span>
          <h2 className="mb-8">Heading Hierarchy (Arial only)</h2>

          <div className="space-y-6">
            <div className="border-b border-border pb-6">
              <p className="text-sm text-body-text mb-2">
                H1 — 36px / Bold 700 / tracking -0.02em
              </p>
              <h1>Face-to-Face Training That Builds CQC Evidence</h1>
            </div>

            <div className="border-b border-border pb-6">
              <p className="text-sm text-body-text mb-2">
                H2 — 30px / Bold 700 / tracking -0.01em
              </p>
              <h2>Why Care Homes Choose Life Care Training</h2>
            </div>

            <div className="border-b border-border pb-6">
              <p className="text-sm text-body-text mb-2">
                H3 — 24px / Semibold 600
              </p>
              <h3>Medication Administration: Foundation (MPharm-Led)</h3>
            </div>

            <div className="border-b border-border pb-6">
              <p className="text-sm text-body-text mb-2">
                H4 — 20px / Semibold 600
              </p>
              <h4>CQC Quality Statement: Medicines Optimisation (S8)</h4>
            </div>

            <div className="border-b border-border pb-6">
              <p className="text-sm text-body-text mb-2">
                Body — 16px / Regular 400 / line-height 1.6
              </p>
              <p className="mb-0">
                Life Care Training delivers face-to-face healthcare training
                across London, Kent, Surrey, and Essex. Every session builds
                evidence your CQC inspector can see — competency assessments,
                signed registers, and reflective accounts.
              </p>
            </div>

            <div className="border-b border-border pb-6">
              <p className="text-sm text-body-text mb-2">
                Section Label — 11px / Bold 700 / uppercase / tracking 0.1em
              </p>
              <span className="section-label">Evidence System</span>
            </div>

            <div>
              <p className="text-sm text-body-text mb-2">
                Small — 14px / Regular 400
              </p>
              <p className="text-sm">
                Half Day (approx. 3–4 hrs) | Full Day (approx. 6 hrs)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Colour Palette */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <span className="section-label">Colour Palette</span>
          <h2 className="mb-8">Brand Colours</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            <ColourSwatch
              name="Life Care Green"
              hex="#2b7925"
              bgClass="bg-lifecare-green"
              textLight
            />
            <ColourSwatch
              name="Dark"
              hex="#111827"
              bgClass="bg-dark"
              textLight
            />
            <ColourSwatch
              name="Goldenrod"
              hex="#D97706"
              bgClass="bg-goldenrod"
              textLight
            />
            <ColourSwatch
              name="Soft Sage"
              hex="#66BB6A"
              bgClass="bg-soft-sage"
            />
            <ColourSwatch
              name="Pale Green"
              hex="#E8F5E9"
              bgClass="bg-pale-green"
            />
            <ColourSwatch
              name="Body Text"
              hex="#4b5563"
              bgClass="bg-body-text"
              textLight
            />
            <ColourSwatch
              name="White"
              hex="#ffffff"
              bgClass="bg-white border border-border"
            />
            <ColourSwatch
              name="Border"
              hex="#e5e7eb"
              bgClass="bg-border"
            />
          </div>
        </div>
      </section>

      {/* Tier Colours */}
      <section className="section-spacing">
        <div className="container-content">
          <span className="section-label">Course Tiers</span>
          <h2 className="mb-8">Tier Colour Cards</h2>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <TierCard
              tier={4}
              label="Clinical / MPharm Premium"
              hex="#1B5E20"
              borderClass="border-l-tier-4"
            />
            <TierCard
              tier={3}
              label="Specialist / Lead Level"
              hex="#2b7925"
              borderClass="border-l-tier-3"
            />
            <TierCard
              tier={2}
              label="Core Care"
              hex="#3A8B89"
              borderClass="border-l-tier-2"
            />
            <TierCard
              tier={1}
              label="Standard Mandatory"
              hex="#111827"
              borderClass="border-l-tier-1"
            />
          </div>
        </div>
      </section>

      {/* Buttons */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <span className="section-label">Buttons</span>
          <h2 className="mb-8">CTA Buttons</h2>

          <div className="flex flex-wrap items-center gap-4">
            <a href="/enquiry" className="btn-primary">
              Get a CQC-Ready Training Quote
            </a>
            <a href="/courses" className="btn-secondary">
              View Our Courses
            </a>
          </div>

          <div className="mt-8 rounded-lg border border-border bg-white p-4">
            <p className="text-sm text-body-text mb-0">
              <strong>Rule:</strong> Green (#2b7925) for all CTA buttons.
              Goldenrod is decorative only — never for CTAs (fails WCAG AA
              at 3.19:1 with white text).
            </p>
          </div>
        </div>
      </section>

      {/* Card Examples */}
      <section className="section-spacing">
        <div className="container-content">
          <span className="section-label">Components</span>
          <h2 className="mb-8">Card Component</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="card">
              <h3 className="mb-2">Face-to-Face Delivery</h3>
              <p className="text-body-text mb-0">
                Training happens in your care home, with your staff, using
                your equipment. No travel, no booking external venues.
              </p>
            </div>
            <div className="card">
              <h3 className="mb-2">CQC Evidence Packs</h3>
              <p className="text-body-text mb-0">
                Every session produces competency assessments, signed
                registers, and reflective accounts your inspector can see.
              </p>
            </div>
            <div className="card">
              <h3 className="mb-2">MPharm-Qualified Trainer</h3>
              <p className="text-body-text mb-0">
                Nathan brings pharmacy-grade clinical knowledge to medication
                courses that generic trainers cannot match.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section Backgrounds */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <span className="section-label">Section Backgrounds</span>
          <h2 className="mb-4">Pale Green Section (#E8F5E9)</h2>
          <p>
            Used for alternating sections, creating visual rhythm without
            heaviness. Body text remains readable at 6.72:1 contrast ratio.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-dark">
        <div className="container-content">
          <span className="section-label !text-soft-sage">Testimonials</span>
          <h2 className="mb-4 text-white">Dark Section (#111827)</h2>
          <p className="text-white/80">
            Used for testimonial sections. White text on dark at 17.74:1
            contrast ratio. Goldenrod quote marks only.
          </p>
          <p className="text-4xl font-bold text-goldenrod mb-2">&ldquo;</p>
          <p className="text-white max-w-[720px]">
            &ldquo;Nathan&rsquo;s training sessions are the best we&rsquo;ve
            had. Staff actually stayed awake and remembered what they
            learned.&rdquo;
          </p>
          <p className="text-sm text-white/60">
            — Example Testimonial, Care Home Manager
          </p>
        </div>
      </section>

      <section className="section-spacing bg-lifecare-green">
        <div className="container-content">
          <h2 className="mb-4 text-white">
            Green Section (#2b7925) — Final CTA
          </h2>
          <p className="text-white/90 mb-6">
            White text on green at 5.43:1 contrast ratio. Used for the final
            CTA band.
          </p>
          <a
            href="/enquiry"
            className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-bold text-lifecare-green transition-colors hover:bg-pale-green"
          >
            Get a CQC-Ready Training Quote
          </a>
        </div>
      </section>

      {/* Spacing Grid */}
      <section className="section-spacing">
        <div className="container-content">
          <span className="section-label">Spacing</span>
          <h2 className="mb-8">8-Point Spacing Grid</h2>

          <div className="space-y-3">
            {[
              { name: "XS", px: 8, tw: "p-2" },
              { name: "SM", px: 16, tw: "p-4" },
              { name: "MD", px: 24, tw: "p-6" },
              { name: "LG", px: 32, tw: "p-8" },
              { name: "XL", px: 48, tw: "p-12" },
              { name: "XXL", px: 64, tw: "p-16" },
            ].map(({ name, px, tw }) => (
              <div key={name} className="flex items-center gap-4">
                <span className="w-12 text-sm font-bold text-dark">
                  {name}
                </span>
                <div
                  className="bg-lifecare-green/20 h-8 rounded"
                  style={{ width: `${px * 3}px` }}
                />
                <span className="text-sm text-body-text">
                  {px}px — {tw}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WCAG Contrast Checklist */}
      <section className="section-spacing bg-pale-green">
        <div className="container-content">
          <span className="section-label">Accessibility</span>
          <h2 className="mb-8">WCAG Contrast Ratio Checklist</h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b-2 border-dark">
                  <th className="py-3 pr-4 font-bold text-dark">
                    Combination
                  </th>
                  <th className="py-3 pr-4 font-bold text-dark">Ratio</th>
                  <th className="py-3 pr-4 font-bold text-dark">AA</th>
                  <th className="py-3 font-bold text-dark">Sample</th>
                </tr>
              </thead>
              <tbody>
                <ContrastRow
                  combo="White on Life Care Green"
                  ratio="5.43:1"
                  pass
                  sampleBg="bg-lifecare-green"
                  sampleText="text-white"
                />
                <ContrastRow
                  combo="White on Dark"
                  ratio="17.74:1"
                  pass
                  sampleBg="bg-dark"
                  sampleText="text-white"
                />
                <ContrastRow
                  combo="Life Care Green on White"
                  ratio="5.43:1"
                  pass
                  sampleBg="bg-white"
                  sampleText="text-lifecare-green"
                />
                <ContrastRow
                  combo="Dark on White"
                  ratio="17.74:1"
                  pass
                  sampleBg="bg-white"
                  sampleText="text-dark"
                />
                <ContrastRow
                  combo="Body Text on White"
                  ratio="7.56:1"
                  pass
                  sampleBg="bg-white"
                  sampleText="text-body-text"
                />
                <ContrastRow
                  combo="Body Text on Pale Green"
                  ratio="6.72:1"
                  pass
                  sampleBg="bg-pale-green"
                  sampleText="text-body-text"
                />
                <ContrastRow
                  combo="Dark on Pale Green"
                  ratio="15.77:1"
                  pass
                  sampleBg="bg-pale-green"
                  sampleText="text-dark"
                />
                <ContrastRow
                  combo="White on Soft Sage"
                  ratio="2.36:1"
                  pass={false}
                  sampleBg="bg-soft-sage"
                  sampleText="text-white"
                />
                <ContrastRow
                  combo="White on Goldenrod"
                  ratio="3.19:1"
                  pass={false}
                  sampleBg="bg-goldenrod"
                  sampleText="text-white"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Max-width verification */}
      <section className="section-spacing">
        <div className="container-content">
          <span className="section-label">Layout</span>
          <h2 className="mb-8">Container Widths</h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-bold text-dark mb-2">
                container-content — max-width: 1200px
              </p>
              <div className="h-4 rounded bg-lifecare-green/20" />
            </div>

            <div className="container-prose mx-0">
              <p className="text-sm font-bold text-dark mb-2">
                container-prose — max-width: 720px
              </p>
              <div className="h-4 rounded bg-lifecare-green/40" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer placeholder */}
      <footer className="bg-dark py-8">
        <div className="container-content text-center">
          <p className="text-sm text-white/60 mb-0">
            Design System Test Page — Life Care Training — Layer 1
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ============================================================
   Helper Components (local to this test page)
   ============================================================ */

function ColourSwatch({
  name,
  hex,
  bgClass,
  textLight = false,
}: {
  name: string;
  hex: string;
  bgClass: string;
  textLight?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border">
      <div
        className={`${bgClass} flex h-24 items-end p-3`}
      >
        <span
          className={`text-xs font-bold ${textLight ? "text-white" : "text-dark"}`}
        >
          {hex}
        </span>
      </div>
      <div className="bg-white p-3">
        <p className="text-sm font-bold text-dark mb-0">{name}</p>
      </div>
    </div>
  );
}

function TierCard({
  tier,
  label,
  hex,
  borderClass,
}: {
  tier: number;
  label: string;
  hex: string;
  borderClass: string;
}) {
  return (
    <div
      className={`card border-l-4 ${borderClass}`}
    >
      <p className="text-sm font-bold text-body-text mb-1">Tier {tier}</p>
      <h3 className="text-lg">{label}</h3>
      <p className="mt-2 text-sm text-body-text mb-0">{hex}</p>
    </div>
  );
}

function ContrastRow({
  combo,
  ratio,
  pass,
  sampleBg,
  sampleText,
}: {
  combo: string;
  ratio: string;
  pass: boolean;
  sampleBg: string;
  sampleText: string;
}) {
  return (
    <tr className="border-b border-border">
      <td className="py-3 pr-4 text-body-text">{combo}</td>
      <td className="py-3 pr-4 font-bold text-dark">{ratio}</td>
      <td className="py-3 pr-4">
        <span
          className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${
            pass
              ? "bg-pale-green text-lifecare-green"
              : "bg-error/10 text-error"
          }`}
        >
          {pass ? "PASS" : "FAIL"}
        </span>
      </td>
      <td className="py-3">
        <span
          className={`inline-block rounded px-3 py-1 text-xs font-bold ${sampleBg} ${sampleText} border border-border`}
        >
          Sample
        </span>
      </td>
    </tr>
  );
}
