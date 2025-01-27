import React from "react";
import "./Skills.scss";


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

  const pastelColors = ["#d5c5c8","#9da3a4","#604d53","#ffdbda"]


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