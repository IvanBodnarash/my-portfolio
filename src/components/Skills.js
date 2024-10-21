import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiPhp,
  SiSolidity,
  SiGithub,
  SiTailwindcss,
  SiFirebase,
  SiHeroku,
  SiBootstrap,
  SiVercel,
  SiVite,
  SiWordpress,
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: SiCss3 },
  { name: "Javascript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "PHP", icon: SiPhp },
  { name: "Solidity", icon: SiSolidity },
  { name: "GitHub", icon: SiGithub },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "Bootstrap", icon: SiBootstrap },
  { name: "Vercel", icon: SiVercel },
  { name: "Vite", icon: SiVite },
  { name: "Wordpress", icon: SiWordpress },
  { name: "Heroku", icon: SiHeroku },
];

const SkillItem = ({ Icon, name }) => (
  <div className="flex flex-col items-center">
    <div className="lg:h-28 lg:w-28 md:h-24 md:w-24 sm:h-20 sm:w-20 p-4 border-2 border-portfolio-color-4 border-opacity-50 rounded-lg hover:cursor-pointer button-shadow transition-all duration-300 ease-in-out">
      <Icon className="lg:text-7xl md:text-6xl text-5xl text-portfolio-color-4" />
    </div>
    <h3 className="text-md font-mono text-center mt-2 text-portfolio-color-4">{name}</h3>
  </div>
);

export default function Skills() {
  return (
    <div id="skills" className="h-screen flex items-center">
      <div className="space-y-8">
        <div className="flex flex-row items-center space-x-6 lg:w-3/5 w-full">
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
            Skills
          </h1>
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <div className="">
          <div className="lg:text-md text-sm text-portfolio-color-6 space-y-6 lg:w-full">
            <p>
              Here are the technologies and tools I have worked with or had the
              opportunity to explore
            </p>
          </div>
        </div>

        <div className="grid xl:grid-cols-8 lg:grid-cols-7 md:grid-cols-6 sm:grid-cols-4 grid-cols-3 md:gap-8 gap-2">
          {skills.map((skill, index) => (
            <SkillItem key={index} Icon={skill.icon} name={skill.name} />
          ))}
        </div>
      </div>
    </div>
  );
}
