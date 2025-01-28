import React from "react";
import "./Waves.scss";

type WaveTopProps = {
    color?: string;
  };
  
  export default function WaveTop({ color = "var(--color1)" }: WaveTopProps) {
    return (
      <div className="wave-bottom">
        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            fill={color}
            fillOpacity="1"
            d="M0,128L60,117.3C120,107,240,85,360,69.3C480,53,600,43,720,74.7C840,107,960,181,1080,202.7C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  }