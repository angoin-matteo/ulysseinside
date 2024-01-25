import type { Metadata } from "next";
import type { Locale } from "@/types";

export function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale:Locale };
}>): Metadata {
  return {
    title: locale === "fr" ? "Formations" : "Training",
  };
}

export default function TrainingLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return children;
}
