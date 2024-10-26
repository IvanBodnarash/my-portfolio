"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import socialLinks from "@/data/socialLinks";

const SocialItem = ({ IconComponent, link }) => (
  <Link href={link} target="_blank" rel="noopener noreferrer">
    <IconComponent className="text-portfolio-color-4 text-2xl hover:text-portfolio-color-5 cursor-pointer transition-all duration-200 transform hover:-translate-y-1" />
  </Link>
);

export default function Socials() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  return (
    <div
      className={`fixed md:flex hidden flex-col items-center justify-center lg:left-14 left-8 space-y-6 bottom-0 transform-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {socialLinks.map((link, index) => (
        <SocialItem key={index} IconComponent={link.icon} link={link.link} />
      ))}
      <div className="w-[1.6px] h-24 bg-portfolio-color-4"></div>
    </div>
  );
}
