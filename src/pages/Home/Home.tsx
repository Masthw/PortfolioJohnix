import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <div id="about-section">
        <About />
      </div>
      <div id="skills-section">
        <Skills />
      </div>
      <div id="projects-section">
        <Projects />
      </div>
    </>
  );
};

export default Home;
