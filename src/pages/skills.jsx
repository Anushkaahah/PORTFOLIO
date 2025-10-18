import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.7, type: "spring", stiffness: 80 },
    }),
    hover: { scale: 1.05, boxShadow: "0 0 30px rgba(3,251,255,0.2)" },
  };

  const skills = [
    {
      title: "Hard Skills",
      items: ["Project Management", "Agile & Scrum Enthusiast", "Graphic Designer", "Video Editor", "Social Media Handler"],
    },
    {
      title: "Soft Skills",
      items: ["Leadership", "Motivator", "Focused", "Adaptability", "Time Management"],
    },
  ];

  return (
    <motion.div
      className="w-full max-w-6xl flex flex-col md:flex-row flex-wrap justify-center items-start gap-8 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {skills.map((skill, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariants}
          whileHover="hover"
          className="bg-gray-900/30 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full sm:w-80 flex flex-col items-center text-center border border-[#03fbff]/10"
        >
          <h2 className="text-xl md:text-2xl font-serif mb-4 text-[#03fbff]">{skill.title}</h2>
          <ul className="flex flex-col gap-2 text-left w-full list-disc pl-5 text-base md:text-lg font-mono">
            {skill.items.map((item, idx) => (
              <li key={idx} className="ml-1">{item}</li>
            ))}
          </ul>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Skills;
