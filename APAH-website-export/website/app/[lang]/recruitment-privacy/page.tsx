import { SitePageShell } from "@/components/site-page-shell";
import type { Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function RecruitmentPrivacyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";

  return (
    <SitePageShell lang={lang} title={french ? "Notice de confidentialité recrutement" : "Recruitment Privacy Notice"} intro={french ? "Informations sur le traitement des candidatures." : "Information about how applications are processed."}>
      <section className="section">
        <div className="info-card">
          <h2>{french ? "Données collectées" : "Data collected"}</h2>
          <p>{french ? "Nous demandons uniquement les informations nécessaires à l’examen d’une candidature : identité, coordonnées, poste visé, CV et message facultatif." : "We request only the information needed to review an application: identity, contact details, area of interest, CV and optional message."}</p>
          <h2>{french ? "Accès et conservation" : "Access and retention"}</h2>
          <p>{french ? "Les candidatures doivent être accessibles uniquement aux personnes autorisées au recrutement. La durée de conservation doit être définie avec le conseil juridique avant mise en production." : "Applications must be accessible only to authorized recruitment personnel. The retention period must be defined with legal counsel before production use."}</p>
          <h2>{french ? "Vos droits" : "Your rights"}</h2>
          <p>{french ? "Vous pouvez demander l’accès, la rectification ou la suppression de vos données en contactant l’entreprise via la page Contact." : "You may request access, correction or deletion of your data through the Contact page."}</p>
        </div>
      </section>
    </SitePageShell>
  );
}
