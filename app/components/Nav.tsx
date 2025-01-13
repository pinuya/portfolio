import { useState } from "react";
import { Link } from "@remix-run/react";
import { ModeToggle } from "~/components/mode-togle";
import { Menu } from "lucide-react";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "Projetos", href: "/#projects" },
  { name: "Sobre", href: "/#about" },
  // { name: "Contato", href: "/contact" },
  // { name: "Articles", href: "/articles" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-[#09090B]">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <ModeToggle />

        <ul className="hidden md:flex space-x-6">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="relative cursor-pointer group">
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-foreground hover:text-purple-300 focus:outline-none"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <nav className="px-4 pt-2 pb-4 space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground hover:text-purple-400 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
