import React from "react";
import SkillItem from "./SkillItem";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsLessUsedProps {
  isDarkMode: boolean;
}

export default function SkillsLessUsed({ isDarkMode }: SkillsLessUsedProps) {
  const skillsLess: Skill[] = [
    { name: "Python", icon: "python" },
    { name: "SQL", icon: "mysql" },
    { name: "Docker", icon: "docker" },
  ];

  return (
    <div id="skills-less" className="skills-section bg-transparent">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className={`skills-grid flex flex-wrap justify-start gap-4 p-4`}>
          {skillsLess.map((skill, index) => (
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