export default function SkillItem({ Icon, name, index, isVisible }) {
  return (
    <div
      className={`flex flex-col items-center transition-all duration-500 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: isVisible ? `${index * 40}ms` : "0ms",
      }}
    >
      <div className="lg:size-18 md:size-16 sm:size-14 size-12 p-2 border-2 border-portfolio-color-4 flex justify-center items-center border-opacity-50 rounded-lg hover:cursor-pointer button-shadow transition-all duration-300 ease-in-out">
        <Icon className="lg:text-4xl md:text-2xl text-xl text-portfolio-color-4" />
      </div>

      <h3 className="md:text-md text-sm font-mono text-center mt-2 text-portfolio-color-4">{name}</h3>
    </div>
  );
}
