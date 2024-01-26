import Image from "next/image";
import { Project } from "@/utils/projects";
import { Animation } from "../animation/Animation";
import { FaCode, FaGithub } from "react-icons/fa";

interface Props {
  project: Project;
  delay: number;
}

export const ProjectItem = ({ project, delay }: Props) => {
  return (
    <Animation
      animation={{ direction: "up", delay: 0.2 + delay / 10 }}
      className="flex flex-col"
    >
      <div className="relative h-[200px] overflow-hidden">
        <Image
          src={project.img}
          alt={project.title}
          width={320}
          height={200}
          style={{ width: "100%", height: "100%" }}
        />
        <span className="absolute bg-card px-2 py-1 text-sm -bottom-1 text-center rounded-tr">
          {project.type}
        </span>
      </div>
      <div className="p-2 flex gap-1 flex-col w-full bg-card rounded flex-1">
        <div className="flex flex-col gap-2 flex-1">
          <h2 className="text-lg font-bold">{project.title}</h2>
          <p className="text-sm text-gray-400">{project.description}</p>
          <div className="flex gap-1">
            {project.technologies.map((tech, i) => (
              <span
                key={tech}
                className="text-xs rounded-full p-1 px-2 bg-body inline-block"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="justify-end text-xs flex gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={project.github}
            aria-label="GitHub"
            className="flex items-center gap-1 border px-2 py-1 hover:bg-primary transition-colors duration-500"
          >
            <FaGithub />
            GuitHub
          </a>
          {project.demo && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={project.demo}
              aria-label="Demo"
              className="flex items-center gap-1 border px-2 py-1 hover:bg-primary transition-colors duration-500"
            >
              <FaCode />
              Demo
            </a>
          )}
        </div>
      </div>
    </Animation>
  );
};
