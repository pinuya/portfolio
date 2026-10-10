import { json, type MetaFunction } from "@remix-run/node";
import { NotFound } from "~/components/not-found";
import { getLangFromPath, getTranslations } from "~/i18n";
import { seo } from "~/lib/seo";

// Respond with a real 404 so search engines don't index unknown URLs
export const loader = () => json(null, { status: 404 });

export const meta: MetaFunction = ({ location }) => {
  const lang = getLangFromPath(location.pathname);
  const t = getTranslations(lang);
  return seo({
    lang,
    title: t.meta.notFoundTitle,
    description: t.meta.notFoundDescription,
    noIndex: true,
  });
};

export default function Fallback() {
  return <NotFound />;
}
