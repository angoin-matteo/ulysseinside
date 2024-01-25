"use client";

import type { Locale } from "@/types";

import Image from "next/image";
import { FaLock } from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";
import SecurityImage from "../../../../../public/products/security.webp";

export default function SecurityPage({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const dictionary = useDictionary(locale);

  return (
    <main className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-ulysseinside">
                {dictionary.app.products.securityPage.upperTitle}
              </h2>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {dictionary.app.products.securityPage.title}
              </h1>
              <p className="mt-6 text-lg leading-8 text-slate-500">
                {dictionary.app.products.securityPage.description}
              </p>
              <dl className="mt-10 space-y-8 max-w-xl text-base leading-7 text-slate-500 lg:max-w-none">
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    <FaLock className="absolute left-1 top-1 h-5 w-5 text-ulysseinside" />
                    {dictionary.app.products.securityPage.arguments.one.title}
                    <span className="inline mx-2 h-1 w-1">
                      &#183;
                    </span>
                  </dt>
                  <dd className="inline">
                    {dictionary.app.products.securityPage.arguments.one.description}
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    {/* className="absolute left-1 top-1 h-5 w-5 text-ulysseinside" */}
                    {dictionary.app.products.securityPage.arguments.two.title}
                    <span className="inline mx-2 h-1 w-1">
                      &#183;
                    </span>
                  </dt>
                  <dd className="inline">
                    {dictionary.app.products.securityPage.arguments.two.description}
                  </dd>
                </div>
                <div className="relative pl-9">
                  <dt className="inline font-semibold">
                    {/* className="absolute left-1 top-1 h-5 w-5 text-ulysseinside" */}
                    {dictionary.app.products.securityPage.arguments.three.title}
                    <span className="inline mx-2 h-1 w-1">
                      &#183;
                    </span>
                  </dt>
                  <dd className="inline">
                    {dictionary.app.products.securityPage.arguments.three.description}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
          <Image 
            alt={dictionary.app.products.securityPage.alt}
            className="w-[48rem] max-w-none rounded-lg shadow-lg ring-1 ring-slate-500 bg-slate-500 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            height={1442}
            src={SecurityImage}
            width={2432}
          />
        </div>
      </div>
    </main>
  );
}
