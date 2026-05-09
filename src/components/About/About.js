"use client";
import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import myPhoto from "@/img/MyPhoto.png";
import ListItems from "./ListItems";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <div id="about" className="lg:h-screen h-full flex justify-center items-center" data-aos="fade-up">
      <div className="space-y-8 lg:mt-0 mt-32">
        <div data-aos="fade-up" data-aos-delay="100" className="flex flex-row items-center space-x-6 lg:w-4/5 w-full">
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">About Me</h1>
          <div className="relative h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <div className="flex lg:flex-row sm:flex-col flex-col lg:items-start items-center lg:space-y-0 space-y-16 lg:space-x-16 space-x-0">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="lg:text-md text-sm text-portfolio-color-6 space-y-6 lg:w-full"
          >
            <p>
              Hello! My name is Ivan, and I&apos;m a frontend developer who enjoys turning ideas, designs, and product
              requirements into real working interfaces. I started my web development journey in 2022, first
              experimenting with website builders and later moving into building web applications from scratch.
            </p>

            <p>
              Since then, I&apos;ve gained experience across freelance projects, personal products, hackathons, and
              production work in an international software engineering team. I&apos;ve contributed to client websites,
              full-stack features, dashboard interfaces, design system components, authentication flows, CRUD
              functionality, API integrations, and deployment workflows.
            </p>

            <p>
              I&apos;m especially interested in building clear UI logic, reusable components, and frontend structures
              that are easy to maintain and improve. Right now, I&apos;m focused on contributing to products where
              thoughtful implementation, clean structure, and practical problem-solving really matter.
            </p>

            <p>Here are a few technologies I&apos;ve been working with recently:</p>

            <ListItems />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="button-shadow relative cursor-pointer transition-all duration-300 ease-in-out bg-portfolio-color-4 lg:w-2/5 md:w-[250px] sm:w-[280px] w-full lg:h-[380px] h-[280px] overflow-hidden rounded-lg"
          >
            <Image
              src={myPhoto}
              alt="My photo"
              className="object-center object-cover w-full h-full rounded-lg"
              fill
            />
            <div className="absolute inset-0 bg-portfolio-color-1 border-2 border-transparent bg-opacity-40 rounded-lg transition-all duration-300 ease-in-out hover:bg-opacity-0 hover:border-portfolio-color-5"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
