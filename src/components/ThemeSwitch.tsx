'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Loader from './Loader';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  const currentTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <button
      className="cursor-pointer transition-[scale,background-color] p-3 ease-in-out duration-150 rounded-full text-teal-700 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-800 active:scale-90"
      onClick={() => setTheme(currentTheme == 'dark' ? 'light' : 'dark')}
    >
      {currentTheme == 'dark' ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
}
