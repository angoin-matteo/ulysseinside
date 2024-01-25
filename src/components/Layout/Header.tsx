"use client";

import type { Locale } from "@/types";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import {
  FaBarsStaggered,
  FaBook,
  FaChartLine,
  FaGripLines,
  FaLink,
  FaLock,
  FaPhone,
  FaXmark,
  FaYoutube,
} from "react-icons/fa6";
import { useDictionary } from "@/hooks/locales";
import { ExtendedLink } from "@/components";
import { GreenBadge } from "@/components/Badges";
import { ThemesHandler, LocalesHandler } from "@/components/Handlers";
import UlysseinsideImage from "../../../public/ulysseinside.webp";

export default function Header({
  locale,
}: Readonly<{
  locale: Locale;
}>) {
  const pathname = usePathname();
  const dictionary = useDictionary(locale);
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [subMenuIsOpen, setSubMenuIsOpen] = useState(false);

  useEffect(() => {
    setMenuIsOpen(false);
  }, [pathname]);

  return (
    <header className="relative z-40">
      <nav className="flex items-center justify-between mx-auto p-6 max-w-7xl lg:px-8">
        <div className="flex lg:flex-1">
          <ExtendedLink
            href="/"
            className="-m-1.5 p-1.5"
          >
            <Image
              alt="ulysseinside"
              className="h-12 w-auto"
              height={0}
              src={UlysseinsideImage}
              width={0}
            />
          </ExtendedLink>
        </div>

        <div className="flex lg:hidden">
          <button
            onClick={() => setMenuIsOpen(true)}
            className="inline-flex items-center justify-center -m-2.5 p-2.5"
          >
            <FaGripLines />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12 lg:hover:cursor-pointer">
          <div
            className="relative"
            onMouseEnter={() => setSubMenuIsOpen(true)}
            onMouseLeave={() => setSubMenuIsOpen(false)}
          >
            <div className="flex items-center gap-x-1 text-sm font-semibold leading-6 cursor-pointer">
              {dictionary.components.layout.header.products}
              <FaBarsStaggered />
            </div>

            <Transition
              as={Fragment}
              show={subMenuIsOpen}
              enter="transition ease-out duration-200"
              enterFrom="translate-y-1 opacity-0"
              enterTo="translate-y-0 opacity-100"
              leave="transition ease-in duration-150"
              leaveFrom="translate-y-0 opacity-100"
              leaveTo="translate-y-1 opacity-0"
            >
              <div className="absolute -left-8 mt-3 w-screen max-w-md overflow-hidden rounded-lg shadow-lg ring-1 ring-slate-500 bg-slate-100 dark:bg-slate-900">
                <div className="p-4">
                  <ExtendedLink
                    className="block font-semibold"
                    href="/products/analysis"
                  >
                    <div className="group relative flex items-center p-4 gap-x-6 text-sm leading-6 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
                      <div className="flex flex-none items-center justify-center h-11 w-11 rounded-lg bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700">
                        <FaChartLine />
                      </div>
                      <div className="">
                        {dictionary.components.layout.header.analysis.title}
                        <p className="mt-1 text-slate-500 dark:group-hover:text-slate-400">
                          {dictionary.components.layout.header.analysis.subTitle}
                        </p>
                      </div>
                    </div>
                  </ExtendedLink>

                  <ExtendedLink
                    className="block font-semibold"
                    href="/products/training"
                  >
                    <div className="group relative flex items-center p-4 gap-x-6 text-sm leading-6 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
                      <div className="flex flex-none items-center justify-center h-11 w-11 rounded-lg bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700">
                        <FaBook />
                      </div>
                      <div className="flex-auto">
                        <div className="flex">
                          {dictionary.components.layout.header.training.title}
                          <div className="mx-2.5"></div>
                          <GreenBadge value={dictionary.components.badges.new} />
                        </div>
                        <p className="mt-1 text-slate-500 dark:group-hover:text-slate-400">
                          {dictionary.components.layout.header.training.subTitle}
                        </p>
                      </div>
                    </div>
                  </ExtendedLink>

                  <ExtendedLink
                    className="block font-semibold"
                    href="/products/security"
                  >
                    <div className="group relative flex items-center p-4 gap-x-6 text-sm leading-6 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800">
                      <div className="flex flex-none items-center justify-center h-11 w-11 rounded-lg bg-slate-200 dark:bg-slate-800 group-hover:bg-slate-300 dark:group-hover:bg-slate-700">
                        <FaLock />
                      </div>
                      <div className="flex-auto">
                        {dictionary.components.layout.header.security.title}
                        <p className="mt-1 text-slate-500 dark:group-hover:text-slate-400">
                          {dictionary.components.layout.header.security.subTitle}
                        </p>
                      </div>
                    </div>
                  </ExtendedLink>
                </div>

                <div className="grid grid-cols-2 divide-x divide-slate-100 dark:divide-slate-900 bg-slate-200 dark:bg-slate-800">
                  <Link
                    className="flex items-center justify-center p-3 gap-x-2.5 text-sm font-semibold leading-6 hover:bg-slate-300 dark:hover:bg-slate-700"
                    href="https://youtu.be/Tr5A5mTp8DY?si=wsu_ZLTBc-LIcLsB"
                    target="_blank"
                  >
                    <FaYoutube />
                    {dictionary.components.layout.header.discoverUs}
                    <FaLink />
                  </Link>
                  <Link
                    className="flex items-center justify-center p-3 gap-x-2.5 text-sm font-semibold leading-6 hover:bg-slate-300 dark:hover:bg-slate-700"
                    href="https://calendly.com/ulysse-boudey31/coaching-cryptomonnaies-et-web"
                    target="_blank"
                  >
                    <FaPhone />
                    {dictionary.components.layout.header.contactUs}
                    <FaLink />
                  </Link>
                </div>
              </div>
            </Transition>
          </div>

          <ExtendedLink
            href="/pricing"
            className="text-sm font-semibold leading-6"
          >
            {dictionary.components.layout.header.pricing}
          </ExtendedLink>
          <ExtendedLink
            href="/about"
            className="text-sm font-semibold leading-6"
          >
            {dictionary.components.layout.header.about}
          </ExtendedLink>
          <ExtendedLink
            href="/blog"
            className="flex text-sm font-semibold leading-6"
          >
            {dictionary.components.layout.header.blog}
            <div className="mx-2.5"></div>
            <GreenBadge value={dictionary.components.badges.new} />
          </ExtendedLink>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ThemesHandler />
          <div className="mx-2.5"></div>
          <LocalesHandler
            enAlt={dictionary.components.handlers.locales.enAlt}
            frAlt={dictionary.components.handlers.locales.frAlt}
          />
        </div>
      </nav>

      {menuIsOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-y-0 z-50 px-6 py-6 w-full overflow-scroll bg-slate-100 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <ExtendedLink
                href="/"
                className="-m-1.5 p-1.5"
              >
                <Image
                  alt="ulysseinside"
                  className="h-12 w-auto"
                  height={0}
                  src={UlysseinsideImage}
                  width={0}
                />
              </ExtendedLink>
              <button
                className="-m-2.5 p-2.5"
                onClick={() => setMenuIsOpen(false)}
              >
                <FaXmark />
              </button>
            </div>

            <div className="mt-6">
              <div className="-my-6 divide-y divide-ulysseinside">
                <div className="space-y-2 py-6">
                  <div className="-mx-3">
                    <button
                      onClick={() => setSubMenuIsOpen(!subMenuIsOpen)}
                      className="flex items-center justify-between pl-3 pr-3.5 py-2 w-full text-base font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                    >
                      {dictionary.components.layout.header.products}
                      <FaBarsStaggered />
                    </button>
                    {subMenuIsOpen && (
                      <div className="mt-2 space-y-2">
                        <ExtendedLink
                          href="/products/analysis"
                          className="block pl-6 pr-3 py-2 text-sm font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                        >
                          {dictionary.components.layout.header.analysis.title}
                        </ExtendedLink>
                        <ExtendedLink
                          href="/products/training"
                          className="flex items-center pl-6 pr-3 py-2 text-sm font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                        >
                          {dictionary.components.layout.header.training.title}
                          <div className="mx-2.5"></div>
                          <GreenBadge value={dictionary.components.badges.new} />
                        </ExtendedLink>
                        <ExtendedLink
                          href="/products/security"
                          className="block pl-6 pr-3 py-2 text-sm font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                        >
                          {dictionary.components.layout.header.security.title}
                        </ExtendedLink>
                      </div>
                    )}
                  </div>

                  <ExtendedLink
                    href="/pricing"
                    className="block -mx-3 px-3 py-2 text-base font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                  >
                    {dictionary.components.layout.header.pricing}
                  </ExtendedLink>
                  <ExtendedLink
                    href="/about"
                    className="block -mx-3 px-3 py-2 text-base font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                  >
                    {dictionary.components.layout.header.about}
                  </ExtendedLink>
                  <ExtendedLink
                    href="/blog"
                    className="flex items-center -mx-3 px-3 py-2 text-base font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                  >
                    {dictionary.components.layout.header.blog}
                    <div className="mx-2.5"></div>
                    <GreenBadge value={dictionary.components.badges.new} />
                  </ExtendedLink>
                  <Link
                    className="flex items-center -mx-3 px-3 py-2 text-base font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                    href="https://youtu.be/Tr5A5mTp8DY?si=wsu_ZLTBc-LIcLsB"
                    target="_blank"
                  >
                    {dictionary.components.layout.header.discoverUs}
                    <div className="mx-2.5"></div>
                    <FaLink />
                  </Link>
                  <Link
                    className="flex items-center -mx-3 px-3 py-2 text-base font-semibold leading-7 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800"
                    href="https://calendly.com/ulysse-boudey31/coaching-cryptomonnaies-et-web"
                    target="_blank"
                  >
                    {dictionary.components.layout.header.contactUs}
                    <div className="mx-2.5"></div>
                    <FaLink />
                  </Link>
                </div>

                <div className="flex items-center py-6">
                  <ThemesHandler />
                  <div className="mx-2.5"></div>
                  <LocalesHandler
                    enAlt={dictionary.components.handlers.locales.enAlt}
                    frAlt={dictionary.components.handlers.locales.frAlt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
