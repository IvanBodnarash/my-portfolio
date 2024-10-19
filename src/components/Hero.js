"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import "css-doodle";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="h-screen flex justify-between items-center">
      <div className="lg:space-y-8 sm:space-y-6 space-y-4 lg:w-3/5 w-full">
        <div className="lg:space-y-4 space-y-2">
          <h3 className="lg:text-2xl text-xl text-portfolio-color-4">
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
          <h1 className="lg:text-6xl sm:text-5xl text-4xl text-portfolio-color-4 font-black">
            Ivan Bodnarash.
          </h1>
          <h1 className="lg:text-6xl sm:text-5xl text-4xl text-portfolio-color-5 font-black">
            Frontend Developer.
          </h1>
          <p className="lg:text-md text-sm text-portfolio-color-6 opacity-80">
            I specialize in building visually appealing and functional websites.
            I love combining creativity with code to craft intuitive user
            interfaces. Always eager to learn and grow, I’m excited to bring
            your ideas to life on the web.
          </p>
        </div>
        <div className="">
          <Link href="#projects">
            <button className="button-shadow glow-text-static lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 rounded-md transition-all duration-200">
              Discover My Projects
            </button>
          </Link>
          <Link
            href="#contact"
            className="lg:ml-12 ml-6 lg:text-md md:text-sm text-xs glow-text-static transition-all hover:text-portfolio-color-5"
          >
            Let's Connect
          </Link>
        </div>
      </div>
      <div className="hidden lg:block flex items-center">
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
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
