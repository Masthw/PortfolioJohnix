import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import Projects from "./pages/Home/sections/Projects/Projects";
import ProjectDetail from "./pages/Home/sections/Projects/ProjectDetail";
import "./global.css";
import Footer from "./components/Footer/Footer";

const App = () => {

  const location = useLocation();

  return (
    <>
      {!location.pathname.startsWith("/project") && <NavBar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;