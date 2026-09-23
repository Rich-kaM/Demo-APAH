import Link from "next/link";
import Image from "next/image";
import { dictionaries, expertProfiles, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [
    { lang: "fr" },
    { lang: "en" },
  ];
}

export default async function HomePage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];

  return (
    <SitePageShell lang={lang} title={dict.heroTitle} intro={dict.heroSubtitle}>
      <section className="hero-band">
        <div className="hero-overlay">
          <div className="hero-copy">
            <p className="eyebrow">{dict.siteName}</p>
            <h1>{dict.heroTitle}</h1>
            <p>{dict.heroSubtitle}</p>
          </div>
          <div className="hero-actions">
            <Link href={`/${lang}/contact`} className="button primary">{dict.ctaPrimary}</Link>
            <Link href={`/${lang}/contact`} className="button secondary">{dict.ctaSecondary}</Link>
            <Link href={`/${lang}/experts`} className="button tertiary">{dict.ctaTertiary}</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Services et secteurs" : "Services & Industries"}</p>
          <h2>{lang === "fr" ? "Expertise stratégique et sectorielle" : "Strategic expertise across key sectors"}</h2>
        </div>
        <div className="cards-grid three-up">
          {[
            { label: "Energy Advisory", desc: "Market analysis, forecasting and investment strategy." },
            { label: "Power Systems", desc: "Transmission, distribution and modern grid planning." },
            { label: "Energy Projects", desc: "Project preparation, supervision and execution support." },
            { label: "Power Procurement", desc: "PPA advisory and supply strategy." },
            { label: "Energy Efficiency", desc: "Operational optimization and demand-side efficiency." },
            { label: "Regulation & Policy", desc: "Regulatory intelligence and public-sector advisory." },
          ].map((item) => (
            <article key={item.label} className="info-card">
              <h3>{item.label}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Intelligence énergétique" : "Energy intelligence"}</p>
          <h2>{lang === "fr" ? "Lire le système électrique avec plus de précision" : "See the power system with greater clarity"}</h2>
          <p className="section-lead">{lang === "fr" ? "Des signaux de demande, de production et de réseau réunis pour éclairer les décisions d’investissement et d’exploitation." : "Demand, generation and grid signals brought together to support investment and operating decisions."}</p>
        </div>
        <div className="dashboard-grid">
          <div className="chart-panel large">
            <span className="mini-label">{lang === "fr" ? "Profil de demande" : "Demand profile"}</span>
            <div className="bars">
              <span style={{ height: "48%" }} />
              <span style={{ height: "58%" }} />
              <span style={{ height: "64%" }} />
              <span style={{ height: "72%" }} />
              <span style={{ height: "80%" }} />
              <span style={{ height: "90%" }} />
            </div>
          </div>
          <div className="chart-panel">
            <span className="mini-label">{lang === "fr" ? "Mix de production" : "Generation mix"}</span>
            <div className="donut" aria-hidden="true" />
            <p className="chart-caption">{lang === "fr" ? "Hydro, solaire, thermique et autres sources à comparer selon le contexte local." : "Hydro, solar, thermal and other sources compared against the local operating context."}</p>
          </div>
          <div className="chart-panel">
            <span className="mini-label">{lang === "fr" ? "Signaux d’exploitation" : "Operating signals"}</span>
            <ul className="metric-list">
              <li>{lang === "fr" ? "Demande : à prévoir" : "Demand: forecastable"}</li>
              <li>{lang === "fr" ? "Réseau : à renforcer" : "Grid: strengthen where needed"}</li>
              <li>{lang === "fr" ? "Coûts : à optimiser" : "Costs: optimize with evidence"}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Experts" : "Experts"}</p>
          <h2>{dict.meetExperts}</h2>
        </div>
        <div className="expert-grid">
          {expertProfiles.map((expert) => (
            <article key={expert.name} className="expert-card">
              <div className="expert-photo-wrap">
                {expert.initials ? (
                  <div className="expert-initials" aria-label={`${expert.name} initials`}>{expert.initials}</div>
                ) : (
                  <Image src={expert.image} alt={expert.name} width={420} height={520} className="expert-photo" />
                )}
              </div>
              <div className="expert-card-body">
                <h3>{expert.name}</h3>
                <p className="expert-title">{expert.title[lang]}</p>
                <p>{expert.bio[lang]}</p>
                <div className="card-actions">
                  <button type="button" className="button secondary small">{dict.readBio}</button>
                  <Link href={`/${lang}/contact`} className="button primary small">{dict.talkTogether}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SitePageShell>
  );
}
