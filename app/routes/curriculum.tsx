import { Download } from "lucide-react";
import { ClientOnly } from "~/components/client-only";
import Curriculum from "~/components/Curriculum.client";

export default function curriculum() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="pt-4">
        <h1 className="text-center text-4xl">Meu Currículo</h1>

        <span className="font-xs text-center text-gray-400">
          Fique a vontade para olhar e baixar meu currículo 😀{" "}
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
          <Download /> Baixar Currículo
        </a>
      </div>
    </div>
  );
}
