import NavLink from './NavLink';
import ThemeSwitch from './ThemeSwitch';

export default function NavBar() {
  return (
    <div className="w-full py-3 fixed left-1/2 -translate-x-1/2 top-0 backdrop-blur-lg shadow">
      <div className="container flex items-center">
        <span className="text-5xl transition-transform ease-linear hover:scale-110 cursor-default">🐱</span>

        <nav className="flex items-center gap-4 mx-auto md:mx-0 md:ml-auto p-2 transition-colors">
          <NavLink href="/">About</NavLink>
          <NavLink href="/projects">Projects</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>

          <ThemeSwitch />
        </nav>
      </div>
    </div>
  );
}
