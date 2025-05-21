import {
  FaFigma,
  FaGithub,
  FaGitlab,
  FaNodeJs,
  FaPython,
} from "react-icons/fa6";
import { DiJavascript, DiVisualstudio } from "react-icons/di";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  RiNextjsFill,
  RiRemixRunFill,
  RiSupabaseFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiExpress, SiPostgresql, SiTypescript, SiVite } from "react-icons/si";
import { GiJesterHat } from "react-icons/gi";

export const skillIcons = {
  javaScript: () => <DiJavascript className="h-6 w-6 text-primary" />,
  typeScript: () => <SiTypescript className="h-6 w-6 text-primary" />,
  react: () => <FaReact className="h-6 w-6 text-primary" />,
  "Node.js": () => <FaNodeJs className="h-6 w-6 text-primary" />,
  docker: () => <FaDocker className="h-6 w-6 text-primary" />,
  postgres: () => <SiPostgresql className="h-6 w-6 text-primary" />,
  tailwindCss: () => <RiTailwindCssFill className="h-6 w-6 text-primary" />,
  remix: () => <RiRemixRunFill className="h-6 w-6 text-primary" />,
  vite: () => <SiVite className="h-6 w-6 text-primary" />,
  "Next.js": () => <RiNextjsFill className="h-6 w-6 text-primary" />,
  express: () => <SiExpress className="h-6 w-6 text-primary" />,
  git: () => <FaGithub className="h-6 w-6 text-primary" />,
  "Visual Studio Code": () => (
    <DiVisualstudio className="h-6 w-6 text-primary" />
  ),
  figma: () => <FaFigma className="h-6 w-6 text-primary" />,
  supabase: () => <RiSupabaseFill className="h-6 w-6 text-primary" />,
  gitLab: () => <FaGitlab className="h-6 w-6 text-primary" />,
  gitHub: () => <FaGithub className="h-6 w-6 text-primary" />,
  python: () => <FaPython className="h-6 w-6 text-primary" />,
  jest: () => <GiJesterHat className="h-6 w-6 text-primary" />,
};
