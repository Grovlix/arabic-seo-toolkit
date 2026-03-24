"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import type { Locale } from "@/app/lib/i18n";

export function UrlAuditForm({
  locale,
  placeholder,
  buttonLabel
}: {
  locale: Locale;
  placeholder: string;
  buttonLabel: string;
}) {
  const [url, setUrl] = useState("");
  const router = useRouter();

  return (
    <form
      className="grid"
      onSubmit={(event) => {
        event.preventDefault();
        if (!url) {
          return;
        }
        router.push(`/${locale}/audit?url=${encodeURIComponent(url)}`);
      }}
      style={{ gridTemplateColumns: "1fr auto" }}
    >
      <input
        className="field"
        dir="ltr"
        placeholder={placeholder}
        type="url"
        value={url}
        onChange={(event) => setUrl(event.target.value)}
      />
      <button className="button" type="submit">
        {buttonLabel}
      </button>
    </form>
  );
}

