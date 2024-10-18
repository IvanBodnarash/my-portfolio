/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "portfolio-color-1": "#352F44",
        "portfolio-color-2": "#5C5470",
        "portfolio-color-3": "#B9B4C7",
        "portfolio-color-4": "#FAF0E6",
        "portfolio-color-5": "#D8C9BB",
        "portfolio-color-6": "#ECDFD1",
        "portfolio-color-7": "#E9E2DC",
      },
    },
  },
  plugins: [],
};
