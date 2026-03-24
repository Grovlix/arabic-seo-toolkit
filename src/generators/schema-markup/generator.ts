import type {
  FAQSchemaInput,
  OrganizationSchemaInput,
  ProductSchemaInput
} from "../../types/audit.types";

export function generateProductSchema(input: ProductSchemaInput) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: input.name,
      description: input.description,
      image: input.image,
      sku: input.sku,
      brand: input.brand ? { "@type": "Brand", name: input.brand } : undefined,
      offers:
        input.price && input.currency
          ? {
              "@type": "Offer",
              price: input.price,
              priceCurrency: input.currency,
              availability: input.availability ?? "https://schema.org/InStock",
              url: input.url
            }
          : undefined
    },
    null,
    2
  );
}

export function generateOrganizationSchema(input: OrganizationSchemaInput) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: input.name,
      url: input.url,
      logo: input.logo,
      sameAs: input.sameAs,
      contactPoint: input.contactEmail
        ? [{ "@type": "ContactPoint", email: input.contactEmail, contactType: "customer support" }]
        : undefined
    },
    null,
    2
  );
}

export function generateFAQSchema(input: FAQSchemaInput) {
  return JSON.stringify(
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: input.questions.map((entry) => ({
        "@type": "Question",
        name: entry.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: entry.answer
        }
      }))
    },
    null,
    2
  );
}

