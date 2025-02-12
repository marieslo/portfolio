import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../public/style.scss";

import projects from "./data/projects.json";

import Header from "./components/Header";
import Footer from "./components/Footer";
import CV from "./components/CV";
import ScrollProjects from "./components/ScrollProjects";
import WaveBottom from "./components/WaveBottom";
import DevPlatforms from "./components/DevPlatforms";
import SocialMedia from "./components/SocialMedia";
import WaveTop from "./components/WaveTop";


export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Header />
        </header>
        <main>
        <WaveTop color="#90a2d9" />
          <h1 className="app-section-heading pb-3">About Me</h1>
          <section className="app-section aboutme-section">
            <CV />
          </section>
          <WaveBottom color="#90a2d9" />
          <WaveTop color="#90a2d9" />
          <h1 className="app-section-heading pb-3">Recent Projects</h1>
          <section className="app-section projects-section">        
            <ScrollProjects projects={projects} />
          </section>
          <WaveBottom color="#90a2d9" />
          <WaveTop color="#90a2d9" />
          <section className="app-section contacts-section">
          <h1 className="pb-3">My Code Snippets</h1>
          <DevPlatforms/>
           <h1 className="app-section-heading pt-3 pb-3">Connect with Me</h1>
           <SocialMedia />  
          </section>
          <WaveBottom color="#90a2d9" />
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