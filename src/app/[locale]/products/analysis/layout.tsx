import type { Metadata } from "next";
import type { Locale } from "@/types";

export function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale:Locale };
}>): Metadata {
  return {
    title: locale === "fr" ? "Analyse" : "Analysis",
  };
}

export default function AnalysisLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return children;
}
