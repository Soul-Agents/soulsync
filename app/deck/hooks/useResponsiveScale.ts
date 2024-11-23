import { useState, useEffect } from "react";

export function useResponsiveScale() {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const calculateScale = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      const widthScale = width / 1280;
      const heightScale = height / 720;
      return Math.max(Math.min(widthScale, heightScale, 1), 0.6);
    };

    const handleResize = () => {
      setScale(calculateScale());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return scale;
}
