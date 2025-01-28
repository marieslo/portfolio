import React from "react";
import './SocialMedia.scss';
import QRCode from "react-qr-code";


const SocialMediaItem = ({ href, imgSrc, alt, hint }) => (
  <div className="social-media-item">
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt}>
      
        <div className="social-icon-container">
        <div className="icon-wrapper" data-hint={hint}>
          <img className="social-icon" src={imgSrc} alt={alt} />
          <span className="hint">{hint}</span>
        </div>
        <div className="qr-code-wrapper">
          <QRCode size={50} value={href} />
        </div>
      </div>
    </a>
  </div>
);


export default function SocialMedia() {
  const socialLinks = [
    { href: "https://github.com/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-github-a-web-based-hosting-service-for-version-control-logo-tritone-tal-revivo.png", alt: "GitHub", hint: "GitHub" },
    { href: "https://codepen.io/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-codepen-an-online-community-for-testing-and-showcasing-code-snippets-logo-tritone-tal-revivo.png", alt: "CodePen", hint: "CodePen" },
    { href: "https://linkedin.com/marie-slovokhotov", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-linkedin-a-business-and-employment-oriented-service-mobile-app-logo-tritone-tal-revivo.png", alt: "LinkedIn", hint: "LinkedIn" },
    { href: "https://t.me/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-send-new-mail-button-email-tritone-tal-revivo.png", alt: "Telegram", hint: "Telegram" },
    { href: "mailto:maria.slovohotova@gmail.com", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-email-address-service-email-tritone-tal-revivo.png", alt: "Email", hint: "Email" },
  ];

  return (
    <div className="social-media-section">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="social-media-grid">
          {socialLinks.map(({ href, imgSrc, alt, hint }, idx) => (
            <SocialMediaItem key={idx} href={href} imgSrc={imgSrc} alt={alt} hint={hint} />
          ))}
        </div>
      </div>
    </div>
  );
}