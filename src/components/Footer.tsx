import React from "react";

interface FooterProps {
  isDarkMode: boolean;
}

export default function Footer({ isDarkMode }: FooterProps) {
  return (
    <div
      className={`fixed bottom-0 right-0 w-full flex items-center justify-end z-50 ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-color-light text-color-dark"
      } border-b border-[#0000001a] shadow-lg backdrop-blur-md font-header font-light text-xs pr-5 tracking-tight overflow-hidden rounded-t-3xl`}
    >
      <span>
        &copy; 2018 - {new Date().getFullYear()} Marie Slovokhotov. All rights reserved
      </span>
    </div>
  );
}