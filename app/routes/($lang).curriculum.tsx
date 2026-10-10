import { Download } from "lucide-react";
import { ClientOnly } from "~/components/client-only";
import Curriculum from "~/components/Curriculum.client";
import type { MetaFunction } from "@remix-run/node";
import { seo } from "~/lib/seo";
import { getLangFromPath, getTranslations, useLang } from "~/i18n";

export const meta: MetaFunction = ({ location }) => {
  const lang = getLangFromPath(location.pathname);
  const t = getTranslations(lang);
  return seo({
    lang,
    title: t.meta.curriculumTitle,
    description: t.meta.curriculumDescription,
    path: "/curriculum",
  });
};

export default function curriculum() {
  const { t } = useLang();

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-4">
        <h1 className="text-center text-4xl">{t.curriculum.title}</h1>

        <span className="font-xs text-center text-gray-400">
          {t.curriculum.subtitle}
        </span>
      </div>

      <div className="flex h-screen flex-col items-center justify-start gap-4 pt-10 shadow-md">
        <div>
          <ClientOnly>{() => <Curriculum />}</ClientOnly>
        </div>
      </div>

      <div className="pt-6">
        <a
          href="/curriculoTifany.pdf"
          download="Curriculo_Tifany_Alves.pdf"
          className="inline-flex transform items-center gap-2 rounded-md bg-gradient-to-r from-pink-300 to-purple-400 px-4 py-2 text-sm font-medium text-foreground transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <Download /> {t.curriculum.download}
        </a>
      </div>
    </div>
  );
}
