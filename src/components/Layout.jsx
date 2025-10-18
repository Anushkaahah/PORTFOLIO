import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // close menu after click
    }
  };

  return (
    <nav className="w-full py-4 px-6 flex items-center justify-between text-white bg-gray-900/70 backdrop-blur-md fixed top-0 left-0 z-50">
      {/* Logo */}
      <h1
        onClick={() => handleScroll("home")}
        className="text-2xl font-serif cursor-pointer hover:text-[#03fbff] transition-colors"
      >
        PORTFOLIO
      </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 text-sm font-sans">
        <li onClick={() => handleScroll("home")} className="hover:text-[#03fbff] cursor-pointer transition-all duration-200">Home</li>
        <li onClick={() => handleScroll("education")} className="hover:text-[#03fbff] cursor-pointer transition-all duration-200">Education</li>
        <li onClick={() => handleScroll("skills")} className="hover:text-[#03fbff] cursor-pointer transition-all duration-200">Skills</li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="focus:outline-none">
          {isOpen ? (
            <span className="text-2xl">&#10005;</span> // X icon
          ) : (
            <span className="text-2xl">&#9776;</span> // Hamburger
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-gray-900/95 flex flex-col items-center gap-6 py-4 md:hidden">
          <li onClick={() => handleScroll("home")} className="hover:text-[#03fbff] cursor-pointer transition-all duration-200">Home</li>
          <li onClick={() => handleScroll("education")} className="hover:text-[#03fbff] cursor-pointer transition-all duration-200">Education</li>
          <li onClick={() => handleScroll("skills")} className="hover:text-[#03fbff] cursor-pointer transition-all duration-200">Skills</li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
