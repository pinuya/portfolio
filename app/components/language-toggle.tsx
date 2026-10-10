import { Link, useLocation } from "@remix-run/react";
import { type Lang, languages, localizePath, stripLang, useLang } from "~/i18n";
import { cn } from "~/lib/utils";

export function LanguageToggle() {
  const { lang, t } = useLang();
  const { pathname, hash } = useLocation();
  const basePath = stripLang(pathname);

  return (
    <nav
      aria-label={t.language.label}
      className="flex items-center rounded-full border bg-background/60 p-0.5 text-xs font-medium"
    >
      {languages.map((code: Lang) => (
        <Link
          key={code}
          to={`${localizePath(basePath, code)}${hash}`}
          hrefLang={code === "pt" ? "pt-BR" : "en"}
          aria-current={code === lang ? "true" : undefined}
          title={code === lang ? undefined : t.language.switchTo}
          preventScrollReset={true}
          className={cn(
            "rounded-full px-2.5 py-1 uppercase transition-colors",
            code === lang
              ? "bg-gradient-brand text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {code}
        </Link>
      ))}
    </nav>
  );
}
