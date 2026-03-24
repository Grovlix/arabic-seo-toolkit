export async function detectPlatform(url: string) {
  const response = await fetch(url);
  const html = await response.text();

  if (/cdn\.salla\.network|salla\.sa|salla-theme/i.test(html)) {
    return { platform: "salla" as const, html, confidence: 0.9 };
  }

  if (/zid\.sa|cdn\.zid\.store|zid-store/i.test(html)) {
    return { platform: "zid" as const, html, confidence: 0.85 };
  }

  return { platform: "generic" as const, html, confidence: 0.35 };
}

