"use client";

import { useEffect, useState } from "react";

export default function useWindowSize(): number[] {
  const [size, setSize] = useState([window.innerWidth, window.innerHeight])

  const resize = () => {
    setSize([window.innerWidth, window.innerHeight])
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
  });

  return size;
}
