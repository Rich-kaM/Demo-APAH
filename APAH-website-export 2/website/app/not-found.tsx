import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="not-found-page">
      <div className="not-found-card">
        <p className="eyebrow accent">404</p>
        <h1>Page not found</h1>
        <p>The page you requested is unavailable or has moved.</p>
        <div className="hero-actions">
          <Link href="/fr" className="button primary">Accueil</Link>
          <Link href="/fr/contact" className="button secondary">Contact</Link>
        </div>
      </div>
    </main>
  );
}
