import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";
import ViewCV from "./ViewCV";

interface SectionAboutMeProps {
  isDarkMode: boolean;
}

export default function SectionAboutMe({ isDarkMode }: SectionAboutMeProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 min-h-screen items-start font-thin font-bodytext bg-transparent ${isDarkMode ?  "text-light-text" : "text-dark-text"}`}
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
              isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text"
            } p-6 rounded-3xl border w-full pb-0`}
          >
            <h2 className="text-lg font-bold text-primary uppercase mb-3 border-b pb-2 text-color3">
              Professional Summary
            </h2>
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div className="flex-1 text-base leading-6 tracking-tight relative gap-2">
                <div className="absolute -left-4 top-12 transform -translate-y-1/2 text-9xl font-bold text-color3">“</div>
                <div className="ml-16">
                Experienced Full Stack Developer with 5+ years of expertise in
                building scalable web applications using modern technologies like
                React, Node.js, and MongoDB. Adept at problem-solving and
                collaborating with cross-functional teams to deliver high-quality
                solutions.
                Experienced Full Stack Developer with 5+ years of expertise in
                building scalable web applications using modern technologies like
                React, Node.js, and MongoDB. Adept at problem-solving and
                collaborating with cross-functional teams to deliver high-quality
                solutions.
                </div>
                <span className="absolute -right-2 bottom-30 text-4xl font-bold text-color3">”</span>
                <ViewCV/>
              </div>
              <div className="flex-shrink-0 mx-auto md:ml-auto">
                <motion.img
                  src="/images/Marie_photo.png"
                  alt="Marie"
                  className="w-56 h-56 rounded-lg object-contain filter grayscale"
                />
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
                  isDarkMode ? "bg-dark-bg" : "bg-light-bg"
                } p-6 rounded-3xl border w-full`}
              >
                <h2 className="text-lg font-bold text-primary mb-3 border-b pb-2 text-color3 ">
                  Experience
                </h2>
                <div className="flex flex-wrap justify-center gap-4 ">
                  <motion.div
                    className="w-full sm:w-1/2 md:w-full mb-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                        <div className="flex flex-col items-start">
                          <div className="relative flex flex-col gap-6 pl-6">
                            <div className="absolute top-0 left-2 w-0.5 bg-color3 h-full rounded-xl"></div>
                          
                            <div className="flex items-center gap-4 relative">
                              <div className="w-4 h-4 bg-color3 rounded-full border  border-white absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"></div>
                              <div className="pl-8">
                                <strong>2018 - Present</strong>
                                <p>Full Stack Developer at HSE</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 relative">
                              <div className="w-4 h-4 bg-color3 rounded-full border border-white absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"></div>
                              <div className="pl-8">
                                <strong>2016 - 2018</strong>
                                <p>Junior Developer at ABC Tech</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 relative">
                              <div className="w-4 h-4 bg-color3 rounded-full border border-white absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"></div>
                              <div className="pl-8">
                                <strong>2015</strong>
                                <p>Intern at XYZ Corp</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        </motion.div>
                        </div>
                  <div className="mt-8">
                    <strong>Achievements</strong>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center gap-4">
                        <span className="material-icons-outlined text-color3 text-4xl">star</span>
                        <p className="text-base">Built a scalable web app with 1M+ users</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="material-icons-outlined text-color3 text-4xl">code</span>
                        <p className="text-base">Contributed to open-source projects</p>
                      </div>
                    </div>
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
            isDarkMode ? "bg-dark-bg" : "bg-light-bg"
          } p-6 rounded-3xl border`}
        >
          <h2 className="text-lg font-bold text-primary mb-3 border-b pb-2 text-color3">Education</h2>
          <p className="text-base">
            <strong>Bachelor of Science in Computer Science</strong> <br />
            University of Technology | Graduated: May 2017
          </p>
          <div>IMAGES OF CERTIFICATES</div>
        </section>
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-light-bg"
          } p-6 border rounded-3xl`}
        >
          <h2 className="text-lg font-bold text-primary mb-3 border-b pb-2 text-color3">Skills</h2>
          <section >
            <Skills isDarkMode={isDarkMode}/>
          </section>
        </section>
      </motion.div>
    </motion.div>
  );
}