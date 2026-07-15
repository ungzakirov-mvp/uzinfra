import { Navbar } from "@/components/Navbar";
import { About } from "@/sections/About";
import { Careers } from "@/sections/Careers";
import { Contact } from "@/sections/Contact";
import { FeaturedProjects } from "@/sections/FeaturedProjects";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { News } from "@/sections/News";
import { Sectors } from "@/sections/Sectors";
import { Stats } from "@/sections/Stats";
import { Sustainability } from "@/sections/Sustainability";
import { WhyUzinfra } from "@/sections/WhyUzinfra";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Sectors />
        <FeaturedProjects />
        <WhyUzinfra />
        <Sustainability />
        <News />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
