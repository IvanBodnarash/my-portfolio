"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FiMail } from "react-icons/fi";
import AOS from "aos";
import "aos/dist/aos.css";
import NavItem from "./NavItem";

const menuItems = [
  { href: "#about", label: "About Me" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollY, handleScroll]);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const closeMobileMenu = () => {
    setIsOpenMobileMenu(false);
  };

  return (
    <header
      className={`w-full backdrop-blur-3xl fixed top-0 z-50 transition-all duration-500 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${lastScrollY ? "shadow-lg" : "shadow-none"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-[90px]">
        <div data-aos="fade-right" className="flex justify-center items-center">
          <Link href="/">
            <div className="button-shadow flex items-center justify-center text-2xl text-portfolio-color-4 transform rotate-45 font-bold w-12 h-12 border-4 border-portfolio-color-4 transition-all duration-300 ease-in-out group-hover:rotate-0">
              <p className="-rotate-45 transition-all duration-300 ease-in-out hover:rotate-0 p-4">
                IB
              </p>
            </div>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8 text-portfolio-color-4 font-light items-center">
          {menuItems.map((item, index) => (
            <NavItem
              key={item.label}
              href={item.href}
              data-aos="fade-down"
              data-aos-delay={index * 100}
            >
              {item.label}
            </NavItem>
          ))}

          <div data-aos="fade-down" data-aos-delay={menuItems.length * 100}>
            <Link href="mailto:ivan.bodnarash.dev@gmail.com">
              <FiMail className="text-2xl hover:text-portfolio-color-5 transition-all duration-400" />
            </Link>
          </div>

          <div className="hidden md:block" data-aos="fade-down" data-aos-delay={(menuItems.length + 1) * 100}>
            <a
              href="static/IvanBodnarashCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="button-shadow glow-text px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 bg-portfolio-color-2 rounded-lg transition-all duration-200">
                Resume
              </button>
            </a>
          </div>
        </nav>

        <div className="flex justify-center items-center md:hidden">
          <button
            className="text-portfolio-color-4 focus:outline-none"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          >
            <div
              className={`hamburger transition-all duration-300 ease-in-out ${
                isOpenMobileMenu ? "open" : ""
              }`}
            >
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </div>
          </button>
        </div>
      </div>

      <div
        className={`top-0 right-0 ${
          isOpenMobileMenu
            ? "h-full transition-all duration-500 ease-in-out"
            : "translate-x-full h-0"
        } transform transition-transform duration-500 ease-in-out md:hidden z-40`}
      >
        <nav className="flex flex-col space-y-8 p-4 h-full backdrop-blur-lg text-portfolio-color-4 font-light items-center">
          <NavItem href="#about" onClick={closeMobileMenu}>
            About Me
          </NavItem>
          <NavItem href="#projects" onClick={closeMobileMenu}>
            Projects
          </NavItem>
          <NavItem href="#skills" onClick={closeMobileMenu}>
            Skills
          </NavItem>
          <NavItem href="#experience" onClick={closeMobileMenu}>
            Experience
          </NavItem>
          <NavItem href="#contact" onClick={closeMobileMenu}>
            Contact
          </NavItem>
          <Link href="#mailme" onClick={closeMobileMenu}>
            <FiMail className="text-2xl hover:text-portfolio-color-5 transition-all duration-400" />
          </Link>
          <div className="md:hidden">
            <a
              href="static/IvanBodnarashCV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMobileMenu}
            >
              <button className="button-shadow glow-text px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 blur-backdrop-4 rounded-lg transition-all duration-200">
                Resume
              </button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
