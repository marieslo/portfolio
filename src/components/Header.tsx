import React from "react";

export default function Header() {
  return (
    <div className="fixed flex flex-wrap items-center justify-around top-0 left-0 z-50 bg-white/30 w-full border-b border-[#0000001a] shadow-lg backdrop-blur-md font-header font-light text-base tracking-tight overflow-hidden rounded-b-2xl">
      <div className="flex gap-4 flex-wrap items-center justify-around text-center uppercase leading-4 py-6 px-2">
        <div className="text-3xl font-extrabold text-[#874524]">Marie Slovokhotov</div>
        <div className="text-xl font-thin text-[#874524]">Full Stack Developer</div>
      </div>
    </div>
  );
}