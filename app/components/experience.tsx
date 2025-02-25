import { MdWork } from "react-icons/md";

const experiences = [
  {
    company: "Hubfy",
    period: "Out 2024 - Presente",
    role: "Front-End Engineer",
    description:
      "Desenvolvendo Front-End com Tailwind, React em uma aplicação Next.js.",
  },
  {
    company: "Autônoma",
    period: "Jan 2022 - Presente",
    role: "Software Engineer",
    description:
      "Como Desenvolvedora Fullstack autônoma, aplicava uma ampla gama de tecnologias para criar soluções web robustas e escaláveis, utilizando conhecimentos tanto em back-end quanto em front-end.",
  },
  {
    company: "Centro Universitário Vale do Salgado",
    period: "Mar 2021 - Fev 2022",
    role: "Desenvolvedora Front-End",
    description:
      "Como Estagiária em Desenvolvimento Front-end na UNIVS, estou começando a minha jornada na criação de interfaces web interativas e responsivas.",
  },
];

export function Experience() {
  return (
    <div className="relative">
      {experiences.map((exp, index) => (
        <div key={index} className="flex gap-6 mb-8">
          <div className="pt-1">
            <MdWork className="text-2xl text-gray-600" />
          </div>

          <div className="flex-1">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <span className="text-sm font-light text-gray-400">
                {exp.period}
              </span>
            </div>

            <div className="mt-2">
              <span className="bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent">
                {exp.role}
              </span>

              <p className="text-gray-400 mt-2 max-w-prose">
                {exp.description}
              </p>
            </div>

            {index !== experiences.length - 1 && (
              <div className="text-3xl tracking-widest text-center rotate-90 mt-4 bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent">
                ...
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
