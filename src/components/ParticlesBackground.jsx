import React, { useEffect } from "react";

const ParticlesBackground = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/particles.js"; // loaded from public folder
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS.load(
          "particles-js",
          "/assets/particles.json",
          () => console.log("Particles.js config loaded successfully!")
        );
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="particles-js"
      className="w-full h-full absolute top-0 left-0 pointer-events-none"
    ></div>
  );
};

export default ParticlesBackground;
