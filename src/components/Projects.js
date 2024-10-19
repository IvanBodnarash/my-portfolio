"use client";

import { useState } from "react";
import Link from "next/link";

import projectsData from "@/data/projects.json";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projectsData : projectsData.slice(0, 3);

  const toggleShowAll = (e) => {
    e.preventDefault();
    setShowAll(!showAll);
  };

  return (
    <div id="projects" className="h-full flex flex-col items-center space-y-8">
      <div className="flex flex-row items-center space-x-6 w-full">
        <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
          Projects
        </h1>
        <div className="h-[1px] lg:w-full md:w-2/5 w-1/2 bg-portfolio-color-4"></div>
      </div>

      <div className="space-y-16">
        {visibleProjects.map((project, index) => (
          <div key={index}>
            <ProjectItem project={project} />
          </div>
        ))}
      </div>

      <div className="flex justify-end w-full">
        <button
          onClick={toggleShowAll}
          className="button-shadow glow-text-static lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-4 md:py-[0.6rem] py-2 border-[1.2px] border-portfolio-color-4 rounded-md transition-all duration-200"
        >
          {showAll ? "Show Less" : "Load More"}
        </button>
      </div>
    </div>
  );
}
