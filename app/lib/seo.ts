import type { MetaDescriptor } from "@remix-run/node";
import { type Lang, getTranslations, localizePath } from "~/i18n";

export const SITE_URL = "https://pinuya-dev.vercel.app";
export const SITE_NAME = "Tifany Nunes";
export const OG_IMAGE = {
  url: `${SITE_URL}/assets/portfolio.png`,
  width: 1176,
  height: 583,
};

export const SOCIAL_LINKS = [
  "https://github.com/pinuya",
  "https://www.linkedin.com/in/tifanyanunes/",
];

export function seo({
  lang,
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  lang: Lang;
  title: string;
  description?: string;
  /** Path without the language prefix, e.g. "/curriculum" */
  path?: string;
  noIndex?: boolean;
}): MetaDescriptor[] {
  const t = getTranslations(lang);
  description ??= t.meta.description;
  const url = `${SITE_URL}${localizePath(path, lang)}`;

  return [
    { title },
    { name: "description", content: description },
    { name: "author", content: SITE_NAME },
    {
      name: "robots",
      content: noIndex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large",
    },

    { property: "og:type", content: "website" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:locale", content: t.ogLocale },
    {
      property: "og:locale:alternate",
      content: getTranslations(lang === "pt" ? "en" : "pt").ogLocale,
    },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:url", content: url },
    { property: "og:image", content: OG_IMAGE.url },
    { property: "og:image:width", content: String(OG_IMAGE.width) },
    { property: "og:image:height", content: String(OG_IMAGE.height) },
    { property: "og:image:alt", content: t.meta.ogImageAlt },

    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: OG_IMAGE.url },
    { name: "twitter:image:alt", content: t.meta.ogImageAlt },

    ...(noIndex
      ? []
      : [
          { tagName: "link", rel: "canonical", href: url },
          ...hreflangLinks(path),
        ]),
  ];
}

function hreflangLinks(path: string): MetaDescriptor[] {
  return [
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "pt-BR",
      href: `${SITE_URL}${localizePath(path, "pt")}`,
    },
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "en",
      href: `${SITE_URL}${localizePath(path, "en")}`,
    },
    {
      tagName: "link",
      rel: "alternate",
      hrefLang: "x-default",
      href: `${SITE_URL}${localizePath(path, "pt")}`,
    },
  ];
}
