"use client";
import { fadeIn } from "@/utils/animation";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 items-center">
      <div className="flex flex-col gap-3 flex-1">
        <div>
          <motion.h2
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-3xl"
          >
            ¡Hola, soy
            <span className="text-primary font-bold"> Bryan</span>
            !👋
          </motion.h2>
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="text-2xl"
          >
            Desarrollador Web Full Stack Junior
          </motion.h1>
        </div>
        <motion.p
          variants={fadeIn("down", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="text-lg"
        >
          Apasionado por la creación digital y la transformación de ideas en
          experiencias interactivas. La magia de ver cómo el código cobra vida
          para construir aplicaciones y sitios web sorprendentes me deja
          maravillado constantemente.
        </motion.p>
        <motion.div
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="flex gap-4"
        >
          <a
            href="#"
            className="bg-secondary p-1 rounded border hover:bg-primary transition-all duration-300"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="#"
            className="bg-secondary p-1 rounded border hover:bg-primary transition-all duration-300"
          >
            <FaGithub size={40} />
          </a>
        </motion.div>
      </div>
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="flex-1 flex justify-center"
      >
        <Image src="/hero.svg" alt="hero" width={500} height={500} />
      </motion.div>
    </section>
  );
};

export default Hero;
