"use client";

import type { Locale } from "@/types";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useWindowSize } from "@/hooks";
import { useDictionary } from "@/hooks/locales";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

export default function Chart({
  locale,
}: Readonly<{
  locale: Locale,
}>) {
  const { theme } = useTheme();
  const dictionary = useDictionary(locale);
  const [width, height] = useWindowSize();
  const [data, setData] = useState<any[]>();

  const insert = (oldString: string, newString: string, index: number) =>
    oldString.slice(0, index) + newString + oldString.slice(index);

  const format = (value: number): string[] => {
    const array = value.toString().split(".");

    let leftSide: number | string = parseInt(array[0]);
    let rightSide: number | string = array[1]?.slice(0, 2) ?? "";
    let formattedValue = "";

    if (leftSide > 10000 && locale === "en") {
      leftSide = insert(leftSide.toString(), ",", 2);
    } else if (leftSide > 1000 && locale == "en") {
      leftSide = insert(leftSide.toString(), ",", 1);
    }

    if (rightSide.length === 2) {
      rightSide = "." + rightSide;
    } else if (rightSide.length === 1) {
      rightSide = "." + rightSide + "0";
    }

    formattedValue = leftSide + rightSide;

    return ["US$" + formattedValue, dictionary.app.rootPage.chart.tooltipFormattedName];
  }

  useEffect(() => {
    console.log(width);

    if (width > 640) {
      import(`../../public/data/desktop.json`)
        .then(module => setData(module.default));
    } else {
      import(`../../public/data/mobile.json`)
        .then(module => setData(module.default));
    }
  }, [locale, width]);

  return theme && data && (
    <LineChart
      data={data}
      height={400}
      margin={{ top: 30, right: 30, left: 30, bottom: 30 }}
      width={900}
      accessibilityLayer
    >
      <XAxis
        dataKey="date"
        interval={365}
        style={{ fill: "#64748b", stroke: "#64748b" }}
      />
      <YAxis style={{ fill: "#64748b", stroke: "#64748b" }} />
      <Line
        activeDot={false}
        dataKey="price"
        dot={false}
        stroke="#4ecdc4"
      />
      <Tooltip
        contentStyle={{
          backgroundColor: theme === "dark" ? "#0f172a" : "#f1f5f9",
          border: "1px solid #64748b",
          borderRadius: "0.5rem"
        }}
        formatter={format}
      />
    </LineChart>
  );
}
