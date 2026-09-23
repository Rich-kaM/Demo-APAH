"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import { dictionaries, navItems, type Locale, pageLabels } from "@/lib/site-data";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteSearch } from "@/components/site-search";

export function SiteHeader({ lang }: { lang: Locale }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const dict = dictionaries[lang];

  const navLinks = useMemo(
    () =>
      navItems.map((item) => {
        const href = item === "home" ? `/${lang}` : `/${lang}/${item}`;
        return {
          href,
          label: pageLabels[lang][item],
          active: pathname === href || pathname.endsWith(`/${item}`),
        };
      }),
    [lang, pathname],
  );

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link href={`/${lang}`} className="brand-mark" aria-label="Africa Power Advisory Holding home">
          <Image src="/assets/brand/apah-logo.svg" alt="Africa Power Advisory Holding logo" width={248} height={60} priority className="logo-light-mode" />
          <Image src="/assets/brand/apah-logo-light.svg" alt="" width={248} height={60} priority className="logo-dark-mode" aria-hidden="true" />
        </Link>

        <nav className="desktop-nav" aria-label={lang === "fr" ? "Navigation principale" : "Main navigation"}>
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className={item.active ? "nav-item active" : "nav-item"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <SiteSearch lang={lang} />
          <Link href={`/${lang}/contact`} className="button primary small">{dict.navButton}</Link>
          <div className="language-switcher" aria-label={lang === "fr" ? "Choisir la langue" : "Select language"}>
            <Link href="/fr" lang="fr" aria-current={lang === "fr" ? "true" : undefined} className={lang === "fr" ? "active" : ""}>FR</Link>
            <span aria-hidden="true">|</span>
            <Link href="/en" lang="en" aria-current={lang === "en" ? "true" : undefined} className={lang === "en" ? "active" : ""}>EN</Link>
          </div>
        </div>

        <button type="button" className="menu-toggle" aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? (lang === "fr" ? "Fermer le menu" : "Close menu") : dict.menu} onClick={() => setMenuOpen((prev) => !prev)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {menuOpen && (
        <div id="mobile-menu" className="mobile-menu" role="dialog" aria-modal="true">
          <nav aria-label={lang === "fr" ? "Menu mobile" : "Mobile menu"}>
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} className={item.active ? "mobile-nav-item active" : "mobile-nav-item"} onClick={() => setMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mobile-actions">
            <ThemeToggle />
            <SiteSearch lang={lang} />
            <Link href={`/${lang}/contact`} className="button primary" onClick={() => setMenuOpen(false)}>{dict.navButton}</Link>
            <div className="language-switcher mobile-language" aria-label={lang === "fr" ? "Choisir la langue" : "Select language"}>
              <Link href="/fr" lang="fr" aria-current={lang === "fr" ? "true" : undefined} className={lang === "fr" ? "active" : ""} onClick={() => setMenuOpen(false)}>Français</Link>
              <Link href="/en" lang="en" aria-current={lang === "en" ? "true" : undefined} className={lang === "en" ? "active" : ""} onClick={() => setMenuOpen(false)}>English</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
