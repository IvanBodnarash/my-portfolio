import Link from "next/link";
import { GrGithub, GrLinkedinOption, GrInstagram } from "react-icons/gr";
import { FaLink } from "react-icons/fa6";
import { SiWellfound } from "react-icons/si";
import socialsData from "@/data/socials.json";

const iconClasses =
  "text-portfolio-color-4 text-2xl hover:text-portfolio-color-5 cursor-pointer transition-all duration-200 transform hover:-translate-y-1";

function IconComponent({ name }) {
  if (name === "LinkedIn") {
    return <GrLinkedinOption className={iconClasses} />;
  } else if (name === "GitHub") {
    return <GrGithub className={iconClasses} />;
  } else if (name === "Instagram") {
    return <GrInstagram className={iconClasses} />;
  } else if (name === "Wellfound") {
    return <SiWellfound className={iconClasses} />;
  } else {
    return <FaLink className={iconClasses} />;
  }
}

export default function SocialItems({ children }) {
  return (
    <>
      {socialsData.map((social) => (
        <Link href={social.link} target="_blank" key={social.name} rel="noopener noreferrer">
          <IconComponent name={social.name}>{children}</IconComponent>
        </Link>
      ))}
    </>
  );
}
