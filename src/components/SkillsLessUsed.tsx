import React from "react";

export default function SkillsLessUsed() {
  const skillsLess = [
    { name: "Python" },
    { name: "SQL" },
    { name: "Docker" },
  ];

  const pastelColors = ["#e3d5ca", "#d5bdaf"];

  return (
    <div id="skills-less" className="skills-section bg-transparent px-4 py-6">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="skills-grid flex flex-wrap justify-center gap-4">
          {skillsLess.map((skill, index) => (
            <div
              key={index}
              className="skill-item relative text-center font-sans text-gray-800 rounded-2xl shadow-lg flex items-center justify-center transition-transform ease-in-out duration-300"
              style={{
                backgroundColor: pastelColors[index % pastelColors.length],
              }}
            >
              <div className="skill-name text-sm font-light">{skill.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}