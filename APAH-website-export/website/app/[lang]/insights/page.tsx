import Link from "next/link";
import { dictionaries, insightArticles, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function InsightsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].insights;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="cards-grid three-up">
          {insightArticles[lang].map((article) => (
            <article key={article.title} className="info-card">
              <p className="eyebrow accent">{article.category}</p>
              <h3>{article.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="card-actions">
          <Link href={`/${lang}/actuality`} className="button primary">{lang === "fr" ? "Voir l’actualité" : "View actuality"}</Link>
          <Link href={`/${lang}/contact`} className="button secondary">{dict.ctaSecondary}</Link>
        </div>
      </section>
    </SitePageShell>
  );
}
