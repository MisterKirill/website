'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import Loader from './Loader';

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme == 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <Loader />;
  }

  return (
    <button className="transition-[transform,background-color] p-3 ease-in-out duration-[150] rounded-full text-teal-700 dark:text-teal-300 hover:bg-teal-200 dark:hover:bg-teal-800 active:scale-90" onClick={switchTheme}>
      {theme == 'dark' ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
}
