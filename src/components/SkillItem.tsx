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
      } flex items-center justify-start pr-2 rounded-xl bg-opacity-30 backdrop-blur-md font-bodytext`}
      style={{
        backgroundColor: "transparent",
      }}
    >
      <div className="relative flex items-center justify-center w-max">
        <div className={`flex items-center gap-1 ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
          <img
            src={`https://skillicons.dev/icons?i=${skill}`}
            className="w-10 h-10"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none"; 
            }}
          />
          <span
            className={`text-sm ml-1 text-color1`}
          >
            {skill}
          </span>
        </div>
      </div>
    </div>
  );
}