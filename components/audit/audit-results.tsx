"use client";

import { useEffect, useState } from "react";

import { IssueList } from "./issue-list";
import { RecommendationCard } from "./recommendation-card";
import { ScoreGauge } from "./score-gauge";
import type { AuditResult } from "@/src/types/audit.types";

export function AuditResults({ url }: { url: string }) {
  const [data, setData] = useState<AuditResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const run = async () => {
      try {
        setError(null);
        const response = await fetch("/api/audit", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ url })
        });

        if (!response.ok) {
          throw new Error("Audit failed");
        }

        const json = (await response.json()) as AuditResult;
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Audit failed");
      }
    };

    void run();
  }, [url]);

  if (error) {
    return <div className="panel" style={{ padding: "1.5rem" }}>{error}</div>;
  }

  if (!data) {
    return <div className="panel" style={{ padding: "1.5rem" }}>Running audit...</div>;
  }

  return (
    <div className="grid" style={{ gridTemplateColumns: "340px 1fr", alignItems: "start" }}>
      <div className="grid">
        <ScoreGauge score={data.score} />
        <RecommendationCard items={data.summary.topPriority} />
      </div>
      <IssueList issues={data.issues} />
    </div>
  );
}

