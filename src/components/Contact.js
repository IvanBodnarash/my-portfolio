import Link from "next/link";

export default function Contact() {
  return (
    <div id="contact" className="h-screen flex justify-center items-center">
      <div className="space-y-12">
        <div className="flex flex-row items-center space-x-6 w-full">
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
            Contact
          </h1>
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <h1 className="text-5xl text-portfolio-color-6 font-bold text-center">
          Let's get in touch!
        </h1>

        <div className="flex flex-col justify-center items-center space-y-16">
          <div className="text-md text-center text-portfolio-color-6 space-y-6 lg:w-1/2">
            <p>
              I’m always open to new opportunities and collaborations! Whether
              you have a project in mind, need a developer for your team, or
              just want to connect, feel free to reach out.
            </p>
          </div>
          <Link href="#projects">
            <button className="button-shadow glow-text-static justify-center items-center lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 rounded-md transition-all duration-200">
              Send Email
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
