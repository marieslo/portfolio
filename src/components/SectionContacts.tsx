import React from "react";
import SocialMediaItem from "./SocialMediaItem";

type SectionContactsProps = {
  isDarkMode: boolean;
};

export default function SectionContacts({ isDarkMode }: SectionContactsProps) {
  const contactLinks1 = [
    { href: "https://github.com/marieslo", imgSrc: "https://img.icons8.com/color-glass/100/github--v1.png", alt: "GitHub", name: "GitHub" },
    { href: "https://codepen.io/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-duo-tal-revivo/50/external-codepen-an-online-community-for-testing-and-showcasing-code-snippets-logo-duo-tal-revivo.png", alt: "CodePen", name: "CodePen" },
  ];

  const contactLinks2 = [
    { href: "https://www.linkedin.com/in/marie-slovokhotov/", imgSrc: "https://img.icons8.com/fluency/96/linkedin.png", alt: "LinkedIn", name: "LinkedIn" },
    { href: "https://t.me/marieslo", imgSrc: "https://img.icons8.com/color/96/telegram-app--v1.png", alt: "Telegram", name: "Telegram" },
    { href: "mailto:maria.slovohotova@gmail.com", imgSrc: "https://img.icons8.com/color/96/gmail-new.png", alt: "Email", name: "Email" },
  ];

  return (
    <div className={`w-full mx-auto text-center bg-transparent ${isDarkMode ? "text-light-text" : "text-dark-text"}`}>
      
      <div className="mb-6 flex flex-col justify-center items-center">
        <h2 className="text-md font-header font-bold uppercase mb-3 border-b pb-2 text-color3">{`Take a look at my code`}</h2>
        <div className="flex justify-center items-center p-4 flex-wrap gap-4 rounded-3xl w-max">
          {contactLinks1.map(({ href, imgSrc, alt, name }, idx) => (
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
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-md font-header font-bold uppercase mb-3 border-b pb-2 text-color3">{`Let's be in touch`}</h2>
        <div className="flex justify-center items-center p-4 flex-wrap gap-4 rounded-3xl w-max">
          {contactLinks2.map(({ href, imgSrc, alt, name }, idx) => (
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
    </div>
  );
}