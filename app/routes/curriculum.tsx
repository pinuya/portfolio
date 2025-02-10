import { Download } from "lucide-react";
import { ClientOnly } from "~/components/client-only";
import Curriculum from "~/components/Curriculum.client";

export default function curriculum() {
  return (
    <div className="justify-center items-center flex flex-col">
      <div className="pt-4">
        <h1 className="text-4xl text-center">Meu Currículo</h1>

        <span className="text-center text-gray-400 font-xs">
          Fique a vontade para olhar e baixar meu currículo 😀{" "}
        </span>
      </div>

      <div className="flex flex-col items-center justify-start h-screen pt-10 gap-4 shadow-md">
        <div>
          <ClientOnly>{() => <Curriculum />}</ClientOnly>
        </div>
      </div>

      <div className="pt-6">
        <a
          href="/curriculoTifany.pdf"
          download="Curriculo_Tifany_Alves.pdf"
          className="font-semibold flex flex-row gap-4 py-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 px-4 transition duration-300 group hover:shadow-md"
        >
          <Download /> Baixar Currículo
        </a>
      </div>
    </div>
  );
}
