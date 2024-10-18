"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

import Image from "next/image";
import { FiMail } from "react-icons/fi";

import NavItem from "./NavItem";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY]);

  return (
    <header
      className={`w-full backdrop-blur-3xl fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${lastScrollY ? "shadow-lg" : "shadow-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[90px]">
        <div className="text-md font-bold w-16 h-16 rounded-full bg-slate-500">
          <Link href="/">
            <Image />
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-portfolio-color-4 font-light items-center">
          <NavItem href="#about">About Me</NavItem>
          <NavItem href="#projects">Projects</NavItem>
          <NavItem href="#skills">Skills</NavItem>
          <NavItem href="#experience">Experience</NavItem>
          <NavItem href="#contact">Contact</NavItem>
          <Link href="#mailme">
            <FiMail className="text-2xl hover:text-portfolio-color-5 transition-all duration-400" />
          </Link>
          <div className="hidden md:block">
            <a
              href="static/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 bg-portfolio-color-2 rounded-lg transition-all duration-200">
                Resume
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
