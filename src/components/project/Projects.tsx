import { Animation } from "../animation/Animation";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center gap-5">
      <Animation
        animation={{ direction: "up", delay: 0.2 }}
      >
        <h1 className="text-5xl font-bold">
          Projectos
        </h1>
      </Animation>

      <Animation 
      animation={{ direction: "up", delay: 0.2 }}
      className="flex gap-4">
      <button className="btn">
        All
      </button>
      <button className="btn">
        Frontend
      </button>
      <button className="btn">
        Backend
      </button>
      </Animation>

      
    </section>
  );
};

export default Projects;
