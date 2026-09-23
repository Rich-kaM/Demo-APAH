"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import type { Locale } from "@/lib/site-data";

const searchablePages = {
  fr: [
    ["Accueil", ""],
    ["À propos", "about"],
    ["Services et secteurs", "services-industries"],
    ["Projets", "projects"],
    ["Analyses", "insights"],
    ["Actualités", "actuality"],
    ["Durabilité", "sustainability"],
    ["Experts", "experts"],
    ["Carrières", "careers"],
    ["Contact", "contact"],
  ],
  en: [
    ["Home", ""],
    ["About us", "about"],
    ["Services & Industries", "services-industries"],
    ["Projects", "projects"],
    ["Insights", "insights"],
    ["Actuality", "actuality"],
    ["Sustainability", "sustainability"],
    ["Experts", "experts"],
    ["Careers", "careers"],
    ["Contact", "contact"],
  ],
} as const;

export function SiteSearch({ lang }: { lang: Locale }) {
  const french = lang === "fr";
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  const results = searchablePages[lang].filter(([label]) => label.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <div className="site-search">
      <button type="button" className="search-button" aria-expanded={open} aria-controls={`site-search-panel-${lang}`} onClick={() => setOpen((value) => !value)}>
        <span className="search-icon" aria-hidden="true" />
        <span>{french ? "Rechercher" : "Search"}</span>
      </button>
      {open && (
        <div id={`site-search-panel-${lang}`} className="search-panel">
          <form onSubmit={handleSubmit} className="search-form" role="search">
            <label htmlFor={`site-search-input-${lang}`}>{french ? "Rechercher sur le site" : "Search the website"}</label>
            <div className="search-input-row">
              <input id={`site-search-input-${lang}`} value={query} onChange={(event) => { setQuery(event.target.value); setSubmitted(false); }} autoFocus placeholder={french ? "Services, projets, contact..." : "Services, projects, contact..."} />
              <button type="submit" className="button primary small">{french ? "Rechercher" : "Search"}</button>
            </div>
          </form>
          {submitted && (
            <div className="search-results" aria-live="polite">
              {results.length > 0 ? results.map(([label, path]) => <Link key={label} href={`/${lang}${path ? `/${path}` : ""}`} onClick={() => setOpen(false)}>{label}</Link>) : <p>{french ? "Aucun résultat." : "No results found."}</p>}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
