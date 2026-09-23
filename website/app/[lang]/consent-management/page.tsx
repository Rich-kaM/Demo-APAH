import Link from "next/link";
import { SitePageShell } from "@/components/site-page-shell";
import type { Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ConsentManagementPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";
  return (
    <SitePageShell lang={lang} title={french ? "Gestion du consentement" : "Consent Management"} intro={french ? "Gérez vos préférences de communication et de cookies." : "Manage your communication and cookie preferences."}>
      <section className="section">
        <div className="info-card">
          <h2>{french ? "Préférences" : "Preferences"}</h2>
          <p>{french ? "La newsletter nécessite un consentement séparé et une confirmation par e-mail. Les cookies non essentiels ne doivent être activés qu’après votre choix." : "The newsletter requires separate consent and email confirmation. Non-essential cookies should only be enabled after you make a choice."}</p>
          <div className="card-actions">
            <Link href={`/${lang}/newsletter`} className="button primary">{french ? "Préférences newsletter" : "Newsletter preferences"}</Link>
            <Link href={`/${lang}/cookie-policy`} className="button secondary">{french ? "Politique des cookies" : "Cookie Policy"}</Link>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
