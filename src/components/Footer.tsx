import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <div
      className={`w-full flex items-end justify-between z-50 bg-transparent ${
        isDarkMode ?  "text-light-text" : "text-dark-text"
      } font-bodytext text-sm tracking-tight px-6 py-1`}
    >
      <div className="flex flex-col">
        <span>
        <div className="list-disc list-inside">
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
          <div className="list-disc list-inside">
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
          <div className="list-disc list-inside">
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
      <div className="flex flex-col sm:flex-row justify-end items-end">
        <span>&copy; 2022 - {new Date().getFullYear()}&nbsp;</span>
        <span>Marie Slovokhotov.&nbsp;</span>
        <span>All rights reserved</span>
      </div>
    </div>
  );
}
