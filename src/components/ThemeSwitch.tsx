"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  const switchTheme = () => {
    setTheme(theme == "dark" ? "light" : "dark");
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button className="px-3 transition-colors ease-in-out duration-[150] rounded-full text-teal-700 dark:text-teal-400 hover:bg-teal-400 dark:hover:bg-teal-700" onClick={switchTheme}>
      {theme == "dark" ? <Sun size={25} /> : <Moon size={25} />}
    </button>
  );
}
