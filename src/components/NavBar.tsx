import NavLink from "./NavLink";
import ThemeSwitch from "./ThemeSwitch";

export default function NavBar() {
  return (
    <div className="container flex items-center py-4">
      <span className="text-5xl transition-transform ease-linear hover:scale-110 cursor-default hidden md:block">🐱</span>

      <nav className="flex gap-1 mx-auto md:mx-0 md:ml-auto p-2 bg-teal-300 dark:bg-teal-800 shadow-lg rounded-full backdrop-blur transition-colors">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>

        <ThemeSwitch />
      </nav>
    </div>
  );
}
