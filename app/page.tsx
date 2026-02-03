import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Experience } from "./components/experience";
import { Projects } from "./components/projects";
import { Skills } from "./components/skills";
import { Contact } from "./components/contact";

export default function Home() {
  return (
    <>
      {/* Animated Background */}
      <div className="gradient-bg">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
