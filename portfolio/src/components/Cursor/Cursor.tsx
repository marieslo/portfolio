import React, { useEffect, useState } from "react";
import "./Cursor.css";


export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // const letters = "* * * * * * * * * * * * * *".split("");

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      ></div>
      <div
        className="cursor-circle"
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      >
        {/* {letters.map((letter, index) => (
          <span
            key={index}
            style={{
              transform: `rotate(${(index / letters.length) * 360}deg) translate(70px) rotate(-${
                (index / letters.length) * 360
              }deg)`,
            }}
          >
            {letter}
          </span>
        ))} */}
      </div>
    </>
  );
}