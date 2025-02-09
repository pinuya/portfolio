import { Link, useLoaderData } from "@remix-run/react";
import { ArrowUpRight, SendHorizontal } from "lucide-react";
import { motion, useScroll } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import type { MetaFunction } from "@remix-run/node";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import type { Project } from "~/types";
import { skillIcons } from "~/consts";
import { getProjects, getSkills } from "~/models";
import ScrollIndicator from "~/components/ScrollIndicator";
import { DecoderText } from "~/components/decoder-text";
import ThreeJsParticles from "~/components/ThreeJsParticles.client";
import { ClientOnly } from "~/components/client-only";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Typewriter from "~/components/fancy/typewriter";

export const meta: MetaFunction = () => {
  return [
    { title: "Tifany Nunes" },
    {
      name: "Portfolio contendo informacoes e projetos pessoais de Tifany Nunes",
      content: "Portfolio",
    },
  ];
};

export async function loader() {
  const [projects, skills] = await Promise.all([getProjects(), getSkills()]);

  return {
    projects,
    skills,
  };
}

export default function Main() {
  const { projects, skills } = useLoaderData<typeof loader>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const { scrollYProgress } = useScroll();
  const defaultAnimation = (duration: number) => {
    return {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration },
    };
  };

  const textAnimation = defaultAnimation(2);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <div className="flex flex-col min-h-screen w-full">
      <motion.div
        className="progress-bar z-10"
        style={{ scaleX: scrollYProgress }}
      />
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section
            id="hero"
            className="h-screen flex flex-col items-center justify-center gap-16 pt-20"
          >
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h1 className="text-6xl">Hello World.</h1>
                  <h1 className="text-4xl">
                    I'm{" "}
                    <span className="font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                      Tifany.
                    </span>
                  </h1>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                >
                  <span className="text-gray-400">
                    Web Designer | Software Engineer
                  </span>
                  <p className="text-gray-400 w-96 mt-4">
                    Uma <b>Software Engineer</b> com foco no <b>Front-End</b>.
                    Buscando sempre desenvolver telas robustas e responsivas.
                    Sinto-me confortável projetando meus próprios designs e
                    aplicando-os na prática durante o desenvolvimento. Voce pode
                    conferir meu{" "}
                    <Link to={"/curriculum"}>
                      <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer group">
                        curriculo aqui.
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </span>
                    </Link>{" "}
                    Se você está interessado nas ferramentas e softwares que
                    utilizo, confira minha{" "}
                    <Link to={"/uses"}>
                      <span className="relative bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent cursor-pointer group">
                        página de uso
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </span>
                    </Link>
                    .
                  </p>
                </motion.div>
              </div>

              <motion.img
                src="/pinuya.jpg"
                className="rounded-full"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </div>

            <motion.div
              className="p-20 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 rounded-full animate-pulse" />
            </motion.div>
          </section>

          <section id="projects">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="container mx-auto justify-center items-center px-4 py-12 "
            >
              <h1 className="text-2xl text-foreground tracking-widest uppercase font-semibold">
                <DecoderText text={"Projetos"} delay={500} />
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="mt-4 bg-card text-card-foreground rounded-lg shadow-lg overflow-hidden cursor-pointer transition-transform duration-200 hover:scale-105"
                    onClick={() => setSelectedProject(project)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ")
                        setSelectedProject(project);
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    <img
                      src={project?.image ?? ""}
                      alt={project?.title ?? "Imagem do projeto"}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="text-xl font-semibold mb-2">
                        {project.title ?? "Título do projeto"}
                      </h3>
                      <p className="text-muted-foreground">
                        {project.description ?? "Descrição do projeto"}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <Dialog
                open={selectedProject !== null}
                onOpenChange={() => setSelectedProject(null)}
              >
                {selectedProject && (
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>{selectedProject.title}</DialogTitle>
                      <DialogDescription>
                        <img
                          src={selectedProject.image ?? ""}
                          alt={selectedProject.title ?? "Imagem do projeto"}
                          className="w-full h-48 object-cover rounded-md mb-4"
                        />
                        <p>{selectedProject.details}</p>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 flex justify-between">
                      <div className="flex gap-2">
                        <div>
                          <Link to={selectedProject.link ?? "#"}>
                            <Button className="gap-2" variant={"secondary"}>
                              <FaGithub /> GitHub
                            </Button>
                          </Link>
                        </div>

                        {selectedProject.website && (
                          <div>
                            <Link to={selectedProject.website}>
                              <Button className="gap-2" variant={"secondary"}>
                                <ArrowUpRight className="w-4 h-4" /> Ver Site
                              </Button>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </motion.div>
          </section>
        </main>
      </div>
    </div>
  );
}
