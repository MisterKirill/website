"use client";

import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  children,
  ...props
}: PropsWithChildren<LinkProps>) {
  const pathname = usePathname();

  return (
    <Link
      className={`transition-colors ease-in-out duration-[150] py-3 px-5 hover:bg-teal-400 dark:hover:bg-teal-700 rounded-full font-semibold text-teal-700 dark:text-teal-400 ${
        pathname == props.href && "bg-teal-400 dark:bg-teal-700"
      }`}
      suppressHydrationWarning
      {...props}
    >
      {children}
    </Link>
  );
}
