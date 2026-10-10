import { useState } from "react";
import { Link } from "@remix-run/react";
import { ModeToggle } from "~/components/mode-togle";
import { LanguageToggle } from "~/components/language-toggle";
import { Menu, X } from "lucide-react";
import { localizePath, useLang } from "~/i18n";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const { lang, t } = useLang();
  const menuItems = [
    { name: t.nav.projects, href: localizePath("/#projects", lang) },
    { name: t.nav.about, href: localizePath("/#about", lang) },
    { name: t.nav.experience, href: localizePath("/#xp", lang) },
  ];
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-lg">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <div>
          <Link
            to={localizePath("/", lang)}
            className="text-gradient cursor-pointer text-2xl font-semibold"
          >
            &lt;Tifany /&gt;
          </Link>
        </div>

        <ul className="hidden space-x-8 text-sm text-muted-foreground md:flex">
          {menuItems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="group relative cursor-pointer py-1 transition-colors hover:text-foreground">
                  {item.name}
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-brand transition-all duration-300 ease-in-out group-hover:w-full" />
                </span>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <ModeToggle />

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            className="rounded-md p-2 text-foreground transition-colors hover:text-pink-400 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">{isOpen ? t.nav.closeMenu : t.nav.openMenu}</span>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="border-t border-border/60 md:hidden">
          <nav className="container mx-auto flex flex-col gap-1 px-4 py-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="rounded-md px-2 py-2 text-foreground transition-colors hover:bg-muted hover:text-pink-400"
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
