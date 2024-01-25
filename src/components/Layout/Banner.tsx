"use client";

import type { Locale } from "@/types";

import { useState } from "react";
import { FaXmark } from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";
import { ExtendedLink } from "@/components";

export default function Banner({
  locale,
}: Readonly<{
  locale: Locale;
}>) {
  const dictionary = useDictionary(locale);
  const [isOpen, setIsOpen] = useState(true);

  return isOpen && (
    <div className="relative z-40 flex items-center gap-x-6 px-6 py-2.5 overflow-hidden sm:px-3.5 sm:before:flex-1">
      <div
        aria-hidden="true"
        className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-ulysseinside to-ulysseinside opacity-30"
          style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}
        ></div>
      </div>
      <div
        aria-hidden="true"
        className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
      >
        <div
          className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-ulysseinside to-ulysseinside opacity-30"
          style={{ clipPath: "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)" }}></div>
      </div>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6">
          <strong className="font-semibold">
            {dictionary.components.layout.banner.title}
          </strong>
          <span className="inline mx-2 h-1 w-1">
            &#183;
          </span>
          {dictionary.components.layout.banner.subTitle}
        </p>
        <ExtendedLink
          href="/products/training"
          className="group flex-none px-3.5 py-1 text-sm font-semibold rounded-lg shadow-lg text-slate-50 dark:text-[#1f524e] bg-ulysseinside hover:brightness-[90%]">
          {dictionary.components.layout.banner.callToAction}
          <span
            aria-hidden="true"
            className="group-hover:pl-2.5"
          >
            {" "}&rarr;
          </span>
        </ExtendedLink>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setIsOpen(false)}
        >
          <FaXmark />
        </button>
      </div>
    </div>
  );
}
