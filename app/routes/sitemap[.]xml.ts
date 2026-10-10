import { languages, localizePath } from "~/i18n";
import { SITE_URL } from "~/lib/seo";

const pages = [
  { path: "/", changefreq: "monthly", priority: "1.0" },
  { path: "/curriculum", changefreq: "monthly", priority: "0.8" },
];

const hrefLang = { pt: "pt-BR", en: "en" } as const;

export function loader() {
  const urls = pages
    .flatMap((page) =>
      languages.map((lang) => {
        const alternates = languages
          .map(
            (alt) =>
              `    <xhtml:link rel="alternate" hreflang="${hrefLang[alt]}" href="${SITE_URL}${localizePath(page.path, alt)}"/>`,
          )
          .join("\n");

        return `  <url>
    <loc>${SITE_URL}${localizePath(page.path, lang)}</loc>
${alternates}
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
      }),
    )
    .join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
