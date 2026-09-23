import { SitePageShell } from "@/components/site-page-shell";
import type { Locale } from "@/lib/site-data";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function LegalNoticesPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const french = lang === "fr";
  return (
    <SitePageShell lang={lang} title={french ? "Mentions légales" : "Legal Notices"} intro={french ? "Informations légales sur l’éditeur du site." : "Legal information about the site publisher."}>
      <section className="section">
        <div className="info-card">
          <h2>{french ? "Éditeur" : "Publisher"}</h2>
          <p>{french ? "Africa Power Advisory Holding, SARL, siège déclaré à Kinshasa, République démocratique du Congo. La dénomination légale et les informations d’immatriculation doivent être vérifiées avant publication définitive." : "Africa Power Advisory Holding, SARL, registered office in Kinshasa, Democratic Republic of the Congo. The legal name and registration details must be verified before final publication."}</p>
          <h2>{french ? "Marque utilisée" : "Brand used"}</h2>
          <p>{french ? "Le site utilise la dénomination Africa Power Advisory Holding. Les informations d’immatriculation doivent être confirmées par la société avant publication définitive." : "The site uses the Africa Power Advisory Holding name. Registration details must be confirmed by the company before final publication."}</p>
        </div>
      </section>
    </SitePageShell>
  );
}
