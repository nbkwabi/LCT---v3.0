import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  robots: { index: true, follow: true },
};

export default function AccessibilityPage() {
  return (
    <section className="section-spacing">
      <div className="container-prose">
        <h1>Accessibility Statement</h1>

        <h2 className="mt-10">1. About This Statement</h2>
        <p>
          Life Care Training is committed to making this website accessible to
          everyone, including people with disabilities. This statement explains
          what we have done to make our website accessible, what we know is not
          yet fully accessible, and how to contact us if you encounter a
          barrier.
        </p>

        <h2 className="mt-10">2. Our Standard</h2>
        <p>
          We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.2
          Level AA. This is a voluntary commitment &mdash; as a private
          business, we are not legally required to meet these specific standards.
          However, the Equality Act 2010 requires us to make reasonable
          adjustments so that disabled people are not disadvantaged when using
          our services, including our website.
        </p>

        <h2 className="mt-10">3. What We Have Done</h2>
        <p>
          Our website has been designed and built with accessibility in mind:
        </p>
        <ul>
          <li>All pages use clear heading structures so screen readers can navigate content easily</li>
          <li>All images have descriptive alternative text</li>
          <li>The website can be navigated using a keyboard alone</li>
          <li>Colour contrast meets WCAG 2.2 AA minimum contrast ratios</li>
          <li>Text can be resized up to 200% without loss of content or functionality</li>
          <li>Forms have clear labels and provide meaningful error messages</li>
          <li>A skip navigation link is provided to bypass the main menu</li>
          <li>The website is responsive and works across devices and screen sizes</li>
        </ul>

        <h2 className="mt-10">4. Known Limitations</h2>
        <p>
          We are aware of the following accessibility issues and are working to
          address them:
        </p>
        <ul>
          <li>
            Some tables (such as the data retention schedule on our Privacy
            Policy page) may not be fully optimised for screen readers on mobile
            devices. We are working to improve this.
          </li>
          <li>
            PDF documents (such as downloadable course catalogues) may not be
            fully accessible. If you need the content of a PDF in an alternative
            format, please contact us.
          </li>
        </ul>

        <h2 className="mt-10">5. How to Contact Us About Accessibility</h2>
        <p>
          If you have difficulty using any part of this website, or if you need
          information in an alternative format (such as large print, audio, or
          easy-read), please contact us:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:nathan@lifecaretraining.uk">
            nathan@lifecaretraining.uk
          </a>
          <br />
          Phone: <a href="tel:+447951559857">07951 559857</a>
        </p>
        <p>
          We will do our best to respond within 5 working days and to provide
          the information or assistance you need.
        </p>

        <h2 className="mt-10">6. Our Training Sessions</h2>
        <p>
          Accessibility is not limited to our website. Our face-to-face training
          sessions are designed to be inclusive and accessible to diverse
          learners, including:
        </p>
        <ul>
          <li>
            Delegates with limited literacy (we use visual aids, practical
            demonstrations, and verbal assessment)
          </li>
          <li>
            Delegates for whom English is a second language (we use clear
            language, visual supports, and check understanding throughout)
          </li>
          <li>
            Delegates with sensory or physical needs (we work with care homes to
            ensure suitable room setup, offer breaks, and provide seated options
            where needed)
          </li>
        </ul>
        <p>
          If a delegate has specific accessibility needs, please let us know when
          booking so we can make appropriate adjustments.
        </p>

        <h2 className="mt-10">7. Enforcement</h2>
        <p>
          If you are not satisfied with our response to your accessibility
          concern, you can contact the Equality Advisory Support Service (EASS):
        </p>
        <ul>
          <li>
            Website:{" "}
            <a
              href="https://www.equalityadvisoryservice.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              www.equalityadvisoryservice.com
            </a>
          </li>
          <li>Phone: 0808 800 0082</li>
        </ul>

        <h2 className="mt-10">8. How We Prepared This Statement</h2>
        <p>
          The website was tested using automated accessibility tools (Lighthouse,
          axe) and manual keyboard navigation testing. We have not yet
          commissioned a formal independent accessibility audit but plan to do so
          within 12 months of launch.
        </p>

        <p className="mt-12 text-sm text-body-text">
          Last updated: February 2026
        </p>
      </div>
    </section>
  );
}
