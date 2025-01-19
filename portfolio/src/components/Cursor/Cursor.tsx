import React, { useEffect, useState } from "react";
import "./Cursor.css";

export default function Cursor() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [tailPosition, setTailPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });

      setTailPosition({
        x: e.clientX - 4, 
        y: e.clientY - 8, 
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-dot fixed w-2 h-2 rounded-full transition-all duration-100"
        style={{
          transform: `translate3d(${cursorPosition.x}px, ${cursorPosition.y}px, 0)`,
        }}
      >
        
      </div>
         <div
        className="cursor-tail fixed w-1 h-1 rounded-full transition-all duration-100"
        style={{
          transform: `translate3d(${tailPosition.x}px, ${tailPosition.y}px, 0)`,
        }}
      >

      </div>
    </>
  );
}