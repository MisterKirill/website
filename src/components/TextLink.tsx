import { ReactNode } from 'react';
import Link, { LinkProps } from 'next/link';

interface TextLinkProps extends LinkProps {
  children: ReactNode;
  className?: string;
}

export default function TextLink({ children, className, ...props }: TextLinkProps) {
  return (
    <Link className={`font-bold transition-colors border-b-2 border-transparent hover:border-teal-700 dark:hover:border-teal-200 ${className}`} {...props}>
      {children}
    </Link>
  );
}
