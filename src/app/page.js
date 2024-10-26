"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 300);
    }, 1200);

    return () => clearTimeout(loadingTimeout);
  }, []);

  if (isLoading) {
    return (
      <div
        className={`flex justify-center items-center h-screen transition-opacity ease-in-out duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <div className="animate-spin-with-pause flex items-center justify-center text-5xl text-portfolio-color-4 transform rotate-45 font-bold w-24 h-24 border-8 border-portfolio-color-4">
          <p className="animate-spin-text-with-pause p-4">IB</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <Socials />
      <main className="xl:mx-56 lg:mx-36 md:mx-24 mx-8 lg:space-y-8 md:space-y-16 space-y-14">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
