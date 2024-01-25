import type { Metadata } from "next";
import type { Locale } from "@/types";

export function generateMetadata({
  params: { locale },
}: Readonly<{
  params: { locale:Locale };
}>): Metadata {
  return {
    title: locale === "fr" ? "À propos" : "About",
  };
}

export default function AboutLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return children;
}
