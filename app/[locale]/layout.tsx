import type React from "react";
import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { NextIntlClientProvider } from "next-intl";
import { getTranslations, getMessages } from "next-intl/server";
import { getOrganizationSchema, getServiceSchema, getWebSiteSchema } from "@/lib/structured-data";
import "../globals.css";

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" }
  ]
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
    generator: "QuickStack",
    icons: {
      icon: [
        {
          url: "/logos/logo-light.png",
          media: "(prefers-color-scheme: light)",
        },
        {
          url: "/logos/logo-dark.png",
          media: "(prefers-color-scheme: dark)",
        }
      ],
    },
    alternates: {
      canonical: `https://quickstack.agency/${locale}`,
      languages: {
        "en": "https://quickstack.agency/en",
        "es": "https://quickstack.agency/es",
        "x-default": "https://quickstack.agency/en"
      }
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1
      }
    },
  };
}

export default async function LocaleLayout({
  children,
  params
}: Props) {
  const { locale } = await params;
  const messages = await getMessages();
  const structuredData = [
    getOrganizationSchema(locale),
    getServiceSchema(locale),
    getWebSiteSchema(locale)
  ];

  return (
    <html lang={locale}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
      </head>
      <body className={"font-sans antialiased"}>
        <NextIntlClientProvider messages={messages}>
          {children}
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
