import type { Metadata } from "next";

export const metadata: Metadata = { title: "Blog" };

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
