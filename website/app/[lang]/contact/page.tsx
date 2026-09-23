import Link from "next/link";
import { contactDetails, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";
import { ContactForm } from "@/components/contact-form";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const section = sectionContent[lang].contact;
  const offices = contactDetails[lang];

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="cards-grid three-up office-grid">
          <article className="info-card">
            <p className="eyebrow accent">{lang === "fr" ? "Bureau 1" : "Office 1"}</p>
            <h3>Kinshasa</h3>
            <p>{offices.office}</p>
          </article>
          <article className="info-card">
            <p className="eyebrow accent">{lang === "fr" ? "Bureau 2" : "Office 2"}</p>
            <h3>Lusaka</h3>
            <p>{offices.office2}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="form-panel contact-panel">
          <p className="eyebrow accent">{lang === "fr" ? "Parlons de votre besoin" : "Let’s discuss your need"}</p>
          <h2>{lang === "fr" ? "Envoyez votre demande" : "Send your request"}</h2>
          <p>{lang === "fr" ? "Tous les champs marqués comme obligatoires doivent être complétés. Vos informations seront utilisées uniquement pour traiter votre demande." : "All required fields must be completed. Your information will be used only to process your request."}</p>
          <ContactForm lang={lang} />
        </div>
      </section>

      <section className="section alt">
        <div className="career-cta">
          <p className="eyebrow accent">APAH</p>
          <h2>{lang === "fr" ? "Be part of APAH" : "Be part of APAH"}</h2>
          <p>{lang === "fr" ? "Construisez avec nous des décisions énergétiques plus solides pour l’Afrique." : "Help build stronger energy decisions for Africa with us."}</p>
          <div className="card-actions">
            <Link href={`/${lang}/careers`} className="button primary">{lang === "fr" ? "Voir les postes disponibles" : "See available positions"}</Link>
            <Link href={`/${lang}/services-industries`} className="button secondary">{lang === "fr" ? "Découvrir nos services" : "Explore our services"}</Link>
          </div>
        </div>
      </section>
    </SitePageShell>
  );
}
