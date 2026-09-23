import Link from "next/link";
import Image from "next/image";
import { dictionaries, expertProfiles, sectionContent, type Locale } from "@/lib/site-data";
import { SitePageShell } from "@/components/site-page-shell";

export function generateStaticParams() {
  return [{ lang: "fr" }, { lang: "en" }];
}

export default async function ExpertsPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dict = dictionaries[lang];
  const section = sectionContent[lang].experts;

  return (
    <SitePageShell lang={lang} title={section.title} intro={section.intro}>
      <section className="section">
        <div className="expert-grid">
          {expertProfiles.map((expert) => (
            <article key={expert.name} className="expert-card">
              <div className="expert-photo-wrap">
                {expert.initials ? (
                  <div className="expert-initials" aria-label={`${expert.name} initials`}>{expert.initials}</div>
                ) : (
                  <Image src={expert.image} alt={expert.name} width={420} height={520} className="expert-photo" />
                )}
              </div>
              <div className="expert-card-body">
                <h3>{expert.name}</h3>
                <p className="expert-title">{expert.title[lang]}</p>
                <p>{expert.bio[lang]}</p>
                <div className="card-actions">
                  <Link href={`/${lang}/contact`} className="button primary small">{dict.talkTogether}</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </SitePageShell>
  );
}
