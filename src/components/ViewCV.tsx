import React from 'react';

export default function ViewCV () {
  return (
    <section className="flex flex-col items-center space-y-4 py-4">
      <a
            href="/Marie_Slovokhotov_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-block px-6 py-3 text-color3 border border-color3 rounded-3xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:shadow-2xl"
            >
            <span className="absolute inset-0 w-full h-full bg-transparent transition-all"></span>
            <strong className="relative z-10 flex items-center gap-2">
                <span className="material-icons-outlined">open_in_new</span>
                View my CV
            </strong>
            </a>
    </section>
  );
};