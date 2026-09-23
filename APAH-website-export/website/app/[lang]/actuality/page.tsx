import Link from "next/link";
import { dictionaries, newsItems, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ActualityPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].actuality;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="cards-grid three-up">
          {newsItems[lang].map((item) => (
            <article key={item.title} className="info-card">
              <p className="eyebrow accent">{item.date}</p>
              <h3>{item.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="card-actions">
          <Link href={`/${lang}/contact`} className="button primary">{dict.subscribeNewsletter}</Link>
          <Link href={`/${lang}/insights`} className="button secondary">{lang === "fr" ? "Voir les analyses" : "View insights"}</Link>
        </div>
      </section>
    </SitePageShell>
  );
}
