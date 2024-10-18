"use client";
import { useState, useEffect } from "react";
import "css-doodle";

export default function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const doodle = document.querySelector("css-doodle");
    if (doodle) {
        let pre = document.createElement("pre");
        pre.innerHTML = doodle._code;
        document.body.appendChild(pre);
    }
    setIsClient(true);
  }, []);

  return (
    <div className="h-screen flex justify-between">
      <div className="space-y-4 w-3/5">
        <h3 className="text-2xl text-portfolio-color-4">Hi, my name is</h3>
        <h1 className="text-6xl text-portfolio-color-4 font-black">
          Ivan Bodnarash.
        </h1>
        <h1 className="text-6xl text-portfolio-color-5 font-black">
          Frontend Developer.
        </h1>
        <p className="text-md text-portfolio-color-6 opacity-80">
          I specialize in building visually appealing and functional websites. I
          love combining creativity with code to craft intuitive user
          interfaces. Always eager to learn and grow, I’m excited to bring your
          ideas to life on the web.
        </p>
      </div>
      <div className="">
        {isClient ? (
          <css-doodle>
            {`
              @grid: 21 / 40vmin;
              border-radius: 50%;
              background: #E9E2DC;
              scale: sin(@atan2(@dy, @dx) + @t(/500));
            `}
          </css-doodle>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
