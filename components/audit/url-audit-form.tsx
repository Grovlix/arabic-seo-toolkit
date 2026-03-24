"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function UrlAuditForm({
  actionLabel,
  placeholder
}: {
  actionLabel: string;
  placeholder: string;
}) {
  const router = useRouter();
  const [url, setUrl] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (!url) return;
        window.location.href = `/ar/audit?url=${encodeURIComponent(url)}`;
      }}
      className="card"
      style={{
        padding: 18,
        display: "grid",
        gap: 14,
        gridTemplateColumns: "1fr auto",
        alignItems: "center"
      }}
    >
      <input
        className="input"
        dir="ltr"
        placeholder={placeholder}
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button className="button button-primary" type="submit">
        {actionLabel}
      </button>
    </form>
  );
}
