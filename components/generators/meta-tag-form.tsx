"use client";

import { useState } from "react";

import type { GeneratedMetaTagResult } from "@/src/types/audit.types";

export function MetaTagForm() {
  const [result, setResult] = useState<GeneratedMetaTagResult | null>(null);
  const [form, setForm] = useState({
    titleAr: "",
    titleEn: "",
    descriptionAr: "",
    descriptionEn: "",
    canonicalUrl: "https://example.com/ar/page",
    keywords: "سيو, متجر, سلة"
  });

  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <form
        className="panel grid"
        style={{ padding: "1.5rem" }}
        onSubmit={async (event) => {
          event.preventDefault();
          const response = await fetch("/api/meta-tags", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              ...form,
              keywords: form.keywords.split(",").map((item) => item.trim())
            })
          });
          setResult((await response.json()) as GeneratedMetaTagResult);
        }}
      >
        <input className="field" placeholder="Arabic title" value={form.titleAr} onChange={(e) => setForm({ ...form, titleAr: e.target.value })} />
        <input className="field" placeholder="English title" value={form.titleEn} onChange={(e) => setForm({ ...form, titleEn: e.target.value })} />
        <textarea className="textarea" placeholder="Arabic description" value={form.descriptionAr} onChange={(e) => setForm({ ...form, descriptionAr: e.target.value })} />
        <textarea className="textarea" placeholder="English description" value={form.descriptionEn} onChange={(e) => setForm({ ...form, descriptionEn: e.target.value })} />
        <input className="field" placeholder="Canonical URL" value={form.canonicalUrl} onChange={(e) => setForm({ ...form, canonicalUrl: e.target.value })} />
        <input className="field" placeholder="Keywords comma separated" value={form.keywords} onChange={(e) => setForm({ ...form, keywords: e.target.value })} />
        <button className="button" type="submit">Generate meta tags</button>
      </form>

      <div className="panel" style={{ padding: "1.5rem" }}>
        <h3 style={{ marginTop: 0 }}>Preview</h3>
        {result ? (
          <>
            <div style={{ color: "#8ab4f8", marginBottom: "0.35rem" }}>{result.serpPreview.title}</div>
            <div style={{ color: "#7da67d", marginBottom: "0.35rem" }}>{result.serpPreview.url}</div>
            <div style={{ color: "var(--muted)", marginBottom: "1rem" }}>{result.serpPreview.description}</div>
            <pre style={{ whiteSpace: "pre-wrap", color: "var(--muted)" }}>{result.html}</pre>
          </>
        ) : (
          <p style={{ color: "var(--muted)" }}>Generated tags will appear here.</p>
        )}
      </div>
    </div>
  );
}

