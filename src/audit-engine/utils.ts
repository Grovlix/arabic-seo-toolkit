import { load } from "cheerio";

export function getDocument(html: string) {
  return load(html);
}

export function getTextContent(html: string): string {
  const $ = getDocument(html);
  return $("body").text().replace(/\s+/g, " ").trim();
}

export function isArabicContent(value: string): boolean {
  return /[\u0600-\u06FF]/.test(value);
}

export function countWords(value: string): number {
  return value.trim().split(/\s+/).filter(Boolean).length;
}

export function clampScore(score: number): number {
  return Math.max(0, Math.min(100, Math.round(score)));
}

export function normalizeUrl(input: string): string {
  try {
    return new URL(input).toString();
  } catch {
    return input;
  }
}

export function gradeFromScore(score: number): "A" | "B" | "C" | "D" | "F" {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

export function inferLocale(html: string): "ar" | "en" {
  const $ = getDocument(html);
  const lang = $("html").attr("lang")?.toLowerCase() ?? "";
  if (lang.startsWith("ar")) {
    return "ar";
  }

  return isArabicContent(getTextContent(html)) ? "ar" : "en";
}
