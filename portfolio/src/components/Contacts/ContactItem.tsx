import React from 'react';
import QRCode from "react-qr-code";
import './Contacts.scss';

export default function ContactItem({ href, imgSrc, alt, hint }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={alt} className="contact-item">
      <div className="contact-icon-container">
        <div className="icon-wrapper" data-hint={hint}>
          <img className="contact-icon" src={imgSrc} alt={alt} />
          <span className="hint">{hint}</span>
        </div>
        <div className="qr-code-wrapper">
          <QRCode size={50} value={href} />
        </div>
      </div>
    </a>
  );
}
