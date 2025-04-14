import { useState } from "react";
import { Link } from "@remix-run/react";
import { ModeToggle } from "~/components/mode-togle";
import { Menu } from "lucide-react";

const menuItems = [
  { name: "Projetos", href: "/#projects" },
  { name: "Sobre", href: "/#about" },
  { name: "Experiência", href: "/#xp" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b bg-white dark:bg-[#09090B]">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <Link
            to={"/"}
            className="cursor-pointer bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-2xl font-semibold text-transparent"
          >
            &lt;Tifany /&gt;
          </Link>
        </div>

        <ul className="hidden space-x-6 md:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="group relative cursor-pointer">
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-pink-300 to-purple-400 transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <ModeToggle />

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="text-foreground hover:text-pink-300 focus:outline-none md:hidden"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Abrir menu</span>
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden">
          <nav className="space-y-2 px-4 pb-4 pt-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block text-foreground transition-colors hover:text-pink-300"
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
