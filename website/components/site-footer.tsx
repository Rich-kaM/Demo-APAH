import Link from "next/link";
import Image from "next/image";
import { contactDetails, dictionaries, type Locale } from "@/lib/site-data";

export function SiteFooter({ lang }: { lang: Locale }) {
  const dict = dictionaries[lang];
  const offices = contactDetails[lang];
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div>
          <Link href={`/${lang}`} className="brand-mark footer-brand" aria-label="Africa Power Advisory Holding home">
            <Image src="/assets/brand/apah-logo-light.svg" alt="Africa Power Advisory Holding logo" width={248} height={60} />
          </Link>
          <p className="footer-text">{dict.siteName}</p>
          <p className="footer-text">Kinshasa: {offices.office}</p>
          <p className="footer-text">Lusaka: {offices.office2}</p>
          <p className="footer-text small">{dict.hiddenContactNote}</p>
        </div>
        <div>
          <h3>{lang === "fr" ? "Navigation" : "Navigation"}</h3>
          <ul className="footer-links">
            <li><Link href={`/${lang}`}>{lang === "fr" ? "Accueil" : "Home"}</Link></li>
            <li><Link href={`/${lang}/about`}>{lang === "fr" ? "À propos" : "About us"}</Link></li>
            <li><Link href={`/${lang}/services-industries`}>{lang === "fr" ? "Services et secteurs" : "Services & Industries"}</Link></li>
            <li><Link href={`/${lang}/projects`}>{lang === "fr" ? "Projets" : "Projects"}</Link></li>
            <li><Link href={`/${lang}/actuality`}>{lang === "fr" ? "Actualités" : "Actuality"}</Link></li>
            <li><Link href={`/${lang}/careers`}>{lang === "fr" ? "Carrières" : "Careers"}</Link></li>
          </ul>
        </div>
        <div>
          <h3>{lang === "fr" ? "Légal" : "Legal"}</h3>
          <ul className="footer-links">
            <li><Link href={`/${lang}/privacy-policy`}>{lang === "fr" ? "Politique de confidentialité" : "Privacy Policy"}</Link></li>
            <li><Link href={`/${lang}/cookie-policy`}>{lang === "fr" ? "Politique des cookies" : "Cookie Policy"}</Link></li>
            <li><Link href={`/${lang}/terms`}>{lang === "fr" ? "Conditions générales" : "Terms and Conditions"}</Link></li>
            <li><Link href={`/${lang}/consent-management`}>{lang === "fr" ? "Gestion du consentement" : "Consent Management"}</Link></li>
            <li><Link href={`/${lang}/accessibility`}>{lang === "fr" ? "Accessibilité" : "Accessibility Statement"}</Link></li>
            <li><Link href={`/${lang}/legal-notices`}>{lang === "fr" ? "Mentions légales" : "Legal Notices"}</Link></li>
            <li><Link href={`/${lang}/recruitment-privacy`}>{lang === "fr" ? "Confidentialité recrutement" : "Recruitment Privacy"}</Link></li>
          </ul>
        </div>
        <div>
          <h3>{lang === "fr" ? "Newsletter" : "Newsletter"}</h3>
          <Link href={`/${lang}/newsletter`} className="button secondary footer-button">
            {dict.subscribeNewsletter}
          </Link>
          <Link href={`/${lang}/contact`} className="footer-contact-link" aria-label={lang === "fr" ? "Écrire à Africa Power Advisory Holding" : "Email Africa Power Advisory Holding"}>
            <span className="mail-icon" aria-hidden="true" />
            <span>{lang === "fr" ? "Écrire à notre équipe" : "Email our team"}</span>
          </Link>
          <div className="language-switcher footer-language" aria-label={lang === "fr" ? "Choisir la langue" : "Select language"}>
            <Link href="/fr" lang="fr" aria-current={lang === "fr" ? "true" : undefined} className={lang === "fr" ? "active" : ""}>FR</Link>
            <span aria-hidden="true">|</span>
            <Link href="/en" lang="en" aria-current={lang === "en" ? "true" : undefined} className={lang === "en" ? "active" : ""}>EN</Link>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {currentYear} {dict.footerLegal}. {dict.footerCopyright}</p>
      </div>
    </footer>
  );
}
