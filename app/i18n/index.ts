import { useLocation } from "@remix-run/react";

export const languages = ["pt", "en"] as const;
export type Lang = (typeof languages)[number];
export const DEFAULT_LANG: Lang = "pt";

const translations = {
  pt: {
    htmlLang: "pt-BR",
    ogLocale: "pt_BR",
    nav: {
      projects: "Projetos",
      about: "Sobre",
      experience: "Experiência",
      openMenu: "Abrir menu",
      closeMenu: "Fechar menu",
      skipToContent: "Pular para o conteúdo",
    },
    theme: {
      label: "Alterar tema",
      light: "Claro",
      dark: "Escuro",
      system: "Sistema",
    },
    language: {
      label: "Mudar idioma",
      switchTo: "Switch to English",
    },
    meta: {
      homeTitle: "Tifany Nunes | Desenvolvedora Front-End & Web Designer",
      description:
        "Portfolio profissional de Tifany Nunes, desenvolvedora Front-End e Web Designer especializada em React, Remix, TypeScript e Tailwind CSS.",
      jobTitle: "Desenvolvedora Front-End",
      ogImageAlt: "Prévia do portfólio de Tifany Nunes",
      curriculumTitle: "Currículo | Tifany Nunes",
      curriculumDescription:
        "Currículo de Tifany Nunes, desenvolvedora Front-End: experiência profissional, formação e habilidades em React, Remix e TypeScript. Visualize ou baixe em PDF.",
      notFoundTitle: "Página não encontrada | Tifany Nunes",
      notFoundDescription: "A página que você procura não existe.",
    },
    hero: {
      badge: "Front-End Developer no Brasil",
      tagline:
        "Crio interfaces robustas, responsivas e cheias de detalhes, do design ao código.",
      ctaProjects: "Ver projetos",
      ctaCurriculum: "Currículo",
    },
    projects: {
      title: "Projetos",
      subtitle:
        "Algumas coisas que construí. Clique em um card para ver os detalhes.",
      details: "Ver detalhes",
      imageAlt: "Imagem do projeto",
      repo: "GitHub Repo",
      website: "Ver Site",
    },
    about: {
      title: "Sobre mim",
      role: "Web Designer | Software Engineer | Founder of ...shhh",
      photoAlt: "Ilustração de Tifany Nunes",
      intro: "Uma",
      focus: "com foco em",
      beforeCompany:
        ". Atualmente moro no Brasil e atuo como Software Engineer PL na",
      afterCompany:
        ". Meus projetos envolvem design de UX, animações de UI e ilustração de ícones. Minha familiaridade com código me permite prototipar e validar experiências de forma ágil. Busco sempre desenvolver interfaces robustas e responsivas. Sinto-me à vontade para criar meus próprios designs e implementá-los durante o desenvolvimento. Você pode conferir meu",
      curriculumLink: "currículo aqui.",
      outro:
        "Adoro adicionar easter eggs nas minhas aplicações, então… boa sorte procurando alguns no meu portfólio! :3",
    },
    experience: {
      title: "Experiência e habilidades",
    },
    goodbye: {
      first: "Obrigada pela (",
      second: ") visita!",
    },
    curriculum: {
      title: "Meu Currículo",
      subtitle: "Fique a vontade para olhar e baixar meu currículo 😀",
      download: "Baixar Currículo",
    },
    notFound: {
      title: "Oops! Página não encontrada",
      description:
        "A página que você procura pode ter sido removida, ter seu nome alterado ou estar temporariamente indisponível.",
      back: "Volte para início",
    },
  },
  en: {
    htmlLang: "en",
    ogLocale: "en_US",
    nav: {
      projects: "Projects",
      about: "About",
      experience: "Experience",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      skipToContent: "Skip to content",
    },
    theme: {
      label: "Change theme",
      light: "Light",
      dark: "Dark",
      system: "System",
    },
    language: {
      label: "Change language",
      switchTo: "Mudar para Português",
    },
    meta: {
      homeTitle: "Tifany Nunes | Front-End Developer & Web Designer",
      description:
        "Professional portfolio of Tifany Nunes, a Front-End Developer and Web Designer specialized in React, Remix, TypeScript and Tailwind CSS.",
      jobTitle: "Front-End Developer",
      ogImageAlt: "Preview of Tifany Nunes' portfolio",
      curriculumTitle: "Resume | Tifany Nunes",
      curriculumDescription:
        "Resume of Tifany Nunes, Front-End Developer: work experience, education and skills in React, Remix and TypeScript. View or download it as a PDF.",
      notFoundTitle: "Page not found | Tifany Nunes",
      notFoundDescription: "The page you are looking for does not exist.",
    },
    hero: {
      badge: "Front-End Developer based in Brazil",
      tagline:
        "I build robust, responsive and detail-rich interfaces, from design to code.",
      ctaProjects: "See projects",
      ctaCurriculum: "Resume",
    },
    projects: {
      title: "Projects",
      subtitle: "Some things I've built. Click a card to see the details.",
      details: "See details",
      imageAlt: "Project image",
      repo: "GitHub Repo",
      website: "Visit Site",
    },
    about: {
      title: "About me",
      role: "Web Designer | Software Engineer | Founder of ...shhh",
      photoAlt: "Illustration of Tifany Nunes",
      intro: "A",
      focus: "focused on",
      beforeCompany:
        ". I currently live in Brazil and work as a Mid-level Software Engineer at",
      afterCompany:
        ". My projects involve UX design, UI animations and icon illustration. My familiarity with code allows me to prototype and validate experiences quickly. I always aim to build robust and responsive interfaces. I'm comfortable creating my own designs and implementing them during development. You can check out my",
      curriculumLink: "resume here.",
      outro:
        "I love adding easter eggs to my applications, so… good luck finding some in my portfolio! :3",
    },
    experience: {
      title: "Experience & skills",
    },
    goodbye: {
      first: "Thanks for the (",
      second: ") visit!",
    },
    curriculum: {
      title: "My Resume",
      subtitle: "Feel free to view and download my resume 😀",
      download: "Download Resume",
    },
    notFound: {
      title: "Oops! Page not found",
      description:
        "The page you are looking for might have been removed, had its name changed or is temporarily unavailable.",
      back: "Back to home",
    },
  },
} as const;

export type Translations = (typeof translations)[Lang];

export function isLang(value: unknown): value is Lang {
  return languages.includes(value as Lang);
}

/** Reads the language from the URL: "/en/..." is English, everything else Portuguese. */
export function getLangFromPath(pathname: string): Lang {
  return pathname === "/en" || pathname.startsWith("/en/") ? "en" : "pt";
}

export function getTranslations(lang: Lang): Translations {
  return translations[lang];
}

/** Prefixes a path with the language, e.g. localizePath("/curriculum", "en") -> "/en/curriculum". */
export function localizePath(path: string, lang: Lang) {
  if (lang === DEFAULT_LANG) return path;
  if (path === "/" || path.startsWith("/#") || path.startsWith("/?")) {
    return `/en${path.slice(1)}`;
  }
  return `/en${path}`;
}

/** Removes the language prefix from a path, e.g. "/en/curriculum" -> "/curriculum". */
export function stripLang(pathname: string) {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
  return stripped === "" ? "/" : stripped;
}

export function useLang() {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);
  return { lang, t: getTranslations(lang) };
}
