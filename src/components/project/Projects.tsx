import { Animation } from "../animation/Animation";

const Projects = () => {
  return (
    <section id="projects" className="">
      <Animation
        animation={{ direction: "left", delay: 0.2 }}
      >
        <h1 className="text-primary text-5xl font-serif">
          Projectos
        </h1>
      </Animation>
    </section>
  );
};

export default Projects;
