import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <div
      className={`w-full flex items-end justify-between z-50 bg-transparent font-thin ${
        isDarkMode ? "text-light-text" : "text-dark-text"
      } font-bodytext text-xs tracking-tight px-6 py-1`}
    >
      <div className="flex flex-col space-y-1">
        <span>
          Icons provided by&nbsp;
          <a
            href="https://icons8.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Icons8
          </a>
        </span>

        <span>
          Badges powered by&nbsp;
          <a
            href="https://shields.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Shields.io
          </a>{" "}
          (CC0 License)
        </span>
      </div>
      <div className="flex flex-col sm:flex-row justify-end items-end">
        <span>&copy; {new Date().getFullYear()}&nbsp;</span>
        <span>Marie Slovokhotov</span>
      </div>
    </div>
  );
}