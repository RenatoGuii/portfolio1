import "./styles/sass/Main.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

//Pages
import Home from "./pages/Home/Home";
import Skill from "./pages/Skill/Skill";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound/NotFound";
//Components
import NavbarDesktop from "./components/Navbar/NavbarDesktop";
import NavbarMobile from "./components/Navbar/NavbarMobile";

function App() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* Navbar */}
      {(() => {
        if (width >= 576 && height >= 566) {
          return <NavbarDesktop />;
        } else if (width < 576 || height < 566) {
          return <NavbarMobile />;
        }
      })()}
    </div>
  );
}

export default App;
