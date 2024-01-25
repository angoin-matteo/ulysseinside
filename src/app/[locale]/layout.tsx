import type { Metadata } from "next";
import type { Locale } from "@/types";

import { Inter } from "next/font/google";
import { Banner, Footer, Header, Providers } from "@/components/Layout";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default:"ulysseinside",
    template: "%s - ulysseinside",
  },
  description: "Crypto & Web3",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode,
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={inter.className}>
        <Providers>
          <Banner locale={locale} />
          <Header locale={locale} />
          {children}
          <Footer locale={locale} />
        </Providers>
      </body>
    </html>
  );
}
