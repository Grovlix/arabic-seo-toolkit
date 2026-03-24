import type { PropsWithChildren, ReactNode } from "react";

export function SectionCard({
  title,
  description,
  children
}: PropsWithChildren<{ title: string; description?: ReactNode }>) {
  return (
    <section className="card" style={{ padding: 24 }}>
      <div style={{ marginBottom: 18 }}>
        <h2 style={{ margin: 0, fontSize: 24 }}>{title}</h2>
        {description ? (
          <p style={{ margin: "8px 0 0", color: "var(--muted)", lineHeight: 1.7 }}>
            {description}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  );
}
