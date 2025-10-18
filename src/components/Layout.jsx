import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

// Navbar Component
const Navbar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="w-full py-4 px-10 flex items-center justify-between text-white bg-transparent fixed top-0 left-0 z-50 pointer-events-auto">
      <h1
        onClick={() => handleScroll("home")}
        className="text-2xl font-serif cursor-pointer hover:text-[#03fbff] transition-colors"
      >
        PORTFOLIO
      </h1>
      <ul className="flex gap-10 text-sm font-sans">
        <li
          onClick={() => handleScroll("home")}
          className="hover:text-[#03fbff] cursor-pointer transition-all duration-200"
        >
          Home
        </li>
        <li
          onClick={() => handleScroll("education")}
          className="hover:text-[#03fbff] cursor-pointer transition-all duration-200"
        >
          Education
        </li>
        <li
          onClick={() => handleScroll("skills")}
          className="hover:text-[#03fbff] cursor-pointer transition-all duration-200"
        >
          Skills
        </li>
      </ul>
    </nav>
  );
};

// Intro Component
const Intro = () => {
  return (
<div className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 text-white bg-gray-900/30 backdrop-blur-md rounded-2xl p-8 w-full max-w-6xl shadow-[0_12px_40px_rgba(3,251,255,0.3)]">

      {/* Text Section */}
      <div className="md:w-2/3 space-y-4">
        <h1 className="font-mono text-lg">Hello!</h1>
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-5xl font-serif"
        >
          It's me <span className="text-[#03fbff] ml-3">Anushka Moon</span>
        </motion.h1>
        <h2 className="font-mono text-base">
          Bachelor of Technology in Computer Science and Business Systems
        </h2>

        {/* Social Links */}
        <div className="flex items-center gap-4 mt-4">
          <a href="https://www.linkedin.com/in/anushkamoon-21-06j/" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#03fbff]">
            <FontAwesomeIcon icon={faLinkedin} className="text-xl" /> LinkedIn
          </a>
          <a href="mailto:Anushkawork2106@gmail.com" className="flex items-center gap-2 hover:text-[#03fbff]">
            <FontAwesomeIcon icon={faEnvelope} className="text-xl" /> Email
          </a>
          <a href="https://github.com/Anushkaahah" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-[#03fbff]">
            <FontAwesomeIcon icon={faGithub} className="text-xl" /> GitHub
          </a>
        </div>

        {/* Bio */}
        <div className="mt-6 p-5 border border-cyan-400 bg-white/5 rounded-xl shadow-inner">
          <p className="text-lg font-serif leading-relaxed">
            I’m a 3rd-year CSBS student and Google Project Management certified professional.
            Passionate about frontend development, media, and creative storytelling.
            Currently leading media initiatives at Ignite Forum and building my way through
            the tech world, one project at a time.
          </p>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-10 md:mt-0 md:ml-10 flex justify-center">
        <img src="/assets/Anushka.png" alt="Anushka Moon" className="rounded-full h-90 w-64 border-4 border-[#03fbff]/40 shadow-[0_12px_40px_rgba(3,251,255,0.3)] object-cover" />
      </div>
    </div>
  );
};

export { Navbar, Intro };
