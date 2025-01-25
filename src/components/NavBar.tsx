'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import NavLink from './NavLink';
import ThemeSwitch from './ThemeSwitch';

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const switchMenu = () => {
    setShowMenu((showMenu) => !showMenu);
  };

  return (
    <div className="w-full py-3 fixed left-1/2 -translate-x-1/2 top-0 backdrop-blur-lg shadow">
      <div className="container flex items-center">
        <Link className="text-5xl transition-transform ease-linear hover:scale-110" href="/">
          🐱
        </Link>

        <nav className="hidden md:flex items-center gap-2 mx-auto md:mx-0 md:gap-4 md:ml-auto p-2 transition-colors">
          <NavLink href="/">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <ThemeSwitch />
        </nav>

        {showMenu ? <X className="ml-auto md:hidden" onClick={switchMenu} size={30} /> : <Menu className="ml-auto md:hidden" onClick={switchMenu} size={30} />}
      </div>

      {showMenu && (
        <div className="flex flex-col items-center gap-4 py-4 text-center">
          <NavLink href="/" onClick={switchMenu}>
            About
          </NavLink>
          <NavLink href="/projects" onClick={switchMenu}>
            Projects
          </NavLink>
          <NavLink href="/blog" onClick={switchMenu}>
            Blog
          </NavLink>
          <NavLink href="/contact" onClick={switchMenu}>
            Contact
          </NavLink>

          <ThemeSwitch />
        </div>
      )}
    </div>
  );
}
