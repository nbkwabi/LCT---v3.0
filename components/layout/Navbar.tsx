"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, CTA, SITE } from "@/lib/constants";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        hamburgerRef.current?.focus();
        return;
      }

      if (e.key !== "Tab" || !menuRef.current) return;

      const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    },
    []
  );

  return (
    <nav
      aria-label="Main navigation"
      className={`sticky top-0 z-50 w-full border-b border-border bg-white transition-shadow duration-200 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container-content flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-lg font-bold text-dark no-underline hover:text-dark"
        >
          Life Care Training
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              className={`text-sm font-medium no-underline transition-colors duration-200 ${
                pathname === item.href
                  ? "text-lifecare-green"
                  : "text-body-text hover:text-lifecare-green"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Link href={CTA.primary.href} className="btn-primary text-sm">
            {CTA.primary.text}
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={SITE.phoneHref}
            className="flex h-11 w-11 items-center justify-center rounded-lg text-body-text no-underline hover:text-lifecare-green"
            aria-label="Call Life Care Training"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                clipRule="evenodd"
              />
            </svg>
          </a>

          <Link href="/enquiry" className="btn-primary px-3 py-1.5 text-xs">
            Enquire
          </Link>

          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Open menu"
            className="flex h-11 w-11 items-center justify-center rounded-lg text-dark hover:text-lifecare-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      {isMobileMenuOpen && (
        <div
          ref={menuRef}
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          className="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
        >
          <div className="flex h-16 items-center justify-between px-6">
            <Link
              href="/"
              className="text-lg font-bold text-dark no-underline hover:text-dark"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Life Care Training
            </Link>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                hamburgerRef.current?.focus();
              }}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-lg text-dark hover:text-lifecare-green"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-6 w-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <div className="flex flex-1 flex-col gap-1 px-6 pt-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? "page" : undefined}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex h-12 items-center rounded-lg px-4 text-lg font-medium no-underline transition-colors duration-200 ${
                  pathname === item.href
                    ? "bg-pale-green text-lifecare-green"
                    : "text-body-text hover:bg-pale-green hover:text-lifecare-green"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-6">
              <Link
                href={CTA.primary.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                {CTA.primary.text}
              </Link>
            </div>

            <div className="mt-4 text-center">
              <a
                href={SITE.phoneHref}
                className="text-sm text-body-text no-underline hover:text-lifecare-green"
              >
                {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
