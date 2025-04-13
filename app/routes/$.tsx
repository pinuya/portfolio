import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";

export default function Fallback() {
  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <>
        <img
          src="/assets/anime-eto.gif"
          alt="eh to"
          className="pointer-events-none absolute w-32 animate-screensaver opacity-30"
          style={{ top: "10%", left: "10%", animationDelay: "0s" }}
        />

        <img
          src="/assets/anime-eto.gif"
          alt="eh to"
          className="pointer-events-none absolute w-24 animate-screensaver opacity-30"
          style={{ top: "30%", left: "60%", animationDelay: "5s" }}
        />

        <img
          src="/assets/anime-eto.gif"
          alt="eh to"
          className="pointer-events-none absolute w-28 animate-screensaver opacity-30"
          style={{ top: "50%", left: "30%", animationDelay: "10s" }}
        />
      </>

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-center text-white">
        <h1 className="mb-4 text-6xl font-bold">404</h1>
        <p className="mb-8 text-2xl text-muted-foreground">
          Oops! Page not found
        </p>
        <div className="mx-auto mb-8 max-w-md text-gray-300">
          <p>
            A página que você procura pode ter sido removida, ter seu nome
            alterado ou estar temporariamente indisponível.
          </p>
        </div>

        <Link
          to={"/"}
          className="inline-flex transform items-center gap-2 rounded-md bg-gradient-to-r from-pink-300 to-purple-400 px-4 py-2 text-sm font-medium text-black transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
        >
          <ArrowLeft className="h-5 w-5" />
          Volte para início
        </Link>
      </div>
    </div>
  );
}
