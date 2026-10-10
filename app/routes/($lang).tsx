import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { NotFound } from "~/components/not-found";
import { DEFAULT_LANG, getLangFromPath, getTranslations, isLang } from "~/i18n";
import { seo } from "~/lib/seo";

export function loader({ params }: LoaderFunctionArgs) {
  if (params.lang && (!isLang(params.lang) || params.lang === DEFAULT_LANG)) {
    throw new Response(null, { status: 404 });
  }
  return null;
}

export const meta: MetaFunction = ({ error, location }) => {
  if (!error) return [];
  const lang = getLangFromPath(location.pathname);
  const t = getTranslations(lang);
  return seo({
    lang,
    title: t.meta.notFoundTitle,
    description: t.meta.notFoundDescription,
    noIndex: true,
  });
};

export default function LangLayout() {
  return <Outlet />;
}

export function ErrorBoundary() {
  return <NotFound />;
}
