"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

import projectsData from "@/data/projects.json";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [animationClass, setAnimationClass] = useState("");
  const [openedProjectsCount, setOpenedProjectsCount] = useState(3);

  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const toggleShowAll = () => {
    if (showAll) {
      setAnimationClass("animate-fade-out");
      setTimeout(() => {
        setOpenedProjectsCount(3);
        setShowAll(false);
        setAnimationClass("");
      }, 500);
    } else {
      setOpenedProjectsCount(projectsData.length);
      setShowAll(true);
    }
  };

  return (
    <div
      id="projects"
      className="h-full flex flex-col items-center justify-center pt-28"
      data-aos="fade-up"
    >
      <div className="space-y-8">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-row items-center space-x-6 w-full"
        >
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
            Projects
          </h1>
          <div className="h-[1px] lg:w-full md:w-2/5 w-1/2 bg-portfolio-color-4"></div>
        </div>

        <div data-aos="fade-up" data-aos-delay="200" className="space-y-16">
          {projectsData.slice(0, openedProjectsCount).map((project, index) => (
            <div
              key={index}
              data-aos={index >= 3 && showAll ? "fade-down" : ""}
              className={
                index >= 3 && animationClass === "animate-fade-out"
                  ? "animate-fade-out"
                  : ""
              }
            >
              <ProjectItem project={project} />
            </div>
          ))}
        </div>

        <div className="flex justify-end w-full">
          {showAll ? (
            <Link href="#projects">
              <button
                onClick={toggleShowAll}
                className="button-shadow glow-text-static lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-4 md:py-[0.6rem] py-2 border-[1.2px] border-portfolio-color-4 rounded-md"
              >
                Show Less
              </button>
            </Link>
          ) : (
            <button
              onClick={toggleShowAll}
              className="button-shadow glow-text-static lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-4 md:py-[0.6rem] py-2 border-[1.2px] border-portfolio-color-4 rounded-md"
            >
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
