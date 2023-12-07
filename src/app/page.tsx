import { Metadata } from "next";
import Image from "next/image";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";

export default function Home() {

  return (
    <main className="flex-auto flex container mx-auto items-center flex-wrap gap-2">
        <div className="text-center p-2 mx-auto">
          <h1 className="text-5xl font-bold">
              Hola, soy Bryan <br/><span className="text-primary text-4xl">Desarrollador web fullstack</span>
          </h1>

          <ul className="mt-4 flex justify-center gap-6">
            <li className="border border-primary p-2 inline-block rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105">
              <a 
                href="www.linkedin.com/in/bryan-lopez-sanchez"
                aria-label="Linkedin"
              >
                <CiLinkedin size="3em" />
              </a>
            </li>
            <li className="border border-primary p-2 inline-block rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105">
              <a 
                href="https://github.com/bl0pez"
                aria-label="Github"  
              >
                <FaGithub size="3em" />
              </a>
            </li>
            <li className="border border-primary p-2 inline-block rounded-lg hover:bg-primary transition-all duration-300 hover:scale-105">
              <a 
                aria-label="Tiktok"
                href="https://www.tiktok.com/@blopez_dev?lang=es"
              >
                <FaTiktok size="3em" />
              </a>
            </li>
          </ul>
        </div>

        <div className="p-2 mx-auto">
          <Image src="hero.svg" width={500} height={500} alt="Hero" />
        </div>
        
    </main>
  )
}
