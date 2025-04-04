"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import myPhoto from "@/img/MyPhoto.png";
const ListItem = ({ skill }) => (
  <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-0 before:h-0 before:border-l-[5px] before:border-t-[5px] before:border-b-[5px] before:border-solid before:border-l-portfolio-color-6 before:border-t-transparent before:border-b-transparent">
    {skill}
  </li>
);

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div
      id="about"
      className="lg:h-screen h-full flex justify-center items-center"
      data-aos="fade-up"
    >
      <div className="space-y-8 lg:mt-0 mt-32">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-row items-center space-x-6 lg:w-3/5 w-full"
        >
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
            About Me
          </h1>
          <div className="relative h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <div className="flex lg:flex-row sm:flex-col flex-col lg:items-start items-center lg:space-y-0 space-y-16 lg:space-x-16 space-x-0">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:text-md text-sm text-portfolio-color-6 space-y-6 lg:w-full"
          >
            <p>
              Hello! My name is Ivan, and I&apos;m a self-taught web development
              enthusiast with a strong passion for building websites. My journey
              began in 2022 when I first discovered WIX, a no-code website
              builder. Inspired by the possibilities, I decided to dive deeper
              into web development and started learning how to create websites
              from scratch.
            </p>
            <p>
              Since then, I&apos;ve had the opportunity to work on various projects,
              participate in hackathons, and explore different technologies. I
              focus on building accessible, user-friendly digital experiences,
              constantly aiming to improve the usability and performance of my
              projects.
            </p>
            <p>
              Currently, my primary goal is to enhance my skills and deliver
              comfortable, accessible web solutions as a freelancer. I&apos;m always
              learning and growing, striving to become a more experienced web
              developer every day.
            </p>
            <p>Here are a few technologies I&apos;ve been working with recently:</p>
            <div className="flex flex-row lg:w-3/5 w-3/4 justify-between">
              <ul>
                <ListItem skill="JavaScript" />
                <ListItem skill="React" />
                <ListItem skill="Next.js" />
                <ListItem skill="Tailwind" />
              </ul>
              <ul>
                <ListItem skill="Flutter" />
                <ListItem skill="Scrypto" />
                <ListItem skill="Wordpress" />
                <ListItem skill="Firebase" />
              </ul>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="button-shadow relative cursor-pointer transition-all duration-300 ease-in-out bg-portfolio-color-4 lg:w-2/5 md:w-[250px] sm:w-[280px] w-full lg:h-[380px] h-[280px] rounded-lg"
          >
            <Image
              src={myPhoto}
              alt="My photo"
              className="object-top object-cover w-full h-full rounded-lg"
              fill
            />
            <div className="absolute inset-0 bg-portfolio-color-1 border-2 border-transparent bg-opacity-40 rounded-lg transition-all duration-300 ease-in-out hover:bg-opacity-0 hover:border-portfolio-color-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
