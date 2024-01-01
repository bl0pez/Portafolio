import { projects } from "./projects";

export enum Stack {
  Backend = "Backend",
  Frontend = "Frontend",
}

export const handleFilter = (stack?: string) => {
  if (stack === Stack.Backend) {
    return projects.filter((project) => project.type === Stack.Backend);
  }

  if (stack === Stack.Frontend) {
    return projects.filter((project) => project.type === Stack.Frontend);
  }

  return projects;
};
