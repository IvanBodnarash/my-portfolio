"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import "css-doodle";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);
  const [showElements, setShowElements] = useState({
    title: false,
    name: false,
    role: false,
    description: false,
    buttons: false,
    doodle: false,
  });

  useEffect(() => {
    setIsClient(true);

    const timeouts = [
      setTimeout(
        () => setShowElements((prev) => ({ ...prev, title: true })),
        100
      ),
      setTimeout(
        () => setShowElements((prev) => ({ ...prev, name: true })),
        400
      ),
      setTimeout(
        () => setShowElements((prev) => ({ ...prev, role: true })),
        700
      ),
      setTimeout(
        () => setShowElements((prev) => ({ ...prev, description: true })),
        1000
      ),
      setTimeout(
        () => setShowElements((prev) => ({ ...prev, buttons: true })),
        1300
      ),
      setTimeout(
        () => setShowElements((prev) => ({ ...prev, doodle: true })),
        1600
      ),
    ];

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <div className="h-screen flex justify-between items-center">
      <div className="h-screen flex justify-between items-center">
        <div className="lg:space-y-8 sm:space-y-6 space-y-4 lg:w-3/5 w-full">
          <div className="lg:space-y-4 space-y-2">
            <h3
              className={`lg:text-2xl text-xl text-portfolio-color-4 transition-opacity duration-700 ${
                showElements.title ? "opacity-100" : "opacity-0"
              }`}
            >
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hi, my name is")
                    .pauseFor(5500)
                    .deleteAll()
                    .typeString("Hola, me llamo")
                    .pauseFor(5500)
                    .deleteAll()
                    .typeString("Привіт, мене звати")
                    .pauseFor(5500)
                    .deleteAll()
                    .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </h3>
            <h1
              className={`lg:text-6xl sm:text-5xl text-4xl text-portfolio-color-4 font-black transition-opacity duration-700 ${
                showElements.name ? "opacity-100" : "opacity-0"
              }`}
            >
              Ivan Bodnarash.
            </h1>
            <h1
              className={`lg:text-6xl sm:text-5xl text-4xl text-portfolio-color-5 font-black transition-opacity duration-700 ${
                showElements.role ? "opacity-100" : "opacity-0"
              }`}
            >
              Frontend Developer.
            </h1>
            <p
              className={`lg:text-md text-sm text-portfolio-color-6 transition-opacity duration-700 ${
                showElements.description ? "opacity-80" : "opacity-0"
              }`}
            >
              I specialize in building visually appealing and functional
              websites. I love combining creativity with code to craft intuitive
              user interfaces. Always eager to learn and grow, I&apos;m excited to
              bring your ideas to life on the web.
            </p>
          </div>
          <div
            className={`transition-opacity duration-700 ${
              showElements.buttons ? "opacity-100" : "opacity-0"
            }`}
          >
            <Link href="#projects">
              <button className="button-shadow glow-text-static lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 rounded-md transition-all duration-200">
                Discover My Projects
              </button>
            </Link>
            <Link
              href="#contact"
              className="lg:ml-12 ml-6 lg:text-md md:text-sm text-xs glow-text-static transition-all hover:text-portfolio-color-5"
            >
              Let&apos;s Connect
            </Link>
          </div>
        </div>
        <div
          className={`hidden lg:block items-center justify-center transition-opacity duration-700 ${
            showElements.doodle ? "opacity-100" : "opacity-0"
          }`}
        >
          {isClient ? (
            <div>
              {" "}
              <css-doodle>
                {`
                @grid: 21 / clamp(14rem, 20vw, 20rem);
                border-radius: 50%;
                background: #D8C9BB;
                scale: sin(@atan2(@dy, @dx) + @t(/800));
              `}
              </css-doodle>
              <p className="text-xs text-portfolio-color-5 font-light text-start mt-4 opacity-80 font-mono">
                {" "}
                @grid: 21 / 22rem; <br />
                border-radius: 50%; <br />
                background: #D8C9BB; <br />
                scale: sin(@atan2(@dy, @dx) + @t(/500));
              </p>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="w-10 h-10 border-4 border-dotted border-portfolio-color-4 rounded-full animate-spin"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
