import React from "react";
import SocialMediaItem from "./SocialMediaItem";

type SectionContactsProps = {
  isDarkMode: boolean;
};

export default function SectionContacts({ isDarkMode }: SectionContactsProps) {
  const contactLinks = [
    { href: "https://github.com/marieslo", imgSrc: "https://img.icons8.com/ios-filled/4895ef/50/github.png", alt: "GitHub", name: "GitHub" },
    { href: "https://www.linkedin.com/in/marie-slovokhotov/", imgSrc: "https://img.icons8.com/ios-filled/4895ef/50/linkedin.png", alt: "LinkedIn", name: "LinkedIn" },
    { href: "https://t.me/marieslo", imgSrc: "https://img.icons8.com/ios-filled/4895ef/50/telegram.png", alt: "Telegram", name: "Telegram" },
    { href: "mailto:maria.slovohotova@gmail.com", imgSrc: "https://img.icons8.com/ios-filled/4895ef/50/apple-mail.png", alt: "Email", name: "Email" },
  ];

  return (
    <div className={`w-full mx-auto text-center bg-transparent ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
      <div className="mb-6 flex flex-col justify-center items-center">
      </div>
      <div className="flex justify-center items-center p-4 flex-wrap gap-6 w-full">
        {contactLinks.map(({ href, imgSrc, alt, name }, idx) => (
          <SocialMediaItem
            key={idx}
            href={href}
            imgSrc={imgSrc}
            alt={alt}
            name={name}
            isDarkMode={isDarkMode}
          />
        ))}
      </div>
    </div>
  );
}