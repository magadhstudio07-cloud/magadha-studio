import { useState, useRef, useEffect } from "react";

interface GridBackgroundProps {
  className?: string;
}

const GridBackground = ({ className = "" }: GridBackgroundProps) => {
  const [mouseX, setMouseX] = useState<number | null>(null);
  const [linePositions, setLinePositions] = useState<number[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const lineCount = 65;

  useEffect(() => {
    const updateLines = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        const gap = width / lineCount;
        const positions = Array.from({ length: lineCount }, (_, i) => i * gap);
        setLinePositions(positions);
      }
    };

    updateLines();
    window.addEventListener("resize", updateLines);
    return () => window.removeEventListener("resize", updateLines);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMouseX(e.clientX - rect.left);
    }
  };

  const handleMouseLeave = () => {
    setMouseX(null);
  };

  const getLineTransform = (basePosition: number) => {
    if (mouseX === null) return `translateX(${basePosition}px)`;

    const distance = mouseX - basePosition;
    const spreadRadius = 120;
    const maxSpread = 60;

    if (Math.abs(distance) < spreadRadius) {
      const spreadFactor = 1 - Math.abs(distance) / spreadRadius;
      const spread = spreadFactor * spreadFactor * maxSpread * Math.sign(distance) * -1;
      return `translateX(${basePosition + spread}px)`;
    }
    return `translateX(${basePosition}px)`;
  };

  return (
    <div
      ref={containerRef}
      className={`absolute z-[1] inset-0 ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {linePositions.map((pos, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-px bg-border"
          style={{
            opacity: 1,
            transition: "opacity 0.5s ease-in-out, transform 0.15s ease-out",
            willChange: "transform",
            transform: getLineTransform(pos),
          }}
        />
      ))}
    </div>
  );
};

export default GridBackground;
