// LifeCare Training — JSON-LD Schema Generators
// Produces structured data for all page types.
// Consumed by SEO metadata in Next.js App Router pages.

import type { Course } from "./courses";

// ---------- Organisation (Homepage) ----------

export function generateOrganizationSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: "LifeCare Training",
    url: "https://lifecaretraining.uk",
    description:
      "Face-to-face statutory and mandatory training for CQC-registered care homes across London, Kent and South East England. MPharm-qualified trainer delivering 32 courses mapped to CQC Quality Statements.",
    telephone: "+447951559857",
    email: "nathan@lifecaretraining.uk",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Nathan Kwabi",
      jobTitle: "Founder & Lead Trainer",
      hasCredential: [
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "degree",
          name: "MPharm (Master of Pharmacy)",
        },
        {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "certificate",
          name: "Level 3 Award in Education and Training",
        },
      ],
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "Kent",
      addressCountry: "GB",
    },
    areaServed: [
      {
        "@type": "City",
        name: "London",
        containedInPlace: { "@type": "Country", name: "United Kingdom" },
      },
      { "@type": "AdministrativeArea", name: "Kent" },
      { "@type": "AdministrativeArea", name: "Surrey" },
      { "@type": "AdministrativeArea", name: "Essex" },
    ],
    priceRange: "£650–£1,100 per session",
    currenciesAccepted: "GBP",
    paymentAccepted: "Bank Transfer, Invoice",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 1,
    },
    knowsAbout: [
      "CQC compliance training",
      "Statutory and mandatory training",
      "Care home staff training",
      "Medication administration training",
      "Safeguarding adults",
      "Oliver McGowan Mandatory Training",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.89",
      bestRating: "5",
      ratingCount: "5000",
    },
    sameAs: [],
  };
}

// ---------- Service (Homepage) ----------

export function generateServiceSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "On-Site Care Home Training",
    description:
      "Face-to-face statutory and mandatory training delivered at your care home for groups of up to 15 delegates. Includes 10-week post-training competency follow-up with CQC evidence packs.",
    provider: {
      "@type": "EducationalOrganization",
      name: "LifeCare Training",
      url: "https://lifecaretraining.uk",
    },
    serviceType: "Professional Training",
    areaServed: [
      { "@type": "City", name: "London" },
      { "@type": "AdministrativeArea", name: "Kent" },
      { "@type": "AdministrativeArea", name: "Surrey" },
      { "@type": "AdministrativeArea", name: "Essex" },
    ],
    audience: {
      "@type": "Audience",
      audienceType: "Care home managers and operations directors",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Training Courses",
      itemListElement: [
        {
          "@type": "OfferCatalog",
          name: "Standard Mandatory (Tier 1)",
          description: "Half Day sessions — £650 per session",
        },
        {
          "@type": "OfferCatalog",
          name: "Core Care (Tier 2)",
          description: "Half Day sessions — £750 per session",
        },
        {
          "@type": "OfferCatalog",
          name: "Specialist Level 3 (Tier 3)",
          description: "Full Day sessions — £950 per session",
        },
        {
          "@type": "OfferCatalog",
          name: "Clinical / MPharm Premium (Tier 4)",
          description: "Full Day sessions — £1,100 per session",
        },
      ],
    },
  };
}

// ---------- Course (Individual course pages) ----------

export function generateCourseSchema(course: Course): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.name,
    description: course.description,
    url: `https://lifecaretraining.uk/courses/${course.slug}`,
    provider: {
      "@type": "EducationalOrganization",
      name: "LifeCare Training",
      url: "https://lifecaretraining.uk",
    },
    educationalLevel: course.tier >= 3 ? "Advanced" : "Introductory",
    courseMode: "In-person",
    inLanguage: "en-GB",
    offers: {
      "@type": "Offer",
      price: course.priceHalfDay || course.priceFullDay,
      priceCurrency: "GBP",
      availability: "https://schema.org/InStock",
      description: `Per session for up to 15 delegates. ${
        course.duration === "full-day"
          ? "Full Day (approx. 6 hrs)"
          : "Half Day (approx. 3–4 hrs)"
      }`,
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Onsite",
      courseWorkload: course.duration === "full-day" ? "PT6H" : "PT4H",
      location: {
        "@type": "Place",
        name: "Delivered at your care home",
      },
    },
  };
}

// ---------- FAQ (FAQ page) ----------

export function generateFAQSchema(
  faqs: Array<{ question: string; answer: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

// ---------- Breadcrumb (All pages) ----------

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// ---------- Person (About page) ----------

export function generatePersonSchema(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Nathan Kwabi",
    jobTitle: "Founder & Lead Trainer",
    worksFor: {
      "@type": "EducationalOrganization",
      name: "LifeCare Training",
      url: "https://lifecaretraining.uk",
    },
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "MPharm (Master of Pharmacy)",
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certificate",
        name: "Level 3 Award in Education and Training",
      },
    ],
    knowsAbout: [
      "Pharmacy",
      "Medication administration",
      "CQC compliance",
      "Healthcare training delivery",
      "Safeguarding",
    ],
  };
}

// ---------- JsonLd Component (Server Component compatible) ----------

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
