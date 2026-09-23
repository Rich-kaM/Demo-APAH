import Link from "next/link";
import { dictionaries, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function AboutPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].about;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Notre mission" : "Our mission"}</p>
          <h2>{lang === "fr" ? "Conseil stratégique au service des infrastructures utiles" : "Strategic advisory for the infrastructure that matters"}</h2>
        </div>
        <div className="cards-grid three-up">
          {[
            {
              title: lang === "fr" ? "Vision sectorielle" : "Sector vision",
              text:
                lang === "fr"
                  ? "Nous aidons les institutions et les acteurs industriels à prendre des décisions énergétiques plus fiables, plus transparentes et plus durables."
                  : "We help institutions and industrial actors make more reliable, transparent and sustainable energy decisions.",
            },
            {
              title: lang === "fr" ? "Expérience de terrain" : "Field experience",
              text:
                lang === "fr"
                  ? "Notre approche associe analyse, gouvernance, modélisation et compréhension des réalités locales pour des recommandations utiles et crédibles."
                  : "Our approach blends analysis, governance, modelling and local context to produce actionable and credible recommendations.",
            },
            {
              title: lang === "fr" ? "Impact durable" : "Lasting impact",
              text:
                lang === "fr"
                  ? "Nous mobilisons les outils du conseil, de la donnée et de la finance pour renforcer la performance des réseaux et des actifs énergétiques."
                  : "We combine advisory, data and finance expertise to strengthen network performance and the resilience of energy assets.",
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
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Approche" : "Approach"}</p>
          <h2>{lang === "fr" ? "Une manière de travailler structurée et claire" : "A structured and practical working model"}</h2>
        </div>
        <div className="cards-grid three-up">
          {[
            lang === "fr" ? "Analyse des marchés et des besoins" : "Market and need analysis",
            lang === "fr" ? "Études techniques et financières" : "Technical and financial studies",
            lang === "fr" ? "Plan d’action et mise en œuvre" : "Action plan and implementation support",
          ].map((step, index) => (
            <article key={step} className="info-card">
              <p className="eyebrow accent">0{index + 1}</p>
              <h3>{step}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card-actions">
          <Link href={`/${lang}/contact`} className="button primary">{dict.ctaPrimary}</Link>
          <Link href={`/${lang}/experts`} className="button secondary">{dict.meetExperts}</Link>
        </div>
      </section>
    </SitePageShell>
  );
}
