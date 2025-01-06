import { SendHorizontal } from "lucide-react";
import { DecoderText } from "~/components/decoder-text";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Contact() {
  return (
    <div className="h-[84vh] flex items-center justify-center flex-col gap-6 px-4">
      <h1 className="text-4xl text-foreground tracking-wide font-bold text-center">
        <DecoderText text={"Diga olá"} delay={500} />
      </h1>

      <div className="shadow-md rounded-lg p-6 w-full max-w-md flex flex-col gap-4">
        <Input
          type="email"
          placeholder="Seu e-mail"
          className="p-3 border  rounded-md focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <Input
          type="text"
          placeholder="Mensagem"
          className="p-3 border  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <Button className="bg-blue-400 text-white py-3 rounded-md hover:bg-blue-300 hover:scale-105 transition-transform duration-200 flex items-center justify-center gap-2">
          <SendHorizontal /> Enviar
        </Button>
      </div>
    </div>
  );
}

// export default function Contact() {
//   return (
//     <div className="h-[87vh] flex flex-col justify-center items-center gap-4">
//       <img src="/assets/anime-eto.gif" alt="gif" width="300" height="300" />
//       <h1 className="text-2xl font-bold">Em breve...</h1>
//       <span>Página em desenvolvimento</span>
//     </div>
//   );
// }
