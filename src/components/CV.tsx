import React from "react";
import { motion } from "framer-motion";
import SkillsMostlyUsed from "./SkillsMostlyUsed";
import SkillsLessUsed from "./SkillsLessUsed";

export default function CV() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 items-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Professional Summary */}
      <div className="md:col-span-3 flex flex-col justify-center items-center">
        <section className="bg-light p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-bold text-primary uppercase mb-3 border-b-2 pb-2">
            Professional Summary
          </h2>
          <div className="flex flex-col gap-2">
            <p className="text-base text-dark leading-6 tracking-tight">
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

            <div className="flex justify-center items-centermx-auto md:ml-auto">
              <div className="relative overflow-hidden">
                <img
                  src="/images/Marie_photo.png"
                  alt="Marie"
                  className="w-56 h-56 md:w-56 md:h-56 lg:w-56 lg:h-56 rounded-lg object-contain filter grayscale"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Experience */}
      <div className="md:col-span-2 flex flex-col justify-between min-w-[400px]">
        <section className="bg-light p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">
            Experience
          </h2>
          <div className="mb-4">
            <h3 className="text-md font-semibold text-primary">Senior Developer</h3>
            <p className="italic text-primary mb-2">TechCorp Inc. | Jan 2020 - Present</p>
            <ul className="list-none pl-0">
              <li className="mb-2 text-dark">Developed and maintained web applications using React, Node.js, and MongoDB.</li>
              <li className="mb-2 text-dark">Led a team of 5 developers, ensuring timely delivery of projects.</li>
              <li className="mb-2 text-dark">Improved application performance by 30% through code optimization.</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-md font-semibold text-primary">Frontend Developer</h3>
            <p className="italic text-primary mb-2">Web Solutions | Jun 2017 - Dec 2019</p>
            <ul className="list-none pl-0">
              <li className="mb-2 text-dark">Built responsive web interfaces using React and Tailwind CSS.</li>
              <li className="mb-2 text-dark">Collaborated with designers to create user-friendly experiences.</li>
              <li className="mb-2 text-dark">Wrote unit tests to ensure code quality and reduce bugs.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Education */}
      <div className="md:col-span-1 min-w-[250px] flex flex-col justify-between">
        <section className="bg-light p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">Education</h2>
          <p className="text-base text-dark">
            <strong>Bachelor of Science in Computer Science</strong> <br />
            University of Technology | Graduated: May 2017
          </p>
          <div>IMAGES OF CERTIFICATES</div>
        </section>
      </div>

      {/* Skills */}
      <div className="md:col-span-1 min-w-[250px] flex flex-col justify-between">
        <section className="bg-light p-6 rounded-lg shadow-lg">
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">Skills</h2>
          <div>
          <section id="skills-mostly">
          <p>Less Commonly Used</p>
        <SkillsMostlyUsed />
        </section>
        <section id="skills-less">
        <p>Less Commonly Used</p>
          <SkillsLessUsed />
        </section>
          </div>
        </section>
      </div>

      {/* References */}
      <div className="md:col-span-3 flex flex-col justify-center items-center">
        <section className="bg-light p-6 rounded-lg shadow-lg w-full">
          <h2 className="text-lg font-bold text-primary mb-3 border-b-2 pb-2">References</h2>
          <div className="flex flex-col gap-2">
            <p className="text-base text-dark leading-6 tracking-tight">
              Experienced Full Stack Developer with 5+ years of expertise in
              building scalable web applications using modern technologies like
              React, Node.js, and MongoDB. Adept at problem-solving and
              collaborating with cross-functional teams to deliver high-quality
              solutions.
              <br />
              Name + Source
            </p>
          </div>
        </section>
      </div>
    </motion.div>
  );
}