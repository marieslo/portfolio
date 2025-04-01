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
  const skillsMostly: { name: string; icon: string }[] = [
    // Frontend Skills
    { name: "JavaScript", icon: "javascript" },
    { name: "TypeScript", icon: "typescript" },
    { name: "React", icon: "react" },
    { name: "Vue", icon: "vue" },
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "SCSS", icon: "scss" },
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
  
    // Backend & Databases
    { name: "Node.js", icon: "nodejs" },
    { name: "Express", icon: "express" },
    { name: "Python", icon: "python" },
    { name: "Django", icon: "django" },
    { name: "MongoDB", icon: "mongodb" },
    { name: "MySQL", icon: "mysql" },
    { name: "PostgreSQL", icon: "postgres" },
    { name: "SQLite", icon: "sqlite" },
  
    // Testing & DevOps
    { name: "Vite", icon: "vite" },
    { name: "Webpack", icon: "webpack" },
    { name: "Jest", icon: "jest" },
    { name: "Cypress", icon: "cypress" },
    { name: "AWS", icon: "aws" },
    { name: "Heroku", icon: "heroku" },
    { name: "Vercel", icon: "vercel" },
    { name: "Docker", icon: "docker" },
  
    // Version Control & Tools
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "Bitbucket", icon: "bitbucket" },
    { name: "GitLab", icon: "gitlab" },
    { name: "Bash", icon: "bash" },
    { name: "Babel", icon: "babel" },
    { name: "Postman", icon: "postman" }
  ];
  

  return (
    <div id="skills-mostly" className="skills-section bg-transparent">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="skills-grid flex flex-wrap justify-start gap-2 p-4">
          {skillsMostly.map((skill, index) => (
            <SkillItem
              key={index}
              skill={skill.icon}
              isDarkMode={isDarkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}