import React from "react";
import SkillItem from "./SkillItem";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const skillsMostly: Skill[] = [
    { name: "JavaScript", icon: "javascript" },
    { name: "React", icon: "react" },
    { name: "Node.js", icon: "nodejs" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "CSS", icon: "css" },
    { name: "Express", icon: "express" },
    { name: "TypeScript", icon: "typescript" },
  ];

  return (
    <div id="skills-mostly" className="skills-section bg-transparent">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="skills-grid flex flex-wrap justify-start gap-4 p-4">
          {skillsMostly.map((skill, index) => (
            <SkillItem
              key={index}
              name={skill.name}
              skill={skill.icon}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}