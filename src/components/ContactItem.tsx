import React from "react";
import QRCode from "react-qr-code";

export default function ContactItem({ href, imgSrc, alt, hint }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className="relative flex flex-wrap justify-center items-center p-4 box-border rounded-full w-44 h-44 bg-white bg-opacity-30 backdrop-blur-lg hover:bg-opacity-50 hover:shadow-lg transition-all duration-300 hover:transform hover:rotate-[10deg] hover:bg-white/50 hover:opacity-90"
    >
      <div className="contact-icon-container flex items-center justify-center">
        <div className="icon-wrapper flex flex-col items-center justify-center" data-hint={hint}>
          <img
            className="contact-icon w-10 h-10 object-contain"
            src={imgSrc}
            alt={alt}
          />
          <span className="hint text-xs font-semibold text-gray-700 uppercase">{hint}</span>
        </div>
        <div className="qr-code-wrapper bg-blue-200 border border-white p-1">
          <QRCode size={50} value={href} />
        </div>
      </div>
    </a>
  );
}
