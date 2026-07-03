import type { Metadata } from "next";
import { notFound } from "next/navigation";
import SiteHome from "@/app/components/SiteHome";
import { copies, localePath, type Locale } from "@/app/data/i18n";

const translatedLocales = ["en", "fr", "es"] as const;

export function generateStaticParams() {
  return translatedLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!translatedLocales.includes(lang as (typeof translatedLocales)[number])) {
    return {};
  }
  const locale = lang as Locale;
  const copy = copies[locale];

  return {
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: {
      canonical: localePath(locale),
      languages: {
        "it-IT": "/",
        "en-GB": "/en",
        "fr-FR": "/fr",
        "es-ES": "/es",
      },
    },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      url: localePath(locale),
      locale: locale === "en" ? "en_GB" : locale === "fr" ? "fr_FR" : "es_ES",
      images: ["/images/palazzo/facciata.jpg"],
    },
  };
}

export default async function LocalizedPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!translatedLocales.includes(lang as (typeof translatedLocales)[number])) {
    notFound();
  }
  return <SiteHome locale={lang as Locale} />;
}
