// src/components/ScrollProgressIndicator.tsx
import React, { useEffect, useState } from "react";
import "./scrollProgressIndicator.css";

interface ScrollProgressIndicatorProps {
  height?: string;
  color?: string;
}

const ScrollProgressIndicator: React.FC<ScrollProgressIndicatorProps> = ({
  height = "5px",
  color = "#4caf50",
}) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateScrollProgress = () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const totalHeight = scrollHeight - clientHeight;
    const progress = (scrollTop / totalHeight) * 100;
    setScrollProgress(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div
      className="scroll-progress-container"
      style={{ height: height, backgroundColor: "transparent" }}
    >
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%`, backgroundColor: color }}
      ></div>
    </div>
  );
};

export default ScrollProgressIndicator;
