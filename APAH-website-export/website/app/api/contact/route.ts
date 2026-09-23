import { NextResponse } from "next/server";

const subjects = new Set([
  "Service request",
  "Demande de service",
  "Recruitment",
  "Recrutement",
  "Partnership / Sponsorship",
  "Partenariat / sponsoring",
  "Media Relations / Advertising",
  "Relations médias / publicité",
  "General information",
  "Informations générales",
]);

const industries = new Set([
  "Conseil en énergie", "Systèmes électriques et infrastructures", "Projets énergétiques", "Achats d’énergie et PPA", "Efficacité énergétique et optimisation", "Transition énergétique et durabilité", "Réglementation et politiques publiques", "Données et intelligence énergétique", "Services publics", "Industrie minière", "Gouvernement", "Industrie et commerce", "Investissement et finance", "Développement énergétique", "Autre",
  "Energy Advisory", "Power Systems and Infrastructure", "Energy Projects", "Power Procurement and PPAs", "Energy Efficiency and Optimization", "Energy Transition and Sustainability", "Regulation and Public Policy", "Data and Energy Intelligence", "Utilities", "Mining", "Industrial and Commercial", "Investment and Finance", "Energy Development", "Other",
]);

type ContactPayload = Record<string, unknown>;
type ErrorMap = Record<string, string>;

function message(locale: string, french: string, english: string) {
  return locale === "fr" ? french : english;
}

function validatePayload(payload: ContactPayload, locale: string): ErrorMap {
  const errors: ErrorMap = {};
  const required: Record<string, [string, string]> = {
    subject: ["Sélectionnez un objet.", "Select a subject."],
    fullName: ["Saisissez votre nom complet.", "Enter your full name."],
    lastName: ["Saisissez votre nom.", "Enter your last name."],
    email: ["Saisissez votre adresse e-mail.", "Enter your email address."],
    phone: ["Saisissez votre numéro de téléphone.", "Enter your phone number."],
    country: ["Saisissez votre pays.", "Enter your country."],
    region: ["Saisissez votre État ou province.", "Enter your state or province."],
    industry: ["Sélectionnez un secteur ou service.", "Select an industry or service."],
    message: ["Saisissez votre message.", "Enter your message."],
  };

  for (const [field, [french, english]] of Object.entries(required)) {
    if (typeof payload[field] !== "string" || !payload[field].trim()) errors[field] = message(locale, french, english);
  }

  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = message(locale, "Saisissez une adresse e-mail valide.", "Enter a valid email address.");
  if (typeof payload.phone === "string" && !/^[+\d][\d\s().-]{6,24}$/.test(payload.phone.trim())) errors.phone = message(locale, "Saisissez un numéro de téléphone valide.", "Enter a valid phone number.");
  if (typeof payload.subject === "string" && !subjects.has(payload.subject)) errors.subject = message(locale, "Sélectionnez un objet valide.", "Select a valid subject.");
  if (typeof payload.industry === "string" && !industries.has(payload.industry)) errors.industry = message(locale, "Sélectionnez un secteur ou service valide.", "Select a valid industry or service.");
  if (typeof payload.message === "string" && payload.message.trim().length < 10) errors.message = message(locale, "Le message doit contenir au moins 10 caractères.", "The message must contain at least 10 characters.");
  if (payload.privacy !== "on" && payload.privacy !== true) errors.privacy = message(locale, "Acceptez la politique de confidentialité.", "Accept the Privacy Policy.");
  return errors;
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = await request.json() as ContactPayload;
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  const locale = payload.lang === "fr" ? "fr" : "en";
  if (typeof payload.website === "string" && payload.website.trim()) {
    return NextResponse.json({ message: message(locale, "Votre demande n’a pas pu être envoyée.", "Your request could not be sent.") }, { status: 400 });
  }

  const errors = validatePayload(payload, locale);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ message: message(locale, "Vérifiez les champs signalés.", "Check the highlighted fields."), errors }, { status: 400 });
  }

  const secret = process.env.RECAPTCHA_SECRET_KEY;
  const token = typeof payload.recaptchaToken === "string" ? payload.recaptchaToken : "";
  if (!secret || !token) {
    return NextResponse.json({ message: message(locale, "La vérification reCAPTCHA n’est pas disponible. Réessayez plus tard.", "reCAPTCHA verification is unavailable. Please try again later."), errors: { recaptcha: message(locale, "La vérification reCAPTCHA est obligatoire.", "reCAPTCHA verification is required.") } }, { status: 503 });
  }

  try {
    const verification = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
      cache: "no-store",
    });
    const result = await verification.json() as { success?: boolean; action?: string; score?: number };
    if (!verification.ok || !result.success || result.action !== "submit" || typeof result.score !== "number" || result.score < 0.5) {
      return NextResponse.json({ message: message(locale, "La vérification reCAPTCHA a échoué ou a expiré.", "The reCAPTCHA verification failed or expired."), errors: { recaptcha: message(locale, "Recommencez la vérification reCAPTCHA.", "Complete the reCAPTCHA verification again.") } }, { status: 400 });
    }
  } catch {
    return NextResponse.json({ message: message(locale, "La vérification reCAPTCHA a échoué. Réessayez.", "reCAPTCHA verification failed. Please try again.") }, { status: 502 });
  }

  return NextResponse.json({ message: message(locale, "Votre demande a bien été reçue.", "Your request was received successfully.") }, { status: 200 });
}
