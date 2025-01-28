import React from 'react'
import './Waves.scss'

type WaveTopProps = {
    color?: string; 
  };

export default function WaveTop({ color = "var(--color1)" }: WaveTopProps) {
  return (
    <div className="wave-top">
    <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
      <path
        fill={color}
        fillOpacity="1"
       d="M0,192L80,176C160,160,320,128,480,117.3C640,107,800,117,960,133.3C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      ></path>
    </svg>
  </div>
    );
}