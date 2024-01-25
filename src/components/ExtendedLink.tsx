"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExtendedLink({
  children,
  className,
  href,
}: Readonly<{
  children: React.ReactNode,
  className?: string,
  href: string;
}>) {
  const pathname = usePathname();

  const getNewHref = (): string | undefined => {
    if (!pathname) return;

    const locale = pathname.split('/')[1]
    
    return `/${locale}${href}`
  }

  return (
    <Link
      className={className}
      href={getNewHref() ?? href}
    >
      {children}
    </Link>
  );
}
