import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import BrandIdentity from "@/components/BrandIdentity";
import CyberpunkPoster from "@/components/CyberpunkPoster";
import Books from "@/components/Books";
import Skills from "@/components/Skills";
import AgentTerminal from "@/components/AgentTerminal";
import Services from "@/components/Services";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <BrandIdentity />
      <CyberpunkPoster />
      <Books />
      <Skills />
      <AgentTerminal />
      <Services />
      <Contact />
    </>
  );
}
