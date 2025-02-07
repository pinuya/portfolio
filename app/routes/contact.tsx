import { Link } from "@remix-run/react";
import { SendHorizontal } from "lucide-react";
import { DecoderText } from "~/components/decoder-text";
import MouseMoveEffect from "~/components/mouse-move-effect";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function Contact() {
  return (
    <div className="relative min-h-screen">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-purple-500/10 blur-[100px]" />
      </div>

      <MouseMoveEffect />

      <div className="relative z-10 h-[84vh] flex items-center justify-center flex-col gap-6 px-4">
        <h1 className="text-4xl text-foreground tracking-wide font-bold text-center">
          <DecoderText text={"Diga olá"} delay={500} />
        </h1>

        <div className="rounded-lg w-full max-w-md flex flex-col gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold">
              E-mail:
            </label>
            <Input
              type="email"
              placeholder="example@example.com"
              className="p-3 border  rounded-md focus:outline-none focus:ring-1 focus:custonText"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-semibold">
              Mensagem:
            </label>
            <Input
              type="text"
              placeholder="Insira sua mensagem."
              className="p-3 border  rounded-md focus:outline-none focus:ring-2 focus:custonText"
            />
          </div>

          <Link to={"/contact"}>
            <button
              type="button"
              className="font-semibold relative overflow-hidden bg-transparent text-purple-300 px-4 py-1 transition duration-300 group"
            >
              <span className="absolute inset-0 bg-custonText transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
              <span className="flex flex-row relative gap-2 items-center z-10 text-foreground   ">
                <SendHorizontal />
                Enviar mensagem
              </span>
            </button>
          </Link>
        </div>
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
