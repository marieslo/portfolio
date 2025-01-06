import React from 'react'
import "./AboutMe.css"; 
import SocialMedia from '../SocialMedia/SocialMedia';

export default function AboutMe() {
  return (
    <div>
    <section className="text-aboutme">
    Text about me Text about me Text about me\ 

    Text about me Text about me Text about me\

    Text about me Text about me Text about me\ 

    Text about me Text about me Text about me\

    Text about me Text about me Text about me\

    Text about me Text about me Text about me\

    </section>
            <div className="text-container mr-6">
                  <p>
                  <span
                      style={{
                        color: "green",
                        fontSize: "2rem", 
                        position: "relative",
                        zIndex: 10,
                      }}
                    >
                      🟢
                    </span>{" "}
                    Available to work
                    </p>
                    <SocialMedia/>
                  </div>
   
  </div>
  )
}
