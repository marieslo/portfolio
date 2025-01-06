import React from 'react'
import "./Header.css";
import AboutMe from '../AboutMe/AboutMe';
import SocialMedia from '../SocialMedia/SocialMedia';
import ButtonDarkMode from '../ButtonDarkMode/ButtonDarkMode';

export default function Header() {
   

  return (
    <div className="header-container">
        <ButtonDarkMode/>   
        <AboutMe/>
        <SocialMedia/>
    </div>
  )
}