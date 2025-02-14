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
      className={`relative flex flex-col items-center justify-center p-2 box-border bg-opacity-20 backdrop-blur-3xl rounded-3xl font-bodytext ${
        isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-dark-text"
      }`}
    >
      <div className="contact-icon-container flex flex-row items-center justify-center">
        <div className="icon-wrapper flex flex-row items-center justify-center">
          <img
            className="contact-icon w-14 h-14"
            src={imgSrc}
            alt={alt}
          />
          <QRCode size={50} value={href} className="ml-2" />
        </div>
      </div>
      <span className="text-sm font-light">{name}</span>
    </a>
  );
}