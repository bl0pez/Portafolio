import { Animation } from "../animation/Animation";

const Projects = () => {
  return (
    <section id="projects" className="flex flex-col items-center gap-5">
      <Animation animation={{ direction: "up", delay: 0.2 }}>
        <h1 className="text-5xl font-bold py-4">Projectos</h1>
      </Animation>

      <Animation
        animation={{ direction: "up", delay: 0.2 }}
        className="grid gap-4 grid-cols-2 md:grid-cols-3"
      >
        <button className="btn col-span-2 md:col-span-1 w-full block md:inline-block">
          All
        </button>
        <button className="btn">Frontend</button>
        <button className="btn">Backend</button>
      </Animation>
    </section>
  );
};

export default Projects;
