import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="flex flex-col gap-3 flex-1 text-center md:text-left p-4">
        <div>
          <h2
            className="text-3xl"
          >
            ¡Hola, soy
            <span className="text-primary font-bold"> Bryan</span>
            !👋
          </h2>
          <h1
            className="text-2xl"
          >
            Desarrollador Web Full Stack Junior
          </h1>
        </div>
        <p
          className="text-lg tracking-wider"
        >
          Apasionado por la creación digital y la transformación de ideas en
          experiencias interactivas. La magia de ver cómo el código cobra vida
          para construir aplicaciones y sitios web sorprendentes me deja
          maravillado constantemente.
        </p>
        <div
          className="flex gap-4 justify-center md:justify-start"
        >
          <a
            href="https://www.linkedin.com/in/bryan-lopez-sanchez/"
            className="bg-secondary p-1 rounded border hover:bg-primary transition-all duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/bl0pez"
            className="bg-secondary p-1 rounded border hover:bg-primary transition-all duration-300"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
      <div
        className="flex-1 md:flex justify-end hidden"
      >
        <Image src="/hero.svg" alt="hero" width={500} height={500} />
      </div>
    </section>
  );
};

export default Hero;
