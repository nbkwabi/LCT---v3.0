import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-pale-green">
      <div className="mx-auto max-w-lg px-6 py-16 text-center">
        <h1>We can&rsquo;t find that page</h1>
        <p className="mt-4 text-body-text">
          The page you&rsquo;re looking for may have been moved or doesn&rsquo;t
          exist. Let&rsquo;s get you back on track.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <Link href="/courses" className="btn-primary">
            Browse Our Courses
          </Link>
          <Link
            href="/"
            className="text-lifecare-green no-underline hover:underline"
          >
            Return to Homepage
          </Link>
          <Link
            href="/enquiry"
            className="text-sm text-body-text no-underline hover:underline"
          >
            Looking for something specific? Get in touch
          </Link>
        </div>
      </div>
    </section>
  );
}
