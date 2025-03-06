import { MdWork } from "react-icons/md";
import type { Experience } from "~/types";

export function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative">
      {experiences?.map((exp, index) => (
        <div key={exp.id} className="flex gap-6 mb-8">
          <div className="pt-1">
            <MdWork className="text-2xl text-gray-600" />
          </div>

          <div className="flex-1">
            <div className="flex flex-row gap-2 items-center">
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <span className="text-sm font-light text-gray-400">
                {exp.duration}
              </span>
            </div>

            <div className="mt-2">
              <span className="bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent">
                {exp.position}
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
