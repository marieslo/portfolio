import React from 'react';
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        {/* <span>
          Icons by&nbsp;
          <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="icons-by-icons8">
            Icons8
          </a>
        </span> */}
        <span>
          &copy; {new Date().getFullYear()} Marie Slovokhotov
        </span>
      </div>
    </div>
  );
}