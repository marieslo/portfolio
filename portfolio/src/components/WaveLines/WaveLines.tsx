import React, { useEffect, useRef, useState } from "react";
import './WaveLines.css'

declare global {
  interface Window {
    mouseX: number;
    mouseY: number;
  }
}

const WaveLines = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseMoved = useRef<boolean>(false);
  const mouseMoveTimeout = useRef<NodeJS.Timeout | null>(null);
  
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    const lineCount = 3; 

    interface Line {
      x: number;
      offset: number;
      amplitude: number;
      initialX: number;
      rippleStartTime: number | null;
      waveColor: string;
      angle: number;
      side: "left" | "right"; 
      yPosition: number; 
    }

    const lines: Line[] = [];

    const updateOffsets = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      setCanvasWidth(window.innerWidth);
      setCanvasHeight(window.innerHeight);
    };

    const lineSpacing = canvasHeight / lineCount;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      lines.forEach((line) => {
        ctx.beginPath();

        const gradient = ctx.createLinearGradient(
          line.x,
          0,
          line.x,
          canvas.height
        );
        gradient.addColorStop(0, line.waveColor);
        gradient.addColorStop(1, "#b59afe");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1 + line.amplitude / 80;

        for (let y = 0; y < canvas.height; y++) {
          const distanceFromMouse = Math.abs(y - (mouseMoved.current ? window.mouseY : 0));
          const waveFactor = Math.exp(-distanceFromMouse / 100);
          const wave = Math.sin(y * 0.1 + line.offset) * line.amplitude * waveFactor;
          const x = line.x + wave;

          if (y === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
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

      lines.forEach((line) => {
        if (Math.abs(mouseX - line.x) < 100) {
          line.amplitude = 20;
          line.offset += 0.1;
          line.angle = 0;
        } else {
          line.amplitude = 0;
        }
      });

      draw();

      mouseMoveTimeout.current = setTimeout(() => {
        mouseMoved.current = false;
      }, 100);
    };

    const handleMouseLeave = () => {
      lines.forEach((line) => {
        line.amplitude = 0;
        line.offset = 0;
        line.rippleStartTime = null;
        canvas.height = window.innerHeight;
      });
      draw();
    };

    const animateRipple = () => {
      if (!mouseMoved.current) {
        return;
      }

      lines.forEach((line) => {
        line.offset += 0.1;
        line.amplitude = Math.max(0, line.amplitude - 0.05);
        if (line.amplitude <= 0) {
          line.rippleStartTime = null;
        }
      });
      draw();
      requestAnimationFrame(animateRipple);
    };

    animateRipple();


    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: i % 2 === 0 ? canvas.width * 0.05 : canvas.width * 0.95, 
        offset: 0,
        amplitude: 0,
        initialX: i % 2 === 0 ? canvas.width * 0.05 : canvas.width * 0.95,
        rippleStartTime: null,
        waveColor: "#2ec4b6",
        angle: 0,
        side: i % 2 === 0 ? "left" : "right",
        yPosition: i * lineSpacing + lineSpacing / 2, 
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

export default WaveLines;