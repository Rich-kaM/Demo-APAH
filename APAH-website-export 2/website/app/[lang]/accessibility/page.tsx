import { SitePageShell } from "@/components/site-page-shell";
import type { Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function AccessibilityPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";
  return (
    <SitePageShell lang={lang} title={french ? "Déclaration d’accessibilité" : "Accessibility Statement"} intro={french ? "Notre engagement pour une expérience accessible." : "Our commitment to an accessible experience."}>
      <section className="section">
        <div className="info-card">
          <p>{french ? "Nous concevons le site avec une structure sémantique, des contrastes lisibles, une navigation au clavier et des libellés accessibles pour les formulaires et commandes." : "We build the site with semantic structure, readable contrast, keyboard navigation and accessible labels for forms and controls."}</p>
          <p>{french ? "Des vérifications complémentaires avec des technologies d’assistance et des utilisateurs concernés sont nécessaires avant le lancement public." : "Additional testing with assistive technologies and users with disabilities is required before public launch."}</p>
        </div>
      </section>
    </SitePageShell>
  );
}
