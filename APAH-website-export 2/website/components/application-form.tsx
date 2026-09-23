"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import type { Locale } from "@/lib/site-data";

export function ApplicationForm({ lang }: { lang: Locale }) {
  const french = lang === "fr";
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const file = data.get("cv");
    const privacy = data.get("privacy");

    if (!(file instanceof File) || file.size === 0) {
      setError(french ? "Ajoutez votre CV au format PDF ou DOCX." : "Add your CV in PDF or DOCX format.");
      return;
    }

    if (file.size > 5 * 1024 * 1024 || !["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(file.type)) {
      setError(french ? "Le CV doit être un fichier PDF ou DOCX de 5 Mo maximum." : "The CV must be a PDF or DOCX file no larger than 5 MB.");
      return;
    }

    if (!privacy) {
      setError(french ? "L’acceptation de la notice de recrutement est obligatoire." : "Acceptance of the recruitment notice is required.");
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
          ? "Votre candidature a été préparée. La réception sécurisée sera activée dès que le service de recrutement sera connecté."
          : "Your application has been prepared. Secure receipt will be enabled once the recruitment service is connected."}
      </p>
    );
  }

  return (
    <form className="form-stack" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="form-field">
          <label htmlFor={`application-name-${lang}`}>{french ? "Nom complet" : "Full name"}</label>
          <input id={`application-name-${lang}`} name="name" autoComplete="name" required />
        </div>
        <div className="form-field">
          <label htmlFor={`application-email-${lang}`}>{french ? "E-mail" : "Email"}</label>
          <input id={`application-email-${lang}`} name="email" type="email" autoComplete="email" required />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor={`application-position-${lang}`}>{french ? "Poste ou domaine visé" : "Position or area of interest"}</label>
        <input id={`application-position-${lang}`} name="position" required />
      </div>
      <div className="form-field">
        <label htmlFor={`application-cv-${lang}`}>{french ? "CV PDF ou DOCX" : "PDF or DOCX CV"}</label>
        <input id={`application-cv-${lang}`} name="cv" type="file" accept=".pdf,.docx,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document" required />
      </div>
      <div className="form-field">
        <label htmlFor={`application-message-${lang}`}>{french ? "Message (facultatif)" : "Message (optional)"}</label>
        <textarea id={`application-message-${lang}`} name="message" rows={4} />
      </div>
      <label className="checkbox-field">
        <input name="privacy" type="checkbox" required />
        <span>{french ? "J’ai lu la " : "I have read the "}<Link href={`/${lang}/recruitment-privacy`}>{french ? "notice de confidentialité recrutement" : "recruitment privacy notice"}</Link>{french ? " et j’accepte le traitement de ma candidature." : " and agree to the processing of my application."}</span>
      </label>
      <label className="checkbox-field">
        <input name="futureConsent" type="checkbox" />
        <span>{french ? "Je consens à être recontacté pour de futures opportunités." : "I consent to being considered for future opportunities."}</span>
      </label>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button type="submit" className="button primary">{french ? "Préparer ma candidature" : "Prepare my application"}</button>
    </form>
  );
}
