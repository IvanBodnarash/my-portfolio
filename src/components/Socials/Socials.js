"use client";

import { useState, useEffect } from "react";
import SocialItems from "./SocialItems";

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
      <SocialItems />
      <div className="w-[1.6px] h-24 bg-portfolio-color-4"></div>
    </div>
  );
}
