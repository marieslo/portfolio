import React from "react";
import QRCode from "react-qr-code";
import './SocialMedia.css'

export default function SocialMedia() {
  return (
    <div className="flex justify-center space-x-8 mt-4">
      
      <div className="social-media">
      <a href="https://github.com/marieslo" target="_blank" rel="noopener noreferrer">
        <div className="qr-code-wrapper">
            <div className="icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/45/github.png"
                alt="GitHub"
                className="qr-icon"
                style={{ filter: 'brightness(0) invert(1)' }} 
              />
            </div>
            <QRCode value="https://github.com/marieslo" size={50} />
        </div>
        </a>
      </div>

      <div className="social-media">
          <a href="https://linkedin.com/marie-slovokhotov" target="_blank" rel="noopener noreferrer">
          <div className="qr-code-wrapper">
            <div className="icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/45/linkedin.png"
                alt="LinkedIn"
                className="qr-icon"
                style={{ filter: 'brightness(0) invert(1)' }} 
              />
            </div>
            <QRCode value="https://linkedin.com/marie-slovokhotov" size={50} />
        </div>
        </a>
      </div>

      <div className="social-media">
          <a href="https://t.me/marieslo" target="_blank" rel="noopener noreferrer"> 
          <div className="qr-code-wrapper">
            <div className="icon-wrapper">
              <img
                src="https://img.icons8.com/ios-filled/45/telegram-app.png"
                alt="Telegram"
                className="qr-icon"
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </div>
            <QRCode value="https://t.me/marieslo" size={50} />
            </div>
          </a>
      </div>

    </div>
  );
}
