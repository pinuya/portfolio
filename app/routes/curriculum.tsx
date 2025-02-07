import { Download } from "lucide-react";
import { ClientOnly } from "~/components/client-only";
import Curriculum from "~/components/Curriculum.client";
import { DecoderText } from "~/components/decoder-text";

export default function curriculum() {
  return (
    <div className="justify-center items-center flex flex-col">
      <h1 className="text-2xl text-foreground tracking-widest text-center uppercase font-semibold">
        <DecoderText text={"Meu Curriculo"} delay={500} />
      </h1>

      <span className="text-center text-gray-400 font-xs">
        Fique a vontade para olhar e baixar meu curriculo 😀{" "}
      </span>
      <div className="flex flex-col items-center justify-start h-screen pt-10 gap-4">
        <a
          href="/curriculoTifany.pdf"
          download="Curriculo_Tifany_Alves.pdf"
          className="font-semibold relative overflow-hidden bg-transparent text-custonText px-4 py-1 transition duration-300 group"
        >
          <span className="absolute inset-0 bg-custonText transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
          <span className="flex flex-row relative gap-2 items-center z-10 text-foreground ">
            <Download /> Baixar Currículo
          </span>
        </a>
        <div>
          <ClientOnly>{() => <Curriculum />}</ClientOnly>
        </div>
      </div>
    </div>
  );
}
