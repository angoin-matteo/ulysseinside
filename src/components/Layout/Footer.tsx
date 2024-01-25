"use client";

import type { Locale } from "@/types";

import Link from "next/link";
import { FaDiscord, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";

export default function Footer({
  locale,
}: Readonly<{
  locale: Locale,
}>) {
  const dictionary = useDictionary(locale);

  return (
    <footer className="relative z-30 mx-auto p-6 max-w-7xl text-slate-500 lg:flex lg:items-center lg:justify-between">
      <div className="flex justify-center md:order-2">
        <Link
          className="mx-2 hover:text-ulysseinside"
          href="https://discord.gg/KFmT94Gq5K"
        >
          <FaDiscord />
        </Link>
        <Link
          className="mx-2 hover:text-ulysseinside"
          href="https://www.youtube.com/@ulysseinside"
        >
          <FaYoutube />
        </Link>
        <Link
          className="mx-2 hover:text-ulysseinside"
          href="https://www.instagram.com/ulysseinside"
        >
          <FaInstagram />
        </Link>
        <Link
          className="mx-2 hover:text-ulysseinside"
          href="https://twitter.com/ulysseinside"
        >
          <FaXTwitter />
        </Link>
      </div>
      <div className="flex justify-center mt-8 order-1 text-sm md:mt-0">
        <p>
          &copy;{new Date().getFullYear()} ulysseinside
          <span className="inline mx-2 h-1 w-1">
            &#183;
          </span>
          {dictionary.components.layout.footer.copyright}
        </p>
      </div>
    </footer>
  );
}
