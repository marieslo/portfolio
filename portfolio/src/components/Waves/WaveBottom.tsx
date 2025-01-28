import React from "react";
import "./Waves.scss";

type WaveBottomProps = {
  color?: string; 
};

export default function WaveBottom({ color = "var(--color1)" }: WaveBottomProps) {
  return (
    <div className="wave-bottom">
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color}
          fillOpacity="1"
          d="M0,256L60,245.3C120,235,240,213,360,186.7C480,160,600,128,720,138.7C840,149,960,203,1080,213.3C1200,224,1320,192,1380,176L1440,160V320H1380C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320H0Z"
        ></path>
      </svg>
    </div>
  );
}