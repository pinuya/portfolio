import { Link } from "@remix-run/react";
import { InstagramIcon, LinkedinIcon } from "lucide-react";
import { FaGithub, FaTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="py-6 text-muted-foreground">
      <div className="container flex items-center justify-between">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Tifany Alves{" "}
          <a href={"/aerials.html"} className="underline">
            Aerials
          </a>
          .
        </div>
        <div className="flex items-center space-x-4">
          <Link
            to={"https://github.com/pinuya"}
            className="relative group inline-block"
          >
            <FaGithub className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-gray-800" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            to={"https://www.linkedin.com/in/tifanyanunes/"}
            className="relative group inline-block"
          >
            <LinkedinIcon className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-blue-500" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link
            to={"https://www.instagram.com/imaerials/"}
            className="relative group inline-block"
          >
            <InstagramIcon className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-purple-500" />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            to={"https://x.com/aerialsdev"}
            className="relative group inline-block"
          >
            <FaTwitter className="h-5 w-5 text-muted-foreground transition-all duration-500 group-hover:text-blue-400" />
            <span className="sr-only">X</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
