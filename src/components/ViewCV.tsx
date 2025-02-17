import React from 'react';

export default function ViewCV () {
  return (
    <section className="flex flex-col items-center space-y-4 py-4">
      <a
            href="/Marie_Slovokhotov_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block text-color3 overflow-hidden group transition-all duration-300 transform hover:underline font-subheader font-semibold text-base"
            >
            <span className="absolute inset-0 w-full h-full bg-transparent transition-all"></span>
            <strong className="relative z-10 flex items-center gap-2">
            View full CV<span className="material-icons-outlined">description</span>
            </strong>
            </a>
    </section>
  );
};