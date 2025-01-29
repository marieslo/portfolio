import React from "react";
import "./Skills.scss";


export default function SkillsLessUsed() {
  const skills = [
    { name: "Python"},
    { name: "SQL"},
    { name: "Docker"},
  ];

  const pastelColors = ["#e3d5ca","#d5bdaf"]


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