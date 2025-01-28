import React from "react";
import './Footer.scss'
import CopyRight from "./CopyRight";

export default function Footer () {
  return (
    <div className="footer-container">
         <span className='icons8'>
          Icons by&nbsp;
          <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="icons-by-icons8">
            Icons8
          </a>
        </span>

   
     <CopyRight/>
    </div>
  );
};