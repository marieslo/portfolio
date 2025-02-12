import React from "react";
import ContactItem from "./ContactItem";

export default function SocialMedia() {
  const contactLinks = [
    { href: "https://www.linkedin.com/in/marie-slovokhotov/", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-linkedin-a-business-and-employment-oriented-service-mobile-app-logo-tritone-tal-revivo.png", alt: "LinkedIn", hint: "LinkedIn" },
    { href: "https://t.me/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-send-new-mail-button-email-tritone-tal-revivo.png", alt: "Telegram", hint: "Telegram" },
    { href: "mailto:maria.slovohotova@gmail.com", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-email-address-service-email-tritone-tal-revivo.png", alt: "Email", hint: "Email" },
  ];

  return (
    <div className="py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center">
          {contactLinks.map(({ href, imgSrc, alt, hint }, idx) => (
            <ContactItem key={idx} href={href} imgSrc={imgSrc} alt={alt} hint={hint} />
          ))}
        </div>
      </div>
    </div>
  );
}