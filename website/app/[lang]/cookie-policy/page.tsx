import Link from "next/link";
import { type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";

  return (
    <SitePageShell lang={lang} title={french ? "Politique des cookies" : "Cookie Policy"} intro={french ? "Nous utilisons des cookies uniquement pour des finalités techniques et de préférence utilisateur." : "We use cookies only for technical and user-preference purposes."}>
      <section className="section">
        <div className="info-card">
          <h2>{french ? "Cookies nécessaires" : "Necessary cookies"}</h2>
          <p>{french ? "Le site peut utiliser des cookies nécessaires au bon fonctionnement et des préférences locales pour mémoriser la langue ou le thème choisis." : "The site may use cookies required for correct operation and local preferences to remember the selected language or theme."}</p>
          <h2>{french ? "Services optionnels" : "Optional services"}</h2>
          <p>{french ? "Aucun outil d’analyse, de publicité ou de suivi tiers ne doit être activé avant une décision documentée et le consentement requis." : "No third-party analytics, advertising or tracking tool should be enabled before a documented decision and any required consent."}</p>
          <div className="card-actions">
            <Link href={`/${lang}/consent-management`} className="button primary">{french ? "Gérer le consentement" : "Manage consent"}</Link>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
