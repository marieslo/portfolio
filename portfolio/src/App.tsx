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

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Header />
        </header>

        <main>

        <h1>About Me</h1>
        <WaveTop />
          <section className="app-section aboutme-section">
            <CV />
          </section>
          <WaveBottom /> 
          <h1>Recent Projects</h1>
          <WaveTop />
          <section className="app-section projects-section">        
            <ScrollProjects projects={projects} />
          </section>
          <WaveBottom />
          <h1>Get in Touch</h1>
          <WaveTop />
          <section className="app-section contacts-section">
            <div className="contacts-container">
              <div className="social-media-container">
                <SocialMedia />
              </div>
            </div>
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