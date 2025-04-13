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
import Typewriter from "fancy/components/text/typewriter";
import { DecoderText } from "~/components/decoder-text";
import { VisibleDecoderText } from "~/components/decoder-text/VisibleDecoderText";
import MediaBetweenText from "fancy/components/blocks/media-between-text";
import useScreenSize from "../../hooks/useScreenSize";

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
  const screenSize = useScreenSize();
  const { projects, experiences } = useLoaderData<typeof loader>();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="flex min-h-screen w-full flex-col">
      {/* Background gradients */}
      <div className="pointer-events-none fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-pink-500/10 blur-[100px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-pink-500/10 blur-[100px]" />
      </div>

      <div className="z-10 flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          <section
            id="hero"
            className="flex min-h-screen w-full flex-col items-center justify-center px-4 py-20"
          >
            <h1 className="font-semibold uppercase tracking-widest text-muted-foreground md:text-xl">
              <DecoderText text={"Tifany Nunes"} delay={500} />
            </h1>
            <p className="whitespace-pre-wrap text-center text-4xl font-semibold sm:text-5xl md:text-7xl">
              <span>{"Front-End Developer"}</span>
              <Typewriter
                text={["+ Developer", "+ Web Designer", "+ Software Engineer"]}
                speed={70}
                className="text-pink-300"
                waitTime={1500}
                deleteSpeed={40}
                cursorChar={"_"}
              />
            </p>
          </section>

          <div className="flex w-full justify-center py-10">
            <motion.div
              className="hidden flex-col items-center sm:flex"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <div className="h-12 w-1 animate-pulse rounded-full bg-gradient-to-b from-pink-300 to-purple-600 dark:from-pink-400 dark:to-purple-400" />
            </motion.div>
          </div>
          <section id="projects" className="w-full px-4 py-24">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className="container mx-auto flex flex-col items-center justify-center"
            >
              <h1 className="mb-12 text-center text-3xl uppercase tracking-widest">
                <DecoderText text={"Projetos"} delay={500} />
              </h1>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="w-full max-w-7xl px-4"
              >
                <Carousel
                  className="w-full"
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
                          className="mt-4 cursor-pointer overflow-hidden rounded-lg bg-card text-card-foreground shadow-lg transition-transform duration-200 hover:scale-105"
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
                            className="h-48 w-full object-cover"
                          />
                          <div className="p-4">
                            <h3 className="mb-2 text-xl font-semibold">
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

              {/* Project Dialog */}
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
                          className="mb-4 h-48 w-full rounded-md object-cover"
                        />
                        <p>{selectedProject.details}</p>
                      </DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 flex flex-wrap justify-between gap-2">
                      <div className="flex flex-wrap gap-2">
                        <div>
                          <Link to={selectedProject.link ?? "#"}>
                            <Button
                              className="rounded-full px-4 py-2 font-medium text-foreground transition-colors duration-300"
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
                                className="rounded-full bg-gradient-to-r from-pink-300 to-purple-400 px-4 py-2 font-medium text-white transition-colors duration-300 hover:shadow-md"
                                variant={"secondary"}
                              >
                                <ArrowUpRight className="h-4 w-4" /> Ver Site
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

          <section
            id="about"
            className="w-full bg-pink-100 bg-opacity-5 px-4 py-24"
          >
            <div className="container mx-auto">
              <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between lg:gap-16">
                <div className="mb-10 max-w-xl lg:mb-0">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <h1 className="text-2xl font-semibold">
                      Hello World ✨ I'm{" "}
                      <span className="bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text font-bold text-transparent">
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
                    <p className="mt-4 text-gray-400">
                      Uma <b>Software Engineer</b> com foco em <b>Front-End</b>.
                      Atualmente moro no Brasil e atuo como desenvolvedora
                      Front-End Jr na{" "}
                      <Link
                        to={
                          "https://www.linkedin.com/company/utrip/posts/?feedView=all"
                        }
                      >
                        <span className="cursor-pointer bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                          Utrip
                        </span>
                      </Link>
                      . Meus projetos envolvem design de UX, animações de UI e
                      ilustração de ícones. Minha familiaridade com código me
                      permite prototipar e validar experiências de forma ágil.
                      Busco sempre desenvolver interfaces robustas e
                      responsivas. Sinto-me à vontade para criar meus próprios
                      designs e implementá-los durante o desenvolvimento. Você
                      pode conferir meu{" "}
                      <Link to={"/curriculum"}>
                        {" "}
                        <span className="cursor-pointer bg-gradient-to-r from-pink-300 to-purple-400 bg-clip-text text-transparent">
                          {" "}
                          currículo aqui.{" "}
                        </span>{" "}
                      </Link>{" "}
                      Adoro adicionar easter eggs nas minhas aplicações, então…
                      boa sorte procurando alguns no meu portfólio! :3
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="w-full max-w-md"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                >
                  <img
                    src="/pinuya.jpg"
                    className="w-full rounded-xl shadow-lg"
                    alt="Tifany Nunes"
                  />
                </motion.div>
              </div>
            </div>
          </section>

          <motion.section
            id="xp"
            className="w-full px-4 py-24"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
          >
            <div className="container mx-auto">
              <h1 className="mb-16 text-center text-3xl uppercase tracking-widest">
                <VisibleDecoderText
                  text={"Experiência e habilidades"}
                  delay={500}
                />
              </h1>

              <div className="flex flex-col items-center gap-24">
                <Experiences experiences={experiences} />
                <Skills />
              </div>
            </div>
          </motion.section>

          <section className="flex flex-col items-center justify-center">
            <a
              href="https://github.com/pinuya"
              target="_blank"
              rel="noreferrer"
            >
              <MediaBetweenText
                firstText="Obrigada pela ("
                secondText=") visita!"
                mediaUrl={"/godbye.gif"}
                mediaType="image"
                triggerType="hover"
                mediaContainerClassName="mx-px mt-1 h-[30px] w-full overflow-hidden sm:mx-2 sm:mt-4 sm:h-[100px]"
                className="flex w-full cursor-pointer flex-row items-center justify-center text-2xl font-light lowercase text-pink-300 sm:text-4xl"
                animationVariants={{
                  initial: { width: 0 },
                  animate: {
                    width: screenSize.lessThan("sm") ? "30px" : "100px",
                    transition: { duration: 0.4, type: "spring", bounce: 0 },
                  },
                }}
              />
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
