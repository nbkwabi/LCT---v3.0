import type { Metadata } from "next";
import Link from "next/link";
import { AnalyticsOptOut } from "@/components/analytics/AnalyticsOptOut";

export const metadata: Metadata = {
  title: "Cookie Policy",
  robots: { index: true, follow: true },
};

export default function CookiePolicyPage() {
  return (
    <section className="section-spacing">
      <div className="container-prose">
        <h1>Cookie Policy</h1>

        <h2 className="mt-10">1. About This Policy</h2>
        <p>
          This Cookie Policy explains what cookies our website uses, why we use
          them, and how you can opt out. It should be read alongside our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>

        <h2 className="mt-10">2. Who We Are</h2>
        <p>
          This website is operated by Nathan Kwabi, trading as Life Care
          Training.
        </p>

        <h2 className="mt-10">3. What Are Cookies?</h2>
        <p>
          Cookies are small text files placed on your device when you visit a
          website. They help the website recognise your device and remember
          certain information.
        </p>

        <h2 className="mt-10">4. Cookies We Use</h2>
        <p>
          Our website uses a small number of cookies. We do not use advertising
          cookies, tracking cookies, or social media cookies.
        </p>

        <h3 className="mt-6">Essential Cookies</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-dark">
                <th className="py-3 pr-4 font-bold text-dark">Cookie</th>
                <th className="py-3 pr-4 font-bold text-dark">Provider</th>
                <th className="py-3 pr-4 font-bold text-dark">Purpose</th>
                <th className="py-3 font-bold text-dark">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">lct_analytics_optout</td>
                <td className="py-3 pr-4 text-body-text">Life Care Training</td>
                <td className="py-3 pr-4 text-body-text">Remembers your analytics opt-out preference</td>
                <td className="py-3 text-body-text">1 year</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="mt-6">Analytics Cookies</h3>
        <div className="overflow-x-auto my-6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b-2 border-dark">
                <th className="py-3 pr-4 font-bold text-dark">Cookie</th>
                <th className="py-3 pr-4 font-bold text-dark">Provider</th>
                <th className="py-3 pr-4 font-bold text-dark">Purpose</th>
                <th className="py-3 font-bold text-dark">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">_ga</td>
                <td className="py-3 pr-4 text-body-text">Google Analytics</td>
                <td className="py-3 pr-4 text-body-text">Distinguishes unique visitors</td>
                <td className="py-3 text-body-text">2 years</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-3 pr-4 text-body-text">_ga_N6SRNT32LX</td>
                <td className="py-3 pr-4 text-body-text">Google Analytics</td>
                <td className="py-3 pr-4 text-body-text">Maintains session state</td>
                <td className="py-3 text-body-text">2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p>
          We also use Vercel Web Analytics, which collects anonymous page view
          data without using cookies or tracking individuals.
        </p>

        <h2 className="mt-10">5. Our Legal Basis for Analytics Cookies</h2>
        <p>
          We rely on the statistical purposes exception under the Privacy and
          Electronic Communications Regulations (as amended by the Data (Use and
          Access) Act 2025, commenced 5 February 2026).
        </p>

        <h2 className="mt-10">6. How to Opt Out</h2>
        <p>
          You can opt out of analytics cookies at any time using the toggle
          below.
        </p>

        <div
          id="analytics-opt-out"
          className="my-8 rounded-lg border border-border bg-pale-green p-6"
        >
          <AnalyticsOptOut />
        </div>

        <p>When you opt out:</p>
        <ul>
          <li>Google Analytics cookies are removed from your browser</li>
          <li>The Google Analytics script will not load on future visits</li>
          <li>Your preference is remembered via the lct_analytics_optout cookie</li>
          <li>Vercel Web Analytics continues (no cookies, no personal data)</li>
        </ul>

        <h2 className="mt-10">7. Cookies Set by Third Parties</h2>
        <p>
          Our website does not embed social media widgets, video players, or
          other third-party content that sets cookies.
        </p>

        <h2 className="mt-10">8. Changes to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. Changes will be
          posted on this page with an updated &ldquo;Last updated&rdquo; date.
        </p>

        <h2 className="mt-10">9. Contact Us</h2>
        <p>
          Email:{" "}
          <a href="mailto:nathan@lifecaretraining.uk">
            nathan@lifecaretraining.uk
          </a>
          <br />
          Phone: <a href="tel:+447951559857">07951 559857</a>
        </p>
        <p>
          You can also contact the ICO at{" "}
          <a
            href="https://www.ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ico.org.uk
          </a>
          .
        </p>

        <p className="mt-12 text-sm text-body-text">
          Last updated: February 2026
        </p>
      </div>
    </section>
  );
}
