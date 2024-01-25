"use client";

import type { Locale } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import FrImage from "../../../public/locales/fr.webp";
import EnImage from "../../../public/locales/en.webp";

export default function TranslateHandler({
  enAlt,
  frAlt,
}: Readonly<{
  enAlt: string,
  frAlt: string;
}>) {
  const pathname = usePathname()

  const getNewPathname = (locale: Locale): string => {
    if (!pathname) return "/";
  
    const segments = pathname.split("/");
    segments[1] = locale;

    return segments.join("/");
  }

  return (
    <div className="inline-flex items-center px-1 h-12 rounded-lg shadow-lg ring-1 ring-slate-500 bg-slate-200 dark:bg-slate-800 lg:bg-slate-100 dark:lg:bg-slate-900">
      <div className="flex">
        <Link
          className={`${pathname.includes("/fr") && "bg-slate-300 dark:bg-slate-700 lg:bg-slate-200 dark:lg:bg-slate-800"} mx-1 p-2 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 lg:hover:bg-slate-300 dark:lg:hover:bg-slate-700`}
          href={getNewPathname("fr")}
        >
          <Image
            alt={frAlt}
            height={16}
            src={FrImage}
            width={0}
          />
        </Link>
        <Link
          className={`${pathname.includes("/en") && "bg-slate-300 dark:bg-slate-700 lg:bg-slate-200 dark:lg:bg-slate-800"} mx-1 p-2 rounded-lg hover:bg-slate-400 dark:hover:bg-slate-600 lg:hover:bg-slate-300 dark:lg:hover:bg-slate-700`}
          href={getNewPathname("en")}
        >
          <Image
            alt={enAlt}
            height={16}
            src={EnImage}
            width={0}
          />
        </Link>
      </div>
    </div>
  );
}
