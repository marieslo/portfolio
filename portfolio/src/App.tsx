import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";

import projects from "./data/projects.json";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import CV from "./components/CV/CV";
import ScrollProjects from "./components/ScrollProjects/ScrollProjects";
import SocialMedia from "./components/SocialMedia/SocialMedia";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <Header />
        </header>

        <main>
        <h1 className="text-lg md:text-xl font-semibold2 mt-4">About Me</h1>
          <section className="app-section aboutme-section my-1">
        
            <CV />
          </section>
          <h1 className="text-lg md:text-xl font-semibold2 mt-4">Recent Projects</h1>
          <section className="app-section projects-section my-1">
            
           
            <ScrollProjects projects={projects} />
          </section>
          <h1 className="text-lg md:text-xl font-semibold2 mt-4">Get in Touch</h1>
          <section className="app-section contacts-section my-1">
  <div className="contacts-container">
    <div className="social-media-container">
      <SocialMedia />
    </div>

  </div>
</section>

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
