import Link from "next/link";
import { dictionaries, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ServicesIndustriesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang]["services-industries"];

  const services = [
    {
      title: lang === "fr" ? "Conseil en énergie" : "Energy Advisory",
      description:
        lang === "fr"
          ? "Analyse de marché, scénarios, faisabilité et stratégie d’investissement pour la puissance et la transition énergétique."
          : "Market analysis, scenario planning, feasibility studies and strategic investment support for power and energy transition.",
    },
    {
      title: lang === "fr" ? "Systèmes électriques et infrastructure" : "Power Systems & Infrastructure",
      description:
        lang === "fr"
          ? "Planification des réseaux, performance des actifs et appui technique sur la modernisation des infrastructures."
          : "Network planning, asset performance and technical support for infrastructure modernization.",
    },
    {
      title: lang === "fr" ? "Projets énergétiques" : "Energy Projects",
      description:
        lang === "fr"
          ? "Appui au développement, à la préparation et à la mise en œuvre de projets solaires, hydroélectriques et de réseaux."
          : "Support for developing, preparing and delivering hydro, solar and grid infrastructure projects.",
    },
    {
      title: lang === "fr" ? "Achats d’énergie" : "Power Procurement",
      description:
        lang === "fr"
          ? "Structuration des approvisionnements, conseils PPA et revue contractuelle." 
          : "Procurement structuring, PPA advisory and contract review.",
    },
  ];

  const industries = [
    lang === "fr" ? "Services publics" : "Utilities",
    lang === "fr" ? "Industrie minière" : "Mining",
    lang === "fr" ? "Gouvernement" : "Government",
    lang === "fr" ? "Industrie et commerce" : "Industrial & commercial",
    lang === "fr" ? "Investisseurs" : "Investors",
    lang === "fr" ? "Développeurs énergétiques" : "Energy developers",
  ];

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Par service" : "By service"}</p>
          <h2>{lang === "fr" ? "Ce que nous faisons" : "What we do"}</h2>
        </div>
        <div className="cards-grid three-up">
          {services.map((service) => (
            <article key={service.title} className="info-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Par secteur" : "By industry"}</p>
          <h2>{lang === "fr" ? "Qui nous sert" : "Who we serve"}</h2>
        </div>
        <div className="cards-grid three-up">
          {industries.map((industry) => (
            <article key={industry} className="info-card">
              <h3>{industry}</h3>
              <p>{lang === "fr" ? "Conseil adapté à la structure, aux actifs et aux priorités de chaque secteur." : "Advice tailored to each sector’s structure, assets and priorities."}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="card-actions">
          <Link href={`/${lang}/contact`} className="button primary">{dict.ctaPrimary}</Link>
          <Link href={`/${lang}/projects`} className="button secondary">{lang === "fr" ? "Voir les projets" : "See projects"}</Link>
        </div>
      </section>
    </SitePageShell>
  );
}
