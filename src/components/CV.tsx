import React from "react";
import { motion } from "framer-motion";
import SkillsMostlyUsed from "./SkillsMostlyUsed";
import SkillsLessUsed from "./SkillsLessUsed";

interface CVProps {
  isDarkMode: boolean;
}

export default function CV({ isDarkMode }: CVProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-screen items-start font-thin font-bodytext ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-color-light text-color-dark"
      }`}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="md:col-span-2 flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-color-light"
          } p-6 rounded-lg shadow-lg w-full`}
        >
          <h2 className="text-lg font-bold text-primary uppercase mb-3 border-b-2 pb-2">
            Professional Summary
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-base leading-6 tracking-tight">
              Experienced Full Stack Developer with 5+ years of expertise in
              building scalable web applications using modern technologies like
              React, Node.js, and MongoDB. Adept at problem-solving and
              collaborating with cross-functional teams to deliver high-quality
              solutions.
              <br />
              INFOGRAPHIC
              <br />
              Start in 2018 at HSE (Python)
            </p>

            <div className="flex justify-center items-center mx-auto md:ml-auto">
              <div className="relative overflow-hidden">
                <motion.img
                  src="/images/Marie_photo.png"
                  alt="Marie"
                  className="w-56 h-56 md:w-56 md:h-56 lg:w-56 lg:h-56 rounded-lg object-contain filter grayscale"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          </div>
        </section>
      </motion.div>
      <motion.div
        className="md:col-span-1 flex flex-col justify-start items-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-color-light"
          } p-6 rounded-lg shadow-lg w-full`}
        >
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">
            Experience
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.div
              className="w-full sm:w-1/2 md:w-full mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-md font-semibold text-primary">Senior Developer</h3>
              <p className="italic text-primary mb-2">TechCorp Inc. | Jan 2020 - Present</p>
              <ul className="text-base leading-6 tracking-tight overflow-hidden">
                <motion.li className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  Developed and maintained web applications using React, Node.js, and MongoDB.
                </motion.li>
                <motion.li className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  Led a team of 5 developers, ensuring timely delivery of projects.
                </motion.li>
                <motion.li className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  Improved application performance by 30% through code optimization.
                </motion.li>
              </ul>
            </motion.div>
            <motion.div
              className="w-full md:w-full mb-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-md font-semibold text-primary">Frontend Developer</h3>
              <p className="italic text-primary mb-2">Web Solutions | Jun 2017 - Dec 2019</p>
              <ul className="text-base leading-6 tracking-tight overflow-hidden">
                <motion.li className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  Built responsive web interfaces using React and Tailwind CSS.
                </motion.li>
                <motion.li className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  Collaborated with designers to create user-friendly experiences.
                </motion.li>
                <motion.li className="mb-2" whileHover={{ x: 5 }} transition={{ duration: 0.3 }}>
                  Wrote unit tests to ensure code quality and reduce bugs.
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </section>
      </motion.div>
      <motion.div
        className="md:col-span-1 flex flex-col justify-start gap-6"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-color-light"
          } p-6 rounded-lg shadow-lg`}
        >
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">Education</h2>
          <p className="text-base">
            <strong>Bachelor of Science in Computer Science</strong> <br />
            University of Technology | Graduated: May 2017
          </p>
          <div>IMAGES OF CERTIFICATES</div>
        </section>
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-color-light"
          } p-6 rounded-lg shadow-lg`}
        >
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">Skills</h2>
          <section id="skills-mostly">
            <p>Most Commonly Used</p>
            <SkillsMostlyUsed />
          </section>
          <section id="skills-less">
            <p>Less Commonly Used</p>
            <SkillsLessUsed />
          </section>
        </section>
      </motion.div>
    </motion.div>
  );
}