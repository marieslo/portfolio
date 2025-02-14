import React from "react";

export default function SkillsMostlyUsed() {
  const skillsMostly = [
    { name: "JavaScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "MongoDB" },
    { name: "CSS" },
    { name: "Express" },
    { name: "TypeScript" },
  ];

  const pastelColors = ["#edede9", "#d6ccc2", "#f5ebe0"];

  return (
    <div id="skills-mostly" className="skills-section bg-transparent">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="skills-grid flex flex-wrap justify-start gap-4 p-4">
          {skillsMostly.map((skill, index) => (
            <div
              key={index}
              className="skill-item py-2 px-8 relative text-center font-sans text-gray-800 rounded-2xl shadow-lg flex items-center justify-center transition-transform ease-in-out duration-300"
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