import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Africa Power Advisory Holding",
  description: "Strategic energy advisory and power solutions for Africa.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" data-scroll-behavior="smooth">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
