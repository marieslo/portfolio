import React from 'react'
import './Waves.scss'

type WaveBottomProps = {
    color?: string; 
  };

export default function WaveBottom({ color = "var(--color1)" }: WaveBottomProps) {
  return (
     
       <div className="wave-top">
       <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
         <path
           fill={color}
           fillOpacity="1"
          d="M0,256L48,224C96,192,192,128,288,112C384,96,480,128,576,154.7C672,181,768,203,864,218.7C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
           ></path>
       </svg>
     </div>
    );
}