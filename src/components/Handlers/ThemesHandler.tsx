"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FaBitcoin, FaMoon, FaSun } from "react-icons/fa6";

export default function ThemesHandler() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, [theme]);

  return (
    <div className="inline-flex items-center px-1 h-12 rounded-lg shadow-lg ring-1 ring-slate-500 bg-slate-200 dark:bg-slate-800 lg:bg-slate-100 dark:lg:bg-slate-900">
      {isMounted ? (
        <button
          className="mx-1 p-2 rounded-lg bg-slate-300 dark:bg-slate-700 lg:bg-slate-200 hover:bg-slate-200 dark:hover:bg-slate-600 lg:hover:bg-slate-300 dark:lg:hover:bg-slate-700"
          onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}
        >
          {theme === "dark" ? <FaSun /> : <FaMoon />}
        </button>
      ) : (
        <div className="animate-pulse mx-1 p-2 rounded-lg">
          <FaBitcoin />
        </div>
      )}
    </div>
  );
}
