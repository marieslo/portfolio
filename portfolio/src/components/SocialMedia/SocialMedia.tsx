import React from 'react'
import "./SocialMedia.css"; 

export default function SocialMedia() {
  return (
    <div className="flex justify-center space-x-8 mt-4">
      
      <a  href="https://github.com/marieslo" target="_blank" rel="noopener noreferrer" className="social-media">
        <img width="30" height="30" src="https://img.icons8.com/ios/ffffff/github.png" alt="github" />
      </a>
      <a href="https://linkedin.com/marie-slovokhotov" target="_blank" rel="noopener noreferrer" className="social-media">
        <img width="30" height="30" src="https://img.icons8.com/ios/ffffff/linkedin.png" alt="linkedin" />
      </a>
      <a href="https://t.me/marieslo" target="_blank" rel="noopener noreferrer" className="social-media">
        <img width="30" height="30" src="https://img.icons8.com/ios/ffffff/telegram.png" alt="telegram" />
      </a>
    </div>
  )
}