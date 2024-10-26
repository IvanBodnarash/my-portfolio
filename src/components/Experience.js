"use client";
import { useState } from "react";
import { tabContent, tabs } from "@/data/experienceTabs";

export default function Experience() {
  const [activeTab, setActiveTab] = useState("education");

  return (
    <div
      id="experience"
      className="lg:h-screen h-full flex flex-col items-center space-y-8 pt-28"
      data-aos="fade-up"
    >
      <div
        data-aos="fade-up"
        data-aos-delay="100"
        className="flex flex-row items-center space-x-6 w-full"
      >
        <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
          Experience
        </h1>
        <div className="h-[1px] lg:w-4/6 md:w-2/5 w-1/2 bg-portfolio-color-4"></div>
      </div>

      <div className="w-full">
        <div className="flex flex-col lg:flex-row rounded-lg text-portfolio-color-4 lg:space-x-16 space-x-0 lg:space-y-0 space-y-8">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="flex lg:flex-col flex-wrap"
          >
            {tabs.map((tab) => (
              <div key={tab} className="relative flex items-center">
                <div
                  className={`absolute left-0 top-0 h-full ${
                    activeTab === tab
                      ? "w-2 bg-portfolio-color-4"
                      : "left-[2.5px] lg:w-[1.8px] w-0 bg-portfolio-color-4"
                  } transition-all duration-300`}
                ></div>
                <button
                  className={`md:py-4 md:px-14 py-2 px-8 text-left hover:text-white transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-portfolio-color-1 text-white glow-text"
                      : "text-portfolio-color-4"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </div>
            ))}
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="lg:w-2/3 w-5/6 space-y-8"
          >
            {tabContent[activeTab].map((item, index) => (
              <div key={index} className="space-y-6">
                <h2 className="text-xl font-bold md:w-2/4 w-full">
                  {item.title}
                </h2>
                <p className="mt-2 text-portfolio-color-6 italic">
                  {item.date}
                </p>
                <p className="text-md text-portfolio-color-6 mt-4">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
