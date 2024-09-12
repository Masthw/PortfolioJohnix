import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";
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
    </>
  );
};

export default Home;
