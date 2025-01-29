import React from "react";
import { motion } from "framer-motion";
import Skills from "../Skills/Skills";
import "./CV.scss";

export default function CV() {
  return (
    <motion.div
      className="cv-container grid grid-cols-1 md:grid-cols-3 gap-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Professional Summary */}
      <div className="cv-main-content md:col-span-3 flex flex-col justify-center items-center">
        <section className="section professional-summary">
          <h2 className="section-title">Professional Summary</h2>
          <div className="section-content-container">
            <p className="section-content">
              Experienced Full Stack Developer with 5+ years of expertise in
              building scalable web applications using modern technologies like
              React, Node.js, and MongoDB. Adept at problem-solving and
              collaborating with cross-functional teams to deliver high-quality
              solutions.

              INFOGRAFIC

              Start in 2018 at HSE (Python)
            </p>

            <div className="cv-photo-container">
              <div className="grayscale">
                <img
                  src="/images/Marie_photo.png"
                  alt="Marie"
                  className="photo"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Experience */}
      <div className="md:col-span-2 md:row-span-2 flex flex-col justify-between min-w-[400px]">
        <section className="section experience">
          <h2 className="section-title">Experience</h2>
          <div className="job-card">
            <h3 className="job-title">Senior Developer</h3>
            <p className="job-details">TechCorp Inc. | Jan 2020 - Present</p>
            <ul className="job-responsibilities">
              <li>
                Developed and maintained web applications using React, Node.js,
                and MongoDB.
              </li>
              <li>
                Led a team of 5 developers, ensuring timely delivery of
                projects.
              </li>
              <li>
                Improved application performance by 30% through code
                optimization.
              </li>
            </ul>
          </div>
          <div className="job-card">
            <h3 className="job-title">Frontend Developer</h3>
            <p className="job-details">Web Solutions | Jun 2017 - Dec 2019</p>
            <ul className="job-responsibilities">
              <li>
                Built responsive web interfaces using React and Tailwind CSS.
              </li>
              <li>
                Collaborated with designers to create user-friendly
                experiences.
              </li>
              <li>Wrote unit tests to ensure code quality and reduce bugs.</li>
            </ul>
          </div>
        </section>
      </div>

      {/* Education */}
      <div className="md:col-span-1 min-w-[250px] flex flex-col justify-between">
        <section className="section education">
          <h2 className="section-title">Education</h2>
          <p className="section-content">
            <strong>Bachelor of Science in Computer Science</strong> <br />
            University of Technology | Graduated: May 2017
          </p>

          <div>IMAGES OF CERTIFICATES</div>
        </section>
      </div>

      {/* Skills */}
      <div className="md:col-span-1 min-w-[250px] flex flex-col justify-between">
        <section className="section skills">
          <h2 className="section-title">Skills</h2>
          <Skills />
        </section>
      </div>
      <div className="cv-main-content md:col-span-3 flex flex-col justify-center items-center">
        <section className="section references">
          <h2 className="section-title">References</h2>
          <div className="section-content-container">
            <p className="section-content">
              Experienced Full Stack Developer with 5+ years of expertise in
              building scalable web applications using modern technologies like
              React, Node.js, and MongoDB. Adept at problem-solving and
              collaborating with cross-functional teams to deliver high-quality
              solutions.

              Name + Source 
            </p>

          </div>
        </section>
      </div>
    </motion.div>
  );
}