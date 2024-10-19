import Link from "next/link";

import { GrLinkedinOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { SiWellfound } from "react-icons/si";
import { GrGithub } from "react-icons/gr";

const SocialItem = ({ IconComponent, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <IconComponent className="text-portfolio-color-4 text-2xl hover:text-portfolio-color-5 cursor-pointer transition-all duration-200" />
  </Link>
);

export default function Socials() {
  return (
    <div className="fixed md:flex hidden flex-col items-center justify-center lg:left-14 left-8 space-y-6 bottom-0">
      <SocialItem
        IconComponent={GrGithub}
        link="https://github.com/IvanBodnarash"
      />
      <SocialItem
        IconComponent={GrInstagram}
        link="https://github.com/IvanBodnarash"
      />
      <SocialItem
        IconComponent={GrLinkedinOption}
        link="https://github.com/IvanBodnarash"
      />
      <SocialItem
        IconComponent={SiWellfound}
        link="https://github.com/IvanBodnarash"
      />
      <div className="w-[1.6px] h-24 bg-portfolio-color-4"></div>
    </div>
  );
}
