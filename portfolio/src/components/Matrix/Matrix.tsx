import React, { useEffect, useState } from "react";
import "./Matrix.css";

const Matrix = () => {
  const [matrixChars, setMatrixChars] = useState<number[]>([]);

  useEffect(() => {
    const generateMatrixChars = () => {
      let newChars: number[] = [];
      for (let i = 0; i < 200; i++) { 
        newChars.push(Math.floor(Math.random() * 2)); 
      }
      setMatrixChars(newChars);
    };

    generateMatrixChars();
    const interval = setInterval(generateMatrixChars, 200); 
    return () => clearInterval(interval); 
  }, []);

  return (
    <div className="matrix">
      {matrixChars.map((char, index) => {
        const column = index % 10;  
        const randomTop = Math.floor(Math.random() * 100);  
        const animationDelay = Math.random() * 5; 

        return (
          <span
            key={index}
            style={{
              left: `${(column * 10)}%`, 
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
