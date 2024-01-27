"use client";

import type { Locale } from "@/types";

import Link from "next/link";
import { FaLink } from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";
import { Chart, ExtendedLink } from "@/components";

export default function RootPage({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const dictionary = useDictionary(locale);

  return (
    <main className="overflow-hidden sm:-p-4">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-ulysseinside to-ulysseinside opacity-40 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
        <div className="mx-auto py-24 max-w-2xl sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative px-3 py-1 text-sm leading-6 rounded-lg text-slate-500 ring-1 ring-slate-500 hover:ring-slate-600">
              {dictionary.app.rootPage.announcement.title}
              <span className="inline mx-2 h-1 w-1">
                &#183;
              </span>
              <ExtendedLink
                className="group font-semibold text-ulysseinside"
                href="/products/training"
              >
                {dictionary.app.rootPage.announcement.callToAction}
                <span
                  aria-hidden="true"
                  className="group-hover:pl-2.5"
                >
                  {" "}&rarr;
                </span>
              </ExtendedLink>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              {dictionary.app.rootPage.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-500">
              {dictionary.app.rootPage.subTitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                className="flex items-center px-3.5 py-2.5 gap-x-2.5 text-sm font-semibold rounded-lg shadow-lg text-slate-50 dark:text-[#1f524e] bg-ulysseinside hover:brightness-[90%]"
                href="https://calendly.com/ulysse-boudey31/coaching-cryptomonnaies-et-web"
              >
                {dictionary.app.rootPage.contactUs}
                <FaLink />
              </Link>
              <ExtendedLink
                className="group text-sm font-semibold leading-6"
                href="/products/training"
              >
                {dictionary.app.rootPage.callToAction}
                <span
                  aria-hidden="true"
                  className="group-hover:pl-2.5"
                >
                  {" "}&rarr;
                </span>
              </ExtendedLink>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-ulysseinside to-ulysseinside opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}
          ></div>
        </div>
      </div>
      <div className="relative z-30">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-2">
            <div className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-slate-500">
                {dictionary.app.rootPage.stats.one.description}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {dictionary.app.rootPage.stats.one.title}
              </dd>
            </div>
            <div className="flex mx-auto max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-slate-500">
                {dictionary.app.rootPage.stats.two.description}
              </dt>
              <dd className="order-first text-3xl font-semibold tracking-tight sm:text-5xl">
                {dictionary.app.rootPage.stats.two.title}
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div className="flex justify-center mx-auto max-w-7xl px-6 pt-14 py-24 sm:py-48 lg:px-8 lg:py-56">
        <Chart locale={locale} />
      </div>
    </main>
  );
}
