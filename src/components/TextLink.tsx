import { PropsWithChildren } from 'react';
import Link, { LinkProps } from 'next/link';

export default function TextLink({ children, ...props }: PropsWithChildren<LinkProps>) {
  return (
    <Link className="font-bold transition-colors border-b-3 border-transparent hover:border-teal-700 dark:hover:border-teal-200" {...props}>
      {children}
    </Link>
  );
}
