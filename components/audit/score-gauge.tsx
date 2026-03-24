export function ScoreGauge({ score }: { score: number }) {
  const tone = score >= 80 ? "var(--success)" : score >= 55 ? "var(--warn)" : "var(--danger)";

  return (
    <div
      className="panel"
      style={{
        padding: "1.5rem",
        display: "grid",
        placeItems: "center",
        minHeight: 220
      }}
    >
      <div
        style={{
          width: 160,
          height: 160,
          borderRadius: "50%",
          display: "grid",
          placeItems: "center",
          border: `10px solid ${tone}`,
          boxShadow: `0 0 40px color-mix(in srgb, ${tone} 45%, transparent)`
        }}
      >
        <div style={{ textAlign: "center" }}>
          <div style={{ fontSize: "3rem", fontWeight: 800 }}>{score}</div>
          <div style={{ color: "var(--muted)" }}>SEO Score</div>
        </div>
      </div>
    </div>
  );
}

