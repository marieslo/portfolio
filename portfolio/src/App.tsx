import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import projects from "./data/projects.json";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import ScrollProjects from "./components/ScrollProjects/ScrollProjects";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import WaveTop from "./components/Waves/WaveTop";
import WaveBottom from "./components/Waves/WaveBottom";
import DeveloperPlatforms from "./components/SocialMedia/DeveloperPlatforms";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Header />
        </header>
        <main>
          <WaveTop /> 
          <h1 className="app-section-heading pb-3">About Me</h1>
          <section className="app-section aboutme-section">
            <CV />
          </section>
          <WaveBottom />
          <WaveTop /> 
          <h1 className="app-section-heading pb-3">Recent Projects</h1>
          <section className="app-section projects-section">        
            <ScrollProjects projects={projects} />
          </section>
          <WaveBottom />
          <WaveTop />
          <section className="app-section contacts-section">
          <h1 className="pb-3">My Code Snippets</h1>
          <DeveloperPlatforms/>
           <h1 className="app-section-heading pt-3 pb-3">Connect with Me</h1>
           <SocialMedia />  
          </section>
          <WaveBottom /> 
        </main>
        <footer>
          <Footer />
        </footer>
        <Routes>
          <Route path="*" element={null} />
        </Routes>
      </div>
    </Router>
  );
}