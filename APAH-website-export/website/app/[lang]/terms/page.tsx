import { SitePageShell } from "@/components/site-page-shell";
import type { Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function TermsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";
  return (
    <SitePageShell lang={lang} title={french ? "Conditions générales" : "Terms and Conditions"} intro={french ? "Conditions d’utilisation du site et de ses contenus." : "Terms for using the website and its content."}>
      <section className="section">
        <div className="info-card">
          <h2>{french ? "Utilisation du site" : "Use of the site"}</h2>
          <p>{french ? "Le site présente les activités et informations approuvées d’Africa Power Advisory Holding. Les contenus sont fournis à titre informatif et ne constituent pas un avis professionnel sans mandat confirmé." : "The site presents approved information about Africa Power Advisory Holding. Content is informational and does not constitute professional advice without a confirmed engagement."}</p>
          <h2>{french ? "Propriété intellectuelle" : "Intellectual property"}</h2>
          <p>{french ? "Les textes, marques, visuels et composants publiés sont protégés par les droits applicables. Toute réutilisation doit être autorisée par écrit." : "Published text, marks, visuals and components are protected by applicable rights. Reuse requires written permission."}</p>
          <h2>{french ? "Évolution des conditions" : "Changes to these terms"}</h2>
          <p>{french ? "Ces conditions seront complétées après revue juridique et peuvent être mises à jour pour refléter les services réellement proposés." : "These terms will be completed after legal review and may be updated to reflect the services actually offered."}</p>
        </div>
      </section>
    </SitePageShell>
  );
}
