"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import NavButton from "@/components/button/NavButton";
import { fadeIn } from "@/utils/animation";
import { menus } from "@/utils/menu";
import { usePathname } from "next/navigation";
import { Link as ScrollLink } from "react-scroll";

const NavbarMovide = () => {
  const [toggle, setToggle] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="md:hidden">
      <NavButton toggle={toggle} onToggle={() => setToggle(!toggle)} />

      <motion.aside
        initial={{ x: "100%" }} // Estado inicial: completamente a la derecha
        animate={{ x: toggle ? "0" : "100%" }} // Estado final: depende del estado de 'toggle'
        transition={{ duration: 0.5 }} // Duración de la transición: medio segundo
        className={`bg-nav fixed z-20 w-full top-0 h-screen transition-all duration-500 ${
          toggle ? "right-0" : "-right-full"
        }`}
      >
        <div className="p-10 flex justify-center h-full flex-col gap-16 text-5xl">
          {menus.map((menu, index) => (
            <motion.div
              key={index}
              variants={fadeIn("left", index * 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.2 }}
            >
              <ScrollLink
                to={menu.path}
                spy={true}
                smooth={true}
                offset={menu.offset}
                duration={500}
                activeClass="text-primary"
                onClick={() => setToggle(false)}
              >
                {menu.name}
              </ScrollLink>
            </motion.div>
          ))}
        </div>
      </motion.aside>
    </nav>
  );
};

export default NavbarMovide;
