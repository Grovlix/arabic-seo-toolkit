import Link from "next/link";
import { notFound } from "next/navigation";

import { copy, isLocale } from "@/app/lib/i18n";
import { LocaleToggle } from "@/components/locale-toggle";

export default async function LocaleLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    notFound();
  }

  const content = copy[locale];

  return (
    <div dir={content.direction}>
      <header className="shell" style={{ padding: "1rem 0" }}>
        <div
          className="panel"
          style={{
            padding: "1rem 1.25rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Link href={`/${locale}`} style={{ fontWeight: 800 }}>
            Grovlix Arabic SEO Toolkit
          </Link>
          <nav style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Link href={`/${locale}/audit`}>{content.navAudit}</Link>
            <Link href={`/${locale}/generators/meta-tags`}>{content.navMeta}</Link>
            <Link href={`/${locale}/generators/schema-markup`}>{content.navSchema}</Link>
            <Link href={`/${locale}/generators/serp-preview`}>{content.navSerp}</Link>
            <LocaleToggle locale={locale} />
          </nav>
        </div>
      </header>
      {children}
      <footer className="shell" style={{ padding: "0 0 3rem", color: "var(--muted)" }}>
        Built by Grovlix for Salla and Zid merchants. Need more traffic? Try Popupsnap.
      </footer>
    </div>
  );
}

