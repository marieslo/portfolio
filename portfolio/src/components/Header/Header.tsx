import React from 'react';
import "./Header.css";
import AboutMe from '../AboutMe/AboutMe';
import ButtonDarkMode from '../ButtonDarkMode/ButtonDarkMode';

export default function Header() {
  return (
    <div className="header-container">
      <ButtonDarkMode />   
      <div className='welcome-message'>Hi. I am Marie, Full-Stack Developer</div>
      <div className="about-me-container">About me</div>
      <AboutMe />
    </div>
  )
}