"use client";

import { useState, type FormEvent } from "react";
import { enquirySchema } from "@/lib/validation";
import { ENQUIRY_WEBHOOK_URL } from "@/lib/constants";
import { trackEnquirySubmit } from "@/lib/analytics";

type SubmitState = "idle" | "loading" | "success" | "error";

export function EnquiryForm() {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<
    Record<string, string[]>
  >({});

  const sourceUrl =
    typeof window !== "undefined" ? window.location.href : "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitState("loading");
    setSubmitError(null);
    setFieldErrors({});

    const formData = new FormData(e.currentTarget);
    const raw = {
      careHomeName: formData.get("careHomeName") as string,
      contactName: formData.get("contactName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      numberOfStaff: (formData.get("numberOfStaff") as string) || undefined,
      message: (formData.get("message") as string) || undefined,
      companyWebsite: formData.get("companyWebsite") as string,
      gdprConsent: formData.get("gdprConsent") === "on" ? true : false,
      sourceUrl: (formData.get("sourceUrl") as string) || undefined,
    };

    const result = enquirySchema.safeParse(raw);

    if (!result.success) {
      const errors: Record<string, string[]> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as string;
        if (!errors[key]) errors[key] = [];
        errors[key].push(issue.message);
      }
      setFieldErrors(errors);
      setSubmitState("idle");
      return;
    }

    // Honeypot check
    if (raw.companyWebsite) {
      setSubmitState("success");
      return;
    }

    try {
      const response = await fetch(ENQUIRY_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(result.data),
      });

      if (!response.ok) {
        throw new Error("Failed to send enquiry");
      }

      trackEnquirySubmit(window.location.pathname);
      setSubmitState("success");
    } catch {
      setSubmitError(
        "Something went wrong. Please try again or call Nathan directly on 07951 559857.",
      );
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <div className="rounded-lg border-2 border-lifecare-green bg-pale-green p-8 text-center">
        <h3 className="mb-3 text-2xl font-bold text-dark">
          Thank you for your enquiry
        </h3>
        <p className="mb-0 text-body-text">
          Nathan will respond personally within one working day. Check your
          email for a confirmation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {/* Care Home Name */}
      <div>
        <label
          htmlFor="careHomeName"
          className="mb-1 block text-sm font-bold text-dark"
        >
          Care home name <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="careHomeName"
          name="careHomeName"
          required
          aria-describedby={
            fieldErrors.careHomeName ? "careHomeName-error" : undefined
          }
          aria-invalid={fieldErrors.careHomeName ? "true" : undefined}
          className="w-full rounded-lg border border-border p-3 text-body-text focus:outline-2 focus:outline-lifecare-green"
        />
        {fieldErrors.careHomeName && (
          <p
            id="careHomeName-error"
            role="alert"
            className="mt-1 text-sm text-error"
          >
            {fieldErrors.careHomeName[0]}
          </p>
        )}
      </div>

      {/* Contact Name */}
      <div>
        <label
          htmlFor="contactName"
          className="mb-1 block text-sm font-bold text-dark"
        >
          Your name <span className="text-error">*</span>
        </label>
        <input
          type="text"
          id="contactName"
          name="contactName"
          required
          aria-describedby={
            fieldErrors.contactName ? "contactName-error" : undefined
          }
          aria-invalid={fieldErrors.contactName ? "true" : undefined}
          className="w-full rounded-lg border border-border p-3 text-body-text focus:outline-2 focus:outline-lifecare-green"
        />
        {fieldErrors.contactName && (
          <p
            id="contactName-error"
            role="alert"
            className="mt-1 text-sm text-error"
          >
            {fieldErrors.contactName[0]}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-1 block text-sm font-bold text-dark"
        >
          Email address <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          aria-invalid={fieldErrors.email ? "true" : undefined}
          className="w-full rounded-lg border border-border p-3 text-body-text focus:outline-2 focus:outline-lifecare-green"
        />
        {fieldErrors.email && (
          <p
            id="email-error"
            role="alert"
            className="mt-1 text-sm text-error"
          >
            {fieldErrors.email[0]}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label
          htmlFor="phone"
          className="mb-1 block text-sm font-bold text-dark"
        >
          Phone number <span className="text-error">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          placeholder="07xxx xxxxxx"
          aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
          aria-invalid={fieldErrors.phone ? "true" : undefined}
          className="w-full rounded-lg border border-border p-3 text-body-text focus:outline-2 focus:outline-lifecare-green"
        />
        {fieldErrors.phone && (
          <p
            id="phone-error"
            role="alert"
            className="mt-1 text-sm text-error"
          >
            {fieldErrors.phone[0]}
          </p>
        )}
      </div>

      {/* Number of Staff */}
      <div>
        <label
          htmlFor="numberOfStaff"
          className="mb-1 block text-sm font-bold text-dark"
        >
          Approximate number of staff
        </label>
        <input
          type="text"
          id="numberOfStaff"
          name="numberOfStaff"
          placeholder="Optional \u2014 helps us tailor the proposal"
          className="w-full rounded-lg border border-border p-3 text-body-text focus:outline-2 focus:outline-lifecare-green"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="mb-1 block text-sm font-bold text-dark"
        >
          Anything else we should know?
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          placeholder="e.g. specific courses you need, upcoming inspection, training gaps"
          className="w-full rounded-lg border border-border p-3 text-body-text focus:outline-2 focus:outline-lifecare-green"
        />
      </div>

      {/* Honeypot */}
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
      >
        <label htmlFor="companyWebsite">Company website</label>
        <input
          type="text"
          id="companyWebsite"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* Source URL */}
      <input type="hidden" name="sourceUrl" value={sourceUrl} />

      {/* GDPR Consent */}
      <div>
        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            id="gdprConsent"
            name="gdprConsent"
            aria-describedby={
              fieldErrors.gdprConsent ? "gdprConsent-error" : undefined
            }
            aria-invalid={fieldErrors.gdprConsent ? "true" : undefined}
            className="mt-1 h-5 w-5 shrink-0 rounded border-border accent-lifecare-green"
          />
          <label htmlFor="gdprConsent" className="text-sm text-body-text">
            I agree to Life Care Training contacting me about training
            services <span className="text-error">*</span>
          </label>
        </div>
        {fieldErrors.gdprConsent && (
          <p
            id="gdprConsent-error"
            role="alert"
            className="mt-1 text-sm text-error"
          >
            {fieldErrors.gdprConsent[0]}
          </p>
        )}
      </div>

      {/* Submit Error */}
      {submitState === "error" && submitError && (
        <p role="alert" className="text-sm text-error">
          {submitError}
        </p>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={submitState === "loading"}
        className="btn-primary min-h-[44px] w-full"
      >
        {submitState === "loading" ? "Sending..." : "Send My Enquiry"}
      </button>

      <p className="text-center text-sm text-body-text">
        Nathan responds personally within one working day. No sales team, no
        automated emails.
      </p>
    </form>
  );
}
