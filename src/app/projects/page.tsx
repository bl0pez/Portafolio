import { Cards } from "@/components/projects/Cards";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proyectos",
}


const Projects = () => {
  return (
    <section>
      <h1 className="text-5xl font-bold text-center py-4">Proyectos</h1>

      <Cards />

    </section>
  )
}

export default Projects;