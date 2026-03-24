import type { AuditIssue } from "@/src/types/audit.types";

export function IssueList({ issues }: { issues: AuditIssue[] }) {
  return (
    <div className="panel" style={{ padding: "1.5rem" }}>
      <h3 style={{ marginTop: 0 }}>Issues</h3>
      <div className="grid">
        {issues.map((issue) => (
          <div
            key={`${issue.id}-${issue.title}`}
            style={{
              border: "1px solid var(--line)",
              borderRadius: 20,
              padding: "1rem",
              background: "rgba(255,255,255,0.03)"
            }}
          >
            <strong>{issue.title}</strong>
            <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }}>{issue.description}</p>
            <small>{issue.recommendation}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

