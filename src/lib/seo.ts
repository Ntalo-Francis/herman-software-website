import { siteConfig } from "@/data/site-config";

interface SEOParams {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generatePageMetadata({ title, description, path, ogImage, noIndex }: SEOParams) {
  const url = path ? `${siteConfig.url}${path}` : siteConfig.url;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_UG",
      type: "website" as const,
      images: ogImage
        ? [{ url: ogImage, width: 1200, height: 630, alt: title }]
        : [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ogImage ? [ogImage] : [siteConfig.ogImage],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

// Structured Data Generators
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Haji Tarmchi",
      addressLocality: "Jinja",
      addressCountry: "UG",
    },
    telephone: siteConfig.phone,
    email: siteConfig.email,
    url: siteConfig.url,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.facebook,
    ],
  };
}

export function generateServiceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url,
    areaServed: {
      "@type": "Country",
      name: "Uganda",
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
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

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
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