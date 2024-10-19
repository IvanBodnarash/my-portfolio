
import Link from "next/link";
import { GrGithub } from "react-icons/gr";
import { FaLink } from "react-icons/fa6";

const ProjectItem = ({ project }) => {
  return (
      <div className="flex lg:flex-row sm:flex-col flex-col items-start lg:space-y-0 space-y-6 lg:space-x-16 space-x-0">
        <div
          id="appScreen"
          className="button-shadow cursor-pointer transition-all duration-300 ease-in-out bg-portfolio-color-4 lg:w-3/6 md:w-3/5 sm:w-4/5 w-full lg:h-[250px] h-[180px] rounded-lg"
        >
          Image
        </div>
        <div className="lg:text-md text-sm text-portfolio-color-6 md:space-y-6 space-y-4 lg:w-4/5">
          <h1 className="text-xl font-bold">{project.title}</h1>
          <p className="text-[15px] text-portfolio-color-8">
            {project.description}
          </p>
          <div className="flex flex-row items-center">
            <ul className="flex flex-wrap w-4/5 items-baseline md:space-y-4 space-y-2">
              {project.techStack.map((tech, index) => (
                <li
                  key={index}
                  className="flex items-center font-bold md:text-md text-xs cursor-pointer text-portfolio-color-2 md:mr-4 mr-2 md:px-6 px-3 md:py-[6px] py-1 bg-portfolio-color-7 opacity-80 rounded-full"
                >
                  {tech}
                </li>
              ))}
            </ul>
            <div className="flex flex-row space-x-4 md:text-4xl text-2xl text-portfolio-color-7 opacity-80">
                <Link href={project.links.live} target="_blank">
                    <FaLink className="cursor-pointer hover:text-portfolio-color-6" />
                </Link>
                <Link href={project.links.github} target="_blank">
                    <GrGithub className="cursor-pointer hover:text-portfolio-color-6" />
                </Link>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ProjectItem;
