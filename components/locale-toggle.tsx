import Link from "next/link";

import type { Locale } from "@/app/lib/i18n";

export function LocaleToggle({ locale }: { locale: Locale }) {
  const nextLocale = locale === "ar" ? "en" : "ar";

  return (
    <Link className="button secondary" href={`/${nextLocale}`}>
      {nextLocale === "ar" ? "العربية" : "English"}
    </Link>
  );
}

