import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { delay: i * 0.3, duration: 0.7, type: "spring", stiffness: 80 },
    }),
    hover: { scale: 1.05, boxShadow: "0 0 40px rgba(3, 251, 255, 0.2)", transition: { type: "spring", stiffness: 150 } },
  };

  const educations = [
    { title: "10th School", img: "/assets/school.png", score: "Marks: 91.2%" },
    { title: "12th College", img: "/assets/college.png", score: "Marks: 72%" },
    { title: "Engineering College", img: "/assets/engineering.png", score: "CGPA: 9.12" },
    {
      title: "Certified Project Manager",
      img: "/assets/certificate.jpg",
      score: "Click to view certificate",
      link: "https://lnkd.in/dpkbAgnY",
    },
  ];

  return (
    <motion.div
      className="w-full max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap justify-center items-start gap-10 py-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {educations.map((edu, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={cardVariants}
          whileHover="hover"
          className="bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-lg p-6 md:p-8 w-full sm:w-80 flex flex-col items-center text-center border border-[#03fbff]/10 transition-all duration-300"
        >
          <h2 className="text-xl md:text-2xl font-serif mb-4 text-[#03fbff]">{edu.title}</h2>
          {edu.link ? (
            <a href={edu.link} target="_blank" rel="noreferrer">
              <motion.img
                src={edu.img}
                alt={edu.title}
                className="h-40 w-40 md:h-44 md:w-44 object-cover rounded-full border-4 border-[#03fbff]/40 shadow-lg"
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              />
            </a>
          ) : (
            <motion.img
              src={edu.img}
              alt={edu.title}
              className="h-40 w-40 md:h-44 md:w-44 object-cover rounded-full border-4 border-[#03fbff]/40 shadow-lg"
              whileHover={{ rotate: 5, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            />
          )}
          <p className="mt-4 md:mt-5 text-base md:text-lg font-mono text-gray-300">{edu.score}</p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Education;
