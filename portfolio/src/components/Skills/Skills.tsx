import { motion } from "framer-motion";
import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

gsap.registerPlugin(ScrollTrigger);

export default function Skills() {


  const skills = [
    { name: "JavaScript", tags: ["Frontend", "JavaScript"] },
    { name: "React", tags: ["Frontend", "React"] },
    { name: "Node.js", tags: ["Backend", "Node.js"] },
    { name: "MongoDB", tags: ["Database", "MongoDB"] },
    { name: "CSS", tags: ["Frontend", "CSS"] },
    { name: "Express", tags: ["Backend", "Express"] },
    { name: "TypeScript", tags: ["Frontend", "TypeScript"] },
  ];


  useEffect(() => {
    gsap.to(".skill-item", {
      scrollTrigger: {
        trigger: ".skills-grid",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      opacity: 1,
      duration: 1,
    });
  }, []);

  return (
    <section id="skills" className="skills-section bg-transparent">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="skills-grid">
          {skills.map((skill, index) => {
            return (
              <motion.div
                key={index}
                className="skill-item"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <h3 className="text-sm font-medium">{skill.name}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
