import { FaHtml5 as Html, FaNodeJs as NodeJs } from "react-icons/fa6";
import { IoLogoCss3 as CssIcon } from "react-icons/io";
import {
  DiJavascript as Javascript,
  DiMongodb as Database,
} from "react-icons/di";
import { FaReact as ReactIcon, FaJava as Java } from "react-icons/fa";
import {
  SiNextdotjs as NextJs,
  SiExpress as Server,
  SiNestjs as NestJs,
  SiKubernetes as Kubernate,
} from "react-icons/si";
import {
  RiTailwindCssFill as Tailwind,
  RiRemixRunFill as Remix,
  RiSupabaseFill as Supabase,
} from "react-icons/ri";
import { GrMysql as Sql } from "react-icons/gr";
import {
  FaGitAlt as Git,
  FaDocker as Docker,
  FaCloud as CloudCog,
  FaFigma as Figma,
} from "react-icons/fa";
import { VscVscode as VsCode } from "react-icons/vsc";
import type React from "react";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ElementType;
}

const SkillCategory = ({
  title,
  skills,
  index,
}: {
  title: string;
  skills: Skill[];
  index: number;
}) => (
  <motion.div
    className="rounded-xl border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-pink-300/50"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
      {title}
    </h3>
    <ul className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <li
          key={skill.name}
          className="group flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1.5 text-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-300/60 hover:shadow-md hover:shadow-pink-500/10"
        >
          <skill.icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-pink-500 dark:group-hover:text-pink-300" />
          {skill.name}
        </li>
      ))}
    </ul>
  </motion.div>
);

export function Skills() {
  const frontendSkills: Skill[] = [
    { name: "HTML", icon: Html },
    { name: "CSS", icon: CssIcon },
    { name: "JavaScript", icon: Javascript },
    { name: "React", icon: ReactIcon },
    { name: "Next.js", icon: NextJs },
    { name: "Remix", icon: Remix },
    { name: "Tailwind CSS", icon: Tailwind },
  ];

  const backendSkills: Skill[] = [
    { name: "Node.js", icon: NodeJs },
    { name: "NestJS", icon: NestJs },
    { name: "Express", icon: Server },
    { name: "Java", icon: Java },
    { name: "Supabase", icon: Supabase },
    { name: "SQL", icon: Sql },
    { name: "MongoDB", icon: Database },
  ];

  const devopsSkills: Skill[] = [
    { name: "Git", icon: Git },
    { name: "Docker", icon: Docker },
    { name: "CI/CD", icon: CloudCog },
    { name: "Kubernetes", icon: Kubernate },
  ];

  const toolsSkills: Skill[] = [
    { name: "VS Code", icon: VsCode },
    { name: "Figma", icon: Figma },
  ];

  return (
    <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
      <SkillCategory index={0} title="Frontend" skills={frontendSkills} />
      <SkillCategory index={1} title="Backend" skills={backendSkills} />
      <SkillCategory index={2} title="DevOps" skills={devopsSkills} />
      <SkillCategory index={3} title="Tools" skills={toolsSkills} />
    </div>
  );
}
