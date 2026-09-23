import { dictionaries, type Locale } from "@/lib/site-data";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function SitePageShell({
  children,
  lang,
  title,
  intro,
}: {
  children: React.ReactNode;
  lang: Locale;
  title: string;
  intro: string;
}) {
  const dict = dictionaries[lang];

  return (
    <div className="site-shell">
      <SiteHeader lang={lang} />
      <main id="main-content" className="page-body">
        <section className="page-hero">
          <div className="page-hero-panel">
            <p className="eyebrow">{dict.siteName}</p>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </section>
        <div className="content-wrap">{children}</div>
      </main>
      <SiteFooter lang={lang} />
    </div>
  );
}
