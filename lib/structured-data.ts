export function getOrganizationSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "QuickStack",
    url: `https://quickstack.agency/${locale}`,
    logo: "https://quickstack.agency/logos/horizontal-dark.png",
    description:
      locale === "en"
        ? "Fast full-stack development for startups"
        : "Desarrollo full-stack rápido para startups",
    address: {
      "@type": "PostalAddress",
      addressLocality: "San Salvador",
      addressCountry: "SV",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "projects@quickstack.agency",
    },
    sameAs: ["https://www.linkedin.com/in/dev-pardx/"],
  };
}

export function getServiceSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Web Development",
    provider: {
      "@type": "Organization",
      name: "QuickStack",
    },
    areaServed: "Worldwide",
    offers: [
      {
        "@type": "Offer",
        name: locale === "en" ? "Landing Pro" : "Landing Pro",
        price: "500",
        priceCurrency: "USD",
        description:
          locale === "en"
            ? "Professional landing page in 1 week"
            : "Landing page profesional en 1 semana",
      },
      {
        "@type": "Offer",
        name: locale === "en" ? "MVP Starter" : "MVP Starter",
        price: "1200",
        priceCurrency: "USD",
        description:
          locale === "en"
            ? "MVP development in 2-3 weeks"
            : "Desarrollo de MVP en 2-3 semanas",
      },
      {
        "@type": "Offer",
        name: locale === "en" ? "Custom Development" : "Desarrollo Custom",
        price: "1500",
        priceCurrency: "USD",
        description:
          locale === "en"
            ? "Custom full-stack development"
            : "Desarrollo full-stack personalizado",
      },
    ],
  };
}

export function getWebSiteSchema(locale: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "QuickStack",
    url: `https://quickstack.agency/${locale}`,
    inLanguage: locale === "en" ? "en-US" : "es-ES",
  };
}
