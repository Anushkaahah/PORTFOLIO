import React, { useState, useEffect } from "react";
import { Navbar, Intro } from "./components/Layout.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/skills.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#250035] text-white overflow-x-hidden">
      {/* Particles */}
      <ParticlesBackground
        className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10"
        isMobile={isMobile}
      />

      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <div id="home" className="w-full flex justify-center pt-32 px-4">
        <Intro />
      </div>

      <div id="education" className="w-full flex justify-center pt-20 px-4">
        <Education />
      </div>

      <div id="skills" className="w-full flex justify-center pt-20 px-4">
        <Skills />
      </div>
    </div>
  );
};

export default App;
