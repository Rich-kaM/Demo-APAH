"use client";

import Script from "next/script";
import Link from "next/link";
import { FormEvent, useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/site-data";

declare global {
  interface Window {
    grecaptcha?: { ready: (callback: () => void) => void; execute: (siteKey: string, options: { action: string }) => Promise<string> };
    onSubmit?: (token: string) => void;
  }
}

const industryOptions = {
  fr: ["Conseil en énergie", "Systèmes électriques et infrastructures", "Projets énergétiques", "Achats d’énergie et PPA", "Efficacité énergétique et optimisation", "Transition énergétique et durabilité", "Réglementation et politiques publiques", "Données et intelligence énergétique", "Services publics", "Industrie minière", "Gouvernement", "Industrie et commerce", "Investissement et finance", "Développement énergétique", "Autre"],
  en: ["Energy Advisory", "Power Systems and Infrastructure", "Energy Projects", "Power Procurement and PPAs", "Energy Efficiency and Optimization", "Energy Transition and Sustainability", "Regulation and Public Policy", "Data and Energy Intelligence", "Utilities", "Mining", "Government", "Industrial and Commercial", "Investment and Finance", "Energy Development", "Other"],
} as const;

const subjectOptions = {
  fr: ["Demande de service", "Recrutement", "Partenariat / sponsoring", "Relations médias / publicité", "Informations générales"],
  en: ["Service request", "Recruitment", "Partnership / Sponsorship", "Media Relations / Advertising", "General information"],
} as const;

type FieldName = "subject" | "fullName" | "lastName" | "email" | "phone" | "country" | "region" | "industry" | "message" | "privacy" | "recaptcha";
type FieldErrors = Partial<Record<FieldName, string>>;

type ContactFormProps = { lang: Locale };

export function ContactForm({ lang }: ContactFormProps) {
  const french = lang === "fr";
  const formRef = useRef<HTMLFormElement>(null);
  const pendingPayload = useRef<Record<string, string> | null>(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  function validate(data: FormData): FieldErrors {
    const nextErrors: FieldErrors = {};
    const required: Array<[FieldName, string]> = [
      ["subject", french ? "Sélectionnez un objet." : "Select a subject."],
      ["fullName", french ? "Saisissez votre nom complet." : "Enter your full name."],
      ["lastName", french ? "Saisissez votre nom." : "Enter your last name."],
      ["email", french ? "Saisissez votre adresse e-mail." : "Enter your email address."],
      ["phone", french ? "Saisissez votre numéro de téléphone." : "Enter your phone number."],
      ["country", french ? "Saisissez votre pays." : "Enter your country."],
      ["region", french ? "Saisissez votre État ou province." : "Enter your state or province."],
      ["industry", french ? "Sélectionnez un secteur ou service." : "Select an industry or service."],
      ["message", french ? "Saisissez votre message." : "Enter your message."],
    ];
    for (const [name, message] of required) if (!String(data.get(name) ?? "").trim()) nextErrors[name] = message;
    const email = String(data.get("email") ?? "");
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) nextErrors.email = french ? "Saisissez une adresse e-mail valide." : "Enter a valid email address.";
    const phone = String(data.get("phone") ?? "");
    if (phone && !/^[+\d][\d\s().-]{6,24}$/.test(phone.trim())) nextErrors.phone = french ? "Saisissez un numéro de téléphone valide." : "Enter a valid phone number.";
    if (!data.get("privacy")) nextErrors.privacy = french ? "Acceptez la politique de confidentialité." : "Accept the Privacy Policy.";
    if (!recaptchaSiteKey) nextErrors.recaptcha = french ? "La clé reCAPTCHA du site doit être configurée." : "The reCAPTCHA site key must be configured.";
    return nextErrors;
  }

  async function submitWithToken(token: string) {
    if (!pendingPayload.current) return;
    setSubmitting(true);
    setServerError("");
    try {
      const response = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...pendingPayload.current, recaptchaToken: token, lang }) });
      const result = await response.json() as { message?: string; errors?: FieldErrors };
      if (!response.ok) {
        setErrors(result.errors ?? { recaptcha: french ? "La vérification reCAPTCHA a échoué ou a expiré." : "The reCAPTCHA verification failed or expired." });
        setServerError(result.message ?? (french ? "Votre demande n’a pas pu être envoyée." : "Your request could not be sent."));
        return;
      }
      setSubmitted(true);
      formRef.current?.reset();
      pendingPayload.current = null;
    } catch {
      setServerError(french ? "Une erreur réseau est survenue. Réessayez." : "A network error occurred. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  useEffect(() => {
    if (!recaptchaSiteKey) return;
    window.onSubmit = (token: string) => {
      void submitWithToken(token);
    };
    return () => { delete window.onSubmit; };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const nextErrors = validate(data);
    setErrors(nextErrors);
    setServerError("");
    if (Object.keys(nextErrors).length > 0) return;
    pendingPayload.current = Object.fromEntries(data.entries()) as Record<string, string>;
    if (!window.grecaptcha || !recaptchaSiteKey) {
      setErrors({ recaptcha: french ? "La vérification reCAPTCHA n’est pas disponible. Réessayez." : "reCAPTCHA is not available. Please try again." });
      return;
    }
    window.grecaptcha.ready(() => {
      void window.grecaptcha?.execute(recaptchaSiteKey, { action: "submit" }).then((token) => window.onSubmit?.(token));
    });
  }

  if (submitted) return <p className="form-status" role="status">{french ? "Merci. Votre demande a bien été envoyée." : "Thank you. Your request has been sent successfully."}</p>;
  const errorFor = (name: FieldName) => errors[name] ? <span className="field-error" id={`contact-${name}-${lang}-error`}>{errors[name]}</span> : null;

  return (
    <>
      {recaptchaSiteKey && <Script src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`} strategy="afterInteractive" onLoad={() => setRecaptchaReady(true)} />}
      <form id="demo-form" ref={formRef} className="form-stack contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-field"><label htmlFor={`contact-subject-${lang}`}>{french ? "Objet" : "Subject"}</label><select id={`contact-subject-${lang}`} name="subject" required aria-invalid={Boolean(errors.subject)} defaultValue=""><option value="" disabled>{french ? "Sélectionnez un objet" : "Select a subject"}</option>{subjectOptions[lang].map((subject) => <option key={subject}>{subject}</option>)}</select>{errorFor("subject")}</div>
        <div className="form-grid"><div className="form-field"><label htmlFor={`contact-full-name-${lang}`}>{french ? "Nom complet" : "Full name"}</label><input id={`contact-full-name-${lang}`} name="fullName" autoComplete="name" required aria-invalid={Boolean(errors.fullName)} />{errorFor("fullName")}</div><div className="form-field"><label htmlFor={`contact-last-name-${lang}`}>{french ? "Nom" : "Last name"}</label><input id={`contact-last-name-${lang}`} name="lastName" autoComplete="family-name" required aria-invalid={Boolean(errors.lastName)} />{errorFor("lastName")}</div></div>
        <div className="form-grid"><div className="form-field"><label htmlFor={`contact-email-${lang}`}>{french ? "E-mail" : "Email"}</label><input id={`contact-email-${lang}`} name="email" type="email" autoComplete="email" required aria-invalid={Boolean(errors.email)} />{errorFor("email")}</div><div className="form-field"><label htmlFor={`contact-phone-${lang}`}>{french ? "Numéro de téléphone" : "Phone number"}</label><input id={`contact-phone-${lang}`} name="phone" type="tel" autoComplete="tel" required aria-invalid={Boolean(errors.phone)} />{errorFor("phone")}</div></div>
        <div className="form-grid"><div className="form-field"><label htmlFor={`contact-country-${lang}`}>{french ? "Pays" : "Country"}</label><input id={`contact-country-${lang}`} name="country" autoComplete="country-name" required aria-invalid={Boolean(errors.country)} />{errorFor("country")}</div><div className="form-field"><label htmlFor={`contact-region-${lang}`}>{french ? "État / Province" : "State / Province"}</label><input id={`contact-region-${lang}`} name="region" autoComplete="address-level1" required aria-invalid={Boolean(errors.region)} />{errorFor("region")}</div></div>
        <div className="form-field"><label htmlFor={`contact-industry-${lang}`}>{french ? "Sélectionnez un secteur ou service" : "Select an industry or service"}</label><select id={`contact-industry-${lang}`} name="industry" required aria-invalid={Boolean(errors.industry)} defaultValue=""><option value="" disabled>{french ? "Sélectionnez une option" : "Select an option"}</option>{industryOptions[lang].map((industry) => <option key={industry}>{industry}</option>)}</select>{errorFor("industry")}</div>
        <div className="form-field"><label htmlFor={`contact-message-${lang}`}>{french ? "Message" : "Message"}</label><textarea id={`contact-message-${lang}`} name="message" rows={6} required aria-invalid={Boolean(errors.message)} />{errorFor("message")}</div>
        <label className="checkbox-field"><input name="privacy" type="checkbox" required aria-invalid={Boolean(errors.privacy)} /><span>{french ? "J’accepte la " : "I accept the "}<Link href={`/${lang}/privacy-policy`}>{french ? "politique de confidentialité" : "Privacy Policy"}</Link>.</span></label>{errorFor("privacy")}
        <input className="honeypot" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        {!recaptchaReady && recaptchaSiteKey && <p className="field-help">{french ? "Chargement de la vérification reCAPTCHA…" : "Loading reCAPTCHA verification…"}</p>}
        {errorFor("recaptcha")}
        {serverError && <p className="form-error" role="alert">{serverError}</p>}
        <button type="submit" className="g-recaptcha button primary" data-sitekey={recaptchaSiteKey || undefined} data-callback="onSubmit" data-action="submit" disabled={submitting || !recaptchaSiteKey}>{submitting ? (french ? "Envoi…" : "Sending…") : (french ? "Envoyer" : "Send")}</button>
      </form>
    </>
  );
}
