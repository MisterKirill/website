import { PropsWithChildren } from "react";
import Link, { LinkProps } from "next/link";

export default function TextLink({ children, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <Link className="font-semibold text-teal-500 transition-colors border-b-2 border-transparent hover:border-teal-500" {...props}>
      {children}
    </Link>
  );
}
