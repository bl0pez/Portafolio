export interface Project {
  title: string;
  description: string;
  type: string;
  github: string;
  img: string;
  demo?: string;
  technologies: string[];
}

export const projects: Project[] = [
  {
    title: "Translate App",
    description:
      "API que facilita la traducción de texto de un idioma a otro mediante la integración de la API de OpenAI en una aplicación NestJS",
    type: "Backend",
    github: "https://github.com/bl0pez/Translate-backend",
    img: "https://res.cloudinary.com/dohtmcdvi/image/upload/f_auto,q_auto/v1/portafolio/e5wjzau6h7oswlyztjxl",
    technologies: ["NestJs", "TypeScript", "OpenAI API"],
  },
  {
    title: "Translate App",
    description: "Interfaz de usuario para la aplicación Translate App",
    type: "Frontend",
    github: "https://github.com/bl0pez/Translate-frontend",
    img: "https://res.cloudinary.com/dohtmcdvi/image/upload/f_auto,q_auto/v1/portafolio/ulqwdzpcctryychhyvtp",
    technologies: ["React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Administrador de llaves",
    description:
      "Aplicación encargado de gestionar préstamos de llaves, ofreciendo un registro en tiempo real para mejorar la distribución y mantener un control preciso sobre las llaves.",
    type: "Backend",
    github: "https://github.com/bl0pez/Administrador-llaves-backend",
    img: "https://res.cloudinary.com/dohtmcdvi/image/upload/f_auto,q_auto/v1/portafolio/rcq69mwl1vty6jlvfqmr",
    technologies: ["NestJs", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Administrador de llaves",
    description:
      "Aplicación encargado de gestionar préstamos de llaves, ofreciendo un registro en tiempo real para mejorar la distribución y mantener un control preciso sobre las llaves.",
    type: "Frontend",
    github: "https://github.com/bl0pez/Administrador-llaves-frontEnd",
    img: "https://res.cloudinary.com/dohtmcdvi/image/upload/f_auto,q_auto/v1/portafolio/tox0swh29zelkssm4w20",
    technologies: ["React", "TypeScript", "Material UI"],
  },
];
