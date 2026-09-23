import Link from "next/link";
import { type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";

  return (
    <SitePageShell lang={lang} title={french ? "Politique de confidentialité" : "Privacy Policy"} intro={french ? "Comment nous traitons les données collectées sur le site." : "How we handle data collected on the website."}>
      <section className="section">
        <div className="info-card">
          <h2>{french ? "Données et finalités" : "Data and purposes"}</h2>
          <p>{french ? "Cette page décrit les principes appliqués à la collecte, l’utilisation et la protection des données. Les données sont limitées au strict nécessaire pour répondre aux demandes de contact, gérer les inscriptions à la newsletter et examiner les candidatures." : "This page outlines the principles used to collect, use and protect data. Data is limited to what is strictly necessary to answer contact requests, manage newsletter sign-ups and review applications."}</p>
          <h2>{french ? "Consentement et partage" : "Consent and sharing"}</h2>
          <p>{french ? "La newsletter repose sur un consentement séparé et une confirmation par e-mail. Les données ne sont pas vendues. Un prestataire d’e-mail ou d’hébergement ne peut recevoir que les données nécessaires à son service, dans un cadre à documenter avant la mise en production." : "The newsletter relies on separate consent and email confirmation. Data is not sold. An email or hosting provider may receive only the data needed for its service, under a framework to be documented before production."}</p>
          <h2>{french ? "Conservation et droits" : "Retention and rights"}</h2>
          <p>{french ? "Les durées de conservation, le contact vie privée et les procédures de suppression doivent être confirmés lors de la revue juridique. Vous pouvez demander l’accès, la rectification ou la suppression de vos données." : "Retention periods, the privacy contact and deletion procedures must be confirmed during legal review. You may request access, correction or deletion of your data."}</p>
          <div className="card-actions">
            <Link href={`/${lang}/contact`} className="button primary">Contact</Link>
            <Link href={`/${lang}/consent-management`} className="button secondary">{french ? "Gérer le consentement" : "Manage consent"}</Link>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
