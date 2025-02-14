import React from "react";
import SocialMediaItem from "./SocialMediaItem";

type SocialMediaProps = {
  isDarkMode: boolean;
};

export default function SocialMedia({ isDarkMode }: SocialMediaProps) {
  const contactLinks = [
    { href: "https://github.com/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-github-a-web-based-hosting-service-for-version-control-logo-tritone-tal-revivo.png", alt: "GitHub", name: "GitHub" },
    { href: "https://codepen.io/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-codepen-an-online-community-for-testing-and-showcasing-code-snippets-logo-tritone-tal-revivo.png", alt: "CodePen", name: "CodePen" },
    { href: "https://www.linkedin.com/in/marie-slovokhotov/", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-linkedin-a-business-and-employment-oriented-service-mobile-app-logo-tritone-tal-revivo.png", alt: "LinkedIn", name: "LinkedIn" },
    { href: "https://t.me/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-send-new-mail-button-email-tritone-tal-revivo.png", alt: "Telegram", name: "Telegram" },
    { href: "mailto:maria.slovohotova@gmail.com", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-email-address-service-email-tritone-tal-revivo.png", alt: "Email", name: "Email" },
  ];

  return (
    <div className={`w-full mx-auto text-center ${isDarkMode ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 justify-center items-center">
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