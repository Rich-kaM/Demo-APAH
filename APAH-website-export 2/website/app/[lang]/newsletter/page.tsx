import { NewsletterForm } from "@/components/newsletter-form";
import { SitePageShell } from "@/components/site-page-shell";
import type { Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function NewsletterPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";

  return (
    <SitePageShell lang={lang} title={french ? "Newsletter" : "Newsletter"} intro={french ? "Recevez les actualités et analyses d’Africa Power Advisory Holding." : "Receive news and insights from Africa Power Advisory Holding."}>
      <section className="section">
        <div className="form-panel">
          <p className="eyebrow accent">{french ? "Inscription" : "Sign up"}</p>
          <h2>{french ? "Restez informé" : "Stay informed"}</h2>
          <p>{french ? "Nous vous demanderons de confirmer votre adresse avant toute inscription. Aucun envoi ne sera effectué sans votre consentement." : "We will ask you to confirm your address before subscribing. Nothing will be sent without your consent."}</p>
          <NewsletterForm lang={lang} />
        </div>
      </section>
    </SitePageShell>
  );
}
