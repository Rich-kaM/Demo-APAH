import Link from "next/link";
import { dictionaries, projectShowcase, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ProjectsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].projects;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="cards-grid three-up">
          {projectShowcase.map((project) => (
            <article key={project.name[lang]} className="info-card">
              <p className="eyebrow accent">{project.location}</p>
              <h3>{project.name[lang]}</h3>
              <p>{project.summary[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="card-actions">
          <Link href={`/${lang}/contact`} className="button primary">{dict.ctaPrimary}</Link>
          <Link href={`/${lang}/services-industries`} className="button secondary">{lang === "fr" ? "Découvrir nos services" : "Explore our services"}</Link>
        </div>
      </section>
    </SitePageShell>
  );
}
