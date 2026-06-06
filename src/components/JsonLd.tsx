export function OrganizationJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://emergedigital.in",
    name: "Emerge Digital",
    description:
      "Tamil Nadu's only digital marketing agency exclusively for hospitals, clinics, and healthcare providers.",
    url: "https://emergedigital.in",
    telephone: "+919994445555",
    email: "hello@emergedigital.in",
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHours: "Mo-Sa 09:00-19:00",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No. 42, Anna Nagar East",
      addressLocality: "Chennai",
      addressRegion: "Tamil Nadu",
      postalCode: "600102",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 13.0827,
      longitude: 80.2707,
    },
    areaServed: [
      "Chennai", "Coimbatore", "Madurai", "Salem", "Trichy",
      "Tirunelveli", "Vellore", "Erode", "Tamil Nadu",
    ],
    serviceType: [
      "Healthcare Digital Marketing",
      "Hospital SEO",
      "Medical Google Ads",
      "Healthcare Social Media Marketing",
      "Hospital Reputation Management",
      "Healthcare Website Design",
    ],
    sameAs: [
      "https://www.facebook.com/emergedigitalin",
      "https://www.instagram.com/emergedigital",
      "https://www.linkedin.com/company/emerge-digital",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "140",
      bestRating: "5",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(({ q, a }) => ({
      "@type": "Question",
      name: q,
      acceptedAnswer: { "@type": "Answer", text: a },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
