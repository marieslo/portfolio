import React from "react";
import QRCode from "react-qr-code";

type SocialMediaItemProps = {
  href: string;
  imgSrc: string;
  alt: string;
  name: string;
  isDarkMode: boolean;
};

export default function SocialMediaItem({
  href,
  imgSrc,
  alt,
  name,
  isDarkMode,
}: SocialMediaItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={alt}
      className={`relative flex flex-col items-center justify-center p-2 border-2 box-border bg-opacity-20 backdrop-blur-3xl rounded-3xl font-bodytext bg-transparent ${isDarkMode ? "text-dark-text" : "text-light-text"} group transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg`}
    >
      <div className="contact-icon-container flex flex-row items-center justify-center mb-2">
        <div className="icon-wrapper flex flex-row items-center justify-center">
          <img
            className="contact-icon w-10 h-10"
            src={imgSrc}
            alt={alt}
          />
          <QRCode size={32} value={href} className="ml-2" />
        </div>
      </div>
      <span className={`text-xs font-bodytext uppercase mt-1 ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
        {name}
      </span>
    </a>
  );
}