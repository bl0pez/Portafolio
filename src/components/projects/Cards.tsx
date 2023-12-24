"use client";
import { projects } from "@/utils/projects";
import Image from "next/image";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

export const Cards = () => {
  return (
    <div className="grid grap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {projects.map((project) => (
        <div key={project.title} className="w-[300px] overflow-hidden  bg-secondary flex flex-col mx-auto">
          <div className="">
            <div className="h-[227px] overflow-hidden">
            <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={500}
                />
            </div>
            <div className="flex flex-col gap-4 p-3 h-[240px]">
              <h1 className="text-3xl text-primary">{project.title}</h1>
              <p>{project.description}</p>
              <div className="flex flex-row gap-2">
              {
                project.tecnologies.map((tecnology) => (
                  <div key={tecnology.name} className="">
                    {tecnology.icon}
                  </div>
                ))
              }
              </div>
            </div>


          </div>
          <div className="flex flex-col justify-end">

              <div className="flex gap-2 justify-end">
                <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2   text-white bg-primary hover:bg-primary-dark"
                >
                    <span>Demo</span>
                    <FaArrowRight />
                </a>
                <a
                    href={project.repository}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2   text-white bg-primary hover:bg-primary-dark"
                >
                    <span>Github</span>
                    <FaArrowRight />
                </a>
              </div>
            </div>
        </div>
      ))}
    </div>
  );
};
