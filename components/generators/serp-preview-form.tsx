"use client";

import { useState } from "react";

export function SerpPreviewForm() {
  const [title, setTitle] = useState("أداة سيو عربية مجانية");
  const [url, setUrl] = useState("grovlix.com/arabic-seo-toolkit");
  const [description, setDescription] = useState("افحص صفحات متجرك العربي وأنشئ meta tags و schema markup خلال دقائق.");

  return (
    <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
      <div className="panel grid" style={{ padding: "1.5rem" }}>
        <input className="field" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="field" dir="ltr" value={url} onChange={(e) => setUrl(e.target.value)} />
        <textarea className="textarea" value={description} onChange={(e) => setDescription(e.target.value)} />
      </div>
      <div className="panel" style={{ padding: "1.5rem" }}>
        <div style={{ color: "#8ab4f8", fontSize: "1.2rem", marginBottom: "0.25rem" }}>{title}</div>
        <div style={{ color: "#7da67d", marginBottom: "0.35rem" }}>{url}</div>
        <div style={{ color: "var(--muted)" }}>{description}</div>
      </div>
    </div>
  );
}

