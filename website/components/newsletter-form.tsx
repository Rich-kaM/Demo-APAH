"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/site-data";

export function NewsletterForm({ lang }: { lang: Locale }) {
  const french = lang === "fr";
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "");
    const consent = data.get("consent");

    if (!email || !email.includes("@")) {
      setError(french ? "Saisissez une adresse e-mail valide." : "Enter a valid email address.");
      return;
    }

    if (!consent) {
      setError(french ? "Votre consentement est requis pour recevoir la newsletter." : "Your consent is required to receive the newsletter.");
      return;
    }

    setError("");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <p className="form-status" role="status">
        {french
          ? "Votre demande a été enregistrée. La confirmation par e-mail sera activée dès que le service d’envoi sera configuré."
          : "Your request has been recorded. Email confirmation will be enabled once the sending service is configured."}
      </p>
    );
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor={`newsletter-email-${lang}`}>{french ? "Adresse e-mail" : "Email address"}</label>
        <input id={`newsletter-email-${lang}`} name="email" type="email" autoComplete="email" required aria-describedby={error ? `newsletter-error-${lang}` : undefined} />
      </div>
      <label className="checkbox-field">
        <input name="consent" type="checkbox" required />
        <span>
          {french ? "J’accepte de recevoir les actualités et analyses d’Africa Power Advisory Holding. Je peux me désabonner à tout moment. " : "I agree to receive news and insights from Africa Power Advisory Holding. I can unsubscribe at any time. "}
          <Link href={`/${lang}/privacy-policy`}>{french ? "Politique de confidentialité" : "Privacy Policy"}</Link>
        </span>
      </label>
      <input className="honeypot" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      {error && <p id={`newsletter-error-${lang}`} className="form-error" role="alert">{error}</p>}
      <button type="submit" className="button primary">{french ? "Demander l’inscription" : "Request subscription"}</button>
    </form>
  );
}
