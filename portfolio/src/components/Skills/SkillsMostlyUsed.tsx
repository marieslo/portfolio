import React from "react";
import "./Skills.scss";


export default function SkillsMostlyUsed() {
  const skills = [
    { name: "JavaScript" },
    { name: "React"},
    { name: "Node.js"},
    { name: "MongoDB"},
    { name: "CSS"},
    { name: "Express"},
    { name: "TypeScript"},
  ];

  const pastelColors = ["#edede9","#d6ccc2","#f5ebe0"]


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