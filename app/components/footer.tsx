import { Link } from "@remix-run/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa6";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-6 text-muted-foreground">
      <div className="container flex items-center justify-between">
        <div className="text-sm">&copy; {year} Tifany Alves</div>
        <div className="flex items-center space-x-4">
          <Link
            to={"https://github.com/pinuya"}
            className="relative group inline-block"
          >
            <FaGithub className="h-5 w-5 text-muted-foreground transition-all duration-500 hover:text-custonText" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/tifanyanunes/"}
            className="relative group inline-block"
          >
            <FaLinkedin className="h-5 w-5 text-muted-foreground transition-all duration-500 hover:text-custonText" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            to={"https://www.instagram.com/pinuyami/"}
            className="relative group inline-block"
          >
            <FaInstagram className="h-5 w-5 text-muted-foreground transition-all duration-500 hover:text-custonText" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            to={"https://x.com/pinuyami"}
            className="relative group inline-block"
          >
            <FaTwitter className="h-5 w-5 text-muted-foreground transition-all duration-500 hover:text-custonText" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
