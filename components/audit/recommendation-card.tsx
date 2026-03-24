export function RecommendationCard({ items }: { items: string[] }) {
  return (
    <div className="panel" style={{ padding: "1.5rem" }}>
      <h3 style={{ marginTop: 0 }}>Recommended next fixes</h3>
      <div className="grid">
        {items.map((item) => (
          <div
            key={item}
            style={{
              borderInlineStart: "4px solid var(--accent)",
              paddingInlineStart: "1rem",
              color: "var(--muted)"
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

