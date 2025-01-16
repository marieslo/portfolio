import { motion } from "framer-motion";
import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Skills.css';

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {

  const projects = [
    { id: 1, name: "Project 1", imageUrl: "/mockpics/image1.png", tags: ['JavaScript', 'React'] },
    { id: 2, name: "Project 2", imageUrl: "/mockpics/image2.png", tags: ['React', 'Node.js'] },
    { id: 3, name: "Project 3", imageUrl: "/mockpics/image3.png", tags: ['JavaScript', 'MongoDB'] },
  ];


  const skills = [
    { name: 'JavaScript', tags: ['Frontend', 'JavaScript'] },
    { name: 'React', tags: ['Frontend', 'React'] },
    { name: 'Node.js', tags: ['Backend', 'Node.js'] },
    { name: 'MongoDB', tags: ['Database', 'MongoDB'] },
  ];

  // Count the number of projects that match each skill tag
  const getTagPercentage = (tags: string[]) => {
    const totalProjects = projects.length;
    const matchingProjects = projects.filter(project =>
      tags.some(tag => project.tags.includes(tag))
    ).length;

    return (matchingProjects / totalProjects) * 100;
  };

  useEffect(() => {
    gsap.to('.skill', {
      scrollTrigger: {
        trigger: '.skill',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <section id="skills" className="skills-section py-20 bg-transparent text-white">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const tagPercentage = getTagPercentage(skill.tags); 
            
            return (
              <motion.div
                key={index}
                className="skill-card bg-black p-4 rounded-lg shadow-lg hover:bg-primary transition-all space-y-4"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                style={{ width: `${tagPercentage}%` }} 
              >
                <h3 className="text-xl px- font-semibold">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}