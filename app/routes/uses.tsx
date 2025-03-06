import { Link } from "@remix-run/react";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  {
    lang: "Figma",
    desc: "Para o Design eu uso o Figma, é minha principal ferramenta para design de UI atualmente.",
    link: "https://www.figma.com/pt-br/",
  },
  {
    lang: "Visual Studio Code",
    desc: "como meu editor de texto, com o tema Noctis.",
    link: "https://code.visualstudio.com/",
  },
  {
    lang: "React",
    desc: "para mim, é a minha biblioteca JavaScript favorita, e tenho preferência por usá-la em meus projetos.",
    link: "https://react.dev/",
  },
  {
    lang: "Three.JS",
    desc: "para os efeitos 3D, é necessário um conhecimento um pouco avançado, mas, quando você domina, consegue fazer coisas incríveis!",
    link: "https://threejs.org/",
  },
  {
    lang: "TailwindCSS",
    desc: "estou optando por utilizar o TailwindCSS pela sua facilidade de uso, permitindo estilizar diretamente dentro das divs.",
    link: "https://tailwindcss.com/",
  },
  {
    lang: "Framer Motion",
    desc: "para as animações no JavaScript eu utilizo o Framer Motion, é uma ótima maneira de adicionar animações ao React e ao Three.JS.",
    link: "https://motion.dev/",
  },
  {
    lang: "ShadCN",
    desc: "para alguns componentes e temas eu utilizei o ShadCN, são componentes projetados que você pode copiar e colar em seus aplicativos, utilizando o TailwindCSS.",
    link: "https://ui.shadcn.com/",
  },
];

const system = [
  {
    title: "Desktop",
    desc: "Personalizado",
  },
  {
    title: "Sistema operacional",
    desc: "Ubuntu",
  },
  {
    title: "Monitor",
    desc: "LG ultrawide 29um69g",
  },
  {
    title: "Mouse",
    desc: "Logitech G705",
  },
  {
    title: "Teclado",
    desc: "Royal Kludge R75 switch brown",
  },
  {
    title: "Headset",
    desc: "Logitech G435",
  },
];

export default function Uses() {
  const [designTool] = tools;
  const devTools = tools.slice(1);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        <img
          className="fixed left-0 top-0 h-full w-full object-cover opacity-10"
          src="/assets/usesBg.gif"
          width="550"
          height="550"
          alt="background"
        />
      </div>
      <motion.div
        className="container mb-10 flex flex-col gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="my-6">
          <h1 className="text-3xl font-semibold text-foreground">
            Página de Uso
          </h1>
          <p className="mt-4 text-muted-foreground">
            Uma lista um tanto abrangente de ferramentas, aplicativos, hardware
            e muito mais que uso diariamente para projetar e codificar coisas. .
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Design</h1>
          <p className="mt-4 flex flex-wrap text-muted-foreground">
            <ChevronRight className="text-lime-500" /> Para o Design eu uso o
            <Link to={designTool.link}>
              <span className="group relative mx-1 cursor-pointer bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent">
                {designTool.lang}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-lime-300 to-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full" />
              </span>
            </Link>
            {designTool.desc.replace(
              `Para o Design eu uso o ${designTool.lang},`,
              ""
            )}
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Desenvolvimento</h1>
          {devTools.map((tool, index) => (
            <div key={index} className="my-4">
              <p className="flex flex-wrap items-center text-muted-foreground">
                <ChevronRight className="text-lime-500" />
                <Link to={tool.link} className="whitespace-nowrap">
                  <span className="group relative mx-1 cursor-pointer bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent">
                    {tool.lang}
                    <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-lime-300 to-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                  </span>
                </Link>
                <span className="whitespace-normal">
                  {tool.desc.replace(` ${tool.lang},`, "")}
                </span>
              </p>
            </div>
          ))}
        </div>

        <h1 className="text-2xl font-semibold">Sistema</h1>
        {system.map((item, index) => (
          <div key={index} className="flex flex-row justify-between border-b">
            <h1 className="font-semibold text-muted-foreground">
              {item.title}
            </h1>
            <span className="text-muted-foreground">{item.desc}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
