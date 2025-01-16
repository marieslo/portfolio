import React, { useEffect, useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [matrixChars, setMatrixChars] = useState<number[]>([]);

  useEffect(() => {
    const generateMatrixChars = () => {
      let newChars: number[] = [];
      for (let i = 0; i < 100; i++) { 
        newChars.push(Math.floor(Math.random() * 2)); 
      }
      setMatrixChars(newChars);
    };

    generateMatrixChars();
    const interval = setInterval(generateMatrixChars, 120); // Update every 120 ms
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="matrix">
      {matrixChars.map((char, index) => {
        const randomLeft = Math.floor(Math.random() * 100); // Random left position (percentage)
        const randomTop = Math.floor(Math.random() * 100);  // Random top position (percentage)
        const animationDelay = Math.random() * 5; // Random delay for each character's animation

        return (
          <span
            key={index}
            style={{
              left: `${randomLeft}%`,
              top: `${randomTop}%`,
              animationDelay: `${animationDelay}s`,
            }}
          >
            {char}
          </span>
        );
      })}
    </div>
  );
};

export default Matrix;
