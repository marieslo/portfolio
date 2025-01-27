import React from "react";
import './SocialMedia.scss';

const SocialMediaItem = ({ href, imgSrc, alt, hint }) => (
  <div className="social-media-item">
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      <div className="icon-wrapper" data-hint={hint}>
        <img className="social-icon" src={imgSrc} alt={alt} />
      </div>
    </a>
  </div>
);

export default function SocialMedia() {
  const socialLinks = [
    { href: "https://github.com/marieslo", imgSrc: "https://img.icons8.com/small/40/github.png", alt: "GitHub", hint: "GitHub" },
    { href: "https://codepen.io/marieslo", imgSrc: "https://img.icons8.com/external-those-icons-fill-those-icons/40/external-Codepen-social-media-those-icons-fill-those-icons.png", alt: "CodeOpen", hint: "CodePen" },
    { href: "https://linkedin.com/marie-slovokhotov", imgSrc: "https://img.icons8.com/small/40/linkedin.png", alt: "LinkedIn", hint: "LinkedIn" },
    { href: "https://t.me/marieslo", imgSrc: "https://img.icons8.com/ios-glyphs/40/telegram-app.png", alt: "Telegram", hint: "Telegram" },
    { href: "mailto:marieslo@example.com", imgSrc: "https://img.icons8.com/sf-regular/40/secured-letter.png", alt: "Email", hint: "Email" },
  ];

  return (
    <div className="social-media-container">
      {socialLinks.map(({ href, imgSrc, alt, hint }, idx) => (
        <SocialMediaItem key={idx} href={href} imgSrc={imgSrc} alt={alt} hint={hint} />
      ))}
    </div>
  );
}
