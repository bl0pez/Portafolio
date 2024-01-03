"use client"
import { useState } from "react";
import { Stack, handleFilter } from "@/utils/projectsFilter";
import { Animation } from "../animation/Animation";
import { ProjectItem } from "./ProjectItem";

export const ProjectsGrid = () => {

  const [stack, setStack] = useState("");

  return (
    <>
      <Animation
        animation={{ direction: "up", delay: 0.2 }}
        className="grid gap-4 grid-cols-2 md:grid-cols-3"
      >
        <button 
        onClick={() => setStack("")}
        className="btn col-span-2 md:col-span-1 w-full block md:inline-block">
          All
        </button>
        <button 
        onClick={() => setStack(Stack.Frontend)}
        className="btn">Frontend</button>
        <button 
        onClick={() => setStack(Stack.Backend)}
        className="btn">Backend</button>
      </Animation>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
        {
          handleFilter(stack).map((project, i) => (
            <ProjectItem key={i} project={project} delay={i} />
          ))
        }
      </div>
    </>
  );
};
