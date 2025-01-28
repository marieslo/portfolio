import React from 'react';
import QRCode from "react-qr-code";

export default function ContactItem({ href, imgSrc, alt, hint }) {
  return (
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
}