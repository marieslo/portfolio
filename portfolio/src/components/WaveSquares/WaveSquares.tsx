import React, { useEffect, useRef, useState } from "react";
import "./WaveSquares.css";

declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
} 

export default function WaveSquares ()  {

  
 
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouseMoved = useRef<boolean>(false);
    const mouseMoveTimeout = useRef<NodeJS.Timeout | null>(null);
  
    const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
    const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);
  
    useEffect(() => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d");
  
      if (!ctx) return;
  
      const squareCount = 5; 
  
      interface Square {
        x: number;
        y: number;
        size: number;
        initialSize: number;
        rippleStartTime: number | null;
        color: string;
        angle: number;
        side: "left" | "right"; 
      }
  
      const squares: Square[] = [];
  
      const updateOffsets = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setCanvasWidth(window.innerWidth);
        setCanvasHeight(window.innerHeight);
      };
  
      const draw = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
  
        squares.forEach((square) => {
          ctx.beginPath();
  
          const distanceFromMouse = Math.sqrt(
            Math.pow(window.mouseX - square.x, 2) + Math.pow(window.mouseY - square.y, 2)
          );
  

          const sizeFactor = Math.exp(-distanceFromMouse / 100);
          square.size = square.initialSize * sizeFactor;
  
          ctx.fillStyle = square.color;
          ctx.fillRect(square.x - square.size / 2, square.y - square.size / 2, square.size, square.size);
        });
      };
  
      const handleMouseMove = (event: MouseEvent) => {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
  
        mouseMoved.current = true;
        window.mouseX = mouseX;
        window.mouseY = mouseY;
  
        if (mouseMoveTimeout.current) {
          clearTimeout(mouseMoveTimeout.current);
        }
  
        draw();
  
        mouseMoveTimeout.current = setTimeout(() => {
          mouseMoved.current = false;
        }, 100);
      };
  
      const handleMouseLeave = () => {
        squares.forEach((square) => {
          square.size = square.initialSize;
        });
        draw();
      };
  
      const animateRipple = () => {
        if (!mouseMoved.current) {
          return;
        }
        draw();
        requestAnimationFrame(animateRipple);
      };
  
      animateRipple();
  
      for (let i = 0; i < squareCount; i++) {
        squares.push({
          x: Math.random() * canvas.width, 
          y: Math.random() * canvas.height,
          size: 50,
          initialSize: 50,
          rippleStartTime: null,
          color: "#cccccc",
          angle: 0,
          side: i % 2 === 0 ? "left" : "right",
        });
      }
  
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("resize", updateOffsets);
  
      updateOffsets();
      draw();
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseleave", handleMouseLeave);
        window.removeEventListener("resize", updateOffsets);
      };
    }, [canvasWidth, canvasHeight]);
  
    return (
      <div className="wave-lines">
        <canvas ref={canvasRef} id="interactiveCanvas" />
      </div>
    );
  };

  