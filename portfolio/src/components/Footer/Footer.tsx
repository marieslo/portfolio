import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content ">
        <div>
        <span className='icons8'>
          Icons by&nbsp;
          <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="icons-by-icons8">
            Icons8
          </a>
        </span>
        </div>
        <div>
        <span>
          &copy; Marie Slovokhotov, 2024 - {new Date().getFullYear()} 
        </span>
        </div>
      </div>
    </div>
  );
}