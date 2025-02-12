import React from "react";

export default function Footer() {
  return (
    <div className="sticky bottom-0 right-0 z-30 flex items-center justify-between bg-[#efd9ba] text-center font-header font-light text-sm tracking-tight overflow-hidden w-full p-2.5 backdrop-blur-xl">
      <span className="text-[#874524]">
        Icons by&nbsp;
        <a
          href="https://icons8.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#874524] hover:text-[#874524] hover:underline transition-colors duration-300"
        >
          Icons8
        </a>
      </span>
      <span className="text-[#874524]">
        &copy; 2023 - {new Date().getFullYear()} Marie Slovokhotov
      </span>
    </div>
  );
}