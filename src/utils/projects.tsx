import {
  Pug,
  CSS3,
  Html5,
  NestJs,
  NodeJs,
  TailwindCss,
  GuitHub,
  Javascript,
  MongoDB,
  PostgreSQL,
  ReactJs,
  Typescript,
  MySQL,
  Firebase,
  Redux,
} from "@/components/icons";

interface tecnology {
  name: string;
  icon: JSX.Element;
}

interface Project {
  title: string;
  description: string;
  image: string;
  repository: string;
  demo?: string;
  tecnologies: tecnology[];
}

const style = { height: "35px" };

export const projects: Project[] = [
  {
    title: "Journal App",
    description:
      "Permite autenticarse con Google o correo electrónico, crear, editar y eliminar notas, y adjuntar imágenes. Utiliza Firebase como base de datos para almacenamiento seguro y eficiente.",
    image: "/projects/journalApp.webp",
    repository: "https://github.com/bl0pez/JournalApp",
    demo: "https://react-journal-app-blush.vercel.app/",
    tecnologies: [
      { name: "HTML5", icon: <Html5  aria-hidden="true"  style={style} /> },
      {
        name: "CSS3",
        icon: <CSS3  aria-hidden="true"  style={style} />,
      },
      {
        name: "JavaScript",
        icon: <Javascript  aria-hidden="true"  style={style} />,
      },
      {
        name: "ReactJS",
        icon: <ReactJs aria-hidden="true" style={style} />,
      },
      {
        name: "Redux",
        icon: <Redux aria-hidden="true" style={style} />,
      },
      {
        name: "FireBase",
        icon: <Firebase aria-hidden="true" style={style} />,
      },
    ],
  },
  {
    title: "Agencia de viajes",
    description:
      "Proyecto sigue el patrón de diseño MVC para recuperar datos de la base de datos y presentarlos en la interfaz web.",
    image: "/projects/viajes.webp",
    repository: "https://github.com/bl0pez/Node-Viajes/tree/master",
    tecnologies: [
      { name: "HTML5", icon: <Html5  aria-hidden="true"  style={style} /> },
      {
        name: "CSS3",
        icon: <CSS3  aria-hidden="true"  style={style} />,
      },
      {
        name: "JavaScript",
        icon: <Javascript  aria-hidden="true"  style={style} />,
      },
      {
        name: "NodeJS",
        icon: <NodeJs   aria-hidden="true"  style={style} />,
      },
      { name: "Pug", icon: <Pug  aria-hidden="true"  style={style} /> },
      {
        name: "TailwindCSS",
        icon: <TailwindCss  aria-hidden="true"  style={style} />,
      },
      {
        name: "MySQL",
        icon: <MySQL  aria-hidden="true"  style={style} />,
      },
    ],
  },
  {
    title: "Gif App",
    description:
      "Proyecto web consume la API de Giphy para mostrar gifs animados en la interfaz web.",
    image: "/projects/gifApp.webp",
    repository: "https://github.com/bl0pez/Node-Viajes/tree/master",
    demo: "https://bl0pez.github.io/gifApp/",
    tecnologies: [
      { name: "HTML5", icon: <Html5  aria-hidden="true"  style={style} /> },
      {
        name: "CSS3",
        icon: <CSS3  aria-hidden="true"  style={style} />,
      },
      {
        name: "JavaScript",
        icon: <Javascript  aria-hidden="true"  style={style} />,
      },
      {
        name: "ReactJS",
        icon: <ReactJs aria-hidden="true" style={style} />,
      }
    ],
  },
];
