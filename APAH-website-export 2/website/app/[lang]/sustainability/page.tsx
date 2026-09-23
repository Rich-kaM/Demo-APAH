import Link from "next/link";
import { dictionaries, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function SustainabilityPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].sustainability;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="cards-grid three-up">
          {[
            {
              title: lang === "fr" ? "Efficacité énergétique" : "Energy efficiency",
              text: lang === "fr" ? "Optimisation des consommations et réduction des coûts pour les actifs industriels et publics." : "Consumption optimization and cost reduction for public and industrial assets.",
            },
            {
              title: lang === "fr" ? "Intégration des énergies renouvelables" : "Renewable integration",
              text: lang === "fr" ? "Analyse des solutions de production, de stockage et d’intégration dans les réseaux existants." : "Assessment of generation, storage and integration options within existing networks.",
            },
            {
              title: lang === "fr" ? "Décarbonation industrielle" : "Industrial decarbonization",
              text: lang === "fr" ? "Planification des trajectoires de réduction des émissions et de création de valeur durable." : "Planning pathways for emissions reduction and long-term value creation.",
            },
          ].map((item) => (
            <article key={item.title} className="info-card">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="card-actions">
          <Link href={`/${lang}/services-industries`} className="button primary">{lang === "fr" ? "Voir nos services" : "See our services"}</Link>
          <Link href={`/${lang}/contact`} className="button secondary">{dict.ctaPrimary}</Link>
        </div>
      </section>
    </SitePageShell>
  );
}
