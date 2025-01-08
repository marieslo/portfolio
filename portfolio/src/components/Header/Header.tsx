import React from 'react';
import "./Header.css";
import AboutMe from '../AboutMe/AboutMe';
import ButtonDarkMode from '../ButtonDarkMode/ButtonDarkMode';

export default function Header() {
  return (
    <div className="header-container">
      <ButtonDarkMode />   
      <AboutMe />
      <div className="about-me-container">About me</div>
    </div>
  )
}