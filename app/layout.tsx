import type { Metadata } from "next";
import { Cairo } from "next/font/google";

import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arabic-seo-toolkit.grovlix.com"),
  title: "Arabic SEO Toolkit",
  description: "Free Arabic-first SEO toolkit for Salla and Zid merchants.",
  openGraph: {
    title: "Arabic SEO Toolkit",
    description: "Audit Arabic storefront SEO, generate meta tags, and build schema markup."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" className={cairo.variable}>
      <body>{children}</body>
    </html>
  );
}

