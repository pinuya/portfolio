import { Link } from "@remix-run/react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative z-10 border-t border-border/60 py-6">
      <div className="container mx-auto flex flex-row items-center justify-between gap-4 px-4">
        <div className="text-sm text-muted-foreground">
          &copy; {year} Tifany Nunes
        </div>

        <div className="flex items-center space-x-4">
          <Link
            to="https://github.com/pinuya"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-block"
          >
            <FaGithub className="h-5 w-5 text-muted-foreground transition-all duration-500 hover:text-pink-400" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/tifanyanunes/"
            target="_blank"
            rel="noreferrer"
            className="group relative inline-block"
          >
            <FaLinkedin className="h-5 w-5 text-muted-foreground transition-all duration-500 hover:text-pink-400" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}
