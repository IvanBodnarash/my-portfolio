"use client";
import { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import {
  SiHtml5,
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
  SiBootstrap,
  SiVercel,
  SiVite,
  SiSanity,
  SiWordpress,
  SiPostgresql,
  SiMysql,
  SiPosthog,
  SiPostman,
  SiRender,
  SiPrisma,
  SiPython,
  SiCloudflare,
  SiSentry,
  SiTanstack,
  SiCss,
  SiMongodb,
  SiClaude,
  SiCursor,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { GrHeroku } from "react-icons/gr";
import SkillItem from "./SkillItem";

const skills = [
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "MySQL", icon: SiMysql },
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss },
  { name: "PHP", icon: SiPhp },
  { name: "Azure", icon: VscAzure },
  { name: "Prisma", icon: SiPrisma },
  { name: "Sequelize", icon: SiSequelize },
  { name: "Flutter", icon: SiFlutter },
  { name: "Python", icon: SiPython },
  { name: "GitHub", icon: SiGithub },
  { name: "GitLab", icon: SiGitlab },
  { name: "BitBucket", icon: SiBitbucket },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Vercel", icon: SiVercel },
  { name: "Vite", icon: SiVite },
  { name: "Sanity CMS", icon: SiSanity },
  { name: "Wordpress", icon: SiWordpress },
  { name: "Postman", icon: SiPostman },
  { name: "Heroku", icon: GrHeroku },
  { name: "Render", icon: SiRender },
  { name: "Cloudflare", icon: SiCloudflare },
  { name: "Posthog", icon: SiPosthog },
  { name: "Sentry", icon: SiSentry },
  { name: "Tanstack", icon: SiTanstack },
  { name: "Claude", icon: SiClaude },
  { name: "Cursor", icon: SiCursor },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.2,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} id="skills" className="lg:h-screen h-full flex items-center">
      <div className="space-y-4 lg:mt-0 mt-32">
        <div className="flex flex-row items-center space-x-6 lg:w-3/5 w-full">
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">Skills</h1>
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <div className="lg:text-md text-sm text-portfolio-color-6 space-y-4 lg:w-full">
          <p>Here are the technologies and tools I have worked with or had the opportunity to explore</p>
        </div>

        <div className="grid xl:grid-cols-10 lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 md:gap-6 gap-2 transition-all transform-cpu">
          {skills.map((skill, index) => (
            <SkillItem key={skill.name} Icon={skill.icon} name={skill.name} index={index} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </div>
  );
}
