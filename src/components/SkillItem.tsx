import React from "react";

interface SkillItemProps {
  name: string;
  skill: string;
  isDarkMode: boolean;
}

export default function SkillItem({ skill, isDarkMode }: SkillItemProps) {
  return (
    <div
      className={`skill-item relative text-center font-subheader ${
        isDarkMode ? "text-dark-text" : "text-light-text"
      } flex items-center justify-start group rounded-md pr-2`}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="relative flex items-center justify-center w-full">
        <div className={`flex items-center gap-1 ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
          <img
            src={`https://skillicons.dev/icons?i=${skill}`}
            className="w-10 h-10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none"; 
            }}
          />
          <span className="text-base ml-1">{skill}
          </span>
        </div>
      </div>
    </div>
  );
}