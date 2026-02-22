import Link from "next/link";
import { SITE, FOOTER_LINKS } from "@/lib/constants";

const quickLinks = [...FOOTER_LINKS.services, ...FOOTER_LINKS.company];

const trustBadges = [
  "Enhanced DBS Checked",
  "Professionally Insured",
  "ICO Registered",
];

export function Footer() {
  return (
    <footer className="bg-dark text-white" role="contentinfo">
      <div className="container-content section-spacing">
        {/* Logo */}
        <p className="mb-10 text-xl font-bold">Life Care Training</p>

        {/* Link columns */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Quick Links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="list-none space-y-3 p-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Areas We Cover */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Areas We Cover
            </h3>
            <ul className="list-none space-y-3 p-0">
              {FOOTER_LINKS.areas.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>
            <ul className="list-none space-y-3 p-0">
              <li>
                <a
                  href={SITE.phoneHref}
                  className="text-sm text-white/70 no-underline transition-colors duration-200 hover:text-white"
                >
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={SITE.emailHref}
                  className="text-sm text-white/70 no-underline transition-colors duration-200 hover:text-white"
                >
                  {SITE.email}
                </a>
              </li>
              <li>
                <p className="mb-0 text-sm text-white/70">
                  Serving London, Kent, Surrey &amp; Essex
                </p>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">
              Legal
            </h3>
            <ul className="list-none space-y-3 p-0">
              {FOOTER_LINKS.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 no-underline transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-4 border-t border-white/20 pt-8">
          {trustBadges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-white/20 pt-8 text-center">
          <p className="mb-1 text-sm text-white/50">
            &copy; 2026 Life Care Training. All rights reserved.
          </p>
          <p className="mb-0 text-xs text-white/40">
            Nathan Kwabi trading as Life Care Training
          </p>
        </div>
      </div>
    </footer>
  );
}
