import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return {
    title: t("metadata.title"),
    description: t("metadata.description"),
  };
}

export default async function PrivacidadPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "privacy" });

  return (
    <main className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          {t("backToHome")}
        </Link>

        <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
        <p className="text-muted-foreground mb-12">{t("lastUpdated")}</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section1.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("section1.content")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {(t.raw("section1.items") as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section2.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("section2.content")}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {(t.raw("section2.items") as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section3.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {t("section3.content")}
            </p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {(t.raw("section3.items") as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section4.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("section4.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section5.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("section5.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section6.title")}</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">{t("section6.content")}</p>
            <ul className="list-disc list-inside text-muted-foreground space-y-2">
              {(t.raw("section6.items") as string[]).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section7.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("section7.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section8.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("section8.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section9.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("section9.content")}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4 text-foreground">{t("section10.title")}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t("section10.content")}{" "}
              <a href={`mailto:${t("section10.email")}`} className="text-primary hover:underline">
                {t("section10.email")}
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
