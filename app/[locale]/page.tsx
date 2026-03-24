import { copy, isLocale } from "@/app/lib/i18n";
import { UrlAuditForm } from "@/components/url-audit-form";

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) {
    return null;
  }

  const content = copy[locale];

  return (
    <main className="shell" style={{ padding: "2rem 0 4rem" }}>
      <section
        className="panel"
        style={{
          padding: "2rem",
          display: "grid",
          gap: "1.5rem",
          gridTemplateColumns: "1.35fr 0.9fr"
        }}
      >
        <div>
          <span className="eyebrow">{content.trust}</span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", marginBottom: "1rem" }}>
            {content.homeTitle}
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "1.1rem", maxWidth: 720 }}>
            {content.homeSubtitle}
          </p>
          <div style={{ marginTop: "1.5rem" }}>
            <UrlAuditForm
              locale={locale}
              placeholder={content.auditPlaceholder}
              buttonLabel={content.auditButton}
            />
          </div>
        </div>
        <div className="grid">
          {[
            "Meta tag generator",
            "Schema.org builder",
            "RTL layout checks",
            "Salla/Zid platform hints"
          ].map((item) => (
            <div
              key={item}
              style={{
                border: "1px solid var(--line)",
                padding: "1rem",
                borderRadius: 22,
                background: "rgba(255,255,255,0.03)"
              }}
            >
              {item}
            </div>
          ))}
          <div className="eyebrow" style={{ width: "fit-content" }}>
            {content.cta}
          </div>
        </div>
      </section>
    </main>
  );
}

