import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { defaultLocale, locales, pageDescriptions, pageLabels, type Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale = locales.includes(lang as Locale) ? (lang as Locale) : defaultLocale;
  const label = pageLabels[locale].home;

  return {
    title: `${label} | Africa Power Advisory Holding`,
    description: pageDescriptions[locale].home,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: "/fr",
        en: "/en",
        "x-default": "/fr",
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  return <div lang={lang}>{children}</div>;
}
