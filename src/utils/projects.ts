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
    title: "Administrador de llaves",
    description:
      "Aplicación encargado de gestionar préstamos de llaves, ofreciendo un registro en tiempo real para mejorar la distribución y mantener un control preciso sobre las llaves.",
    type: "Backend",
    github: "https://github.com/bl0pez/Administrador-llaves-backend",
    img: "https://res.cloudinary.com/dohtmcdvi/image/upload/f_auto,q_auto/v1/portafolio/wrmqxq80twxhhlbskgqc",
    technologies: ["NestJs", "TypeScript", "PostgreSQL"],
  },
];
