import React, { useEffect } from "react";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Skills.css";

// gsap.registerPlugin(ScrollTrigger);

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

  const pastelColors = ["#ffadad","#ffd6a5","#fdffb6","#caffbf","#9bf6ff","#a0c4ff","#bdb2ff","#ffc6ff"]

  // useEffect(() => {
  //   gsap.to(".skill-item", {
  //     scrollTrigger: {
  //       trigger: ".skills-grid",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //     opacity: 1,
  //     duration: 1,
  //   });
  // }, []);

  return (
    <div id="skills" className="skills-section bg-transparent">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item"
              style={{
                backgroundColor: pastelColors[index % pastelColors.length],
              }}
            >
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
