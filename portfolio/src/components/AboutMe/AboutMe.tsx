import React, { useEffect, useState } from "react";
import "./AboutMe.css";

export default function AboutMe() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="about-me-container" id="about-me">
      <div className="about-me__content-wrapper">
      <span className="about-me__photo-wrapper">
            <div className="about-me__photo-container">
              <div className="about-me__photo-border"></div>
              <div className="about-me__photo">
                <img
                  src="/images/Marie's photo.png"
                  alt="My photo"
                  className="about-me__image"
                />
              </div>
            </div>
          </span>
        <div className="about-me__text blurred-text">
         
          
          {[
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Text about me. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          ].map((line, index) => (
            <span
              className="about-me__line"
              data-line={index % 2 === 0 ? "right" : "left"} // Odd lines move left, even lines move right
              key={index}
              style={{
                transform: `translateX(${
                  scrollY > 0
                    ? index % 2 === 0
                      ? scrollY * 0.5 // Even lines (right)
                      : -scrollY * 0.5 // Odd lines (left)
                    : 0
                }px)`,
                // opacity: scrollY > 0 ? 1 - scrollY * 0.001 : 1,
              }}
            >
              {line}
            </span>
          ))}
         
        </div>
      </div>
    </div>
  );
}