import { Check, Monitor, Moon, Sun } from "lucide-react";
import { Theme, useTheme } from "remix-themes";

import { useLang } from "~/i18n";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setTheme, { definedBy }] = useTheme();
  const { t } = useLang();

  const options = [
    { value: Theme.LIGHT, label: t.theme.light, icon: Sun },
    { value: Theme.DARK, label: t.theme.dark, icon: Moon },
    { value: null, label: t.theme.system, icon: Monitor },
  ];
  const selected = definedBy === "SYSTEM" ? null : theme;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild={true}>
        <Button variant="ghost" size="icon" aria-label={t.theme.label}>
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[9rem]">
        {options.map(({ value, label, icon: Icon }) => (
          <DropdownMenuItem
            key={label}
            onClick={() => setTheme(value)}
            className="cursor-pointer gap-2"
          >
            <Icon className="h-4 w-4" />
            {label}
            {selected === value && (
              <Check className="ml-auto h-4 w-4 text-pink-500 dark:text-pink-300" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
