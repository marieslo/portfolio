import React from 'react';
import "./AboutMe.css"; 
import SocialMedia from '../SocialMedia/SocialMedia';

export default function AboutMe() {
  return (
    <div className="container-aboutme">
      <section className="text-aboutme">
        <p className="aboutme-text">
          Text about me Text about me Text about me
        </p>
        <p className="aboutme-text">
          Text about me Text about me Text about me
        </p>
        <p className="aboutme-text">
          Text about me Text about me Text about me
        </p>
        <SocialMedia />
      </section>
    </div>
  );
}
