import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";

interface Redes {
  nombre: string;
  url: string;
  icon: JSX.Element;
}

export const redes = [
  {
    nombre: "LinkedIn",
    url: "https://www.linkedin.com/in/bryan-lopez-sanchez/",
    icon: <FaLinkedin />,
  },
  {
    nombre: "GitHub",
    url: "https://github.com/bl0pez",
    icon: <FaGithub />,
  },
  {
    nombre: "blopez4434@gmail.com",
    url: "mailto:blopez4434@gmail.com",
    icon: <MdOutlineMailOutline />,
  },
];
