"use client";

import type { Locale } from "@/types";

import Image from "next/image";
import { FaBook, FaChartLine, FaLock } from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";
import UlysseInsideImage from "../../../../public/avatars/ulysseinside.webp";

export default function AboutPage({
  params: { locale },
}: Readonly<{
  params: { locale: Locale };
}>) {
  const dictionary = useDictionary(locale);

  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-ulysseinside">
                {dictionary.app.aboutPage.upperTitle}
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                {dictionary.app.aboutPage.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-slate-500">
                {dictionary.app.aboutPage.description}
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Image
            alt={dictionary.app.aboutPage.alt}
            className="w-[48rem] max-w-none rounded-xl bg-slate-500 shadow-xl ring-1 ring-slate-500 sm:w-[57rem]"
            height={0}
            src={UlysseInsideImage}
            width={0}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 lg:max-w-lg">
              <p>
                {dictionary.app.aboutPage.introduction}
              </p>
              <ul role="list" className="mt-8 space-y-8 text-slate-500">
                <li className="flex gap-x-3">
                  <FaChartLine className="mt-1 h-5 w-5 flex-none text-ulysseinside" />
                  <span>
                    <strong className="font-semibold">
                      {dictionary.app.aboutPage.arguments.one.title}
                    </strong>
                    <span className="inline mx-2 h-1 w-1">
                      &#183;
                    </span>
                    {dictionary.app.aboutPage.arguments.one.description}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaBook className="mt-1 h-5 w-5 flex-none text-ulysseinside" />
                  <span>
                    <strong className="font-semibold">
                      {dictionary.app.aboutPage.arguments.two.title}
                    </strong>
                    <span className="inline mx-2 h-1 w-1">
                      &#183;
                    </span>
                    {dictionary.app.aboutPage.arguments.two.description}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <FaLock className="mt-1 h-5 w-5 flex-none text-ulysseinside" />
                  <span>
                    <strong className="font-semibold">
                      {dictionary.app.aboutPage.arguments.three.title}
                    </strong>
                    <span className="inline mx-2 h-1 w-1">
                      &#183;
                    </span>
                    {dictionary.app.aboutPage.arguments.three.description}
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                {dictionary.app.aboutPage.conclusion}
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight">
                {dictionary.app.aboutPage.extra.title}
              </h2>
              <p className="mt-6">
                {dictionary.app.aboutPage.extra.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
