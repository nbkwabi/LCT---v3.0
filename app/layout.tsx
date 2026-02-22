import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Life Care Training | Face-to-Face Healthcare Training",
    template: "%s | Life Care Training",
  },
  description:
    "CQC-aligned face-to-face healthcare training for care homes across London, Kent, Surrey and Essex. MPharm-qualified trainer delivering 32 courses with full evidence packs.",
  openGraph: {
    title: "Life Care Training | Face-to-Face Healthcare Training",
    description:
      "CQC-aligned face-to-face healthcare training for care homes across London, Kent, Surrey and Essex.",
    url: "https://lifecaretraining.uk",
    siteName: "Life Care Training",
    locale: "en_GB",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body>
        {/* Skip navigation — sr-only, visible on focus */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-lifecare-green focus:px-4 focus:py-2 focus:text-white focus:outline-none"
        >
          Skip to main content
        </a>

        {/* Navbar will go here (Layer 2) */}

        <main id="main-content">{children}</main>

        {/* Footer will go here (Layer 2) */}
      </body>
    </html>
  );
}
