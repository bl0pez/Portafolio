import Image from "next/image";
import { Animation } from "../animation/Animation";
import { redes } from "@/utils/redes";

const Hero = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 items-center">
      <Animation
        animation={{ direction: "left", delay: 0.2 }}
        className="flex flex-col gap-3 flex-1 text-center md:text-left"
      >
        <div>
          <h2 className="text-3xl">
            ¡Hola, soy
            <span className="text-primary font-bold"> Bryan</span>
            !👋
          </h2>
          <h1 className="text-2xl">Desarrollador Web Full Stack Junior</h1>
        </div>
        <p className="text-lg tracking-wider">
          Apasionado por la creación digital y la transformación de ideas en
          experiencias interactivas. La magia de ver cómo el código cobra vida
          para construir aplicaciones y sitios web sorprendentes me deja
          maravillado constantemente.
        </p>
        <div className="flex gap-4 justify-center md:justify-start flex-wrap">
          {redes.map((item) => (
            <a
              key={item.nombre}
              href={item.url}
              aria-label={item.nombre}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center justify-center hover:bg-primary border border-secondary p-2 py-1 rounded transition-colors duration-300"
            >
              {item.icon} {item.nombre}
            </a>
          ))}
        </div>
      </Animation>
      <Animation
        animation={{ direction: "right", delay: 0.2 }}
        className="flex-1 md:flex justify-end items-center hidden"
      >
        <Image src="/hero.svg" alt="hero" width={500} height={500} />
      </Animation>
    </section>
  );
};

export default Hero;
