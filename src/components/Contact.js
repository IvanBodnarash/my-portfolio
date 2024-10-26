import Link from "next/link";
import socialLinks from "@/data/socialLinks";

const SocialItem = ({ IconComponent, link }) => (
  <Link href={link} target="_blank">
    <IconComponent className="text-portfolio-color-4 text-2xl hover:text-portfolio-color-5 cursor-pointer transition-all duration-200" />
  </Link>
);

export default function Contact() {
  return (
    <div
      data-aos="fade-up"
      id="contact"
      className="h-screen flex justify-center items-center"
    >
      <div className="space-y-12 lg:mt-0 mt-32">
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          className="flex flex-row items-center space-x-6 w-full"
        >
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
            Contact
          </h1>
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-5xl text-portfolio-color-6 font-bold text-center"
        >
          Let's get in touch!
        </h1>

        <div className="flex flex-col justify-center items-center space-y-16">
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-md text-center text-portfolio-color-6 space-y-6 lg:w-1/2"
          >
            <p>
              I’m always open to new opportunities and collaborations! Whether
              you have a project in mind, need a developer for your team, or
              just want to connect, feel free to reach out.
            </p>
          </div>
          <Link data-aos="fade-up" data-aos-delay="400" href="mailto:ivan.bodnarash.dev@gmail.com">
            <button className="button-shadow glow-text-static justify-center items-center lg:text-md md:text-sm text-xs lg:px-14 md:px-8 px-6 py-[0.6rem] border-[1.2px] border-portfolio-color-4 rounded-md transition-all duration-200">
              Send Email
            </button>
          </Link>
        </div>

        <div className="md:hidden flex flex-row items-center justify-center space-x-12 sm:pb-4 pb-8">
          {socialLinks.map((link, index) => (
            <SocialItem key={index} IconComponent={link.icon} link={link.link} />
          ))}
        </div>
      </div>
    </div>
  );
}
