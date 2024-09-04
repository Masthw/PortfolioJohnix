import About from "./sections/About/About";
import Hero from "./sections/Hero/Hero";

const Home = () => {
  return (
    <>
      <Hero />
      <div id = "about-section">
      <About />
      </div>
    </>
  );
};

export default Home;
