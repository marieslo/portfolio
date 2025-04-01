import React from "react";
import { motion } from "framer-motion";
import Skills from "./Skills";

interface SectionAboutMeProps {
  isDarkMode: boolean;
}

export default function SectionAboutMe({ isDarkMode }: SectionAboutMeProps) {
  return (
    <motion.div
      className={`grid grid-cols-1 md:grid-cols-2 gap-6 p-6 tems-start font-bodytext bg-transparent ${isDarkMode ?  "text-light-text" : "text-dark-text"}`}
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
              isDarkMode ? "bg-dark-bg text-light-text" : "bg-light-bg text-dark-text "
            } p-6 rounded-3xl border w-full pb-0 align-bottom`}
          >
            <div className="flex flex-col md:flex-row gap-4 justify-between">
              <div 
              className="flex-1 text-base leading-6 tracking-tight relative gap-2"
              >
                
              <div className="ml-8 font-subheader leading-6 mb-4 text-md">
              <span className="text-7xl font-quote font-bold text-color3" style={{ fontStyle: 'normal' }}>“</span>
              <span>Hello! Nice to see you here!</span>
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm currently working on my own app and growing as a developer. Before that, I built some studying and real webapps by myself and with international teams. These are some of my pet projects above where I am sharpening my skills and trying them out.    
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Previously, I analyzed and managed budgets for job boards, which helped me hone skills such as organizing time, costs, and coworkers coordination efficiently. I spent a period of several years assisting top management. It helped me develop my leadership skills.    
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Outside of work, I'm learning new technologies, art and design, foreign languages, and delving deeper into computer science. I'm always excited to take on new challenges and continue to grow. 
              <br />
              <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feel free to contact me - let's create something great together!</span>
              <span className="absolute text-4xl font-bold font-quote text-color3" style={{ fontStyle: 'normal' }}>
              &nbsp;”</span>
            </div>
              </div>
              <div className="flex-shrink-0 mx-auto ml-auto">
                <motion.img
                  src="https://res.cloudinary.com/nkwjho4xf/image/upload/v1743533313/portfolio/Marie_photo_yvul7u.png"
                  alt="Marie"
                  className="w-56 h-56 rounded-lg object-contain filter grayscale"
                />
              </div>
            </div>
          </section>
        </motion.div>
            {/* <motion.div
              className="md:col-span-1 flex flex-col justify-start items-center text-sm"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <section
                className={`${
                  isDarkMode ? "bg-dark-bg" : "bg-light-bg"
                } p-6 rounded-3xl border w-full`}
              >
                <h2 className="text-md font-header font-bold text-primary mb-3 border-b pb-2 text-color3">
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
                                <strong>Jun 2024 - Present</strong>
                                <p>Freelance Full Stack Developer</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 relative">
                              <div className="w-4 h-4 bg-color3 rounded-full border border-white absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"></div>
                              <div className="pl-8">
                                <strong>Mar 2024 - May 2024</strong>
                                <p>Junior Full Stack Developer at <strong>Eloo</strong></p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 relative">
                              <div className="w-4 h-4 bg-color3 rounded-full border border-white absolute -left-2 top-1/2 transform -translate-y-1/2 z-10"></div>
                              <div className="pl-8">
                                <strong>Nov 2015 - Oct 2023</strong>
                                <div>PA to CEO /  Analyst / Job Board Manager at <a href="https://www.ancor.ru" target="_blank" rel="noopener noreferrer" className="hover:underline"><strong>ANCOR</strong></a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        </motion.div>
                        </div>
                  <div className="mt-8">
                    <strong>Achievements</strong>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                      <div className="flex items-center gap-4 ">
                        <span className="material-icons-outlined text-color3 text-2xl">star</span>
                        <p>Built a scalable web app with 1M+ users</p>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="material-icons-outlined text-color3 text-2xl">code</span>
                        <p >Contributed to open-source projects</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="material-icons-outlined text-color3 text-2xl">file</span>
                        <p >  I have recommendations</p>
                      </div>
                  
                </div>
              </section>
         </motion.div>
      <motion.div
        className="md:col-span-1 flex flex-col justify-start gap-6 text-sm"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-light-bg"
          } p-6 rounded-3xl border`}
        >
          <h2 className="text-md font-header font-bold text-primary mb-3 border-b pb-2 text-color3">Education</h2>
          <p>
            <strong>Full-Stack Development</strong> <br />
            Israel Tech challenge | March 2024
          </p>
          <br/>
          <p>
            <strong>Python Programming (Backend Developer)</strong> <br />
            Skillfactory | October 2022
          </p>
          <br/>
          <p>
          <strong>Stock market and investing (Bachelor of Economics)</strong> <br />
            Higher School of Economics | July 2020
          </p>
        </section>
        <section
          className={`${
            isDarkMode ? "bg-dark-bg" : "bg-light-bg"
          } p-6 border rounded-3xl`}
        >
          <h2 className="text-md font-header font-bold text-primary mb-3 border-b pb-2 text-color3">Skills</h2>
          <section >
            <Skills isDarkMode={isDarkMode}/>
          </section>
        </section>
      </motion.div> */}
    </motion.div>
  );
}