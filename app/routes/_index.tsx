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

export const meta: MetaFunction = () => {
  return [
    { title: "AERIALS" },
    {
      name: "Portfolio contendo informacoes e projetos pessoais de Tifany Alves",
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
            id="home"
            className="w-full h-screen py-12 md:py-24 lg:py-32"
          >
            <div className=" container flex">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 w-full">
                <div className="flex flex-col justify-center items-center space-y-4">
                  <motion.div {...textAnimation} className="space-y-2 ">
                    <h1 className="self-start text-2xl text-muted-foreground tracking-widest uppercase">
                      <DecoderText text={"Tifany Nunes"} delay={500} />
                    </h1>
                    <p className="text-3xl text-secondary-foreground font-semibold tracking-tighter sm:text-5xl xl:text-6xl/none">
                      Software Engineer
                    </p>
                  </motion.div>
                </div>

                <div className="h-[600px]">
                  <ClientOnly>{() => <ThreeJsParticles />}</ClientOnly>
                </div>
              </div>

              <ScrollIndicator />
            </div>
          </section>

          <section id="projects">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="container mx-auto px-4 py-12"
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

          <section id="about">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="container mx-auto px-4 py-12"
            >
              <h1 className="text-2xl text-foreground tracking-widest uppercase font-semibold">
                <DecoderText text={"Olá"} delay={500} />
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="flex items-center justify-between flex-col sm:flex-row"
              >
                <div className="max-w-lg text-muted-foreground">
                  <div className="gap-4 flex flex-col tracking-wide">
                    <p>
                      Meu nome é Tifany, atualmente moro no Brasil. Sou formada
                      em Analise e Desenvolvimento de Sistemas, atualmente sendo
                      uma Software Engineer com foco no Front-End. Buscando
                      sempre desenvolver telas robustas e responsivas. Voce pode
                      conferir meu{" "}
                      <Link to={"/curriculum"}>
                        <span className="relative text-blue-300 cursor-pointer group">
                          curriculo aqui
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full" />
                        </span>
                      </Link>
                      .
                    </p>
                    <p>
                      Sinto-me confortável projetando meus próprios designs e
                      aplicando-os na prática durante o desenvolvimento. Se você
                      está interessado nas ferramentas e softwares que utilizo,
                      confira minha{" "}
                      <Link to={"/uses"}>
                        <span className="relative text-blue-300 cursor-pointer group">
                          página de uso
                          <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-300 transition-all duration-300 ease-in-out group-hover:w-full" />
                        </span>
                      </Link>
                      .
                    </p>
                    <p>
                      Nas horas vagas gosto de jogar Roblox, Genshin, LoL e
                      coleciono Sylvanian Families. Estou sempre disposta a
                      ouvir sobre novos projetos entao fique à vontade para me
                      escrever.
                    </p>
                    <a href="/contact">
                      <button
                        type="button"
                        className="font-semibold relative overflow-hidden bg-transparent text-blue-500 px-4 py-1 transition duration-300 group"
                      >
                        <span className="absolute inset-0 bg-blue-500 bg-opacity-50 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-left" />
                        <span className="flex flex-row relative gap-2 items-center z-10 text-foreground   ">
                          <SendHorizontal />
                          Envie uma mensagem
                        </span>
                      </button>
                    </a>
                  </div>
                </div>

                <div className="relative p-10 sm:p-0">
                  <p className="absolute rotate-90 top-32 -right-48 font-bold text-9xl text-foreground sm:-right-60">
                    アンテナ
                  </p>

                  <motion.img
                    src="/assets/aerials.jpg"
                    width="550"
                    height="550"
                    alt="aerials profile"
                  />
                </div>
              </motion.div>
            </motion.div>
          </section>

          <section
            id="skills"
            className="container mx-auto py-12 md:py-16 lg:py-20"
          >
            <div className="space-y-6 md:space-y-8 lg:space-y-10">
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
                <div className="flex flex-col items-center gap-2">
                  <Carousel
                    plugins={[
                      Autoplay({
                        delay: 1500,
                      }),
                    ]}
                    className="w-full"
                  >
                    <CarouselContent className="-ml-4">
                      {skills.map((s, index) => (
                        <CarouselItem
                          key={index}
                          className="pl-1 basis-1/6 md:basis-1/2 lg:basis-1/12"
                        >
                          <div className="p-1">
                            <span className="text-2xl font-semibold">
                              {skillIcons[
                                s.title as keyof typeof skillIcons
                              ]?.()}
                            </span>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </Carousel>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
