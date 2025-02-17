import { Link } from "@remix-run/react";
import { ArrowLeft } from "lucide-react";

export default function Fallback() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex">
        <img src="/assets/anime-eto.gif" alt="eh to" />
        <div>
          <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
          <p className="text-2xl text-muted-foreground mb-8">
            Oops! Page not found
          </p>
          <div className="max-w-md mx-auto mb-8">
            <p className="text-gray-500">
              A página que você procura pode ter sido removida, ter seu nome
              alterado ou estar temporariamente indisponível.
            </p>
          </div>
        </div>
      </div>

      <Link
        to={"/"}
        className="inline-flex bg-gradient-to-r from-blue-500 to-purple-500 gap-2 items-center px-4 py-2 text-sm font-medium text-foreground rounded-md transition-transform duration-300 transform hover:scale-105 hover:-translate-y-1"
      >
        <ArrowLeft className="w-5 h-5" />
        Volte para inicio
      </Link>
    </div>
  );
}
