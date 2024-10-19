const ListItem = ({ skill }) => (
  <li className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:transform before:-translate-y-1/2 before:w-0 before:h-0 before:border-l-[5px] before:border-t-[5px] before:border-b-[5px] before:border-solid before:border-l-portfolio-color-6 before:border-t-transparent before:border-b-transparent">
    {skill}
  </li>
);

export default function About() {
  return (
    <div id="about" className="lg:h-screen h-full flex justify-center items-center">
      <div className="space-y-8">
        <div className="flex flex-row items-center space-x-6 lg:w-3/5 w-full">
          <h1 className="lg:text-3xl text-2xl text-portfolio-color-4 font-semibold">
            About Me
          </h1>
          <div className="h-[1px] lg:w-[60%] w-[50%] bg-portfolio-color-4"></div>
        </div>

        <div className="flex lg:flex-row sm:flex-col flex-col lg:items-start items-center lg:space-y-0 space-y-16 lg:space-x-16 space-x-0">
          <div className="lg:text-md text-sm text-portfolio-color-6 space-y-6 lg:w-full">
            <p>
              Hello! My name is Ivan, and I’m a self-taught web development
              enthusiast with a strong passion for building websites. My journey
              began in 2022 when I first discovered WIX, a no-code website
              builder. Inspired by the possibilities, I decided to dive deeper
              into web development and started learning how to create websites
              from scratch.
            </p>
            <p>
              Since then, I've had the opportunity to work on various projects,
              participate in hackathons, and explore different technologies. I
              focus on building accessible, user-friendly digital experiences,
              constantly aiming to improve the usability and performance of my
              projects.
            </p>
            <p>
              Currently, my primary goal is to enhance my skills and deliver
              comfortable, accessible web solutions as a freelancer. I’m always
              learning and growing, striving to become a more experienced web
              developer every day.
            </p>
            <p>Here are a few technologies I’ve been working with recently:</p>
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

          <div className="button-shadow cursor-pointer transition-all duration-300 ease-in-out bg-portfolio-color-4 lg:w-2/5 md:w-[250px] w-[200px] lg:h-[330px] h-[200px] rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}
