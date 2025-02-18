import React from "react";

interface SkillItemProps {
  skill: string;
  isDarkMode: boolean;
}

export default function SkillItem({ skill, isDarkMode }: SkillItemProps) {
  const colorCode = isDarkMode ? "03071e" : "8d99ae";
  const badgeUrl = `https://img.shields.io/badge/${skill}-%23${colorCode}.svg?style=for-the-badge&logo=${skill.toLowerCase()}&logoColor=white`;

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
        <div
          className={`flex items-center gap-1 ${isDarkMode ? "text-light-text" : "text-dark-text"}`}
        >
          <img
            src={badgeUrl}
            className="text-sm"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
            alt={`${skill}`}
          />
        </div>
      </div>
    </div>
  );
}