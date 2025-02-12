import React from "react";
import ContactItem from "./ContactItem";

export default function DevPlatforms() {
  const contactLinks = [
    { href: "https://github.com/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-github-a-web-based-hosting-service-for-version-control-logo-tritone-tal-revivo.png", alt: "GitHub", hint: "GitHub" },
    { href: "https://codepen.io/marieslo", imgSrc: "https://img.icons8.com/external-tal-revivo-tritone-tal-revivo/64/external-codepen-an-online-community-for-testing-and-showcasing-code-snippets-logo-tritone-tal-revivo.png", alt: "CodePen", hint: "CodePen" },
  ];

  return (
    <div className="contact-section py-8 px-4">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="contact-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactLinks.map(({ href, imgSrc, alt, hint }, idx) => (
            <ContactItem key={idx} href={href} imgSrc={imgSrc} alt={alt} hint={hint} />
          ))}
        </div>
      </div>
    </div>
  );
}