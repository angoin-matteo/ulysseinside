import type { Metadata } from "next";

export const metadata: Metadata = { title: "404" };

export default function NotFoundLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
