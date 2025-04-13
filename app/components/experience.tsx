import { MdWork } from "react-icons/md";
import type { Experience } from "~/types";

export function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="relative">
      {experiences?.map((exp, index) => (
        <div key={exp.id} className="mb-8 flex gap-6">
          <div className="pt-1">
            <MdWork className="text-2xl text-gray-600" />
          </div>

          <div className="flex-1">
            <div className="flex flex-row items-center gap-2">
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <span className="text-sm font-light text-gray-400">
                {exp.duration}
              </span>
            </div>

            <div className="mt-2">
              <span className="bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-transparent">
                {exp.position}
              </span>

              <p className="mt-2 max-w-prose text-gray-400">
                {exp.description}
              </p>
            </div>

            {index !== experiences.length - 1 && (
              <div className="mt-4 rotate-90 bg-gradient-to-r from-pink-300 to-purple-300 bg-clip-text text-center text-3xl tracking-widest text-transparent">
                ...
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
