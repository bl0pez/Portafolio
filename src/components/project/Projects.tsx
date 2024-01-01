import { Animation } from "../animation/Animation";
import { ProjectsGrid } from "./ProjectsGrid";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center gap-5">
      <Animation animation={{ direction: "up", delay: 0.2 }}>
        <h1 className="text-5xl font-bold py-4">Projectos</h1>
      </Animation>

      {/* Proyectos */}
      <ProjectsGrid />
    </section>
  );
};

export default Projects;
