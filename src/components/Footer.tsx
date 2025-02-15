import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <div
      className={`fixed bottom-0 w-full flex items-end justify-between z-50 bg-transparent ${
        isDarkMode ?  "text-light-text" : "text-dark-text"
      } bg-opacity-30 backdrop-blur-md font-header text-xs font-thin tracking-tight px-6 py-1 shadow-[0_-4px_6px_0_rgba(0,0,0,0.3)]`}
    >
      <div className="flex flex-col">
        <span>
        <div className="list-disc list-inside pl-5">
          Icons provided by: &nbsp;&nbsp;
            <span>
              <a
                href="https://icons8.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Icons8,&nbsp;
              </a>
            </span>
          </div>
        </span>

        <span>
          <div className="list-disc list-inside pl-5">
            <span>
              <a
                href="https://skillicons.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Skillicons
              </a>{" "}
              (MIT License),&nbsp;
            </span>
          </div>
        </span>

        <span>
          <div className="list-disc list-inside pl-5">
            <span>
              <a
                href="https://fonts.google.com/icons"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
              >
                Google
              </a>{" "}
              (Apache License 2.0)&nbsp;
            </span>
          </div>
        </span>
      </div>
      <div className="flex flex-col sm:flex-row">
        <span>&copy; 2018 - {new Date().getFullYear()}&nbsp;</span>
        <span>Marie Slovokhotov.&nbsp;</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
}
