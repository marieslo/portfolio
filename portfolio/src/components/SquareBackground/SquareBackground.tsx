import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './SquareBackground.css';

export default function SquareBackground() {
  const [squareCount, setSquareCount] = useState(0);
  const squaresRef = useRef<(HTMLDivElement | null)[]>([]);

  const calculateSquares = () => {
    const squareSize = 16; 
    const screenWidth = window.innerWidth; 
    const cols = Math.ceil(screenWidth / squareSize); 
    setSquareCount(cols);
  };

  useEffect(() => {
    calculateSquares();
    window.addEventListener('resize', calculateSquares);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      squaresRef.current.forEach((square) => {
        if (square) {
          const rect = square.getBoundingClientRect();
          const dx = clientX - (rect.left + rect.width / 2);
          const dy = clientY - (rect.top + rect.height / 2);
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = Math.max(window.innerWidth, window.innerHeight);
          const scale = 1 - Math.min(distance / maxDistance, 0.5);
          const rotation = (distance / maxDistance) * 10;

          gsap.to(square, {
            scale,
            rotation,
            duration: 0.02,
            ease: 'power2.out',
          });
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', calculateSquares);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);


  const squares = Array.from({ length: squareCount }, (_, index) => (
    <div
      key={index}
      className="square"
      ref={(el) => (squaresRef.current[index] = el)}
    />
  ));

  return <div className="bg-squares">{squares}</div>;
}