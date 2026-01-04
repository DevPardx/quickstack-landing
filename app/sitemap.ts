import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://quickstack.agency";
  const locales = ["en", "es"];

  const routes = locales.map((locale) => ({
    url: `${baseUrl}/${locale}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 1.0,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
  }));

  return routes;
}
