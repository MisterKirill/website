import { ReactNode } from 'react';

export default function Highlight({ children }: { children: ReactNode }) {
  return <span className="text-teal-500 dark:text-teal-400">{children}</span>;
}
