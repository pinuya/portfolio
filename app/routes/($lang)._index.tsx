import { Link, useLoaderData } from "@remix-run/react"
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react"
import { motion } from "framer-motion"
import { FaGithub, FaLinkedin } from "react-icons/fa6"
import type { MetaFunction } from "@remix-run/node"
import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog"
import { Button } from "~/components/ui/button"
import type { Project } from "~/types"
import { Skills } from "~/components/skills"
import { Experiences } from "~/components/experience"
import { SectionHeading } from "~/components/section-heading"
import { ProjectImage } from "~/components/project-image"
import { getProjects } from "~/models/projects"
import { getSkills } from "~/models/skills"
import { getExperiences } from "~/models/experiences"
import Typewriter from "fancy/components/text/typewriter"
import { DecoderText } from "~/components/decoder-text"
import MediaBetweenText from "fancy/components/blocks/media-between-text"
import useScreenSize from "../../hooks/useScreenSize"
import { SITE_NAME, SITE_URL, SOCIAL_LINKS, seo } from "~/lib/seo"
import { getLangFromPath, getTranslations, localizePath, useLang } from "~/i18n"

export const meta: MetaFunction = ({ location }) => {
  const lang = getLangFromPath(location.pathname)
  const t = getTranslations(lang)

  return [
    ...seo({ lang, title: t.meta.homeTitle }),
    {
      "script:ld+json": {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Person",
            "@id": `${SITE_URL}/#person`,
            name: SITE_NAME,
            url: SITE_URL,
            image: `${SITE_URL}/pinuya.jpg`,
            jobTitle: t.meta.jobTitle,
            description: t.meta.description,
            sameAs: SOCIAL_LINKS,
            knowsAbout: [
              "React",
              "Remix",
              "Next.js",
              "TypeScript",
              "JavaScript",
              "Tailwind CSS",
              "Node.js",
              "NestJS",
              "Java",
              "Supabase",
              "UI Design",
              "UX Design",
            ],
            address: { "@type": "PostalAddress", addressCountry: "BR" },
          },
          {
            "@type": "WebSite",
            "@id": `${SITE_URL}/#website`,
            url: SITE_URL,
            name: SITE_NAME,
            inLanguage: t.htmlLang,
            author: { "@id": `${SITE_URL}/#person` },
          },
        ],
      },
    },
  ]
}

export async function loader() {
  const [projects, skills, experiences] = await Promise.all([
    getProjects(),
    getSkills(),
    getExperiences(),
  ])

  return {
    projects,
    skills,
    experiences,
  }
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
} as const

export default function Main() {
  const screenSize = useScreenSize()
  const { projects, experiences } = useLoaderData<typeof loader>()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const { lang, t } = useLang()

  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[120px]" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[120px]" />
      </div>

      <div className="z-10 flex min-h-[100dvh] flex-col">
        <main className="flex-1">
          <section
            id="hero"
            className="relative flex min-h-[calc(100dvh-5rem)] w-full flex-col items-center justify-center overflow-hidden px-4 py-20">
            <div className="bg-grid pointer-events-none absolute inset-0" />

            <motion.div
              className="relative flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}>
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border bg-background/60 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-pink-500" />
                </span>
                {t.hero.badge}
              </span>

              <h1 className="mb-4 font-semibold uppercase tracking-[0.3em] text-muted-foreground md:text-xl">
                <DecoderText text={"Tifany Nunes"} delay={500} />
              </h1>
              <p className="whitespace-pre-wrap text-center text-4xl font-semibold tracking-tight sm:text-5xl md:text-7xl">
                <span>{"Front-End Developer"}</span>
                <br />
                <Typewriter
                  text={[
                    "+ Developer",
                    "+ Web Designer",
                    "+ Software Engineer",
                  ]}
                  speed={70}
                  className="text-gradient"
                  waitTime={1500}
                  deleteSpeed={40}
                  cursorChar={"_"}
                  cursorClassName="ml-1 text-pink-400"
                />
              </p>

              <p className="mt-6 max-w-xl text-center text-muted-foreground md:text-lg">
                {t.hero.tagline}
              </p>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild={true}
                  size="lg"
                  className="bg-gradient-brand rounded-full text-white shadow-lg shadow-pink-500/25 transition-all hover:-translate-y-0.5 hover:shadow-pink-500/40">
                  <a href="#projects">
                    {t.hero.ctaProjects} <ArrowDown />
                  </a>
                </Button>
                <Button
                  asChild={true}
                  size="lg"
                  variant="outline"
                  className="rounded-full bg-background/60 backdrop-blur">
                  <Link to={localizePath("/curriculum", lang)}>
                    <FileText /> {t.hero.ctaCurriculum}
                  </Link>
                </Button>
              </div>

              <div className="mt-8 flex items-center gap-5 text-muted-foreground">
                <a
                  href="https://github.com/pinuya"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-pink-400">
                  <FaGithub className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/tifanyanunes/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-pink-400">
                  <FaLinkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
              </div>
            </motion.div>

            <motion.a
              href="#projects"
              className="absolute bottom-8 hidden flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground sm:flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}>
              scroll
              <span className="bg-gradient-brand h-10 w-0.5 animate-pulse rounded-full" />
            </motion.a>
          </section>

          <section id="projects" className="w-full scroll-mt-20 px-4 py-24">
            <div className="container mx-auto max-w-6xl">
              <SectionHeading
                index="01"
                title={t.projects.title}
                subtitle={t.projects.subtitle}
              />

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <motion.button
                    type="button"
                    key={project.id}
                    {...fadeUp}
                    transition={{ ...fadeUp.transition, delay: index * 0.1 }}
                    onClick={() => setSelectedProject(project)}
                    className="group flex flex-col overflow-hidden rounded-2xl border bg-card/60 text-left text-card-foreground backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-pink-300/60 hover:shadow-xl hover:shadow-pink-500/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pink-400">
                    <div className="relative aspect-video w-full overflow-hidden">
                      <ProjectImage
                        src={project?.image ?? ""}
                        alt={project?.title ?? t.projects.imageAlt}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <h3 className="mb-2 text-xl font-semibold">
                        {project.title ?? "Título do projeto"}
                      </h3>
                      <p className="line-clamp-2 flex-1 text-sm text-muted-foreground">
                        {project.description ?? "Descrição do projeto"}
                      </p>
                      <span className="text-gradient mt-4 inline-flex items-center gap-1 text-sm font-medium">
                        {t.projects.details}
                        <ArrowUpRight className="h-4 w-4 text-pink-400 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <Dialog
                open={selectedProject !== null}
                onOpenChange={() => setSelectedProject(null)}>
                {selectedProject && (
                  <DialogContent className="overflow-hidden p-0 sm:max-w-xl">
                    <ProjectImage
                      src={selectedProject.image ?? ""}
                      alt={selectedProject.title ?? t.projects.imageAlt}
                      className="aspect-video w-full object-cover"
                    />
                    <div className="px-6 pb-6">
                      <DialogHeader>
                        <DialogTitle className="text-2xl">
                          {selectedProject.title}
                        </DialogTitle>
                        <DialogDescription className="pt-2 text-base leading-relaxed">
                          {selectedProject.details}
                        </DialogDescription>
                      </DialogHeader>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {selectedProject.link && (
                          <Button
                            asChild={true}
                            variant="secondary"
                            className="rounded-full">
                            <a
                              href={selectedProject.link}
                              target="_blank"
                              rel="noreferrer">
                              <FaGithub /> {t.projects.repo}
                            </a>
                          </Button>
                        )}

                        {selectedProject.website && (
                          <Button
                            asChild={true}
                            className="bg-gradient-brand rounded-full text-white hover:shadow-md hover:shadow-pink-500/30">
                            <a
                              href={selectedProject.website}
                              target="_blank"
                              rel="noreferrer">
                              <ArrowUpRight /> {t.projects.website}
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </DialogContent>
                )}
              </Dialog>
            </div>
          </section>

          <section
            id="about"
            className="w-full scroll-mt-20 border-y border-border/60 bg-muted/30 px-4 py-24">
            <div className="container mx-auto max-w-6xl">
              <SectionHeading index="02" title={t.about.title} />

              <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
                <motion.div {...fadeUp} className="max-w-xl">
                  <h3 className="text-2xl font-semibold">
                    Hello World ✨ I'm{" "}
                    <span className="text-gradient font-bold">Tifany.</span>
                  </h3>
                  <span className="mt-1 inline-block font-mono text-sm text-muted-foreground">
                    {t.about.role}
                  </span>
                  <p className="mt-6 leading-relaxed text-muted-foreground">
                    {t.about.intro}{" "}
                    <b className="text-foreground">Software Engineer</b>{" "}
                    {t.about.focus} <b className="text-foreground">Front-End</b>
                    {t.about.beforeCompany}{" "}
                    <a
                      href="https://www.linkedin.com/company/utrip/posts/?feedView=all"
                      target="_blank"
                      rel="noreferrer"
                      className="text-gradient font-medium hover:underline">
                      Utrip
                    </a>
                    {t.about.afterCompany}{" "}
                    <Link
                      to={localizePath("/curriculum", lang)}
                      className="text-gradient font-medium hover:underline">
                      {t.about.curriculumLink}
                    </Link>{" "}
                    {t.about.outro}
                  </p>
                </motion.div>

                <motion.div
                  className="relative w-full max-w-sm"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.8 }}>
                  <div className="bg-gradient-brand absolute -inset-3 rotate-3 rounded-3xl opacity-40 blur-2xl" />
                  <div className="bg-gradient-brand relative rotate-2 rounded-3xl p-1 transition-transform duration-500 hover:rotate-0">
                    <img
                      src="/pinuya.jpg"
                      className="w-full rounded-[1.25rem]"
                      alt={t.about.photoAlt}
                      width={2880}
                      height={2160}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="xp" className="w-full scroll-mt-20 px-4 py-24">
            <div className="container mx-auto max-w-6xl">
              <SectionHeading index="03" title={t.experience.title} />

              <div className="flex flex-col items-center gap-20">
                <Experiences experiences={experiences} />
                <Skills />
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center justify-center pb-16 pt-8">
            <a
              href="https://github.com/pinuya"
              target="_blank"
              rel="noreferrer">
              <MediaBetweenText
                firstText={t.goodbye.first}
                secondText={t.goodbye.second}
                mediaUrl={"/godbye.gif"}
                mediaType="image"
                triggerType="hover"
                mediaContainerClassName="mx-px mt-1 h-[30px] w-full overflow-hidden sm:mx-2 sm:mt-4 sm:h-[100px]"
                className="text-gradient flex w-full cursor-pointer flex-row items-center justify-center text-2xl font-light lowercase sm:text-4xl"
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
  )
}
