import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Socials from "@/components/Socials";
import About from "@/components/About"
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Socials />
      <main className="xl:mx-56 lg:mx-36 md:mx-24 mx-8 space-y-16">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
