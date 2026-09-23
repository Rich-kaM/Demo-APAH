import Link from "next/link";
import { dictionaries, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";
import { ApplicationForm } from "@/components/application-form";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function CareersPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].careers;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="section-heading">
          <p className="eyebrow accent">{lang === "fr" ? "Recrutement" : "Recruitment"}</p>
          <h2>{lang === "fr" ? "Aucune offre ouverte pour le moment" : "No open positions at the moment"}</h2>
        </div>
        <div className="info-card empty-state">
          <p>{lang === "fr" ? "Aucun poste approuvé n’est publié actuellement. Vous pouvez toutefois déposer une candidature spontanée." : "No approved positions are currently published. You can still submit a spontaneous application."}</p>
        </div>
      </section>

      <section className="section alt">
        <div className="form-panel">
          <p className="eyebrow accent">{lang === "fr" ? "Candidature spontanée" : "Spontaneous application"}</p>
          <h2>{lang === "fr" ? "Parlez-nous de votre parcours" : "Tell us about your experience"}</h2>
          <p>{lang === "fr" ? "Les fichiers doivent être traités par un espace de recrutement privé et sécurisé avant la mise en production." : "Files must be processed through a private and secure recruitment workspace before production launch."}</p>
          <ApplicationForm lang={lang} />
          <div className="card-actions">
            <Link href={`/${lang}/recruitment-privacy`} className="button secondary">{lang === "fr" ? "Notice de confidentialité" : "Recruitment Privacy Notice"}</Link>
            <Link href={`/${lang}/contact`} className="button secondary">{dict.ctaSecondary}</Link>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
