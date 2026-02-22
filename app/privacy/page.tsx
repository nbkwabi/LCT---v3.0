import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="section-spacing">
      <div className="container-prose">
        <h1>Privacy Policy</h1>

        <h2 className="mt-10">1. Who We Are</h2>
        <p>
          Life Care Training is a specialist healthcare training provider
          delivering face-to-face statutory and mandatory training to care homes
          across South East England.
        </p>
        <p>
          For the purposes of UK data protection law, the data controller is:
        </p>
        <p>
          Nathan Kwabi, trading as Life Care Training
          <br />
          Email:{" "}
          <a href="mailto:nathan@lifecaretraining.uk">
            nathan@lifecaretraining.uk
          </a>
          <br />
          Phone: <a href="tel:+447951559857">07951 559857</a>
        </p>

        <h2 className="mt-10">2. What Personal Data We Collect</h2>
        <p>
          We collect different types of personal data depending on how you
          interact with us:
        </p>

        <h3 className="mt-6">Website visitors</h3>
        <p>
          Your IP address, browser type, device information, pages visited, and
          referring website. This data is collected through analytics cookies
          (see our{" "}
          <Link href="/cookies">Cookie Policy</Link> for
          details).
        </p>

        <h3 className="mt-6">Enquiry form submissions</h3>
        <p>
          Your name, email address, phone number, job title, organisation name,
          and any details you include in your message.
        </p>

        <h3 className="mt-6">Care home clients (managers and booking contacts)</h3>
        <p>
          Name, job title, email address, phone number, organisation name,
          billing address, and correspondence relating to training bookings.
        </p>

        <h3 className="mt-6">Training delegates</h3>
        <p>
          Name, job title, employer name, attendance records, competency
          assessment results, engagement observations, and feedback form
          responses. This data is collected on-site during training sessions and
          through post-training follow-up assessments.
        </p>
        <p>
          We do not intentionally collect special category personal data (such as
          health information, ethnicity, or religious beliefs) through our
          website or training registration process. If competency assessments
          reveal information about a delegate&rsquo;s physical capability (for
          example, during manual handling practical assessments), this data is
          treated with additional care and processed only for the purpose of
          evidencing training competency.
        </p>

        <h2 className="mt-10">3. How and Why We Use Your Data</h2>
        <p>
          We only process personal data when we have a lawful basis to do so
          under UK GDPR Article 6.
        </p>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-dark">
                <th className="py-3 pr-4 font-bold text-dark">What we do</th>
                <th className="py-3 pr-4 font-bold text-dark">Why</th>
                <th className="py-3 font-bold text-dark">Lawful basis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Respond to enquiries</td>
                <td className="py-3 pr-4 text-body-text">To provide the information or quotation you requested</td>
                <td className="py-3 text-body-text">Article 6(1)(b) &mdash; pre-contractual steps</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Manage bookings, deliver training, issue invoices</td>
                <td className="py-3 pr-4 text-body-text">To fulfil our contractual obligations</td>
                <td className="py-3 text-body-text">Article 6(1)(b) &mdash; performance of a contract</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Collect delegate training data</td>
                <td className="py-3 pr-4 text-body-text">To deliver training and provide CQC-ready evidence</td>
                <td className="py-3 text-body-text">Article 6(1)(f) &mdash; legitimate interests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Send post-training follow-up assessments</td>
                <td className="py-3 pr-4 text-body-text">To support spaced retrieval learning</td>
                <td className="py-3 text-body-text">Article 6(1)(f) &mdash; legitimate interests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Send course information to enquirers</td>
                <td className="py-3 pr-4 text-body-text">To keep clients informed about relevant training</td>
                <td className="py-3 text-body-text">Article 6(1)(f) &mdash; legitimate interests (with opt-out)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Collect website analytics data</td>
                <td className="py-3 pr-4 text-body-text">To understand how visitors use our website</td>
                <td className="py-3 text-body-text">PECR statistical purposes exception</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Retain financial records</td>
                <td className="py-3 pr-4 text-body-text">To meet legal obligations for tax and accounting</td>
                <td className="py-3 text-body-text">Article 6(1)(c) &mdash; legal obligation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Legitimate interests explanation (delegate data):</strong>{" "}
          Delegates attend our training sessions as employees of our care home
          clients. They are not party to our contract &mdash; their employer is.
          We rely on legitimate interests because: (1) our legitimate interest is
          delivering and evidencing the training service, (2) processing delegate
          data is necessary for this purpose, and (3) delegates reasonably expect
          their training provider to record attendance and results. We have
          conducted a Legitimate Interests Assessment in accordance with ICO
          guidance.
        </p>

        <h2 className="mt-10">4. Who We Share Your Data With</h2>
        <p>
          We do not sell your personal data to anyone. We do not share your data
          with third parties for their marketing purposes.
        </p>
        <p>We may share your data with:</p>
        <ul>
          <li>
            <strong>Your employer (for delegates):</strong> Training records,
            competency assessments, and certificates are shared with the care
            home that booked the training.
          </li>
          <li>
            <strong>Service providers:</strong> Website hosting (Vercel),
            analytics (Google Analytics), email (Google Workspace), automation
            (n8n, self-hosted in the UK).
          </li>
          <li>
            <strong>Professional advisers:</strong> Accountants, legal advisers,
            and insurers where necessary.
          </li>
          <li>
            <strong>Law enforcement or regulators:</strong> Where required by
            law.
          </li>
        </ul>

        <h2 className="mt-10">5. International Data Transfers</h2>
        <p>
          Our website is hosted by Vercel, which serves content from European
          edge locations. Google Analytics data is processed by Google LLC in the
          United States under the UK International Data Transfer Agreement and
          Google&rsquo;s Data Processing Amendment.
        </p>
        <p>
          We do not otherwise transfer personal data outside the United Kingdom.
        </p>

        <h2 className="mt-10">6. How Long We Keep Your Data</h2>

        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-dark">
                <th className="py-3 pr-4 font-bold text-dark">Type of data</th>
                <th className="py-3 pr-4 font-bold text-dark">Retention period</th>
                <th className="py-3 font-bold text-dark">Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Statutory and mandatory training records</td>
                <td className="py-3 pr-4 text-body-text">10 years after training</td>
                <td className="py-3 text-body-text">NHS Records Management Code 2021</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Other training records</td>
                <td className="py-3 pr-4 text-body-text">6 years after training</td>
                <td className="py-3 text-body-text">NHS Records Management Code 2021</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Client contractual records</td>
                <td className="py-3 pr-4 text-body-text">6 years after contract ends</td>
                <td className="py-3 text-body-text">Limitation Act 1980</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Financial and tax records</td>
                <td className="py-3 pr-4 text-body-text">6 years plus current year</td>
                <td className="py-3 text-body-text">HMRC requirements</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Website enquiry data</td>
                <td className="py-3 pr-4 text-body-text">12 months after enquiry</td>
                <td className="py-3 text-body-text">Data minimisation</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Marketing contact data</td>
                <td className="py-3 pr-4 text-body-text">Until opt-out or 2 years inactivity</td>
                <td className="py-3 text-body-text">Legitimate interests</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Website analytics data</td>
                <td className="py-3 pr-4 text-body-text">2 months (GA4 setting)</td>
                <td className="py-3 text-body-text">DUAA statistical exception</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">Delegate feedback responses</td>
                <td className="py-3 pr-4 text-body-text">10 years (with training records)</td>
                <td className="py-3 text-body-text">Evidence of training quality</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          <strong>Why our retention periods are longer than typical:</strong>{" "}
          Care homes rely on our training records as evidence during CQC
          inspections. If we deleted records after a short period, care homes
          could fail inspections because they cannot evidence staff competency.
        </p>

        <h2 className="mt-10">7. Your Rights</h2>
        <p>Under UK data protection law, you have the right to:</p>
        <ul>
          <li><strong>Access your data</strong> &mdash; request a copy of the personal data we hold about you</li>
          <li><strong>Correct your data</strong> &mdash; ask us to correct inaccurate or incomplete data</li>
          <li><strong>Delete your data</strong> &mdash; ask us to delete your data (unless we have a legal obligation to retain it)</li>
          <li><strong>Object to processing</strong> &mdash; object where we rely on legitimate interests</li>
          <li><strong>Restrict processing</strong> &mdash; ask us to restrict how we use your data</li>
          <li><strong>Data portability</strong> &mdash; request your data in a structured format</li>
          <li><strong>Withdraw consent</strong> &mdash; where we rely on consent, you can withdraw at any time</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:nathan@lifecaretraining.uk">
            nathan@lifecaretraining.uk
          </a>
          . We will respond within one calendar month.
        </p>

        <h2 className="mt-10">8. Cookies and Analytics</h2>
        <p>
          Our website uses a small number of cookies for analytics purposes. We
          rely on the statistical purposes exception under PECR (as amended by
          the Data (Use and Access) Act 2025). For full details, see our{" "}
          <Link href="/cookies">Cookie Policy</Link>.
        </p>

        <h2 className="mt-10">9. How We Keep Your Data Safe</h2>
        <p>
          We take appropriate technical and organisational measures to protect
          your personal data, including:
        </p>
        <ul>
          <li>Secure, encrypted website (HTTPS)</li>
          <li>Access controls &mdash; only authorised individuals can access personal data</li>
          <li>Secure cloud-based tools with appropriate data processing agreements</li>
          <li>Regular review of data handling practices</li>
        </ul>

        <h2 className="mt-10">10. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be
          posted on this page with an updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2 className="mt-10">11. Complaints</h2>
        <p>
          If you are unhappy with how we have handled your personal data, please
          contact us first.
        </p>
        <p>
          You also have the right to lodge a complaint with the Information
          Commissioner&rsquo;s Office (ICO):
        </p>
        <ul>
          <li>
            Website:{" "}
            <a
              href="https://www.ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.ico.org.uk
            </a>
          </li>
          <li>Phone: 0303 123 1113</li>
        </ul>

        <p className="mt-12 text-sm text-body-text">
          Last updated: February 2026
        </p>
      </div>
    </section>
  );
}
