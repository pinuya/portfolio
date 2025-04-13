import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";

export default function Fallback() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <div className="flex">
        <img src="/assets/anime-eto.gif" alt="eh to" />
        <div>
          <h1 className="mb-4 text-6xl font-bold text-foreground">404</h1>
          <p className="mb-8 text-2xl text-muted-foreground">
            Oops! Page not found
          </p>
          <div className="mx-auto mb-8 max-w-md">
            <p className="text-gray-500">
              A página que você procura pode ter sido removida, ter seu nome
              alterado ou estar temporariamente indisponível.
            </p>
          </div>
        </div>
      </div>

      <Link
        to={"/"}
        className="inline-flex transform items-center gap-2 rounded-md bg-gradient-to-r from-pink-300 to-purple-400 px-4 py-2 text-sm font-medium text-foreground transition-transform duration-300 hover:-translate-y-1 hover:scale-105"
      >
        <ArrowLeft className="h-5 w-5" />
        Volte para inicio
      </Link>
    </div>
  );
}
