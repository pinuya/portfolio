import { Link, useLoaderData } from "@remix-run/react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa6";
import type { MetaFunction } from "@remix-run/node";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import type { Project } from "~/types";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "~/components/ui/carousel";
import { Skills } from "~/components/skills";
import { Experiences } from "~/components/experience";
import Autoplay from "embla-carousel-autoplay";
import { getProjects } from "~/models/projects";
import { getSkills } from "~/models/skills";
import { getExperiences } from "~/models/experiences";

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
  const [projects, skills, experiences] = await Promise.all([
    getProjects(),
    getSkills(),
    getExperiences(),
  ]);

  return {
    projects,
    skills,
    experiences,
  };
}

export default function Main() {
  const { projects, skills, experiences } = useLoaderData<typeof loader>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-blue-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-cyan-500/10 blur-[100px]" />
      </div>

      <div className="flex flex-col min-h-[100dvh] z-10 ">
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
                    <span className="font-bold bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent">
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
                      <span className="relative bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent cursor-pointer group">
                        curriculo aqui.
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-lime-300 to-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </span>
                    </Link>{" "}
                    Se você está interessado nas ferramentas e softwares que
                    utilizo, confira minha{" "}
                    <Link to={"/uses"}>
                      <span className="relative bg-gradient-to-r from-lime-300 to-cyan-500 bg-clip-text text-transparent cursor-pointer group">
                        página de uso
                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-lime-300 to-cyan-500 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </span>
                    </Link>
                    .
                  </p>
                </motion.div>
              </div>

              <motion.img
                src="/pinuya.jpg"
                className="rounded-full aspect-square w-96"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              />
            </div>

            <motion.div
              className="p-20 hidden flex-col items-center sm:block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="w-1 h-12 bg-gradient-to-b from-lime-300 to-cyan-600 dark:from-lime-400 dark:to-cyan-400 rounded-full animate-pulse" />
            </motion.div>
          </section>

          <motion.section
            id="skills"
            className=" flex flex-col items-center justify-center gap-10 py-10"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <h1 className="text-4xl text-center">Habilidades e experiência</h1>

            <div className="flex flex-col gap-28">
              <Skills />

              <Experiences experiences={experiences} />
            </div>
          </motion.section>

          <section id="projects">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="flex flex-col justify-center items-center"
            >
              <h1 className="text-4xl my-20">Projetos</h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="w-[300px] sm:w-[1280px]"
              >
                <Carousel
                  className="w-full "
                  plugins={[
                    Autoplay({
                      delay: 3000,
                    }),
                  ]}
                >
                  <CarouselContent>
                    {projects.map((project) => (
                      <CarouselItem
                        key={project.id}
                        className="md:basis-1/2 lg:basis-1/3"
                      >
                        <div
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
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
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
                            <Button
                              className="font-medium px-4 py-2 text-foreground rounded-full  transition-colors duration-300"
                              variant={"secondary"}
                            >
                              <FaGithub /> GitHub Repo
                            </Button>
                          </Link>
                        </div>

                        {selectedProject.website && (
                          <div>
                            <Link to={selectedProject.website}>
                              <Button
                                className="font-medium px-4 py-2 bg-gradient-to-r from-lime-300 to-cyan-500 text-white rounded-full transition-colors duration-300 hover:shadow-md"
                                variant={"secondary"}
                              >
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
