import { motion } from "framer-motion";
import { MdWork } from "react-icons/md";
import type { Experience } from "~/types";

export function Experiences({ experiences }: { experiences: Experience[] }) {
  return (
    <ol className="relative w-full max-w-3xl border-l border-border pl-8 sm:pl-10">
      {experiences?.map((exp, index) => (
        <motion.li
          key={exp.id}
          className="relative mb-12 last:mb-0"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <span className="bg-gradient-brand absolute -left-[48.5px] top-1 flex h-8 w-8 items-center justify-center rounded-full text-white shadow-lg shadow-pink-500/20 ring-4 ring-background sm:-left-[56.5px]">
            <MdWork className="h-4 w-4" />
          </span>

          <div className="rounded-xl border bg-card/60 p-6 backdrop-blur-sm transition-colors hover:border-pink-300/50">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <h3 className="text-xl font-semibold">{exp.company}</h3>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">
                {exp.duration}
              </span>
            </div>

            <span className="text-gradient mt-1 inline-block font-medium">
              {exp.position}
            </span>

            <p className="mt-3 leading-relaxed text-muted-foreground">
              {exp.description}
            </p>
          </div>
        </motion.li>
      ))}
    </ol>
  );
}
