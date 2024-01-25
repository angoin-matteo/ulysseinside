"use client";

import type { Locale } from "@/types";

import Link from "next/link";
import { FaCheck, FaXmark } from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";

export default function PricingPage({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const dictionary = useDictionary(locale);

  return (
    <main>
      <div className="mx-auto pb-96 max-w-7xl text-center md:pt-8 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-ulysseinside">
            {dictionary.app.pricingPage.upperTitle}
          </h2>
          <p className="mt-2 font-bold tracking-tight md:text-5xl md:leading-none">
            {dictionary.app.pricingPage.title}
          </p>
        </div>
        <div className="relative mt-6">
          <p className="max-w-2xl text-lg leading-8">
            {dictionary.app.pricingPage.subTitle}
          </p>
        </div>
      </div>
      <div className="pb-8">
        <div className="-mt-80">
          <div className="mx-auto px-8 max-x-7xl">
            <div className="grid mx-auto gap-8 lg:grid-cols-2 lg:max-w-4xl">
              <div className="flex flex-col justify-between p-10 ring-1 ring-slate-500 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900">
                <div>
                  <h3 className="text-base font-semibold leading-7 text-ulysseinside">
                    {dictionary.app.pricingPage.offers.one.title}
                  </h3>
                  <div className="flex items-baseline mt-4 gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">
                      15€
                    </span>
                    <span className="text-lg font-semibold leading-7">
                      {dictionary.app.pricingPage.offers.perHour}
                    </span>
                  </div>
                  <p className="mt-6 text-base leading-7">
                    {dictionary.app.pricingPage.offers.one.description}
                  </p>
                  <ul className="mt-10 text-sm leading-6">
                    <li className="flex items-center gap-x-3">
                      <FaXmark className="text-slate-500" />
                      No
                    </li>
                    <li className="flex items-center gap-x-3">
                      <FaCheck className="text-ulysseinside" />
                      Yes
                    </li>
                  </ul>
                </div>
                <Link
                  className="block mt-8 px-3.5 py-2 text-sm text-center font-semibold leading-6 rounded-lg shadow-lg text-slate-50 dark:text-[#1f524e] bg-ulysseinside  hover:brightness-[90%]"
                  href="https://discord.com/invite/KFmT94Gq5K"
                >
                  {dictionary.app.pricingPage.offers.callToAction}
                </Link>
              </div>
              <div className="flex flex-col justify-between p-10 ring-1 ring-slate-500 rounded-lg shadow-lg bg-slate-100 dark:bg-slate-900">
                <div>
                  <h3 className="text-base font-semibold leading-7 text-ulysseinside">
                    {dictionary.app.pricingPage.offers.two.title}
                  </h3>
                  <div className="flex items-baseline mt-4 gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">
                      25€
                    </span>
                    <span className="text-lg font-semibold leading-7">
                      {dictionary.app.pricingPage.offers.perHour}
                    </span>
                  </div>
                  <p className="mt-6 text-base leading-7">
                    {dictionary.app.pricingPage.offers.two.description}
                  </p>
                  <ul className="mt-10 text-sm leading-6">
                    <li className="flex items-center gap-x-3">
                      <FaXmark className="text-slate-500" />
                      No
                    </li>
                    <li className="flex items-center gap-x-3">
                      <FaCheck className="text-ulysseinside" />
                      Yes
                    </li>
                  </ul>
                </div>
                <Link
                  className="block mt-8 px-3.5 py-2 text-sm text-center font-semibold leading-6 rounded-lg shadow-lg text-slate-50 dark:text-[#1f524e] bg-ulysseinside hover:brightness-[90%]"
                  href="https://discord.com/invite/KFmT94Gq5K"
                >
                  {dictionary.app.pricingPage.offers.callToAction}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
