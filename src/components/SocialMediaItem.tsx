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
      className={`relative flex flex-col items-center justify-center p-2  box-border bg-opacity-20 backdrop-blur-3xl rounded-3xl font-bodytext bg-transparent ${isDarkMode ? "text-dark-text" : "text-light-text"} group transition-all duration-300 ease-in-out `}
    >
      <div className="contact-icon-container flex flex-row items-center justify-center">
        <div className="icon-wrapper flex flex-row items-center justify-center">
          <img
            className="contact-icon w-10 h-10"
            src={imgSrc}
            alt={alt}
          />
          <QRCode size={36} value={href} className="ml-1 ransition-transform duration-300 ease-in-out transform hover:scale-150 border-2 border-white rounded-sm" />
        </div>
      </div>
      <span className={`text-xs font-bodytext uppercase ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
        {name}
      </span>
    </a>
  );
}