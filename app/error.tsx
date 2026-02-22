"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] items-center">
      <div className="mx-auto max-w-lg px-6 py-16 text-center">
        <h1>Something went wrong</h1>
        <p className="mt-4 text-body-text">
          We&rsquo;re sorry &mdash; an unexpected error occurred. Please try
          again, or head back to the homepage.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4">
          <button type="button" onClick={reset} className="btn-primary">
            Try Again
          </button>
          <Link
            href="/"
            className="text-lifecare-green no-underline hover:underline"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
}
