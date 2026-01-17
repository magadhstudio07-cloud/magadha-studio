import { useState, useRef } from "react";
import { motion } from "framer-motion";

interface GridBackgroundProps {
  className?: string;
}

const GridBackground = ({ className = "" }: GridBackgroundProps) => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const lineCount = 24;
  const lines = Array.from({ length: lineCount }, (_, i) => i);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    }
  };

  const handleMouseLeave = () => {
    setMouseX(null);
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-auto ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {lines.map((i) => {
        const basePosition = ((i + 1) / (lineCount + 1)) * 100;
        
        return (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px bg-border"
            style={{ left: `${basePosition}%` }}
            animate={{
              left: mouseX !== null
                ? (() => {
                    const containerWidth = containerRef.current?.offsetWidth || 1;
                    const linePos = (basePosition / 100) * containerWidth;
                    const distance = mouseX - linePos;
                    const maxSpread = 80;
                    const spreadRadius = 150;
                    
                    if (Math.abs(distance) < spreadRadius) {
                      const spreadFactor = 1 - Math.abs(distance) / spreadRadius;
                      const spread = spreadFactor * spreadFactor * maxSpread * Math.sign(distance) * -1;
                      return `calc(${basePosition}% + ${spread}px)`;
                    }
                    return `${basePosition}%`;
                  })()
                : `${basePosition}%`,
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          />
        );
      })}
    </div>
  );
};

export default GridBackground;
