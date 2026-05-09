"use client";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiPhp,
  SiSequelize,
  SiFlutter,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiTailwindcss,
  SiFirebase,
  SiHeroku,
  SiBootstrap,
  SiVercel,
  SiVite,
  SiSanity,
  SiWordpress,
  SiSolidity,
  SiPython,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "PHP", icon: SiPhp },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Azure", icon: VscAzure },
  { name: "Sequelize", icon: SiSequelize },
  { name: "Flutter", icon: SiFlutter },
  { name: "Python", icon: SiPython },
  { name: "Solidity", icon: SiSolidity },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "BitBucket", icon: SiBitbucket },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Vercel", icon: SiVercel },
  { name: "Vite", icon: SiVite },
  { name: "Sanity CMS", icon: SiSanity },
  { name: "Wordpress", icon: SiWordpress },
  { name: "Heroku", icon: SiHeroku },
];

const SkillItem = ({ Icon, name, delay }) => (
  <div data-aos="fade-up" data-aos-delay={delay} className="flex flex-col items-center">
    <div className="lg:size-20 md:size-18 sm:size-16 p-2 border-2 border-portfolio-color-4 flex justify-center items-center border-opacity-50 rounded-lg hover:cursor-pointer button-shadow transition-all duration-300 ease-in-out">
      <Icon className="lg:text-5xl md:text-3xl text-2xl text-portfolio-color-4" />
    </div>
    <h3 className="md:text-md text-sm font-mono text-center mt-2 text-portfolio-color-4">{name}</h3>
  </div>
);

export default function Skills() {
  useEffect(() => {
    Aos.init({
      duration: 300,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div data-aos="fade-up" id="skills" className="lg:h-screen h-full flex items-center">
      <div className="space-y-8 lg:mt-0 mt-32">
        <div className="flex flex-row items-center space-x-6 lg:w-3/5 w-full">
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">Skills</h1>
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <div className="">
          <div className="lg:text-md text-sm text-portfolio-color-6 space-y-6 lg:w-full">
            <p>Here are the technologies and tools I have worked with or had the opportunity to explore</p>
          </div>
        </div>

        <div className="grid xl:grid-cols-9 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 md:gap-8 gap-2">
          {skills.map((skill, index) => (
            <SkillItem key={index} Icon={skill.icon} name={skill.name} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );
}
