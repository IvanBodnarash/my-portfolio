import Image from "next/image";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="px-56 pt-44">
        <Hero />
      </main>
    </div>
  );
}
