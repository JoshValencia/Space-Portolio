import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectsList } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-orange-400 pb-20">
        Some Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        {ProjectsList.map((project, index) => (
          <ProjectCard
            key={index}
            src={project.src || ""}
            title={project.title}
            link={project.link || ""}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
